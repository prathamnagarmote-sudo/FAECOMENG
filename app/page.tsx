'use client';
import { useRef, useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, useInView, useScroll, useTransform, AnimatePresence, useMotionValue, useSpring, animate } from 'framer-motion';
import { ArrowUpRight, ArrowRight, ChevronDown, Mail, Phone, MapPin } from 'lucide-react';
import styles from './page.module.css';

/* ── Lazy-load heavy 3D scene ────────────────────────────────── */
const HeroScene3D = dynamic(() => import('@/components/HeroScene3D'), {
  ssr: false,
  loading: () => <div className={styles.scenePlaceholder} />,
});

/* ── Reduced-Motion aware animation wrappers ─────────────────── */
function useReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);
  return reduced;
}

function FadeUp({ children, delay = 0, className }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();
  return (
    <motion.div ref={ref} className={className}
      initial={reduced ? false : { opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delay: reduced ? 0 : delay }}
    >{children}</motion.div>
  );
}

function FadeIn({ children, delay = 0, className }: {
  children: React.ReactNode; delay?: number; className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();
  return (
    <motion.div ref={ref} className={className}
      initial={reduced ? false : { opacity: 0 }}
      animate={inView ? { opacity: 1 } : {}}
      transition={{ duration: reduced ? 0 : 0.5, ease: 'easeOut', delay: reduced ? 0 : delay }}
    >{children}</motion.div>
  );
}

function SlideIn({ children, delay = 0, className, dir = 'left' }: {
  children: React.ReactNode; delay?: number; className?: string; dir?: 'left' | 'right';
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();
  return (
    <motion.div ref={ref} className={className}
      initial={reduced ? false : { opacity: 0, x: dir === 'left' ? -40 : 40 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: reduced ? 0 : 0.55, ease: [0.22, 1, 0.36, 1], delay: reduced ? 0 : delay }}
    >{children}</motion.div>
  );
}

function Stagger({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });
  const reduced = useReducedMotion();
  return (
    <motion.div ref={ref} className={className}
      initial="hidden"
      animate={inView ? 'visible' : 'hidden'}
      variants={{ hidden: {}, visible: { transition: { staggerChildren: reduced ? 0 : 0.07 } } }}
    >{children}</motion.div>
  );
}

const itemV = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: 'easeOut' as const } },
};

/* ── Stacked Draggable Carousel ──────────────────────────────── */
type CarouselSlide = {
  img: string;
  title: string;
  loc: string;
  badge: string;
  href: string;
};

const CAROUSEL_SLIDES: CarouselSlide[] = [
  { img: '/images/project_elm_st.png',       title: 'ELM ST Unit',            loc: 'Manchester, New Hampshire, USA',      badge: 'Multi-Family',      href: '/projects' },
  { img: '/images/project_sugar_villa.png',  title: 'SUGAR VILLA',            loc: 'Little Exuma, Bahamas',              badge: 'Luxury Estate',     href: '/projects' },
  { img: '/images/project_children_bldg.png',title: 'Children Building',      loc: '2714 Goat Creek Rd, Kerrville, TX',  badge: 'Educational',       href: '/projects' },
  { img: '/images/project_nelson_care.png',  title: 'Nelson Senior Home Care',loc: 'Unit Center, USA',                   badge: 'Senior Living',     href: '/projects' },
  { img: '/images/project_tm_heights.png',   title: 'TM HEIGHTS',             loc: 'Residential Apartment, USA',         badge: 'Apartment Complex', href: '/projects' },
  { img: '/images/project_wheel_house.png',  title: 'Wheel House ADU',        loc: 'Modular ADU, USA',                   badge: 'Steel Frame ADU',   href: '/projects' },
  { img: '/images/project_khan_house.png',   title: 'Khan House',             loc: 'Residential House, Canada',          badge: 'Mass Timber',       href: '/projects' },
  { img: '/images/project_senior_center.png',title: 'Nelson Care II',         loc: 'Unit Center Phase II, USA',          badge: 'Senior Living',     href: '/projects' },
];

