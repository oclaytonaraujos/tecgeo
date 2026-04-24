import { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './components/HomePage';
import { PlanoAgroPage } from './components/PlanoAgroPage';
import { ServicosPage } from './components/ServicosPage';
import { SobrePage } from './components/SobrePage';
import { ContatoPage } from './components/ContatoPage';
import { NoticiasPage } from './components/NoticiasPage';
import { AdminPage } from './components/AdminPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);

  const handleNavigate = (page: string, newsId?: number) => {
    setCurrentPage(page);
    setSelectedNewsId(newsId || null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  // Renderizar página de admin sem header e footer
  if (currentPage === 'admin') {
    return <AdminPage onNavigate={handleNavigate} />;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header currentPage={currentPage} onNavigate={handleNavigate} />
      
      <main className="flex-1 pt-12">
        {currentPage === 'home' && <HomePage onNavigate={handleNavigate} />}
        {currentPage === 'plano-agro' && <PlanoAgroPage onNavigate={handleNavigate} />}
        {currentPage === 'servicos' && <ServicosPage onNavigate={handleNavigate} />}
        {currentPage === 'noticias' && <NoticiasPage onNavigate={handleNavigate} initialNewsId={selectedNewsId} />}
        {currentPage === 'sobre' && <SobrePage onNavigate={handleNavigate} />}
        {currentPage === 'contato' && <ContatoPage />}
      </main>

      <Footer onNavigate={handleNavigate} />
    </div>
  );
}