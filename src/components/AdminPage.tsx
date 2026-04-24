import { useState, useEffect } from 'react';
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
  User as UserIcon
} from 'lucide-react';
import logo from 'figma:asset/915224e264aeedeb56e9fa630ad41e5aeb59ff69.png';
import { newsData as importedNewsData, NewsItem, ContentBlock } from '../data/news';
import { NewsEditor } from './NewsEditor';
import { Pagination } from './Pagination';

interface AdminPageProps {
  onNavigate: (page: string) => void;
}

interface ContactSubmission {
  id: string;
  name: string;
  phone: string;
  whatsapp: string;
  municipality: string;
  areaSize: string;
  propertyStatus: string;
  service: string;
  message: string;
  timestamp: string;
}

type TabType = 'news' | 'contacts';

export function AdminPage({ onNavigate }: AdminPageProps) {
  const [activeTab, setActiveTab] = useState<TabType>('news');
  const [newsItems, setNewsItems] = useState<NewsItem[]>([...importedNewsData]);
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [isNewNews, setIsNewNews] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Carregar contatos do localStorage
  useEffect(() => {
    const storedContacts = localStorage.getItem('contactSubmissions');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

  // Carregar notícias do localStorage (se houver)
  useEffect(() => {
    const storedNews = localStorage.getItem('newsData');
    if (storedNews) {
      setNewsItems(JSON.parse(storedNews));
    }
  }, []);

  // Salvar notícias no localStorage
  const saveNewsToStorage = (news: NewsItem[]) => {
    localStorage.setItem('newsData', JSON.stringify(news));
    setNewsItems(news);
  };

  // Criar nova notícia
  const handleCreateNews = () => {
    const newNews: NewsItem = {
      id: Date.now().toString(),
      title: '',
      excerpt: '',
      content: '',
      image: '',
      date: new Date().toISOString().split('T')[0],
      category: 'Institucional',
      featured: false,
    };
    setSelectedNews(newNews);
    setIsNewNews(true);
    setIsEditModalOpen(true);
  };

  // Editar notícia
  const handleEditNews = (news: NewsItem) => {
    setSelectedNews({ ...news });
    setIsNewNews(false);
    setIsEditModalOpen(true);
  };

  // Salvar notícia
  const handleSaveNews = (updatedNews: NewsItem) => {
    let finalNews: NewsItem[];
    if (isNewNews) {
      finalNews = [...newsItems, updatedNews];
    } else {
      finalNews = newsItems.map(item => 
        item.id === updatedNews.id ? updatedNews : item
      );
    }
    
    saveNewsToStorage(finalNews);
    setIsEditModalOpen(false);
    setSelectedNews(null);
  };

  // Deletar notícia
  const handleDeleteNews = (id: string) => {
    if (confirm('Tem certeza que deseja excluir esta notícia?')) {
      const updatedNews = newsItems.filter(item => item.id !== id);
      saveNewsToStorage(updatedNews);
    }
  };

  // Visualizar contato
  const handleViewContact = (contact: ContactSubmission) => {
    setSelectedContact(contact);
    setIsViewModalOpen(true);
  };

  // Deletar contato
  const handleDeleteContact = (id: string) => {
    if (confirm('Tem certeza que deseja excluir este contato?')) {
      const updatedContacts = contacts.filter(item => item.id !== id);
      localStorage.setItem('contactSubmissions', JSON.stringify(updatedContacts));
      setContacts(updatedContacts);
    }
  };

  // Exportar contatos para CSV
  const handleExportContacts = () => {
    if (contacts.length === 0) {
      alert('Não há contatos para exportar');
      return;
    }

    const headers = ['Data', 'Nome', 'Telefone', 'WhatsApp', 'Município', 'Tamanho da Área', 'Status da Propriedade', 'Serviço', 'Mensagem'];
    const csvData = contacts.map(contact => [
      new Date(contact.timestamp).toLocaleString('pt-BR'),
      contact.name,
      contact.phone,
      contact.whatsapp,
      contact.municipality,
      contact.areaSize,
      contact.propertyStatus,
      contact.service,
      contact.message.replace(/"/g, '""'), // Escape aspas duplas
    ]);

    const csvContent = [
      headers.join(','),
      ...csvData.map(row => row.map(cell => `"${cell}"`).join(','))
    ].join('\n');

    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const link = document.createElement('a');
    const url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', `contatos_tecgeo_${new Date().toISOString().split('T')[0]}.csv`);
    link.style.visibility = 'hidden';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img src={logo} alt="TecGeo" className="h-10" />
              <div className="h-10 w-px bg-gray-300"></div>
              <h1 className="text-[#001B80] uppercase" style={{ letterSpacing: '-0.02em', fontWeight: 700, fontSize: '28px', lineHeight: '40px' }}>
                Painel Administrativo
              </h1>
            </div>
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:text-[#001B80] hover:bg-gray-100 rounded-lg transition-all"
            >
              <ArrowLeft size={18} />
              <span>Voltar ao site</span>
            </button>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
        <div className="flex gap-4 border-b border-gray-200">
          <button
            onClick={() => setActiveTab('news')}
            className={`flex items-center gap-2 px-6 py-3 transition-all relative ${
              activeTab === 'news'
                ? 'text-[#1EB53A]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <FileText size={20} />
            <span>Notícias</span>
            {activeTab === 'news' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1EB53A]"
              />
            )}
          </button>
          <button
            onClick={() => setActiveTab('contacts')}
            className={`flex items-center gap-2 px-6 py-3 transition-all relative ${
              activeTab === 'contacts'
                ? 'text-[#1EB53A]'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            <Users size={20} />
            <span>Contatos ({contacts.length})</span>
            {activeTab === 'contacts' && (
              <motion.div
                layoutId="activeTab"
                className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#1EB53A]"
              />
            )}
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'news' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header com botão de criar */}
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

            {/* Lista de notícias */}
            <div className="space-y-4" style={{ overflowY: 'scroll', minHeight: '400px' }}>
              {newsItems
                .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
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
                        <span className="px-3 py-1 bg-gray-100 rounded-full text-xs">
                          {news.category}
                        </span>
                        {news.featured && (
                          <span className="px-3 py-1 bg-[#1EB53A]/10 text-[#1EB53A] rounded-full text-xs">
                            Destaque
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Paginação */}
            <Pagination
              currentPage={currentPage}
              totalPages={Math.ceil(newsItems.length / itemsPerPage)}
              onPageChange={setCurrentPage}
            />
          </motion.div>
        )}

        {activeTab === 'contacts' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {/* Header com botão de exportar */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-[#001B80] text-2xl">Formulários de Contato</h2>
              <button
                onClick={handleExportContacts}
                className="flex items-center gap-2 bg-[#001B80] text-white px-6 py-3 rounded-lg hover:bg-[#002bb3] transition-all hover:scale-105"
                disabled={contacts.length === 0}
              >
                <Download size={20} />
                Exportar CSV
              </button>
            </div>

            {/* Lista de contatos */}
            {contacts.length === 0 ? (
              <div className="bg-white rounded-lg border border-gray-200 p-12 text-center">
                <Users size={48} className="mx-auto text-gray-300 mb-4" />
                <h3 className="text-gray-600 text-lg mb-2">Nenhum contato recebido</h3>
                <p className="text-gray-500">
                  Os formulários enviados pelos visitantes aparecerão aqui
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {contacts.sort((a, b) => 
                  new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
                ).map((contact) => (
                  <motion.div
                    key={contact.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-md transition-all"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start gap-4 mb-3">
                          <div>
                            <h3 className="text-[#001B80] text-lg mb-1">{contact.name}</h3>
                            <p className="text-gray-600 text-sm">
                              {contact.service}
                            </p>
                          </div>
                        </div>
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
                            <span className="text-gray-700 ml-2">{contact.areaSize}</span>
                          </div>
                          <div>
                            <span className="text-gray-500">Data:</span>
                            <span className="text-gray-700 ml-2">
                              {new Date(contact.timestamp).toLocaleString('pt-BR')}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <button
                          onClick={() => handleViewContact(contact)}
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
              <button
                onClick={() => setIsViewModalOpen(false)}
                className="p-2 hover:bg-gray-100 rounded-lg transition-all"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Nome</label>
                  <p className="text-gray-900">{selectedContact.name}</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Telefone</label>
                  <p className="text-gray-900">{selectedContact.phone}</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">WhatsApp</label>
                  <p className="text-gray-900">{selectedContact.whatsapp || 'Não informado'}</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Município</label>
                  <p className="text-gray-900">{selectedContact.municipality}</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Tamanho da Área</label>
                  <p className="text-gray-900">{selectedContact.areaSize}</p>
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1">Status da Propriedade</label>
                  <p className="text-gray-900">{selectedContact.propertyStatus || 'Não informado'}</p>
                </div>
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
                  <p className="text-gray-900">
                    {new Date(selectedContact.timestamp).toLocaleString('pt-BR')}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 border-t border-gray-200 flex items-center justify-end">
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