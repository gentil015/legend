// Signature motif: a live-equalizer silhouette. Appears in the hero as ambient
// atmosphere and again as a thin section divider, tying every section back to
// "live sound" — the one idea the whole site is built around.
export default function EqualizerBars({ count = 24, className = "", barClassName = "" }) {
  const bars = Array.from({ length: count });
  return (
    <div className={`flex items-end gap-[3px] ${className}`} aria-hidden="true">
      {bars.map((_, i) => {
        const duration = 0.9 + ((i * 37) % 11) / 10;
        const delay = ((i * 53) % 14) / 10;
        const height = 30 + ((i * 29) % 70);
        return (
          <span
            key={i}
            className={`block w-[3px] origin-bottom rounded-full bg-gradient-to-t from-gold/90 to-gold-bright/40 ${barClassName}`}
            style={{
              height: `${height}%`,
              animation: `pulse-glow ${duration}s ease-in-out ${delay}s infinite`,
            }}
          />
        );
      })}
    </div>
  );
}
