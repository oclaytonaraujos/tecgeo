import { CheckCircle, FileText, Users, Handshake, MapPin, Shield, ArrowRight, Sparkles, BookOpen, Stamp, Scale, ClipboardList } from 'lucide-react';
import { motion } from 'motion/react';

interface RegularizeGeoPageProps {
  onNavigate: (page: string) => void;
}

export function RegularizeGeoPage({ onNavigate }: RegularizeGeoPageProps) {
  const audiences = [
    {
      icon: MapPin,
      title: 'Produtor Rural',
      description: 'Regularize sua propriedade com assessoria completa. Nossa equipe orienta em cada etapa, desde o levantamento até o registro definitivo no cartório.',
      items: [
        'Georreferenciamento e CAR',
        'Licenciamento ambiental',
        'Escrituras e registros',
        'Orientação documental completa',
      ],
      color: '#001B80',
    },
    {
      icon: Users,
      title: 'Responsável Técnico',
      description: 'Suporte especializado para profissionais da área que buscam assessoria técnica em seus trabalhos de regularização fundiária e ambiental.',
      items: [
        'Assessoria técnica especializada',
        'Suporte em processos complexos',
        'Parceria em projetos de regularização',
        'Orientação normativa e legal',
      ],
      color: '#1EB53A',
    },
  ];

  const services = [
    {
      icon: ClipboardList,
      title: 'Assessoria em Regularização Fundiária',
      description: 'Acompanhamento completo nos processos de regularização de imóveis rurais e urbanos, desde o levantamento inicial até o registro final.',
    },
    {
      icon: Stamp,
      title: 'Assessoria em Escritura Pública',
      description: 'Suporte técnico para elaboração de escrituras públicas de compra e venda, doação, partilha, permuta e escritura de estremação, coordenando todo o processo junto aos cartórios.',
    },
    {
      icon: Scale,
      title: 'Escritura de Estremação',
      description: 'Assessoria especializada na escritura de estremação, documento que define com precisão os limites e confrontações de uma propriedade, essencial para evitar conflitos de divisa.',
    },
    {
      icon: FileText,
      title: 'Orientação Documental',
      description: 'Ao contratar qualquer serviço, nossa equipe indica toda a documentação necessária para o processo, evitando pendências e atrasos.',
    },
    {
      icon: BookOpen,
      title: 'Assessoria em Licenciamento Ambiental',
      description: 'Orientação completa sobre os tipos de licença ambiental necessários para sua atividade, com acompanhamento junto aos órgãos competentes.',
    },
    {
      icon: Shield,
      title: 'Suporte para Responsáveis Técnicos',
      description: 'Parceria técnica para profissionais que necessitam de apoio especializado em processos de georreferenciamento, CAR e licenciamento.',
    },
  ];

  const steps = [
    { number: '01', title: 'Primeiro contato', description: 'Entre em contato e explique a sua necessidade. Atendemos produtores e responsáveis técnicos.' },
    { number: '02', title: 'Análise da situação', description: 'Nossa equipe analisa o caso e indica a documentação necessária e os próximos passos.' },
    { number: '03', title: 'Contratação do serviço', description: 'Ao contratar, você recebe um plano de ação claro com prazos e etapas definidas.' },
    { number: '04', title: 'Execução com assessoria', description: 'Acompanhamento em todas as fases, com comunicação direta e transparente até a conclusão.' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#001B80] via-[#002bb3] to-[#001B80] text-white py-32 overflow-hidden">
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

          <h1 className="mb-6">Regularize Geo</h1>
          <p className="text-xl text-gray-100 leading-relaxed" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
            Assessoria completa em regularização fundiária e ambiental para produtores rurais e responsáveis técnicos
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
            <button
              onClick={() => onNavigate('contato')}
              className="group bg-[#1EB53A] text-white px-8 py-4 rounded-xl hover:bg-[#189c30] transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base shadow-lg"
            >
              Solicitar assessoria
              <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" size={20} />
            </button>
            <button
              onClick={() => onNavigate('servicos')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#001B80] transition-all text-sm sm:text-base"
            >
              Ver todos os serviços
            </button>
          </div>
        </motion.div>
      </section>

      {/* O que é */}
      <section className="py-28 sm:py-32 bg-white">
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
            <h2 className="text-[#001B80] mb-6">O que é o Regularize Geo?</h2>
            <p className="text-xl text-gray-600 leading-relaxed">
              O Regularize Geo é o programa de assessoria da TECGEO que vai além da execução técnica. Atendemos não somente o produtor rural, mas também responsáveis técnicos que buscam suporte especializado em seus trabalhos com orientação, parceria e assessoria completa.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {audiences.map((audience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                className="relative bg-white rounded-3xl p-10 border border-gray-100 shadow-lg hover:-translate-y-2 transition-all duration-300"
                style={{ boxShadow: `0 12px 40px ${audience.color}10` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6"
                  style={{ background: `${audience.color}15` }}
                >
                  <audience.icon size={32} style={{ color: audience.color }} />
                </div>
                <h3 className="text-[#001B80] mb-4">{audience.title}</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{audience.description}</p>
                <ul className="space-y-3">
                  {audience.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <CheckCircle size={18} style={{ color: audience.color }} className="flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Serviços de Assessoria */}
      <section className="py-28 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#1EB53A]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#1EB53A]">Assessorias</span>
            </div>
            <h2 className="text-[#001B80] mb-4">Nossas assessorias</h2>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Suporte técnico completo para cada etapa do processo de regularização
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1 border border-gray-100"
              >
                <div className="w-12 h-12 bg-[#001B80]/10 rounded-xl flex items-center justify-center mb-5">
                  <service.icon className="text-[#001B80]" size={24} />
                </div>
                <h4 className="text-[#001B80] mb-3">{service.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-28 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-block bg-[#001B80]/10 px-4 py-2 rounded-full mb-4">
              <span className="text-[#001B80]">Como funciona</span>
            </div>
            <h2 className="text-[#001B80] mb-4">Processo simples e transparente</h2>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ maxWidth: '42rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Ao contratar o serviço, nossa equipe indica toda a documentação necessária
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center relative"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#001B80] to-[#002bb3] flex items-center justify-center mx-auto mb-5 shadow-lg">
                  <span className="text-white text-lg font-semibold">{step.number}</span>
                </div>
                <h4 className="text-[#001B80] mb-3">{step.title}</h4>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-[#001B80]/30 to-transparent -translate-x-8"></div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Destaque Escritura de Estremação */}
      <section className="py-28 sm:py-32 bg-gradient-to-br from-[#001B80] to-[#003cb3] text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 bg-white/20 px-5 py-2.5 rounded-full mb-6">
              <Handshake size={20} />
              <span>Assessoria Especializada</span>
            </div>
            <h2 className="mb-6">Escritura de Estremação</h2>
            <p className="text-xl text-gray-200 leading-relaxed mb-8">
              A escritura de estremação define com precisão os limites e confrontações de uma propriedade, sendo fundamental para evitar conflitos de divisa entre vizinhos e para a correta regularização do imóvel. A TECGEO oferece assessoria completa nesse processo, desde o levantamento topográfico até o registro em cartório.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10">
              {[
                'Definição precisa de limites',
                'Coordenação com cartório',
                'Evita conflitos de divisa',
              ].map((item, i) => (
                <div key={i} className="bg-white/10 backdrop-blur-sm px-5 py-4 rounded-2xl border border-white/20">
                  <CheckCircle size={20} className="text-[#1EB53A] mx-auto mb-2" />
                  <span className="text-sm">{item}</span>
                </div>
              ))}
            </div>
            <button
              onClick={() => onNavigate('contato')}
              className="group bg-[#1EB53A] text-white px-8 py-4 rounded-full hover:bg-[#189c30] transition-all hover:shadow-2xl hover:scale-105 inline-flex items-center gap-3 shadow-xl"
            >
              Solicitar assessoria em escritura
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 sm:py-28 bg-gray-50">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h2 className="text-[#001B80] mb-6">Pronto para regularizar com assessoria completa?</h2>
          <p className="text-xl text-gray-600 mb-10 leading-relaxed">
            Entre em contato e nossa equipe indicará toda a documentação necessária ao contratar o serviço
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contato')}
              className="group bg-gradient-to-r from-[#1EB53A] to-[#189c30] text-white px-10 py-5 rounded-2xl transition-all hover:scale-105 shadow-lg hover:shadow-2xl inline-flex items-center justify-center gap-3 font-semibold"
            >
              Falar com a equipe TECGEO
              <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
            </button>
            <button
              onClick={() => onNavigate('servicos')}
              className="border-2 border-[#001B80] text-[#001B80] px-10 py-5 rounded-2xl hover:bg-[#001B80] hover:text-white transition-all font-semibold"
            >
              Ver todos os serviços
            </button>
          </div>
        </motion.div>
      </section>
    </div>
  );
}

