'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from '../lgs/lgs.module.css';

export default function ArchitecturalBIMPage() {
  return (
    <>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <PageHero
          label="Engineering Services"
          title={<span style={{ fontWeight: 'bold' }}>Architectural</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>BIM Services</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Intelligent 3D BIM models that improve planning, reduce design conflicts, and enhance project coordination.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443962/architectural_bim_services.jpg"
        />
      </motion.div>

      <div className="divider" />

      <div className={styles.lgsContainer}>
        {/* ── SECTION 1: Architectural BIM Overview & Services ── */}
        <section className={styles.lgsOverviewSection}>
          <div className={styles.lgsOverviewGrid}>
            {/* Left Column: 2 Building Renders */}
            <div className={styles.lgsImagesStack}>
              <div className={styles.lgsImageCard} style={{ height: '240px' }}>
                <Image
                  src="/images/project_khan_house.png"
                  alt="Architectural Residential Home 3D Render"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard} style={{ height: '240px', border: '2px solid #21145F' }}>
                <Image
                  src="/images/expertise_lgs.png"
                  alt="Multistory Apartment Complex Architectural BIM Model"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column: Architectural Services Breakdown */}
            <div className={styles.lgsContentCol}>
              {/* ARCHITECTURAL DRAWINGS */}
              <div className={styles.lgsSystemBlock}>
                <h2 className={styles.lgsSystemTitle}>ARCHITECTURAL DRAWINGS:</h2>
                <ul className={styles.lgsSystemList}>
                  {[
                    { label: 'Floor Plans', desc: 'Accurate room layouts, openings (doors/windows), dimensions, and spatial arrangements.' },
                    { label: 'Elevations', desc: 'Exterior facades, finishes, rooflines, and height details.' },
                    { label: 'Sections', desc: 'Cross-sectional views illustrating structural elements, materials, and internal components.' },
                    { label: 'Details', desc: 'High-precision detailing for stairs, railings, wall assemblies, and other architectural features.' },
                  ].map((item, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>
                        <span style={{ fontWeight: 800, color: '#161347' }}>{item.label}</span> – {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ARCHITECTURAL MODELING */}
              <div className={styles.lgsSystemBlock}>
                <h2 className={styles.lgsSystemTitle}>ARCHITECTURAL MODELING:</h2>
                <ul className={styles.lgsSystemList}>
                  {[
                    { label: '3D BIM Modeling', desc: 'Creation of detailed 3D architectural models including interiors and exteriors.' },
                    { label: 'Renderings & Visualizations', desc: 'Photorealistic renderings for client presentations, approvals, and marketing.' },
                  ].map((item, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>
                        <span style={{ fontWeight: 800, color: '#161347' }}>{item.label}</span> – {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PERMIT & CONSTRUCTION SET */}
              <div className={styles.lgsSystemBlock}>
                <h2 className={styles.lgsSystemTitle}>PERMIT & CONSTRUCTION SET:</h2>
                <ul className={styles.lgsSystemList}>
                  {[
                    { label: 'Construction Documentation', desc: 'Full architectural, structural, and MEP drawings required for construction.' },
                    { label: 'Code Compliance', desc: 'Documentation prepared in accordance with relevant building codes and local regulations.' },
                    { label: 'Permit Assistance', desc: 'Support with drawing sets and coordination needed for permit submissions.' },
                  ].map((item, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>
                        <span style={{ fontWeight: 800, color: '#161347' }}>{item.label}</span> – {item.desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ADDITIONAL SERVICES */}
              <div className={styles.lgsSystemBlock}>
                <h2 className={styles.lgsSystemTitle}>ADDITIONAL SERVICES:</h2>
                <ul className={styles.lgsSystemList}>
                  {[
                    { label: 'Zoning & Land-Use Analysis', desc: 'Regulatory compliance checks during the planning phase.' },
                    { label: 'Site Planning', desc: 'Site layout, grading, drainage, and landscape coordination.' },
                    { label: 'Sustainability & Energy Efficiency', desc: 'Integration of green design principles and energy-efficient strategies.' },
                  ].map((item, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>
                        <span style={{ fontWeight: 800, color: '#161347' }}>{item.label}</span> – {item.desc}
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
