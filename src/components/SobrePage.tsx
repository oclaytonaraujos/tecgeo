import image_dea1c37b8860fa12ad2cebb7d4eb6c1b99167f21 from 'figma:asset/dea1c37b8860fa12ad2cebb7d4eb6c1b99167f21.png';
import image_c761b00ab8c6f71db4a1a590bb1d1f2ce46d3b6e from 'figma:asset/c761b00ab8c6f71db4a1a590bb1d1f2ce46d3b6e.png';
import fotoAngela from '../assets/foto-angela.jpeg';
import { Target, Eye, Heart, Award, Users, MapPin, Clock, Briefcase, ArrowRight } from 'lucide-react';

interface SobrePageProps {
  onNavigate: (page: string) => void;
}

export function SobrePage({ onNavigate }: SobrePageProps) {
  const values = [
    {
      icon: Award,
      title: 'Excelência Técnica',
      description: 'Compromisso com o rigor geodésico, precisão centimétrica e conformidade integral com normas do INCRA e SEMAD.',
    },
    {
      icon: Users,
      title: 'Atendimento Personalizado',
      description: 'Acompanhamento próximo de cada produtor, investidor ou parceiro, com comunicação clara em cada etapa.',
    },
    {
      icon: Heart,
      title: 'Ética & Segurança Jurídica',
      description: 'Relações de confiança construídas com transparência documental e respeito à verdade registral.',
    },
    {
      icon: Clock,
      title: 'Compromisso de Prazos',
      description: 'Condução ágil e previsível dos processos técnicos e notariais para não comprometer janelas de crédito rural.',
    },
  ];

  const team = [
    'Técnicos em Agrimensura credenciados pelo INCRA',
    'Especialistas em Geoprocessamento e SIG',
    'Consultores em Legislação Ambiental e Notarial',
    'Analistas de Processos Cartorários',
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* Hero Institucional */}
      <section className="bg-[#001B80] text-white py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-3">
              Institucional TECGEO
            </span>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
              Sobre a TECGEO
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-slate-200 leading-relaxed font-normal">
              Mais de uma década aliando engenharia geodésica, inteligência cartorária e consultoria estratégica para desimpedir e valorizar o agronegócio em Goiás.
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História - Editorial 2 Colunas */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                Nossa Trajetória
              </span>
              <h2 className="text-3xl font-bold text-[#001B80] mb-6 leading-tight">
                Mais de 10 Anos Transformando a Regularização de Terras em Goiás
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  A TECGEO nasceu da percepção de que produtores rurais, investidores e famílias enfrentavam imensas travas para regularizar suas terras. Exigências cartorárias complexas, sobreposições no INCRA e descompasso com leis ambientais geravam insegurança jurídica e bloqueio de crédito rural.
                </p>
                <p>
                  Ao longo de mais de dez anos, estruturamos uma abordagem que vai além da topografia comum: aliamos tecnologia GNSS de alta precisão a uma profunda vivência prática das rotinas dos cartórios de imóveis e órgãos fiscalizadores.
                </p>
                <p>
                  Hoje, somos referência regional com unidades em Cachoeira Alta e Caçu, atendendo com rigor técnico e credibilidade técnica em todo o estado de Goiás.
                </p>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="border border-slate-200 p-2 bg-slate-50">
                <img
                  src={image_c761b00ab8c6f71db4a1a590bb1d1f2ce46d3b6e}
                  alt="Vista aérea de propriedade rural regularizada"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Fundadora - Perfil Executivo Limpo */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            <div className="lg:col-span-4">
              <div className="border border-slate-200 p-2 bg-white">
                <img
                  src={fotoAngela}
                  alt="Ângela da Silva Paula de Oliveira - Fundadora da TECGEO"
                  className="w-full h-80 sm:h-96 object-cover object-top filter grayscale contrast-110 hover:grayscale-0 transition-all duration-300"
                />
                <div className="p-4 bg-white border-t border-slate-100">
                  <h3 className="text-base font-bold text-slate-900">Ângela S. P. de Oliveira</h3>
                  <p className="text-xs text-[#001B80] font-semibold mt-0.5">Fundadora da TECGEO</p>
                  <p className="text-xs text-slate-500 mt-1">Técnica em Agrimensura (IFG) & Especialista Notarial</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-8">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                Liderança & Origem
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#001B80] mb-6">
                Ângela da Silva Paula de Oliveira
              </h2>
              <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed">
                <p>
                  Ângela construiu sua carreira com base no compromisso, na resiliência e no estudo contínuo. Iniciou sua trajetória profissional ainda jovem nos cartórios da Comarca de Cachoeira Alta (GO), onde absorveu os fundamentos da prática notarial, títulos de domínio e registros públicos de imóveis.
                </p>
                <p>
                  Unindo essa experiência prática à formação técnica em Agrimensura pelo Instituto Federal de Goiás (IFG), especializou-se na regularização fundiária de áreas rurais e urbanas.
                </p>
                <p>
                  À frente da TECGEO, consolidou a empresa como sinônimo de segurança jurídica, responsabilidade técnica perante o INCRA e ética profissional, liderando também a expansão da divisão de Consultoria Estratégica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores - 3 Colunas Abertas com Divisória */}
      <section className="py-16 sm:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Diretrizes Corporativas
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Missão, Visão e Valores</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-slate-200 border-y border-slate-200 py-10">
            <div className="py-6 md:py-0 md:px-8 first:pl-0 last:pr-0">
              <Target size={24} className="text-[#001B80] mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Missão</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Facilitar e assegurar a regularização imobiliária rural e urbana com excelência técnica, agilidade e conformidade jurídica, contribuindo diretamente para o desenvolvimento sustentável e o crédito no agronegócio.
              </p>
            </div>

            <div className="py-6 md:py-0 md:px-8 first:pl-0 last:pr-0">
              <Eye size={24} className="text-[#1EB53A] mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Visão</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Ser a empresa de engenharia diagnóstica e consultoria fundiária mais confiável e recomendada em Goiás, reconhecida pela precisão métrica, blindagem patrimonial e integridade em cada certidão entregue.
              </p>
            </div>

            <div className="py-6 md:py-0 md:px-8 first:pl-0 last:pr-0">
              <Heart size={24} className="text-[#001B80] mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-2">Valores</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Rigor técnico inegociável, transparência documental, respeito aos prazos e às normas ambientais, sigilo pericial e compromisso absoluto com o patrimônio de quem confia em nosso trabalho.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Valores em Prática - Grid Aberto */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Princípios Operacionais
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Nossos Valores em Prática</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, index) => (
              <div key={index} className="border-t-2 border-slate-300 pt-6">
                <v.icon size={22} className="text-[#001B80] mb-3" />
                <h4 className="text-base font-bold text-slate-900 mb-2">{v.title}</h4>
                <p className="text-sm text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipe Multidisciplinar */}
      <section className="py-16 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5">
              <div className="border border-slate-200 p-2 bg-slate-50">
                <img
                  src={image_dea1c37b8860fa12ad2cebb7d4eb6c1b99167f21}
                  alt="Equipe técnica em campo"
                  className="w-full h-72 sm:h-80 object-cover"
                />
              </div>
            </div>
            <div className="lg:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                Capacidade Técnica
              </span>
              <h2 className="text-3xl font-bold text-[#001B80] mb-4">
                Corpo Técnico Especializado
              </h2>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                Nosso quadro reúne profissionais com formação técnica sólida, registro formal e anos de vivência em levantamentos de campo com tecnologia GNSS e análise de cadeias dominiais.
              </p>
              <ul className="space-y-3">
                {team.map((role, index) => (
                  <li key={index} className="flex items-center gap-3 text-sm font-medium text-slate-800">
                    <span className="w-1.5 h-1.5 bg-[#1EB53A] rounded-full flex-shrink-0"></span>
                    <span>{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nossas Unidades - 2 Colunas Limpas sem Molduras Excessivas */}
      <section className="py-16 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
              Presença Regional
            </span>
            <h2 className="text-3xl font-bold text-[#001B80]">Nossas Unidades em Goiás</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Cachoeira Alta */}
            <div className="border border-slate-200 bg-white p-6">
              <div className="mb-4">
                <span className="text-xs font-semibold text-[#1EB53A] uppercase tracking-wider block">Unidade Sede</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Cachoeira Alta - GO</h3>
                <p className="text-sm text-slate-600 mt-2">
                  Setor Canaã, Av. A, Qd. 06, Lt. 06 — CEP 75870-000<br />
                  Tel/WhatsApp: (64) 99955-8696 | Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h
                </p>
              </div>
              <div className="relative w-full aspect-[16/9] border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d533.8085690304921!2d-50.935205299095415!3d-18.75569910715441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ1JzIwLjkiUyA1MMKwNTYnMDUuNSJX!5e1!3m2!1spt-BR!2sbr!4v1791908276525!5m2!1spt-BR!2sbr" 
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>

            {/* Caçu */}
            <div className="border border-slate-200 bg-white p-6">
              <div className="mb-4">
                <span className="text-xs font-semibold text-[#1EB53A] uppercase tracking-wider block">Unidade Regional</span>
                <h3 className="text-xl font-bold text-slate-900 mt-1">Caçu - GO</h3>
                <p className="text-sm text-slate-600 mt-2">
                  Rua José Reinaldo Viêira, 1223 — CEP 75813-000<br />
                  Tel/WhatsApp: (64) 99955-8696 | Segunda a Sexta: 8h às 18h | Sábado: 8h às 12h
                </p>
              </div>
              <div className="relative w-full aspect-[16/9] border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3422.7084534185456!2d-51.1366!3d-18.5643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949e63aa87f9c4c3%3A0x1c465962ac69a40c!2sR.%20Jos%C3%A9%20Reinaldo%20Vi%C3%AAira%2C%201223%20-%20%C3%81gua%20Fria%2C%20Ca%C3%A7u%20-%20GO%2C%2075813-000!5e1!3m2!1spt-BR!2sbr!4v1765121341003!5m2!1spt-BR!2sbr" 
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="strict-origin-when-cross-origin"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 sm:py-20 bg-slate-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-l-4 border-[#1EB53A] bg-white p-8 sm:p-12 border border-slate-200">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-semibold uppercase tracking-widest text-[#1EB53A] block mb-2">
                Converse com a TECGEO
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#001B80] mb-3">
                Vamos regularizar sua propriedade com precisão e segurança?
              </h2>
              <p className="text-slate-600 text-base leading-relaxed">
                Entre em contato e descubra como podemos ajudar você com serviços técnicos e consultoria estratégica.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                onClick={() => onNavigate('contato')}
                className="bg-[#001B80] text-white px-7 py-3 rounded hover:bg-[#001566] transition-colors text-sm font-semibold whitespace-nowrap"
              >
                Entrar em Contato
              </button>
              <button
                onClick={() => onNavigate('consultoria')}
                className="border border-slate-300 text-slate-800 px-7 py-3 rounded hover:bg-slate-100 transition-colors text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Briefcase size={16} />
                Conhecer a Consultoria
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
