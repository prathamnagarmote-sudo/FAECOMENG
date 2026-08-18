'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, Download, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from './steel.module.css';


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


export default function StructuralSteelPage() {
  const [activePdf, setActivePdf] = useState<{ title: string; url: string } | null>(null);
  return (
    <>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className={styles.steelHeroWrapper}
      >
        <PageHero
          label="Engineering Services"
          title={<span style={{ fontWeight: 'bold' }}>Structural</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Steel Solutions</span>}
          subtitle={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '900', color: '#FF6B2C', margin: '8px 0 0 0', lineHeight: 1.2 }}>
                About Our Structural Steel Solutions Expertise
              </h2>
              <span style={{ color: '#FF6B2C', fontWeight: 'bold' }}>
                Heavy structural steel detailing, connection engineering, and fabrication documentation.
              </span>
            </div>
          }
        />
      </motion.div>

      <div className="divider" />

      <div className={styles.steelContainer}>
        {/* ── SECTION 1: Services & Codes Followed ── */}
        <section className={styles.steelOverviewSection}>
          <div className={styles.steelOverviewGrid}>
            {/* Left Column: Stack of 3 Framed Cards */}
            <div className={styles.steelImagesStack}>
              <div className={styles.steelImageCard}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786521241/CHARTER_SCHOOL_BRONX_NY.png"
                  alt="Charter School Bronx NY Structural Steel Model"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.steelImageCard}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786449074/EMMONS_BAY_HOTEL_2902_EMMONS_AVENUE_BROOKLYN_NY.png"
                  alt="Emmons Bay Hotel Brooklyn NY Structural Steel Render"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.steelImageCard}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786521241/Glenmark_USA.png"
                  alt="Glenmark USA Structural Steel Project"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column: Services & Codes List */}
            <div className={styles.steelContentCol}>
              <h2 className={styles.servicesBlockTitle}>OUR STRUCTURAL STEEL SERVICES INCLUDE:</h2>
              <ul className={styles.steelServicesList}>
                {[
                  { label: 'Structural Steel Analysis & Design', desc: 'Ensuring stability, efficiency, and load-bearing capacity in all structures.' },
                  { label: 'Steel Modeling, Detailing & Shop Drawings', desc: 'Precision-driven 3D models and fabrication-ready drawings for seamless execution.' },
                  { label: 'Structural Engineering Reports', desc: 'Detailed documentation covering calculations, compliance, and approval requirements.' },
                  { label: 'Code-Compliant Engineering Solutions', desc: 'Designs strictly adhering to AISC, ASTM, ACI, and other global structural codes.' },
                  { label: 'Optimized & Cost-Effective Designs', desc: 'Value-engineered solutions to reduce material use while maximizing strength.' },
                  { label: 'Custom Structural Solutions', desc: 'Unique and tailored designs for specific project requirements.' },
                  { label: 'BIM Integration for Steel Structures', desc: 'Advanced 3D modeling and coordination to reduce errors and streamline workflows.' },
                  { label: 'PE Seal & Stamping for All US States', desc: 'Ensuring regulatory compliance with nationwide approvals.' },
                ].map((item, i) => (
                  <li key={i} className={styles.steelServiceItem}>
                    <span className={styles.squareDot} />
                    <span>
                      <span className={styles.highlightLabel}>{item.label}</span> – {item.desc}
                    </span>
                  </li>
                ))}
              </ul>

              <h2 className={styles.codesTitle}>Codes & Standards Followed</h2>
              <p className={styles.codesIntroText}>
                FAECOM ensures all structural steel designs meet the highest industry standards, following globally recognized codes for safety, reliability, and compliance.
              </p>
              <p className={styles.codesIntroItalic}>
                We ensure all our steel designs comply with industry regulations, including:
              </p>

              <ul className={styles.codesList}>
                {[
                  { label: 'AISC 360-21', desc: 'Steel Building Standards' },
                  { label: 'AISC 341-16', desc: 'Seismic Steel Design' },
                  { label: 'AISC 358-16', desc: 'Prequalified Steel Connections' },
                  { label: 'ACI 318-19', desc: 'Concrete Design Standards' },
                  { label: 'ASTM A992/A572', desc: 'Structural Steel Grades' },
                  { label: 'ASTM A36/A500', desc: 'Carbon Steel Standards' },
                  { label: 'AISI S100-16', desc: 'Cold-Formed Steel' },
                  { label: 'NBCC 2020', desc: 'Canada Building Code' },
                  { label: 'CSA S136-16', desc: 'Cold-Formed Steel (Canada)' },
                  { label: 'CSA S16-14', desc: 'Steel Structure Design' },
                  { label: 'ANSI/AWS D1.1/D1.2', desc: 'Steel & Aluminum Welding' },
                  { label: 'RCSC 2020', desc: 'High-Strength Bolt Joints' },
                  { label: 'OSHA 29 CFR 1926', desc: 'Steel Erection Safety' },
                  { label: 'SDI Manual', desc: 'Steel Deck Standards' },
                ].map((code, i) => (
                  <li key={i} className={styles.codeItem}>
                    <span className={styles.squareDot} />
                    <span>
                      <span className={styles.highlightLabel}>{code.label}</span> – {code.desc}
                    </span>
                  </li>
                ))}
              </ul>
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
