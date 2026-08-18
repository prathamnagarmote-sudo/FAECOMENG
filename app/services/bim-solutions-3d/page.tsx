'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from '../lgs/lgs.module.css';

export default function BIMIntegratedSolutionsPage() {
  return (
    <>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <PageHero
          label="Engineering Services"
          title={<span style={{ fontWeight: 'bold' }}>BIM Integrated</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Solutions 3D</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Integrated BIM workflows across architecture, structure, and MEP disciplines for efficient project delivery.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443953/Bim_integrated_3d.jpg"
        />
      </motion.div>

      <div className="divider" />

      <div className={styles.lgsContainer}>
        {/* ── SECTION 1: Features & Why Faecom Engineering ── */}
        <section className={styles.lgsOverviewSection}>
          <div className={styles.lgsOverviewGrid}>
            {/* Left Column: Stack of 2 3D Building Renders */}
            <div className={styles.lgsImagesStack}>
              <div className={styles.lgsImageCard} style={{ height: '260px' }}>
                <Image
                  src="/images/project_khan_house.png"
                  alt="3D Building Render Model"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard} style={{ height: '260px' }}>
                <Image
                  src="/images/project_sugar_villa.png"
                  alt="Full Elevation Architectural 3D Render"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column: 13 Features & Why Faecom Engineering */}
            <div className={styles.lgsContentCol}>
              <ul className={styles.lgsTopBullets} style={{ gap: '10px', marginBottom: '40px' }}>
                {[
                  { label: 'Photorealistic 3D Renders', desc: 'High-quality, lifelike images for real-time design visualization.' },
                  { label: '360° Virtual Walkthroughs', desc: 'Interactive exploration of the building interior & exterior.' },
                  { label: 'Architectural & Interior Visualization', desc: 'Detailed views of facade, layout, material & furniture.' },
                  { label: 'Interactive 3D Models', desc: 'Real-time manipulation for faster client feedback and design changes.' },
                  { label: 'Virtual Reality (VR) Experiences', desc: 'Fully immersive walkthroughs for presentations and design reviews.' },
                  { label: 'Augmented Reality (AR) Integration', desc: 'Overlay models on real-world spaces via phone/tablet.' },
                  { label: 'Clash Detection & Conflict Resolution', desc: 'Identify issues before construction begins to save cost & time.' },
                  { label: 'Quantity Take-Offs & Cost Estimation', desc: 'Auto-generated BOQs directly from BIM model.' },
                  { label: 'Construction Phasing (4D BIM)', desc: 'Simulate timelines, visualize sequences, and avoid delays.' },
                  { label: 'Facilities Management (5D/6D BIM)', desc: 'Integrate asset, maintenance & lifecycle data post-construction.' },
                  { label: 'Energy Performance Analysis', desc: 'Analyze energy use and improve sustainability in design.' },
                  { label: 'Daylight & Shadow Analysis', desc: 'Study sun impact for better natural light planning.' },
                  { label: 'Customizable Asset Libraries', desc: 'Ready-to-use BIM components for faster and consistent modeling.' },
                ].map((feat, i) => (
                  <li key={i} className={styles.lgsTopBulletItem}>
                    <span className={styles.lgsDot} />
                    <span>
                      <span style={{ fontWeight: 800, color: '#161347' }}>{feat.label}</span> – {feat.desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Why Faecom Engineering? */}
              <div className={styles.lgsSystemBlock}>
                <h2 className={styles.lgsSystemTitle} style={{ fontSize: '26px' }}>Why Faecom Engineering?</h2>
                <ul className={styles.lgsSystemList} style={{ gap: '14px' }}>
                  {[
                    { label: 'BIM Expertise in AEC', desc: 'We specialize in high-quality BIM solutions customized for the Architecture, Engineering, and Construction industry.' },
                    { label: 'Automation-Focused Workflow', desc: 'From Dynamo scripts to Revit add-ins, we streamline processes and save time through intelligent automation.' },
                    { label: 'Custom Software Development', desc: 'We develop tools, dashboards, and apps (web/mobile) that solve project-specific challenges and improve coordination.' },
                    { label: 'Global Project Experience', desc: 'Trusted by clients across continents, we ensure fast, reliable, and standard-compliant project delivery.' },
                    { label: 'Strong QA/QC Systems', desc: 'Our rigorous multi-stage quality checks ensure every model and document meets the highest standards.' },
                  ].map((why, i) => (
                    <li key={i} className={styles.lgsSystemListItem} style={{ flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className={styles.lgsDot} />
                        <span style={{ fontWeight: 800, color: '#161347', fontSize: '15px' }}>{why.label}</span>
                      </div>
                      <span style={{ fontSize: '14px', color: '#4A4A5A', paddingLeft: '16px', lineHeight: 1.5 }}>{why.desc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: Deliverables ── */}
        <section className={styles.deliverablesSection}>
          <div className={styles.deliverablesGrid}>
            {/* Design Calculation Report */}
            <div className={styles.deliverableCol}>
              <h2 className={styles.deliverableTitle}>DESIGN CALCULATION REPORT</h2>
              <p className={styles.deliverableSub}>
                FAECOM provides comprehensive Design Calculation Reports to ensure structural stability, compliance, and efficiency.
              </p>
              <div className={styles.docGrid}>
                {Array.from({ length: 12 }).map((_, idx) => (
                  <div key={idx} className={styles.docSheet}>
                    <div className={styles.docSheetHeader} />
                    <div className={styles.docSheetLine} />
                    <div className={styles.docSheetLineShort} />
                    <div className={styles.docSheetTable}>
                      <div className={styles.docSheetRow} />
                      <div className={styles.docSheetRow} />
                      <div className={styles.docSheetRow} />
                      <div className={styles.docSheetRow} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Structural Drawings Package */}
            <div className={styles.deliverableCol}>
              <h2 className={styles.deliverableTitle}>STRUCTURAL DRAWINGS PACKAGE</h2>
              <p className={styles.deliverableSub}>
                FAECOM provides detailed Structural Drawings Packages that include essential documentation for fabrication and construction.
              </p>
              <div className={styles.cadGrid}>
                {Array.from({ length: 8 }).map((_, idx) => (
                  <div key={idx} className={styles.cadSheet}>
                    <div style={{ borderBottom: '1px solid #21145F', height: '12px', opacity: 0.6 }} />
                    <div style={{ borderLeft: '1px solid #FF6B2C', width: '50%', height: '14px', margin: '2px 0' }} />
                    <div className={styles.cadTitleBlock} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <CtaSection />
    </>
  );
}
