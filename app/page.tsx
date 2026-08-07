'use client';
import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, useInView, useScroll, useTransform, AnimatePresence, useMotionValue, animate, useSpring } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ChevronDown } from 'lucide-react';
import styles from './page.module.css';

/* ── Lazy-load heavy 3D scene ────────────────────────────────── */
const HeroScene3D = dynamic(() => import('@/components/HeroScene3D'), {
  ssr: false,
  loading: () => <div className={styles.scenePlaceholder} />,
});

/* ── Animation Wrappers ──────────────────────────────────────── */
function FadeUp({ children, delay = 0, className }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, y: 48 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >{children}</motion.div>
  );
}

function FadeIn({ children, delay = 0, className }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: 1.0, ease: 'easeOut', delay }}
    >{children}</motion.div>
  );
}

function SlideIn({ children, delay = 0, className, dir = 'left' }: {
  children: React.ReactNode; delay?: number; className?: string; dir?: 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial={{ opacity: 0, x: dir === 'left' ? -60 : 60 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay }}
    >{children}</motion.div>
  );
}

function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  return (
    <motion.div ref={ref} className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
    >{children}</motion.div>
  );
}

const itemV = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

/* ── Animated Counter Component ──────────────────────────────── */
function AnimatedCounter({ value, duration = 1.4 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState(value);
  const [mounted, setMounted] = useState(false);

  const rangeMatch = value.match(/^([0-9]+)-([0-9]+)\s*(.*)$/);
  const simpleMatch = value.match(/^([0-9]+)([+]?)$/);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    let startTimestamp: number | null = null;
    const durationMs = duration * 1000;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / durationMs, 1);

      // Easing: easeOutQuart
      const easeProgress = 1 - Math.pow(1 - progress, 4);

      if (rangeMatch) {
        const t1 = parseInt(rangeMatch[1], 10);
        const t2 = parseInt(rangeMatch[2], 10);
        const current1 = Math.round(easeProgress * t1);
        const current2 = Math.round(easeProgress * t2);
        setDisplayValue(`${current1}-${current2} ${rangeMatch[3]}`);
      } else if (simpleMatch) {
        const t = parseInt(simpleMatch[1], 10);
        const current = Math.round(easeProgress * t);
        setDisplayValue(`${current}${simpleMatch[2]}`);
      } else {
        setDisplayValue(value);
      }

      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  }, [mounted, value]);

  // Avoid hydration mismatch
  if (!mounted) {
    return <span>{value}</span>;
  }

  return <span>{displayValue}</span>;
}

const HERO_STATS = [
  { val: '1000+', label: 'PROJECTS DELIVERED' },
  { val: '90+', label: 'GLOBAL CLIENTS' },
  { val: '5+', label: 'COUNTRIES SERVED' },
  { val: '25+', label: 'YEARS OF COMBINED ENGINEERING EXPERIENCE' },
  { val: 'ONE-STOP FOR ALL', label: 'ARCHITECTURAL • STRUCTURAL • MEP • BIM' },
  { val: '24-48 HR', label: 'CLIENT RESPONSE TIME' },
];

