'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const BADGES = ['IBC 2021', 'ACI 318', 'ASCE 7', 'Fox Blocks', 'Nudura', 'Logix ICF', 'Revit', 'LEED Ready'];

const ICF_SERVICES = [
  { title: 'ICF Structural Engineering & Design', desc: 'Optimized for load-bearing capacity and full IBC/ACI code compliance.' },
  { title: 'Seismic & Wind Load Analysis', desc: 'Ensuring structural stability in seismic zones and extreme weather conditions.' },
  { title: 'Thermal & Energy Performance', desc: 'Superior thermal insulation that reduces heating and cooling costs significantly.' },
  { title: 'ICF Wall & Floor Systems Design', desc: 'Custom wall and floor configurations for both strength and insulation.' },
  { title: 'BIM Integration for ICF Projects', desc: '3D modeling for precise coordination across all building disciplines.' },
  { title: 'Cost & Material Optimization', desc: 'Reducing waste and improving project efficiency without compromising safety.' },
  { title: 'ICF Construction Detailing', desc: 'Seamless integration from design documentation through to construction support.' },
  { title: 'Code-Compliant Engineering', desc: 'Meeting IBC, ACI, ASCE, and global ICF standards.' },
];

const WHY_ICF = [
  { t: 'Energy Efficiency', d: 'Superior thermal insulation reduces heating and cooling costs by up to 50%.' },
  { t: 'Structural Strength', d: 'Reinforced concrete core provides enhanced durability vs. traditional framing.' },
  { t: 'Disaster Resilience', d: 'Excellent performance in seismic zones, fires, and extreme weather events.' },
  { t: 'Sustainability', d: 'Eco-friendly materials with significantly reduced carbon footprint.' },
  { t: 'Soundproofing', d: 'Exceptional acoustic insulation for quieter, more comfortable environments.' },
  { t: 'Faster Construction', d: 'Streamlined assembly reduces labor requirements and project timelines.' },
];

export default function ICFPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
        <PageHero
          label="Engineering Services"
          title={<span>ICF (Insulated</span>}
          titleEm={<span>Concrete Form) Solutions</span>}
          subtitle={<span>Energy-efficient concrete construction systems offering superior insulation, structural strength, and significantly faster installation — engineered for resilience and sustainability.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443935/ICF.jpg"
          imageScale="0.8"
        />
      </motion.div>

      {/* Stats */}
      <div className={styles.statsStrip}>
        <div className={styles.statsRow}>
          {[
            { num: '50%', label: 'Energy Cost Reduction' },
            { num: 'R-23+', label: 'Wall Insulation Value' },
            { num: 'Cat 5', label: 'Hurricane Rated' },
            { num: '4hr', label: 'Fire Rating Capable' },
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
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>ICF Engineering</div>
        <h2 className={styles.sectionTitle}>High-Performance ICF Systems for <em>Sustainable Construction</em></h2>
        <p className={styles.sectionDesc}>FAECOM provides advanced ICF solutions for residential, commercial, and disaster-resistant structures — delivering engineering-backed designs that combine thermal performance with structural excellence.</p>
        <div className={styles.badgesWrap}>
          {BADGES.map((b) => <span key={b} className={styles.badge}><span className={styles.badgeDot}/>{b}</span>)}
        </div>
        <div className={styles.twoCol}>
          <div className={styles.imgStack}>
            <div className={styles.imgCard}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1787045994/icf_what_include.png" alt="ICF Wall Construction Site" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.imgCard}>
              <Image src="/images/expertise_rc.png" alt="ICF Wall Formwork Panels" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className={styles.contentCol}>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Our ICF Services Include</div>
              <ul className={styles.blockList}>
                {ICF_SERVICES.map((s) => (
                  <li key={s.title} className={styles.blockItem}><span className={styles.dot}/><span><strong>{s.title}</strong> — {s.desc}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why ICF */}
      <div className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Why ICF?</div>
          <h2 className={styles.sectionTitle}>Why Insulated Concrete Form <em>Outperforms</em></h2>
          <div className={styles.cardsGrid}>
            {WHY_ICF.map((item) => (
              <div key={item.t} className={styles.serviceCard}>
                <div className={styles.cardTitle}>{item.t}</div>
                <div className={styles.cardDesc}>{item.d}</div>
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
