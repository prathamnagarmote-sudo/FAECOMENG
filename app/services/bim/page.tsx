'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const BADGES = ['Revit', 'AutoCAD', 'LOD 300/400', 'IFC', 'ISO 19650', 'AIA G202', 'NBIMS-US', 'COBie'];

const SERVICES = [
  {
    title: 'Floor Plans',
    desc: 'Accurate room layouts, door/window openings, dimensions, and spatial arrangements ready for permit submission.',
  },
  {
    title: 'Elevations',
    desc: 'Exterior facades, finishes, rooflines, and precise height details for design review and approvals.',
  },
  {
    title: 'Sections & Details',
    desc: 'Cross-sectional views with structural elements, material callouts, stairs, railings, and wall assembly details.',
  },
  {
    title: '3D BIM Modeling',
    desc: 'Detailed interior and exterior 3D architectural models with full LOD 300/400 compliance.',
  },
  {
    title: 'Renderings & Visualizations',
    desc: 'Photorealistic renderings for client presentations, stakeholder approvals, and marketing packages.',
  },
  {
    title: 'Permit & Construction Sets',
    desc: 'Full architectural, structural, and MEP drawing sets prepared to local building code and permit standards.',
  },
  {
    title: 'Zoning & Land-Use Analysis',
    desc: 'Regulatory compliance checks, setback analysis, and zoning verification during the planning phase.',
  },
  {
    title: 'Sustainability Integration',
    desc: 'Green design principles, LEED documentation support, and energy-efficient building strategies.',
  },
];

export default function ArchitecturalBIMPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
        <PageHero
          label="Engineering Services"
          title={<span>Architectural</span>}
          titleEm={<span>BIM Services</span>}
          subtitle={<span>Intelligent 3D BIM models that improve planning, eliminate design conflicts, and enhance multi-discipline project coordination from concept to construction.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443962/architectural_bim_services.jpg"
          imageScale="1.15, 1"
        />
      </motion.div>

      {/* Stats Strip */}
      <div className={styles.statsStrip}>
        <div className={styles.statsRow}>
          {[
            { num: 'LOD 400', label: 'Max Model Detail Level' },
            { num: '500+', label: 'BIM Projects Completed' },
            { num: '10+', label: 'Countries Served' },
            { num: '24–48 hr', label: 'Typical Turnaround' },
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
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Architectural BIM</div>
        <h2 className={styles.sectionTitle}>BIM-Integrated Architectural Models That <em>Streamline Every Phase</em></h2>
        <p className={styles.sectionDesc}>FAECOM offers complete architectural BIM solutions tailored to design, documentation, and compliance needs across residential, commercial, and industrial projects globally.</p>
        <div className={styles.badgesWrap}>
          {BADGES.map((b) => <span key={b} className={styles.badge}><span className={styles.badgeDot}/>{b}</span>)}
        </div>
        <div className={styles.twoCol}>
          <div className={styles.imgStack}>
            <div className={styles.imgCard}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786532615/CAMPBELL_RESIDENCE_WALTON_USA_ABIM.png" alt="Campbell Residence Walton USA — Architectural BIM" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.imgCard}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1787032485/1loadbearing.png" alt="Multistory Apartment BIM Model" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className={styles.contentCol}>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Architectural Drawings</div>
              <ul className={styles.blockList}>
                {[
                  { t: 'Floor Plans', d: 'Accurate room layouts, openings, dimensions, and spatial arrangements.' },
                  { t: 'Elevations', d: 'Exterior facades, finishes, rooflines, and height details.' },
                  { t: 'Sections', d: 'Cross-sectional views with structural elements, materials, and internal components.' },
                  { t: 'Details', d: 'High-precision stairs, railings, wall assemblies, and architectural features.' },
                ].map((item) => (
                  <li key={item.t} className={styles.blockItem}><span className={styles.dot}/><span><strong>{item.t}</strong> — {item.d}</span></li>
                ))}
              </ul>
            </div>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Permit & Construction Set</div>
              <ul className={styles.blockList}>
                {[
                  { t: 'Construction Documentation', d: 'Full architectural, structural, and MEP drawings for construction.' },
                  { t: 'Code Compliance', d: 'Drawings prepared per building codes and local regulations.' },
                  { t: 'Permit Assistance', d: 'Support with drawing sets and coordination for permit submissions.' },
                ].map((item) => (
                  <li key={item.t} className={styles.blockItem}><span className={styles.dot}/><span><strong>{item.t}</strong> — {item.d}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Services Grid */}
      <div className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Full Service Suite</div>
          <h2 className={styles.sectionTitle}>Everything You Need from <em>Design to Permit</em></h2>
          <div className={styles.cardsGrid}>
            {SERVICES.map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.cardTitle}>{s.title}</div>
                <div className={styles.cardDesc}>{s.desc}</div>
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
