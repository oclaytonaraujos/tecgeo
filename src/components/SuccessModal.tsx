import { motion, AnimatePresence } from 'motion/react';
import { CheckCircle, X } from 'lucide-react';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: string;
}

export function SuccessModal({ 
  isOpen, 
  onClose, 
  title = 'Mensagem enviada com sucesso!',
  message = 'Entraremos em contato em breve.'
}: SuccessModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[200] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Decorative background */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-[#1EB53A]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#001B80]/10 rounded-full blur-3xl"></div>

            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-full transition-all"
              aria-label="Fechar"
            >
              <X size={20} />
            </button>

            {/* Content */}
            <div className="relative p-8 sm:p-10 text-center">
              {/* Success Icon */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ 
                  type: 'spring', 
                  stiffness: 200, 
                  damping: 15,
                  delay: 0.1 
                }}
                className="mx-auto mb-6 w-20 h-20 bg-gradient-to-br from-[#1EB53A] to-[#189c30] rounded-full flex items-center justify-center shadow-lg"
              >
                <CheckCircle size={40} className="text-white" strokeWidth={2.5} />
              </motion.div>

              {/* Title */}
              <motion.h3
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-[#001B80] text-2xl sm:text-3xl mb-4"
              >
                {title}
              </motion.h3>

              {/* Message */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-gray-600 text-base sm:text-lg mb-8"
              >
                {message}
              </motion.p>

              {/* Button */}
              <motion.button
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                onClick={onClose}
                className="bg-gradient-to-r from-[#1EB53A] to-[#189c30] text-white px-8 py-3 rounded-full hover:shadow-xl transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                OK, entendi
              </motion.button>
            </div>

            {/* Bottom decoration */}
            <div className="h-2 bg-gradient-to-r from-[#1EB53A] to-[#189c30]"></div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
