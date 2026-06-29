import { motion } from "framer-motion";

export default function GlowButton({
  children,
  variant = "solid",
  icon: Icon,
  className = "",
  as = "button",
  ...props
}) {
  const Comp = motion[as] ?? motion.button;
  const base =
    "relative inline-flex items-center justify-center gap-2 font-mono uppercase tracking-[0.18em] text-[0.78rem] px-7 py-4 min-h-[44px] rounded-full transition-colors duration-300 select-none";
  const styles =
    variant === "solid"
      ? "bg-gradient-to-r from-gold-bright to-gold text-void glow-gold hover:from-bone hover:to-gold-bright"
      : "border border-gold/50 text-bone hover:border-gold hover:bg-gold/10";

  return (
    <Comp
      whileHover={{ scale: 1.035 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 20 }}
      className={`${base} ${styles} ${className}`}
      {...props}
    >
      {children}
      {Icon && <Icon size={16} strokeWidth={2.25} />}
    </Comp>
  );
}
