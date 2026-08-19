'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const BADGES = ['Revit MEP', 'ASHRAE 90.1', 'ASHRAE 62.1', 'NFPA 70', 'NFPA 13', 'IPC', 'IMC', 'IBC 2021'];

const MEP_SYSTEMS = [
  {
    title: 'HVAC Engineering',
    img: 'https://res.cloudinary.com/yqs3dtap/image/upload/v1786522341/MELSON_CARE_UNIT_USA_MEP.png',
    items: [
      'Load calculations and system design.',
      'Ductwork layout and airflow optimization.',
      'Energy-efficient heating, cooling, and ventilation solutions.',
      'Permit drawings and compliance documentation.',
    ],
  },
  {
    title: 'Electrical Engineering',
    img: 'https://res.cloudinary.com/yqs3dtap/image/upload/v1786522340/MATTHEW-_CAMPBELL_RESIDENC_MEP.png',
    items: [
      'Power distribution and electrical system design.',
      'Lighting layouts, photometric analysis, and energy-efficient solutions.',
      'Fire alarm and emergency power systems.',
      'Electrical permit drawings and PE seal approvals.',
    ],
  },
  {
    title: 'Plumbing Engineering',
    img: 'https://res.cloudinary.com/yqs3dtap/image/upload/v1786522340/DRESCHER-DRESCHER_RESIDENCE_MEP.png',
    items: [
      'Water supply and drainage system design.',
      'Stormwater and wastewater management solutions.',
      'Fire suppression and sprinkler system design.',
      'Permit-ready plumbing drawings with regulatory compliance.',
    ],
  },
  {
    title: 'Fire Protection Engineering',
    img: 'https://res.cloudinary.com/yqs3dtap/image/upload/v1786522340/FELLOWSHIP_CHURCH_USA_Mep.png',
    items: [
      'Fire suppression system design and layout.',
      'NFPA-compliant sprinkler and smoke control systems.',
      'Fire alarm integration with building management systems.',
      'Emergency egress and fire safety compliance reports.',
    ],
  },
];

const INDUSTRIES = ['Commercial Buildings', 'Residential Complexes', 'Healthcare Facilities', 'Educational Institutions', 'Industrial & Manufacturing Units', 'Hotels & Hospitality', 'Data Centers'];

export default function MEPPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
        <PageHero
          label="Engineering Services"
          title={<span>MEP</span>}
          titleEm={<span>Engineering</span>}
          subtitle={<span>Mechanical, Electrical, and Plumbing engineering designed for safety, efficiency, and long-term performance — BIM-coordinated across all building disciplines.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443927/mep.jpg"
        />
      </motion.div>

      {/* Stats */}
      <div className={styles.statsStrip}>
        <div className={styles.statsRow}>
          {[
            { num: '4', label: 'MEP Disciplines Covered' },
            { num: 'Revit', label: 'BIM Platform' },
            { num: 'NFPA + IBC', label: 'Code Compliance Standard' },
            { num: '7+', label: 'Industries Served' },
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
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>MEP Engineering</div>
        <h2 className={styles.sectionTitle}>Comprehensive MEP Solutions, <em>BIM-Coordinated</em></h2>
        <p className={styles.sectionDesc}>FAECOM delivers innovative, sustainable MEP engineering with BIM-driven coordination for optimized execution, regulatory compliance, and seamless multi-discipline integration.</p>
        <div className={styles.badgesWrap}>
          {BADGES.map((b) => <span key={b} className={styles.badge}><span className={styles.badgeDot}/>{b}</span>)}
        </div>
      </section>

      {/* MEP Systems — alternating rows */}
      {MEP_SYSTEMS.map((sys, i) => (
        <div key={sys.title} className={i % 2 === 0 ? '' : styles.sectionAlt} style={{ padding: '0' }}>
          <div style={{ maxWidth: '1320px', margin: '0 auto', padding: 'clamp(48px,6vw,80px) var(--gutter, 32px)' }}>
            <div className={i % 2 === 0 ? styles.twoCol : styles.twoCol} style={{ direction: i % 2 === 0 ? 'ltr' : 'rtl' }}>
              <div style={{ direction: 'ltr' }}>
                <div className={styles.imgCardLarge}>
                  <Image src={sys.img} alt={sys.title} fill style={{ objectFit: 'cover' }} />
                </div>
              </div>
              <div style={{ direction: 'ltr' }} className={styles.contentCol}>
                <div className={styles.block}>
                  <div className={styles.blockTitle}>{sys.title}</div>
                  <ul className={styles.blockList}>
                    {sys.items.map((item) => (
                      <li key={item} className={styles.blockItem}><span className={styles.dot}/><span>{item}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* BIM Integration + Industries */}
      <div className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px' }}>
            <div>
              <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>BIM-Integrated MEP</div>
              <h3 className={styles.sectionTitle} style={{ fontSize: 'clamp(20px,3vw,28px)' }}>Clash-Free <em>BIM Coordination</em></h3>
              <div className={styles.block}>
                <ul className={styles.blockList}>
                  {[
                    '3D modeling and clash detection for seamless coordination.',
                    'Revit-based MEP modeling for precise design execution.',
                    'Real-time project collaboration and system optimization.',
                  ].map((b) => (
                    <li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Industries</div>
              <h3 className={styles.sectionTitle} style={{ fontSize: 'clamp(20px,3vw,28px)' }}>Industries We <em>Serve</em></h3>
              <div className={styles.cardsGrid} style={{ gridTemplateColumns: '1fr' }}>
                {INDUSTRIES.map((ind) => (
                  <div key={ind} className={styles.serviceCard} style={{ padding: '16px 20px' }}>
                    <div className={styles.cardTitle}>{ind}</div>
                  </div>
                ))}
              </div>
            </div>
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
