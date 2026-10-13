import { Ruler, Leaf, FileCheck, Building2, Tractor, GitBranch, Map, FileText, CheckCircle, Award, Users, Zap, ArrowRight, ShieldCheck, Satellite, Camera, Cpu, FileStack, MapPinned, Split, Briefcase } from 'lucide-react';

interface ServicosPageProps {
  onNavigate: (page: string) => void;
}

export function ServicosPage({ onNavigate }: ServicosPageProps) {
  const services = [
    {
      number: '01',
      icon: Ruler,
      title: 'Georreferenciamento de Imóveis Rurais',
      description: 'Medição certificada com tecnologia GNSS e precisão centimétrica. Cumpre todas as exigências do INCRA e da Lei 10.267, indispensável para escrituração, desmembramento e segurança patrimonial de imóveis rurais. Inclui levantamento perimétrico, marcos geodésicos e memorial descritivo oficial.',
      highlights: ['Precisão centimétrica GNSS', 'Certificação no SIGEF / INCRA', 'Memorial descritivo homologado'],
    },
    {
      number: '02',
      icon: Leaf,
      title: 'CAR – Cadastro Ambiental Rural (SigCAR Goiás)',
      description: 'Elaboração, retificação e atualização completa no sistema oficial SigCAR. Mapeamento de Reserva Legal, Áreas de Preservação Permanente (APPs), hidrografia, áreas consolidadas e remanescentes de vegetação nativa conforme o Código Florestal brasileiro.',
      highlights: ['Conformidade com o Código Florestal', 'Mapeamento de Reserva Legal e APPs', 'Habilitação para crédito bancário'],
    },
    {
      number: '03',
      icon: FileCheck,
      title: 'Licenciamento Ambiental & Outorgas',
      description: 'Regularização ambiental essencial para liberação e manutenção de financiamentos agrícolas e pecuários. Conduzimos processos de Licença Prévia (LP), Instalação (LI), Operação (LO), além de licenças simplificadas para agricultura de sequeiro ou irrigada, pecuária, outorgas de uso d’água e dispensas perante a SEMAD Goiás.',
      highlights: ['Desbloqueio de crédito e custeio', 'Outorgas d’água e dispensas', 'Protocolo e acompanhamento na SEMAD'],
    },
    {
      number: '04',
      icon: Building2,
      title: 'Loteamento Urbano',
      description: 'Projetos técnicos completos de parcelamento do solo urbano com aprovação perante prefeituras municipais e cartórios de registro de imóveis. Levantamento planialtimétrico, divisão de quadras e lotes, arruamento, memorial descritivo urbanístico e peças gráficas.',
      highlights: ['Aprovação municipal e registral', 'Divisão de quadras e lotes', 'Plantas e memoriais completos'],
    },
    {
      number: '05',
      icon: Tractor,
      title: 'Loteamento & Parcelamento Rural',
      description: 'Divisão e regularização técnica de áreas rurais em frações ideais ou glebas autônomas, respeitando a fração mínima de parcelamento (FMP) e as normas agrárias do INCRA. Definição de acessos, servidões de passagem e plantas georreferenciadas.',
      highlights: ['Respeito à FMP e normas INCRA', 'Acessos e servidões definidos', 'Plantas e averbações de partilha'],
    },
    {
      number: '06',
      icon: GitBranch,
      title: 'Desmembramento de Matrículas',
      description: 'Separação jurídica e física de propriedades, desdobrando uma matrícula matriz em duas ou mais matrículas independentes para venda fracionada ou partilha sucessória entre herdeiros. Acompanhamento completo em campo e no cartório.',
      highlights: ['Geração de matrículas autônomas', 'Levantamento topográfico pericial', 'Suporte notarial e registral'],
    },
    {
      number: '07',
      icon: Map,
      title: 'Unificação Registral',
      description: 'Fusão de matrículas contíguas pertencentes ao mesmo proprietário em uma única certidão imobiliária unificada. Simplifica a gestão patrimonial, recolhimento de tributos (ITR) e facilita a obtenção de garantias bancárias consolidadas.',
      highlights: ['Fusão de áreas contíguas', 'Gestão patrimonial integrada', 'Memorial unificado oficial'],
    },
    {
      number: '08',
      icon: FileText,
      title: 'Assessoria em Escrituras Públicas & Estremação',
      description: 'Suporte técnico e pericial na elaboração de escrituras de compra e venda, permuta, doação e escrituras de estremação (procedimento notarial que extingue condomínios de fato e fixa com precisão os limites territoriais definitivos de áreas em comum).',
      highlights: ['Escrituras de estremação definitiva', 'Eliminação de conflitos de divisa', 'Coordenação direta com tabelionatos'],
    },
    {
      number: '09',
      icon: MapPinned,
      title: 'Regularize Geo – Assessoria a Profissionais & Técnicos',
      description: 'Programa dedicado de cooperação e assessoria técnica que atende tanto produtores quanto topógrafos, engenheiros agrônomos e peritos. Prestamos suporte especializado na superação de notas devolutivas, validação de peças técnicas e rotinas perante INCRA e cartórios.',
      highlights: ['Suporte para engenheiros e peritos', 'Superação de notas devolutivas', 'Validação de peças cartográficas'],
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero Institucional */}
      <section className="bg-[#001B80] text-white py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-3">
              Engenharia & Regularização Territorial
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Serviços Especializados TECGEO
            </h1>
            <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
              Rigor técnico, equipamentos geodésicos de ponta e profundo domínio notarial e ambiental para desembaraçar, certificar e valorizar imóveis rurais e urbanos em Goiás.
            </p>
          </div>
        </div>
      </section>

      {/* Banner Plano Agro+ - Layout Sóbrio */}
      <section className="bg-slate-900 text-white py-12 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                Pacote Integrado para o Produtor Rural
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                Plano Agro+: Georreferenciamento + CAR + Licenciamento
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Contrate as três maiores pendências do imóvel rural em um único processo coordenado com economia de até 30% e parcelamento adaptado à safra.
              </p>
            </div>
            <button
              onClick={() => onNavigate('plano-agro')}
              className="bg-[#1EB53A] text-white px-7 py-3.5 rounded hover:bg-[#189c30] transition-colors inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap"
            >
              Conhecer o Plano Agro+
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {/* Lista Principal de Serviços - Layout Tabular Aberto */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Soluções Completas
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">
              Portfólio de Serviços Técnicos
            </h2>
            <p className="text-slate-600 text-sm sm:text-base mt-2">
              Cada serviço é executado com responsabilidade técnica formal (ART/TRT), rastreabilidade geodésica e conformidade com a legislação aplicável.
            </p>
          </div>

          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {services.map((service, index) => (
              <div key={index} className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
                {/* Número e Ícone */}
                <div className="lg:col-span-1 flex items-center lg:flex-col lg:items-start gap-3">
                  <span className="font-mono text-sm font-bold text-[#1EB53A]">{service.number}</span>
                  <service.icon size={22} className="text-[#001B80]" />
                </div>

                {/* Título e Descrição */}
                <div className="lg:col-span-7">
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
                </div>

                {/* Highlights e Ação */}
                <div className="lg:col-span-4 lg:pl-6 space-y-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400 block mb-2">
                    Destaques Técnicos
                  </span>
                  {service.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                      <CheckCircle size={15} className="text-[#1EB53A] flex-shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Áreas de Atuação - 4 Colunas Abertas com Divisórias */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Segmentos & Esferas
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Onde a TECGEO Atua</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-2 border-slate-200 pt-6">
              <h4 className="text-base font-bold text-[#001B80] mb-3">Imóveis Rurais</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Fazendas e glebas de lavoura e pecuária</li>
                <li>• Certificação INCRA / SIGEF</li>
                <li>• Reserva Legal e CAR Goiás</li>
                <li>• Licenciamentos e outorgas d’água</li>
              </ul>
            </div>

            <div className="border-t-2 border-slate-200 pt-6">
              <h4 className="text-base font-bold text-[#001B80] mb-3">Áreas Urbanas</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Loteamentos e parcelamentos do solo</li>
                <li>• Regularização fundiária urbana (REURB)</li>
                <li>• Desmembramento e unificação de lotes</li>
                <li>• Levantamento topográfico para projetos</li>
              </ul>
            </div>

            <div className="border-t-2 border-slate-200 pt-6">
              <h4 className="text-base font-bold text-[#001B80] mb-3">Documentação Legal</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Memorial descritivo com ART/TRT</li>
                <li>• Plantas georreferenciadas certificadas</li>
                <li>• Escritura de estremação notarial</li>
                <li>• Saneamento de notas devolutivas</li>
              </ul>
            </div>

            <div className="border-t-2 border-slate-200 pt-6">
              <h4 className="text-base font-bold text-[#001B80] mb-3">Consultoria Estratégica</h4>
              <ul className="space-y-2 text-sm text-slate-600">
                <li>• Auditoria pré-aquisição de fazendas</li>
                <li>• Pareceres para advogados agraristas</li>
                <li>• Apoio técnico pericial em divisas</li>
                <li>• Planejamento em partilhas sucessórias</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Tecnologias - Linhas Limpas */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Infraestrutura
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Tecnologias Utilizadas em Campo</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border-l-2 border-slate-300 pl-6 py-2">
              <Satellite size={24} className="text-[#001B80] mb-3" />
              <h4 className="text-base font-bold text-slate-900 mb-2">Receptores GNSS Geodésicos</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Equipamentos de dupla frequência operando em modo RTK e pós-processado para rastreio milimétrico de vértices e confrontações.
              </p>
            </div>

            <div className="border-l-2 border-slate-300 pl-6 py-2">
              <Camera size={24} className="text-[#1EB53A] mb-3" />
              <h4 className="text-base font-bold text-slate-900 mb-2">Aerofotogrametria & Drones</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Mapeamento aéreo de alta resolução para identificação visual de APPs, hidrografia, benfeitorias e uso atual do solo.
              </p>
            </div>

            <div className="border-l-2 border-slate-300 pl-6 py-2">
              <Cpu size={24} className="text-[#001B80] mb-3" />
              <h4 className="text-base font-bold text-slate-900 mb-2">Softwares de Geoprocessamento</h4>
              <p className="text-sm text-slate-600 leading-relaxed">
                Processamento cartográfico e SIG em plataformas líderes do setor para compatibilização perfeita com bases do INCRA e SEMAD.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Chamada para Consultoria - Editorial */}
      <section className="py-16 sm:py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                Visão Além da Medição
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Precisa de uma abordagem consultiva e estratégica?
              </h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                Conheça a <strong>TECGEO Consultoria</strong>: nossa divisão especializada em due diligence para investidores, pareceres periciais para advogados e saneamento de impasses registrais complexos.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={() => onNavigate('consultoria')}
                className="bg-[#1EB53A] text-white px-7 py-3.5 rounded hover:bg-[#189c30] transition-colors inline-flex items-center gap-2 text-sm font-medium whitespace-nowrap"
              >
                <Briefcase size={18} />
                Conhecer a Consultoria
              </button>
              <button
                onClick={() => onNavigate('contato')}
                className="border border-white/60 text-white px-7 py-3.5 rounded hover:bg-white/10 transition-colors text-sm font-medium whitespace-nowrap"
              >
                Solicitar Orçamento
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
