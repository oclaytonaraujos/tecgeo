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
import { LoginPage } from './components/LoginPage';
import { useAuth } from './hooks/useAuth';

export default function App() {
  const initialPage = new URLSearchParams(window.location.search).get('page') ?? 'home';
  const [currentPage, setCurrentPage] = useState(initialPage);
  const [selectedNewsId, setSelectedNewsId] = useState<number | null>(null);
  const { session, loading } = useAuth();

  const handleNavigate = (page: string, newsId?: number) => {
    setCurrentPage(page);
    setSelectedNewsId(newsId || null);
    const url = page !== 'home' ? `?page=${page}` : '/';
    window.history.pushState(null, '', url);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (currentPage === 'admin') {
    if (loading) return null;
    if (!session) {
      return <LoginPage onSuccess={() => setCurrentPage('admin')} />;
    }
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