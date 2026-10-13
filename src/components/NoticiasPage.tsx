import { useState, useEffect } from 'react';
import { ArrowLeft, Calendar, User, Clock, ChevronRight, Search, X, ChevronLeft, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { NewsItem, ContentBlock } from '../data/news';
import { supabase } from '../lib/supabase';
import { NewsCard } from './NewsCard';
import { ShareButtons } from './ShareButtons';
import { PhotoGallery } from './PhotoGallery';

function calculateReadingTime(content: string | ContentBlock[]): number {
  const wordsPerMinute = 200;
  let text = '';
  if (typeof content === 'string') {
    text = content;
  } else {
    text = content
      .filter(block => block.type === 'text')
      .map(block => block.content)
      .join(' ');
  }
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

function getRelatedNews(currentNews: NewsItem, allNews: NewsItem[], limit: number = 3): NewsItem[] {
  const stopWords = new Set([
    'a', 'o', 'e', 'de', 'da', 'do', 'em', 'para', 'com', 'por', 'um', 'uma',
    'os', 'as', 'dos', 'das', 'no', 'na', 'nos', 'nas', 'ao', 'à', 'aos', 'às',
    'pelo', 'pela', 'pelos', 'pelas', 'este', 'esta', 'estes', 'estas', 'esse',
    'essa', 'esses', 'essas', 'aquele', 'aquela', 'aqueles', 'aquelas', 'seu',
    'sua', 'seus', 'suas', 'que', 'qual', 'quais', 'quando', 'onde', 'como'
  ]);

  const getKeywords = (text: string): Set<string> => {
    return new Set(
      text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .split(/\W+/)
        .filter(word => word.length > 3 && !stopWords.has(word))
    );
  };

  const currentKeywords = new Set([
    ...getKeywords(currentNews.title),
    ...getKeywords(currentNews.excerpt)
  ]);

  const newsWithScore = allNews
    .filter(news => news.id !== currentNews.id)
    .map(news => {
      const newsKeywords = new Set([
        ...getKeywords(news.title),
        ...getKeywords(news.excerpt)
      ]);

      let matchCount = 0;
      currentKeywords.forEach(keyword => {
        if (newsKeywords.has(keyword)) matchCount++;
      });

      const categoryBonus = news.category === currentNews.category ? 2 : 0;
      return {
        news,
        score: matchCount + categoryBonus,
        date: new Date(news.date).getTime()
      };
    });

  newsWithScore.sort((a, b) => {
    if (a.score !== b.score) return b.score - a.score;
    return b.date - a.date;
  });

  const related = newsWithScore.filter(item => item.score > 0);
  if (related.length >= limit) {
    return related.slice(0, limit).map(item => item.news);
  }
  return newsWithScore.slice(0, limit).map(item => item.news);
}

interface NoticiasPageProps {
  onNavigate: (page: string, newsId?: number) => void;
  initialNewsId?: number | null;
}

export function NoticiasPage({ onNavigate, initialNewsId }: NoticiasPageProps) {
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>('Todas');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allNews, setAllNews] = useState<NewsItem[]>([]);
  const newsPerPage = 6;

  useEffect(() => {
    supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false })
      .then(({ data }) => {
        if (data) setAllNews(data.map(r => ({
          id: r.id, title: r.title, excerpt: r.excerpt,
          content: r.content, image: r.image, date: r.date,
          category: r.category, featured: r.featured,
          author: r.author, readingTime: r.reading_time,
          photoAlbum: r.photo_album,
        })));
      });
  }, []);

  useEffect(() => {
    if (initialNewsId) {
      const news = allNews.find(item => item.id === initialNewsId);
      if (news) {
        setSelectedNews(news);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [initialNewsId, allNews]);

  useEffect(() => {
    if (selectedNews) {
      document.title = `${selectedNews.title} | TECGEO`;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute('content', selectedNews.excerpt);
    } else {
      document.title = 'Notícias | TECGEO - Engenharia e Regularização';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) metaDescription.setAttribute('content', 'Novidades e análises sobre regularização rural, legislação agrária e ambiental em Goiás.');
    }
  }, [selectedNews]);

  useEffect(() => {
    if (selectedNews) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [selectedNews]);

  const categories = ['Todas', ...Array.from(new Set(allNews.map(item => item.category)))];

  const filteredNews = allNews.filter(item => {
    const matchesCategory = selectedCategory === 'Todas' || item.category === selectedCategory;
    const matchesSearch = searchTerm === '' || 
      item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  const totalPages = Math.ceil(filteredNews.length / newsPerPage);
  const paginatedNews = filteredNews.slice((currentPage - 1) * newsPerPage, currentPage * newsPerPage);

  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;
    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) pages.push(i);
    } else {
      pages.push(1);
      if (currentPage > 3) pages.push('...');
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      for (let i = start; i <= end; i++) pages.push(i);
      if (currentPage < totalPages - 2) pages.push('...');
      pages.push(totalPages);
    }
    return pages;
  };

  // Visualização de Artigo Individual
  if (selectedNews) {
    const formattedDate = new Date(selectedNews.date).toLocaleDateString('pt-BR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
    const readingTime = calculateReadingTime(selectedNews.content);

    return (
      <div className="bg-white text-slate-900 min-h-screen">
        {/* Barra Superior / Breadcrumb */}
        <section className="bg-slate-900 text-white py-6 border-b border-slate-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <button
              onClick={() => setSelectedNews(null)}
              className="inline-flex items-center gap-2 text-slate-300 hover:text-white transition-colors text-xs uppercase tracking-wider mb-3"
            >
              <ArrowLeft size={14} />
              Voltar ao índice de notícias
            </button>
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <span>Notícias</span>
              <ChevronRight size={12} />
              <span className="text-[#1EB53A] font-semibold">{selectedNews.category}</span>
            </div>
          </div>
        </section>

        {/* Artigo */}
        <article className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Header Editorial */}
            <div className="mb-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-3">
                {selectedNews.category}
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-[#001B80] leading-tight mb-4">
                {selectedNews.title}
              </h1>

              <div className="flex flex-wrap items-center gap-4 text-xs text-slate-500 border-y border-slate-200 py-3 mt-4">
                <span className="flex items-center gap-1.5">
                  <Calendar size={13} className="text-[#1EB53A]" />
                  {formattedDate}
                </span>
                {selectedNews.author && (
                  <span className="flex items-center gap-1.5">
                    <User size={13} className="text-[#1EB53A]" />
                    {selectedNews.author}
                  </span>
                )}
                {readingTime && (
                  <span className="flex items-center gap-1.5">
                    <Clock size={13} className="text-[#1EB53A]" />
                    {readingTime} min de leitura
                  </span>
                )}
              </div>
            </div>

            {/* Imagem de Capa */}
            <div className="aspect-[16/9] overflow-hidden mb-10 bg-slate-100 border border-slate-200">
              <img
                src={selectedNews.image}
                alt={selectedNews.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Resumo / Lide */}
            <div className="border-l-2 border-[#1EB53A] pl-5 py-2 mb-10 bg-slate-50">
              <p className="text-base sm:text-lg text-slate-800 leading-relaxed font-medium">
                {selectedNews.excerpt}
              </p>
            </div>

            {/* Conteúdo do Artigo */}
            <div className="text-slate-700 leading-relaxed space-y-6 text-base">
              {typeof selectedNews.content === 'string' ? (
                selectedNews.content.split('\n\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))
              ) : (
                selectedNews.content.map((block, index) => {
                  if (block.type === 'text') {
                    return <p key={index}>{block.content}</p>;
                  } else if (block.type === 'image') {
                    return (
                      <figure key={index} className="my-8 border border-slate-200 p-2 bg-slate-50">
                        <img
                          src={block.content}
                          alt={block.alt || 'Imagem do artigo'}
                          className="w-full h-auto object-cover"
                        />
                        {block.caption && (
                          <figcaption className="text-xs text-slate-500 mt-2 text-center italic">
                            {block.caption}
                          </figcaption>
                        )}
                      </figure>
                    );
                  }
                  return null;
                })
              )}
            </div>

            {/* Galeria de Fotos se houver */}
            {selectedNews.photoAlbum && selectedNews.photoAlbum.length > 0 && (
              <div className="mt-12 pt-8 border-t border-slate-200">
                <h3 className="text-lg font-bold text-[#001B80] mb-4">Galeria de Fotos</h3>
                <PhotoGallery photos={selectedNews.photoAlbum} />
              </div>
            )}

            {/* Compartilhamento */}
            <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Compartilhar esta matéria
              </span>
              <ShareButtons
                title={selectedNews.title}
                url={window.location.href}
                description={selectedNews.excerpt}
              />
            </div>

            {/* Matérias Relacionadas */}
            <div className="mt-16 pt-12 border-t-2 border-slate-200">
              <div className="mb-6">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-1">
                  Recomendadas
                </span>
                <h3 className="text-xl font-bold text-[#001B80]">Continue Lendo</h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {getRelatedNews(selectedNews, allNews).map((news) => (
                  <NewsCard
                    key={news.id}
                    title={news.title}
                    excerpt={news.excerpt}
                    image={news.image}
                    date={news.date}
                    category={news.category}
                    onClick={() => setSelectedNews(news)}
                  />
                ))}
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  }

  // Visualização de Lista Principal de Notícias
  return (
    <div className="bg-white text-slate-900 min-h-screen">
      {/* Hero Institucional */}
      <section className="bg-[#001B80] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-3">
              Comunicação & Conteúdo Técnico
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              Notícias e Atualizações do Setor
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Acompanhe novidades, prazos normativos do INCRA e SEMAD, inovações tecnológicas e análises sobre regularização fundiária e ambiental em Goiás.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros e Busca - Sóbrios e Alinhados */}
      <section className="py-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            {/* Categorias como abas de texto */}
            <div className="flex flex-wrap items-center gap-1">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3 py-1.5 text-xs font-semibold uppercase tracking-wider rounded transition-colors ${
                    selectedCategory === category
                      ? 'bg-[#001B80] text-white'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Campo de Busca Minimalista */}
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Buscar notícias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-9 pr-8 py-2 bg-white border border-slate-300 rounded text-xs text-slate-900 focus:border-[#001B80] focus:outline-none"
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                >
                  <X size={14} />
                </button>
              )}
            </div>
          </div>

          {(searchTerm || selectedCategory !== 'Todas') && (
            <div className="mt-3 text-xs text-slate-500">
              {filteredNews.length} {filteredNews.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
            </div>
          )}
        </div>
      </section>

      {/* Grid de Notícias */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredNews.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {paginatedNews.map((news) => (
                <NewsCard
                  key={news.id}
                  title={news.title}
                  excerpt={news.excerpt}
                  image={news.image}
                  date={news.date}
                  category={news.category}
                  onClick={() => setSelectedNews(news)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-20 border border-slate-200 bg-slate-50 p-8">
              <p className="text-base font-bold text-slate-800 mb-2">Nenhuma publicação encontrada</p>
              <p className="text-xs text-slate-500 mb-4">
                Tente redefinir os filtros ou buscar por outro termo.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('Todas');
                  setSearchTerm('');
                }}
                className="text-xs font-semibold text-[#001B80] hover:underline"
              >
                Limpar filtros de busca
              </button>
            </div>
          )}

          {/* Paginação Sóbria */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-1 mt-12 pt-8 border-t border-slate-200">
              <button
                onClick={() => setCurrentPage(1)}
                disabled={currentPage === 1}
                className="p-2 text-slate-600 hover:text-[#001B80] disabled:opacity-30 disabled:hover:text-slate-600"
                title="Primeira página"
              >
                <ChevronsLeft size={16} />
              </button>
              <button
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 text-slate-600 hover:text-[#001B80] disabled:opacity-30 disabled:hover:text-slate-600"
                title="Página anterior"
              >
                <ChevronLeft size={16} />
              </button>

              {getPageNumbers().map((page, index) => {
                if (typeof page === 'string') {
                  return <span key={`ell-${index}`} className="px-2 text-xs text-slate-400">...</span>;
                }
                return (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`w-8 h-8 text-xs font-semibold rounded ${
                      page === currentPage
                        ? 'bg-[#001B80] text-white'
                        : 'text-slate-700 hover:bg-slate-100'
                    }`}
                  >
                    {page}
                  </button>
                );
              })}

              <button
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={currentPage >= totalPages}
                className="p-2 text-slate-600 hover:text-[#001B80] disabled:opacity-30 disabled:hover:text-slate-600"
                title="Próxima página"
              >
                <ChevronRight size={16} />
              </button>
              <button
                onClick={() => setCurrentPage(totalPages)}
                disabled={currentPage >= totalPages}
                className="p-2 text-slate-600 hover:text-[#001B80] disabled:opacity-30 disabled:hover:text-slate-600"
                title="Última página"
              >
                <ChevronsRight size={16} />
              </button>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
