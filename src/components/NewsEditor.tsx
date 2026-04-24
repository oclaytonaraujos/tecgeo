import { useState } from 'react';
import { motion } from 'motion/react';
import { Plus, Trash2, MoveUp, MoveDown, Image as ImageIcon, Type, X, Save } from 'lucide-react';
import { NewsItem, ContentBlock } from '../data/news';

interface NewsEditorProps {
  news: NewsItem;
  isNew: boolean;
  onSave: (news: NewsItem) => void;
  onCancel: () => void;
}

export function NewsEditor({ news: initialNews, isNew, onSave, onCancel }: NewsEditorProps) {
  const [news, setNews] = useState<NewsItem>(initialNews);
  const [contentBlocks, setContentBlocks] = useState<ContentBlock[]>(() => {
    if (typeof initialNews.content === 'string') {
      return initialNews.content.split('\n\n').filter(p => p.trim()).map(p => ({
        type: 'text' as const,
        content: p,
      }));
    }
    return initialNews.content || [];
  });

  const [photoAlbumInput, setPhotoAlbumInput] = useState('');

  // Adicionar bloco de texto
  const addTextBlock = () => {
    setContentBlocks([...contentBlocks, { type: 'text', content: '' }]);
  };

  // Adicionar bloco de imagem
  const addImageBlock = () => {
    setContentBlocks([...contentBlocks, { type: 'image', content: '', alt: '', caption: '' }]);
  };

  // Remover bloco
  const removeBlock = (index: number) => {
    setContentBlocks(contentBlocks.filter((_, i) => i !== index));
  };

  // Mover bloco para cima
  const moveBlockUp = (index: number) => {
    if (index === 0) return;
    const newBlocks = [...contentBlocks];
    [newBlocks[index - 1], newBlocks[index]] = [newBlocks[index], newBlocks[index - 1]];
    setContentBlocks(newBlocks);
  };

  // Mover bloco para baixo
  const moveBlockDown = (index: number) => {
    if (index === contentBlocks.length - 1) return;
    const newBlocks = [...contentBlocks];
    [newBlocks[index], newBlocks[index + 1]] = [newBlocks[index + 1], newBlocks[index]];
    setContentBlocks(newBlocks);
  };

  // Atualizar bloco
  const updateBlock = (index: number, updates: Partial<ContentBlock>) => {
    const newBlocks = [...contentBlocks];
    newBlocks[index] = { ...newBlocks[index], ...updates };
    setContentBlocks(newBlocks);
  };

  // Adicionar foto ao álbum
  const addPhotoToAlbum = () => {
    if (!photoAlbumInput.trim()) return;
    const currentAlbum = news.photoAlbum || [];
    setNews({ ...news, photoAlbum: [...currentAlbum, photoAlbumInput.trim()] });
    setPhotoAlbumInput('');
  };

  // Remover foto do álbum
  const removePhotoFromAlbum = (index: number) => {
    const currentAlbum = news.photoAlbum || [];
    setNews({ ...news, photoAlbum: currentAlbum.filter((_, i) => i !== index) });
  };

  // Calcular tempo de leitura automaticamente
  const calculateReadingTime = () => {
    const wordsPerMinute = 200;
    let text = '';
    
    contentBlocks.forEach(block => {
      if (block.type === 'text') {
        text += block.content + ' ';
      }
    });
    
    const words = text.split(/\s+/).filter(w => w.length > 0).length;
    const time = Math.ceil(words / wordsPerMinute);
    setNews({ ...news, readingTime: time });
  };

  // Salvar notícia
  const handleSave = () => {
    // Validação básica
    if (!news.title.trim() || !news.excerpt.trim() || !news.image.trim()) {
      alert('Preencha todos os campos obrigatórios (Título, Resumo e Imagem de Capa)');
      return;
    }

    if (contentBlocks.length === 0 || contentBlocks.every(b => !b.content.trim())) {
      alert('Adicione pelo menos um bloco de conteúdo');
      return;
    }

    // Salvar com blocos de conteúdo
    const updatedNews = {
      ...news,
      content: contentBlocks,
    };

    onSave(updatedNews);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl max-w-6xl w-full my-8"
      >
        {/* Header */}
        <div className="p-6 border-b border-gray-200 flex items-center justify-between sticky top-0 bg-white rounded-t-2xl z-10">
          <h3 className="text-[#001B80] text-2xl">
            {isNew ? 'Nova Notícia' : 'Editar Notícia'}
          </h3>
          <button
            onClick={onCancel}
            className="p-2 hover:bg-gray-100 rounded-lg transition-all"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-6 space-y-6 max-h-[calc(100vh-200px)] overflow-y-auto">
          {/* Grid de campos principais */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Coluna Esquerda */}
            <div className="space-y-6">
              {/* Título */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">Título *</label>
                <input
                  type="text"
                  value={news.title}
                  onChange={(e) => setNews({ ...news, title: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all"
                  placeholder="Digite o título da notícia"
                />
              </div>

              {/* Resumo */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">Resumo *</label>
                <textarea
                  value={news.excerpt}
                  onChange={(e) => setNews({ ...news, excerpt: e.target.value })}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all resize-none"
                  placeholder="Digite um resumo da notícia"
                />
              </div>

              {/* Autor */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">Autor</label>
                <input
                  type="text"
                  value={news.author || ''}
                  onChange={(e) => setNews({ ...news, author: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all"
                  placeholder="Nome do autor"
                />
              </div>

              {/* Tempo de leitura */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">Tempo de Leitura (minutos)</label>
                <div className="flex gap-2">
                  <input
                    type="number"
                    min="1"
                    value={news.readingTime || ''}
                    onChange={(e) => setNews({ ...news, readingTime: parseInt(e.target.value) || undefined })}
                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all"
                    placeholder="Ex: 5"
                  />
                  <button
                    onClick={calculateReadingTime}
                    className="px-4 py-3 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all text-sm"
                  >
                    Calcular
                  </button>
                </div>
                <p className="text-xs text-gray-500 mt-1">
                  Ou clique em "Calcular" para estimar automaticamente
                </p>
              </div>
            </div>

            {/* Coluna Direita */}
            <div className="space-y-6">
              {/* URL da Imagem de Capa */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">URL da Imagem de Capa *</label>
                <input
                  type="url"
                  value={news.image}
                  onChange={(e) => setNews({ ...news, image: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all"
                  placeholder="https://exemplo.com/imagem.jpg"
                />
                {news.image && (
                  <img
                    src={news.image}
                    alt="Preview"
                    className="mt-4 w-full h-48 object-cover rounded-lg"
                  />
                )}
              </div>

              {/* Data */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">Data *</label>
                <input
                  type="date"
                  value={news.date}
                  onChange={(e) => setNews({ ...news, date: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all"
                />
              </div>

              {/* Categoria */}
              <div>
                <label className="block text-sm mb-2 text-gray-700">Categoria *</label>
                <select
                  value={news.category}
                  onChange={(e) => setNews({ ...news, category: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all"
                >
                  <option value="Legislação">Legislação</option>
                  <option value="Tecnologia">Tecnologia</option>
                  <option value="Institucional">Institucional</option>
                  <option value="Meio Ambiente">Meio Ambiente</option>
                  <option value="Eventos">Eventos</option>
                </select>
              </div>

              {/* Destaque */}
              <div className="flex items-center gap-3">
                <input
                  type="checkbox"
                  id="featured"
                  checked={news.featured || false}
                  onChange={(e) => setNews({ ...news, featured: e.target.checked })}
                  className="w-5 h-5 text-[#1EB53A] border-gray-300 rounded focus:ring-2 focus:ring-[#1EB53A]/20"
                />
                <label htmlFor="featured" className="text-gray-700">
                  Marcar como destaque (aparecerá na página inicial)
                </label>
              </div>
            </div>
          </div>

          {/* Editor de Conteúdo por Blocos */}
          <div className="border-t pt-6">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-[#001B80] text-lg">Conteúdo da Notícia</h4>
              <div className="flex gap-2">
                <button
                  onClick={addTextBlock}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all text-sm"
                >
                  <Type size={16} />
                  Adicionar Texto
                </button>
                <button
                  onClick={addImageBlock}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-all text-sm"
                >
                  <ImageIcon size={16} />
                  Adicionar Imagem
                </button>
              </div>
            </div>

            {/* Lista de Blocos */}
            <div className="space-y-4">
              {contentBlocks.map((block, index) => (
                <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-2">
                      {block.type === 'text' ? (
                        <Type size={18} className="text-gray-600" />
                      ) : (
                        <ImageIcon size={18} className="text-gray-600" />
                      )}
                      <span className="text-sm text-gray-600">
                        {block.type === 'text' ? 'Bloco de Texto' : 'Bloco de Imagem'} #{index + 1}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        onClick={() => moveBlockUp(index)}
                        disabled={index === 0}
                        className="p-1 hover:bg-gray-200 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        title="Mover para cima"
                      >
                        <MoveUp size={16} />
                      </button>
                      <button
                        onClick={() => moveBlockDown(index)}
                        disabled={index === contentBlocks.length - 1}
                        className="p-1 hover:bg-gray-200 rounded disabled:opacity-30 disabled:cursor-not-allowed transition-all"
                        title="Mover para baixo"
                      >
                        <MoveDown size={16} />
                      </button>
                      <button
                        onClick={() => removeBlock(index)}
                        className="p-1 hover:bg-red-100 text-red-600 rounded transition-all"
                        title="Remover"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>

                  {block.type === 'text' ? (
                    <textarea
                      value={block.content}
                      onChange={(e) => updateBlock(index, { content: e.target.value })}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all resize-none bg-white"
                      placeholder="Digite o texto deste parágrafo..."
                    />
                  ) : (
                    <div className="space-y-3">
                      <input
                        type="url"
                        value={block.content}
                        onChange={(e) => updateBlock(index, { content: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all bg-white"
                        placeholder="URL da imagem"
                      />
                      {block.content && (
                        <img
                          src={block.content}
                          alt={block.alt || 'Preview'}
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      )}
                      <input
                        type="text"
                        value={block.alt || ''}
                        onChange={(e) => updateBlock(index, { alt: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all bg-white"
                        placeholder="Texto alternativo (alt)"
                      />
                      <input
                        type="text"
                        value={block.caption || ''}
                        onChange={(e) => updateBlock(index, { caption: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all bg-white"
                        placeholder="Legenda da imagem (opcional)"
                      />
                    </div>
                  )}
                </div>
              ))}

              {contentBlocks.length === 0 && (
                <div className="text-center py-12 text-gray-500">
                  <Type size={48} className="mx-auto mb-4 text-gray-300" />
                  <p>Nenhum bloco de conteúdo adicionado</p>
                  <p className="text-sm mt-2">Clique em "Adicionar Texto" ou "Adicionar Imagem" para começar</p>
                </div>
              )}
            </div>
          </div>

          {/* Álbum de Fotos */}
          <div className="border-t pt-6">
            <h4 className="text-[#001B80] text-lg mb-4">Álbum de Fotos (Final da Notícia)</h4>
            
            <div className="flex gap-2 mb-4">
              <input
                type="url"
                value={photoAlbumInput}
                onChange={(e) => setPhotoAlbumInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && addPhotoToAlbum()}
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#1EB53A]/20 focus:border-[#1EB53A] transition-all"
                placeholder="Cole a URL da foto e pressione Enter ou clique em Adicionar"
              />
              <button
                onClick={addPhotoToAlbum}
                className="flex items-center gap-2 px-6 py-3 bg-[#1EB53A] text-white rounded-lg hover:bg-[#189c30] transition-all"
              >
                <Plus size={20} />
                Adicionar
              </button>
            </div>

            {news.photoAlbum && news.photoAlbum.length > 0 ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {news.photoAlbum.map((photo, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={photo}
                      alt={`Foto ${index + 1}`}
                      className="w-full h-32 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removePhotoFromAlbum(index)}
                      className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-all hover:bg-red-600"
                    >
                      <X size={16} />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8 text-gray-500 bg-gray-50 rounded-lg">
                <ImageIcon size={48} className="mx-auto mb-3 text-gray-300" />
                <p className="text-sm">Nenhuma foto no álbum</p>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 flex items-center justify-end gap-4 sticky bottom-0 bg-white rounded-b-2xl">
          <button
            onClick={onCancel}
            className="px-6 py-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-all"
          >
            Cancelar
          </button>
          <button
            onClick={handleSave}
            className="flex items-center gap-2 bg-[#1EB53A] text-white px-6 py-3 rounded-lg hover:bg-[#189c30] transition-all hover:scale-105"
          >
            <Save size={20} />
            Salvar Notícia
          </button>
        </div>
      </motion.div>
    </div>
  );
}
