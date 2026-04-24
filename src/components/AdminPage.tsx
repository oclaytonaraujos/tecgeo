import { useState, useEffect, useCallback } from 'react';
import { motion } from 'motion/react';
import {
  ArrowLeft,
  FileText,
  Users,
  Plus,
  Edit,
  Trash2,
  Download,
  Calendar,
  Eye,
  X,
  Clock,
  User as UserIcon,
  LogOut,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import logo from 'figma:asset/915224e264aeedeb56e9fa630ad41e5aeb59ff69.png';
import { NewsItem } from '../data/news';
import { NewsEditor } from './NewsEditor';
import { Pagination } from './Pagination';
import { supabase } from '../lib/supabase';
import { useAuth } from '../hooks/useAuth';

interface AdminPageProps {
  onNavigate: (page: string) => void;
}

interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  whatsapp: string;
  municipality: string;
  area_size: string;
  property_status: string;
  service: string;
  message: string;
  created_at: string;
}

type TabType = 'news' | 'contacts';

export function AdminPage({ onNavigate }: AdminPageProps) {
  const { signOut } = useAuth();
  const [activeTab, setActiveTab] = useState<TabType>('news');
  const [newsItems, setNewsItems] = useState<NewsItem[]>([]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [loadingNews, setLoadingNews] = useState(true);
  const [loadingContacts, setLoadingContacts] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [isNewNews, setIsNewNews] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const fetchNews = useCallback(async () => {
    setLoadingNews(true);
    setError(null);
    const { data, error: err } = await supabase
      .from('news')
      .select('*')
      .order('date', { ascending: false });
    if (err) {
      setError('Erro ao carregar notícias.');
    } else {
      setNewsItems((data ?? []).map(mapNewsRow));
    }
    setLoadingNews(false);
  }, []);

  const fetchContacts = useCallback(async () => {
    setLoadingContacts(true);
    const { data, error: err } = await supabase
      .from('contact_submissions')
      .select('*')
      .order('created_at', { ascending: false });
    if (err) {
      setError('Erro ao carregar contatos.');
    } else {
      setContacts(data ?? []);
    }
    setLoadingContacts(false);
  }, []);

  useEffect(() => { fetchNews(); }, [fetchNews]);
  useEffect(() => { fetchContacts(); }, [fetchContacts]);

  function mapNewsRow(row: Record<string, unknown>): NewsItem {
    return {
      id: row.id as string,
      title: row.title as string,
      excerpt: row.excerpt as string,
      content: row.content as NewsItem['content'],
      image: row.image as string,
      date: row.date as string,
      category: row.category as string,
      featured: row.featured as boolean,
      author: row.author as string | undefined,
      readingTime: row.reading_time as number | undefined,
      photoAlbum: row.photo_album as string[] | undefined,
    };
  }

  const handleCreateNews = () => {
    setSelectedNews({
      id: crypto.randomUUID(),
      title: '',
      excerpt: '',
      content: '',
      image: '',
      date: new Date().toISOString().split('T')[0],
      category: 'Institucional',
      featured: false,
    });
    setIsNewNews(true);
    setIsEditModalOpen(true);
  };

  const handleEditNews = (news: NewsItem) => {
    setSelectedNews({ ...news });
    setIsNewNews(false);
    setIsEditModalOpen(true);
  };

  const handleSaveNews = async (updated: NewsItem) => {
    setError(null);
    const payload = {
      id: updated.id,
      title: updated.title,
      excerpt: updated.excerpt,
      content: updated.content,
      image: updated.image,
      date: updated.date,
      category: updated.category,
      featured: updated.featured,
      author: updated.author ?? null,
      reading_time: updated.readingTime ?? null,
      photo_album: updated.photoAlbum ?? null,
    };

    const { error: err } = await supabase
      .from('news')
      .upsert(payload, { onConflict: 'id' });

    if (err) {
      setError('Erro ao salvar notícia. Tente novamente.');
      return;
    }

    setIsEditModalOpen(false);
    setSelectedNews(null);
    fetchNews();
  };

  const handleDeleteNews = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir esta notícia?')) return;
    const { error: err } = await supabase.from('news').delete().eq('id', id);
    if (err) {
      setError('Erro ao excluir notícia.');
    } else {
      fetchNews();
    }
  };

  const handleDeleteContact = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este contato?')) return;
    const { error: err } = await supabase.from('contact_submissions').delete().eq('id', id);
    if (err) {
      setError('Erro ao excluir contato.');
    } else {
      fetchContacts();
    }
  };

  const handleExportContacts = () => {
    if (contacts.length === 0) {
      alert('Não há contatos para exportar');
      return;
    }

    const headers = ['Data', 'Nome', 'Telefone', 'WhatsApp', 'Município', 'Tamanho da Área', 'Status da Propriedade', 'Serviço', 'Mensagem'];
    const rows = contacts.map(c => [
      new Date(c.created_at).toLocaleString('pt-BR'),
      c.name, c.phone, c.whatsapp ?? '', c.municipality,
      c.area_size, c.property_status ?? '', c.service,
      (c.message ?? '').replace(/"/g, '""'),
    ]);

    const csv = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n');

    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `contatos_tecgeo_${new Date().toISOString().split('T')[0]}.csv`;
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  const handleLogout = async () => {
    await signOut();
    onNavigate('home');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="TecGeo" className="h-10" />
              <div className="h-10 w-px bg-gray-300" />
              <h1 className="text-[#001B80] uppercase" style={{ letterSpacing: '-0.02em', fontWeight: 700, fontSize: '28px', lineHeight: '40px' }}>
                Painel Administrativo
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() => onNavigate('home')}
                className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#001B80] hover:bg-gray-100 rounded-lg transition-all"
              >
                <ArrowLeft size={18} />
                <span>Voltar ao site</span>
              </button>
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-all"
              >
                <LogOut size={18} />
                <span>Sair</span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Erro global */}
      {error && (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
          <div className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
            <AlertCircle size={16} className="flex-shrink-0" />
            {error}
            <button onClick={() => setError(null)} className="ml-auto">
              <X size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex gap-4 border-b border-gray-200">
          {(['news', 'contacts'] as TabType[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`flex items-center gap-2 px-6 py-3 transition-all relative ${
                activeTab === tab ? 'text-[#1EB53A]' : 'text-gray-600 hover:text-gray-900'
              }`}
            >
              {tab === 'news' ? <FileText size={20} /> : <Users size={20} />}
              <span>{tab === 'news' ? 'Notícias' : `Contatos (${contacts.length})`}</span>
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1EB53A]"
                />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* ── NOTÍCIAS ── */}
        {activeTab === 'news' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[#001B80] text-2xl">Gerenciar Notícias</h2>
              <button
                onClick={handleCreateNews}
                className="flex items-center gap-2 bg-[#1EB53A] text-white px-6 py-3 rounded-lg hover:bg-[#189c30] transition-all hover:scale-105"
              >
                <Plus size={20} />
                Nova Notícia
              </button>
            </div>

            {loadingNews ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 size={32} className="animate-spin text-[#001B80]" />
              </div>
            ) : (
              <>
                <div className="space-y-4" style={{ minHeight: '400px' }}>
                  {newsItems
                    .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
                    .map((news) => (
                      <motion.div
                        key={news.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all"
                      >
                        <div className="flex items-start gap-6">
                          <img
                            src={news.image}
                            alt={news.title}
                            className="w-32 h-32 object-cover rounded-lg flex-shrink-0"
                          />
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start justify-between gap-4 mb-2">
                              <h3 className="text-[#001B80] text-lg">{news.title}</h3>
                              <div className="flex items-center gap-2 flex-shrink-0">
                                <button
                                  onClick={() => handleEditNews(news)}
                                  className="p-2 text-gray-600 hover:text-[#1EB53A] hover:bg-gray-100 rounded-lg transition-all"
                                  title="Editar"
                                >
                                  <Edit size={18} />
                                </button>
                                <button
                                  onClick={() => handleDeleteNews(news.id)}
                                  className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                                  title="Excluir"
                                >
                                  <Trash2 size={18} />
                                </button>
                              </div>
                            </div>
                            <p className="text-gray-600 text-sm mb-3 line-clamp-2">{news.excerpt}</p>
                            <div className="flex items-center gap-4 text-sm text-gray-500">
                              <span className="flex items-center gap-1">
                                <Calendar size={14} />
                                {new Date(news.date).toLocaleDateString('pt-BR')}
                              </span>
                              {news.author && (
                                <span className="flex items-center gap-1">
                                  <UserIcon size={14} />
                                  {news.author}
                                </span>
                              )}
                              {news.readingTime && (
                                <span className="flex items-center gap-1">
                                  <Clock size={14} />
                                  {news.readingTime} min
                                </span>
                              )}
                              <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">{news.category}</span>
                              {news.featured && (
                                <span className="px-3 py-1 bg-[#1EB53A]/10 text-[#1EB53A] rounded-full text-xs">Destaque</span>
                              )}
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                </div>
                <Pagination
                  currentPage={currentPage}
                  totalPages={Math.ceil(newsItems.length / itemsPerPage)}
                  onPageChange={setCurrentPage}
                />
              </>
            )}
          </motion.div>
        )}

        {/* ── CONTATOS ── */}
        {activeTab === 'contacts' && (
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3 }}>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[#001B80] text-2xl">Formulários de Contato</h2>
              <button
                onClick={handleExportContacts}
                disabled={contacts.length === 0}
                className="flex items-center gap-2 bg-[#001B80] text-white px-6 py-3 rounded-lg hover:bg-[#002bb3] transition-all hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Download size={20} />
                Exportar CSV
              </button>
            </div>

            {loadingContacts ? (
              <div className="flex items-center justify-center py-20">
                <Loader2 size={32} className="animate-spin text-[#001B80]" />
              </div>
            ) : contacts.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <Users size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-gray-600 text-lg mb-2">Nenhum contato recebido</h3>
                <p className="text-gray-500">Os formulários enviados pelos visitantes aparecerão aqui</p>
              </div>
            ) : (
              <div className="space-y-4">
                {contacts.map((contact) => (
                  <motion.div
                    key={contact.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <h3 className="text-[#001B80] text-lg mb-1">{contact.name}</h3>
                        <p className="text-gray-600 text-sm mb-3">{contact.service}</p>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div>
                            <span className="text-gray-500">Telefone:</span>
                            <span className="text-gray-700 ml-2">{contact.phone}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Município:</span>
                            <span className="text-gray-700 ml-2">{contact.municipality}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Área:</span>
                            <span className="text-gray-700 ml-2">{contact.area_size}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Data:</span>
                            <span className="text-gray-700 ml-2">
                              {new Date(contact.created_at).toLocaleString('pt-BR')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => { setSelectedContact(contact); setIsViewModalOpen(true); }}
                          className="p-2 text-gray-600 hover:text-[#1EB53A] hover:bg-gray-100 rounded-lg transition-all"
                          title="Ver detalhes"
                        >
                          <Eye size={18} />
                        </button>
                        <button
                          onClick={() => handleDeleteContact(contact.id)}
                          className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all"
                          title="Excluir"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </div>

      {/* Modal de Edição de Notícia */}
      {isEditModalOpen && selectedNews && (
        <NewsEditor
          news={selectedNews}
          isNew={isNewNews}
          onSave={handleSaveNews}
          onCancel={() => setIsEditModalOpen(false)}
        />
      )}

      {/* Modal de Visualização de Contato */}
      {isViewModalOpen && selectedContact && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-2xl w-full"
          >
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-[#001B80] text-2xl">Detalhes do Contato</h3>
              <button onClick={() => setIsViewModalOpen(false)} className="p-2 hover:bg-gray-100 rounded-lg transition-all">
                <X size={24} />
              </button>
            </div>
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                {[
                  ['Nome', selectedContact.name],
                  ['Telefone', selectedContact.phone],
                  ['WhatsApp', selectedContact.whatsapp || 'Não informado'],
                  ['Município', selectedContact.municipality],
                  ['Tamanho da Área', selectedContact.area_size],
                  ['Status da Propriedade', selectedContact.property_status || 'Não informado'],
                ].map(([label, value]) => (
                  <div key={label}>
                    <label className="block text-sm text-gray-500 mb-1">{label}</label>
                    <p className="text-gray-900">{value}</p>
                  </div>
                ))}
                <div className="col-span-2">
                  <label className="block text-sm text-gray-500 mb-1">Serviço de Interesse</label>
                  <p className="text-gray-900">{selectedContact.service}</p>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm text-gray-500 mb-1">Mensagem</label>
                  <p className="text-gray-900">{selectedContact.message || 'Nenhuma mensagem'}</p>
                </div>
                <div className="col-span-2">
                  <label className="block text-sm text-gray-500 mb-1">Data de Envio</label>
                  <p className="text-gray-900">{new Date(selectedContact.created_at).toLocaleString('pt-BR')}</p>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex justify-end">
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="px-6 py-3 bg-gray-100 text-gray-700 hover:bg-gray-200 rounded-lg transition-all"
              >
                Fechar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
