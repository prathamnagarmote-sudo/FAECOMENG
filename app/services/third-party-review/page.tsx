'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Settings, FileText, CheckSquare } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import SERVICES_IMAGES from '@/data/servicesImages.json';
import styles from '../service.module.css';

const BADGES = ['IBC 2021', 'ASCE 7', 'ACI 318', 'AISC 360', 'CBC', 'NBCC', 'Eurocodes', 'PE Stamped'];

const REVIEW_CATEGORIES = [
  {
    Icon: ShieldCheck,
    title: 'CODE COMPLIANCE REVIEW',
    items: [
      'IBC, ASCE 7, ACI 318, and AISC compliance checks.',
      'Seismic and wind load parameter verification.',
      'Fire safety rating analysis for structural elements.',
      'Identify deficiencies prior to municipal submission.',
    ],
  },
  {
    Icon: Zap,
    title: 'VALUE ENGINEERING',
    items: [
      'Alternative framing analysis for measurable cost reduction.',
      'Material strength class and section optimization.',
      'Foundation redesign based on geotechnical data.',
      'Reduction of redundant reinforcements and steel weight.',
      'Constructability reviews to accelerate scheduling.',
    ],
  },
  {
    Icon: Settings,
    title: 'INDEPENDENT PEER REVIEW',
    items: [
      'Unbiased, third-party structural analysis and parallel load calculations.',
      'Constructability and erection sequence audits.',
      'Mitigation of designer liability and design errors.',
      'Licensed Professional Engineer (PE) stamps and sign-off.',
    ],
  },
];

const DELIVERABLES = [
  {
    Icon: FileText,
    title: 'VALUE ENGINEERING REPORT',
    desc: 'A comprehensive comparative analysis demonstrating precise cost savings, optimized material usage, and structural improvements without compromising safety or architectural intent.',
  },
  {
    Icon: CheckSquare,
    title: 'PEER REVIEW CERTIFICATION',
    desc: 'PE-stamped letters of structural adequacy ensuring absolute compliance with all governing jurisdictions — streamlining the permitting and approval process.',
  },
];

export default function ThirdPartyReviewPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
        <PageHero
          label="Engineering Services"
          title={<span>Third-Party Review &</span>}
          titleEm={<span>Value Engineering</span>}
          subtitle={<span>Independent PE-stamped peer reviews, safety audits, and material cost optimization — safeguarding structural safety while reducing construction costs and schedule timelines.</span>}
        />
      </motion.div>

      {/* Stats */}
      <div className={styles.statsStrip}>
        <div className={styles.statsRow}>
          {[
            { num: 'PE Stamped', label: 'All Review Reports' },
            { num: 'All US', label: 'States Covered' },
            { num: '15–30%', label: 'Typical Cost Savings' },
            { num: 'IBC + ASCE', label: 'Primary Code Basis' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1 — Overview */}
      <section className={styles.section}>
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Third-Party Review</div>
        <h2 className={styles.sectionTitle}>High-Precision Structural Reviews That <em>Protect Your Project</em></h2>
        <p className={styles.sectionDesc}>We perform third-party structural design audits, code reviews, and comprehensive value engineering — delivering PE-stamped reports that streamline permitting while optimizing cost and safety.</p>
        <div className={styles.badgesWrap}>
          {BADGES.map((b) => <span key={b} className={styles.badge}><span className={styles.badgeDot}/>{b}</span>)}
        </div>
        <div className={styles.twoCol}>
          <div>
            <div className={styles.imgCardLarge}>
              <Image src={SERVICES_IMAGES['third-party-review'].expertise} alt="Third-Party Review Engineering" fill style={{ objectFit: 'contain', padding: '20px' }} />
            </div>
          </div>
          <div className={styles.contentCol}>
            <div className={styles.block}>
              <div className={styles.blockTitle}>What We Review</div>
              <ul className={styles.blockList}>
                {[
                  'Independent structural peer review and code compliance audits (IBC, Eurocodes, etc.).',
                  'Value engineering analysis to optimize concrete strength classes, steel profiles, and spans.',
                  'Foundation and retaining system evaluation for geotechnical optimization.',
                  'PE-stamped peer review reports for municipality permit clearance.',
                  'Constructability and erection sequence audits.',
                  'Seismic and wind load parameter verification and re-analysis.',
                ].map((b) => (
                  <li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>
                ))}
              </ul>
            </div>
            <div className={styles.whyBox}>
              <div className={styles.whyBoxTitle}>Why Independent Review?</div>
              <ul className={styles.blockList}>
                {[
                  'Unbiased verification catches design errors before construction.',
                  'Reduces engineer-of-record liability exposure.',
                  'Often required by AHJ for high-importance structures.',
                  'Optimizes cost without compromising structural integrity.',
                ].map((b) => (
                  <li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Review Categories */}
      <div className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Our Review Scope</div>
          <h2 className={styles.sectionTitle}>Three Pillars of <em>Independent Review</em></h2>
          <div className={styles.cardsGrid}>
            {REVIEW_CATEGORIES.map((cat) => (
              <div key={cat.title} className={styles.serviceCard} style={{ gap: '20px' }}>
                <div className={styles.cardIcon}>
                  <cat.Icon size={22} />
                </div>
                <div className={styles.cardTitle}>{cat.title}</div>
                <ul className={styles.blockList}>
                  {cat.items.map((item) => (
                    <li key={item} className={styles.blockItem}><span className={styles.dot}/><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Section 3 — Deliverables */}
      <section className={styles.section}>
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Deliverables</div>
        <h2 className={styles.sectionTitle}>PE-Stamped <em>Report Deliverables</em></h2>
        <div className={styles.cardsGrid} style={{ gridTemplateColumns: '1fr 1fr' }}>
          {DELIVERABLES.map((d) => (
            <div key={d.title} className={styles.serviceCard} style={{ gap: '20px' }}>
              <div className={styles.cardIcon}>
                <d.Icon size={22} />
              </div>
              <div className={styles.cardTitle}>{d.title}</div>
              <div className={styles.cardDesc}>{d.desc}</div>
            </div>
          ))}
        </div>
      </section>

      <CtaSection />
    </div>
  );
}
