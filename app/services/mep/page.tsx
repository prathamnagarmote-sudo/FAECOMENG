'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from '../lgs/lgs.module.css';

export default function MEPPage() {
  return (
    <>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <PageHero
          label="Engineering Services"
          title={<span style={{ fontWeight: 'bold' }}>MEP</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Engineering</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Mechanical, Electrical, and Plumbing engineering designed for safety, efficiency, and long-term performance.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443927/mep.jpg"
        />
      </motion.div>

      <div className="divider" />

      <div className={styles.lgsContainer}>
        {/* ── SECTION 1: MEP Services Breakdown & Industries ── */}
        <section className={styles.lgsOverviewSection}>
          <div className={styles.lgsOverviewGrid}>
            {/* Left Column: Stack of 4 3D MEP BIM Models */}
            <div className={styles.lgsImagesStack}>
              <div className={styles.lgsImageCard} style={{ height: '200px' }}>
                <Image
                  src="/images/hero_clear_disciplines.png"
                  alt="3D Building MEP Cutaway Model"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard} style={{ height: '200px' }}>
                <Image
                  src="/images/hero_white_bim.png"
                  alt="3D Electrical & Conduit Layout Model"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard} style={{ height: '200px' }}>
                <Image
                  src="/images/hero_bim.png"
                  alt="Plumbing & Drainage 3D Riser BIM Model"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard} style={{ height: '200px' }}>
                <Image
                  src="/images/servicesss.png"
                  alt="MEP Floor Plan Ductwork & Pipe Routing"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column: MEP Services & Industries */}
            <div className={styles.lgsContentCol}>
              {/* Top 4 Value Bullets */}
              <ul className={styles.lgsTopBullets} style={{ marginBottom: '32px' }}>
                {[
                  { label: 'Innovative & Efficient', desc: 'Smart, sustainable, and cost-effective designs.' },
                  { label: 'Seamless Integration', desc: 'BIM-driven coordination for optimized execution.' },
                  { label: 'Regulatory Compliance', desc: 'Meeting global and local standards.' },
                  { label: 'Comprehensive Solutions', desc: 'End-to-end MEP services from design to implementation.' },
                ].map((top, i) => (
                  <li key={i} className={styles.lgsTopBulletItem}>
                    <span className={styles.lgsDot} />
                    <span>
                      <span style={{ fontWeight: 800, color: '#161347' }}>{top.label}:</span> {top.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className={styles.lgsSystemTitle} style={{ fontSize: '26px' }}>Our MEP Services Include:</h2>

              {/* HVAC ENGINEERING */}
              <div className={styles.lgsSystemBlock}>
                <h3 className={styles.lgsSystemTitle} style={{ fontSize: '18px', marginBottom: '10px' }}>HVAC ENGINEERING</h3>
                <ul className={styles.lgsSystemList}>
                  {[
                    'Load calculations and system design.',
                    'Ductwork layout and airflow optimization.',
                    'Energy-efficient heating, cooling, and ventilation solutions.',
                    'Permit drawings and compliance documentation.',
                  ].map((bullet, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* ELECTRICAL ENGINEERING */}
              <div className={styles.lgsSystemBlock}>
                <h3 className={styles.lgsSystemTitle} style={{ fontSize: '18px', marginBottom: '10px' }}>ELECTRICAL ENGINEERING</h3>
                <ul className={styles.lgsSystemList}>
                  {[
                    'Power distribution and electrical system design.',
                    'Lighting layouts, photometric analysis, and energy-efficient lighting solutions.',
                    'Fire alarm and emergency power systems.',
                    'Electrical permit drawings and PE seal approvals.',
                  ].map((bullet, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* PLUMBING ENGINEERING */}
              <div className={styles.lgsSystemBlock}>
                <h3 className={styles.lgsSystemTitle} style={{ fontSize: '18px', marginBottom: '10px' }}>PLUMBING ENGINEERING</h3>
                <ul className={styles.lgsSystemList}>
                  {[
                    'Water supply and drainage system design.',
                    'Stormwater and wastewater management solutions.',
                    'Fire suppression and sprinkler system design.',
                    'Permit-ready plumbing drawings with regulatory compliance.',
                  ].map((bullet, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* FIRE PROTECTION ENGINEERING */}
              <div className={styles.lgsSystemBlock}>
                <h3 className={styles.lgsSystemTitle} style={{ fontSize: '18px', marginBottom: '10px' }}>FIRE PROTECTION ENGINEERING</h3>
                <ul className={styles.lgsSystemList}>
                  {[
                    'Fire suppression system design and layout.',
                    'NFPA-compliant sprinkler and smoke control systems.',
                    'Fire alarm integration with building management systems.',
                    'Emergency egress and fire safety compliance reports.',
                  ].map((bullet, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* BIM-INTEGRATED MEP SOLUTIONS */}
              <div className={styles.lgsSystemBlock}>
                <h3 className={styles.lgsSystemTitle} style={{ fontSize: '18px', marginBottom: '10px' }}>BIM-INTEGRATED MEP SOLUTIONS</h3>
                <ul className={styles.lgsSystemList}>
                  {[
                    '3D modeling and clash detection to ensure seamless coordination.',
                    'Revit-based MEP modeling for precise design execution.',
                    'Real-time project collaboration and system optimization.',
                  ].map((bullet, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Industries We Serve With MEP Solutions */}
              <div className={styles.lgsSystemBlock} style={{ marginTop: '32px' }}>
                <h2 className={styles.lgsSystemTitle} style={{ fontSize: '22px' }}>Industries We Serve With MEP Solutions</h2>
                <ul className={styles.lgsSystemList}>
                  {[
                    'Commercial Buildings',
                    'Residential Complexes',
                    'Healthcare Facilities',
                    'Educational Institutions',
                    'Industrial & Manufacturing Units',
                    'Hotels & Hospitality',
                    'Data Centers',
                  ].map((ind, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>{ind}</span>
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
