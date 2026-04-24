import { useState } from 'react';
import { Facebook, Twitter, Linkedin, Link2, Check, Instagram } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { motion } from 'motion/react';

interface ShareButtonsProps {
  title: string;
  description: string;
  url: string;
}

export function ShareButtons({ title, description, url }: ShareButtonsProps) {
  const [copied, setCopied] = useState(false);

  const fullUrl = `https://tecgeo.com.br${url}`;
  const encodedUrl = encodeURIComponent(fullUrl);
  const encodedTitle = encodeURIComponent(title);
  const encodedDescription = encodeURIComponent(description);

  const shareLinks = {
    whatsapp: `https://wa.me/?text=${encodedTitle}%20${encodedUrl}`,
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    twitter: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    instagram: `https://www.instagram.com/`, // Abre o Instagram
  };

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(fullUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Erro ao copiar link:', err);
    }
  };

  const handleShare = (platform: keyof typeof shareLinks) => {
    window.open(shareLinks[platform], '_blank', 'width=600,height=400');
  };

  return (
    <div className="flex flex-wrap items-center gap-3">
      
      <div className="flex items-center gap-2 mt-[25px] mr-[0px] mb-[0px] ml-[0px]">
        {/* Facebook */}
        <motion.button
          onClick={() => handleShare('facebook')}
          className="w-11 h-11 rounded-xl bg-transparent border border-[#1EB53A] hover:bg-[#1EB53A]/10 flex items-center justify-center transition-all group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Compartilhar no Facebook"
        >
          <Facebook size={18} className="text-[#1EB53A]" />
        </motion.button>

        {/* Twitter */}
        <motion.button
          onClick={() => handleShare('twitter')}
          className="w-11 h-11 rounded-xl bg-transparent border border-[#1EB53A] hover:bg-[#1EB53A]/10 flex items-center justify-center transition-all group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Compartilhar no Twitter"
        >
          <Twitter size={18} className="text-[#1EB53A]" />
        </motion.button>

        {/* LinkedIn */}
        <motion.button
          onClick={() => handleShare('linkedin')}
          className="w-11 h-11 rounded-xl bg-transparent border border-[#1EB53A] hover:bg-[#1EB53A]/10 flex items-center justify-center transition-all group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Compartilhar no LinkedIn"
        >
          <Linkedin size={18} className="text-[#1EB53A]" />
        </motion.button>

        {/* WhatsApp */}
        <motion.button
          onClick={() => handleShare('whatsapp')}
          className="w-11 h-11 rounded-xl bg-transparent border border-[#1EB53A] hover:bg-[#1EB53A]/10 flex items-center justify-center transition-all group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Compartilhar no WhatsApp"
        >
          <FaWhatsapp size={18} className="text-[#1EB53A]" />
        </motion.button>

        {/* Instagram */}
        <motion.button
          onClick={() => handleShare('instagram')}
          className="w-11 h-11 rounded-xl bg-transparent border border-[#1EB53A] hover:bg-[#1EB53A]/10 flex items-center justify-center transition-all group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title="Abrir Instagram"
        >
          <Instagram size={18} className="text-[#1EB53A]" />
        </motion.button>

        {/* Copiar Link */}
        <motion.button
          onClick={handleCopyLink}
          className="w-11 h-11 rounded-xl bg-transparent border border-[#1EB53A] hover:bg-[#1EB53A]/10 flex items-center justify-center transition-all group"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          title={copied ? 'Link copiado!' : 'Copiar link'}
        >
          {copied ? (
            <Check size={18} className="text-[#1EB53A]" />
          ) : (
            <Link2 size={18} className="text-[#1EB53A]" />
          )}
        </motion.button>
      </div>
    </div>
  );
}