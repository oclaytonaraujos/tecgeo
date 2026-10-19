import { useState } from 'react';
import { motion } from 'motion/react';
import { 
  Briefcase, 
  ShieldCheck, 
  FileText, 
  CheckCircle2, 
  Compass, 
  TrendingUp, 
  Building2, 
  Scale, 
  ArrowRight, 
  Sparkles, 
  MapPin, 
  Users, 
  BadgeCheck, 
  FileCheck, 
  Leaf, 
  ChevronDown, 
  PhoneCall,
  Calendar,
  Award
} from 'lucide-react';
import fotoAngela from '../assets/foto-angela.jpeg';

interface ConsultoriaPageProps {
  onNavigate: (page: string) => void;
}

export function ConsultoriaPage({ onNavigate }: ConsultoriaPageProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const pillars = [
    {
      icon: Scale,
      title: 'Consultoria Fundiária & Regularização de Domínio',
      subtitle: 'Segurança jurídica e saneamento registral de imóveis rurais',
      description: 'Análise minuciosa de títulos, matrículas, memoriais e históricos registrais. Identificamos e solucionamos inconsistências, sobreposições no SIGEF/INCRA, pendências de estremação, divisões patrimoniais e inventários.',
      items: [
        'Diagnóstico registral e documental completo',
        'Resolução de sobreposições no SIGEF / INCRA',
        'Planejamento de desmembramentos e unificações',
        'Adequação de escrituras de estremação e partilha',
      ],
      color: '#001B80',
    },
    {
      icon: Leaf,
      title: 'Consultoria Ambiental & Crédito Rural',
      subtitle: 'Conformidade legal que viabiliza financiamentos e operações',
      description: 'Estruturação estratégica da área ambiental da fazenda para evitar embargos, destravar linhas de crédito rural e valorizar o imóvel com sustentabilidade comprovada.',
      items: [
        'Adequação de Reserva Legal e Áreas de Preservação Permanente (APPs)',
        'Saneamento e retificação no SigCAR Goiás',
        'Licenciamento ambiental estratégico (LP, LI, LO e simplificadas)',
        'Outorgas d’água para irrigação e pecuária intensiva',
      ],
      color: '#1EB53A',
    },
    {
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
      color: '#001B80',
    },
    {
      icon: Users,
      title: 'Assessoria Estratégica a Advogados e Responsáveis Técnicos',
      subtitle: 'Parceria técnica de alto nível para destravar processos complexos',
      description: 'Oferecemos suporte técnico-pericial e consultivo para escritórios jurídicos do agronegócio, topógrafos, engenheiros agrônomos e peritos judiciais, fornecendo pareceres técnicos sólidos e fundamentados.',
      items: [
        'Emissão de Pareceres Técnicos Fundiários e Ambientais',
        'Assistência técnica pericial judicial e extrajudicial',
        'Apoio normativo em exigências do INCRA e SEMAD',
        'Validação e conferência de peças técnicas',
      ],
      color: '#1EB53A',
    },
  ];

  const methodology = [
    {
      number: '01',
      title: 'Diagnóstico 360°',
      description: 'Levantamento abrangente de documentos, matrículas, bases cartográficas, imagens de satélite e dados dos órgãos reguladores.',
    },
    {
      number: '02',
      title: 'Parecer & Plano Diretor de Ação',
      description: 'Apresentação clara dos gargalos encontrados com roteiro passo a passo, estimativas de prazos, custos e estratégias mais eficientes.',
    },
    {
      number: '03',
      title: 'Condução & Articulação Técnica',
      description: 'Interlocução técnica direta com Cartórios de Registro de Imóveis, INCRA, SEMAD e prefeituras para superar exigências com agilidade.',
    },
    {
      number: '04',
      title: 'Conclusão & Blindagem Patrimonial',
      description: 'Propriedade regularizada, desembaraçada, habilitada para crédito e juridicamente segura para as próximas gerações.',
    },
  ];

  const faqs = [
    {
      question: 'Por que a TECGEO agora oferece Consultoria além dos serviços técnicos?',
      answer: 'Ao longo de mais de 10 anos de atuação em Goiás, identificamos que muitas propriedades rurais não precisam apenas de uma medição de campo, mas de uma visão estratégica completa. A consultoria une a experiência em cartórios, domínio da legislação agrária e ambiental, e tecnologia de ponta para orientar decisões antes, durante e após qualquer processo de regularização.',
    },
    {
      question: 'Qual a diferença entre contratar um serviço pontual e a consultoria?',
      answer: 'Em um serviço pontual (como um georreferenciamento isolado), executa-se apenas a medição. Na consultoria, analisamos a propriedade como um todo: viabilidade de crédito, riscos de sobreposição com vizinhos, adequação da Reserva Legal e conformidade para futuras vendas ou heranças, elaborando um plano de ação completo.',
    },
    {
      question: 'A consultoria pode ajudar se minha fazenda tiver pendência no cartório ou INCRA há anos?',
      answer: 'Sim! Essa é uma das principais especialidades do nosso núcleo de consultoria. Fazemos o saneamento histórico do processo, identificamos a causa exata da exigência ou sobreposição e apresentamos a solução técnica e registral para destravar o processo.',
    },
    {
      question: 'Advogados e outros engenheiros podem contratar a consultoria da TECGEO?',
      answer: 'Com certeza. Atuamos como parceiros estratégicos de escritórios de advocacia do agronegócio e profissionais técnicos, emitindo laudos, pareceres e prestando assessoria técnica em disputas de divisa, estremações, usucapiões e processos administrativos.',
    },
    {
      question: 'Como agendar uma reunião ou diagnóstico consultivo?',
      answer: 'Você pode entrar em contato direto pelo nosso WhatsApp corporativo ou formulário do site. Realizamos tanto atendimentos presenciais em nossas unidades (Cachoeira Alta e Caçu) quanto reuniões online para proprietários e investidores de todo o Brasil.',
    },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-[#001B80] via-[#00289e] to-[#001B80] text-white py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 opacity-15 pointer-events-none">
          <div className="absolute top-0 right-10 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-10 w-80 h-80 bg-blue-400 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >


            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight drop-shadow-sm">
              TECGEO agora é Consultoria
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-200 leading-relaxed mb-10 max-w-3xl mx-auto">
              Soluções integradas em <strong>gestão fundiária</strong>, <strong>ambiental</strong> e <strong>segurança patrimonial</strong>. Muito mais que medição: orientação estratégica de ponta a ponta para o agronegócio.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/5564999558696?text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20a%20Consultoria%20TECGEO."
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#1EB53A] text-white px-8 py-4 rounded-xl hover:bg-[#189c30] transition-all flex items-center justify-center gap-2.5 text-sm sm:text-base shadow-lg"
              >
                Falar com um Consultor
                <ArrowRight className="group-hover:translate-x-1 transition-transform flex-shrink-0" size={20} />
              </a>
              <button
                onClick={() => onNavigate('contato')}
                className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-[#001B80] transition-all text-sm sm:text-base"
              >
                Solicitar Diagnóstico
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Destaque / Manifesto */}
      <section className="py-24 sm:py-28 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-sm">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                  <img
                    src={fotoAngela}
                    alt="Ângela da Silva Paula de Oliveira"
                    className="w-full h-96 sm:h-[440px] object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001B80]/90 via-transparent to-transparent flex flex-col justify-end p-6 text-white">
                    <p className="text-lg font-bold">Ângela S. P. de Oliveira</p>
                    <p className="text-xs text-green-300 font-medium">Fundadora & Líder do Núcleo de Consultoria</p>
                    <p className="text-xs text-gray-300 mt-1">Especialista em Regularização Fundiária e Notarial</p>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-[#1EB53A] text-white p-4 rounded-xl shadow-lg hidden sm:block">
                  <BadgeCheck size={32} />
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 text-[#1EB53A] font-semibold text-sm tracking-wider uppercase mb-3">
                <Briefcase size={18} />
                <span>A Nova Fase da TECGEO</span>
              </div>
              <h2 className="text-[#001B80] text-3xl sm:text-4xl mb-6">
                Por que a TECGEO se tornou uma Consultoria Especializada?
              </h2>
              <div className="space-y-4 text-gray-700 leading-relaxed text-base sm:text-lg">
                <p>
                  Ao longo de mais de uma década atuando em Cachoeira Alta, Caçu e em todo o estado de Goiás, acompanhamos produtores rurais perderem prazos de crédito, enfrentarem travas em cartórios e sofrerem com conflitos de divisa por falta de uma <strong>estratégia antecipada</strong>.
                </p>
                <p>
                  Percebemos que o produtor rural moderno e o investidor imobiliário não precisam apenas de um memorial descritivo — eles precisam de <strong>segurança jurídica, inteligência territorial e visão multidisciplinar</strong>.
                </p>
                <p>
                  Combinamos o conhecimento prático dos procedimentos cartorários, a formação técnica em agrimensura, tecnologia GNSS e a experiência em órgãos ambientais para estruturar a <strong>TECGEO Consultoria</strong>: uma frente dedicada a destravar processos, planejar sucessões familiares e blindar o patrimônio rural.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-4 border-t border-gray-100 pt-6">
                <div>
                  <span className="text-3xl font-bold text-[#001B80] block">10+</span>
                  <span className="text-xs sm:text-sm text-gray-600">Anos de atuação no agro goiano</span>
                </div>
                <div>
                  <span className="text-3xl font-bold text-[#1EB53A] block">100%</span>
                  <span className="text-xs sm:text-sm text-gray-600">Conformidade e segurança técnica</span>
                </div>
                <div>
                  <span className="text-3xl font-bold text-[#001B80] block">360°</span>
                  <span className="text-xs sm:text-sm text-gray-600">Abordagem técnica, jurídica e ambiental</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Áreas de Atuação da Consultoria */}
      <section className="py-28 sm:py-32 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#1EB53A]">Nossas Áreas</span>
            <h2 className="text-[#001B80] text-3xl sm:text-4xl mt-2 mb-4">
              Onde a Consultoria TECGEO atua
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Soluções personalizadas desenhadas para cada estágio da sua propriedade ou negócio rural
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pillars.map((pillar, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all border border-gray-100 flex flex-col justify-between group"
              >
                <div>
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110"
                    style={{ backgroundColor: `${pillar.color}15` }}
                  >
                    <pillar.icon size={32} style={{ color: pillar.color }} />
                  </div>
                  <span className="text-xs font-semibold uppercase tracking-wider text-gray-400 block mb-1">
                    {pillar.subtitle}
                  </span>
                  <h3 className="text-[#001B80] text-2xl font-bold mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed mb-6">{pillar.description}</p>
                  
                  <div className="space-y-2.5 border-t border-gray-100 pt-6">
                    {pillar.items.map((item, itemIdx) => (
                      <div key={itemIdx} className="flex items-start gap-3">
                        <CheckCircle2 size={18} className="text-[#1EB53A] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t border-gray-100">
                  <a
                    href={`https://wa.me/5564999558696?text=Ol%C3%A1!%20Gostaria%20de%20consultoria%20sobre:%20${encodeURIComponent(pillar.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#001B80] hover:text-[#1EB53A] transition-colors"
                  >
                    Consultar sobre esta área
                    <ArrowRight size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Como Funciona a Consultoria */}
      <section className="py-28 sm:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#1EB53A]">Metodologia</span>
            <h2 className="text-[#001B80] text-3xl sm:text-4xl mt-2 mb-4">
              Como funciona o ciclo consultivo TECGEO
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Um processo estruturado com clareza, prazos acordados e total previsibilidade
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {methodology.map((step, idx) => (
              <div key={idx} className="relative bg-gray-50 rounded-2xl p-6 border border-gray-100 flex flex-col justify-between">
                <div>
                  <div className="w-14 h-14 bg-[#1EB53A] text-white font-bold text-xl rounded-xl flex items-center justify-center mb-5 shadow-md">
                    {step.number}
                  </div>
                  <h4 className="text-[#001B80] text-xl font-bold mb-3">{step.title}</h4>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Para quem é a Consultoria? */}
      <section className="py-28 sm:py-32 bg-gradient-to-br from-[#001B80] to-[#002f99] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-white text-3xl sm:text-4xl mb-4">Quem se beneficia da nossa Consultoria?</h2>
            <p className="text-gray-200 text-lg max-w-2xl mx-auto">
              Atendemos diferentes perfis com soluções sob medida para cada desafio
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Produtores Rurais',
                desc: 'Proprietários que precisam renovar CAR, liberar crédito bancário, sanar sobreposições e garantir segurança para a família.',
              },
              {
                title: 'Compradores & Investidores',
                desc: 'Investidores e fundos que buscam adquirir terras no Centro-Oeste sem correr riscos ocultos de matrícula ou passivos ambientais.',
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
                title: 'Empresas do Agronegócio & Loteamentos',
                desc: 'Empresas que realizam projetos de subdivisão, expansão agrícola, loteamento rural ou urbano e regularização fundiária corporativa.',
              },
              {
                title: 'Famílias em Processo Sucessório',
                desc: 'Assessoria neutra e técnica na partilha e desmembramento equilibrado de fazendas entre herdeiros, evitando disputas judiciais.',
              },
            ].map((target, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/15">
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircle2 className="text-[#1EB53A]" size={22} />
                  <h4 className="text-xl font-bold text-white">{target.title}</h4>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">{target.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-28 sm:py-32 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-sm font-semibold uppercase tracking-wider text-[#1EB53A]">Tire suas dúvidas</span>
            <h2 className="text-[#001B80] text-3xl sm:text-4xl mt-2 mb-4">Perguntas Frequentes sobre a Consultoria</h2>
            <p className="text-gray-600">Entenda como a consultoria funciona na prática</p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border border-gray-200 rounded-xl overflow-hidden hover:border-gray-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full text-left p-5 flex justify-between items-center gap-4 bg-white hover:bg-gray-50 transition-colors"
                >
                  <span className="font-semibold text-[#001B80] text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    size={20}
                    className={`text-[#1EB53A] flex-shrink-0 transition-transform duration-200 ${
                      openFaq === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-5 pb-5 pt-1 text-gray-600 text-sm sm:text-base leading-relaxed bg-white border-t border-gray-100">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-24 sm:py-28 bg-gradient-to-r from-[#1EB53A] to-[#189c30] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-2 rounded-full mb-6 text-sm font-medium">
            <Calendar size={18} />
            <span>Atendimento Personalizado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-white">
            Deseja uma análise consultiva da sua propriedade?
          </h2>
          <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8 leading-relaxed">
            Converse diretamente com nossos consultores técnicos e descubra a rota mais segura e econômica para regularizar seu imóvel rural.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/5564999558696?text=Ol%C3%A1!%20Desejo%20agendar%20um%20diagn%C3%B3stico%20de%20consultoria%20com%20a%20TECGEO."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-[#001B80] px-8 py-4 rounded-xl hover:bg-gray-100 transition-all font-bold shadow-lg flex items-center justify-center gap-2"
            >
              Falar no WhatsApp
              <ArrowRight size={20} />
            </a>
            <button
              onClick={() => onNavigate('contato')}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white/10 transition-all font-semibold"
            >
              Enviar Mensagem pelo Site
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

