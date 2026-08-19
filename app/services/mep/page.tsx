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

const INDUSTRIES = [
  'Commercial Buildings', 'Residential Complexes', 'Healthcare Facilities',
  'Educational Institutions', 'Industrial & Manufacturing Units', 'Hotels & Hospitality', 'Data Centers',
];

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

      {/* Section 1 — Intro */}
      <section className={styles.section}>
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>MEP Engineering</div>
        <h2 className={styles.sectionTitle}>Comprehensive MEP Solutions, <em>BIM-Coordinated</em></h2>
        <p className={styles.sectionDesc}>FAECOM delivers innovative, sustainable MEP engineering with BIM-driven coordination for optimised execution, regulatory compliance, and seamless multi-discipline integration.</p>
        <div className={styles.badgesWrap}>
          {BADGES.map((b) => <span key={b} className={styles.badge}><span className={styles.badgeDot}/>{b}</span>)}
        </div>

        {/* 4-System image cards + bullet lists */}
        <div className={styles.cardsGrid} style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
          {MEP_SYSTEMS.map((sys) => (
            <div key={sys.title} className={styles.serviceCard} style={{ gap: '0', padding: '0', overflow: 'hidden' }}>
              <div style={{ position: 'relative', width: '100%', height: '180px', flexShrink: 0 }}>
                <Image src={sys.img} alt={sys.title} fill style={{ objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '20px 20px 22px' }}>
                <div className={styles.cardTitle} style={{ marginBottom: '12px' }}>{sys.title}</div>
                <ul className={styles.blockList}>
                  {sys.items.map((item) => (
                    <li key={item} className={styles.blockItem}><span className={styles.dot}/><span>{item}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* BIM + Industries */}
      <div className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className={styles.twoCol}>
            <div>
              <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>BIM-Integrated MEP</div>
              <h3 className={styles.sectionTitle}>Clash-Free <em>BIM Coordination</em></h3>
              <div className={styles.block}>
                <ul className={styles.blockList}>
                  {[
                    '3D modeling and clash detection for seamless multi-discipline coordination.',
                    'Revit-based MEP modeling for precise design execution and documentation.',
                    'Real-time project collaboration and system optimization across teams.',
                  ].map((b) => (
                    <li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>
                  ))}
                </ul>
              </div>
              <div className={styles.whyBox} style={{ marginTop: '24px' }}>
                <div className={styles.whyBoxTitle}>Why MEP BIM Integration?</div>
                <ul className={styles.blockList}>
                  {[
                    'Eliminates clashes between MEP systems before construction starts.',
                    'Reduces costly site rework and change orders significantly.',
                    'Produces accurate material takeoffs directly from the model.',
                    'Enables energy performance simulation in the design phase.',
                  ].map((b) => (
                    <li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Industries We Serve</div>
              <h3 className={styles.sectionTitle}>MEP for Every <em>Building Type</em></h3>
              <div className={styles.cardsGrid} style={{ gridTemplateColumns: '1fr' }}>
                {INDUSTRIES.map((ind) => (
                  <div key={ind} className={styles.serviceCard} style={{ padding: '14px 18px', flexDirection: 'row', alignItems: 'center', gap: '12px' }}>
                    <span className={styles.dot} style={{ marginTop: 0, flexShrink: 0 }}/>
                    <div className={styles.cardTitle} style={{ fontWeight: 600, fontSize: '14px' }}>{ind}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.deliverables}>
        <TwoDeliverablesSections />
      </div>

      <CtaSection />
    </div>
  );
}
