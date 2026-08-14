'use client';
import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform } from 'framer-motion';
import {
  Building2,
  Users,
  HardHat,
  Award,
  ShieldCheck,
  Lightbulb,
  Target,
  ArrowRight,
} from 'lucide-react';
import styles from './AboutHeroArchitectural.module.css';

const STATS = [
  {
    icon: Building2,
    val: '10+',
    label: 'Years of Experience',
  },
  {
    icon: Users,
    val: '250+',
    label: 'Successful Projects',
  },
  {
    icon: HardHat,
    val: '100+',
    label: 'Expert Professionals',
  },
  {
    icon: Award,
    val: '25+',
    label: 'Industry Awards',
  },
];

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'Honesty & transparency in every calculation.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'Cutting-edge BIM & structural solutions.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'Seamless teamwork with global partners.',
  },
  {
    icon: Target,
    title: 'Excellence',
    desc: 'Uncompromised PE engineering standards.',
  },
];

export default function AboutHeroArchitectural() {
  const sectionRef = useRef<HTMLElement>(null);
  
  // Industry-Level Architectural Scroll Parallax
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  const leftScrollX = useTransform(scrollYProgress, [0, 0.75], [0, -240]);
  const textScrollX = useTransform(scrollYProgress, [0, 0.75], [0, 240]);
  const textScrollY = useTransform(scrollYProgress, [0, 0.75], [0, -60]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.85], [1, 0.2]);

  return (
    <section ref={sectionRef} className={styles.heroShell} aria-label="About Hero">
      {/* Background Canvas */}
      <div className={styles.lightBgCanvas} />
      <div className={styles.ambientGlowTopLeft} />

      {/* Floating CAD Coordinate Badge Top Right */}
      <motion.div
        className={styles.cadCoordBadge}
        aria-hidden
        initial={{ opacity: 0, y: -18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <span className={styles.coordDot} />
        <span className={styles.coordText}>CAD REF // X: 42.84  Y: 108.92</span>
      </motion.div>

      {/* Main Full-Bleed Grid Container */}
      <div className={styles.heroMainGrid}>
        
        {/* Left Column: Hero Image (3D Architectural Fly In + Scroll Left Offset) */}
        <motion.div
          className={styles.leftColImage}
          initial={{ opacity: 0, x: -200, rotateY: -28, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, rotateY: 0, scale: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          style={{
            x: leftScrollX,
            opacity: heroOpacity,
            perspective: 1200,
            transformStyle: 'preserve-3d',
          }}
        >
          <div className={styles.freeHeroImgWrapper}>
            <Image
              src="/images/aboutusherofromleft.png"
              alt="FAECOM Architectural Building Render"
              fill
              priority
              quality={98}
              sizes="(max-width: 900px) 100vw, 75vw"
              style={{ objectFit: 'fill', objectPosition: 'left center' }}
            />
          </div>
        </motion.div>

        {/* Right Column: Masked Kinetic Line-by-Line Editorial Reveal */}
        <motion.div
          className={styles.rightColText}
          style={{
            x: textScrollX,
            y: textScrollY,
            opacity: heroOpacity,
          }}
        >
          {/* Page Designation Badge */}
          <div style={{ overflow: 'hidden', paddingBottom: '6px' }}>
            <motion.div
              className={styles.eyebrowTag}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              <motion.span
                className={styles.eyebrowDash}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.7, delay: 0.35, ease: 'easeOut' }}
              />
              <span style={{ color: '#FF6B2C', fontWeight: 800, letterSpacing: '0.18em' }}>ABOUT FAECOM INC</span>
            </motion.div>
          </div>

          {/* Main Editorial Headline — Industry Masked Line Unfold */}
          <h1 className={styles.mainHeading}>
            <div style={{ overflow: 'hidden', display: 'block' }}>
              <motion.span
                className={styles.headingTitleDark}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
              >
                Designing the Future.
              </motion.span>
            </div>

            <div style={{ overflow: 'hidden', display: 'block', marginTop: '4px' }}>
              <motion.em
                className={styles.headingTitleItalic}
                initial={{ y: '110%', opacity: 0 }}
                animate={{ y: '0%', opacity: 1 }}
                transition={{ duration: 1, delay: 0.42, ease: [0.16, 1, 0.3, 1] }}
              >
                Engineering the Impossible.
              </motion.em>
            </div>
          </h1>

          {/* Subtext Animated Line */}
          <motion.div
            className={styles.subtextDivider}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.52, ease: 'easeOut' }}
          />

          {/* Description Paragraph — Masked Rise */}
          <div style={{ overflow: 'hidden' }}>
            <motion.p
              className={styles.descriptionParagraph}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 1, delay: 0.58, ease: [0.16, 1, 0.3, 1] }}
            >
              <strong>FAECOM</strong> is a multidisciplinary engineering firm providing reliable and cost-effective Insulated Concrete Form (ICF) solutions, Structural, Architectural, MEP, and BIM Design, along with Structural Drawings, Design Calculations, Engineering Review & Stamp, and Detailing. We help Architects, Contractors, Fabricators, Developers, and Owners successfully deliver projects through practical, code-compliant, and efficient engineering.
            </motion.p>
          </div>

          {/* Action Buttons — Masked Kinetic Entrance */}
          <div style={{ overflow: 'hidden', paddingTop: '4px' }}>
            <motion.div
              className={styles.buttonGroup}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: '0%', opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.68, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link href="/services" className={styles.filledOrangeBtn}>
                <span>EXPLORE SERVICES</span>
                <ArrowRight size={18} strokeWidth={2.2} />
              </Link>
              <Link href="/projects" className={styles.outlinedNavyBtn}>
                <span>OUR PROJECTS</span>
                <ArrowRight size={18} strokeWidth={2.2} />
              </Link>
            </motion.div>
          </div>
        </motion.div>

      </div>

      {/* Floating White Stats Card Bar */}
      <motion.div
        className={styles.floatingStatsContainer}
        initial={{ opacity: 0, y: 50, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
      >
        <div className={styles.floatingStatsCard}>
          {STATS.map((st, idx) => {
            const Icon = st.icon;
            return (
              <div key={st.label} className={styles.statItem}>
                <div className={styles.statIconBadge}>
                  <Icon size={26} strokeWidth={1.8} className={styles.statIconSvg} />
                </div>
                <div className={styles.statTextWrap}>
                  <span className={styles.statVal}>{st.val}</span>
                  <span className={styles.statLabel}>{st.label}</span>
                </div>
                {idx < STATS.length - 1 && <div className={styles.statDivider} />}
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Bottom Dark Navy Values Strip */}
      <motion.div
        className={styles.bottomNavyValuesStrip}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.85 }}
      >
        <div className={styles.navyValuesInner}>
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div key={val.title} className={styles.valueItem}>
                <div className={styles.valueIconOutlineCircle}>
                  <Icon size={22} strokeWidth={1.8} className={styles.valueIconSvg} />
                </div>
                <div className={styles.valueTextGroup}>
                  <h3 className={styles.valueTitle}>{val.title}</h3>
                  <p className={styles.valueDesc}>{val.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}
