import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowLeft, Calendar, Tag, User, Clock, ChevronRight, Sparkles, TrendingUp, Search, X, ChevronLeft, ChevronsLeft, ChevronsRight } from 'lucide-react';
import { newsData, NewsItem, ContentBlock } from '../data/news';
import { NewsCard } from './NewsCard';
import { ShareButtons } from './ShareButtons';
import { PhotoGallery } from './PhotoGallery';

// Helper function to calculate reading time
function calculateReadingTime(content: string | ContentBlock[]): number {
  const wordsPerMinute = 200;
  let text = '';
  
  if (typeof content === 'string') {
    text = content;
  } else {
    // Extrair texto dos blocos
    text = content
      .filter(block => block.type === 'text')
      .map(block => block.content)
      .join(' ');
  }
  
  const words = text.split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

// Helper function to get related news
function getRelatedNews(currentNews: NewsItem, allNews: NewsItem[], limit: number = 3): NewsItem[] {
  // Palavras comuns a ignorar
  const stopWords = new Set([
    'a', 'o', 'e', 'de', 'da', 'do', 'em', 'para', 'com', 'por', 'um', 'uma',
    'os', 'as', 'dos', 'das', 'no', 'na', 'nos', 'nas', 'ao', 'à', 'aos', 'às',
    'pelo', 'pela', 'pelos', 'pelas', 'este', 'esta', 'estes', 'estas', 'esse',
    'essa', 'esses', 'essas', 'aquele', 'aquela', 'aqueles', 'aquelas', 'seu',
    'sua', 'seus', 'suas', 'que', 'qual', 'quais', 'quando', 'onde', 'como'
  ]);

  // Extrair palavras-chave do título e resumo da notícia atual
  const getKeywords = (text: string): Set<string> => {
    return new Set(
      text
        .toLowerCase()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '') // Remove acentos
        .split(/\W+/)
        .filter(word => word.length > 3 && !stopWords.has(word))
    );
  };

  const currentKeywords = new Set([
    ...getKeywords(currentNews.title),
    ...getKeywords(currentNews.excerpt)
  ]);

  // Calcular score de relevância para cada notícia
  const newsWithScore = allNews
    .filter(news => news.id !== currentNews.id)
    .map(news => {
      const newsKeywords = new Set([
        ...getKeywords(news.title),
        ...getKeywords(news.excerpt)
      ]);

      // Contar palavras-chave em comum
      let matchCount = 0;
      currentKeywords.forEach(keyword => {
        if (newsKeywords.has(keyword)) {
          matchCount++;
        }
      });

      // Bonus se for da mesma categoria
      const categoryBonus = news.category === currentNews.category ? 2 : 0;

      return {
        news,
        score: matchCount + categoryBonus,
        date: new Date(news.date).getTime()
      };
    });

  // Ordernar por score (maior primeiro) e depois por data (mais recente primeiro)
  newsWithScore.sort((a, b) => {
    if (a.score !== b.score) {
      return b.score - a.score;
    }
    return b.date - a.date;
  });

  // Se não houver notícias com score > 0, retornar as mais recentes
  const relatedNews = newsWithScore.filter(item => item.score > 0);
  
  if (relatedNews.length >= limit) {
    return relatedNews.slice(0, limit).map(item => item.news);
  }

  // Completar com as mais recentes
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
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [allNews, setAllNews] = useState<NewsItem[]>(newsData);
  const newsPerPage = 6;

  // Carregar notícias do localStorage se disponível
  useEffect(() => {
    const storedNews = localStorage.getItem('newsData');
    if (storedNews) {
      setAllNews(JSON.parse(storedNews));
    }
  }, []);

  // Set initial news if provided
  useEffect(() => {
    if (initialNewsId) {
      const news = allNews.find(item => item.id === initialNewsId);
      if (news) {
        setSelectedNews(news);
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  }, [initialNewsId, allNews]);

  // SEO for article view - must be called unconditionally
  useEffect(() => {
    if (selectedNews) {
      // Update document title
      document.title = `${selectedNews.title} | TecGeo`;
      
      // Update meta description
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', selectedNews.excerpt);
      }
    } else {
      // Reset to default
      document.title = 'Notícias | TecGeo - Regularização de Propriedades Rurais';
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', 'Fique por dentro das novidades sobre regularização rural, legislação e tecnologia.');
      }
    }
  }, [selectedNews]);

  // Scroll to top when selecting a news item
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
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()); // Ordenar da mais recente para mais antiga

  // Reset to page 1 when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategory, searchTerm]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredNews.length / newsPerPage);
  const paginatedNews = filteredNews.slice((currentPage - 1) * newsPerPage, currentPage * newsPerPage);

  // Generate page numbers to display
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 7;
    
    if (totalPages <= maxPagesToShow) {
      // Show all pages if total is less than max
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Always show first page
      pages.push(1);
      
      if (currentPage > 3) {
        pages.push('...');
      }
      
      // Show pages around current page
      const start = Math.max(2, currentPage - 1);
      const end = Math.min(totalPages - 1, currentPage + 1);
      
      for (let i = start; i <= end; i++) {
        pages.push(i);
      }
      
      if (currentPage < totalPages - 2) {
        pages.push('...');
      }
      
      // Always show last page
      pages.push(totalPages);
    }
    
    return pages;
  };

  if (selectedNews) {
    const formattedDate = new Date(selectedNews.date).toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric',
    });

    const readingTime = calculateReadingTime(selectedNews.content);

    return (
      <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
        {/* Breadcrumb Hero */}
        <section className="relative py-8 sm:py-12 bg-gradient-to-br from-[#001B80] to-[#003cb3] text-white overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <button
                onClick={() => setSelectedNews(null)}
                className="inline-flex items-center gap-2 text-white/80 hover:text-white transition-all mb-4 group"
              >
                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" size={18} />
                <span className="text-sm sm:text-base">Voltar para todas as notícias</span>
              </button>
              
              {/* Breadcrumb */}
              <div className="flex items-center gap-2 text-sm text-white/60 mb-2">
                <span>Notícias</span>
                <ChevronRight size={14} />
                <span>{selectedNews.category}</span>
                <ChevronRight size={14} />
                <span className="text-white/90">Artigo</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Article */}
        <section className="py-8 sm:py-16">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Featured Image with overlay info */}
              <motion.div 
                className="relative h-[300px] sm:h-[400px] lg:h-[500px] rounded-3xl overflow-hidden mb-10 sm:mb-14 shadow-2xl"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 0.2 }}
              >
                <img
                  src={selectedNews.image}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
                
                {/* Category badge on image */}
                <div className="absolute top-6 left-6">
                  <div 
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm backdrop-blur-md"
                    style={{
                      background: 'linear-gradient(135deg, rgba(30, 181, 58, 0.9) 0%, rgba(24, 156, 48, 0.9) 100%)',
                      boxShadow: '0 4px 20px rgba(30, 181, 58, 0.3)',
                    }}
                  >
                    <Tag size={14} />
                    {selectedNews.category}
                  </div>
                </div>
              </motion.div>

              {/* Metadata */}
              <motion.div 
                className="flex flex-wrap items-center gap-4 sm:gap-6 text-gray-600 mb-8 text-sm sm:text-base"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                <span className="flex items-center gap-2">
                  <Calendar size={18} className="text-[#1EB53A]" />
                  {new Date(selectedNews.date).toLocaleDateString('pt-BR', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric'
                  })}
                </span>
                {selectedNews.author && (
                  <span className="flex items-center gap-2">
                    <User size={18} className="text-[#1EB53A]" />
                    {selectedNews.author}
                  </span>
                )}
                {selectedNews.readingTime && (
                  <span className="flex items-center gap-2">
                    <Clock size={18} className="text-[#1EB53A]" />
                    {selectedNews.readingTime} min de leitura
                  </span>
                )}
                <span className="px-4 py-1.5 bg-[#1EB53A]/10 text-[#1EB53A] rounded-full text-xs sm:text-sm">
                  {selectedNews.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1 
                className="text-[#001B80] mb-8 sm:mb-12 text-3xl sm:text-4xl lg:text-5xl"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                {selectedNews.title}
              </motion.h1>

              {/* Excerpt destacado */}
              <motion.div
                className="p-6 sm:p-8 rounded-2xl mb-8 sm:mb-12 border-l-4 border-[#1EB53A]"
                style={{
                  background: 'linear-gradient(135deg, rgba(30, 181, 58, 0.05) 0%, rgba(30, 181, 58, 0.02) 100%)',
                }}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <p className="text-lg sm:text-xl text-gray-700 leading-relaxed italic">
                  {selectedNews.excerpt}
                </p>
              </motion.div>

              {/* Content */}
              <motion.div 
                className="prose prose-lg max-w-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="text-gray-700 leading-relaxed space-y-6 text-base sm:text-lg">
                  {typeof selectedNews.content === 'string' ? (
                    // Renderizar conteúdo simples (string)
                    selectedNews.content.split('\n\n').map((paragraph, index) => (
                      <motion.p 
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                      >
                        {paragraph}
                      </motion.p>
                    ))
                  ) : (
                    // Renderizar conteúdo estruturado (blocos)
                    selectedNews.content.map((block, index) => {
                      if (block.type === 'text') {
                        return (
                          <motion.p 
                            key={index}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, delay: 0.6 + (index * 0.1) }}
                            className="text-gray-700"
                          >
                            {block.content}
                          </motion.p>
                        );
                      } else if (block.type === 'image') {
                        return (
                          <motion.figure 
                            key={index}
                            className="my-8"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                          >
                            <div className="rounded-2xl overflow-hidden shadow-lg">
                              <img
                                src={block.content}
                                alt={block.alt || 'Imagem do artigo'}
                                className="w-full h-auto object-cover"
                              />
                            </div>
                            {block.caption && (
                              <figcaption className="text-center text-sm text-gray-600 mt-3 italic">
                                {block.caption}
                              </figcaption>
                            )}
                          </motion.figure>
                        );
                      }
                      return null;
                    })
                  )}
                </div>
              </motion.div>

              {/* Photo Album */}
              {selectedNews.photoAlbum && selectedNews.photoAlbum.length > 0 && (
                <motion.div 
                  className="mt-12 sm:mt-16"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.85 }}
                >
                  <h3 className="text-[#001B80] text-2xl sm:text-3xl mb-6">Galeria de Fotos</h3>
                  <PhotoGallery photos={selectedNews.photoAlbum} />
                </motion.div>
              )}

              {/* Share Buttons */}
              <motion.div 
                className="mt-12 sm:mt-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="border-t border-b border-gray-200 py-6">
                  <p className="text-gray-600 mb-[25px] text-center sm:text-left mt-[0px] mr-[0px] ml-[0px]">Compartilhe este artigo:</p>
                  <ShareButtons
                    url={`/noticias/${selectedNews.id}`}
                    title={selectedNews.title}
                    description={selectedNews.excerpt}
                  />
                </div>
              </motion.div>

              {/* CTA Box */}
              <motion.div 
                className="mt-12 sm:mt-16 p-8 sm:p-10 rounded-3xl text-center relative overflow-hidden"
                style={{
                  background: 'rgba(30, 181, 58, 0.08)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(30, 181, 58, 0.2)',
                }}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#1EB53A]/10 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#1EB53A]/10 rounded-full blur-3xl"></div>
                
                <div className="relative z-10">
                  <div className="inline-flex items-center gap-2 text-[#1EB53A] mb-4">
                    <Sparkles size={24} />
                  </div>
                  <h3 className="text-[#001B80] mb-4 text-2xl sm:text-3xl">Precisa de ajuda com regularização?</h3>
                  <p className="text-gray-600 mb-6 text-base sm:text-lg max-w-2xl mx-auto">
                    Nossa equipe especializada está pronta para transformar sua propriedade rural em um ativo regularizado e valorizado
                  </p>
                  <button
                    onClick={() => onNavigate('contato')}
                    className="bg-gradient-to-r from-[#1EB53A] to-[#189c30] text-white px-8 py-4 rounded-full hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2 group mt-[25px] mr-[0px] mb-[0px] ml-[0px]"
                  >
                    <span>Fale com um especialista</span>
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" size={20} />
                  </button>
                </div>
              </motion.div>

              {/* Related News */}
              <motion.div 
                className="mt-16 sm:mt-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="flex items-center gap-3 mb-8">
                  <TrendingUp className="text-[#1EB53A]" size={28} />
                  <h3 className="text-[#001B80] text-2xl sm:text-3xl">Continue lendo</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
                  {getRelatedNews(selectedNews, allNews)
                    .map((news, index) => (
                      <motion.div
                        key={news.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: 1.1 + (index * 0.1) }}
                      >
                        <NewsCard
                          title={news.title}
                          excerpt={news.excerpt}
                          image={news.image}
                          date={news.date}
                          category={news.category}
                          onClick={() => setSelectedNews(news)}
                        />
                      </motion.div>
                    ))}
                </div>
              </motion.div>
            </motion.article>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 via-white to-gray-50">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#001B80] via-[#002bb3] to-[#001B80] text-white py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full mb-6 text-white mx-auto"
            style={{
              background: 'rgba(255, 255, 255, 0.1)',
              backdropFilter: 'blur(10px)',
              WebkitBackdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              display: 'flex',
              width: 'fit-content',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            <Sparkles size={20} />
            <span>Blog TecGeo</span>
          </div>
          <h1 className="mb-6 text-4xl sm:text-5xl lg:text-6xl" style={{ textAlign: 'center' }}>
            Notícias e Atualizações
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed" style={{ textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Fique por dentro das novidades sobre regularização rural, legislação e tecnologia
          </p>
        </motion.div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Search Bar */}
          <motion.div 
            className="mb-6"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <div className="relative max-w-xl mx-auto">
              <input
                type="text"
                placeholder="Buscar notícias..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 pr-12 rounded-full border border-gray-300 focus:border-[#1EB53A] focus:ring-2 focus:ring-[#1EB53A]/20 outline-none transition-all text-gray-700"
                style={{
                  background: 'rgba(255, 255, 255, 0.9)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
              {searchTerm && (
                <button
                  onClick={() => setSearchTerm('')}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X size={20} />
                </button>
              )}
            </div>
          </motion.div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category, index) => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-5 py-2.5 rounded-full transition-all text-sm sm:text-base ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-[#1EB53A] to-[#189c30] text-white shadow-lg scale-105'
                    : 'bg-white/70 text-gray-700 hover:bg-white border border-gray-200 hover:border-[#1EB53A]/30'
                }`}
                style={
                  selectedCategory !== category
                    ? {
                        backdropFilter: 'blur(10px)',
                        WebkitBackdropFilter: 'blur(10px)',
                      }
                    : {}
                }
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category}
              </motion.button>
            ))}
          </div>

          {/* Results count */}
          {(searchTerm || selectedCategory !== 'Todas') && (
            <motion.div
              className="text-center mt-6 text-gray-600"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <p className="text-sm sm:text-base">
                {filteredNews.length} {filteredNews.length === 1 ? 'notícia encontrada' : 'notícias encontradas'}
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* News Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            {filteredNews.length > 0 ? (
              <motion.div
                key="news-grid"
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
              >
                {paginatedNews.map((news, index) => (
                  <motion.div
                    key={news.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <NewsCard
                      title={news.title}
                      excerpt={news.excerpt}
                      image={news.image}
                      date={news.date}
                      category={news.category}
                      onClick={() => setSelectedNews(news)}
                    />
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="no-results"
                className="text-center py-20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gray-100 mb-6">
                  <Search className="text-gray-400" size={32} />
                </div>
                <h3 className="text-[#001B80] text-xl sm:text-2xl mb-3">Nenhuma notícia encontrada</h3>
                <p className="text-gray-500 text-base sm:text-lg mb-6">
                  Tente ajustar seus filtros ou buscar por outros termos
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('Todas');
                    setSearchTerm('');
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#1EB53A] to-[#189c30] text-white rounded-full hover:shadow-lg transition-all hover:scale-105"
                >
                  <X size={18} />
                  Limpar filtros
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Pagination */}
          {filteredNews.length > 0 && (
            <motion.div 
              className="flex justify-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <div 
                className="inline-flex items-center gap-1 p-2 rounded-full"
                style={{
                  background: 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  border: '1px solid rgba(30, 181, 58, 0.1)',
                  boxShadow: '0 4px 16px rgba(30, 181, 58, 0.08)',
                }}
              >
                {/* First Page Button */}
                <button
                  onClick={() => setCurrentPage(1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  title="Primeira página"
                >
                  <ChevronsLeft size={18} className="text-[#1EB53A]" />
                </button>

                {/* Previous Page Button */}
                <button
                  onClick={() => setCurrentPage(currentPage - 1)}
                  disabled={currentPage === 1}
                  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  title="Página anterior"
                >
                  <ChevronLeft size={18} className="text-[#1EB53A]" />
                </button>

                {/* Page Numbers */}
                {getPageNumbers().map((page, index) => {
                  if (typeof page === 'string') {
                    return (
                      <span key={`ellipsis-${index}`} className="px-3 py-2 text-gray-400">
                        {page}
                      </span>
                    );
                  }

                  return (
                    <button
                      key={page}
                      onClick={() => setCurrentPage(page)}
                      className={`min-w-[40px] h-[40px] rounded-full transition-all duration-300 ${
                        page === currentPage
                          ? 'bg-[#1EB53A] text-white shadow-md scale-105'
                          : 'text-[#1EB53A] hover:bg-gray-100'
                      }`}
                    >
                      {page}
                    </button>
                  );
                })}

                {/* Next Page Button */}
                <button
                  onClick={() => setCurrentPage(currentPage + 1)}
                  disabled={currentPage >= totalPages}
                  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  title="Próxima página"
                >
                  <ChevronRight size={18} className="text-[#1EB53A]" />
                </button>

                {/* Last Page Button */}
                <button
                  onClick={() => setCurrentPage(totalPages)}
                  disabled={currentPage >= totalPages}
                  className="p-2 rounded-full hover:bg-gray-100 disabled:opacity-40 disabled:cursor-not-allowed transition-all"
                  title="Última página"
                >
                  <ChevronsRight size={18} className="text-[#1EB53A]" />
                </button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    </div>
  );
}