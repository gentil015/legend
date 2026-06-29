// Centralized content. Swap image URLs for real photography when available.
import alainImg from "../../images/Alain.jpg";
import didierImg from "../../images/didier.jpg";
import jacksonImg from "../../images/Jackson.png";
import timoImg from "../../images/timo.jpg";
import bii1Img from "../../images/bii1.jpg";
import bii2Img from "../../images/bii2.jpg";
import bii3Img from "../../images/bii3.jpg";

export const img = (seed, w = 1200, h = 1500) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Lineup", href: "#lineup" },
  { label: "Music", href: "#music" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export const MEMBERS = [
  {
    name: "Timo",
    role: "Bassist",
    instrument: "Bass",
    bio: "The steady foundation that keeps the groove grounded and moving.",
    img: timoImg,
  },
  {
    name: "Didier",
    role: "Pianist",
    instrument: "Piano",
    bio: "Adds the warmth and color that lift the arrangements into full bloom.",
    img: didierImg,
  },
  {
    name: "Alain",
    role: "Drummer",
    instrument: "Drums",
    bio: "Driving the pulse with precision, power, and unmistakable presence.",
    img: alainImg,
  },
  {
    name: "Gisele",
    role: "Singer",
    instrument: "Voice",
    bio: "Brings a commanding vocal presence that anchors the performance.",
    img: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Tresol",
    role: "Singer",
    instrument: "Voice",
    bio: "Adds energy and character to the vocals with a strong stage presence.",
    img: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Mugenzi",
    role: "Singer",
    instrument: "Voice",
    bio: "Brings a distinct voice and emotional depth to the set.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Gitego",
    role: "Sound Engineer",
    instrument: "Audio",
    bio: "Shapes the sound so every note lands clearly and powerfully.",
    img: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "Jackson",
    role: "Saxophonist",
    instrument: "Saxophone",
    bio: "Brings the melodic edge and expressive solos that give the band its signature lift.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=800&q=80",
  },
];

export const TRACKS = [
  { id: "01", title: "Wildfire Heart", album: "Midnight Parade", duration: "3:42" },
  { id: "02", title: "Glass & Gasoline", album: "Midnight Parade", duration: "4:10" },
  { id: "03", title: "Static Crown", album: "Neon Liturgy", duration: "3:58" },
  { id: "04", title: "Lower the Lights", album: "Neon Liturgy", duration: "5:03" },
  { id: "05", title: "Velvet Riot", album: "Saints & Static", duration: "3:21" },
];

export const VIDEOS = [
  {
    title: "Wildfire Heart — Live Performance",
    venue: "Corporate Gala",
    thumb: img("legend-video-1", 900, 600),
  },
  {
    title: "Glass & Gasoline — Festival Set",
    venue: "Festival Performance",
    thumb: img("legend-video-2", 900, 600),
  },
  {
    title: "Static Crown — Acoustic Session",
    venue: "Intimate Event",
    thumb: img("legend-video-3", 900, 600),
  },
  {
    title: "Velvet Riot — Full Band Set",
    venue: "Wedding Reception",
    thumb: img("legend-video-4", 900, 600),
  },
];

export const GALLERY = [
  bii1Img,
  bii2Img,
  bii3Img,
  alainImg,
  didierImg,
  jacksonImg,
  timoImg,
  img("legend-gallery-1", 800, 800),
  img("legend-gallery-2", 800, 1000),
  img("legend-gallery-3", 800, 800),
  img("legend-gallery-4", 800, 1100),
  img("legend-gallery-5", 800, 800),
  img("legend-gallery-6", 800, 1000),
  img("legend-gallery-7", 800, 800),
  img("legend-gallery-8", 800, 1000),
  img("legend-gallery-9", 800, 800),
];

export const SERVICES = [
  { name: "Private Event", duration: "2 - 4 Hours", description: "Custom setlist for intimate gatherings, corporate events, and celebrations.", type: "Essential" },
  { name: "Corporate Gala", duration: "3 - 5 Hours", description: "Full live band experience with sound engineering for your brand event.", type: "Professional" },
  { name: "Wedding & Ceremony", duration: "3 - 6 Hours", description: "Elegant performances, from ceremony to reception, tailored to your vision.", type: "Premium" },
  { name: "Festival Performance", duration: "45 Min - 2 Hours", description: "High-energy stage presence perfect for festivals, concerts, and large gatherings.", type: "Professional" },
  { name: "Custom Package", duration: "Flexible", description: "Bespoke arrangements for unique venues, themes, and requirements.", type: "Premium" },
  { name: "Studio Session", duration: "4 - 8 Hours", description: "Recording and production services for your project or album.", type: "Professional" },
];

export const TESTIMONIALS = [
  {
    quote:
      "Legend Band transformed our corporate gala into an unforgettable night. The energy was perfect, the professionalism outstanding.",
    name: "Sarah Mitchell",
    role: "Event Coordinator, Premium Events Co.",
  },
  {
    quote:
      "We hired them for our wedding and they nailed it. They read the room perfectly and made our day truly special.",
    name: "James & Emma Chen",
    role: "Wedding Clients",
  },
  {
    quote:
      "As a festival director, I've worked with many acts. Legend Band brings reliability, talent, and genuine engagement with every crowd.",
    name: "Marcus Idris",
    role: "Festival Director, Lumen Fest",
  },
  {
    quote:
      "Professional musicians, flexible setlists, excellent communication throughout the process. Highly recommended for any event.",
    name: "David Torres",
    role: "Hotel Events Manager",
  },
];
