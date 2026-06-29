import { motion } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import EqualizerBars from "../components/EqualizerBars";
import GlowButton from "../components/GlowButton";
import backgroundImg from "../../images/background.png";

export default function Hero() {
  return (
    <section id="top" className="relative h-[100dvh] w-full overflow-hidden bg-void">
      <div className="absolute inset-0">
        <img
          src={backgroundImg}
          alt="Legend Band background"
          className="w-full h-full object-cover scale-105"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-void/80 to-void/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-void/70 via-transparent to-void/70" />
        <div className="grain" />
      </div>

      {/* ambient glow */}
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[60rem] h-[60rem] rounded-full bg-gold/10 blur-[140px]" />

      <div className="relative z-10 h-full flex flex-col">
        <div className="flex-1 flex flex-col items-center justify-center container-px text-center pt-20">
          <motion.span
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="eyebrow mb-5"
          >
            Professional Entertainment
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="font-display text-gradient-gold text-[clamp(3.2rem,14vw,9.5rem)] leading-[0.92] tracking-tight"
          >
            LEGEND
            <br />
            BAND
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="font-body text-smoke text-base sm:text-xl max-w-xl mt-6 leading-relaxed"
          >
            Five musicians, one pulse. Stadium-sized songs built to sound
            even bigger in the room with you in it.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.75 }}
            className="flex flex-col xs:flex-row gap-4 mt-10 w-full max-w-md xs:max-w-none justify-center"
          >
            <GlowButton
              icon={Play}
              className="w-full xs:w-auto"
              onClick={() =>
                document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              View Services
            </GlowButton>
            <GlowButton
              variant="outline"
              className="w-full xs:w-auto"
              onClick={() =>
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" })
              }
            >
              Book Now
            </GlowButton>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="container-px pb-8 sm:pb-10 flex items-center justify-between"
        >
          <EqualizerBars count={14} className="h-10 hidden sm:flex" />
          <button
            onClick={() =>
              document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" })
            }
            className="mx-auto sm:mx-0 flex flex-col items-center gap-2 text-smoke hover:text-gold transition-colors"
            aria-label="Scroll to next section"
          >
            <span className="font-mono text-[0.65rem] uppercase tracking-[0.25em]">Scroll</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            >
              <ChevronDown size={18} />
            </motion.span>
          </button>
          <EqualizerBars count={14} className="h-10 hidden sm:flex" />
        </motion.div>
      </div>
    </section>
  );
}
