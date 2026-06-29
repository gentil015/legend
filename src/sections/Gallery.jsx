import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { GALLERY } from "../utils/data";

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const close = () => setActiveIndex(null);
  const next = () => setActiveIndex((i) => (i + 1) % GALLERY.length);
  const prev = () => setActiveIndex((i) => (i - 1 + GALLERY.length) % GALLERY.length);

  return (
    <section id="gallery" className="relative bg-void py-24 sm:py-32">
      <div className="container-px flex flex-col gap-14">
        <SectionHeading
          eyebrow="Gallery"
          title="Live in the Moment."
          subtitle="Moments from our performances at events and ceremonies — tap any frame to see the full experience."
        />

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
          {GALLERY.map((src, i) => (
            <motion.button
              key={src}
              onClick={() => setActiveIndex(i)}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 8) * 0.05 }}
              className={`relative rounded-xl sm:rounded-2xl overflow-hidden group min-h-[44px] ${
                i % 5 === 0 ? "row-span-2 aspect-[3/4]" : "aspect-square"
              }`}
            >
              <img
                src={src}
                alt={`Legend Band gallery photo ${i + 1}`}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gold/0 group-hover:bg-gold/10 transition-colors duration-300" />
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-void/95 backdrop-blur-xl flex items-center justify-center container-px"
            onClick={close}
          >
            <button
              aria-label="Close gallery"
              onClick={close}
              className="absolute top-6 right-6 grid place-items-center w-11 h-11 rounded-full border border-gold/40 text-bone"
            >
              <X size={20} />
            </button>

            <button
              aria-label="Previous photo"
              onClick={(e) => {
                e.stopPropagation();
                prev();
              }}
              className="absolute left-2 sm:left-6 grid place-items-center w-11 h-11 rounded-full border border-gold/40 text-bone"
            >
              <ChevronLeft size={20} />
            </button>

            <motion.img
              key={activeIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              src={GALLERY[activeIndex]}
              alt={`Legend Band gallery photo ${activeIndex + 1}`}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[80vh] max-w-full rounded-2xl object-contain glow-gold"
            />

            <button
              aria-label="Next photo"
              onClick={(e) => {
                e.stopPropagation();
                next();
              }}
              className="absolute right-2 sm:right-6 grid place-items-center w-11 h-11 rounded-full border border-gold/40 text-bone"
            >
              <ChevronRight size={20} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
