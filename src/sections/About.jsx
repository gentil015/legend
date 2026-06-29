import { motion } from "framer-motion";
import { Disc3, Mic2, Flame } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import EqualizerBars from "../components/EqualizerBars";
import back2Img from "../../images/back2.jpg";

const STATS = [
  { icon: Disc3, value: "500+", label: "Events Performed" },
  { icon: Mic2, value: "100%", label: "Client Satisfaction" },
  { icon: Flame, value: "15+", label: "Years Experience" },
];

export default function About() {
  return (
    <section id="about" className="relative bg-void py-24 sm:py-32 overflow-hidden">
      <div className="container-px grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative order-2 lg:order-1"
        >
          <div className="relative rounded-[1.75rem] overflow-hidden glass glow-gold aspect-[4/5]">
            <img
              src={back2Img}
              alt="Legend Band in the studio"
              loading="lazy"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 -right-4 sm:-right-8 glass rounded-2xl px-5 py-4 flex items-center gap-3">
            <EqualizerBars count={8} className="h-8" />
            <span className="font-mono text-xs text-bone uppercase tracking-wider">
              Live Event
              <br />
              Performance
            </span>
          </div>
        </motion.div>

        <div className="order-1 lg:order-2 flex flex-col gap-8">
          <SectionHeading
            eyebrow="Hire Us"
            title="Professional Entertainment for Your Event"
            subtitle="Legend Band brings world-class live music to corporate galas, weddings, festivals, and ceremonies. With over 15 years of experience and hundreds of successful events, we deliver unforgettable performances tailored to your vision."
          />

          <p className="font-body text-smoke leading-relaxed max-w-xl">
            We specialize in creating the perfect soundtrack for your event. Whether it's an intimate celebration or a large corporate gathering, our versatile setlist and professional approach ensure your guests are engaged and entertained. Custom arrangements, premium sound, and flawless execution on every occasion.
          </p>

          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-2">
            {STATS.map(({ icon: Icon, value, label }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-4 sm:p-6 flex flex-col gap-2"
              >
                <Icon className="text-gold" size={22} />
                <span className="font-display text-2xl sm:text-3xl text-bone">{value}</span>
                <span className="font-mono text-[0.65rem] uppercase tracking-wider text-smoke">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
