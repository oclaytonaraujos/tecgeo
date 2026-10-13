import { Calendar, ArrowRight } from 'lucide-react';

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  onClick: () => void;
  featured?: boolean;
}

export function NewsCard({ title, excerpt, image, date, category, onClick, featured }: NewsCardProps) {
  const formattedDate = new Date(date).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  });

  return (
    <article
      onClick={onClick}
      className={`group cursor-pointer flex flex-col border border-slate-200 bg-white hover:border-slate-300 transition-colors ${
        featured ? 'lg:col-span-2' : ''
      }`}
    >
      {/* Imagem */}
      <div className="relative overflow-hidden aspect-[16/10] bg-slate-100">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-white/95 text-slate-800 text-xs font-semibold px-2.5 py-1 uppercase tracking-wider border border-slate-200">
            {category}
          </span>
        </div>
      </div>

      {/* Conteúdo */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1.5 text-slate-400 text-xs font-mono mb-3">
          <Calendar size={13} />
          <time>{formattedDate}</time>
        </div>

        <h3 className="text-lg font-bold text-[#001B80] group-hover:text-[#1EB53A] transition-colors leading-snug mb-3 line-clamp-2">
          {title}
        </h3>

        <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow font-normal">
          {excerpt}
        </p>

        <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-semibold text-[#001B80] group-hover:text-[#1EB53A] transition-colors">
          <span>Ler matéria completa</span>
          <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </article>
  );
}
