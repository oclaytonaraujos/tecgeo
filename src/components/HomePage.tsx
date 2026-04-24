import { CheckCircle2, MapPin, Award, Users, Zap, Ruler, Leaf, FileCheck, Tractor, Map, GitBranch, FileText, Building2, ArrowRight, ChevronLeft, ChevronRight, Sparkles, TrendingUp, Shield, Newspaper, HelpCircle, ChevronDown } from 'lucide-react';
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
      subtitle: 'Com o Plano Agro+ TecGeo, você resolve Geo + CAR + Licenciamento em um único pacote e com pagamento parcelado.',
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

  // Auto-advance slides every 20 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

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

  const stats = [
    { number: '10+', label: 'Anos de experiência', icon: Award },
    { number: '500+', label: 'Propriedades regularizadas', icon: MapPin },
    { number: '100%', label: 'Conformidade legal', icon: Shield },
    { number: '24h', label: 'Tempo de resposta', icon: Zap },
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
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-full sm:max-w-2xl text-white"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.1 }}
                  className="inline-flex items-center gap-2 bg-[#1EB53A] px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 shadow-lg"
                >
                  <Sparkles size={18} className="sm:w-5 sm:h-5" />
                  <span className="text-sm sm:text-base">Plano Agro+ Disponível</span>
                </motion.div>
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 drop-shadow-2xl leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-12 sm:mb-16 lg:mb-20 text-gray-100 leading-relaxed max-w-xl">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onNavigate('plano-agro')}
                    className="group bg-[#1EB53A] text-white sm:px-8 sm:py-4 rounded-full hover:bg-[#189c30] transition-all hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2.5 text-sm sm:text-base shadow-xl px-[32px] py-[16px] mx-[0px] my-[38px]"
                  >
                    <span className="text-center">Quero regularizar minha propriedade</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" size={20} />
                  </button>
                  <button
                    onClick={() => onNavigate('contato')}
                    className="border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-white hover:text-[#001B80] transition-all backdrop-blur-sm text-sm sm:text-base shadow-lg mx-[0px] my-[35px]"
                  >
                    Falar com um especialista
                  </button>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
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

      {/* Stats Bar */}
      <section className="bg-white py-8 sm:py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-[#1EB53A]/10 rounded-2xl mb-2 sm:mb-3">
                  <stat.icon className="text-[#1EB53A]" size={24} />
                </div>
                <div className="text-2xl sm:text-3xl text-[#001B80] mb-1">{stat.number}</div>
                <div className="text-gray-600 text-xs sm:text-sm px-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Noticias */}
      <section className="py-12 sm:py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#1EB53A]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <Newspaper className="text-[#1EB53A]" size={18} />
              <span className="text-[#1EB53A] text-sm sm:text-base">Notícias</span>
            </div>
            <h2 className="text-[#001B80] mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl px-4">Últimas notícias</h2>
            <p className="text-center text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Mantenha-se atualizado com as novidades da TecGeo e do setor
            </p>
          </motion.div>

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

      {/* Por que a TecGeo existe */}
      <section className="py-12 sm:py-16 lg:py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12 lg:mb-16"
          >
            <div className="inline-block bg-[#1EB53A]/10 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full mb-3 sm:mb-4">
              <span className="text-[#1EB53A] text-sm sm:text-base">Nossa missão</span>
            </div>
            <h2 className="text-[#001B80] mb-4 sm:mb-6 text-3xl sm:text-4xl lg:text-5xl px-4">Por que a TecGeo existe?</h2>
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 leading-relaxed" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              A TecGeo ajuda produtores rurais e proprietários a regularizarem seus imóveis com precisão técnica, agilidade e conformidade ambiental.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: Award, text: '10+ anos de experiência', color: '#1EB53A' },
              { icon: MapPin, text: 'Atendimento em todo Goiás', color: '#001B80' },
              { icon: Zap, text: 'Tecnologia avançada', color: '#1EB53A' },
              { icon: Users, text: 'Equipe de especialistas', color: '#001B80' },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group text-center p-8 rounded-3xl hover:bg-white transition-all cursor-pointer"
              >
                <div
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center transition-all group-hover:scale-110"
                  style={{ backgroundColor: `${item.color}15` }}
                >
                  <item.icon style={{ color: item.color }} size={36} />
                </div>
                <p className="text-[#001B80]">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Plano Agro+ - DESTAQUE */}
      <section className="py-24 bg-gradient-to-br from-[#001B80] via-[#002bb3] to-[#001B80] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-[#1EB53A] px-6 py-3 rounded-full mb-6">
              <Leaf size={24} />
              <span className="text-lg">Plano Agro+</span>
            </div>
            <h2 className="mb-6">
              A regularização completa da sua propriedade, em um único pacote
            </h2>
            <p className="text-xl text-gray-200 leading-relaxed" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              O tripé da regularização rural em uma solução integrada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
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
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group bg-white/10 backdrop-blur-md p-8 rounded-3xl hover:bg-white/15 transition-all border border-white/10"
              >
                <div className="bg-[#1EB53A] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <card.icon size={32} />
                </div>
                <h3 className="mb-6">{card.title}</h3>
                <ul className="space-y-3 text-gray-200">
                  {card.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5 text-[#1EB53A]" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                {card.note && (
                  <p className="text-sm text-gray-300 mt-6 italic">{card.note}</p>
                )}
              </motion.div>
            ))}
          </div>

          {/* Vantagem Exclusiva */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-gradient-to-r from-[#1EB53A] to-[#189c30] p-10 rounded-3xl text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <TrendingUp size={32} />
              <h3>Vantagem exclusiva</h3>
            </div>
            <p className="text-xl mb-12 leading-relaxed">
              Pagamento parcelado em pacote único, sem comprometer o fluxo de caixa da safra.
            </p>
            <button
              onClick={() => onNavigate('plano-agro')}
              className="bg-white text-[#1EB53A] px-8 py-4 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-xl inline-flex items-center gap-2 mx-[0px] my-[13px] mt-[35px] mr-[0px] mb-[0px] ml-[0px]"
            >
              Conheça o Plano Agro+
              <ArrowRight size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* Serviços */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#001B80]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#001B80]">Nossos serviços</span>
            </div>
            <h2 className="text-[#001B80] mb-6">Serviços TecGeo</h2>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Soluções completas para regularização de imóveis
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-white p-8 rounded-3xl hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100 cursor-pointer"
              >
                <div className="bg-[#001B80]/5 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#1EB53A]/10 transition-colors">
                  <service.icon className="text-[#001B80] group-hover:text-[#1EB53A] transition-colors" size={28} />
                </div>
                <h4 className="text-[#001B80] mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button
              onClick={() => onNavigate('servicos')}
              className="group inline-flex items-center gap-2 text-[#001B80] hover:text-[#1EB53A] transition-colors"
            >
              Ver todos os serviços
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#1EB53A]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#1EB53A]">Processo</span>
            </div>
            <h2 className="text-[#001B80] mb-6">Como funciona o processo</h2>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Processo simples e transparente em 4 etapas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="text-center">
                  <div className="relative inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-[#1EB53A] to-[#189c30] text-white rounded-2xl mb-6 shadow-lg">
                    <span className="text-2xl">{step.number}</span>
                  </div>
                  <h4 className="text-[#001B80] mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#1EB53A]/50 to-transparent"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#001B80]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#001B80]">Depoimentos</span>
            </div>
            <h2 className="text-[#001B80] mb-6">O que nossos clientes dizem</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: 'A TecGeo resolveu toda a regularização da minha fazenda de forma rápida e profissional. Recomendo!',
                author: 'João Silva',
                role: 'Produtor Rural',
              },
              {
                text: 'O Plano Agro+ facilitou muito o pagamento. Consegui regularizar tudo sem comprometer o capital de giro.',
                author: 'Maria Santos',
                role: 'Proprietária Rural',
              },
              {
                text: 'Equipe técnica excelente. Tudo foi feito com precisão e dentro do prazo combinado.',
                author: 'Carlos Oliveira',
                role: 'Fazendeiro',
              },
            ].map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-3xl hover:shadow-lg transition-all"
              >
                <div className="text-[#1EB53A] text-4xl mb-4">&ldquo;</div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">{testimonial.text}</p>
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#001B80]/10 rounded-full flex items-center justify-center">
                    <Users className="text-[#001B80]" size={24} />
                  </div>
                  <div>
                    <p className="text-[#001B80]">{testimonial.author}</p>
                    <p className="text-gray-500 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ - Perguntas Frequentes */}
      <section className="py-20 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-[#001B80] mb-3">Dúvidas sobre nossos serviços?</h2>
            <p className="text-gray-600">
              Encontre respostas para as perguntas mais comuns sobre regularização de propriedades rurais
            </p>
          </motion.div>

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
                question: 'Preciso de licenciamento ambiental para minha propriedade rural?',
                answer: 'Depende da atividade exercida. Agricultura irrigada, pecuária extensiva, piscicultura e outras atividades potencialmente poluidoras necessitam de licenciamento. Nossa equipe faz uma análise gratuita para identificar as licenças necessárias para seu caso específico.',
              },
              {
                question: 'O georreferenciamento feito pela TecGeo é aceito pelo INCRA?',
                answer: 'Sim, 100%! Utilizamos equipamentos GNSS de precisão centimétrica e seguimos rigorosamente todas as normas técnicas do INCRA. Nossa equipe é formada por engenheiros credenciados e com vasta experiência em certificação de imóveis rurais.',
              },
              {
                question: 'Quais documentos preciso para iniciar um serviço?',
                answer: 'Basicamente: matrícula atualizada do imóvel, documento pessoal (RG e CPF) do proprietário, comprovante de propriedade e, se aplicável, procuração. Durante o diagnóstico gratuito, nossa equipe identifica todos os documentos necessários para seu caso específico.',
              },
              {
                question: 'A TecGeo atende em todo o estado de Goiás?',
                answer: 'Sim! Atendemos propriedades rurais e urbanas em todo o estado de Goiás. Nossa sede fica em Goiânia, mas temos equipes preparadas para atender qualquer município goiano com a mesma qualidade e agilidade.',
              },
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                viewport={{ once: true }}
                className="bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-gray-300 transition-colors"
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
              </motion.div>
            ))}
          </div>

          <motion.div 
            className="text-center mt-10"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <p className="text-gray-600 mb-3">Não encontrou a resposta que procurava?</p>
            <button
              onClick={() => onNavigate('contato')}
              className="group inline-flex items-center gap-2 text-[#001B80] hover:text-[#1EB53A] transition-colors"
            >
              Entre em contato conosco
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Final - Diagnóstico */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-[#1EB53A] to-[#189c30] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="mb-4 sm:mb-6 text-2xl sm:text-3xl lg:text-4xl px-4 leading-tight">
            Quer saber o que falta para sua propriedade ficar 100% regularizada?
          </h2>
          <p className="text-base sm:text-lg lg:text-xl mb-10 sm:mb-12 lg:mb-14 text-gray-100 leading-relaxed px-4">
            Solicite um diagnóstico gratuito e descubra como regularizar sua propriedade
          </p>
          <button
            onClick={() => onNavigate('contato')}
            className="group bg-white text-[#1EB53A] px-8 sm:px-10 py-4 sm:py-5 rounded-full hover:bg-gray-100 transition-all hover:scale-105 shadow-2xl inline-flex items-center gap-2 text-sm sm:text-base mt-[35px] mr-[0px] mb-[0px] ml-[0px]"
          >
            Solicitar diagnóstico TecGeo
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </motion.div>
      </section>
    </div>
  );
}