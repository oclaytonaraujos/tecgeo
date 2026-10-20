import { CheckCircle2, Ruler, Leaf, FileCheck, DollarSign, TrendingUp, Shield, Clock, AlertCircle, ArrowRight, Sparkles, User, Phone, MapPin, MapPinned, Building, Building2, FileText, ChevronLeft, ChevronRight, Package, Zap, Briefcase, MessageSquare, Send } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoAgroMais from 'figma:asset/8f0f97f781c6123f5df1c732226536c5545aac01.png';
import { supabase } from '../lib/supabase';
import { SuccessModal } from './SuccessModal';

interface PlanoAgroPageProps {
  onNavigate: (page: string) => void;
}

const PHONE_REGEX = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

export function PlanoAgroPage({ onNavigate }: PlanoAgroPageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    whatsapp: '',
    municipality: '',
    areaSize: '',
    propertyStatus: '',
    service: 'Plano Agro+ (Geo + CAR + Licenciamento)',
    message: '',
  });

  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
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
      title: 'Atendimento direto com o responsável técnico',
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

  const services = [
    'Plano Agro+ (Geo + CAR + Licenciamento)',
    'Georreferenciamento',
    'CAR - Cadastro Ambiental Rural',
    'Licenciamento Ambiental',
    'Loteamento Urbano',
    'Loteamento Rural',
    'Desmembramento',
    'Unificação',
    'Assessoria em Escrituras',
    'Outro',
  ];

  const validate = () => {
    const errors: Record<string, string> = {};
    if (!formData.name.trim() || formData.name.trim().length < 3)
      errors.name = 'Informe seu nome completo (mín. 3 caracteres).';
    if (!PHONE_REGEX.test(formData.phone.replace(/\s/g, '')))
      errors.phone = 'Telefone inválido. Ex: (64) 99999-9999';
    if (!formData.municipality.trim())
      errors.municipality = 'Informe o município da propriedade.';
    if (!formData.areaSize.trim())
      errors.areaSize = 'Informe o tamanho aproximado da área.';
    if (!formData.service)
      errors.service = 'Selecione o serviço de interesse.';
    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(null);

    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      return;
    }
    setFieldErrors({});
    setSubmitting(true);

    const { error } = await supabase.from('contact_submissions').insert({
      name: formData.name.trim(),
      phone: formData.phone.trim(),
      whatsapp: formData.whatsapp.trim() || null,
      municipality: formData.municipality.trim(),
      area_size: formData.areaSize.trim(),
      property_status: formData.propertyStatus || null,
      service: formData.service,
      message: formData.message.trim() || null,
    });

    setSubmitting(false);

    if (error) {
      setSubmitError('Erro ao enviar formulário. Por favor, tente novamente ou entre em contato pelo WhatsApp.');
      return;
    }

    setShowSuccessModal(true);
    setFormData({
      name: '',
      phone: '',
      whatsapp: '',
      municipality: '',
      areaSize: '',
      propertyStatus: '',
      service: 'Plano Agro+ (Geo + CAR + Licenciamento)',
      message: '',
    });
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

                
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl mb-6 sm:mb-8 drop-shadow-2xl leading-tight">
                  {slides[currentSlide].title}
                </h1>
                <p className="text-base sm:text-lg lg:text-xl xl:text-2xl mb-12 sm:mb-16 lg:mb-20 text-gray-100 leading-relaxed max-w-xl">
                  {slides[currentSlide].subtitle}
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => onNavigate('contato')}
                    className="group bg-white text-[#1EB53A] px-8 py-4 rounded-xl hover:bg-gray-100 transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base shadow-lg"
                  >
                    <span>Solicitar contratação do serviço</span>
                    <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" size={20} />
                  </button>
                  <button
                    onClick={() => {
                      const element = document.getElementById('o-que-e-agro');
                      element?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#1EB53A] transition-all text-sm sm:text-base"
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
      <section id="o-que-e-agro" className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <span className="inline-block text-sm font-semibold text-[#1EB53A] border-b-2 border-[#1EB53A] pb-1 mb-4 tracking-wide">
              O que é?
            </span>
            <h2 className="text-[#001B80] mb-6">O que é o Plano Agro+?</h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-6">
              O Agro+ é um pacote criado pela TECGEO para resolver as três maiores pendências que impedem um imóvel rural de ficar completamente regularizado.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ao invés de contratar três serviços separados, você contrata <strong className="text-[#001B80]">um único pacote integrado</strong> com <strong className="text-[#1EB53A]">condições especiais de pagamento</strong> e atendimento personalizado da equipe TECGEO.
            </p>
          </motion.div>
        </div>
      </section>

      {/* O Tripé da Regularização */}
      <section className="py-28 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold text-[#1EB53A] border-b-2 border-[#1EB53A] pb-1 mb-4 tracking-wide">
              Tripé da Regularização
            </span>
            <h2 className="text-[#001B80] mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-balance">Três pilares fundamentais em um único pacote</h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed text-pretty max-w-2xl mx-auto">
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
                  'De suma importância para retirada do crédito rural',
                  'Existem vários tipos: LP, LI, LO e simplificada',
                  'Para agricultura irrigada ou de sequeiro',
                  'Para pecuária extensiva',
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
      <section className="py-28 sm:py-32 bg-gradient-to-br from-[#1EB53A] to-[#189c30] relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold text-white border-b-2 border-white/80 pb-1 mb-4 tracking-wide">
              Diferencial Financeiro
            </span>
            <h2 className="text-white text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-balance">Pagamento facilitado pensado para o produtor rural</h2>
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h3 className="text-white mb-4 sm:mb-6 text-2xl sm:text-3xl font-bold text-balance">Por que isso importa?</h3>
            <p className="text-white/90 text-lg sm:text-xl leading-relaxed text-pretty max-w-2xl mx-auto">
              Sabemos que o produtor rural precisa preservar o capital de giro, especialmente em períodos de safra. Com o Plano Agro+, você regulariza sua propriedade sem comprometer seus investimentos prioritários.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quando o produtor precisa */}
      <section className="py-28 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold text-[#1EB53A] border-b-2 border-[#1EB53A] pb-1 mb-4 tracking-wide">
              Situações
            </span>
            <h2 className="text-[#001B80] mb-4 text-3xl sm:text-4xl font-bold tracking-tight text-balance">Quando o produtor precisa do Agro+?</h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed text-pretty max-w-2xl mx-auto">
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

      {/* Formulário de Contato / Contratação */}
      <section id="contratar" className="py-28 sm:py-32 bg-gradient-to-b from-white to-gray-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <span className="inline-block text-sm font-semibold text-[#1EB53A] border-b-2 border-[#1EB53A] pb-1 mb-4 tracking-wide">
              Contratação de Serviço
            </span>
            <h2 className="text-[#001B80] text-3xl sm:text-4xl font-bold mb-4 tracking-tight text-balance">
              Contrate o serviço e indicamos toda a documentação necessária
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed text-pretty text-center">
              Preencha o formulário, entre em contato com nossa equipe e ao contratar o serviço indicaremos toda a documentação necessária para regularizar sua propriedade
            </p>
          </motion.div>

          {/* Formulário */}
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Erro de envio */}
            {submitError && (
              <div className="flex items-start gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                <AlertCircle size={16} className="flex-shrink-0 mt-0.5" />
                {submitError}
              </div>
            )}

            {/* Nome completo */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                Nome completo *
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors">
                  <User size={20} />
                </div>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => { setFormData({ ...formData, name: e.target.value }); setFieldErrors(prev => ({ ...prev, name: '' })); }}
                  onFocus={() => setFocusedField('name')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 ${fieldErrors.name ? 'border-red-400' : 'border-gray-200'}`}
                  placeholder="Digite seu nome completo"
                />
              </div>
              {fieldErrors.name && <p className="mt-1 text-xs text-red-600">{fieldErrors.name}</p>}
            </motion.div>

            {/* Telefone/WhatsApp - Grid 2 colunas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                  Telefone/WhatsApp *
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors">
                    <Phone size={20} />
                  </div>
                  <input
                    type="tel"
                    id="phone"
                    value={formData.phone}
                    onChange={(e) => { setFormData({ ...formData, phone: e.target.value }); setFieldErrors(prev => ({ ...prev, phone: '' })); }}
                    onFocus={() => setFocusedField('phone')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 ${fieldErrors.phone ? 'border-red-400' : 'border-gray-200'}`}
                    placeholder="(00) 00000-0000"
                  />
                </div>
                {fieldErrors.phone && <p className="mt-1 text-xs text-red-600">{fieldErrors.phone}</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25 }}
              >
                <label htmlFor="municipality" className="block text-sm mb-2 text-gray-700">
                  Município da propriedade *
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors">
                    <MapPinned size={20} />
                  </div>
                  <input
                    type="text"
                    id="municipality"
                    value={formData.municipality}
                    onChange={(e) => { setFormData({ ...formData, municipality: e.target.value }); setFieldErrors(prev => ({ ...prev, municipality: '' })); }}
                    onFocus={() => setFocusedField('municipality')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 ${fieldErrors.municipality ? 'border-red-400' : 'border-gray-200'}`}
                    placeholder="Ex: Goiânia"
                  />
                </div>
                {fieldErrors.municipality && <p className="mt-1 text-xs text-red-600">{fieldErrors.municipality}</p>}
              </motion.div>
            </div>

            {/* Tamanho da área - Grid 2 colunas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <label htmlFor="areaSize" className="block text-sm mb-2 text-gray-700">
                  Tamanho da área (hectares aproximados) *
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors">
                    <Building size={20} />
                  </div>
                  <input
                    type="text"
                    id="areaSize"
                    value={formData.areaSize}
                    onChange={(e) => { setFormData({ ...formData, areaSize: e.target.value }); setFieldErrors(prev => ({ ...prev, areaSize: '' })); }}
                    onFocus={() => setFocusedField('areaSize')}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 ${fieldErrors.areaSize ? 'border-red-400' : 'border-gray-200'}`}
                    placeholder="Ex: 50 hectares"
                  />
                </div>
                {fieldErrors.areaSize && <p className="mt-1 text-xs text-red-600">{fieldErrors.areaSize}</p>}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
              >
                <label htmlFor="propertyStatus" className="block text-sm mb-2 text-gray-700">
                  Situação do imóvel
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors z-10">
                    <Briefcase size={20} />
                  </div>
                  <select
                    id="propertyStatus"
                    value={formData.propertyStatus}
                    onChange={(e) => setFormData({ ...formData, propertyStatus: e.target.value })}
                    onFocus={() => setFocusedField('propertyStatus')}
                    onBlur={() => setFocusedField(null)}
                    className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 appearance-none cursor-pointer"
                  >
                    <option value="">Selecione</option>
                    <option value="possui-geo">Já possui Georreferenciamento</option>
                    <option value="possui-car">Já possui CAR</option>
                    <option value="possui-licenca">Já possui Licenciamento</option>
                    <option value="nenhum">Não possui nenhum</option>
                  </select>
                </div>
              </motion.div>
            </div>

            {/* Serviço de interesse */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="service" className="block text-sm mb-2 text-gray-700">
                Serviço de interesse *
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors z-10">
                  <Briefcase size={20} />
                </div>
                <select
                  id="service"
                  value={formData.service}
                  onChange={(e) => { setFormData({ ...formData, service: e.target.value }); setFieldErrors(prev => ({ ...prev, service: '' })); }}
                  onFocus={() => setFocusedField('service')}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full pl-12 pr-4 py-4 bg-gray-50 border-2 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 appearance-none cursor-pointer ${fieldErrors.service ? 'border-red-400' : 'border-gray-200'}`}
                >
                  <option value="">Selecione um serviço</option>
                  {services.map((service, index) => (
                    <option key={index} value={service}>{service}</option>
                  ))}
                </select>
              </div>
              {fieldErrors.service && <p className="mt-1 text-xs text-red-600">{fieldErrors.service}</p>}
            </motion.div>

            {/* Situação do imóvel - Textarea */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 }}
            >
              <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                Situação do imóvel
              </label>
              <div className="relative group">
                <div className="absolute left-4 top-4 text-gray-400 group-focus-within:text-[#1EB53A] transition-colors">
                  <MessageSquare size={20} />
                </div>
                <textarea
                  id="message"
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onFocus={() => setFocusedField('message')}
                  onBlur={() => setFocusedField(null)}
                  placeholder="Descreva brevemente a situação atual do imóvel (se já possui geo, CAR, licenças, etc.)"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all hover:border-gray-300 resize-none"
                />
              </div>
            </motion.div>

            {/* Botão de Envio */}
            <motion.button
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              type="submit"
              disabled={submitting}
              className="group w-full bg-gradient-to-r from-[#1EB53A] to-[#189c30] text-white py-5 rounded-xl hover:shadow-2xl transition-all hover:scale-[1.02] flex items-center justify-center gap-3 text-lg shadow-lg disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100 font-medium"
            >
              {submitting ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                  </svg>
                  Enviando...
                </>
              ) : (
                <>
                  <Send size={22} className="group-hover:translate-x-1 transition-transform" />
                  Solicitar diagnóstico gratuito
                </>
              )}
            </motion.button>
          </form>
        </div>
      </section>

      {/* Modal de Sucesso */}
      {showSuccessModal && (
        <SuccessModal onClose={() => setShowSuccessModal(false)} />
      )}
    </div>
  );
}

