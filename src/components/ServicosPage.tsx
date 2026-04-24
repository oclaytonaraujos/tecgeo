import { Ruler, Leaf, FileCheck, Building2, Tractor, GitBranch, Map, FileText, CheckCircle, Award, Users, Zap, ArrowRight, Sparkles, BadgeDollarSign, Calendar, ShieldCheck, TrendingUp, Satellite, Camera, Compass, Cpu, FileStack, MapPinned, Stamp, Building, Split, Star } from 'lucide-react';
import { motion } from 'motion/react';

interface ServicosPageProps {
  onNavigate: (page: string) => void;
}

export function ServicosPage({ onNavigate }: ServicosPageProps) {
  const services = [
    {
      icon: Ruler,
      title: 'Georreferenciamento',
      description: 'Medição certificada de imóveis rurais com tecnologia GNSS de precisão centimétrica. Atende todas as exigências do INCRA e é fundamental para escrituração e regularização de grandes propriedades. Levantamento completo de perímetro, área e divisas com memorial descritivo.',
      color: '#001B80',
      highlights: ['Precisão centimétrica', 'Certificado INCRA', 'Memorial descritivo'],
    },
    {
      icon: Leaf,
      title: 'CAR – Cadastro Ambiental Rural',
      description: 'Cadastro e atualização no sistema SigCAR Goiás. Mapeamento de Reserva Legal, APPs, recursos hídricos (rios, represas, nascentes), áreas consolidadas e uso do solo. Regularização ambiental obrigatória para propriedades rurais conforme Código Florestal.',
      color: '#1EB53A',
      highlights: ['Sistema SigCAR', 'Reserva Legal', 'Conformidade ambiental'],
    },
    {
      icon: FileCheck,
      title: 'Licenciamento Ambiental',
      description: 'Obtenção de licenças ambientais para agricultura (irrigada ou sequeiro) e pecuária extensiva. Outorga de água ou dispensa conforme atividade. Elaboração de relatórios técnicos e documentação para órgãos ambientais estaduais e federais.',
      color: '#001B80',
      highlights: ['Outorga de água', 'Relatórios técnicos', 'Órgãos federais'],
    },
    {
      icon: Building2,
      title: 'Loteamento Urbano',
      description: 'Projetos completos de loteamento urbano com aprovação em prefeitura e cartório. Levantamento topográfico, divisão de lotes, arruamento, infraestrutura básica. Memorial descritivo e todas as plantas necessárias para aprovação e registro.',
      color: '#1EB53A',
      highlights: ['Aprovação prefeitura', 'Divisão de lotes', 'Infraestrutura'],
    },
    {
      icon: Tractor,
      title: 'Loteamento Rural',
      description: 'Divisão e regularização de áreas rurais em lotes menores. Atende legislação específica para desmembramento rural. Levantamento topográfico, definição de acessos, memoriais descritivos e averbações necessárias.',
      color: '#001B80',
      highlights: ['Desmembramento rural', 'Acessos', 'Averbações'],
    },
    {
      icon: GitBranch,
      title: 'Desmembramento',
      description: 'Separação legal de propriedades, dividindo uma matrícula em duas ou mais matrículas independentes. Processo completo incluindo levantamento topográfico, memorial descritivo, aprovação em prefeitura (quando necessário) e registro em cartório.',
      color: '#1EB53A',
      highlights: ['Separação de matrículas', 'Processo completo', 'Registro cartorário'],
    },
    {
      icon: Map,
      title: 'Unificação',
      description: 'Junção de matrículas adjacentes em uma única matrícula. Simplifica a gestão de propriedades contíguas. Inclui levantamento topográfico unificado, memorial descritivo e todo o processo de registro cartorário.',
      color: '#001B80',
      highlights: ['Junção de matrículas', 'Gestão simplificada', 'Topografia unificada'],
    },
    {
      icon: FileText,
      title: 'Assessoria em Escrituras Públicas',
      description: 'Suporte técnico completo para elaboração de escrituras de compra e venda, doação, partilha, entre outras. Verificação de documentação, coordenação com cartórios, acompanhamento do processo e garantia de conformidade legal.',
      color: '#1EB53A',
      highlights: ['Suporte completo', 'Coordenação cartórios', 'Conformidade legal'],
    },
  ];

  const benefits = [
    {
      icon: Award,
      number: '10+',
      title: 'Anos de experiência',
      description: 'Mais de uma década regularizando imóveis em Goiás',
      color: '#1EB53A',
    },
    {
      icon: CheckCircle,
      number: '100%',
      title: 'Conformidade legal',
      description: 'Todos os serviços em conformidade com órgãos reguladores',
      color: '#001B80',
    },
    {
      icon: Users,
      number: '✓',
      title: 'Equipe técnica qualificada',
      description: 'Engenheiros e especialistas certificados',
      color: '#1EB53A',
    },
    {
      icon: Zap,
      number: '⚡',
      title: 'Tecnologia avançada',
      description: 'Equipamentos de última geração para máxima precisão',
      color: '#001B80',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#001B80] via-[#002bb3] to-[#001B80] text-white py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-[#1EB53A] px-5 py-2.5 rounded-full mb-6 shadow-lg">
            <Sparkles size={20} />
            <span>Nossos Serviços</span>
          </div>
          <h1 className="mb-6" style={{ textAlign: 'center' }}>Soluções completas em regularização</h1>
          <p className="text-xl text-gray-100 leading-relaxed" style={{ textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Tecnologia de ponta, equipe especializada e conformidade legal para regularizar seu imóvel rural ou urbano
          </p>
        </motion.div>
      </section>

      {/* Banner Plano Agro+ */}
      <section className="relative py-16 bg-gradient-to-r from-[#1EB53A] via-[#22c943] to-[#1EB53A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#001B80]/10 rounded-full blur-3xl"></div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Lado esquerdo - Conteúdo */}
            <div className="flex-1 text-white">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-4 backdrop-blur-xl">
                <TrendingUp size={18} />
                <span className="text-sm">Melhor custo-benefício</span>
              </div>
              <h2 className="text-white mb-4">
                <span className="text-4xl lg:text-5xl">Plano Agro+</span>
              </h2>
              <p className="text-xl text-white/90 mb-6 leading-relaxed max-w-2xl">
                Contrate <strong>Georreferenciamento + CAR + Licenciamento Ambiental</strong> em um pacote completo com economia e parcelamento que cabe no seu bolso
              </p>

              {/* Destaques rápidos */}
              <div className="flex flex-wrap gap-4 mb-6">
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-xl border border-white/20">
                  <BadgeDollarSign size={20} />
                  <span>Até 30% de economia</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-xl border border-white/20">
                  <Calendar size={20} />
                  <span>Parcele em até 12x</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 px-4 py-2.5 rounded-xl backdrop-blur-xl border border-white/20">
                  <ShieldCheck size={20} />
                  <span>Regularização completa</span>
                </div>
              </div>

              <button
                onClick={() => onNavigate('plano-agro')}
                className="group relative bg-white text-[#1EB53A] px-8 py-4 rounded-xl hover:shadow-2xl transition-all hover:scale-105 shadow-xl inline-flex items-center gap-3 overflow-hidden"
              >
                <span className="relative z-10 flex items-center gap-3">
                  Saiba mais sobre o Agro+
                  <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
                </span>
                <div className="absolute inset-0 bg-gray-50 translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            </div>

            {/* Lado direito - Cards visuais */}
            <div className="flex-shrink-0">
              <div className="relative">
                {/* Card principal */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="bg-white/10 backdrop-blur-2xl p-8 rounded-3xl border border-white/30 shadow-2xl w-80"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center">
                      <Sparkles className="text-[#1EB53A]" size={24} />
                    </div>
                    <div>
                      <div className="text-white/70 text-sm">Pacote Completo</div>
                      <div className="text-white text-xl">3 em 1</div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Ruler size={16} />
                      </div>
                      <span>Georreferenciamento</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <Leaf size={16} />
                      </div>
                      <span>CAR</span>
                    </div>
                    <div className="flex items-center gap-3 text-white">
                      <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center flex-shrink-0">
                        <FileCheck size={16} />
                      </div>
                      <span>Licenciamento</span>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-white/20">
                    <div className="flex items-center justify-between text-white">
                      <span className="text-sm">Economia</span>
                      <span className="text-2xl">30%</span>
                    </div>
                  </div>
                </motion.div>

                {/* Badge flutuante */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  viewport={{ once: true }}
                  className="absolute -top-4 -right-4 bg-[#001B80] text-white rounded-2xl shadow-xl border-4 border-white overflow-hidden"
                >
                  <div className="flex flex-col items-center gap-1.5 p-3">
                    <div className="w-8 h-8 bg-white/20 rounded-lg flex items-center justify-center backdrop-blur-sm">
                      <Star className="text-white" size={18} fill="white" />
                    </div>
                    <div className="text-xs uppercase tracking-wide">Mais vendido</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Lista de Serviços - Grid Moderno */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#001B80]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#001B80]">8 Serviços Especializados</span>
            </div>
            <h2 className="text-[#001B80] mb-4">O que oferecemos</h2>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Cada serviço projetado para resolver desafios específicos da sua propriedade
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                viewport={{ once: true }}
                className="group relative h-full"
              >
                <div 
                  className="relative bg-white rounded-3xl p-8 transition-all duration-500 hover:-translate-y-2 h-full flex flex-col"
                  style={{
                    background: 'rgba(255, 255, 255, 0.95)',
                    backdropFilter: 'blur(20px) saturate(180%)',
                    WebkitBackdropFilter: 'blur(20px) saturate(180%)',
                    border: '1px solid rgba(255, 255, 255, 0.5)',
                    boxShadow: `0 8px 32px ${service.color}10`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = `0 20px 60px ${service.color}25`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = `0 8px 32px ${service.color}10`;
                  }}
                >
                  {/* Ícone com Badge de Número */}
                  <div className="flex items-start gap-6 mb-6">
                    <div 
                      className="relative flex-shrink-0 w-20 h-20 rounded-2xl flex items-center justify-center transition-all duration-500 group-hover:scale-110"
                      style={{ 
                        background: `linear-gradient(135deg, ${service.color}15 0%, ${service.color}08 100%)`,
                        boxShadow: `0 4px 12px ${service.color}15`,
                      }}
                    >
                      <service.icon size={36} style={{ color: service.color }} />
                      {/* Número do serviço */}
                      <div 
                        className="absolute -top-2 -right-2 w-8 h-8 rounded-full flex items-center justify-center text-white text-xs shadow-lg"
                        style={{ background: service.color }}
                      >
                        {String(index + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-[#001B80] mb-2 group-hover:text-[#1EB53A] transition-colors">{service.title}</h3>
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-gray-600 leading-relaxed mb-6 flex-grow">{service.description}</p>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {service.highlights.map((highlight, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm transition-all group-hover:scale-105"
                        style={{
                          background: `${service.color}08`,
                          color: service.color,
                          border: `1px solid ${service.color}20`,
                        }}
                      >
                        <CheckCircle size={14} />
                        {highlight}
                      </span>
                    ))}
                  </div>

                  {/* Gradient Overlay */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-3xl"
                    style={{
                      background: `linear-gradient(135deg, ${service.color}03 0%, transparent 100%)`,
                    }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossas Aplicações */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#001B80]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#001B80]">Nossas Aplicações</span>
            </div>
            <h2 className="text-[#001B80] mb-4">Aplicações em Georreferenciamento</h2>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Atendemos diferentes necessidades com soluções técnicas especializadas
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Propriedades Rurais */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-[#001B80]/10 rounded-xl flex items-center justify-center mb-6">
                <Tractor className="text-[#001B80]" size={28} />
              </div>
              <h3 className="text-[#001B80] mb-4">Propriedades Rurais</h3>
              <ul className="space-y-2.5 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Georreferenciamento para INCRA</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Certificação de imóveis rurais</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Regularização fundiária</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Desmembramento de áreas</span>
                </li>
              </ul>
            </motion.div>

            {/* Áreas Urbanas */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-[#1EB53A]/10 rounded-xl flex items-center justify-center mb-6">
                <Building className="text-[#1EB53A]" size={28} />
              </div>
              <h3 className="text-[#001B80] mb-4">Áreas Urbanas</h3>
              <ul className="space-y-2.5 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Loteamentos urbanos</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Regularização de lotes</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Projetos de parcelamento</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Unificação de áreas</span>
                </li>
              </ul>
            </motion.div>

            {/* Documentação Legal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-[#001B80]/10 rounded-xl flex items-center justify-center mb-6">
                <FileStack className="text-[#001B80]" size={28} />
              </div>
              <h3 className="text-[#001B80] mb-4">Documentação Legal</h3>
              <ul className="space-y-2.5 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Memorial descritivo</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Planta topográfica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>ART/RRT técnica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Certificação INCRA</span>
                </li>
              </ul>
            </motion.div>

            {/* Serviços Complementares */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all"
            >
              <div className="w-14 h-14 bg-[#1EB53A]/10 rounded-xl flex items-center justify-center mb-6">
                <Split className="text-[#1EB53A]" size={28} />
              </div>
              <h3 className="text-[#001B80] mb-4">Serviços Complementares</h3>
              <ul className="space-y-2.5 text-gray-600 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Retificação de áreas</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Assessoria em escrituras</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Consultoria técnica</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle size={16} className="text-[#1EB53A] mt-0.5 flex-shrink-0" />
                  <span>Acompanhamento processual</span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tecnologias */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#1EB53A]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#1EB53A]">Tecnologia de Ponta</span>
            </div>
            <h2 className="text-[#001B80] mb-4">Tecnologias que Utilizamos</h2>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Equipamentos de última geração para garantir a máxima precisão em nossos levantamentos
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* GPS Geodésico */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#001B80] to-[#002bb3] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Satellite className="text-white" size={32} />
              </div>
              <h3 className="text-[#001B80] mb-3">GPS Geodésico</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Receptores GNSS de alta precisão que utilizam correções RTK para obter coordenadas com precisão centimétrica.
              </p>
            </motion.div>

            {/* Drones de Mapeamento */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1EB53A] to-[#189c30] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Camera className="text-white" size={32} />
              </div>
              <h3 className="text-[#001B80] mb-3">Drones de Mapeamento</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Aeronaves não tripuladas equipadas com câmeras de alta resolução para levantamentos aerofotogramétricos.
              </p>
            </motion.div>

            {/* Estação Total */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#001B80] to-[#002bb3] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Compass className="text-white" size={32} />
              </div>
              <h3 className="text-[#001B80] mb-3">Estação Total</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Equipamentos eletrônicos que combinam teodolito e distanciômetro para medições angulares e lineares precisas.
              </p>
            </motion.div>

            {/* Software Especializado */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              viewport={{ once: true }}
              className="group bg-gradient-to-br from-white to-gray-50 p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 border border-gray-100"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-[#1EB53A] to-[#189c30] rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Cpu className="text-white" size={32} />
              </div>
              <h3 className="text-[#001B80] mb-3">Software Especializado</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Utilizamos os melhores softwares de topografia e geodésia para processamento e análise dos dados coletados.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <div className="bg-gradient-to-br from-[#001B80]/5 to-[#1EB53A]/5 p-12 rounded-3xl border border-gray-100">
            <h2 className="text-[#001B80] mb-6">Precisa de algum desses serviços?</h2>
            <p className="text-xl text-gray-600 mb-10 leading-relaxed">
              Entre em contato conosco e receba um diagnóstico inicial gratuito com orçamento personalizado para sua propriedade
            </p>
            <button
              onClick={() => onNavigate('contato')}
              className="group relative bg-gradient-to-r from-[#1EB53A] to-[#189c30] text-white px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-lg hover:shadow-2xl inline-flex items-center gap-3 overflow-hidden mt-[25px] mr-[0px] mb-[0px] ml-[0px]"
            >
              <span className="relative z-10 flex items-center gap-3">
                Solicitar orçamento gratuito
                <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
              </span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}