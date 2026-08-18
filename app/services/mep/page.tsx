'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, Download, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from '../lgs/lgs.module.css';


function InlinePdfViewer({ title, pdfUrl, totalPages = 186 }: { title: string; pdfUrl: string; totalPages?: number }) {
  const [currentPage, setCurrentPage] = useState(1);

  const prevPage = () => setCurrentPage((p) => Math.max(1, p - 1));
  const nextPage = () => setCurrentPage((p) => Math.min(totalPages, p + 1));

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%', background: '#FFFFFF', border: '1px solid #D8D8E2', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.06)' }}>
      {/* Slider Header Bar */}
      <div style={{ padding: '16px 20px', background: '#161347', display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#FFFFFF', flexWrap: 'wrap', gap: '12px' }}>
        <div>
          <h3 style={{ fontSize: '15px', fontWeight: 800, margin: 0, color: '#FFFFFF', letterSpacing: '0.02em' }}>{title}</h3>
          <span style={{ fontSize: '11px', color: '#FF6B2C', fontWeight: 700, letterSpacing: '0.06em' }}>PAGE {currentPage} OF {totalPages}</span>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <button
            onClick={prevPage}
            disabled={currentPage <= 1}
            aria-label="Previous Page"
            style={{ width: '36px', height: '36px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.1)', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: currentPage <= 1 ? 'not-allowed' : 'pointer', opacity: currentPage <= 1 ? 0.4 : 1 }}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={nextPage}
            disabled={currentPage >= totalPages}
            aria-label="Next Page"
            style={{ width: '36px', height: '36px', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.2)', background: '#FF6B2C', color: '#FFFFFF', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: currentPage >= totalPages ? 'not-allowed' : 'pointer', opacity: currentPage >= totalPages ? 0.4 : 1 }}
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Live Document Frame - Full Page Fit */}
      <div style={{ width: '100%', height: '560px', background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
        <iframe
          key={`${pdfUrl}-p${currentPage}`}
          src={`${pdfUrl}#page=${currentPage}&toolbar=0&navpanes=0&scrollbar=0&view=Fit`}
          style={{ width: '100%', height: '100%', border: 'none', background: '#FFFFFF' }}
          title={`${title} Page ${currentPage}`}
        />
      </div>
    </div>
  );
}


export default function MEPPage() {
  const [activePdf, setActivePdf] = useState<{ title: string; url: string } | null>(null);
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
              <div className={styles.lgsImageCard} style={{ height: '210px' }}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786522341/MELSON_CARE_UNIT_USA_MEP.png"
                  alt="Nelson Care Unit USA MEP BIM Model"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard} style={{ height: '210px' }}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786522340/MATTHEW-_CAMPBELL_RESIDENC_MEP.png"
                  alt="Matthew Campbell Residence MEP BIM Layout"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard} style={{ height: '210px' }}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786522340/DRESCHER-DRESCHER_RESIDENCE_MEP.png"
                  alt="Drescher Residence MEP System Design"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard} style={{ height: '210px' }}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786522340/FELLOWSHIP_CHURCH_USA_Mep.png"
                  alt="Fellowship Church USA MEP Engineering Model"
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
        
        {/* ── SECTION 3: Deliverables (Inline PDF Page Sliders) ── */}
        <section className={styles.deliverablesSection}>
          <div className={styles.deliverablesGrid}>
            {/* Design Calculation Report */}
            <div className={styles.deliverableCol}>
              <h2 className={styles.deliverableTitle}>DESIGN CALCULATION REPORT</h2>
              <p className={styles.deliverableSub}>
                FAECOM provides comprehensive Design Calculation Reports to ensure structural stability, compliance, and efficiency.
              </p>
              <InlinePdfViewer
                title="DESIGN CALCULATION REPORT"
                pdfUrl="/docs/design-calculation-report.pdf"
                totalPages={186}
              />
            </div>

            {/* Structural Drawings Package */}
            <div className={styles.deliverableCol}>
              <h2 className={styles.deliverableTitle}>STRUCTURAL DRAWINGS PACKAGE</h2>
              <p className={styles.deliverableSub}>
                FAECOM provides detailed Structural Drawings Packages that include essential documentation for fabrication and construction.
              </p>
              <InlinePdfViewer
                title="STRUCTURAL DRAWINGS PACKAGE"
                pdfUrl="/docs/structural-drawings-package.pdf"
                totalPages={150}
              />
            </div>
          </div>
        </section>

      </div>

      
      <CtaSection />
    </>
  );
}
