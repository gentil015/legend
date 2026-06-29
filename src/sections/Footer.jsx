import { Camera, PlaySquare, Music2, Rss } from "lucide-react";
import { NAV_LINKS } from "../utils/data";

const SOCIALS = [
  { icon: Camera, label: "Instagram" },
  { icon: PlaySquare, label: "YouTube" },
  { icon: Music2, label: "Spotify" },
  { icon: Rss, label: "Twitter" },
];

const VENUES = [
  "Chicago",
  "Austin",
  "Nairobi",
  "Lagos",
  "Cape Town",
  "Accra",
  "Dakar",
  "Cairo",
  "Johannesburg",
  "Marrakesh",
  "London",
  "Berlin",
  "Paris",
  "Tokyo",
  "Sydney",
  "Toronto",
];

export default function Footer() {
  const ticker = [...VENUES, ...VENUES];

  return (
    <footer className="relative bg-void border-t border-white/10 overflow-hidden">
      <div className="border-b border-white/10 py-4 overflow-hidden scrollbar-none">
        <div className="flex w-max gap-10 animate-marquee">
          {[...ticker, ...ticker].map((venue, i) => (
            <span
              key={i}
              className="font-mono text-xs uppercase tracking-[0.3em] text-smoke whitespace-nowrap"
            >
              {venue} <span className="text-gold mx-2">★</span>
            </span>
          ))}
        </div>
      </div>

      <div className="container-px py-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="flex flex-col gap-4 col-span-2 lg:col-span-1">
          <span className="font-display text-2xl text-bone">
            LEGEND<span className="text-gold">.</span>
          </span>
          <p className="font-body text-smoke text-sm leading-relaxed max-w-xs">
            Professional entertainment for your events and ceremonies. Available for weddings, corporate galas, festivals, and more.
          </p>
          <div className="flex gap-3 mt-2">
            {SOCIALS.map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="grid place-items-center w-11 h-11 rounded-full border border-gold/30 text-gold hover:bg-gold hover:text-void transition-colors duration-300"
              >
                <Icon size={17} />
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-gold">Navigate</span>
          {NAV_LINKS.slice(0, 4).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-smoke hover:text-bone transition-colors min-h-[24px]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-gold">More</span>
          {NAV_LINKS.slice(4).map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-body text-sm text-smoke hover:text-bone transition-colors min-h-[24px]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-4">
          <span className="font-mono text-xs uppercase tracking-wider text-gold">Newsletter</span>
          <p className="font-body text-sm text-smoke leading-relaxed">
            Get updates on available dates, new services, and event booking specials.
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="flex items-center gap-2 rounded-full bg-stage border border-white/10 p-1.5 pl-4 focus-within:border-gold/60 transition-colors"
          >
            <input
              type="email"
              required
              placeholder="Email address"
              className="flex-1 min-w-0 bg-transparent outline-none text-sm text-bone placeholder:text-smoke/60 font-body"
            />
            <button
              type="submit"
              className="font-mono text-[0.65rem] uppercase tracking-wider bg-gold text-void rounded-full px-4 py-2.5 min-h-[40px] hover:bg-gold-bright transition-colors"
            >
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="container-px py-6 border-t border-white/10 flex flex-col sm:flex-row gap-3 items-center justify-between">
        <span className="font-mono text-[0.7rem] text-smoke">
          © {new Date().getFullYear()} Legend Band. All rights reserved.
        </span>
        <span className="font-mono text-[0.7rem] text-smoke">Crafted for the road, built for the stage.</span>
      </div>
    </footer>
  );
}
