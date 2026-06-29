import { useState } from "react";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Play, Pause } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import EqualizerBars from "../components/EqualizerBars";
import GlowButton from "../components/GlowButton";
import { TRACKS, img } from "../utils/data";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

const ALBUMS = [
  { title: "Midnight Parade", year: "2021", cover: img("legend-album-1", 800, 800) },
  { title: "Neon Liturgy", year: "2023", cover: img("legend-album-2", 800, 800) },
  { title: "Saints & Static", year: "2025", cover: img("legend-album-3", 800, 800) },
];

export default function MusicSection() {
  const [playing, setPlaying] = useState(null);

  return (
    <section id="music" className="relative bg-void py-24 sm:py-32 overflow-hidden">
      <div className="container-px flex flex-col gap-16">
        <SectionHeading
          eyebrow="Our Music"
          title="Diverse Setlists. Flexible Style."
          subtitle="Browse our catalog of original tracks and covers. Our adaptable setlist works for any event style — from intimate acoustics to high-energy performances."
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-start min-w-0">
          {/* Setlist */}
          <div className="flex flex-col min-w-0">
            {TRACKS.map((track, i) => {
              const isPlaying = playing === track.id;
              return (
                <motion.button
                  key={track.id}
                  onClick={() => setPlaying(isPlaying ? null : track.id)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                  className={`group flex min-w-0 items-center gap-4 sm:gap-6 py-4 sm:py-5 border-b border-white/10 text-left transition-colors min-h-[44px] ${
                    isPlaying ? "bg-gold/5" : "hover:bg-white/[0.03]"
                  }`}
                >
                  <span className="font-mono text-smoke text-sm w-6 shrink-0">{track.id}</span>

                  <span
                    className={`grid place-items-center w-11 h-11 rounded-full border shrink-0 transition-colors ${
                      isPlaying ? "border-gold bg-gold text-void" : "border-gold/40 text-gold group-hover:border-gold"
                    }`}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </span>

                  <span className="flex-1 min-w-0">
                    <span className="block font-display text-lg sm:text-xl text-bone truncate">
                      {track.title}
                    </span>
                    <span className="block font-mono text-xs text-smoke">{track.album}</span>
                  </span>

                  {isPlaying ? (
                    <EqualizerBars count={5} className="h-5 shrink-0" />
                  ) : (
                    <span className="font-mono text-xs text-smoke shrink-0">{track.duration}</span>
                  )}
                </motion.button>
              );
            })}

            <div className="flex justify-center sm:justify-start mt-8">
              <GlowButton variant="outline">Listen on Streaming</GlowButton>
            </div>
          </div>

          {/* Album carousel */}
          <div className="relative min-w-0">
            <Swiper
              modules={[EffectCoverflow, Pagination]}
              effect="coverflow"
              centeredSlides
              slidesPerView={1.3}
              loop
              coverflowEffect={{ rotate: 0, stretch: 0, depth: 140, modifier: 1.4, slideShadows: false }}
              pagination={{ clickable: true }}
              breakpoints={{ 640: { slidesPerView: 1.5 } }}
              className="!pb-12"
            >
              {ALBUMS.map((album) => (
                <SwiperSlide key={album.title}>
                  <div className="rounded-2xl overflow-hidden glass glow-gold aspect-square">
                    <img
                      src={album.cover}
                      alt={`${album.title} album cover`}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="text-center mt-4">
                    <h3 className="font-display text-xl text-bone">{album.title}</h3>
                    <span className="font-mono text-xs text-gold">{album.year}</span>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}
