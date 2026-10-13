import { CheckCircle2, Ruler, Leaf, FileCheck, DollarSign, TrendingUp, Shield, Clock, ArrowRight, User, Phone, MapPin, Building2, FileText, Package, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoAgroMais from 'figma:asset/8f0f97f781c6123f5df1c732226536c5545aac01.png';

interface PlanoAgroPageProps {
  onNavigate: (page: string) => void;
}

export function PlanoAgroPage({ onNavigate }: PlanoAgroPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    municipality: '',
    area: '',
    situation: '',
  });

  const slides = [
    {
      title: 'Regularização completa, sem complicação.',
      subtitle: 'O pacote integrado para solucionar as três maiores pendências do seu imóvel rural em Goiás.',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwYWdyaWN1bHR1cmUlMjBncmVlbnxlbnwxfHx8fDE3NjUwNjQ1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      showLogo: true,
    },
    {
      title: 'Economize até 30% contratando o pacote integrado',
      subtitle: 'Parcelamento facilitado sem comprometer o fluxo de caixa da sua safra. Condições exclusivas do Plano Agro+.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxmaW5hbmNlJTIwYnVzaW5lc3MlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjUwNjQ1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      title: 'Geo + CAR + Licenciamento em um único processo',
      subtitle: 'Um único contrato, uma só equipe técnica responsável e comunicação direta do início à certidão final.',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxmYXJtJTIwbGFuZCUyMHN1cnZleXxlbnwxfHx8fDE3NjUwNjQ1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 20000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado! Entraremos em contato em breve.');
    setFormData({ name: '', phone: '', municipality: '', area: '', situation: '' });
  };

  const benefits = [
    { icon: DollarSign, title: 'Contrato Único', description: 'Economia comprovada de até 30% em relação aos serviços contratados separadamente.' },
    { icon: TrendingUp, title: 'Fluxo Adequado à Safra', description: 'Parcelamento flexível que preserva o capital de giro para custeio agrícola.' },
    { icon: Shield, title: 'Condução Centralizada', description: 'Uma só equipe responsável perante Cartórios, INCRA e SEMAD Goiás.' },
    { icon: Clock, title: 'Atendimento Direto', description: 'Canal de comunicação contínuo com os engenheiros e responsáveis técnicos.' },
  ];

  const situations = [
    'Para venda, transferência ou averbação definitiva de escritura',
    'Para arrendamento rural e contratos agrários formais',
    'Para liberação e renovação de linhas de crédito e custeio rural',
    'Para evitar multas, notificações e embargos ambientais',
    'Para saneamento e retificação de títulos e áreas antigas',
    'Para adequação integral ao PRA (Programa de Regularização Ambiental)',
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero Carousel */}
      <section className="relative h-[540px] sm:h-[600px] overflow-hidden bg-[#001B80]">
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
                <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-3">
                  Programa Especial de Regularização
                </span>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl mb-8 text-slate-200 leading-relaxed font-normal">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="#formulario-agro"
                    className="bg-[#1EB53A] text-white px-7 py-3.5 rounded hover:bg-[#189c30] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
                  >
                    Solicitar Proposta do Plano Agro+
                    <ArrowRight size={18} />
                  </a>
                  <a
                    href="#detalhes-agro"
                    className="border border-white/70 text-white px-7 py-3.5 rounded hover:bg-white hover:text-[#001B80] transition-colors text-sm sm:text-base font-medium text-center"
                  >
                    Entenda os 3 Pilares
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-1.5 transition-all rounded-full ${
                index === currentSlide ? 'w-10 bg-[#1EB53A]' : 'w-3 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Visão Geral Institucional */}
      <section id="detalhes-agro" className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-5">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                Visão Geral
              </span>
              <h2 className="text-3xl font-bold text-[#001B80] leading-tight mb-4">
                O que é o Plano Agro+?
              </h2>
              <p className="text-slate-600 leading-relaxed text-base sm:text-lg mb-6">
                É a solução unificada criada pela TECGEO para resolver as três maiores travas que impedem um imóvel rural de alcançar 100% de regularidade jurídica e ambiental em Goiás.
              </p>
            </div>
            <div className="lg:col-span-7 border-t lg:border-t-0 lg:border-l border-slate-200 pt-6 lg:pt-0 lg:pl-10">
              <div className="border-l-2 border-[#1EB53A] pl-5 py-2 mb-6">
                <p className="text-slate-800 text-lg leading-relaxed font-medium">
                  Em vez de lidar com três fornecedores distintos e prazos desencontrados, você contrata um <strong>único processo coordenado</strong> com responsabilidade técnica integrada e economia garantida.
                </p>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed">
                Cada etapa é sincronizada: os dados do georreferenciamento de precisão servem de base imediata para o saneamento do CAR e para a montagem dos processos de licenciamento e outorga junto aos órgãos competentes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* O Tripé da Regularização - Colunas Abertas sem Cards */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Estrutura Técnica
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Os Três Pilares Integrados</h2>
            <p className="text-slate-600 text-base mt-2">
              Tudo o que sua fazenda necessita para operar em plena conformidade legal e financeira.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-y border-slate-200 bg-white py-10">
            {[
              {
                number: '01',
                icon: Ruler,
                title: 'Georreferenciamento (Geo)',
                desc: 'Medição geodésica certificada no INCRA com precisão centimétrica GNSS.',
                items: [
                  'Levantamento rigoroso de perímetro e divisas',
                  'Memorial descritivo oficial para cartório',
                  'Certificação no SIGEF / INCRA',
                  'Obrigatório para transferências e averbações',
                ],
              },
              {
                number: '02',
                icon: Leaf,
                title: 'CAR – SigCAR Goiás',
                desc: 'Regularização e atualização ambiental cadastral no órgão estadual.',
                items: [
                  'Delimitação de Reserva Legal e APPs',
                  'Mapeamento de nascentes e cursos hídricos',
                  'Conformidade com o Código Florestal',
                  'Indispensável para transações imobiliárias',
                ],
              },
              {
                number: '03',
                icon: FileCheck,
                title: 'Licenciamento Ambiental',
                desc: 'Regularização de atividades produtivas para liberação de crédito rural.',
                items: [
                  'Licenças para agricultura irrigada e sequeiro',
                  'Licenciamento de pecuária extensiva e intensiva',
                  'Processos de outorga d’água ou dispensa',
                  'Desbloqueio de financiamentos e custeio bancário',
                ],
              },
            ].map((pillar, idx) => (
              <div key={idx} className="py-8 md:py-0 md:px-8 first:pl-6 last:pr-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-bold text-[#1EB53A]">{pillar.number}</span>
                  <pillar.icon size={20} className="text-[#001B80]" />
                </div>
                <h3 className="text-lg font-bold text-[#001B80] mb-3">{pillar.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{pillar.desc}</p>
                <ul className="space-y-2.5">
                  {pillar.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={15} className="text-[#1EB53A] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Diferenciais Financeiros - Lista Aberta */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Condições Comerciais
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">
              Planejado para o Ciclo Produtivo do Campo
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="border-t-2 border-slate-200 pt-5">
                <div className="text-[#001B80] mb-3">
                  <benefit.icon size={22} className="text-[#1EB53A]" />
                </div>
                <h4 className="text-base font-bold text-slate-900 mb-2">{benefit.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="border border-slate-200 bg-slate-50 p-6 sm:p-8 max-w-3xl">
            <h4 className="text-base font-bold text-[#001B80] mb-2">Por que o pacote integrado é vantajoso?</h4>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              Sabemos que o produtor rural precisa preservar capital de giro durante o plantio e os tratos culturais. Com o Plano Agro+, você regulariza seu imóvel de forma escalonada, sem comprometer recursos destinados à safra e garantindo acesso desimpedido a bancos e financiadores.
            </p>
          </div>
        </div>
      </section>

      {/* Quando o Produtor Precisa - Grid de Texto Limpo */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Casos Práticos
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">
              Quando o Produtor Deve Contratar o Agro+?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-4">
            {situations.map((situation, index) => (
              <div key={index} className="flex items-start gap-3 py-3 border-b border-slate-200">
                <CheckCircle2 size={18} className="text-[#1EB53A] flex-shrink-0 mt-0.5" />
                <span className="text-sm text-slate-700 leading-relaxed">{situation}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário Institucional Sóbrio */}
      <section id="formulario-agro" className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Solicitação de Proposta
            </span>
            <h2 className="text-3xl font-bold text-[#001B80] mb-3">
              Receba um Diagnóstico Preliminar do Seu Imóvel
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Informe os dados da propriedade. Nossa equipe técnica avaliará as pendências documentais e apresentará uma proposta personalizada.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="border border-slate-200 p-8 sm:p-10 space-y-6 bg-slate-50">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="agro-name" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  Nome completo *
                </label>
                <input
                  type="text"
                  id="agro-name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Seu nome"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded focus:border-[#001B80] focus:outline-none text-sm text-slate-900"
                />
              </div>

              <div>
                <label htmlFor="agro-phone" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  Telefone / WhatsApp *
                </label>
                <input
                  type="tel"
                  id="agro-phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  placeholder="(64) 99999-9999"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded focus:border-[#001B80] focus:outline-none text-sm text-slate-900"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="agro-mun" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  Município da propriedade *
                </label>
                <input
                  type="text"
                  id="agro-mun"
                  required
                  value={formData.municipality}
                  onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                  placeholder="Ex: Cachoeira Alta - GO"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded focus:border-[#001B80] focus:outline-none text-sm text-slate-900"
                />
              </div>

              <div>
                <label htmlFor="agro-area" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                  Área aproximada (hectares) *
                </label>
                <input
                  type="text"
                  id="agro-area"
                  required
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  placeholder="Ex: 120 ha ou 25 alqueires"
                  className="w-full px-4 py-3 bg-white border border-slate-300 rounded focus:border-[#001B80] focus:outline-none text-sm text-slate-900"
                />
              </div>
            </div>

            <div>
              <label htmlFor="agro-sit" className="block text-xs font-semibold uppercase tracking-wider text-slate-700 mb-2">
                Situação atual da propriedade
              </label>
              <textarea
                id="agro-sit"
                rows={4}
                value={formData.situation}
                onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                placeholder="Descreva se já possui Geo antigo, pendência em CAR ou necessidade de licenciamento específico..."
                className="w-full px-4 py-3 bg-white border border-slate-300 rounded focus:border-[#001B80] focus:outline-none text-sm text-slate-900 resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#001B80] text-white py-3.5 rounded hover:bg-[#001566] transition-colors text-sm font-semibold flex items-center justify-center gap-2"
              >
                Solicitar Proposta Comercial
                <ArrowRight size={18} />
              </button>
              <p className="text-xs text-slate-500 text-center mt-3">
                Seus dados serão tratados com sigilo profissional estritamente para formulação da proposta técnica.
              </p>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}
