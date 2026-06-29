import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Mail } from "lucide-react";
import { NAV_LINKS } from "../utils/data";
import { useLockBodyScroll } from "../hooks/useLockBodyScroll";
import GlowButton from "./GlowButton";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useLockBodyScroll(open);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (href) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong" : "bg-transparent"
      }`}
    >
      <nav className="container-px flex items-center justify-between h-[72px] sm:h-20">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            handleNav("#top");
          }}
          className="font-display text-xl sm:text-2xl tracking-wide text-bone"
        >
          LEGEND<span className="text-gold">.</span>
        </a>

        <ul className="hidden lg:flex items-center gap-9">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className="font-mono text-xs uppercase tracking-[0.18em] text-smoke hover:text-gold transition-colors duration-300"
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <div className="hidden lg:block">
          <GlowButton icon={Mail} onClick={() => handleNav("#contact")}>
            Book Now
          </GlowButton>
        </div>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((o) => !o)}
          className="lg:hidden grid place-items-center w-11 h-11 rounded-full border border-gold/30 text-bone"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="lg:hidden fixed inset-0 top-0 h-[100dvh] bg-void/98 backdrop-blur-xl flex flex-col"
          >
            <div className="container-px h-[72px] flex items-center justify-between">
              <span className="font-display text-xl text-bone">
                LEGEND<span className="text-gold">.</span>
              </span>
              <button
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="grid place-items-center w-11 h-11 rounded-full border border-gold/30 text-bone"
              >
                <X size={20} />
              </button>
            </div>

            <ul className="flex-1 flex flex-col items-center justify-center gap-2 container-px">
              {NAV_LINKS.map((link, i) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.06 * i, duration: 0.4, ease: "easeOut" }}
                  className="w-full text-center"
                >
                  <button
                    onClick={() => handleNav(link.href)}
                    className="font-display text-4xl py-3 w-full text-bone hover:text-gold transition-colors"
                  >
                    {link.label}
                  </button>
                </motion.li>
              ))}
            </ul>

            <div className="container-px pb-12 flex justify-center">
              <GlowButton icon={Mail} onClick={() => handleNav("#contact")} className="w-full max-w-xs">
                Book Now
              </GlowButton>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