/* ── Data ────────────────────────────────────────────────────── */
const SERVICES = [
  {
    n: '01', href: '/services/lgs',
    title: 'LGSF Solutions',
    img: '/images/project_residential.png',
    bullets: ['Light Gauge Steel Design', 'Structural Detailing', 'Shop Drawings', 'BOQ & Estimation'],
  },
  {
    n: '02', href: '/services/structural-steel',
    title: 'Structural Engineering',
    img: '/images/project_commercial.png',
    bullets: ['Structural Analysis', 'Steel & Concrete Design', 'Connection Design', 'Foundation Engineering'],
  },
  {
    n: '03', href: '/services/bim',
    title: 'BIM Modeling',
    img: '/images/about_building.png',
    bullets: ['3D BIM Modeling', 'Clash Detection', '4D Construction', '5D Estimation'],
  },
  {
    n: '04', href: '/services/mep',
    title: 'MEP Systems',
    img: '/images/project_industrial.png',
    bullets: ['HVAC Design', 'Electrical Systems', 'Plumbing Systems', 'Fire Protection'],
  },
  {
    n: '05', href: '/services/bim-solutions-3d',
    title: 'BIM-integrated Solutions 3D',
    img: '/images/cta_building.png',
    bullets: ['Multi-Discipline Coordination', 'BIM to Field', 'Quantity Take-Off', 'Construction Planning'],
  },
  {
    n: '06', href: '/services/icf',
    title: 'ICF Solutions',
    img: '/images/project_commercial.png',
    bullets: ['ICF Structural Design', 'Energy Efficient Buildings', 'Wall & Foundation Systems', 'Shop Drawings'],
  },
  {
    n: '07', href: '/services/timber',
    title: 'Timber Engineering',
    img: '/images/about_building.png',
    bullets: ['Timber Structure Design', 'Glulam & CLT Solutions', 'Connection Design', 'Sustainable Structures'],
  },
  {
    n: '08', href: '/services/rebar-concrete',
    title: 'Rebar & Concrete',
    img: '/images/project_industrial.png',
    bullets: ['Precast Concrete Design', 'Rebar Detailing', 'Placing Drawings', 'Shop Drawings'],
  },
  {
    n: '09', href: '/services/third-party-review',
    title: 'Third Party Review',
    img: '/images/project_commercial.png',
    bullets: ['Peer Review', 'Value Engineering', 'Code Compliance Check', 'Structural Optimization'],
  },
];



const PROJECTS = [
  {
    id: 1,
    title: 'ELM ST Unit',
    loc: 'Manchester, New Hampshire, USA',
    category: 'residential',
    catLabel: 'Multi-Family Residential',
    services: ['Architecture', 'LGS', 'BIM'],
    img: '/images/project_elm_st.png',
  },
  {
    id: 2,
    title: 'SUGAR VILLA',
    loc: 'Little Exuma, Bahamas',
    category: 'residential',
    catLabel: 'Luxury Estate',
    services: ['Architecture', 'BIM 3D', 'Structure'],
    img: '/images/project_sugar_villa.png',
  },
  {
    id: 3,
    title: 'Children Building USA',
    loc: '2714 Goat Creek Rd, Kerrville, TX',
    category: 'commercial',
    catLabel: 'Educational Facility',
    services: ['MEP Systems', 'Steel Structure', 'BIM'],
    img: '/images/project_children_bldg.png',
  },
  {
    id: 4,
    title: 'Nelson Senior Home Care',
    loc: 'Unit Center, USA',
    category: 'care',
    catLabel: 'Senior Living Care',
    services: ['LGS Framing', 'Structure', 'MEP'],
    img: '/images/project_nelson_care.png',
  },
  {
    id: 5,
    title: 'TM HEIGHTS',
    loc: 'Residential Apartment, USA',
    category: 'residential',
    catLabel: 'Apartment Complex',
    services: ['LGS Steel', 'Structural BIM', 'Rebar'],
    img: '/images/project_tm_heights.png',
  },
  {
    id: 6,
    title: 'Wheel House, ADU UNIT',
    loc: 'Modular ADU, USA',
    category: 'adu',
    catLabel: 'Steel Frame ADU',
    services: ['Cold-Formed Steel', 'Architectural', 'Shop Dwg'],
    img: '/images/project_wheel_house.png',
  },
  {
    id: 7,
    title: 'Khan House',
    loc: 'Residential House, CANADA',
    category: 'timber',
    catLabel: 'Mass Timber Residence',
    services: ['Timber Eng.', 'CLT Solutions', 'Structure'],
    img: '/images/project_khan_house.png',
  },
  {
    id: 8,
    title: 'Nelson Senior Home Care II',
    loc: 'Unit Center Phase II, USA',
    category: 'care',
    catLabel: 'Senior Living Complex',
    services: ['BIM 3D', 'LGS Framing', 'MEP'],
    img: '/images/project_senior_center.png',
  },
];

