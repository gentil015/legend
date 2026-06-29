import { motion } from "framer-motion";

export default function SectionHeading({
  eyebrow,
  title,
  align = "left",
  subtitle,
  light = false,
}) {
  const alignClass = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`flex flex-col gap-4 max-w-2xl ${alignClass}`}
    >
      {eyebrow && (
        <span className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-gold/60" />
          {eyebrow}
        </span>
      )}
      <h2
        className={`font-display text-[clamp(2.25rem,6.5vw,4.25rem)] ${
          light ? "text-bone" : "text-bone"
        }`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className="font-body text-smoke text-base sm:text-lg leading-relaxed max-w-xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
