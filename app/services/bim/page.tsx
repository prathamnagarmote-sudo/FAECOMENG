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


export default function ArchitecturalBIMPage() {
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
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786532615/CAMPBELL_RESIDENCE_WALTON_USA_ABIM.png"
                  alt="Campbell Residence Walton USA Architectural BIM Render"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard} style={{ height: '240px', border: '2px solid #21145F' }}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1787032485/1loadbearing.png"
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
