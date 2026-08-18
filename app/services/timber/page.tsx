'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, Download, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from './timber.module.css';


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


export default function TimberPage() {
  const [activePdf, setActivePdf] = useState<{ title: string; url: string } | null>(null);
  return (
    <>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className={styles.timberHeroWrapper}
      >
        <PageHero
          label="Engineering Services"
          title={<span style={{ fontWeight: 'bold' }}>Wood</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>And Mass Timber Engineering</span>}
          subtitle={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '900', color: '#FF6B2C', margin: '8px 0 0 0', lineHeight: 1.2 }}>
                About Our Wood and Mass Timber Expertise
              </h2>
              <span style={{ color: '#FF6B2C', fontWeight: 'bold' }}>
                High-performance timber, CLT, and glulam systems marrying natural aesthetics with structural excellence.
              </span>
            </div>
          }
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
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786447633/MANCHESTER_NEW_HAMPSHIREE.png"
                  alt="Manchester New Hampshire Timber Engineering Render"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.timberImageCard}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786448864/M_M_RESIDENCE_NORTH_CAROLINA.png"
                  alt="M&M Residence North Carolina Timber Architecture Render"
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
                src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786448140/TIPSY_MOOSE_USA.png"
                alt="Tipsy Moose USA Timber Framing Architecture"
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
