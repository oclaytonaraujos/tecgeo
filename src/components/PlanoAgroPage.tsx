import { CheckCircle2, Ruler, Leaf, FileCheck, DollarSign, TrendingUp, Shield, Clock, AlertCircle, ArrowRight, Sparkles, User, Phone, MapPin, Building2, FileText, ChevronLeft, ChevronRight, Package, Zap } from 'lucide-react';
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

  const [focusedField, setFocusedField] = useState<string | null>(null);

  const slides = [
    {
      title: 'Regularização completa, sem complicação.',
      subtitle: 'O pacote mais completo para resolver as três maiores pendências do seu imóvel rural',
      image: 'https://images.unsplash.com/photo-1625246333195-78d9c38ad449?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwYWdyaWN1bHR1cmUlMjBncmVlbnxlbnwxfHx8fDE3NjUwNjQ1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      showLogo: true,
    },
    {
      title: 'Economize até 30% contratando o pacote completo',
      subtitle: 'Parcelamento facilitado sem comprometer o fluxo de caixa da sua safra. Condições especiais exclusivas do Plano Agro+',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaW5hbmNlJTIwYnVzaW5lc3MlMjBwbGFubmluZ3xlbnwxfHx8fDE3NjUwNjQ1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: { icon: DollarSign, text: 'Economia de até 30%' },
    },
    {
      title: 'Geo + CAR + Licenciamento em um único pacote',
      subtitle: 'Tudo que sua propriedade precisa para estar 100% regularizada. Um único contrato, um único processo, um único pagamento.',
      image: 'https://images.unsplash.com/photo-1586771107445-d3ca888129ff?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXJtJTIwbGFuZCUyMHN1cnZleXxlbnwxfHx8fDE3NjUwNjQ1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: { icon: Package, text: 'Pacote Completo' },
    },
    {
      title: 'Atendimento direto com o engenheiro responsável',
      subtitle: 'Sem burocracia. Acompanhamento personalizado em cada etapa do processo. Transparência total do início ao fim.',
      image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwbWVldGluZyUyMG9mZmljZXxlbnwxfHx8fDE3NjUwNjQ1NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
      badge: { icon: Zap, text: 'Atendimento VIP' },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Obrigado! Entraremos em contato em breve.');
    setFormData({ name: '', phone: '', municipality: '', area: '', situation: '' });
  };

  const benefits = [
    { icon: DollarSign, title: 'Orçamento único', description: 'Um único valor para os três serviços' },
    { icon: TrendingUp, title: 'Parcelamento facilitado', description: 'Sem comprometer o fluxo da safra' },
    { icon: Shield, title: 'Zero burocracia', description: 'Cuidamos de toda a documentação' },
    { icon: Clock, title: 'Atendimento direto', description: 'Contato direto com engenheiro responsável' },
  ];

  const situations = [
    'Para vender ou escriturar',
    'Para arrendar terra',
    'Para liberar financiamento rural',
    'Para não sofrer multas ambientais',
    'Para atualizar imóveis antigos',
    'Para adequação ao PRA (Programa de Regularização Ambiental)',
  ];

  return (
    <div>
      {/* Hero Carousel */}
      <section className="relative h-[550px] sm:h-[650px] lg:h-[750px] overflow-hidden bg-[#1EB53A]">
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
              <div className="absolute inset-0 bg-gradient-to-r from-[#1EB53A]/95 via-[#1EB53A]/85 to-[#1EB53A]/50 sm:to-transparent"></div>
            </div>
            
            <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
              <motion.div
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="max-w-full sm:max-w-2xl text-white"
              >
                {slides[currentSlide].showLogo ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.5 }}
                    className="mb-8"
                  >
                    <img 
                      src={logoAgroMais} 
                      alt="Plano Agro+" 
                      className="h-64 sm:h-80 lg:h-96 drop-shadow-2xl mx-[0px] my-[-100px]"
                    />
                  </motion.div>
                ) : slides[currentSlide].badge ? (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1 }}
                    className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-4 sm:px-5 py-2 sm:py-2.5 rounded-full mb-6 sm:mb-8 shadow-lg"
                  >
                    {(() => {
                      const BadgeIcon = slides[currentSlide].badge!.icon;
                      return <BadgeIcon size={18} className="sm:w-5 sm:h-5" />;
                    })()}
                    <span className="text-sm sm:text-base">{slides[currentSlide].badge.text}</span>
                  </motion.div>
                ) : null}
                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 drop-shadow-2xl leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-12 sm:mb-16 lg:mb-20 text-gray-100 leading-relaxed max-w-xl">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onNavigate('contato')}
                    className="group bg-white text-[#1EB53A] sm:px-8 sm:py-4 rounded-full hover:bg-gray-100 transition-all hover:shadow-2xl hover:scale-105 flex items-center justify-center gap-2.5 text-sm sm:text-base shadow-xl px-[32px] py-[16px]"
                  >
                    <span className="text-center">Solicitar diagnóstico gratuito</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" size={20} />
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById('o-que-e-agro');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border-2 border-white text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full hover:bg-white hover:text-[#1EB53A] transition-all backdrop-blur-sm text-sm sm:text-base shadow-lg"
                  >
                    Saiba mais sobre o Agro+
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
                className={`transition-all duration-300 rounded-full ${ 
                  currentSlide === index 
                    ? 'bg-white w-12 h-3' 
                    : 'bg-white/50 w-3 h-3 hover:bg-white/75'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* O que é o Plano Agro+ */}
      <section id="o-que-e-agro" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <div className="inline-block bg-[#001B80]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#001B80]">O que é?</span>
            </div>
            <h2 className="text-[#001B80] mb-6">O que é o Plano Agro+?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              O Agro+ é um pacote criado pela TecGeo para resolver as três maiores pendências que impedem um imóvel rural de ficar completamente regularizado.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#001B80]/5 to-[#1EB53A]/5 border border-gray-100 p-12 rounded-3xl"
          >
            <p className="text-lg text-gray-700 text-center leading-relaxed">
              Ao invés de contratar três serviços separados, você contrata <strong className="text-[#001B80]">um único pacote integrado</strong> com <strong className="text-[#1EB53A]">condições especiais de pagamento</strong> e atendimento personalizado da equipe TecGeo.
            </p>
          </motion.div>
        </div>
      </section>

      {/* O Tripé da Regularização */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#1EB53A]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#1EB53A]">Tripé da Regularização</span>
            </div>
            <h2 className="text-[#001B80] mb-6">Três pilares fundamentais em um único pacote</h2>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Tudo que sua propriedade precisa para estar 100% regularizada
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Ruler,
                color: '#001B80',
                number: '01',
                title: 'Georreferenciamento (Geo)',
                items: [
                  'Medição certificada com tecnologia GNSS',
                  'Precisão centimétrica garantida',
                  'Levantamento de perímetro, área e divisas',
                  'Obrigatório para escritura e matrículas grandes',
                  'Atende exigências do INCRA',
                ],
              },
              {
                icon: Leaf,
                color: '#1EB53A',
                number: '02',
                title: 'CAR – SigCAR Goiás',
                items: [
                  'Atualização obrigatória conforme legislação',
                  'Regularização ambiental completa',
                  'Mapeamento de Reserva Legal',
                  'Identificação de APPs (Áreas de Preservação Permanente)',
                  'Mapeamento de rios, represas e nascentes',
                  'Adequação ao sistema estadual SigCAR',
                ],
              },
              {
                icon: FileCheck,
                color: '#001B80',
                number: '03',
                title: 'Licenciamento Ambiental',
                items: [
                  'Para atividades de agricultura e pecuária',
                  'Agricultura irrigada ou de sequeiro',
                  'Pecuária extensiva',
                  'Outorga de água ou dispensa',
                  'Relatórios e documentos para órgãos ambientais',
                ],
              },
            ].map((card, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                <div 
                  className="relative bg-white p-10 rounded-3xl transition-all duration-500 h-full flex flex-col"
                  style={{
                    background: 'rgba(255, 255, 255, 0.9)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: `0 12px 40px ${card.color}15, 0 4px 12px rgba(0, 0, 0, 0.08)`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = `0 24px 60px ${card.color}25, 0 8px 20px rgba(0, 0, 0, 0.12)`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = `0 12px 40px ${card.color}15, 0 4px 12px rgba(0, 0, 0, 0.08)`;
                  }}
                >
                  {/* Number Badge */}
                  <div 
                    className="absolute -top-5 -left-5 w-16 h-16 rounded-2xl flex items-center justify-center text-white shadow-xl z-10"
                    style={{ 
                      background: `linear-gradient(135deg, ${card.color} 0%, ${card.color}dd 100%)`,
                      boxShadow: `0 8px 24px ${card.color}40`,
                    }}
                  >
                    <span className="text-xl font-semibold">{card.number}</span>
                  </div>

                  {/* Icon */}
                  <div 
                    className="w-20 h-20 rounded-2xl flex items-center justify-center mb-6 mt-8 transition-all duration-500 group-hover:scale-110" 
                    style={{ 
                      background: `linear-gradient(135deg, ${card.color}15 0%, ${card.color}08 100%)`,
                      boxShadow: `0 4px 12px ${card.color}10`,
                    }}
                  >
                    <card.icon size={36} style={{ color: card.color }} />
                  </div>

                  {/* Title */}
                  <h3 className="text-[#001B80] mb-6 transition-colors group-hover:text-[#1EB53A]">
                    {card.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-4 flex-grow">
                    {card.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 size={20} className="flex-shrink-0 mt-0.5 transition-transform group-hover:scale-110" style={{ color: card.color }} />
                        <span className="text-gray-700 leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Gradient Overlay on Hover */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, ${card.color}05 0%, transparent 100%)`,
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* O Diferencial Financeiro */}
      <section className="py-24 bg-gradient-to-br from-[#1EB53A] to-[#189c30] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full mb-6 text-white">
              <TrendingUp size={24} />
              <span className="text-lg">Diferencial Financeiro</span>
            </div>
            <h2 className="text-white mb-6">Pagamento facilitado pensado para o produtor rural</h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-3xl text-center hover:scale-105 transition-all"
              >
                <div className="bg-[#1EB53A]/10 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="text-[#1EB53A]" size={36} />
                </div>
                <h4 className="text-[#001B80] mb-3">{benefit.title}</h4>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="bg-white p-12 rounded-3xl max-w-3xl mx-auto text-center shadow-2xl"
          >
            <h3 className="text-[#001B80] mb-6">Por que isso importa?</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              Sabemos que o produtor rural precisa preservar o capital de giro, especialmente em períodos de safra. Com o Plano Agro+, você regulariza sua propriedade sem comprometer seus investimentos prioritários.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quando o produtor precisa */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#001B80]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#001B80]">Situações</span>
            </div>
            <h2 className="text-[#001B80] mb-6">Quando o produtor precisa do Agro+?</h2>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Situações em que a regularização é essencial
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {situations.map((situation, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group bg-gray-50 p-8 rounded-3xl hover:bg-[#1EB53A] hover:text-white transition-all cursor-pointer shadow-lg hover:shadow-2xl"
              >
                <p className="flex items-start gap-3">
                  <CheckCircle2 size={24} className="flex-shrink-0 text-[#1EB53A] group-hover:text-white transition-colors" />
                  <span className="text-gray-700 group-hover:text-white transition-colors leading-relaxed">{situation}</span>
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-24 bg-gradient-to-br from-[#001B80] to-[#003cb3] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-6 py-3 rounded-full mb-6">
              <Sparkles size={20} />
              <span>Diagnóstico Gratuito</span>
            </div>
            <h2 className="mb-6">Receba um diagnóstico inicial gratuito</h2>
            <p className="text-xl text-gray-200 leading-relaxed">
              Preencha o formulário e descubra o que sua propriedade precisa para estar 100% regularizada
            </p>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-white p-10 rounded-3xl text-gray-900 shadow-2xl"
          >
            <div className="space-y-6">
              {/* Nome completo */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                  Nome completo *
                </label>
                <div className="relative group">
                  <div 
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      focusedField === 'name' ? 'text-[#1EB53A] scale-110' : 'text-gray-400'
                    }`}
                  >
                    <User size={20} />
                  </div>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className={`w-full pl-12 pr-6 py-4 bg-gray-50 border-2 rounded-2xl transition-all duration-300 ${
                      focusedField === 'name' 
                        ? 'border-[#1EB53A] shadow-lg shadow-[#1EB53A]/20 bg-white' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onFocus={() => setFocusedField('name')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Digite seu nome completo"
                  />
                  {focusedField === 'name' && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#1EB53A] to-[#189c30] rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Telefone/WhatsApp */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.15 }}
              >
                <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                  Telefone/WhatsApp *
                </label>
                <div className="relative group">
                  <div 
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      focusedField === 'phone' ? 'text-[#1EB53A] scale-110' : 'text-gray-400'
                    }`}
                  >
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className={`w-full pl-12 pr-6 py-4 bg-gray-50 border-2 rounded-2xl transition-all duration-300 ${
                      focusedField === 'phone' 
                        ? 'border-[#1EB53A] shadow-lg shadow-[#1EB53A]/20 bg-white' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="(00) 00000-0000"
                  />
                  {focusedField === 'phone' && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#1EB53A] to-[#189c30] rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Município da propriedade */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="municipality" className="block text-sm mb-2 text-gray-700">
                  Município da propriedade *
                </label>
                <div className="relative group">
                  <div 
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      focusedField === 'municipality' ? 'text-[#1EB53A] scale-110' : 'text-gray-400'
                    }`}
                  >
                    <MapPin size={20} />
                  </div>
                  <input
                    type="text"
                    id="municipality"
                    required
                    value={formData.municipality}
                    onChange={(e) => setFormData({ ...formData, municipality: e.target.value })}
                    className={`w-full pl-12 pr-6 py-4 bg-gray-50 border-2 rounded-2xl transition-all duration-300 ${
                      focusedField === 'municipality' 
                        ? 'border-[#1EB53A] shadow-lg shadow-[#1EB53A]/20 bg-white' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onFocus={() => setFocusedField('municipality')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Ex: Goiânia"
                  />
                  {focusedField === 'municipality' && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#1EB53A] to-[#189c30] rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Tamanho da área */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.25 }}
              >
                <label htmlFor="area" className="block text-sm mb-2 text-gray-700">
                  Tamanho da área (hectares aproximados) *
                </label>
                <div className="relative group">
                  <div 
                    className={`absolute left-4 top-1/2 -translate-y-1/2 transition-all duration-300 ${
                      focusedField === 'area' ? 'text-[#1EB53A] scale-110' : 'text-gray-400'
                    }`}
                  >
                    <Building2 size={20} />
                  </div>
                  <input
                    type="text"
                    id="area"
                    required
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className={`w-full pl-12 pr-6 py-4 bg-gray-50 border-2 rounded-2xl transition-all duration-300 ${
                      focusedField === 'area' 
                        ? 'border-[#1EB53A] shadow-lg shadow-[#1EB53A]/20 bg-white' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onFocus={() => setFocusedField('area')}
                    onBlur={() => setFocusedField(null)}
                    placeholder="Ex: 50 hectares"
                  />
                  {focusedField === 'area' && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#1EB53A] to-[#189c30] rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Situação do imóvel */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="situation" className="block text-sm mb-2 text-gray-700">
                  Situação do imóvel
                </label>
                <div className="relative group">
                  <div 
                    className={`absolute left-4 top-4 transition-all duration-300 ${
                      focusedField === 'situation' ? 'text-[#1EB53A] scale-110' : 'text-gray-400'
                    }`}
                  >
                    <FileText size={20} />
                  </div>
                  <textarea
                    id="situation"
                    rows={4}
                    value={formData.situation}
                    onChange={(e) => setFormData({ ...formData, situation: e.target.value })}
                    placeholder="Descreva brevemente a situação atual do imóvel (se já possui geo, CAR, licenças, etc.)"
                    className={`w-full pl-12 pr-6 py-4 bg-gray-50 border-2 rounded-2xl transition-all duration-300 resize-none ${
                      focusedField === 'situation' 
                        ? 'border-[#1EB53A] shadow-lg shadow-[#1EB53A]/20 bg-white' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                    onFocus={() => setFocusedField('situation')}
                    onBlur={() => setFocusedField(null)}
                  />
                  {focusedField === 'situation' && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-[#1EB53A] to-[#189c30] rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </div>
              </motion.div>

              {/* Botão Submit */}
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.35 }}
                type="submit"
                className="group relative w-full bg-gradient-to-r from-[#1EB53A] to-[#189c30] text-white py-5 rounded-2xl transition-all hover:scale-105 shadow-lg hover:shadow-2xl overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Solicitar diagnóstico gratuito
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
              </motion.button>
            </div>
          </motion.form>
        </div>
      </section>
    </div>
  );
}