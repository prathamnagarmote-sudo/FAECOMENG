'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from '../lgs/lgs.module.css';

export default function ICFPage() {
  return (
    <>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <PageHero
          label="Engineering Services"
          title={<span style={{ fontWeight: 'bold' }}>ICF (Insulated</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Concrete Form) Solutions</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Energy-efficient concrete construction systems offering superior insulation, strength, and faster installation.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443935/ICF.jpg"
        />
      </motion.div>

      <div className="divider" />

      <div className={styles.lgsContainer}>
        {/* ── SECTION 1: Services & Why Choose ICF ── */}
        <section className={styles.lgsOverviewSection}>
          <div className={styles.lgsOverviewGrid}>
            {/* Left Column: Stack of 2 ICF Construction Photos */}
            <div className={styles.lgsImagesStack}>
              <div className={styles.lgsImageCard} style={{ height: '240px' }}>
                <Image
                  src="/images/expertise_icf.png"
                  alt="ICF Wall Construction Site with Concrete Core"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard} style={{ height: '240px' }}>
                <Image
                  src="/images/expertise_rc.png"
                  alt="Crane Lifting ICF Wall Formwork Panels"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column: ICF Services & Why Choose ICF */}
            <div className={styles.lgsContentCol}>
              {/* OUR ICF SERVICES INCLUDE */}
              <div className={styles.lgsSystemBlock}>
                <h2 className={styles.lgsSystemTitle}>OUR ICF SERVICES INCLUDE:</h2>
                <ul className={styles.lgsSystemList}>
                  {[
                    { label: 'ICF Structural Engineering & Design', desc: 'Optimized for load-bearing capacity and compliance.' },
                    { label: 'Seismic & Wind Load Analysis', desc: 'Ensuring stability in high-risk zones.' },
                    { label: 'Thermal & Energy Performance Optimization', desc: 'Enhancing efficiency and sustainability.' },
                    { label: 'ICF Wall & Floor Systems Design', desc: 'Custom configurations for strength and insulation.' },
                    { label: 'Code-Compliant Engineering Solutions', desc: 'Meeting IBC, ACI, ASCE, and global standards.' },
                    { label: 'BIM Integration for ICF Projects', desc: '3D modeling for precise coordination.' },
                    { label: 'Cost & Material Optimization', desc: 'Reducing waste and improving efficiency.' },
                    { label: 'ICF Construction Detailing & Support', desc: 'Seamless integration from design to execution.' },
                  ].map((srv, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>
                        <span style={{ fontWeight: 800, color: '#161347' }}>{srv.label}</span> – {srv.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* WHY CHOOSE ICF? */}
              <div className={styles.lgsSystemBlock}>
                <h2 className={styles.lgsSystemTitle}>WHY CHOOSE ICF?</h2>
                <ul className={styles.lgsSystemList}>
                  {[
                    { label: 'Energy Efficiency', desc: 'Superior thermal insulation reduces heating and cooling costs.' },
                    { label: 'Structural Strength', desc: 'Reinforced concrete core provides enhanced durability.' },
                    { label: 'Disaster Resilience', desc: 'Excellent performance in seismic, fire, and extreme weather conditions.' },
                    { label: 'Sustainability', desc: 'Eco-friendly materials and reduced carbon footprint.' },
                    { label: 'Soundproofing', desc: 'Exceptional acoustic insulation for quieter environments.' },
                    { label: 'Faster Construction', desc: 'Streamlined assembly reduces labor and project timelines.' },
                  ].map((why, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>
                        <span style={{ fontWeight: 800, color: '#161347' }}>{why.label}</span> – {why.desc}
                      </span>
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
