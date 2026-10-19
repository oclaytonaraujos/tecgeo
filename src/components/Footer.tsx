import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logo from 'figma:asset/915224e264aeedeb56e9fa630ad41e5aeb59ff69.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-br from-[#001B80] via-[#002090] to-[#002bb3] text-white overflow-hidden">


      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Seção Principal */}
        <div className="py-12 sm:py-14 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo, Descrição e Fale Conosco - 4 colunas */}
          <div className="lg:col-span-4">
            <img src={logo} alt="TECGEO" className="h-8 sm:h-9 mb-4" />
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              Regularização e <strong className="text-[#1EB53A]">consultoria estratégica</strong> para imóveis rurais — precisão técnica, conformidade ambiental e segurança jurídica em todo o estado de Goiás.
            </p>

            {/* Contato */}
            <div className="pt-1">
              <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-7">
                <li>
                  <a 
                    href="https://wa.me/5564999558696"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-gray-300 hover:text-[#1EB53A] transition-all group"
                  >
                    <div className="bg-[#1EB53A]/20 p-2 rounded-lg group-hover:bg-[#1EB53A]/30 transition-all flex-shrink-0">
                      <Phone size={18} className="text-[#1EB53A]" />
                    </div>
                    <span className="text-sm sm:text-base">(64) 99982-5619</span>
                  </a>
                </li>
                <li>
                  <a 
                    href="mailto:tecgeodepambiental@gmail.com"
                    className="flex items-start gap-3 text-gray-300 hover:text-[#1EB53A] transition-all group"
                  >
                    <div className="bg-[#1EB53A]/20 p-2 rounded-lg group-hover:bg-[#1EB53A]/30 transition-all flex-shrink-0">
                      <Mail size={18} className="text-[#1EB53A]" />
                    </div>
                    <span className="break-all text-xs sm:text-sm leading-relaxed">
                      tecgeodepambiental@gmail.com
                    </span>
                  </a>
                </li>
              </ul>

              {/* Redes Sociais */}
              <div>
                <h5 className="text-xs sm:text-sm text-gray-400 mb-3">Nos siga nas redes</h5>
                <div className="flex gap-3">
                  <a
                    href="https://www.instagram.com/tecgeo.agrimensura/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative bg-white/10 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 border border-white/20 hover:border-transparent"
                    aria-label="Instagram"
                  >
                    <Instagram size={20} />
                    <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                      Instagram
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Links Rápidos - 2 colunas */}
          <div className="lg:col-span-2">
            <h4 className="mb-4 sm:mb-6 text-white uppercase tracking-wider text-sm">Navegação</h4>
            <ul className="space-y-2 sm:space-y-3">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="text-gray-300 hover:text-[#1EB53A] transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('plano-agro')}
                  className="text-gray-300 hover:text-[#1EB53A] transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Plano Agro+
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('servicos')}
                  className="text-gray-300 hover:text-[#1EB53A] transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Serviços
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('consultoria')}
                  className="text-gray-300 hover:text-[#1EB53A] transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-2 text-sm sm:text-base"
                >
                  Consultoria
                  <span className="bg-[#1EB53A] text-white text-[9px] font-bold px-1.5 py-0.5 rounded-full leading-none">NOVO</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('regularize-geo')}
                  className="text-gray-300 hover:text-[#1EB53A] transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Regularize Geo
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('noticias')}
                  className="text-gray-300 hover:text-[#1EB53A] transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Notícias
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sobre')}
                  className="text-gray-300 hover:text-[#1EB53A] transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Sobre
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contato')}
                  className="text-gray-300 hover:text-[#1EB53A] transition-all duration-300 hover:translate-x-1 inline-block text-sm sm:text-base"
                >
                  Contato
                </button>
              </li>
            </ul>
          </div>

          {/* Nossas Unidades - 6 colunas (uma do lado da outra) */}
          <div className="md:col-span-2 lg:col-span-6">
            <h4 className="mb-4 sm:mb-6 text-white uppercase tracking-wider text-sm">Nossas Unidades</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Cachoeira Alta */}
              <div className="group">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-[#1EB53A]/20 p-2 rounded-lg group-hover:bg-[#1EB53A]/30 transition-all flex-shrink-0">
                    <MapPin size={18} className="text-[#1EB53A]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white mb-0.5 text-sm sm:text-base font-medium">Cachoeira Alta - GO</p>
                    <p className="text-gray-400 text-xs mb-1">Setor Canaã, Av. A, Qd. 06, Lt. 06</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a 
                        href="https://www.google.com/maps/search/Av.+A,+Qd.+06,+Lt.+06,+Setor+Canaa,+Cachoeira+Alta,+GO,+75870-000"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-gray-400 hover:text-[#1EB53A] transition-colors flex items-center gap-1"
                      >
                        Ver no mapa →
                      </a>
                      <span className="text-gray-500 text-xs hidden sm:inline">•</span>
                      <a 
                        href="https://wa.me/5564999558696"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        (64) 99955-8696
                      </a>
                    </div>
                  </div>
                </div>
                {/* Mini mapa Cachoeira Alta */}
                <div className="mt-2.5 w-full h-28 sm:h-32 rounded-xl overflow-hidden border border-white/15 shadow-sm bg-blue-950/40">
                  <iframe 
                    title="Mapa Cachoeira Alta"
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d533.8085690304921!2d-50.935205299095415!3d-18.75569910715441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTjCsDQ1JzIwLjkiUyA1MMKwNTYnMDUuNSJX!5e1!3m2!1spt-BR!2sbr!4v1791908276525!5m2!1spt-BR!2sbr" 
                    className="w-full h-full border-0"
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>

              {/* Caçu */}
              <div className="group">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-[#1EB53A]/20 p-2 rounded-lg group-hover:bg-[#1EB53A]/30 transition-all flex-shrink-0">
                    <MapPin size={18} className="text-[#1EB53A]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-white mb-0.5 text-sm sm:text-base font-medium">Caçu - GO</p>
                    <p className="text-gray-400 text-xs mb-1">R. José Reinaldo Viêira, 1223</p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <a 
                        href="https://maps.app.goo.gl/Xy7CDssiqXJjPC9c7"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-gray-400 hover:text-[#1EB53A] transition-colors flex items-center gap-1"
                      >
                        Ver no mapa →
                      </a>
                      <span className="text-gray-500 text-xs hidden sm:inline">•</span>
                      <a 
                        href="https://wa.me/5564999558696"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors"
                      >
                        (64) 99955-8696
                      </a>
                    </div>
                  </div>
                </div>
                {/* Mini mapa Caçu */}
                <div className="mt-2.5 w-full h-28 sm:h-32 rounded-xl overflow-hidden border border-white/15 shadow-sm bg-blue-950/40">
                  <iframe 
                    title="Mapa Caçu"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3422.7084534185456!2d-51.1366!3d-18.5643!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x949e63aa87f9c4c3%3A0x1c465962ac69a40c!2sR.%20Jos%C3%A9%20Reinaldo%20Vi%C3%AAira%2C%201223%20-%20%C3%81gua%20Fria%2C%20Ca%C3%A7u%20-%20GO%2C%2075813-000!5e1!3m2!1spt-BR!2sbr!4v1765121341003!5m2!1spt-BR!2sbr" 
                    className="w-full h-full border-0"
                    loading="lazy" 
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Copyright */}
        <div className="py-6 sm:py-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 TECGEO - Todos os direitos reservados - CNPJ: 32.426.812/0001-90
          </p>
          <div className="flex items-center gap-4 sm:gap-6 text-gray-400 text-xs sm:text-sm">
            <button 
              onClick={() => onNavigate('contato')}
              className="hover:text-white transition-colors"
            >
              Política de Privacidade
            </button>
            <button 
              onClick={() => onNavigate('contato')}
              className="hover:text-white transition-colors"
            >
              Termos de Uso
            </button>
          </div>
        </div>
      </div>

      {/* Botão WhatsApp Flutuante */}
      <a
        href="https://wa.me/5564999558696"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-br from-[#1EB53A] to-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#1EB53A]/50 transition-all duration-300 z-50 group"
        aria-label="Fale no WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-7 h-7"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
        </svg>
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-gray-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          Fale conosco!
        </span>
      </a>
    </footer>
  );
}