function useCarouselConfig() {
  const [cfg, setCfg] = useState({ xMul: 200, yMul: 45, rotMul: 13, scaleR: 0.13, distDiv: 220, velDiv: 850, sensitivity: 260 });
  useEffect(() => {
    const update = () => {
      const w = window.innerWidth;
      if (w < 640) setCfg({ xMul: 100, yMul: 22, rotMul: 7, scaleR: 0.07, distDiv: 120, velDiv: 500, sensitivity: 180 });
      else if (w < 1024) setCfg({ xMul: 145, yMul: 32, rotMul: 10, scaleR: 0.10, distDiv: 165, velDiv: 660, sensitivity: 225 });
      else setCfg({ xMul: 200, yMul: 45, rotMul: 13, scaleR: 0.13, distDiv: 220, velDiv: 850, sensitivity: 260 });
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);
  return cfg;
}

function StackedCarouselCard({
  slide, index, total, progress, cfg,
}: {
  slide: CarouselSlide; index: number; total: number;
  progress: ReturnType<typeof useMotionValue<number>>;
  cfg: ReturnType<typeof useCarouselConfig>;
}) {


  const offset = useTransform(progress, (p: number) => {
    let diff = (index - p) % total;
    if (diff > total / 2) diff -= total;
    if (diff < -total / 2) diff += total;
    return diff;
  });

  const x      = useTransform(offset, (o: number) => o * cfg.xMul);
  const rotate = useTransform(offset, (o: number) => Math.abs(o) < 0.05 ? 0 : o * cfg.rotMul);
  const y      = useTransform(offset, (o: number) => Math.abs(o) < 0.05 ? 0 : Math.abs(o) * cfg.yMul);
  const scale  = useTransform(offset, (o: number) => 1 - Math.abs(o) * cfg.scaleR);
  const opacity = useTransform(offset,
    [-total / 2, -total / 2 + 0.5, 0, total / 2 - 0.5, total / 2],
    [0, 1, 1, 1, 0],
  );
  const zIndex  = useTransform(offset, (o: number) => Math.round(100 - Math.abs(o) * 10));
  const dimOverlay = useTransform(offset, [-2, -0.5, 0, 0.5, 2], [0.55, 0.22, 0, 0.22, 0.55]);
  const titleOpacity = useTransform(offset, [-0.5, 0, 0.5], [0, 1, 0]);

  return (
    <motion.div
      style={{ x, rotate, y, scale, opacity, zIndex, position: 'absolute' }}
      className={styles.cCard}
    >
      <Image
        src={slide.img}
        alt={slide.title}
        fill
        quality={88}
        sizes="(max-width:640px) 176px, (max-width:1024px) 240px, 300px"
        style={{ objectFit: 'cover', pointerEvents: 'none' }}
      />

      {/* dim overlay for non-center cards */}
      <motion.div
        style={{ opacity: dimOverlay }}
        className={styles.cDimOverlay}
      />

      {/* gradient bottom */}
      <div className={styles.cGradient} />

      {/* badge top-right */}
      <div className={styles.cBadge}>{slide.badge}</div>

      {/* center card text */}
      <div className={styles.cMeta}>
        <motion.p style={{ opacity: titleOpacity }} className={styles.cTitle}>
          {slide.title}
        </motion.p>
        <motion.p style={{ opacity: titleOpacity }} className={styles.cLoc}>
          {slide.loc}
        </motion.p>
      </div>
    </motion.div>
  );
}

function StackedCarousel({ slides }: { slides: CarouselSlide[] }) {
  const progress = useMotionValue(0);
  const startRef = useRef(0);
  const cfg = useCarouselConfig();
  const total = slides.length;

  return (
    <div className={styles.cWrap}>
      {/* drag surface — sits on top of all cards */}
      <motion.div
        drag="x"
        dragConstraints={{ left: 0, right: 0 }}
        onDragStart={() => { startRef.current = progress.get(); }}
        onDrag={(_, info) => { progress.set(progress.get() - info.delta.x / cfg.sensitivity); }}
        onDragEnd={(_, info) => {
          const shift = Math.round(-info.offset.x / cfg.distDiv + -info.velocity.x / cfg.velDiv);
          const clamped = Math.max(-3, Math.min(3, shift));
          animate(progress, Math.round(startRef.current) + clamped, {
            type: 'spring', stiffness: 200, damping: 30, mass: 1,
          });
        }}
        className={styles.cDragSurface}
      />
      {slides.map((slide, i) => (
        <StackedCarouselCard
          key={slide.title + i}
          slide={slide}
          index={i}
          total={total}
          progress={progress}
          cfg={cfg}
        />
      ))}
    </div>
  );
}

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

const SOFTWARE_CATEGORIES = [
  {
    title: '3D BIM & STRUCTURAL DETAILING',
    logos: [
      { name: 'Tekla Structures', img: '/images/software/tekla_structures.png' },
      { name: 'SDS2', img: '/images/software/sds2.png' },
      { name: 'Autodesk Revit', img: '/images/software/autodesk_revit.png' },
      { name: 'MiTek', img: '/images/software/mitek.png' },
      { name: 'StrucSoft', img: '/images/software/strucsoft.png' },
    ],
  },
  {
    title: 'STRUCTURAL ANALYSIS & DESIGN',
    logos: [
      { name: 'Tekla Tedds', img: '/images/software/tekla_tedds.png' },
      { name: 'RISA', img: '/images/software/risa.png' },
      { name: 'STAAD.Pro', img: '/images/software/staad_pro.png' },
      { name: 'SAP2000', img: '/images/software/sap2000.png' },
      { name: 'IES', img: '/images/software/ies.png' },
      { name: 'SkyCiv', img: '/images/software/skyciv.png' },
      { name: 'FORTEWEB', img: '/images/software/forteweb.png' },
      { name: 'ENERCALC', img: '/images/software/enercalc.png' },
      { name: 'StructurePoint', img: '/images/software/structurepoint.png' },
    ],
  },
  {
    title: 'CONNECTION DESIGN & STRUCTURAL ANALYSIS',
    logos: [
      { name: 'IDEA StatiCa', img: '/images/software/idea_statica.png' },
      { name: 'SIMPSON Strong-Tie', img: '/images/software/simpson_strong_tie.png' },
      { name: 'HILTI', img: '/images/software/hilti.png' },
    ],
  },
  {
    title: 'COLD-FORMED STEEL DESIGN',
    logos: [
      { name: 'FRAMECAD', img: '/images/software/framecad.png' },
      { name: 'AISI BuildUsingSteel', img: '/images/software/aisi.png' },
      { name: 'BC CALC', img: '/images/software/bccalc.png' },
      { name: 'CFS', img: '/images/software/cfs.png' },
    ],
  },
];

const PE_LICENSED_STATES = [
  ['Texas', 'Georgia', 'Florida', 'California', 'New York', 'New Jersey', 'Illinois', 'Washington', 'Washington D.C.', 'Massachusetts', 'Arizona', 'Michigan'],
  ['Indiana', 'Iowa', 'Nevada', 'Tennessee', 'Ohio', 'Colorado', 'Virginia', 'Maryland', 'Utah', 'Pennsylvania', 'N/S-Carolina', 'N/S-Dakota'],
];

const PE_STATS = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B2C" strokeWidth="2" width="24" height="24">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
      </svg>
    ),
    title: '25+',
    hasAccentBar: true,
    subtitle: 'States Licensed',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B2C" strokeWidth="2" width="24" height="24">
        <path d="M16 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8zM19 8v6M22 11h-6" />
      </svg>
    ),
    title: '100+',
    subtitle: 'Licensed PE Professionals',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B2C" strokeWidth="2" width="24" height="24">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8zM14 2v6h6M16 13H8M16 17H8M10 9H8" />
      </svg>
    ),
    title: '100%',
    subtitle: 'Compliance & Reliability',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B2C" strokeWidth="2" width="24" height="24">
        <path d="M11 15h2a2 2 0 100-4h-3c-.6 0-1.1.2-1.4.6L3 17m8-2l4-4m2.6 1.4L21 9M18 12l-4-4m-2 6l-3.3-3.3" />
      </svg>
    ),
    title: 'Trusted',
    subtitle: 'Across Government, Commercial & Industrial',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B2C" strokeWidth="2" width="24" height="24">
        <path d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5m0 0v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    title: 'Delivering',
    subtitle: 'Engineering Excellence Nationwide',
  },
];

