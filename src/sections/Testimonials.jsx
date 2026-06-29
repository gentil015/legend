import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { TESTIMONIALS } from "../utils/data";

import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  return (
    <section className="relative bg-void py-24 sm:py-32 overflow-hidden">
      <div className="container-px flex flex-col gap-14">
        <SectionHeading
          eyebrow="Word on the Street"
          title="What the room said after."
          align="center"
        />

        <Swiper
          modules={[Autoplay, Pagination]}
          slidesPerView={1}
          spaceBetween={24}
          loop
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 2 },
          }}
          className="!pb-14 w-full"
        >
          {TESTIMONIALS.map((t) => (
            <SwiperSlide key={t.name}>
              <figure className="glass rounded-3xl p-7 sm:p-10 h-full flex flex-col gap-6 min-h-[220px]">
                <Quote className="text-gold" size={28} />
                <blockquote className="font-body text-lg sm:text-xl text-bone leading-relaxed flex-1">
                  "{t.quote}"
                </blockquote>
                <figcaption className="flex flex-col">
                  <span className="font-display text-base text-bone">{t.name}</span>
                  <span className="font-mono text-xs text-gold">{t.role}</span>
                </figcaption>
              </figure>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
