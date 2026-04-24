import { Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import logo from 'figma:asset/915224e264aeedeb56e9fa630ad41e5aeb59ff69.png';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'plano-agro', label: 'Plano Agro+' },
    { id: 'servicos', label: 'Serviços' },
    { id: 'noticias', label: 'Notícias' },
    { id: 'sobre', label: 'Sobre' },
    { id: 'contato', label: 'Contato' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-white/70 backdrop-blur-xl shadow-lg border-b border-white/20' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-100'
      }`}
      style={{
        backdropFilter: 'blur(20px) saturate(180%)',
        WebkitBackdropFilter: 'blur(20px) saturate(180%)',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-2 sm:py-2.5">
          {/* Logo */}
          <button 
            onClick={() => onNavigate('home')}
            className="flex items-center transition-transform hover:scale-105 relative z-10"
          >
            <img 
              src={logo} 
              alt="TecGeo" 
              className="h-6 sm:h-7"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-5">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => onNavigate(item.id)}
                className={`relative transition-all duration-300 text-sm group py-1 ${
                  currentPage === item.id
                    ? 'text-[#001B80]'
                    : 'text-gray-600 hover:text-[#001B80]'
                }`}
              >
                {item.label}
                {/* Active state underline */}
                {currentPage === item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-[#1EB53A] to-[#001B80] rounded-full"></span>
                )}
                {/* Hover underline - only shows when not active */}
                {currentPage !== item.id && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#001B80] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                )}
              </button>
            ))}
            <a
              href="https://wa.me/5564999825619"
              target="_blank"
              rel="noopener noreferrer"
              className="relative group bg-gradient-to-r from-[#1EB53A] to-[#189c30] text-white px-4 py-2 rounded-full hover:shadow-2xl transition-all hover:scale-105 overflow-hidden text-sm whitespace-nowrap"
            >
              <span className="relative z-10">WhatsApp</span>
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-[#001B80] relative z-10"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav 
            className="lg:hidden py-4 border-t border-gray-200 bg-white/80 backdrop-blur-xl rounded-b-3xl"
            style={{
              backdropFilter: 'blur(20px) saturate(180%)',
              WebkitBackdropFilter: 'blur(20px) saturate(180%)',
            }}
          >
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => {
                  onNavigate(item.id);
                  setMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 transition-colors rounded-xl text-sm ${
                  currentPage === item.id
                    ? 'text-[#001B80] bg-gradient-to-r from-[#1EB53A]/10 to-transparent'
                    : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/5564999825619"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full text-center bg-gradient-to-r from-[#1EB53A] to-[#189c30] text-white px-6 py-3 mt-4 rounded-full hover:shadow-lg transition-all text-sm"
            >
              Fale no WhatsApp
            </a>
          </nav>
        )}
      </div>
    </header>
  );
}