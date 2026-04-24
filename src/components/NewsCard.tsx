import { Calendar, ArrowRight, Tag } from 'lucide-react';
import { motion } from 'motion/react';

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
    month: 'long',
    year: 'numeric',
  });

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      onClick={onClick}
      className={`group cursor-pointer h-full ${featured ? 'lg:col-span-2 lg:row-span-2' : ''}`}
    >
      <div 
        className="relative h-full overflow-hidden rounded-3xl transition-all duration-500 hover:scale-[1.02] flex flex-col"
        style={{
          background: 'rgba(255, 255, 255, 0.7)',
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.3)',
          boxShadow: '0 8px 32px rgba(0, 27, 128, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)',
          minHeight: '520px',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.boxShadow = '0 20px 60px rgba(0, 27, 128, 0.2), 0 8px 24px rgba(30, 181, 58, 0.15)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.boxShadow = '0 8px 32px rgba(0, 27, 128, 0.12), 0 2px 8px rgba(0, 0, 0, 0.04)';
        }}
      >
        {/* Image */}
        <div className="relative overflow-hidden flex-shrink-0">
          <div 
            className="h-64 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
            style={{ backgroundImage: `url(${image})` }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
          </div>
          
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <div 
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-white text-sm"
              style={{
                background: 'rgba(30, 181, 58, 0.9)',
                backdropFilter: 'blur(10px)',
                WebkitBackdropFilter: 'blur(10px)',
              }}
            >
              <Tag size={14} />
              {category}
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 flex flex-col flex-grow">
          <div className="flex items-center gap-2 text-gray-500 text-sm mb-4">
            <Calendar size={16} />
            <time>{formattedDate}</time>
          </div>

          <h3 className="text-[#001B80] mb-4 line-clamp-2 group-hover:text-[#1EB53A] transition-colors">
            {title}
          </h3>

          <p className="text-gray-600 mb-6 line-clamp-3 leading-relaxed flex-grow">
            {excerpt}
          </p>

          <div className="flex items-center gap-2 text-[#1EB53A] group-hover:gap-4 transition-all">
            <span>Ler mais</span>
            <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
          </div>
        </div>

        {/* Glass Effect Overlay on Hover */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: 'linear-gradient(135deg, rgba(30, 181, 58, 0.1) 0%, rgba(0, 27, 128, 0.1) 100%)',
          }}
        ></div>
      </div>
    </motion.div>
  );
}