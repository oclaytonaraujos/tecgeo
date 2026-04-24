import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import logo from 'figma:asset/915224e264aeedeb56e9fa630ad41e5aeb59ff69.png';

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  return (
    <footer className="relative bg-gradient-to-br from-[#001B80] via-[#002090] to-[#002bb3] text-white overflow-hidden">
      {/* Efeito de background decorativo */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-[#1EB53A] rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Seção Principal */}
        <div className="py-12 sm:py-14 lg:py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 lg:gap-12">
          {/* Logo e Descrição - 4 colunas */}
          <div className="lg:col-span-4">
            <img src={logo} alt="TecGeo" className="h-8 sm:h-9 mb-4" />
            <p className="text-gray-300 leading-relaxed mb-6 text-sm sm:text-base">
              Regularização de imóveis rurais com precisão técnica e conformidade ambiental em todo o estado de Goiás.
            </p>
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

          {/* Nossas Unidades - 3 colunas */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 sm:mb-6 text-white uppercase tracking-wider text-sm">Nossas Unidades</h4>
            <div className="space-y-4 sm:space-y-6">
              {/* Cachoeira Alta */}
              <div className="group">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-[#1EB53A]/20 p-2 rounded-lg group-hover:bg-[#1EB53A]/30 transition-all">
                    <MapPin size={18} className="text-[#1EB53A]" />
                  </div>
                  <div>
                    <p className="text-white mb-1 text-sm sm:text-base">Cachoeira Alta - GO</p>
                    <a 
                      href="https://maps.app.goo.gl/gi4QuaoSTXgWFs9D8"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gray-400 hover:text-[#1EB53A] transition-colors flex items-center gap-1"
                    >
                      Ver no mapa →
                    </a>
                    <a 
                      href="https://wa.me/5564999558696"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors mt-1 block"
                    >
                      (64) 99955-8696
                    </a>
                  </div>
                </div>
              </div>

              {/* Caçu */}
              <div className="group">
                <div className="flex items-start gap-3 mb-2">
                  <div className="bg-[#1EB53A]/20 p-2 rounded-lg group-hover:bg-[#1EB53A]/30 transition-all">
                    <MapPin size={18} className="text-[#1EB53A]" />
                  </div>
                  <div>
                    <p className="text-white mb-1 text-sm sm:text-base">Caçu - GO</p>
                    <a 
                      href="https://maps.app.goo.gl/Xy7CDssiqXJjPC9c7"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gray-400 hover:text-[#1EB53A] transition-colors flex items-center gap-1"
                    >
                      Ver no mapa →
                    </a>
                    <a 
                      href="https://wa.me/5564996004693"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs sm:text-sm text-gray-300 hover:text-white transition-colors mt-1 block"
                    >
                      (64) 99600-4693
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contato e Redes Sociais - 3 colunas */}
          <div className="lg:col-span-3">
            <h4 className="mb-4 sm:mb-6 text-white uppercase tracking-wider text-sm">Fale Conosco</h4>
            <ul className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
              <li>
                <a 
                  href="https://wa.me/5564999825619"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-gray-300 hover:text-[#1EB53A] transition-all group"
                >
                  <div className="bg-[#1EB53A]/20 p-2 rounded-lg group-hover:bg-[#1EB53A]/30 transition-all">
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
                  <div className="bg-[#1EB53A]/20 p-2 rounded-lg group-hover:bg-[#1EB53A]/30 transition-all">
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
              <h5 className="text-xs sm:text-sm text-gray-400 mb-3 sm:mb-4">Nos siga nas redes</h5>
              <div className="flex gap-3">
                <a
                  href="https://www.instagram.com/tecgeo.agrimensura/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative bg-white/10 backdrop-blur-sm p-2.5 sm:p-3 rounded-xl hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 transition-all duration-300 hover:scale-110 border border-white/20 hover:border-transparent"
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

        {/* Divider */}
        <div className="border-t border-white/10"></div>

        {/* Copyright */}
        <div className="py-6 sm:py-8 flex flex-col md:flex-row justify-between items-center gap-3 sm:gap-4 text-xs sm:text-sm">
          <p className="text-gray-400 text-center md:text-left">
            © 2025 TecGeo - Todos os direitos reservados - CNPJ: 32.426.812/0001-90
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
            <button 
              onClick={() => onNavigate('admin')}
              className="hover:text-white transition-colors"
            >
              Admin
            </button>
          </div>
        </div>
      </div>

      {/* Botão WhatsApp Flutuante */}
      <a
        href="https://wa.me/5564999825619"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 bg-gradient-to-br from-[#1EB53A] to-[#25D366] text-white p-4 rounded-full shadow-2xl hover:shadow-[#1EB53A]/50 hover:scale-110 transition-all duration-300 z-50 group animate-bounce hover:animate-none"
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