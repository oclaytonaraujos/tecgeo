import { CheckCircle2, MapPin, Award, Users, Zap, Ruler, Leaf, FileCheck, Tractor, Map, GitBranch, FileText, Building2, ArrowRight, TrendingUp, ChevronDown, Briefcase, ShieldCheck, Scale } from 'lucide-react';
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
    { icon: Ruler, title: 'Georreferenciamento', description: 'Medição certificada de imóveis rurais com tecnologia GNSS e precisão centimétrica INCRA.' },
    { icon: Leaf, title: 'CAR – Cadastro Ambiental Rural', description: 'Cadastro e atualização no sistema SigCAR Goiás com mapeamento de Reserva Legal e APPs.' },
    { icon: Building2, title: 'Loteamento Urbano', description: 'Projetos técnicos aprovados e documentação urbanística completa para loteadores.' },
    { icon: Tractor, title: 'Loteamento Rural', description: 'Divisão, fracionamento e regularização de módulos fiscais e glebas no meio rural.' },
    { icon: GitBranch, title: 'Desmembramento', description: 'Separação jurídica e física de propriedades para venda ou partilha de herança.' },
    { icon: Map, title: 'Unificação', description: 'Fusão de matrículas contíguas em um único registro imobiliário saneado.' },
    { icon: FileText, title: 'Assessoria em Escrituras', description: 'Acompanhamento notarial e registral em estremações, doações e escrituras públicas.' },
    { icon: FileCheck, title: 'Licenciamento Ambiental', description: 'Licenciamento (LP, LI, LO), outorgas de água e dispensas para agricultura e pecuária.' },
  ];

  const steps = [
    { number: '01', title: 'Diagnóstico Inicial', description: 'Análise minuciosa de certidões, matrículas e pendências da propriedade.' },
    { number: '02', title: 'Levantamento Técnico', description: 'Coleta em campo com receptores GNSS de alta precisão e geoprocessamento.' },
    { number: '03', title: 'Processamento & Órgãos', description: 'Protocolo e acompanhamento técnico junto ao INCRA, SEMAD e Cartórios.' },
    { number: '04', title: 'Certificação & Registro', description: 'Propriedade 100% regularizada, averbada e apta para crédito rural.' },
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero Carousel */}
      <section className="relative h-[560px] sm:h-[620px] lg:h-[680px] overflow-hidden bg-[#001B80]">
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#001B80]/95 via-[#001B80]/85 to-[#001B80]/40 sm:to-transparent"></div>
            </div>
            
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <div className="max-w-2xl text-white">
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-4">
                  TECGEO • Engenharia & Regularização
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-10 text-slate-200 leading-relaxed max-w-xl font-normal">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onNavigate('plano-agro')}
                    className="bg-[#1EB53A] text-white px-8 py-3.5 rounded hover:bg-[#189c30] transition-colors flex items-center justify-center gap-2.5 text-sm sm:text-base font-medium"
                  >
                    Conhecer o Plano Agro+
                    <ArrowRight size={18} />
                  </button>
                  <button
                    onClick={() => onNavigate('contato')}
                    className="border border-white/70 text-white px-8 py-3.5 rounded hover:bg-white hover:text-[#001B80] transition-colors text-sm sm:text-base font-medium"
                  >
                    Falar com um Especialista
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 transition-all rounded-full ${
                index === currentSlide
                  ? 'w-10 bg-[#1EB53A]'
                  : 'w-3 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Ir para slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Stats - Clean Typography Border */}
      <section className="bg-slate-50 py-10 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-slate-200">
            {[
              { number: '10+', label: 'Anos de experiência técnica' },
              { number: '500+', label: 'Propriedades regularizadas' },
              { number: '100%', label: 'Conformidade com o INCRA' },
              { number: 'Goiás', label: 'Atendimento em todo o estado' },
            ].map((stat, index) => (
              <div key={index} className="py-4 md:py-0 md:px-6 text-center">
                <div className="text-3xl sm:text-4xl font-bold text-[#001B80] tracking-tight">{stat.number}</div>
                <div className="text-slate-600 text-xs sm:text-sm mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Por que a TECGEO existe - Editorial Layout */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-3">
                Propósito Institucional
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#001B80] leading-tight mb-6">
                Precisão técnica para a segurança patrimonial do agronegócio.
              </h2>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                A TECGEO atua como braço estratégico para produtores rurais, escritórios e investidores, transformando processos burocráticos em propriedades desembaraçadas, valorizadas e prontas para financiamentos e sucessão.
              </p>
            </div>
            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8 border-t lg:border-t-0 lg:border-l border-slate-200 pt-8 lg:pt-0 lg:pl-10">
              {[
                { icon: Award, title: 'Domínio Normativo', desc: 'Profundo conhecimento das exigências do INCRA, SigCAR, SEMAD e cartórios de registro de imóveis.' },
                { icon: MapPin, title: 'Presença Regional', desc: 'Escritórios físicos em Cachoeira Alta e Caçu, com atendimento de campo em todo o território goiano.' },
                { icon: Zap, title: 'Tecnologia GNSS', desc: 'Receptores geodésicos de alta frequência garantindo rigor centimétrico em perímetros e divisas.' },
                { icon: Users, title: 'Equipe Multidisciplinar', desc: 'Agrimensores, especialistas ambientais e analistas com visão técnica, notarial e ambiental integrada.' },
              ].map((item, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-3">
                    <item.icon className="text-[#1EB53A] flex-shrink-0" size={20} />
                    <h4 className="text-base font-semibold text-slate-900">{item.title}</h4>
                  </div>
                  <p className="text-sm text-slate-600 leading-relaxed pl-8">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Plano Agro+ - Layout Aberto Estruturado */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#001B80] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12 sm:mb-16">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-3">
              Solução Integrada
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4">
              Plano Agro+: Georreferenciamento + CAR + Licenciamento
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              O tripé da regularização rural unificado em um só contrato com economia de até 30% e condições de parcelamento sob medida para o fluxo da safra.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/15 border-y border-white/15 py-10 mb-12">
            {[
              {
                number: '01',
                title: 'Georreferenciamento (Geo)',
                desc: 'Levantamento perimétrico certificado no INCRA com precisão centimétrica GNSS, essencial para escrituração e registro.',
                items: ['Memorial descritivo oficial', 'Conformidade com a Lei 10.267', 'Certificação no SIGEF / INCRA'],
              },
              {
                number: '02',
                title: 'CAR – SigCAR Goiás',
                desc: 'Mapeamento ambiental de Reserva Legal, APPs, nascentes e recursos hídricos conforme o Código Florestal vigente.',
                items: ['Adequação ao sistema estadual', 'Saneamento de sobreposições', 'Habilitação para transações rurais'],
              },
              {
                number: '03',
                title: 'Licenciamento Ambiental',
                desc: 'Regularização obrigatória para liberação de crédito rural e financiamentos bancários de custeio e investimento.',
                items: ['Licenças de sequeiro ou irrigado', 'Outorgas ou dispensa de água', 'Conformidade com órgãos ambientais'],
              },
            ].map((col, index) => (
              <div key={index} className="py-8 md:py-0 md:px-8 first:pl-0 last:pr-0">
                <span className="text-xs font-mono text-[#1EB53A] tracking-wider block mb-2">{col.number}</span>
                <h3 className="text-xl font-bold text-white mb-3">{col.title}</h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">{col.desc}</p>
                <ul className="space-y-2.5">
                  {col.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 size={16} className="text-[#1EB53A] flex-shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
            <div>
              <p className="text-white font-medium text-base sm:text-lg">Pronto para unificar a regularização da sua fazenda?</p>
              <p className="text-slate-400 text-sm">Receba um diagnóstico documental sem custo e conheça as condições do pacote.</p>
            </div>
            <button
              onClick={() => onNavigate('plano-agro')}
              className="bg-[#1EB53A] text-white px-7 py-3 rounded hover:bg-[#189c30] transition-colors inline-flex items-center gap-2 text-sm font-medium"
            >
              Ver detalhes do Plano Agro+
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Serviços TECGEO - Layout Tabular Aberto */}
      <section className="py-16 sm:py-20 lg:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                Portfólio Técnico
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-[#001B80]">
                Serviços de Engenharia e Regularização
              </h2>
            </div>
            <button
              onClick={() => onNavigate('servicos')}
              className="mt-4 md:mt-0 text-sm font-semibold text-[#001B80] hover:text-[#1EB53A] inline-flex items-center gap-1.5 transition-colors"
            >
              Ver todos os serviços
              <ArrowRight size={16} />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
            {services.map((service, index) => (
              <div key={index} className="group">
                <div className="w-10 h-10 border border-slate-200 flex items-center justify-center rounded mb-4 text-[#001B80] group-hover:border-[#1EB53A] group-hover:text-[#1EB53A] transition-colors">
                  <service.icon size={20} />
                </div>
                <h3 className="text-base font-bold text-slate-900 mb-2 group-hover:text-[#001B80] transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Banner Institucional Consultoria - Sóbre e Editorial */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-3">
                Nova Divisão Estratégica
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-5 leading-tight">
                TECGEO Consultoria: inteligência fundiária e blindagem jurídica.
              </h2>
              <p className="text-slate-300 text-base sm:text-lg leading-relaxed mb-6">
                Além do levantamento de campo, estruturamos uma frente consultiva multidisciplinar para resolver impasses de sobreposição, assessoria a advogados do agronegócio, due diligence pré-compra e partilhas sucessórias.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-slate-800">
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Due Diligence de Terras</h4>
                  <p className="text-xs text-slate-400">Auditoria prévia para compradores e investidores.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Saneamento SIGEF/INCRA</h4>
                  <p className="text-xs text-slate-400">Solução técnica de sobreposições antigas.</p>
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-white mb-1">Suporte Pericial</h4>
                  <p className="text-xs text-slate-400">Pareceres técnicos para escritórios agraristas.</p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex lg:justify-end">
              <button
                onClick={() => onNavigate('consultoria')}
                className="bg-[#1EB53A] text-white px-8 py-3.5 rounded hover:bg-[#189c30] transition-colors inline-flex items-center gap-2 text-sm font-medium w-full sm:w-auto justify-center"
              >
                <Briefcase size={18} />
                Conhecer a Consultoria
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Como funciona o processo - Timeline Linear */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Metodologia de Atendimento
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Como Conduzimos Seu Processo</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="border-t-2 border-slate-200 pt-6">
                <span className="text-xs font-mono font-bold text-[#1EB53A] block mb-2">{step.number}</span>
                <h4 className="text-base font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Notícias Recentes */}
      {featuredNews.length > 0 && (
        <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10">
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                  Informativo & Mercado
                </span>
                <h2 className="text-3xl font-bold text-[#001B80]">Últimas Notícias</h2>
              </div>
              <button
                onClick={() => onNavigate('noticias')}
                className="mt-3 sm:mt-0 text-sm font-semibold text-[#001B80] hover:text-[#1EB53A] inline-flex items-center gap-1.5 transition-colors"
              >
                Ver todas as notícias
                <ArrowRight size={16} />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
          </div>
        </section>
      )}

      {/* FAQ Institucional - Linhas Limpas */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Dúvidas Frequentes
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Perguntas e Respostas</h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {[
              {
                question: 'Quanto tempo leva para fazer o georreferenciamento de uma propriedade?',
                answer: 'O prazo varia conforme o tamanho da área e complexidade do terreno. Em média, propriedades de até 100 hectares levam de 15 a 30 dias entre levantamento de campo, processamento de dados e elaboração do memorial descritivo. Áreas maiores podem levar de 30 a 60 dias.',
              },
              {
                question: 'O CAR é obrigatório para todas as propriedades rurais?',
                answer: 'Sim, o Cadastro Ambiental Rural (CAR) é obrigatório para todos os imóveis rurais, independentemente do tamanho, conforme estabelecido pelo Código Florestal (Lei 12.651/2012). É indispensável para acesso a crédito bancário e regularidade fiscal.',
              },
              {
                question: 'Qual a diferença entre desmembramento e unificação?',
                answer: 'Desmembramento é a divisão de uma matrícula em duas ou mais glebas autônomas para partilha ou venda. Unificação é o processo inverso: fusão de matrículas adjacentes do mesmo proprietário em um único registro consolidado.',
              },
              {
                question: 'Posso parcelar o pagamento dos serviços técnicos?',
                answer: 'Sim. Oferecemos condições facilitadas de parcelamento. No Plano Agro+ (Geo + CAR + Licenciamento), o produtor rural garante economia de até 30% em relação aos serviços individuais e fluxo adaptado à colheita/safra.',
              },
              {
                question: 'O georreferenciamento feito pela TECGEO é aceito pelo INCRA?',
                answer: 'Sim, 100%. Nossos profissionais são credenciados e todos os trabalhos atendem integralmente à 3ª Edição da Norma Técnica para Georreferenciamento de Imóveis Rurais do INCRA.',
              },
            ].map((faq, index) => (
              <div key={index} className="py-4">
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between text-left py-2 font-medium text-slate-900 hover:text-[#001B80] transition-colors"
                >
                  <span className="text-base sm:text-lg pr-4">{faq.question}</span>
                  <ChevronDown
                    className={`flex-shrink-0 text-[#001B80] transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180 text-[#1EB53A]' : ''
                    }`}
                    size={18}
                  />
                </button>
                {openFaq === index && (
                  <div className="pt-2 pb-3 text-slate-600 text-sm sm:text-base leading-relaxed">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final Sóbrio */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-l-4 border-[#1EB53A] bg-white p-8 sm:p-12 border border-slate-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                Atendimento Técnico
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#001B80] mb-3">
                Quer saber o que falta para sua propriedade ficar 100% regularizada?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Solicite uma avaliação documental preliminar sem custo com nossos engenheiros e consultores em Goiás.
              </p>
            </div>
            <button
              onClick={() => onNavigate('contato')}
              className="bg-[#001B80] text-white px-8 py-3.5 rounded hover:bg-[#001566] transition-colors inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap"
            >
              Solicitar Diagnóstico
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
