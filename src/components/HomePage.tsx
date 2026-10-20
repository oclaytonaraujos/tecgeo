import { CheckCircle2, MapPin, Award, Users, Zap, Ruler, Leaf, FileCheck, Tractor, Map, GitBranch, FileText, Building2, ArrowRight, ChevronDown, Briefcase, ShieldCheck, Scale } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NewsItem } from '../data/news';
import { supabase } from '../lib/supabase';
import { NewsCard } from './NewsCard';

interface HomePageProps {
  onNavigate: (page: string, newsId?: number) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [allNews, setAllNews] = useState<NewsItem[]>([]);

  useEffect(() => {
    supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false })
      .limit(6)
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

  const slides = [
    {
      title: 'Regularizar sua propriedade nunca foi tão simples.',
      subtitle: 'Com o Plano Agro+ TECGEO, você resolve Geo + CAR + Licenciamento em um único pacote e com pagamento parcelado.',
      image: 'https://images.unsplash.com/photo-1669837783743-4450b160c701?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZXJpYWwlMjBmYXJtJTIwZmllbGR8ZW58MXx8fHwxNzY1MDY0NTYwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Tecnologia de ponta para máxima precisão',
      subtitle: 'Equipamentos GNSS de última geração garantem medições com precisão centimétrica em toda a sua propriedade.',
      image: 'https://images.unsplash.com/photo-1714385370462-37cab271a883?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXJtJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUwNjQ5NTh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Conformidade ambiental garantida',
      subtitle: 'Regularize seu CAR e obtenha licenciamento ambiental de acordo com todas as exigências legais.',
      image: 'https://images.unsplash.com/photo-1591530712751-96e6f5ad73ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVlbiUyMGZhcm0lMjBuYXR1cmV8ZW58MXx8fHwxNzY1MDY0NTYxfDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Plano Agro+: A solução completa para sua propriedade',
      subtitle: 'Georreferenciamento + CAR + Licenciamento em um único pacote. Economize até 30% e parcele sem comprometer sua safra.',
      image: 'https://images.unsplash.com/photo-1513009057680-49b4a0aaf959?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ3JpY3VsdHVyYWwlMjBidXNpbmVzcyUyMGhhbmRzaGFrZXxlbnwxfHx8fDE3NjUxNTE4NDh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
      isPlanoAgro: true,
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const featuredNews = allNews.filter(news => news.featured).slice(0, 3);

  const services = [
    { icon: Ruler, title: 'Georreferenciamento', description: 'Medição certificada com precisão centimétrica' },
    { icon: Leaf, title: 'CAR', description: 'Cadastro Ambiental Rural - SigCAR Goiás' },
    { icon: Building2, title: 'Loteamento Urbano', description: 'Projetos aprovados e documentação completa' },
    { icon: Tractor, title: 'Loteamento Rural', description: 'Divisão e regularização de áreas rurais' },
    { icon: GitBranch, title: 'Desmembramento', description: 'Separação legal de propriedades' },
    { icon: Map, title: 'Unificação', description: 'Junção de matrículas adjacentes' },
    { icon: FileText, title: 'Assessoria em Escrituras', description: 'Suporte completo para escrituras públicas' },
    { icon: FileCheck, title: 'Licenciamento Ambiental', description: 'Licenças para agricultura e pecuária' },
  ];

  const steps = [
    { number: '01', title: 'Diagnóstico inicial', description: 'Análise completa da situação da sua propriedade' },
    { number: '02', title: 'Levantamento técnico', description: 'Coleta de dados e análises no local' },
    { number: '03', title: 'Regularização', description: 'Execução do Geo + CAR + Licenciamento' },
    { number: '04', title: 'Entrega digital', description: 'Documentação completa e processo aberto' },
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative h-[550px] sm:h-[650px] lg:h-[750px] overflow-hidden bg-[#001B80]">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#001B80]/95 via-[#001B80]/85 to-[#001B80]/50 sm:to-transparent"></div>
            </div>
            
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-full sm:max-w-2xl text-white">
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 drop-shadow-2xl leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-10 sm:mb-12 text-gray-100 leading-relaxed max-w-xl">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onNavigate('plano-agro')}
                    className="group bg-[#1EB53A] text-white px-8 py-4 rounded-xl hover:bg-[#189c30] transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base shadow-lg"
                  >
                    Quero regularizar minha propriedade
                    <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" size={20} />
                  </button>
                  <button
                    onClick={() => onNavigate('contato')}
                    className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#001B80] transition-all text-sm sm:text-base"
                  >
                    Falar com um especialista
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4 z-10">
          <div className="flex gap-2.5">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`transition-all rounded-full ${
                  index === currentSlide
                    ? 'w-10 sm:w-14 h-2.5 sm:h-3 bg-[#1EB53A] shadow-lg'
                    : 'w-2.5 sm:w-3 h-2.5 sm:h-3 bg-white/40 hover:bg-white/60'
                }`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-12 sm:py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {[
              { number: '10+', label: 'Anos de experiência' },
              { number: '500+', label: 'Propriedades regularizadas' },
              { number: '100%', label: 'Conformidade legal' },
              { number: '24h', label: 'Tempo de resposta' },
            ].map((stat, index) => (
              <div key={index} className="text-center py-2">
                <div className="text-2xl sm:text-3xl font-bold text-[#001B80] mb-1">{stat.number}</div>
                <div className="text-gray-500 text-xs sm:text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notícias */}
      <section className="py-20 sm:py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-[#001B80] mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">Últimas notícias</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-pretty max-w-2xl mx-auto">
              Mantenha-se atualizado com as novidades da TECGEO e do setor
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {featuredNews.map((news) => (
              <NewsCard
                key={news.id}
                title={news.title}
                excerpt={news.excerpt}
                image={news.image}
                date={news.date}
                category={news.category}
                onClick={() => onNavigate('noticias', news.id)}
              />
            ))}
          </div>

          <div className="text-center">
            <button
              onClick={() => onNavigate('noticias')}
              className="group inline-flex items-center gap-2 text-[#001B80] hover:text-[#1EB53A] transition-colors text-sm sm:text-base"
            >
              Ver todas as notícias
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Por que a TECGEO existe */}
      <section className="py-20 sm:py-24 lg:py-28 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <h2 className="text-[#001B80] mb-4 text-3xl sm:text-4xl">Por que a TECGEO existe?</h2>
              <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
                A TECGEO ajuda produtores rurais e proprietários a regularizarem seus imóveis com precisão técnica, agilidade e conformidade ambiental.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {[
                { icon: Award, text: '10+ anos de experiência' },
                { icon: MapPin, text: 'Atendimento em todo Goiás' },
                { icon: Zap, text: 'Tecnologia avançada' },
                { icon: Users, text: 'Equipe de especialistas' },
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-xl">
                  <item.icon className="text-[#1EB53A] flex-shrink-0" size={22} />
                  <span className="text-[#001B80] text-sm sm:text-base">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plano Agro+ */}
      <section className="py-24 sm:py-28 lg:py-32 bg-gradient-to-br from-[#001B80] via-[#002bb3] to-[#001B80] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 sm:mb-6 text-balance">
              A regularização completa da sua propriedade, em um único pacote
            </h2>
            <p className="text-lg sm:text-xl text-gray-200 leading-relaxed text-pretty max-w-2xl mx-auto">
              O tripé da regularização rural em uma solução integrada
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12 sm:mb-16">
            {[
              {
                icon: Ruler,
                title: 'Georreferenciamento',
                items: [
                  'Mede área, perímetro e divisas',
                  'Atende exigências do INCRA',
                  'Base para escritura e matrícula',
                ],
                note: '* Sem curvas de nível/modelagem de terreno',
              },
              {
                icon: Leaf,
                title: 'CAR – SigCAR Goiás',
                items: [
                  'Atualização obrigatória',
                  'Mapeamento de Reserva Legal',
                  'APPs, rios, represas, nascentes',
                  'Adequação ao sistema estadual',
                ],
              },
              {
                icon: FileCheck,
                title: 'Licenciamento Ambiental',
                items: [
                  'Agricultura e pecuária',
                  'Irrigada / Sequeiro / Extensiva',
                  'Outorga ou dispensa para uso de água',
                ],
              },
            ].map((card, index) => (
              <div
                key={index}
                className="bg-white/10 backdrop-blur-sm p-8 rounded-xl border border-white/10"
              >
                <div className="bg-[#1EB53A] w-14 h-14 rounded-xl flex items-center justify-center mb-6">
                  <card.icon size={28} />
                </div>
                <h3 className="mb-6">{card.title}</h3>
                <ul className="space-y-3 text-gray-200">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="flex-shrink-0 mt-0.5 text-[#1EB53A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {card.note && (
                  <p className="text-sm text-gray-300 mt-6 italic">{card.note}</p>
                )}
              </div>
            ))}
          </div>

          {/* Vantagem Exclusiva */}
          <div className="text-center max-w-3xl mx-auto pt-6">
            <span className="inline-block text-sm font-semibold text-[#1EB53A] border-b-2 border-[#1EB53A] pb-1 mb-3 tracking-wide">
              Diferencial
            </span>
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-3">Vantagem exclusiva</h3>
            <p className="text-lg sm:text-xl text-gray-200 mb-8 leading-relaxed">
              Pagamento parcelado em pacote único, sem comprometer o fluxo de caixa da safra.
            </p>
            <button
              onClick={() => onNavigate('plano-agro')}
              className="bg-[#1EB53A] text-white px-8 py-4 rounded-xl hover:bg-[#189c30] transition-all shadow-lg inline-flex items-center gap-2 font-medium"
            >
              Conheça o Plano Agro+
              <ArrowRight size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 sm:py-28 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-[#001B80] mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">Serviços TECGEO</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-pretty max-w-2xl mx-auto">
              Soluções completas para regularização de imóveis
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="group bg-white p-6 sm:p-8 rounded-xl hover:shadow-lg transition-shadow border border-gray-100"
              >
                <div className="bg-[#001B80]/5 w-14 h-14 rounded-xl flex items-center justify-center mb-5 group-hover:bg-[#1EB53A]/10 transition-colors">
                  <service.icon className="text-[#001B80] group-hover:text-[#1EB53A] transition-colors" size={26} />
                </div>
                <h4 className="text-[#001B80] mb-2">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 items-center justify-center">
            <button
              onClick={() => onNavigate('servicos')}
              className="group inline-flex items-center gap-2 text-[#001B80] hover:text-[#1EB53A] transition-colors"
            >
              Ver todos os serviços
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <span className="hidden sm:block text-gray-300">|</span>
            <button
              onClick={() => onNavigate('consultoria')}
              className="group inline-flex items-center gap-2 text-[#1EB53A] hover:text-[#001B80] transition-colors font-semibold"
            >
              Conhecer nossa Consultoria
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Banner Consultoria TECGEO */}
      <section className="py-24 sm:py-28 bg-gradient-to-br from-[#001B80] via-[#00289e] to-[#001B80] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <div className="lg:col-span-7">
              <span className="inline-block text-sm font-semibold text-[#1EB53A] border-b-2 border-[#1EB53A] pb-1 mb-6 tracking-wide">
                Nova Frente TECGEO
              </span>
              <h2 className="text-white text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
                A TECGEO agora é{' '}
                <span className="text-[#1EB53A]">Consultoria</span>
              </h2>
              <p className="text-gray-200 text-lg leading-relaxed mb-8">
                Muito além do levantamento técnico: agora oferecemos{' '}
                <strong>consultoria estratégica completa</strong> para produtores
                rurais, investidores, advogados do agronegócio e responsáveis técnicos.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
                {[
                  { icon: Scale, text: 'Auditoria & Due Diligence Territorial' },
                  { icon: ShieldCheck, text: 'Segurança Jurídica Patrimonial' },
                  { icon: Users, text: 'Parecer Técnico para Advogados' },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3 bg-white/10 backdrop-blur-md p-4 rounded-xl border border-white/10">
                    <item.icon className="text-[#1EB53A] flex-shrink-0 mt-0.5" size={20} />
                    <span className="text-sm text-gray-200 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
              <button
                onClick={() => onNavigate('consultoria')}
                className="group bg-[#1EB53A] text-white px-8 py-4 rounded-xl hover:bg-[#189c30] transition-all flex items-center gap-3 font-semibold shadow-lg hover:scale-105 w-fit"
              >
                <Briefcase size={20} />
                Conhecer a Consultoria TECGEO
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </button>
            </div>
            <div className="lg:col-span-5 hidden lg:grid grid-cols-2 gap-4">
              {[
                { title: 'Regularização Fundiária', sub: 'Saneamento registral e documental' },
                { title: 'Consultoria Ambiental', sub: 'CAR, licenciamento e outorgas' },
                { title: 'Due Diligence', sub: 'Proteção na compra de fazendas' },
                { title: 'Suporte Técnico', sub: 'Para advogados e engenheiros' },
              ].map((card, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-md p-5 rounded-2xl border border-white/15 hover:bg-white/15 transition-colors cursor-default">
                  <CheckCircle2 className="text-[#1EB53A] mb-3" size={22} />
                  <p className="text-white font-bold text-sm mb-1">{card.title}</p>
                  <p className="text-gray-300 text-xs leading-relaxed">{card.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>


      {/* Como funciona */}
      <section className="py-24 sm:py-28 lg:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
            <h2 className="text-[#001B80] mb-4 text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-balance">Como funciona o processo</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed text-pretty max-w-2xl mx-auto">
              Processo simples e transparente em 4 etapas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#1EB53A] text-white rounded-xl mb-5">
                  <span className="text-xl font-semibold">{step.number}</span>
                </div>
                <h4 className="text-[#001B80] mb-2">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-[60%] w-[80%] h-0.5 bg-[#1EB53A]/20"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 sm:py-28 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
            <h2 className="text-[#001B80] mb-3 text-3xl sm:text-4xl font-bold tracking-tight text-balance">Dúvidas sobre nossos serviços?</h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed text-pretty max-w-2xl mx-auto">
              Respostas para as perguntas mais comuns sobre regularização de propriedades rurais
            </p>
          </div>

          <div className="space-y-3">
            {[
              {
                question: 'Quanto tempo leva para fazer o georreferenciamento de uma propriedade?',
                answer: 'O prazo varia conforme o tamanho da área e complexidade do terreno. Em média, propriedades de até 100 hectares levam de 15 a 30 dias entre levantamento de campo, processamento de dados e elaboração do memorial descritivo. Áreas maiores podem levar de 30 a 60 dias.',
              },
              {
                question: 'O CAR é obrigatório para todas as propriedades rurais?',
                answer: 'Sim, o Cadastro Ambiental Rural (CAR) é obrigatório para todos os imóveis rurais, independentemente do tamanho, conforme estabelecido pela Lei 12.651/2012 (Código Florestal). É fundamental para acesso a crédito rural, programas governamentais e regularização ambiental.',
              },
              {
                question: 'Qual a diferença entre desmembramento e unificação?',
                answer: 'Desmembramento é a divisão de uma propriedade em duas ou mais matrículas independentes, ideal para venda de parte do terreno ou partilha. Unificação é o inverso: junção de matrículas adjacentes em uma única matrícula, facilitando a gestão e reduzindo custos de documentação.',
              },
              {
                question: 'Posso parcelar o pagamento dos serviços?',
                answer: 'Sim! Oferecemos parcelamento em até 12 vezes para todos os serviços. No Plano Agro+, que combina Georreferenciamento + CAR + Licenciamento, você ainda economiza até 30% e pode parcelar sem comprometer o fluxo de caixa da sua safra.',
              },
              {
                question: 'O georreferenciamento feito pela TECGEO é aceito pelo INCRA?',
                answer: 'Sim, 100%! Utilizamos equipamentos GNSS de precisão centimétrica e seguimos rigorosamente todas as normas técnicas do INCRA. Nossa equipe é formada por engenheiros credenciados e com vasta experiência em certificação de imóveis rurais.',
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between px-6 py-5 text-left"
                >
                  <span className="text-[#001B80] pr-6">{faq.question}</span>
                  <ChevronDown
                    className={`flex-shrink-0 text-[#001B80] transition-transform duration-300 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                    size={20}
                  />
                </button>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-5 pt-0 text-gray-600 leading-relaxed border-t border-gray-100">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-gray-600 mb-3">Não encontrou a resposta que procurava?</p>
            <button
              onClick={() => onNavigate('contato')}
              className="group inline-flex items-center gap-2 text-[#001B80] hover:text-[#1EB53A] transition-colors"
            >
              Entre em contato conosco
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 sm:py-28 lg:py-32 bg-gradient-to-br from-[#1EB53A] to-[#189c30] text-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl font-bold leading-tight text-balance">
            Quer saber o que falta para sua propriedade ficar 100% regularizada?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 text-gray-100 leading-relaxed text-pretty max-w-2xl mx-auto">
            Solicite um diagnóstico gratuito e descubra como regularizar sua propriedade
          </p>
          <button
            onClick={() => onNavigate('contato')}
            className="group bg-white text-[#1EB53A] px-8 sm:px-10 py-4 sm:py-5 rounded-xl hover:bg-gray-100 transition-all shadow-lg inline-flex items-center gap-2 text-sm sm:text-base"
          >
            Solicitar diagnóstico TECGEO
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </section>
    </div>
  );
}