const GLOBAL_HUBS = [
  {
    id: 'usa',
    country: 'USA',
    flag: '🇺🇸',
    role: 'Primary Engineering Hub',
    codes: ['AISC', 'IBC', 'ACI', 'ASCE 7'],
    desc: 'Full-service structural, MEP & BIM engineering for high-rise, commercial, and industrial facilities across 25+ licensed states.',
  },
  {
    id: 'canada',
    country: 'CANADA',
    flag: '🇨🇦',
    role: 'Structural & Cold-Formed Steel',
    codes: ['NBC', 'CSA S16', 'CSA A23.3'],
    desc: 'Advanced LGS detailing, timber structure design, and BIM coordination compliant with Canadian National Building Codes.',
  },
  {
    id: 'uk',
    country: 'UNITED KINGDOM',
    flag: '🇬🇧',
    role: 'BIM & Structural Detailing',
    codes: ['Eurocodes', 'BS EN 1993', 'BSI'],
    desc: 'Third-party peer reviews, complex steel connections, and Level 2 BIM modeling for commercial developments across Europe.',
  },
  {
    id: 'dubai',
    country: 'DUBAI (UAE)',
    flag: '🇦🇪',
    role: 'High-Rise & Mega Infrastructure',
    codes: ['Dubai Building Code', 'AISC', 'Eurocodes'],
    desc: 'Specialized structural engineering and rebar detailing for landmark skyscrapers, residential towers, and hospitality projects.',
  },
  {
    id: 'australia',
    country: 'AUSTRALIA',
    flag: '🇦🇺',
    role: 'Residential & Light Gauge Steel',
    codes: ['AS/NZS 1170', 'AS 4100', 'NCC'],
    desc: 'Cold-formed steel framing, residential structural calculations, and 3D Tekla detailing compliant with Australian Standards.',
  },
];

