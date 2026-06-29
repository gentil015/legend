import { motion } from "framer-motion";
import { Camera, Music2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import { MEMBERS } from "../utils/data";

export default function Members() {
  return (
    <section id="lineup" className="relative bg-stage py-24 sm:py-32">
      <div className="container-px flex flex-col gap-14">
        <SectionHeading
          eyebrow="The Lineup"
          title="A full-stage ensemble."
          subtitle="Here’s the lineup for this performance, from bass to saxophone and everything in between."
        />

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {MEMBERS.map((member, i) => (
            <motion.article
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: (i % 5) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="group relative rounded-2xl overflow-hidden glass"
            >
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={member.img}
                  alt={`${member.name}, ${member.role}`}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/20 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5 flex flex-col gap-1">
                  <span className="eyebrow text-[0.62rem]">{member.instrument}</span>
                  <h3 className="font-display text-xl sm:text-2xl text-bone leading-tight">
                    {member.name}
                  </h3>
                  <span className="font-mono text-xs text-gold-bright">{member.role}</span>
                </div>

                <div className="absolute inset-0 flex items-end p-4 sm:p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 bg-void/80">
                  <div className="flex flex-col gap-3">
                    <p className="font-body text-sm text-smoke leading-relaxed">{member.bio}</p>
                    <div className="flex gap-3">
                      <span className="grid place-items-center w-9 h-9 rounded-full border border-gold/40 text-gold">
                        <Camera size={15} />
                      </span>
                      <span className="grid place-items-center w-9 h-9 rounded-full border border-gold/40 text-gold">
                        <Music2 size={15} />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
