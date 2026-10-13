import { useState } from 'react';
import { 
  Briefcase, 
  ShieldCheck, 
  CheckCircle2, 
  Scale, 
  ArrowRight, 
  Users, 
  Leaf, 
  ChevronDown, 
  PhoneCall,
  Calendar
} from 'lucide-react';
import fotoAngela from '../assets/foto-angela.jpeg';

interface ConsultoriaPageProps {
  onNavigate: (page: string) => void;
}

export function ConsultoriaPage({ onNavigate }: ConsultoriaPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pillars = [
    {
      number: '01',
      icon: Scale,
      title: 'Consultoria Fundiária & Saneamento Registral',
      subtitle: 'Segurança jurídica e saneamento de domínio de imóveis rurais',
      description: 'Análise minuciosa de títulos, matrículas primitivas, memoriais e históricos notariais. Identificamos e solucionamos inconsistências, sobreposições no SIGEF/INCRA, pendências de estremação, divisões patrimoniais e inventários.',
      items: [
        'Diagnóstico registral e documental completo',
        'Resolução técnica de sobreposições no SIGEF / INCRA',
        'Planejamento de desmembramentos e unificações',
        'Adequação de escrituras de estremação e partilha',
      ],
    },
    {
      number: '02',
      icon: Leaf,
      title: 'Consultoria Ambiental & Crédito Rural',
      subtitle: 'Conformidade legal que viabiliza financiamentos e operações',
      description: 'Estruturação estratégica da área ambiental da fazenda para evitar embargos, destravar linhas de crédito rural e valorizar o imóvel com sustentabilidade comprovada perante os órgãos fiscalizadores.',
      items: [
        'Adequação de Reserva Legal e APPs',
        'Saneamento e retificação no SigCAR Goiás',
        'Licenciamento ambiental estratégico (LP, LI, LO e simplificadas)',
        'Outorgas d’água para irrigação e pecuária intensiva',
      ],
    },
    {
      number: '03',
      icon: ShieldCheck,
      title: 'Auditoria & Due Diligence Territorial',
      subtitle: 'Segurança absoluta para investidores na compra e venda de terras',
      description: 'Antes de fechar qualquer negócio imobiliário rural, realizamos uma auditoria técnica e documental independente, mapeando riscos ocultos de sobreposição, passivos ambientais e restrições cartorárias.',
      items: [
        'Mapeamento de riscos pré-aquisição de fazendas',
        'Verificação de compatibilidade física x documental',
        'Relatório executivo de viabilidade territorial',
        'Proteção patrimonial para compradores e vendedores',
      ],
    },
    {
      number: '04',
      icon: Users,
      title: 'Assessoria a Advogados & Responsáveis Técnicos',
      subtitle: 'Parceria técnica de alto nível para destravar processos complexos',
      description: 'Oferecemos suporte pericial e consultivo para escritórios jurídicos do agronegócio, topógrafos, engenheiros agrônomos e peritos judiciais, fornecendo pareceres técnicos sólidos e fundamentados.',
      items: [
        'Emissão de Pareceres Técnicos Fundiários e Ambientais',
        'Assistência técnica pericial judicial e extrajudicial',
        'Apoio normativo em exigências do INCRA e SEMAD',
        'Validação e conferência pericial de peças técnicas',
      ],
    },
  ];

  const methodology = [
    {
      number: '01',
      title: 'Diagnóstico 360°',
      description: 'Levantamento abrangente de certidões, matrículas, bases cartográficas, imagens orbitais e dados dos órgãos reguladores.',
    },
    {
      number: '02',
      title: 'Plano Diretor de Ação',
      description: 'Apresentação clara dos gargalos encontrados com parecer técnico, roteiro passo a passo, estimativas de prazos e custos.',
    },
    {
      number: '03',
      title: 'Interlocução Técnica',
      description: 'Atuação perante Cartórios de Registro de Imóveis, INCRA, SEMAD e prefeituras para superar exigências com fundamentação.',
    },
    {
      number: '04',
      title: 'Blindagem Patrimonial',
      description: 'Propriedade regularizada, desembaraçada, habilitada para crédito bancário e juridicamente segura para as próximas gerações.',
    },
  ];

  const faqs = [
    {
      question: 'Por que a TECGEO estruturou uma divisão de Consultoria além dos serviços técnicos?',
      answer: 'Ao longo de mais de 10 anos de atuação no agronegócio goiano, identificamos que muitas propriedades rurais não precisam apenas de uma medição de campo isolada, mas de uma visão estratégica completa. A consultoria une a experiência em cartórios, domínio da legislação agrária e ambiental, e tecnologia de ponta para orientar decisões antes, durante e após qualquer processo de regularização.',
    },
    {
      question: 'Qual a diferença entre contratar um serviço pontual e a consultoria?',
      answer: 'Em um serviço pontual (como um georreferenciamento isolado), executa-se apenas a medição. Na consultoria, analisamos a propriedade como um todo: viabilidade de crédito bancário, riscos de sobreposição com vizinhos, adequação da Reserva Legal e conformidade para futuras vendas ou inventários, elaborando um parecer executivo.',
    },
    {
      question: 'A consultoria pode ajudar se minha fazenda tiver pendência no cartório ou INCRA há anos?',
      answer: 'Sim! Essa é uma das principais especialidades do nosso núcleo de consultoria. Fazemos o saneamento histórico do processo, identificamos a causa exata da exigência ou sobreposição e apresentamos a solução técnica e registral para destravar o processo.',
    },
    {
      question: 'Advogados e outros engenheiros podem contratar a consultoria da TECGEO?',
      answer: 'Com certeza. Atuamos como parceiros estratégicos de escritórios de advocacia do agronegócio e profissionais técnicos, emitindo laudos, pareceres e prestando assistência técnica em disputas de divisa, estremações, usucapiões e processos administrativos.',
    },
    {
      question: 'Como agendar uma reunião ou diagnóstico consultivo?',
      answer: 'Você pode entrar em contato direto pelo nosso WhatsApp corporativo ou formulário do site. Realizamos tanto atendimentos presenciais em nossas unidades (Cachoeira Alta e Caçu) quanto reuniões online para proprietários e investidores de todo o Brasil.',
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero Consultoria */}
      <section className="bg-[#001B80] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-3">
              Divisão Estratégica
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              TECGEO Consultoria: Inteligência Fundiária e Ambiental
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed mb-8 font-normal">
              Muito além da medição de campo: soluções integradas em gestão fundiária, saneamento registral e blindagem patrimonial para o agronegócio em Goiás.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5564999558696?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Consultoria%20TECGEO."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1EB53A] text-white px-7 py-3.5 rounded hover:bg-[#189c30] transition-colors flex items-center justify-center gap-2 text-sm sm:text-base font-medium"
              >
                <PhoneCall size={18} />
                Falar com um Consultor
              </a>
              <button
                onClick={() => onNavigate('contato')}
                className="border border-white/70 text-white px-7 py-3.5 rounded hover:bg-white hover:text-[#001B80] transition-colors text-sm sm:text-base font-medium"
              >
                Solicitar Diagnóstico Preliminar
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Manifesto Institucional e Liderança */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Foto e Perfil Executivo */}
            <div className="lg:col-span-4">
              <div className="border border-slate-200 p-2 bg-slate-50">
                <img
                  src={fotoAngela}
                  alt="Ângela da Silva Paula de Oliveira"
                  className="w-full h-80 sm:h-96 object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
                />
                <div className="p-4 bg-white border-t border-slate-200">
                  <h3 className="text-base font-bold text-slate-900">Ângela S. P. de Oliveira</h3>
                  <p className="text-xs text-[#001B80] font-semibold mt-0.5">Fundadora & Líder da Divisão Consultiva</p>
                  <p className="text-xs text-slate-500 mt-1">Especialista em Regularização Fundiária e Direito Notarial</p>
                </div>
              </div>
            </div>

            {/* Texto Editorial */}
            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                Visão de Mercado
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#001B80] mb-6 leading-tight">
                Por que a TECGEO se tornou uma Consultoria Especializada?
              </h2>
              <div className="space-y-4 text-slate-600 leading-relaxed text-sm sm:text-base">
                <p>
                  Ao longo de mais de uma década atuando em Cachoeira Alta, Caçu e em todo o estado de Goiás, acompanhamos produtores rurais perderem janelas de crédito, enfrentarem travas em cartórios e sofrerem com conflitos de divisa por falta de <strong>estratégia antecipada</strong>.
                </p>
                <p>
                  Percebemos que o produtor rural moderno e o investidor imobiliário não necessitam apenas de um memorial descritivo — eles precisam de <strong>segurança jurídica, inteligência territorial e visão multidisciplinar</strong>.
                </p>
                <p>
                  Combinamos o conhecimento prático dos procedimentos cartorários, a formação técnica em agrimensura, tecnologia GNSS e a interlocução com órgãos ambientais para estruturar a <strong>TECGEO Consultoria</strong>: uma frente dedicada a destravar processos, planejar sucessões familiares e blindar o patrimônio rural.
                </p>
              </div>

              <div className="grid grid-cols-3 gap-6 pt-8 mt-8 border-t border-slate-200">
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#001B80] block">10+</span>
                  <span className="text-xs text-slate-600 mt-1 block">Anos de atuação no agro goiano</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#1EB53A] block">100%</span>
                  <span className="text-xs text-slate-600 mt-1 block">Conformidade e segurança técnica</span>
                </div>
                <div>
                  <span className="text-2xl sm:text-3xl font-bold text-[#001B80] block">360°</span>
                  <span className="text-xs text-slate-600 mt-1 block">Abordagem técnica, cartorária e ambiental</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação - Layout Aberto em Grid Arquitetural */}
      <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Núcleos Especializados
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Áreas de Atuação da Consultoria</h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Soluções sob medida para proprietários rurais, investidores e profissionais técnicos parceiros.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div key={idx} className="border-t-2 border-slate-300 bg-white p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs font-bold text-[#1EB53A]">{pillar.number}</span>
                  <pillar.icon size={22} className="text-[#001B80]" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{pillar.title}</h3>
                <p className="text-xs font-medium text-slate-500 uppercase tracking-wider mb-4">{pillar.subtitle}</p>
                <p className="text-sm text-slate-600 leading-relaxed mb-6">{pillar.description}</p>
                
                <div className="space-y-2 pt-4 border-t border-slate-100 mb-6">
                  {pillar.items.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 size={15} className="text-[#1EB53A] flex-shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <a
                  href={`https://wa.me/5564999558696?text=Ol%C3%A1!%20Gostaria%20de%20consultoria%20sobre:%20${encodeURIComponent(pillar.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#001B80] hover:text-[#1EB53A] transition-colors"
                >
                  Consultar sobre esta área
                  <ArrowRight size={14} />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ciclo Consultivo / Metodologia - Linha Linear */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Metodologia de Trabalho
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Como Funciona o Ciclo Consultivo</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, idx) => (
              <div key={idx} className="border-t-2 border-slate-200 pt-6">
                <span className="font-mono text-xs font-bold text-[#1EB53A] block mb-2">{step.number}</span>
                <h4 className="text-base font-bold text-slate-900 mb-2">{step.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para Quem é a Consultoria - Lista Estruturada */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Público-Alvo
            </span>
            <h2 className="text-3xl font-bold text-white">Quem se Beneficia da Consultoria TECGEO</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 divide-y md:divide-y-0 gap-8">
            {[
              {
                title: 'Produtores Rurais',
                desc: 'Proprietários que precisam renovar CAR, liberar crédito bancário, sanar sobreposições e garantir segurança para a família.',
              },
              {
                title: 'Compradores & Investidores',
                desc: 'Investidores e fundos que buscam adquirir terras em Goiás sem correr riscos ocultos de matrícula ou passivos ambientais.',
              },
              {
                title: 'Escritórios de Advocacia',
                desc: 'Advogados agraristas que necessitam de parecer técnico pericial, mapeamentos probatórios e apoio em inventários e usucapião.',
              },
              {
                title: 'Engenheiros & Agrimensores',
                desc: 'Responsáveis técnicos que desejam parceria para validação de peças técnicas complexas e agilidade perante o INCRA.',
              },
              {
                title: 'Loteamentos & Empresas',
                desc: 'Empresas com projetos de parcelamento do solo rural ou urbano e regularização fundiária corporativa de grande porte.',
              },
              {
                title: 'Famílias em Sucessão',
                desc: 'Assessoria neutra e técnica na partilha e desmembramento equilibrado de fazendas entre herdeiros, prevenindo litígios judiciais.',
              },
            ].map((target, i) => (
              <div key={i} className="pt-6 md:pt-0">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle2 size={16} className="text-[#1EB53A]" />
                  <h4 className="text-base font-bold text-white">{target.title}</h4>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed pl-6">{target.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Consultoria - Linhas Limpas */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Esclarecimentos
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Perguntas Frequentes sobre a Consultoria</h2>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => (
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

      {/* CTA Final */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-l-4 border-[#1EB53A] bg-white p-8 sm:p-12 border border-slate-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                Diagnóstico Estratégico
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#001B80] mb-3">
                Deseja uma análise consultiva da sua propriedade?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Converse diretamente com nossos consultores técnicos e descubra o caminho mais seguro e econômico para desimpedir seu imóvel rural.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href="https://wa.me/5564999558696?text=Ol%C3%A1!%20Desejo%20agendar%20um%20diagn%C3%B3stico%20de%20consultoria%20com%20a%20TECGEO."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#1EB53A] text-white px-7 py-3 rounded hover:bg-[#189c30] transition-colors text-sm font-semibold inline-flex items-center justify-center gap-2 whitespace-nowrap"
              >
                Falar no WhatsApp
                <ArrowRight size={16} />
              </a>
              <button
                onClick={() => onNavigate('contato')}
                className="border border-slate-300 text-slate-800 px-7 py-3 rounded hover:bg-slate-100 transition-colors text-sm font-semibold whitespace-nowrap"
              >
                Mensagem pelo Site
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
