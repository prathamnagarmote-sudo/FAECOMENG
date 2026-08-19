'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const BADGES = ['Revit', 'Navisworks', 'BIM 360', 'COBie', 'IFC', 'LOD 400', 'Dynamo', 'Enscape', '4D BIM'];

const FEATURES = [
  { title: 'Photorealistic 3D Renders', desc: 'High-quality, lifelike images for real-time design visualization and client approvals.' },
  { title: '360° Virtual Walkthroughs', desc: 'Interactive exploration of building interiors & exteriors for immersive stakeholder engagement.' },
  { title: 'Architectural & Interior Visualization', desc: 'Detailed facade, layout, material, and furniture visualizations for design review.' },
  { title: 'Interactive 3D Models', desc: 'Real-time manipulation enabling faster client feedback and design iteration cycles.' },
  { title: 'Virtual Reality (VR) Experiences', desc: 'Fully immersive walkthroughs for high-stakes client presentations and design reviews.' },
  { title: 'Augmented Reality (AR) Integration', desc: 'Overlay BIM models on real-world spaces via phone or tablet devices.' },
  { title: 'Clash Detection & Conflict Resolution', desc: 'Identify and resolve design conflicts before construction begins — saving cost & time.' },
  { title: 'Quantity Take-Offs & Cost Estimation', desc: 'Auto-generated BOQs directly from the BIM model for accurate project budgeting.' },
  { title: 'Construction Phasing (4D BIM)', desc: 'Simulate timelines, visualize sequences, and identify scheduling conflicts proactively.' },
  { title: 'Facilities Management (5D/6D BIM)', desc: 'Integrate asset, maintenance, and lifecycle data for post-construction management.' },
  { title: 'Energy Performance Analysis', desc: 'Analyze energy use patterns and improve sustainability embedded in the design phase.' },
  { title: 'Daylight & Shadow Analysis', desc: 'Study solar impact for better natural light planning and passive design strategies.' },
  { title: 'Customizable Asset Libraries', desc: 'Ready-to-use BIM components for faster and consistent modeling across projects.' },
];

const WHY_FAECOM = [
  { t: 'BIM Expertise in AEC', d: 'High-quality BIM solutions customized for Architecture, Engineering, and Construction.' },
  { t: 'Automation-Focused Workflow', d: 'Dynamo scripts and Revit add-ins to streamline processes and save project time.' },
  { t: 'Custom Software Development', d: 'Tools, dashboards, and apps (web/mobile) solving project-specific challenges.' },
  { t: 'Global Project Experience', d: 'Trusted by clients across 10+ countries with fast and standard-compliant delivery.' },
  { t: 'Strong QA/QC Systems', d: 'Multi-stage quality checks ensuring every model and document meets highest standards.' },
];

export default function BIMIntegratedSolutionsPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
        <PageHero
          label="Engineering Services"
          title={<span>BIM Integrated</span>}
          titleEm={<span>Solutions 3D</span>}
          subtitle={<span>End-to-end 3D BIM integration across architecture, structure, and MEP disciplines — delivering photorealistic renders, VR walkthroughs, clash detection, and intelligent project data.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443953/Bim_integrated_3d.jpg"
        />
      </motion.div>

      {/* Stats */}
      <div className={styles.statsStrip}>
        <div className={styles.statsRow}>
          {[
            { num: '13+', label: 'BIM Capabilities' },
            { num: '4D + 5D', label: 'BIM Phasing & Costing' },
            { num: 'VR Ready', label: 'Immersive Walkthroughs' },
            { num: '10+', label: 'Countries Delivered' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1 — Features */}
      <section className={styles.section}>
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>BIM Solutions 3D</div>
        <h2 className={styles.sectionTitle}>Immersive, Data-Rich BIM Experiences that <em>Transform Decision-Making</em></h2>
        <p className={styles.sectionDesc}>FAECOM delivers integrated BIM workflows that enhance design understanding, stakeholder engagement, and multi-discipline coordination from concept to construction and beyond.</p>
        <div className={styles.badgesWrap}>
          {BADGES.map((b) => <span key={b} className={styles.badge}><span className={styles.badgeDot}/>{b}</span>)}
        </div>
        <div className={styles.twoCol}>
          <div className={styles.imgStack}>
            <div className={styles.imgCardLarge}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1787034262/Loom_Screenshot_2026-08-18_at_11.54.11.png" alt="3D Building Render Model Perspective" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.imgCard}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1787034358/Loom_Screenshot_2026-08-18_at_11.55.15.png" alt="Full Elevation Architectural 3D Render" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className={styles.contentCol}>
            {WHY_FAECOM.map((w) => (
              <div key={w.t} className={styles.block} style={{ gap: '6px' }}>
                <div className={styles.blockTitle}>{w.t}</div>
                <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, margin: 0 }}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 2 — Capabilities Grid */}
      <div className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Full Capabilities</div>
          <h2 className={styles.sectionTitle}>13 Integrated BIM <em>Capabilities</em></h2>
          <div className={styles.cardsGrid}>
            {FEATURES.map((f) => (
              <div key={f.title} className={styles.serviceCard}>
                <div className={styles.cardTitle}>{f.title}</div>
                <div className={styles.cardDesc}>{f.desc}</div>
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