/* ═══════════════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState(0);
  const [activeFilter, setActiveFilter] = useState<'all' | 'structure' | 'arch' | 'bim' | 'mep'>('all');
  const reduced = useReducedMotion();

  // Hero mouse tilt — only active on non-reduced-motion devices
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  // Tighter spring = less lag frames
  const tiltX = useSpring(useTransform(mouseY, [-0.5, 0.5], [2, -2]), { stiffness: 120, damping: 35, mass: 0.5 });
  const tiltY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-2, 2]), { stiffness: 120, damping: 35, mass: 0.5 });
  const annotDepthX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 120, damping: 35, mass: 0.5 });

  const handleHeroMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [reduced, mouseX, mouseY]);

  // PE Stamping 3D Tilt — reduced range & tighter spring
  const peMouseX = useMotionValue(0);
  const peMouseY = useMotionValue(0);
  const peTiltX = useSpring(useTransform(peMouseY, [-0.5, 0.5], [3, -3]), { stiffness: 140, damping: 35, mass: 0.4 });
  const peTiltY = useSpring(useTransform(peMouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 140, damping: 35, mass: 0.4 });
  const peMapDepthX = useSpring(useTransform(peMouseX, [-0.5, 0.5], [-6, 6]), { stiffness: 150, damping: 40, mass: 0.4 });

  const handlePeMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    peMouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    peMouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [reduced, peMouseX, peMouseY]);

  // Global Engineering Work 3D Motion — reduced range
  const globalMouseX = useMotionValue(0);
  const globalMouseY = useMotionValue(0);
  const globalTiltX = useSpring(useTransform(globalMouseY, [-0.5, 0.5], [3, -3]), { stiffness: 140, damping: 35, mass: 0.4 });
  const globalTiltY = useSpring(useTransform(globalMouseX, [-0.5, 0.5], [-4, 4]), { stiffness: 140, damping: 35, mass: 0.4 });
  const globalMapDepthX = useSpring(useTransform(globalMouseX, [-0.5, 0.5], [-5, 5]), { stiffness: 150, damping: 40, mass: 0.4 });

  const handleGlobalMouseMove = useCallback((e: React.MouseEvent<HTMLElement>) => {
    if (reduced) return;
    const rect = e.currentTarget.getBoundingClientRect();
    globalMouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    globalMouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  }, [reduced, globalMouseX, globalMouseY]);

  // Contact Form State
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'Structural Engineering',
    message: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  // Use scrollYProgress directly — no double-spring wrapper (that caused double-frame lag)
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, -15]);
  const leftX = useTransform(scrollYProgress, [0, 0.5], [0, reduced ? 0 : -80]);
  const rightX = useTransform(scrollYProgress, [0, 0.5], [0, reduced ? 0 : 80]);
  const bgScale = useTransform(scrollYProgress, [0, 0.5], [1, reduced ? 1 : 1.03]);
  const leftAnnotX = useTransform(scrollYProgress, [0, 0.5], [0, reduced ? 0 : -60]);
  const rightAnnotX = useTransform(scrollYProgress, [0, 0.5], [0, reduced ? 0 : 60]);

  // Sync 3D building phase with scroll
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (v < 0.08) setPhase(0);
      else if (v < 0.18) setPhase(1);
      else if (v < 0.30) setPhase(2);
      else if (v < 0.42) setPhase(3);
      else if (v < 0.55) setPhase(4);
      else setPhase(5);
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
            className={styles.heroBgInner}
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
              className={styles.heroImg}
              style={{ objectFit: 'contain', objectPosition: 'right center' }}
            />
          </motion.div>
        </motion.div>

        {/* Light gradient overlay — clean white fade on left */}
        <div className={styles.heroOverlay} />


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

      {/* ══ 2. OUR SERVICES — Reference-Style Grid ════════ */}
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

          {/* 3-Column Card Grid */}
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

          {/* Stacked Draggable Carousel */}
          <FadeIn delay={0.1}>
            <StackedCarousel slides={CAROUSEL_SLIDES} />
          </FadeIn>

          {/* Drag hint */}
          <div className={styles.cDragHint}>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
              <path d="M14 8l-4 4 4 4"/>
            </svg>
            <span>drag to explore</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="14" height="14">
              <path d="M10 8l4 4-4 4"/>
            </svg>
          </div>

          {/* CTA row below carousel */}
          <div className={styles.cCtaRow}>
            <Link href="/projects" className={styles.projViewAll}>
              <span>View All 50+ Projects</span>
              <ArrowUpRight size={13} strokeWidth={2} />
            </Link>
          </div>
        </div>
      </section>

      {/* ══ 4. SOFTWARE WE USE — Engineering Tech Stack ═════════ */}
      <section className={styles.softSection} aria-label="Software We Use">
        <div className={styles.softInner}>
          {/* Header */}
          <FadeUp className={styles.softHeader}>
            <div className={styles.softHeaderLeft}>
              <span className={styles.softEyebrow}>ENGINEERING TECH STACK</span>
              <h2 className={styles.softH2}>
                Software We Use.
                <br />
                <em>Uncompromising Accuracy.</em>
              </h2>
              <p className={styles.softSubline}>
                We leverage world-class BIM, structural analysis, and detailing software suites to guarantee code compliance, constructability, and clash-free delivery.
              </p>
            </div>
            <div className={styles.softStatusBadge}>
              <span className={styles.softStatusDot} />
              <span>LICENSED ENTERPRISE SUITES</span>
            </div>
          </FadeUp>

          {/* Categorized 21 Software Logos Grid */}
          <div className={styles.softGroupContainer}>
            {SOFTWARE_CATEGORIES.map((group, groupIdx) => (
              <FadeUp key={group.title} delay={groupIdx * 0.08}>
                <div className={styles.softCategoryBlock}>
                  <h3 className={styles.softCategoryTitle}>{group.title}</h3>
                  <div className={styles.softLogoRow}>
                    {group.logos.map((soft, i) => (
                      <div key={soft.name} className={styles.softLogoCard}>
                        <div className={styles.softLogoImgWrap}>
                          <Image
                            src={soft.img}
                            alt={soft.name}
                            fill
                            quality={90}
                            sizes="180px"
                            style={{ objectFit: 'contain' }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4.5 PE STAMPING & APPROVAL ═══════════════════════════ */}
      <section
        className={styles.peSection}
        aria-label="PE Stamping & Approval"
        onMouseMove={handlePeMouseMove}
      >
        {/* Background CAD Blueprint Grid & Corner Geometric Overlays */}
        <div className={styles.peCadGridOverlay} />
        <div className={styles.peBgShapeTopLeft} />
        <div className={styles.peBgBlueprintTopRight} />

        <div className={styles.peInner}>
          {/* Header */}
          <FadeUp className={styles.peHeader}>
            <span className={styles.peEyebrow}>PE STAMPING & APPROVAL</span>
            <h2 className={styles.peH2}>
              Licensed to Engineer.
              <br />
              Trusted <span className={styles.peOrangeText}>Across the Nation.</span>
            </h2>
            <p className={styles.peSubline}>
              FAECOM INC holds Professional Engineer (PE) licenses across multiple states, ensuring compliance, credibility, and confidence in every project we deliver.
            </p>
          </FadeUp>

          {/* Main Visual Content (12-Column Grid: 7 cols Map + 5 cols Licensed States Panel) */}
          <motion.div
            className={styles.peGrid}
            style={{ rotateX: peTiltX, rotateY: peTiltY, transformStyle: 'preserve-3d' }}
          >
            {/* Left: US Pin Map (7 Columns ~60%) */}
            <FadeUp delay={0.1} className={styles.peMapWrap}>
              <motion.div className={styles.peMapCardContainer} style={{ x: peMapDepthX }}>
                <div className={styles.peMapFadedGrid} />
                <div className={styles.peMapRadialGlow} />
                <div className={styles.peMapImgBox}>
                  <Image
                    src="/images/transparent_pin_map.png"
                    alt="FAECOM PE Licensed States Map"
                    fill
                    quality={95}
                    priority
                    sizes="(max-width: 900px) 100vw, 58vw"
                    style={{ objectFit: 'contain' }}
                  />
                </div>
              </motion.div>
            </FadeUp>

            {/* Right: PE LICENSED IN Card (5 Columns ~40%) */}
            <FadeUp delay={0.2} className={styles.peCardWrap}>
              <div className={styles.peCard}>
                {/* Header Badge */}
                <div className={styles.peCardHeaderBadge}>
                  <div className={styles.peStampIconBox}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#FF6B2C" strokeWidth="2.2" width="20" height="20">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
                    </svg>
                  </div>
                  <span className={styles.peCardBadgeText}>PE LICENSED IN</span>
                </div>

                {/* 2 Equal Columns State List */}
                <div className={styles.peStateGrid}>
                  {PE_LICENSED_STATES.map((col, cIdx) => (
                    <ul key={cIdx} className={styles.peStateList}>
                      {col.map((state) => (
                        <li key={state} className={styles.peStateItem}>
                          <span className={styles.peStateDot}>•</span>
                          <span className={styles.peStateName}>{state}</span>
                        </li>
                      ))}
                    </ul>
                  ))}
                </div>
              </div>
            </FadeUp>
          </motion.div>

          {/* Bottom Floating Metrics Bar (5 Equal Columns) */}
          <FadeUp delay={0.3}>
            <div className={styles.peRibbonStrip}>
              {PE_STATS.map((st, i) => (
                <div key={i} className={styles.peRibbonCell}>
                  <div className={styles.peRibbonIconBox}>{st.icon}</div>
                  <div className={styles.peRibbonMeta}>
                    <h4 className={styles.peRibbonVal}>{st.title}</h4>
                    {st.hasAccentBar && <div className={styles.peStatAccentBar} />}
                    <p className={styles.peRibbonLbl}>{st.subtitle}</p>
                  </div>
                </div>
              ))}
            </div>
          </FadeUp>
        </div>
      </section>

      {/* ══ 4.6 GLOBAL ENGINEERING WORK — 3D Interactive World Showcase ══ */}
      <section
        className={styles.globalSection}
        aria-label="Global Engineering Work"
        onMouseMove={handleGlobalMouseMove}
      >
        {/* Background Architectural Atmosphere */}
        <div className={styles.globalCadGridOverlay} />
        <div className={styles.globalRadialGlowBg} />

        <div className={styles.globalInner}>
          {/* Header */}
          <FadeUp className={styles.globalHeader}>
            <span className={styles.globalEyebrow}>GLOBAL REACH & IMPACT</span>
            <h2 className={styles.globalH2}>
              Global Engineering Work.
              <br />
              <span className={styles.globalOrangeText}>Engineering</span> Without Borders.
            </h2>
            <p className={styles.globalSubline}>
              Our engineering expertise spans multiple continents, delivering code-compliant, clash-free structural &amp; MEP solutions for marquee developments worldwide.
            </p>
          </FadeUp>

          {/* Main 3D World Map Interactive Stage */}
          <motion.div
            className={styles.globalStage}
            style={{ rotateX: globalTiltX, rotateY: globalTiltY, transformStyle: 'preserve-3d' }}
          >
            <motion.div className={styles.globalMapWrap} style={{ x: globalMapDepthX }}>
              {/* World Map Transparent Asset */}
              <div className={styles.globalMapImgBox}>
                <Image
                  src="/images/global_map_transparent.png"
                  alt="FAECOM Global Engineering Work Map"
                  fill
                  quality={95}
                  priority
                  sizes="(max-width: 1200px) 100vw, 85vw"
                  style={{ objectFit: 'contain' }}
                />
              </div>

              {/* Animated 3D Flight Arc Connections & Radar Beacons */}
              <svg className={styles.globalFlightArcSvg} viewBox="0 0 1000 500" fill="none">
                {/* USA (HQ) -> CANADA */}
                <path d="M 220 180 Q 215 150 210 120" stroke="rgba(255, 106, 0, 0.4)" strokeWidth="2" strokeDasharray="4 4" />
                {/* USA (HQ) -> UK */}
                <path d="M 220 180 Q 330 80 450 140" stroke="rgba(255, 106, 0, 0.5)" strokeWidth="2" strokeDasharray="6 6" className={styles.animatedFlightArc} />
                {/* USA (HQ) -> DUBAI */}
                <path d="M 220 180 Q 400 60 580 210" stroke="rgba(255, 106, 0, 0.5)" strokeWidth="2" strokeDasharray="6 6" className={styles.animatedFlightArc2} />
                {/* USA (HQ) -> AUSTRALIA */}
                <path d="M 220 180 Q 500 380 780 360" stroke="rgba(255, 106, 0, 0.4)" strokeWidth="2" strokeDasharray="6 6" className={styles.animatedFlightArc3} />
              </svg>

              {/* Radar Beacons & Hotspot Badges */}
              <div className={`${styles.globalBeacon} ${styles.beaconUsa}`}>
                <span className={styles.beaconRing} />
                <span className={styles.beaconDot} />
                <div className={styles.beaconBadge}>
                  <span className={styles.beaconFlag}>🇺🇸</span>
                  <span className={styles.beaconTitle}>USA (HQ)</span>
                </div>
              </div>

              <div className={`${styles.globalBeacon} ${styles.beaconCanada}`}>
                <span className={styles.beaconRing} />
                <span className={styles.beaconDot} />
                <div className={styles.beaconBadge}>
                  <span className={styles.beaconFlag}>🇨🇦</span>
                  <span className={styles.beaconTitle}>CANADA</span>
                </div>
              </div>

              <div className={`${styles.globalBeacon} ${styles.beaconUk}`}>
                <span className={styles.beaconRing} />
                <span className={styles.beaconDot} />
                <div className={styles.beaconBadge}>
                  <span className={styles.beaconFlag}>🇬🇧</span>
                  <span className={styles.beaconTitle}>UK</span>
                </div>
              </div>

              <div className={`${styles.globalBeacon} ${styles.beaconDubai}`}>
                <span className={styles.beaconRing} />
                <span className={styles.beaconDot} />
                <div className={styles.beaconBadge}>
                  <span className={styles.beaconFlag}>🇦🇪</span>
                  <span className={styles.beaconTitle}>DUBAI</span>
                </div>
              </div>

              <div className={`${styles.globalBeacon} ${styles.beaconAus}`}>
                <span className={styles.beaconRing} />
                <span className={styles.beaconDot} />
                <div className={styles.beaconBadge}>
                  <span className={styles.beaconFlag}>🇦🇺</span>
                  <span className={styles.beaconTitle}>AUSTRALIA</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* 5 Global Hubs Information Cards Grid */}
          <div className={styles.globalHubsGrid}>
            {GLOBAL_HUBS.map((hub, index) => (
              <FadeUp key={hub.id} delay={index * 0.08}>
                <div className={styles.globalHubCard}>
                  <div className={styles.hubCardHeader}>
                    <span className={styles.hubFlag}>{hub.flag}</span>
                    <h3 className={styles.hubCountry}>{hub.country}</h3>
                  </div>
                  <span className={styles.hubRoleBadge}>{hub.role}</span>
                  <p className={styles.hubDesc}>{hub.desc}</p>
                  <div className={styles.hubCodesWrap}>
                    {hub.codes.map((c) => (
                      <span key={c} className={styles.hubCodeChip}>{c}</span>
                    ))}
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4.7 CONTACT FORM SECTION (WHITE BACKGROUND) ═════════ */}
      <section className={styles.contactSection} aria-label="Contact Us">
        <div className={styles.contactInner}>
          <FadeUp className={styles.contactHeader}>
            <span className={styles.contactEyebrow}>GET IN TOUCH</span>
            <h2 className={styles.contactH2}>
              Let's Build Something
              <br />
              <span className={styles.contactOrangeText}>Extraordinary.</span>
            </h2>
            <p className={styles.contactSubline}>
              Have a structural, BIM, or MEP engineering project? Submit your inquiry below to schedule a consultation with our licensed PE team.
            </p>
          </FadeUp>

          <div className={styles.contactGrid}>
            {/* Left: Contact Info Card */}
            <FadeUp delay={0.1} className={styles.contactInfoCard}>
              <h3 className={styles.infoTitle}>Connect With Us</h3>
              <p className={styles.infoDesc}>
                Whether you need preliminary structural feasibility, PE stamping, or complete BIM coordination, our engineers are ready to assist.
              </p>

              <div className={styles.infoList}>
                <div className={styles.infoItem}>
                  <div className={styles.infoIconBox}>
                    <Mail size={18} strokeWidth={2} color="#FF6A00" />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Email Inquiries</span>
                    <a href="mailto:info@faecom.com" className={styles.infoValue}>info@faecom.com</a>
                    <a href="mailto:max@faecom.com" className={styles.infoValueSub}>max@faecom.com</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconBox}>
                    <Phone size={18} strokeWidth={2} color="#FF6A00" />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>Direct Call / Phone</span>
                    <a href="tel:+12026888858" className={styles.infoValue}>+1 (202)-688-8858</a>
                    <a href="tel:+12062572889" className={styles.infoValueSub}>+1 (206)-257-2889</a>
                  </div>
                </div>

                <div className={styles.infoItem}>
                  <div className={styles.infoIconBox}>
                    <MapPin size={18} strokeWidth={2} color="#FF6A00" />
                  </div>
                  <div>
                    <span className={styles.infoLabel}>US Headquarters Office</span>
                    <span className={styles.infoValueText}>9407 NE Vancouver Mall Dr, Vancouver, WA 98662, United States</span>
                  </div>
                </div>
              </div>

              <div className={styles.assuranceBadge}>
                <svg viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2" width="20" height="20">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10zM9 12l2 2 4-4" />
                </svg>
                <span>Licensed PE Engineering • 25+ US States</span>
              </div>
            </FadeUp>

            {/* Right: Contact Form Container */}
            <FadeUp delay={0.2} className={styles.contactFormCard}>
              {formSubmitted ? (
                <div className={styles.successState}>
                  <div className={styles.successIconBox}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="#FF6A00" strokeWidth="2.5" width="32" height="32">
                      <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
                      <path d="M22 4L12 14.01l-3-3" />
                    </svg>
                  </div>
                  <h3 className={styles.successTitle}>Inquiry Submitted Successfully!</h3>
                  <p className={styles.successDesc}>
                    Thank you for reaching out. A Senior Structural Engineer from FAECOM will review your project details and respond within 24 hours.
                  </p>
                  <button
                    type="button"
                    onClick={() => setFormSubmitted(false)}
                    className={styles.resetBtn}
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form className={styles.contactForm} onSubmit={handleFormSubmit}>
                  <div className={styles.formRow2}>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-name" className={styles.formLabel}>Full Name *</label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-email" className={styles.formLabel}>Work Email *</label>
                      <input
                        id="contact-email"
                        type="email"
                        required
                        placeholder="john@company.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={styles.formInput}
                      />
                    </div>
                  </div>

                  <div className={styles.formRow2}>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-phone" className={styles.formLabel}>Phone Number</label>
                      <input
                        id="contact-phone"
                        type="tel"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={styles.formInput}
                      />
                    </div>
                    <div className={styles.formGroup}>
                      <label htmlFor="contact-service" className={styles.formLabel}>Required Service *</label>
                      <select
                        id="contact-service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className={styles.formSelect}
                      >
                        <option value="Structural Engineering">Structural Engineering</option>
                        <option value="Architectural BIM">Architectural BIM Solutions</option>
                        <option value="PE Stamping">PE Stamping & Peer Review</option>
                        <option value="LGSF / Cold Formed">LGSF & Cold-Formed Steel</option>
                        <option value="ICF Construction">ICF Engineering</option>
                        <option value="Timber Engineering">Mass Timber Engineering</option>
                        <option value="MEP Engineering">MEP Engineering</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.formGroup}>
                    <label htmlFor="contact-message" className={styles.formLabel}>Project Details / Scope *</label>
                    <textarea
                      id="contact-message"
                      required
                      rows={4}
                      placeholder="Describe your project, building location, estimated timeline, or specific engineering requirements..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={styles.formTextarea}
                    />
                  </div>

                  <button type="submit" className={styles.submitBtn}>
                    <span>Submit Project Inquiry</span>
                    <ArrowUpRight size={18} strokeWidth={2} />
                  </button>
                </form>
              )}
            </FadeUp>
          </div>
        </div>
      </section>
    </>
  );
}
