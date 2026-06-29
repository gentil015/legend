import { motion } from "framer-motion";
import { Play } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { VIDEOS } from "../utils/data";

export default function Videos() {
  return (
    <section id="live" className="relative bg-stage py-24 sm:py-32">
      <div className="container-px flex flex-col gap-14">
        <SectionHeading
          eyebrow="Performance Examples"
          title="See us in action."
          subtitle="Watch highlights from our recent performances. This is the energy and professionalism we bring to every event."
        />

        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
          {VIDEOS.map((video, i) => (
            <motion.button
              key={video.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 2) * 0.1 }}
              className="relative group rounded-2xl overflow-hidden aspect-video glass text-left"
            >
              <img
                src={video.thumb}
                alt={video.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-void via-void/40 to-void/10" />

              <span className="absolute inset-0 grid place-items-center">
                <span className="grid place-items-center w-16 h-16 rounded-full bg-gold-bright/90 text-void glow-gold transition-transform duration-300 group-hover:scale-110">
                  <Play size={24} fill="currentColor" />
                </span>
              </span>

              <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
                <h3 className="font-display text-lg sm:text-xl text-bone leading-tight">
                  {video.title}
                </h3>
                <span className="font-mono text-xs text-gold">{video.venue}</span>
              </div>
            </motion.button>
          ))}
        </div>
      </div>
    </section>
  );
}
