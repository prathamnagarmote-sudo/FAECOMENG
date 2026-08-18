'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from './timber.module.css';

export default function TimberPage() {
  return (
    <>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <PageHero
          label="Engineering Services"
          title={<span style={{ fontWeight: 'bold' }}>Wood</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>And Mass Timber Engineering</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>High-performance timber, CLT, and glulam systems marrying natural aesthetics with structural excellence.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443980/wood_and_timber.png"
        />
      </motion.div>

      <div className="divider" />

      <div className={styles.timberContainer}>
        {/* ── SECTION 1: Overview & Wood Services ── */}
        <section className={styles.timberOverviewSection}>
          <div className={styles.timberOverviewGrid}>
            {/* Left Column: Stack of 2 3D Building Render Illustrations */}
            <div className={styles.timberImagesStack}>
              <div className={styles.timberImageCard}>
                <Image
                  src="/images/project_nelson_care.png"
                  alt="Multistory Residential Wood Framed Building Render"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.timberImageCard}>
                <Image
                  src="/images/project_sugar_villa.png"
                  alt="Custom Timber Lodge & Frame Architecture Render"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column: Bullets & Wood Services List */}
            <div className={styles.timberContentCol}>
              <ul className={styles.timberTopBullets}>
                {[
                  'Advanced Structural Analysis For Durability',
                  'Eco-friendly And Sustainable Wood Design',
                  'Custom Connections For Unique Architecture',
                  'High-performance Load-bearing Timber Structures',
                  'Seismic & Wind-resistant Wood Systems',
                  'Blending Craftsmanship With Modern Tech',
                  'Optimized Material Use For Efficiency',
                ].map((bullet, i) => (
                  <li key={i} className={styles.timberTopBulletItem}>
                    <span className={styles.timberSquareDot} />
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>

              <h2 className={styles.servicesBlockTitle}>Our Wood Services Include:</h2>
              <ul className={styles.timberServicesList}>
                {[
                  { label: 'Structural Design & Analysis', desc: 'Optimized, Stable, and Cost-effective designs.' },
                  { label: 'Permit Drawings & PE Stamping', desc: 'Ensuring compliance with professional approvals.' },
                  { label: 'Connection & Construction Details', desc: 'Precise joinery and execution plans.' },
                  { label: 'Code Compliance & Value Engineering', desc: 'Cost-effective, regulation-ready solutions.' },
                  { label: '3D BIM Modeling', desc: 'Advanced visualization for seamless project coordination.' },
                  { label: 'Wood Panel & Truss Drawings', desc: 'Detailed schematics for accurate assembly.' },
                  { label: 'Mass Timber Design', desc: 'Sustainable, high-performance engineered wood solutions.' },
                ].map((srv, i) => (
                  <li key={i} className={styles.timberServiceListItem}>
                    <span className={styles.timberSquareDot} />
                    <span>
                      <span className={styles.highlightLabel}>{srv.label}</span> – {srv.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 2: Why Choose Faecom? ── */}
        <section className={styles.whyFaecomSection}>
          <div className={styles.whyFaecomGrid}>
            {/* Left Column: 3D Timber Frame Model Image */}
            <div className={styles.timberImageCard} style={{ height: '320px' }}>
              <Image
                src="/images/wood_portfolio_1.png"
                alt="3D Structural Timber Frame Building Model"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>

            {/* Right Column: Features List */}
            <div>
              <h2 className={styles.whyFaecomTitle}>Why Choose Faecom?</h2>
              <ul className={styles.whyFaecomList}>
                {[
                  { label: 'Tailored Engineering Solutions', desc: 'Customized designs to fit every project need.' },
                  { label: 'Cutting-Edge Technology', desc: 'Advanced software and BIM modeling for precision.' },
                  { label: 'Sustainability at the Core', desc: 'Eco-friendly solutions for a greener future.' },
                  { label: 'End-to-End Support', desc: 'From concept to execution, we provide seamless assistance.' },
                  { label: 'Proven Expertise', desc: 'A track record of successful projects across industries.' },
                ].map((item, i) => (
                  <li key={i} className={styles.whyFaecomItem}>
                    <span className={styles.timberSquareDot} />
                    <span>
                      <span className={styles.highlightLabel}>{item.label}</span> – {item.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── SECTION 3: Deliverables ── */}
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
