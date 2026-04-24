import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';

interface PhotoGalleryProps {
  photos: string[];
}

export function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(3);

  // Responsive slides
  useEffect(() => {
    const updateSlidesToShow = () => {
      if (window.innerWidth < 640) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    updateSlidesToShow();
    window.addEventListener('resize', updateSlidesToShow);
    return () => window.removeEventListener('resize', updateSlidesToShow);
  }, []);

  // Auto-play carousel
  useEffect(() => {
    const maxIndex = Math.max(0, photos.length - slidesToShow);
    if (maxIndex === 0) return;

    const interval = setInterval(() => {
      setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [photos.length, slidesToShow]);

  const openLightbox = (index: number) => {
    setCurrentPhotoIndex(index);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
  };

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const nextSlide = () => {
    const maxIndex = Math.max(0, photos.length - slidesToShow);
    setCarouselIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const prevSlide = () => {
    const maxIndex = Math.max(0, photos.length - slidesToShow);
    setCarouselIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  const maxIndex = Math.max(0, photos.length - slidesToShow);
  const showNavigation = photos.length > slidesToShow;

  return (
    <>
      {/* Carousel de Fotos */}
      <div className="relative overflow-hidden">
        {/* Navegação do Carousel */}
        {showNavigation && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#1EB53A] text-[#001B80] hover:text-white p-3 rounded-full shadow-lg transition-all -translate-x-2 sm:translate-x-0"
              aria-label="Slide anterior"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-[#1EB53A] text-[#001B80] hover:text-white p-3 rounded-full shadow-lg transition-all translate-x-2 sm:translate-x-0"
              aria-label="Próximo slide"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Container do Carousel */}
        <div className="overflow-hidden px-8 sm:px-12">
          <motion.div
            className="flex gap-4"
            animate={{ x: `${-carouselIndex * (100 / slidesToShow)}%` }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            {photos.map((photo, index) => (
              <motion.div
                key={index}
                className="flex-shrink-0 cursor-pointer group"
                style={{ width: `calc(${100 / slidesToShow}% - ${(slidesToShow - 1) * 16 / slidesToShow}px)` }}
                whileHover={{ scale: 1.03 }}
                onClick={() => openLightbox(index)}
              >
                <div className="relative aspect-video rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all">
                  <img
                    src={photo}
                    alt={`Foto ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 backdrop-blur-sm rounded-full p-3">
                      <ZoomIn size={24} className="text-[#001B80]" />
                    </div>
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="text-white text-sm text-center">
                      Foto {index + 1} de {photos.length}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Dots Indicator */}
        {showNavigation && (
          <div className="flex justify-center gap-2 mt-6">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCarouselIndex(index)}
                className={`w-2 h-2 rounded-full transition-all ${
                  index === carouselIndex
                    ? 'bg-[#1EB53A] w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para slide ${index + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Botão Fechar */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-3 rounded-full transition-all"
              aria-label="Fechar"
            >
              <X size={24} />
            </button>

            {/* Contador */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 z-10 bg-white/10 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm">
              {currentPhotoIndex + 1} / {photos.length}
            </div>

            {/* Navegação */}
            {photos.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prevPhoto();
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all"
                  aria-label="Foto anterior"
                >
                  <ChevronLeft size={32} />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    nextPhoto();
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white p-4 rounded-full transition-all"
                  aria-label="Próxima foto"
                >
                  <ChevronRight size={32} />
                </button>
              </>
            )}

            {/* Imagem */}
            <motion.div
              key={currentPhotoIndex}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3 }}
              className="max-w-7xl max-h-[90vh] w-full h-full flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={photos[currentPhotoIndex]}
                alt={`Foto ${currentPhotoIndex + 1}`}
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
              />
            </motion.div>

            {/* Thumbnails */}
            {photos.length > 1 && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-10 flex gap-2 max-w-full overflow-x-auto px-4 pb-2 scrollbar-hide">
                {photos.map((photo, index) => (
                  <button
                    key={index}
                    onClick={(e) => {
                      e.stopPropagation();
                      setCurrentPhotoIndex(index);
                    }}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                      index === currentPhotoIndex
                        ? 'border-[#1EB53A] scale-110'
                        : 'border-white/30 hover:border-white/60'
                    }`}
                  >
                    <img
                      src={photo}
                      alt={`Miniatura ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}

            <style>{`
              .scrollbar-hide::-webkit-scrollbar {
                display: none;
              }
              .scrollbar-hide {
                -ms-overflow-style: none;
                scrollbar-width: none;
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
