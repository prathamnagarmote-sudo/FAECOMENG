'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const BADGES = ['AISC 360-21', 'AISC 341-16', 'ACI 318-19', 'ASTM A992', 'NBCC 2020', 'CSA S16', 'AWS D1.1', 'ETABS', 'SAP2000'];

const SERVICES = [
  { title: 'Structural Steel Analysis & Design', desc: 'Ensuring stability, efficiency, and load-bearing capacity in all steel structures.' },
  { title: 'Steel Modeling, Detailing & Shop Drawings', desc: 'Precision-driven 3D models and fabrication-ready drawings for seamless execution.' },
  { title: 'Structural Engineering Reports', desc: 'Detailed documentation covering calculations, compliance, and approval requirements.' },
  { title: 'Code-Compliant Engineering', desc: 'Designs strictly adhering to AISC, ASTM, ACI, and global structural codes.' },
  { title: 'Value-Engineered Designs', desc: 'Optimized solutions to reduce material use while maximizing structural strength.' },
  { title: 'BIM Integration for Steel', desc: 'Advanced 3D modeling and coordination to reduce errors and streamline workflows.' },
  { title: 'PE Seal & Stamping', desc: 'Ensuring regulatory compliance with nationwide approvals across all US states.' },
  { title: 'Custom Structural Solutions', desc: 'Unique and tailored designs for high-rise buildings, bridges, and modular structures.' },
];

const CODES = [
  { t: 'AISC 360-21', d: 'Steel Building Standards' },
  { t: 'AISC 341-16', d: 'Seismic Steel Design' },
  { t: 'AISC 358-16', d: 'Prequalified Connections' },
  { t: 'ACI 318-19', d: 'Concrete Design Standards' },
  { t: 'ASTM A992/A572', d: 'Structural Steel Grades' },
  { t: 'ASTM A36/A500', d: 'Carbon Steel Standards' },
  { t: 'AISI S100-16', d: 'Cold-Formed Steel' },
  { t: 'NBCC 2020', d: 'Canada Building Code' },
  { t: 'CSA S136-16', d: 'Cold-Formed Steel Canada' },
  { t: 'CSA S16-14', d: 'Steel Structure Design' },
  { t: 'ANSI/AWS D1.1', d: 'Steel & Aluminum Welding' },
  { t: 'RCSC 2020', d: 'High-Strength Bolt Joints' },
  { t: 'SDI Manual', d: 'Steel Deck Standards' },
  { t: 'OSHA 29 CFR 1926', d: 'Steel Erection Safety' },
];

export default function StructuralSteelPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
        <PageHero
          label="Engineering Services"
          title={<span>Structural</span>}
          titleEm={<span>Steel Solutions</span>}
          subtitle={<span>Heavy structural steel detailing, connection engineering, and fabrication-ready documentation — delivered with engineering precision from analysis to PE-stamped shop drawings.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443972/structural_steel_solutions.png"
          imageScale="1.3, 0.9"
        />
      </motion.div>

      {/* Stats */}
      <div className={styles.statsStrip}>
        <div className={styles.statsRow}>
          {[
            { num: '14+', label: 'Design Codes Followed' },
            { num: '300+', label: 'Steel Projects Delivered' },
            { num: 'All US', label: 'States PE Stamping' },
            { num: 'High-Rise', label: 'to Industrial Capability' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1 */}
      <section className={styles.section}>
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Structural Steel</div>
        <h2 className={styles.sectionTitle}>High-Quality Steel Engineering for <em>Every Structure Type</em></h2>
        <p className={styles.sectionDesc}>FAECOM specializes in code-compliant, cost-effective, and optimized structural steel solutions across high-rise buildings, industrial facilities, bridges, and modular structures.</p>
        <div className={styles.badgesWrap}>
          {BADGES.map((b) => <span key={b} className={styles.badge}><span className={styles.badgeDot}/>{b}</span>)}
        </div>
        <div className={styles.twoCol}>
          <div className={styles.imgStack}>
            <div className={styles.imgCard}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786521241/CHARTER_SCHOOL_BRONX_NY.png" alt="Charter School Bronx NY — Structural Steel" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.imgCard}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786449074/EMMONS_BAY_HOTEL_2902_EMMONS_AVENUE_BROOKLYN_NY.png" alt="Emmons Bay Hotel Brooklyn NY" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.imgCard}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786521241/Glenmark_USA.png" alt="Glenmark USA Structural Steel Project" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className={styles.contentCol}>
            {SERVICES.map((s) => (
              <div key={s.title} className={styles.block} style={{ gap: '6px' }}>
                <div className={styles.blockTitle}>{s.title}</div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Codes Section */}
      <div className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Code Compliance</div>
          <h2 className={styles.sectionTitle}>Codes & Standards <em>We Follow</em></h2>
          <p className={styles.sectionDesc}>All FAECOM structural steel designs comply with globally recognized codes for safety, reliability, and regulatory approval.</p>
          <div className={styles.codesGrid}>
            {CODES.map((c) => (
              <div key={c.t} className={styles.codeTag}>
                <span className={styles.codeTagTitle}>{c.t}</span>
                <span className={styles.codeTagDesc}>{c.d}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className={styles.deliverables}>
        <TwoDeliverablesSections />
      </div>

      <CtaSection />
    </div>
  );
}
