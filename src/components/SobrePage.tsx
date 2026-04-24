import image_dea1c37b8860fa12ad2cebb7d4eb6c1b99167f21 from 'figma:asset/dea1c37b8860fa12ad2cebb7d4eb6c1b99167f21.png';
import image_c761b00ab8c6f71db4a1a590bb1d1f2ce46d3b6e from 'figma:asset/c761b00ab8c6f71db4a1a590bb1d1f2ce46d3b6e.png';
import { Target, Eye, Heart, Award, Users, MapPin, Clock } from 'lucide-react';

interface SobrePageProps {
  onNavigate: (page: string) => void;
}

export function SobrePage({ onNavigate }: SobrePageProps) {
  const values = [
    {
      icon: Award,
      title: 'Excelência Técnica',
      description: 'Compromisso com a qualidade e precisão em todos os nossos serviços',
    },
    {
      icon: Users,
      title: 'Foco no Cliente',
      description: 'Atendimento personalizado e soluções sob medida para cada necessidade',
    },
    {
      icon: Heart,
      title: 'Ética e Transparência',
      description: 'Relações baseadas em confiança, honestidade e responsabilidade',
    },
    {
      icon: Clock,
      title: 'Pontualidade',
      description: 'Cumprimento de prazos e compromisso com a entrega no tempo acordado',
    },
  ];

  const team = [
    'Engenheiros Agrimensores',
    'Engenheiros Ambientais',
    'Técnicos em Agrimensura',
    'Especialistas em Geoprocessamento',
    'Consultores Ambientais',
  ];

  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#001B80] to-[#003cb3] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="mb-4" style={{ textAlign: 'center' }}>Sobre a TecGeo</h1>
            <p className="text-xl text-gray-100 leading-relaxed" style={{ textAlign: 'center', maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Mais de 10 anos transformando a regularização de imóveis rurais em Goiás
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-[#001B80] mb-6">Nossa História</h2>
              <div className="space-y-4 text-gray-700">
                <p>
                  A TecGeo nasceu da percepção de que muitos produtores rurais e proprietários de imóveis enfrentavam dificuldades para regularizar suas terras. Processos burocráticos, falta de informação técnica e custos elevados eram barreiras comuns.
                </p>
                <p>
                  Com mais de uma década de atuação, especializamo-nos em tornar o processo de regularização mais simples, acessível e eficiente. Nossa equipe de engenheiros e especialistas combina experiência técnica com conhecimento profundo da legislação local e federal.
                </p>
                <p>
                  Hoje, somos referência em georreferenciamento, CAR e licenciamento ambiental em todo o estado de Goiás, atendendo desde pequenos produtores até grandes propriedades rurais.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
              <img
                src={image_c761b00ab8c6f71db4a1a590bb1d1f2ce46d3b6e}
                alt="Vista aérea de propriedade rural"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-xl text-center shadow-sm">
              <div className="bg-[#1EB53A]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="text-[#1EB53A]" size={32} />
              </div>
              <h3 className="text-[#001B80] mb-3">Missão</h3>
              <p className="text-gray-700">
                Facilitar a regularização de imóveis rurais com excelência técnica, agilidade e conformidade legal, contribuindo para o desenvolvimento sustentável do campo.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-sm">
              <div className="bg-[#1EB53A]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="text-[#1EB53A]" size={32} />
              </div>
              <h3 className="text-[#001B80] mb-3">Visão</h3>
              <p className="text-gray-700">
                Ser a empresa mais confiável e inovadora em regularização de imóveis rurais em Goiás, reconhecida pela qualidade e compromisso com nossos clientes.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl text-center shadow-sm">
              <div className="bg-[#1EB53A]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="text-[#1EB53A]" size={32} />
              </div>
              <h3 className="text-[#001B80] mb-3">Valores</h3>
              <p className="text-gray-700">
                Ética, transparência, excelência técnica, comprometimento, inovação e respeito ao meio ambiente e às pessoas.
              </p>
            </div>
          </div>

          {/* Valores Detalhados */}
          <div className="mt-12">
            <h3 className="text-[#001B80] text-center mb-[10px] mt-[0px] mr-[0px] ml-[0px]">Nossos Valores em Prática</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <div key={index} className="bg-white p-6 rounded-xl text-center shadow-sm hover:shadow-md transition-all">
                  <div className="bg-[#001B80]/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <value.icon className="text-[#001B80]" size={24} />
                  </div>
                  <h4 className="text-[#001B80] mb-2">{value.title}</h4>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipe */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-[#001B80] mb-4">Nossa Equipe</h2>
            <p className="text-xl text-gray-600 leading-relaxed" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
              Profissionais qualificados e experientes para garantir a excelência em cada projeto
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-gray-100 rounded-xl h-80 flex items-center justify-center">
              <img
                src={image_dea1c37b8860fa12ad2cebb7d4eb6c1b99167f21}
                alt="Equipe trabalhando em campo"
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
            <div className="flex flex-col justify-center">
              <p className="text-gray-700 mb-6">
                Nossa equipe multidisciplinar reúne profissionais altamente capacitados, com formação técnica sólida e experiência prática no campo. Todos comprometidos em oferecer as melhores soluções para cada cliente.
              </p>
              <ul className="space-y-3">
                {team.map((role, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 bg-[#1EB53A] rounded-full flex-shrink-0"></div>
                    <span className="text-gray-700">{role}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Localização */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-[#001B80] mb-[25px] text-center mt-[0px] mr-[0px] ml-[0px]">Nossas Localizações</h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-[25px] mr-[0px] mb-[0px] ml-[0px]">
            {/* Cachoeira Alta */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <div className="bg-gray-100 p-6 text-center border-b border-gray-200">
                  <div className="inline-flex items-center justify-center gap-2 mb-2">
                    <div className="bg-[#1EB53A] w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                  </div>
                  <h4 className="text-[#001B80] mb-1">Mapa de localização</h4>
                  <p className="text-gray-600">Cachoeira Alta - Goiás</p>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3418.8998028918363!2d-50.946433802032914!3d-18.75321255940048!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ1JzE4LjEiUyA1MMKwNTYnMzguMCJX!5e1!3m2!1spt-BR!2sbr!4v1765120456893!5m2!1spt-BR!2sbr" 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1EB53A]/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#1EB53A]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-[#001B80] mb-2">Escritório de Cachoeira Alta, Goiás</h3>
                    <p className="text-gray-600 mt-1">
                      Tel/WhatsApp: (64) 99955-8696
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#1EB53A]/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#1EB53A]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-[#001B80] mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-700 text-lg">
                      Segunda a Sexta: 8h às 18h
                    </p>
                    <p className="text-gray-700 text-lg">
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Caçu */}
            <div className="space-y-8">
              <div className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-200">
                <div className="bg-gray-100 p-6 text-center border-b border-gray-200">
                  <div className="inline-flex items-center justify-center gap-2 mb-2">
                    <div className="bg-[#1EB53A] w-12 h-12 rounded-full flex items-center justify-center">
                      <MapPin className="text-white" size={24} />
                    </div>
                  </div>
                  <h4 className="text-[#001B80] mb-1">Mapa de localização</h4>
                  <p className="text-gray-600">Caçu - Goiás</p>
                </div>
                <div className="relative w-full" style={{ paddingBottom: '75%' }}>
                  <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3422.7084534185456!2d-51.1366!3d-18.5643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949e63aa87f9c4c3%3A0x1c465962ac69a40c!2sR.%20Jos%C3%A9%20Reinaldo%20Vi%C3%AAira%2C%201223%20-%20%C3%81gua%20Fria%2C%20Ca%C3%A7u%20-%20GO%2C%2075813-000!5e1!3m2!1spt-BR!2sbr!4v1765121341003!5m2!1spt-BR!2sbr" 
                    className="absolute top-0 left-0 w-full h-full"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-[#1EB53A]/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-[#1EB53A]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-[#001B80] mb-2">Escritório de Caçu, Goiás</h3>
                    <p className="text-gray-600 mt-1">
                      R. José Reinaldo Viêira, 1223
                    </p>
                    <p className="text-gray-600">
                      Tel/WhatsApp: (64) 99600-4693
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-[#1EB53A]/10 w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0">
                    <Clock className="text-[#1EB53A]" size={28} />
                  </div>
                  <div>
                    <h3 className="text-[#001B80] mb-2">Horário de Atendimento</h3>
                    <p className="text-gray-700 text-lg">
                      Segunda a Sexta: 8h às 18h
                    </p>
                    <p className="text-gray-700 text-lg">
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-to-br from-[#1EB53A] to-[#189c30] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6">Vamos regularizar sua propriedade?</h2>
          <p className="text-xl mb-8 text-gray-100">
            Entre em contato e descubra como podemos ajudar você
          </p>
          <button
            onClick={() => onNavigate('contato')}
            className="bg-white text-[#1EB53A] px-8 py-4 rounded-lg hover:bg-gray-100 transition-all hover:scale-105 shadow-lg mt-[35px] mr-[0px] mb-[0px] ml-[0px]"
          >
            Entrar em contato
          </button>
        </div>
      </section>
    </div>
  );
}