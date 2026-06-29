import { motion } from "framer-motion";
import { Clock, Star } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import GlowButton from "../components/GlowButton";
import { SERVICES } from "../utils/data";

const typeStyle = {
  "Essential": "text-gold-bright border-gold-bright/40",
  "Professional": "text-gold border-gold/40",
  "Premium": "text-ember-bright border-ember-bright/40",
};

export default function Events() {
  return (
    <section id="services" className="relative bg-stage py-24 sm:py-32">
      <div className="container-px flex flex-col gap-14">
        <SectionHeading
          eyebrow="What We Offer"
          title="Event Entertainment Packages"
          subtitle="Flexible booking options for every occasion. Custom arrangements available to match your specific needs and vision."
        />

        <div className="flex flex-col gap-3 sm:gap-4">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="glass rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-8"
            >
              <div className="flex items-center gap-4 sm:gap-6 sm:w-48 shrink-0">
                <Star className="text-gold" size={24} />
                <div className="flex flex-col leading-none">
                  <span className="font-display text-2xl sm:text-3xl text-bone">{service.name}</span>
                  <span className="font-mono text-xs text-smoke flex items-center gap-1 mt-1">
                    <Clock size={12} />
                    {service.duration}
                  </span>
                </div>
              </div>

              <div className="flex-1">
                <p className="font-body text-smoke text-sm sm:text-base">{service.description}</p>
              </div>

              <span
                className={`font-mono text-[0.65rem] uppercase tracking-wider border rounded-full px-3 py-1.5 self-start sm:self-center whitespace-nowrap ${typeStyle[service.type]}`}
              >
                {service.type}
              </span>

              <GlowButton
                className="w-full sm:w-auto"
              >
                Inquire
              </GlowButton>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