const STATS = [
  { val: '10+', label: 'Countries Served', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9' },
  { val: '300+', label: 'Projects Completed', icon: 'M3 21h18M3 7v14M21 7v14M3 7l9-4 9 4' },
  { val: '150+', label: 'Happy Clients', icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' },
  { val: '50+', label: 'Expert Professionals', icon: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z' },
  { val: '98%', label: 'Client Satisfaction', icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
];

const PROCESS = [
  { n: '01', name: 'Discovery', desc: 'Deep dive into your vision, constraints and project goals.' },
  { n: '02', name: 'Design', desc: 'BIM models, structural analysis and architectural concepts.' },
  { n: '03', name: 'Engineering', desc: 'PE-stamped drawings, MEP integration and code compliance.' },
  { n: '04', name: 'Construction', desc: 'Site coordination, quality control and phased delivery.' },
  { n: '05', name: 'Handover', desc: 'Comprehensive documentation and post-project support.' },
];

/* ═══════════════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState(0);
  const [activeFilter, setActiveFilter] = useState<'all' | 'structure' | 'arch' | 'bim' | 'mep'>('all');

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Ultra-smooth physics for 3D tilt & parallax depth
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [3, -3]), { stiffness: 60, damping: 25 });
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-3, 3]), { stiffness: 60, damping: 25 });
  const annotDepthX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-8, 8]), { stiffness: 70, damping: 25 });

  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    mouseX.set(x);
    mouseY.set(y);
  };

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Spring physics wrapper for buttery smooth Lenis-style scroll inertia
  const smoothScroll = useSpring(scrollYProgress, { stiffness: 80, damping: 22, restDelta: 0.001 });

  // Split-Curtain 3D Parallax Exit Motion on Scroll
  // Left items move LEFT (-x), Right items move RIGHT (+x)
  const heroOpacity = useTransform(smoothScroll, [0, 0.45], [1, 0]);
  const heroY = useTransform(smoothScroll, [0, 0.5], [0, -20]);
  const leftX = useTransform(smoothScroll, [0, 0.5], [0, -140]);
  const rightX = useTransform(smoothScroll, [0, 0.5], [0, 140]);
  const bgScale = useTransform(smoothScroll, [0, 0.5], [1, 1.04]);
  const leftAnnotX = useTransform(smoothScroll, [0, 0.5], [0, -100]);
  const rightAnnotX = useTransform(smoothScroll, [0, 0.5], [0, 100]);

  // Sync 3D building phase with scroll
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (v < 0.08) setPhase(0); // blueprint
      else if (v < 0.18) setPhase(1); // steel frame
      else if (v < 0.30) setPhase(2); // concrete
      else if (v < 0.42) setPhase(3); // MEP
      else if (v < 0.55) setPhase(4); // glass
      else setPhase(5); // complete
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════════════ */}
      <section
        className={styles.hero}
        ref={heroRef}
        aria-label="Hero"
        onMouseMove={handleHeroMouseMove}
      >
        {/* Laser CAD Scanning Line Landing Sweep */}
        <motion.div
          className={styles.laserScanLine}
          initial={{ top: '0%', opacity: 1 }}
          animate={{ top: '100%', opacity: 0 }}
          transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />

        {/* Full-width background photo with 3D Out-of-Screen Fly-In Landing & Scroll Parting (+x) */}
        <motion.div
          className={styles.heroBg}
          style={{ opacity: heroOpacity, scale: bgScale, x: rightX, rotateX: tiltX, rotateY: tiltY }}
        >
          <motion.div
            style={{ width: '100%', height: '100%', position: 'relative', transformStyle: 'preserve-3d' }}
            initial={{ opacity: 0, scale: 1.85, rotateX: 28, rotateY: -22, y: 110 }}
            animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
            transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <Image
              src="/images/hero_clear_disciplines.png"
              alt="FAECOM — Multidisciplinary Architectural, Structural, BIM, and MEP Engineering"
              fill
              priority
              quality={95}
              sizes="100vw"
              style={{ objectFit: 'contain', objectPosition: 'right center' }}
            />
          </motion.div>
        </motion.div>

        {/* Light gradient overlay — clean white fade on left */}
        <div className={styles.heroOverlay} />

        {/* CAD Layer Filter Switcher Bar - Moves RIGHT (+x) on scroll */}
        <motion.div
          className={styles.cadFilterBar}
          style={{ opacity: heroOpacity, x: rightX }}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <span className={styles.cadFilterLabel}>CAD VIEWPORT:</span>
          {[
            { id: 'all', label: 'ALL LAYERS' },
            { id: 'structure', label: 'STRUCTURAL' },
            { id: 'arch', label: 'ARCHITECTURAL' },
            { id: 'bim', label: 'BIM 3D' },
            { id: 'mep', label: 'MEP SYSTEMS' },
          ].map((f) => (
            <button
              key={f.id}
              className={`${styles.cadFilterBtn} ${activeFilter === f.id ? styles.cadFilterBtnActive : ''}`}
              onClick={() => setActiveFilter(f.id as any)}
            >
              {f.label}
            </button>
          ))}
        </motion.div>

        {/* ── Engineering annotation callouts matching reference image ───── */}
        <motion.div className={styles.annotations} style={{ opacity: heroOpacity, x: annotDepthX }}>
          {/* 1. Structural Engineering (Top Left - Moves LEFT on scroll) */}
          <motion.div
            className={`${styles.annot} ${styles.annotStruct}`}
            style={{
              opacity: activeFilter === 'all' || activeFilter === 'structure' ? 1 : 0.2,
              filter: activeFilter === 'structure' ? 'drop-shadow(0 0 12px rgba(15,18,56,0.3))' : 'none',
              x: leftAnnotX
            }}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.annotIconBox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20">
                <path d="M12 3L2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5" />
              </svg>
            </div>
            <div className={styles.annotTextGroup}>
              <span className={styles.annotTitle}>STRUCTURAL ENGINEERING</span>
              <span className={styles.annotSubText}>Safe. Strong. Sustainable Structures.</span>
            </div>
            <div className={styles.pointerLineDark}>
              <div className={styles.radarPulse} />
            </div>
          </motion.div>

          {/* 2. Architectural Design (Far Right - Moves RIGHT on scroll) */}
          <motion.div
            className={`${styles.annot} ${styles.annotArch}`}
            style={{
              opacity: activeFilter === 'all' || activeFilter === 'arch' ? 1 : 0.2,
              filter: activeFilter === 'arch' ? 'drop-shadow(0 0 12px rgba(255,107,44,0.4))' : 'none',
              x: rightAnnotX
            }}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.annotIconBox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20">
                <path d="M3 21h18M5 21V7l7-4 7 4v14M9 10h2M13 10h2M9 14h2M13 14h2M9 18h2M13 18h2" />
              </svg>
            </div>
            <div className={styles.annotTextGroup}>
              <span className={styles.annotTitle}>ARCHITECTURAL DESIGN</span>
              <span className={styles.annotSubText}>Innovative Designs. Thoughtful Spaces.</span>
            </div>
            <div className={styles.pointerLineOrange}>
              <div className={styles.radarPulseOrange} />
            </div>
          </motion.div>

          {/* 3. BIM Modeling (Far Left Wireframe - Moves LEFT on scroll) */}
          <motion.div
            className={`${styles.annot} ${styles.annotBim}`}
            style={{
              opacity: activeFilter === 'all' || activeFilter === 'bim' ? 1 : 0.2,
              filter: activeFilter === 'bim' ? 'drop-shadow(0 0 12px rgba(15,18,56,0.3))' : 'none',
              x: leftAnnotX
            }}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.annotIconBox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20">
                <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
                <path d="M3.27 6.96L12 12.01l8.73-5.05M12 22.08V12" />
              </svg>
            </div>
            <div className={styles.annotTextGroup}>
              <span className={styles.annotTitle}>BIM MODELING</span>
              <span className={styles.annotSubText}>Intelligent 3D Models. Better Decisions.</span>
            </div>
            <div className={styles.pointerLineDark}>
              <div className={styles.radarPulse} />
            </div>
          </motion.div>

          {/* 4. MEP Systems (Middle Right Ductwork - Moves RIGHT on scroll) */}
          <motion.div
            className={`${styles.annot} ${styles.annotMep}`}
            style={{
              opacity: activeFilter === 'all' || activeFilter === 'mep' ? 1 : 0.2,
              filter: activeFilter === 'mep' ? 'drop-shadow(0 0 12px rgba(255,107,44,0.4))' : 'none',
              x: rightAnnotX
            }}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.0, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.pointerLineOrangeRight}>
              <div className={styles.radarPulseOrange} />
            </div>
            <div className={styles.annotIconBox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
              </svg>
            </div>
            <div className={styles.annotTextGroup}>
              <span className={styles.annotTitle}>MEP SYSTEMS</span>
              <span className={styles.annotSubText}>Integrated. Efficient. Future Ready.</span>
            </div>
          </motion.div>

          {/* 5. Coordinated Solutions (Integrated Core - Moves DOWN/DISSOLVES) */}
          <motion.div
            className={`${styles.annot} ${styles.annotCoord}`}
            style={{ opacity: activeFilter === 'all' || activeFilter === 'mep' || activeFilter === 'bim' ? 1 : 0.2 }}
            initial={{ opacity: 0, scale: 0.85, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.pointerLineDarkRight}>
              <div className={styles.radarPulse} />
            </div>
            <div className={styles.annotIconBox}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" width="20" height="20">
                <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
              </svg>
            </div>
            <div className={styles.annotTextGroup}>
              <span className={styles.annotTitle}>COORDINATED SOLUTIONS</span>
              <span className={styles.annotSubText}>One Team. One Model. One Vision.</span>
            </div>
          </motion.div>
        </motion.div>

        {/* ── Hero Left Content (Moves LEFT (-x) on scroll) ─────────────────── */}
        <motion.div className={styles.heroContent} style={{ opacity: heroOpacity, y: heroY, x: leftX }}>
          {/* Tagline */}
          <motion.div
            className={styles.heroTag}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            <span className={styles.heroTagLine} />
            <span>ENGINEERING THE FUTURE. BUILDING EXCELLENCE.</span>
          </motion.div>

          {/* 4-Line 3D Out-Of-Screen Fly-In Editorial Heading */}
          <h1 className={styles.heroH1}>
            <motion.span
              className={styles.heroLineNavy}
              initial={{ opacity: 0, scale: 1.7, rotateX: 25, rotateY: -18, y: 80 }}
              animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
              transition={{ delay: 0.25, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              DESIGNING
            </motion.span>
            <motion.span
              className={styles.heroLineOrange}
              initial={{ opacity: 0, scale: 1.7, rotateX: 25, rotateY: -18, y: 80 }}
              animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
              transition={{ delay: 0.40, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              TOMORROW.
            </motion.span>
            <motion.span
              className={styles.heroLineNavy}
              initial={{ opacity: 0, scale: 1.7, rotateX: 25, rotateY: -18, y: 80 }}
              animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
              transition={{ delay: 0.55, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              DELIVERING
            </motion.span>
            <motion.span
              className={styles.heroLineOrange}
              initial={{ opacity: 0, scale: 1.7, rotateX: 25, rotateY: -18, y: 80 }}
              animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
              transition={{ delay: 0.70, duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
            >
              EXCELLENCE.
            </motion.span>
          </h1>

          {/* Subtext matching reference image */}
          <motion.p
            className={styles.heroSub}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            From Concept to Completion – We deliver{' '}
            <strong className={styles.heroSubHighlight}>
              Integrated Solutions in Architecture, Structure, BIM, and MEP.
            </strong>
          </motion.p>

          {/* Action Buttons matching reference image */}
          <motion.div
            className={styles.heroActions}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.25, duration: 0.8 }}
          >
            <Link href="/projects" className={styles.heroBtnPrimary}>
              <span>EXPLORE OUR PROJECTS</span>
              <ArrowRight size={15} strokeWidth={2.2} />
            </Link>
            <Link href="/services" className={styles.heroBtnGhost}>
              <span>OUR SERVICES</span>
              <ArrowRight size={15} strokeWidth={2} />
            </Link>
          </motion.div>
        </motion.div>

        {/* ── 6-Stat Ribbon ───────────────────────────────── */}
        <motion.div
          className={styles.statsBar}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          {HERO_STATS.map((st, i) => (
            <div key={st.label} className={styles.statCell}>
              <motion.div
                className={styles.statTextWrap}
                initial={{ opacity: 0, scale: 1.65, rotateX: 25, rotateY: -18, y: 40 }}
                animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
                transition={{
                  duration: 1.4,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.6 + i * 0.12,
                }}
              >
                <div className={styles.statVal}>
                  <AnimatedCounter value={st.val} />
                </div>
                <div className={styles.statLabel}>{st.label}</div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Corner brackets */}
        <div className={styles.cornerTL} aria-hidden />
        <div className={styles.cornerBR} aria-hidden />
      </section>

      {/* ══ 2. OUR SERVICES — White Reference-Style Grid ════════ */}
      <section className={styles.servSection} aria-label="Our Services">
        <div className={styles.servInner}>

          {/* Section Header */}
          <FadeUp className={styles.servHeader}>
            <div className={styles.servHeaderLeft}>
              <span className={styles.servEyebrow}>OUR SERVICES</span>
              <h2 className={styles.servH2}>
                Engineering Disciplines.
                <br />
                <em>One Trusted Partner.</em>
              </h2>
            </div>
            <Link href="/services" className={styles.servViewAll}>
              <span>View All Services</span>
              <ArrowUpRight size={13} strokeWidth={2} />
            </Link>
          </FadeUp>

          {/* 9-Card Award-Winning Architectural Grid */}
          <div className={styles.servGrid}>
            {SERVICES.map((svc, i) => (
              <FadeUp key={svc.href} delay={i * 0.05}>
                <Link href={svc.href} className={styles.servCard}>
                  {/* Left Vertical Accent Bar */}
                  <div className={styles.servCardLeftAccent} />

                  {/* Watermark Number */}
                  <span className={styles.servCardWatermarkNum}>{svc.n}</span>

                  {/* Card Content Area */}
                  <div className={styles.servCardTop}>
                    <h3 className={styles.servCardTitle}>{svc.title}</h3>
                    <ul className={styles.servCardBullets}>
                      {svc.bullets.map(b => (
                        <li key={b} className={styles.servCardBullet}>
                          <svg className={styles.diamondIcon} viewBox="0 0 10 10" fill="#FF6B2C">
                            <path d="M5 0L10 5L5 10L0 5Z" />
                          </svg>
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                    <div className={styles.servCardArrowBtn}>
                      <ArrowUpRight size={15} strokeWidth={2.5} />
                    </div>
                  </div>

                  {/* Isometric Building Render & Laser Scan Sweep */}
                  <div className={styles.servCardImg}>
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      quality={85}
                      sizes="(max-width: 900px) 90vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.servCardLaserLine} />
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>

        </div>
      </section>

      {/* ══ 3. LATEST PROJECTS — Award-Winning 3D Gallery Grid ═════ */}
      <section className={styles.projSection} aria-label="Latest Projects">
        <div className={styles.projInner}>
          {/* Header */}
          <div className={styles.projHeader}>
            <FadeUp>
              <span className={styles.projEyebrow}>LATEST PROJECTS</span>
              <h2 className={styles.projH2}>
                Engineering Portfolio.<br />
                <em>Architectural Precision.</em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Link href="/projects" className={styles.projViewAll}>
                <span>Explore All Projects</span>
                <ArrowUpRight size={13} strokeWidth={2} />
              </Link>
            </FadeUp>
          </div>

          {/* 8-Card Award-Winning 3D Grid */}
          <div className={styles.projGrid}>
            {PROJECTS.map((proj, i) => (
              <FadeUp key={proj.id} delay={i * 0.06}>
                <Link href="/projects" className={styles.projCard}>
                  {/* Frosted Glass Logo Badge */}
                  <div className={styles.projLogoBadge}>
                    <Image
                      src="/images/logo.png"
                      alt="FAECOM INC."
                      width={20}
                      height={20}
                      style={{ objectFit: 'contain' }}
                    />
                    <span className={styles.projLogoText}>FAECOM</span>
                  </div>

                  {/* Category Pill Badge */}
                  <div className={styles.projCategoryBadge}>{proj.catLabel}</div>

                  {/* Image Container with Laser Scan FX */}
                  <div className={styles.projCardImg}>
                    <Image
                      src={proj.img}
                      alt={proj.title}
                      fill
                      quality={88}
                      sizes="(max-width: 900px) 90vw, 25vw"
                      style={{ objectFit: 'cover' }}
                    />
                    <div className={styles.projCardLaserLine} />
                    <div className={styles.projCardGradientOverlay} />
                  </div>

                  {/* Card Bottom Meta */}
                  <div className={styles.projCardBody}>
                    <h3 className={styles.projCardTitle}>{proj.title}</h3>
                    <p className={styles.projCardLoc}>{proj.loc}</p>
                    <div className={styles.projCardFooter}>
                      <div className={styles.projCardTags}>
                        {proj.services.map(s => (
                          <span key={s} className={styles.projTag}>{s}</span>
                        ))}
                      </div>
                      <div className={styles.projCardArrowBtn}>
                        <ArrowUpRight size={14} strokeWidth={2.5} />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 5. PROCESS ═══════════════════════════════════════════ */}
      <section className={styles.procSection} aria-label="Our Process">
        <div className={styles.procInner}>
          <FadeUp className={styles.procHeader}>
            <span className="lbl-light">Our Process</span>
            <h2 className={styles.procH2}>
              How we bring<br /><em>ideas to life</em>
            </h2>
          </FadeUp>

          <div className={styles.procGrid}>
            {PROCESS.map((ps, i) => (
              <FadeUp key={ps.n} delay={i * 0.08}>
                <div className={styles.procStep}>
                  <div className={styles.procNum}>{ps.n}</div>
                  <div className={styles.procBar} />
                  <h3 className={styles.procName}>{ps.name}</h3>
                  <p className={styles.procDesc}>{ps.desc}</p>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 6. STATS RIBBON ══════════════════════════════════════ */}
      <section className={styles.ribbonSection} aria-label="Company Statistics">
        <Stagger className={styles.ribbonGrid}>
          {STATS.map((st) => (
            <motion.div key={st.label} variants={itemV} className={styles.ribbonCell}>
              <div className={styles.ribbonVal}>{st.val}</div>
              <div className={styles.ribbonLbl}>{st.label}</div>
            </motion.div>
          ))}
        </Stagger>
      </section>

      {/* ══ 7. CTA SECTION ═══════════════════════════════════════ */}
      <section className={styles.ctaSection} aria-label="Start a project">
        <FadeUp className={styles.ctaInner}>
          <div className={styles.ctaImageWrap}>
            <Image
              src="/images/cta_building.png"
              alt="FAECOM premium architectural project"
              fill quality={80}
              sizes="100vw"
              style={{ objectFit: 'cover', filter: 'brightness(0.3) saturate(0.5)' }}
            />
          </div>
          <div className={styles.ctaContent}>
            <span className="lbl-light">Ready to Build?</span>
            <h2 className={styles.ctaH2}>
              Let's create something<br /><em>extraordinary together</em>
            </h2>
            <p className={styles.ctaDesc}>
              From concept to completion — FAECOM delivers world-class engineering
              that stands the test of time.
            </p>
            <div className={styles.ctaActions}>
              <Link href="/clients" className={styles.ctaBtnPrimary}>
                <span>Let's Build Together</span>
                <ArrowUpRight size={16} strokeWidth={2} />
              </Link>
              <Link href="/projects" className={styles.ctaBtnGhost}>
                <span>See Our Work</span>
                <ArrowRight size={14} strokeWidth={1.5} />
              </Link>
            </div>
          </div>
        </FadeUp>
      </section>
    </>
  );
}
