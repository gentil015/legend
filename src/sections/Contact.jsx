import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Send, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/SectionHeading";
import GlowButton from "../components/GlowButton";
import EqualizerBars from "../components/EqualizerBars";

export default function Contact() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative bg-stage py-24 sm:py-32 overflow-hidden">
      <div className="absolute -bottom-20 right-0 w-[40rem] h-[40rem] rounded-full bg-ember/10 blur-[140px]" />

      <div className="container-px grid lg:grid-cols-[0.9fr_1.1fr] gap-14 relative">
        <div className="flex flex-col gap-8">
          <SectionHeading
            eyebrow="Get in Touch"
            title="Ready to Book Us?"
            subtitle="Contact us with details about your event, date, venue, and your vision. Our team will respond within 24 hours with availability and custom pricing."
          />

          <div className="flex flex-col gap-4">
            <a
              href="mailto:booking@legendband.example"
              className="flex items-center gap-3 font-mono text-sm text-bone hover:text-gold transition-colors"
            >
              <span className="grid place-items-center w-11 h-11 rounded-full border border-gold/40 text-gold shrink-0">
                <Mail size={17} />
              </span>
              booking@legendband.example
            </a>
          </div>

          <EqualizerBars count={20} className="h-12 mt-2" />
        </div>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="glass rounded-3xl p-6 sm:p-10 flex flex-col gap-5"
        >
          {sent ? (
            <div className="flex flex-col items-center justify-center text-center gap-4 py-12">
              <CheckCircle2 className="text-gold" size={42} />
              <h3 className="font-display text-2xl text-bone">Message sent</h3>
              <p className="font-body text-smoke text-sm max-w-xs">
                Thanks for reaching out — the crew will get back to you shortly.
              </p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 gap-5">
                <Field label="Name" type="text" name="name" placeholder="Your full name" />
                <Field label="Email" type="email" name="email" placeholder="you@email.com" />
              </div>
              <Field label="Subject" type="text" name="subject" placeholder="Booking, press, collab..." />
              <div className="flex flex-col gap-2">
                <label className="font-mono text-xs uppercase tracking-wider text-smoke">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="Tell us about your event, date, and venue."
                  className="w-full rounded-xl bg-void/60 border border-white/10 focus:border-gold/60 px-4 py-3 text-bone placeholder:text-smoke/60 outline-none transition-colors resize-none font-body"
                />
              </div>

              <GlowButton icon={Send} type="submit" className="w-full mt-2">
                Send Message
              </GlowButton>
            </>
          )}
        </motion.form>
      </div>
    </section>
  );
}

function Field({ label, type, name, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="font-mono text-xs uppercase tracking-wider text-smoke" htmlFor={name}>
        {label}
      </label>
      <input
        required
        id={name}
        type={type}
        name={name}
        placeholder={placeholder}
        className="w-full min-h-[44px] rounded-xl bg-void/60 border border-white/10 focus:border-gold/60 px-4 py-3 text-bone placeholder:text-smoke/60 outline-none transition-colors font-body"
      />
    </div>
  );
}
