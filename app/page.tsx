'use client';
import { useRef, useState, useEffect, lazy, Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import dynamic from 'next/dynamic';
import { motion, useInView, useScroll, useTransform, AnimatePresence } from 'framer-motion';
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
  hidden:  { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' as const } },
};

/* ── Data ────────────────────────────────────────────────────── */
const SERVICES = [
  {
    n: '01', title: 'Architectural BIM',
    desc: 'Intelligent 3D models that unite design, coordination and lifecycle planning into one living digital twin.',
    tags: ['Revit', 'LOD 400', 'Clash Detection'],
    img: '/images/about_building.png',
    accent: '#21145F',
  },
  {
    n: '02', title: 'Structural Engineering',
    desc: 'PE-stamped structural systems engineered for safety, performance and constructability across all typologies.',
    tags: ['PE Stamped', 'ETABS', 'STAAD'],
    img: '/images/project_commercial.png',
    accent: '#2C237A',
  },
  {
    n: '03', title: 'LGSF Engineering',
    desc: 'Light Gauge Steel Framing — precision-engineered cold-formed steel for speed, strength and sustainability.',
    tags: ['Cold-Formed', 'AISI S100', 'CFS Designer'],
    img: '/images/project_residential.png',
    accent: '#FF6B2C',
  },
  {
    n: '04', title: 'ICF Construction',
    desc: 'Insulated Concrete Forms delivering superior energy performance, disaster resistance and acoustic comfort.',
    tags: ['Net Zero Ready', 'R-Value 50+', 'Seismic'],
    img: '/images/cta_building.png',
    accent: '#21145F',
  },
  {
    n: '05', title: 'MEP Engineering',
    desc: 'Fully coordinated Mechanical, Electrical and Plumbing systems — integrated from design through commissioning.',
    tags: ['HVAC', 'Electrical', 'Plumbing'],
    img: '/images/project_industrial.png',
    accent: '#2C237A',
  },
  {
    n: '06', title: 'Timber Engineering',
    desc: 'Mass timber and engineered wood systems that marry timeless warmth with carbon-negative performance.',
    tags: ['CLT', 'Glulam', 'NLT'],
    img: '/images/about_building.png',
    accent: '#FF6B2C',
  },
  {
    n: '07', title: 'Industrial Buildings',
    desc: 'Heavy-duty industrial facilities engineered for operational efficiency, safety and long-term performance.',
    tags: ['Pre-Engineered', 'High Bay', 'Mezzanine'],
    img: '/images/project_industrial.png',
    accent: '#21145F',
  },
];

const PROJECTS = [
  {
    title: 'Corporate Headquarters',
    loc: 'New York · USA',
    sector: 'Commercial',
    services: ['BIM', 'MEP', 'Structure'],
    img: '/images/project_commercial.png',
    size: 'hero', // 2×2 large
  },
  {
    title: 'Luxury Residence',
    loc: 'Little Exuma · Bahamas',
    sector: 'Residential',
    services: ['BIM', 'ICF', 'Structure'],
    img: '/images/about_building.png',
    size: 'tall',
  },
  {
    title: 'Industrial Plant',
    loc: 'Texas · USA',
    sector: 'Industrial',
    services: ['Structure', 'MEP'],
    img: '/images/project_industrial.png',
    size: 'wide',
  },
  {
    title: 'Institutional Complex',
    loc: 'Ontario · Canada',
    sector: 'Institutional',
    services: ['BIM', 'Timber', 'Structure'],
    img: '/images/project_residential.png',
    size: 'normal',
  },
];

const STATS = [
  { val: '10+',  label: 'Countries Served',       icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.66 0 3-4 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4-3-9s1.34-9 3-9' },
  { val: '300+', label: 'Projects Completed',     icon: 'M3 21h18M3 7v14M21 7v14M3 7l9-4 9 4' },
  { val: '150+', label: 'Happy Clients',           icon: 'M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2M9 11a4 4 0 100-8 4 4 0 000 8zM23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75' },
  { val: '50+',  label: 'Expert Professionals',   icon: 'M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2M12 11a4 4 0 100-8 4 4 0 000 8z' },
  { val: '98%',  label: 'Client Satisfaction',    icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z' },
];

const PROCESS = [
  { n: '01', name: 'Discovery',    desc: 'Deep dive into your vision, constraints and project goals.' },
  { n: '02', name: 'Design',       desc: 'BIM models, structural analysis and architectural concepts.' },
  { n: '03', name: 'Engineering',  desc: 'PE-stamped drawings, MEP integration and code compliance.' },
  { n: '04', name: 'Construction', desc: 'Site coordination, quality control and phased delivery.' },
  { n: '05', name: 'Handover',     desc: 'Comprehensive documentation and post-project support.' },
];

/* ═══════════════════════════════════════════════════════════════
   HOME PAGE
═══════════════════════════════════════════════════════════════ */
export default function Home() {
  const heroRef   = useRef<HTMLElement>(null);
  const [phase, setPhase] = useState(0);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroScale   = useTransform(scrollYProgress, [0, 0.6], [1, 1.08]);

  // Sync 3D building phase with scroll
  useEffect(() => {
    const unsub = scrollYProgress.on('change', (v) => {
      if (v < 0.08)       setPhase(0); // blueprint
      else if (v < 0.18)  setPhase(1); // steel frame
      else if (v < 0.30)  setPhase(2); // concrete
      else if (v < 0.42)  setPhase(3); // MEP
      else if (v < 0.55)  setPhase(4); // glass
      else                setPhase(5); // complete
    });
    return () => unsub();
  }, [scrollYProgress]);

  return (
    <>
      {/* ══ 1. HERO ══════════════════════════════════════════════ */}
      <section className={styles.hero} ref={heroRef} aria-label="Hero">

        {/* Full-width background photo */}
        <motion.div
          className={styles.heroBg}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          <Image
            src="/images/hero_multidisciplinary.png"
            alt="FAECOM — Multidisciplinary Architectural, Structural, BIM, and MEP Engineering"
            fill
            priority
            quality={95}
            sizes="100vw"
            style={{ objectFit: 'contain', objectPosition: 'right center' }}
          />
        </motion.div>

        {/* Light gradient overlay — clean white fade on left */}
        <div className={styles.heroOverlay} />

        {/* ── Engineering annotation callouts matching reference image ───── */}
        <div className={styles.annotations}>
          {/* 1. Structural Engineering (Top Left) */}
          <motion.div
            className={`${styles.annot} ${styles.annotStruct}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
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
            <div className={styles.pointerLineDark} />
          </motion.div>

          {/* 2. Architectural Design (Middle Left) */}
          <motion.div
            className={`${styles.annot} ${styles.annotArch}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4, duration: 0.7 }}
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
            <div className={styles.pointerLineOrange} />
          </motion.div>

          {/* 3. BIM Modeling (Bottom Left) */}
          <motion.div
            className={`${styles.annot} ${styles.annotBim}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.7 }}
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
            <div className={styles.pointerLineDark} />
          </motion.div>

          {/* 4. MEP Systems (Top Right) */}
          <motion.div
            className={`${styles.annot} ${styles.annotMep}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.7 }}
          >
            <div className={styles.pointerLineOrangeRight} />
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

          {/* 5. Coordinated Solutions (Middle Right) */}
          <motion.div
            className={`${styles.annot} ${styles.annotCoord}`}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.7, duration: 0.7 }}
          >
            <div className={styles.pointerLineDarkRight} />
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
        </div>

        {/* ── Hero Left Content ─────────────────────────────── */}
        <motion.div className={styles.heroContent} style={{ opacity: heroOpacity }}>
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

          {/* 4-Line Heading matching reference image */}
          <h1 className={styles.heroH1}>
            <motion.span
              className={styles.heroLineNavy}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              DESIGNING
            </motion.span>
            <motion.span
              className={styles.heroLineOrange}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.8 }}
            >
              TOMORROW.
            </motion.span>
            <motion.span
              className={styles.heroLineNavy}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              DELIVERING
            </motion.span>
            <motion.span
              className={styles.heroLineOrange}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.95, duration: 0.8 }}
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

        {/* ── 5-Stat Ribbon ─────────────────────────────────────── */}
        <motion.div
          className={styles.statsBar}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 0.9 }}
        >
          {STATS.map((st) => (
            <div key={st.label} className={styles.statCell}>
              <div className={styles.statIconWrap}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="22" height="22">
                  <path d={st.icon} />
                </svg>
              </div>
              <div className={styles.statTextWrap}>
                <div className={styles.statVal}>{st.val}</div>
                <div className={styles.statLabel}>{st.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Corner brackets — architectural detail */}
        <div className={styles.cornerTL} aria-hidden />
        <div className={styles.cornerBR} aria-hidden />
      </section>

      {/* ══ 2. WHO WE ARE ════════════════════════════════════════ */}
      <section className={styles.whoSection} aria-label="About FAECOM">
        <div className={styles.whoInner}>
          <SlideIn dir="left" className={styles.whoLeft}>
            <span className="lbl-primary">Who We Are</span>
            <h2 className={styles.whoH2}>
              We don't just design buildings.<br />
              <em>We engineer the future.</em>
            </h2>
            <p className={styles.whoDesc}>
              FAECOM INC is a multidisciplinary engineering and design firm delivering innovative,
              sustainable, and future-ready solutions across the globe — from North America to the
              Middle East and South Asia.
            </p>
            <Link href="/about" className={styles.whoLink}>
              <span>Discover Our Story</span>
              <ArrowUpRight size={14} strokeWidth={2} />
            </Link>
          </SlideIn>

          <FadeUp className={styles.whoImageCol}>
            <div className={styles.whoImageWrap}>
              <Image
                src="/images/who_we_are.png"
                alt="FAECOM architectural 3D model showcasing our engineering expertise"
                width={560}
                height={560}
                quality={88}
                style={{ objectFit: 'contain', width: '100%', height: 'auto' }}
              />
              <motion.div
                className={styles.whoFloatCard}
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              >
                <span className={styles.whoFloatNum}>20+</span>
                <span className={styles.whoFloatLabel}>Years of Trusted Excellence</span>
              </motion.div>
            </div>
          </FadeUp>

          <Stagger className={styles.whoStats}>
            {STATS.map((st) => (
              <motion.div key={st.label} variants={itemV} className={styles.whoStatCard}>
                <div className={styles.whoStatIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="18" height="18">
                    <path d={st.icon} />
                  </svg>
                </div>
                <div>
                  <div className={styles.whoStatNum}>{st.val}</div>
                  <div className={styles.whoStatLbl}>{st.label}</div>
                </div>
              </motion.div>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ══ 3. SERVICES — Engineering Modules ════════════════════ */}
      <section className={styles.servSection} aria-label="Our Services">
        <div className={styles.servInner}>
          <FadeUp className={styles.servHeader}>
            <span className="lbl-light">Our Services</span>
            <h2 className={styles.servH2}>
              End-to-end<br />
              <em>engineering solutions</em>
            </h2>
            <Link href="/services" className={styles.servViewAll}>
              <span>View All Services</span>
              <ArrowUpRight size={13} strokeWidth={2} />
            </Link>
          </FadeUp>

          {/* Asymmetric masonry modules */}
          <div className={styles.servGrid}>
            {SERVICES.map((svc, i) => (
              <FadeUp key={svc.title} delay={i * 0.06}>
                <Link href="/services" className={styles.servCard}>
                  <div className={styles.servCardBg}>
                    <Image
                      src={svc.img}
                      alt={svc.title}
                      fill
                      quality={75}
                      sizes="(max-width:900px) 90vw, 30vw"
                      style={{ objectFit: 'cover', filter: 'brightness(0.25) saturate(0.3)' }}
                    />
                  </div>
                  <div className={styles.servCardBody}>
                    <span className={styles.servCardNum}>{svc.n}</span>
                    <div className={styles.servCardMain}>
                      <h3 className={styles.servCardTitle}>{svc.title}</h3>
                      <p className={styles.servCardDesc}>{svc.desc}</p>
                      <div className={styles.servCardTags}>
                        {svc.tags.map((t) => (
                          <span key={t} className={styles.servTag}>{t}</span>
                        ))}
                      </div>
                      <div className={styles.servCardArrow}>
                        <ArrowUpRight size={16} strokeWidth={2} />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeUp>
            ))}
          </div>
        </div>
      </section>

      {/* ══ 4. PROJECTS — Luxury Masonry Grid ═══════════════════ */}
      <section className={styles.projSection} aria-label="Featured Projects">
        <div className={styles.projInner}>
          <div className={styles.projHeader}>
            <FadeUp>
              <span className="lbl-primary">Featured Projects</span>
              <h2 className={styles.projH2}>
                Built to<br /><em>last forever</em>
              </h2>
            </FadeUp>
            <FadeUp delay={0.1}>
              <Link href="/projects" className={styles.projViewAll}>
                <span>View All Projects</span>
                <ArrowUpRight size={13} strokeWidth={2} />
              </Link>
            </FadeUp>
          </div>

          <div className={styles.projGrid}>
            {/* Hero card */}
            <FadeIn delay={0.0} className={styles.projHero}>
              <Link href="/projects" className={styles.projCard}>
                <div className={styles.projCardImg}>
                  <Image
                    src={PROJECTS[0].img}
                    alt={PROJECTS[0].title}
                    fill quality={82}
                    sizes="(max-width:900px) 100vw, 50vw"
                    style={{ objectFit: 'cover' }}
                  />
                </div>
                <div className={styles.projCardOverlay} />
                <div className={styles.projCardInfo}>
                  <div>
                    <p className={styles.projCardLoc}>{PROJECTS[0].loc}</p>
                    <h3 className={styles.projCardTitle}>{PROJECTS[0].title}</h3>
                  </div>
                  <div className={styles.projCardTags}>
                    {PROJECTS[0].services.map((s) => (
                      <span key={s} className={styles.projTag}>{s}</span>
                    ))}
                  </div>
                </div>
                <div className={styles.projCardBtn}>
                  <ArrowUpRight size={18} strokeWidth={2} />
                </div>
              </Link>
            </FadeIn>

            {/* Side cards */}
            <div className={styles.projSide}>
              {PROJECTS.slice(1).map((p, i) => (
                <FadeIn key={p.title} delay={0.1 + i * 0.08} className={styles.projSideCard}>
                  <Link href="/projects" className={styles.projCard}>
                    <div className={styles.projCardImg}>
                      <Image
                        src={p.img}
                        alt={p.title}
                        fill quality={78}
                        sizes="(max-width:900px) 100vw, 25vw"
                        style={{ objectFit: 'cover' }}
                      />
                    </div>
                    <div className={styles.projCardOverlay} />
                    <div className={styles.projCardInfo}>
                      <div>
                        <p className={styles.projCardLoc}>{p.loc}</p>
                        <h3 className={styles.projCardTitle}>{p.title}</h3>
                      </div>
                      <div className={styles.projCardTags}>
                        {p.services.map((s) => (
                          <span key={s} className={styles.projTag}>{s}</span>
                        ))}
                      </div>
                    </div>
                    <div className={styles.projCardBtn}>
                      <ArrowUpRight size={14} strokeWidth={2} />
                    </div>
                  </Link>
                </FadeIn>
              ))}
            </div>
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
