import { CheckCircle, FileText, Users, Handshake, MapPin, Shield, ArrowRight, BookOpen, Stamp, Scale, ClipboardList } from 'lucide-react';

interface RegularizeGeoPageProps {
  onNavigate: (page: string) => void;
}

export function RegularizeGeoPage({ onNavigate }: RegularizeGeoPageProps) {
  const audiences = [
    {
      icon: MapPin,
      title: 'Para o Produtor Rural',
      description: 'Regularize sua propriedade com assessoria de ponta a ponta. Nossa equipe orienta cada fase do processo, desde o levantamento topográfico até a averbação definitiva da matrícula no cartório de registro de imóveis.',
      items: [
        'Georreferenciamento e certificação INCRA',
        'Cadastro Ambiental Rural (CAR Goiás)',
        'Licenciamento ambiental e outorgas de água',
        'Orientação e conferência documental completa',
      ],
    },
    {
      icon: Users,
      title: 'Para o Responsável Técnico',
      description: 'Cooperação técnica e suporte consultivo especializado para engenheiros, topógrafos e advogados que buscam parceria em processos complexos de regularização fundiária e ambiental.',
      items: [
        'Assessoria técnica em notas devolutivas',
        'Validação e conferência pericial de peças técnicas',
        'Apoio em processos de estremação e usucapião',
        'Alinhamento normativo junto ao INCRA e SEMAD',
      ],
    },
  ];

  const services = [
    {
      icon: ClipboardList,
      title: 'Assessoria em Regularização Fundiária',
      description: 'Acompanhamento completo nos procedimentos de regularização de imóveis rurais e urbanos, saneando pendências cadastrais até o registro final.',
    },
    {
      icon: Stamp,
      title: 'Assessoria em Escrituras Públicas',
      description: 'Suporte técnico na elaboração e instrução de escrituras públicas de compra e venda, doação, partilha e permuta, coordenando prazos com os tabelionatos.',
    },
    {
      icon: Scale,
      title: 'Escritura de Estremação Notarial',
      description: 'Especialistas em procedimentos de estremação amigável, fixando com exatidão matemática as divisas de condomínios pro indiviso e extinguindo litígios de confrontação.',
    },
    {
      icon: FileText,
      title: 'Conferência & Orientação Documental',
      description: 'Triagem e auditoria prévia de toda a cadeia dominial antes do protocolo em cartórios, evitando cancelamentos, retrabalho e notas devolutivas.',
    },
    {
      icon: BookOpen,
      title: 'Assessoria em Licenciamento Ambiental',
      description: 'Enquadramento da atividade produtiva perante os órgãos reguladores, garantindo licenças indispensáveis à obtenção de crédito agropecuário.',
    },
    {
      icon: Shield,
      title: 'Parceria com Responsáveis Técnicos',
      description: 'Canal estruturado de suporte mútuo para agrimensores, projetistas e operadores do direito agrário em todo o estado de Goiás.',
    },
  ];

  const steps = [
    { number: '01', title: 'Contato & Alinhamento', description: 'Entendimento da demanda, seja do proprietário rural ou do profissional parceiro.' },
    { number: '02', title: 'Diagnóstico Territorial', description: 'Análise minuciosa de certidões, peças técnicas e identificação de exigências formais.' },
    { number: '03', title: 'Plano Diretor & Contratação', description: 'Definição de escopo claro, cronograma de execução e documentação necessária.' },
    { number: '04', title: 'Condução & Registro', description: 'Acompanhamento direto perante os órgãos competentes até a certidão imobiliária final.' },
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero Institucional */}
      <section className="bg-[#001B80] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-3">
              Programa de Assessoria Técnica
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Regularize Geo
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 font-normal">
              Assessoria completa em regularização fundiária e ambiental. Apoio técnico tanto para o produtor rural quanto para engenheiros, topógrafos e advogados parceiros.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('contato')}
                className="bg-[#1EB53A] text-white px-7 py-3.5 rounded hover:bg-[#189c30] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
              >
                Solicitar Assessoria
                <ArrowRight size={18} />
              </button>
              <button
                onClick={() => onNavigate('servicos')}
                className="border border-white/70 text-white px-7 py-3.5 rounded hover:bg-white hover:text-[#001B80] transition-colors text-sm sm:text-base font-medium"
              >
                Ver Serviços Técnicos
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* O que é o Programa - 2 Colunas Abertas */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Sobre o Programa
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">O que é o Regularize Geo?</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Um modelo de assessoria contínua da TECGEO criado para suprir gargalos de conhecimento e burocracia na regularização territorial.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 divide-y lg:divide-y-0 lg:divide-x divide-slate-200 border-y border-slate-200 py-10">
            {audiences.map((aud, index) => (
              <div key={index} className="py-6 lg:py-0 lg:px-8 first:pl-0 last:pr-0">
                <div className="flex items-center gap-3 mb-4">
                  <aud.icon size={22} className="text-[#001B80]" />
                  <h3 className="text-xl font-bold text-slate-900">{aud.title}</h3>
                </div>
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                  {aud.description}
                </p>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 block mb-3">
                  Escopo de Atuação
                </span>
                <ul className="space-y-2.5">
                  {aud.items.map((it, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle size={15} className="text-[#1EB53A] flex-shrink-0 mt-0.5" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nossas Assessorias - Grid Aberto Typography-First */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Frentes de Atuação
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Modalidades de Assessoria</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="border-t-2 border-slate-300 pt-6">
                <service.icon size={22} className="text-[#001B80] mb-3" />
                <h4 className="text-base font-bold text-slate-900 mb-2">{service.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona - Processo Linear */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Fluxo Transparente
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Como Conduzimos a Assessoria</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="border-t-2 border-slate-200 pt-6">
                <span className="font-mono text-xs font-bold text-[#1EB53A] block mb-2">{step.number}</span>
                <h4 className="text-base font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Destaque: Escritura de Estremação - Editorial Sóbrio */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Especialidade Registral
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Escritura de Estremação Notarial
            </h2>
            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8">
              A escritura de estremação define com precisão pericial os limites e confrontações de áreas em condomínio ou com descrições precárias, sendo o instrumento mais célere e econômico para individualizar glebas sem a lentidão de ações judiciais de divisão. A TECGEO conduz desde o levantamento topográfico e memorial descritivo até a homologação no tabelionato e registro de imóveis.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6 border-t border-slate-800 mb-8">
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Rigor Pericial</h4>
                <p className="text-xs text-slate-400">Coordenadas geodésicas aceitas sem impugnação.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Interlocução Cartorária</h4>
                <p className="text-xs text-slate-400">Alinhamento direto com tabeliães e registradores.</p>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-white mb-1">Paz Patrimonial</h4>
                <p className="text-xs text-slate-400">Fim definitivo de atritos e incertezas com confrontantes.</p>
              </div>
            </div>

            <button
              onClick={() => onNavigate('contato')}
              className="bg-[#1EB53A] text-white px-7 py-3 rounded hover:bg-[#189c30] transition-colors inline-flex items-center gap-2 text-sm font-medium"
            >
              Consultar Assessoria em Estremação
              <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-l-4 border-[#1EB53A] bg-white p-8 sm:p-12 border border-slate-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                Suporte Personalizado
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#001B80] mb-3">
                Pronto para regularizar com assessoria especializada?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Entre em contato com nossa equipe. Indicaremos os documentos e etapas exatas para solucionar a pendência do seu imóvel ou projeto.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('contato')}
                className="bg-[#001B80] text-white px-7 py-3 rounded hover:bg-[#001566] transition-colors text-sm font-semibold whitespace-nowrap"
              >
                Falar com a TECGEO
              </button>
              <button
                onClick={() => onNavigate('servicos')}
                className="border border-slate-300 text-slate-800 px-7 py-3 rounded hover:bg-slate-100 transition-colors text-sm font-semibold whitespace-nowrap"
              >
                Ver Todos os Serviços
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
