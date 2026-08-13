import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import styles from './software.module.css';

export const metadata: Metadata = {
  title: 'Software We Know | FAECOM INC',
  description: 'FAECOM leverages 21+ world-class engineering software platforms — from Tekla Structures and Autodesk Revit to SAP2000, RISA, and IDEA StatiCa — to deliver precision structural and BIM engineering.',
};

const SOFTWARE_CATEGORIES = [
  {
    id: 'bim',
    title: '3D BIM & Structural Detailing',
    description: 'Industry-leading platforms for clash-free, LOD 400 digital twin delivery.',
    logos: [
      { name: 'Tekla Structures', img: '/images/software/tekla_structures.png' },
      { name: 'SDS2',             img: '/images/software/sds2.png' },
      { name: 'Autodesk Revit',   img: '/images/software/autodesk_revit.png', scale: 1.18 },
      { name: 'MiTek',            img: '/images/software/mitek.png' },
      { name: 'StrucSoft',        img: '/images/software/strucsoft.png' },
    ],
  },
  {
    id: 'analysis',
    title: 'Structural Analysis & Design',
    description: 'Comprehensive FEA and code-check platforms spanning all structural systems.',
    logos: [
      { name: 'Tekla Tedds',     img: '/images/software/tekla_tedds.webp', scale: 1.12 },
      { name: 'RISA',            img: '/images/software/risa.png' },
      { name: 'STAAD.Pro',       img: '/images/software/staad_pro.png', scale: 1.10 },
      { name: 'SAP2000',         img: '/images/software/sap2000.png', scale: 1.10 },
      { name: 'IES',             img: '/images/software/ies.png' },
      { name: 'SkyCiv',          img: '/images/software/skyciv.png', scale: 1.12 },
      { name: 'StructurePoint',  img: '/images/software/newstructurepointlogo.png', scale: 1.10 },
    ],
  },
  {
    id: 'connection',
    title: 'Connection Design & Structural Analysis',
    description: 'Precision tools for anchor, fastener, and joint engineering to code.',
    logos: [
      { name: 'IDEA StatiCa',       img: '/images/software/idea_statica.png' },
      { name: 'Simpson Strong-Tie',  img: '/images/software/simpson_strong_tie.png' },
      { name: 'HILTI',              img: '/images/software/hilti.png' },
    ],
  },
  {
    id: 'cfs',
    title: 'Cold-Formed Steel Design',
    description: 'Specialised cold-formed framing and light gauge steel design suites.',
    logos: [
      { name: 'FRAMECAD',           img: '/images/software/framecad.png' },
      { name: 'AISI BuildUsingSteel', img: '/images/software/aisi.png' },
      { name: 'BC CALC',            img: '/images/software/bccalc.png' },
      { name: 'CFS',                img: '/images/software/cfs.png' },
    ],
  },
];

const STATS = [
  { num: '21+', label: 'Software Platforms' },
  { num: '4',   label: 'Specialised Domains' },
  { num: '100%', label: 'Licensed Enterprise' },
  { num: '10+',  label: 'Years of Expertise' },
];

export default function SoftwarePage() {
  return (
    <main className={styles.page}>

      {/* ── Hero ─────────────────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} aria-hidden />
        <div className={styles.heroGrid} aria-hidden />
        <div className={styles.heroInner}>
          <span className={styles.eyebrow}>ENGINEERING TECH STACK</span>
          <h1 className={styles.heroH1}>
            Software We Know.<br />
            <em>Tools We Master.</em>
          </h1>
          <p className={styles.heroSub}>
            From structural analysis to clash-free BIM coordination, FAECOM engineers work daily
            with 21+ industry-leading platforms to deliver precision, speed, and code compliance
            on every project.
          </p>

          {/* Stats strip */}
          <div className={styles.statsRow}>
            {STATS.map(s => (
              <div key={s.label} className={styles.stat}>
                <span className={styles.statNum}>{s.num}</span>
                <span className={styles.statLabel}>{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Category Sections ─────────────────────────────────── */}
      <section className={styles.categoriesSection}>
        <div className={styles.catInner}>
          {SOFTWARE_CATEGORIES.map((cat, ci) => (
            <div key={cat.id} className={styles.categoryBlock} id={cat.id}>

              {/* Category header */}
              <div className={styles.catHeader}>
                <span className={styles.catIndex}>0{ci + 1}</span>
                <div>
                  <h2 className={styles.catTitle}>{cat.title}</h2>
                  <p className={styles.catDesc}>{cat.description}</p>
                </div>
              </div>

              {/* Logo grid */}
              <div className={styles.logoGrid}>
                {cat.logos.map(logo => (
                  <div key={logo.name} className={styles.logoCard}>
                    <div
                      className={styles.logoImgWrap}
                      style={logo.scale ? { transform: `scale(${logo.scale})` } : undefined}
                    >
                      <Image
                        src={logo.img}
                        alt={logo.name}
                        fill
                        quality={90}
                        sizes="(max-width: 640px) 140px, 200px"
                        style={{ objectFit: 'contain' }}
                      />
                    </div>
                    <span className={styles.logoName}>{logo.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <span className={styles.ctaEyebrow}>READY TO COLLABORATE?</span>
          <h2 className={styles.ctaH2}>
            Let&apos;s Build Something<br />
            <em>Extraordinary Together.</em>
          </h2>
          <p className={styles.ctaSub}>
            Our engineers are fluent in the tools your project demands. Tell us what you&apos;re building.
          </p>
          <Link href="/contact" className={styles.ctaBtn}>
            Start a Project
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 17L17 7M17 7H7M17 7v10" />
            </svg>
          </Link>
        </div>
      </section>

    </main>
  );
}
