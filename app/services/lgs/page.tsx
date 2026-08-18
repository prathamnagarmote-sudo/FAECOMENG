'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, Download, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from './lgs.module.css';

const ROLL_MACHINES = [
  { name: 'FrameCad', image: '/images/machines/framecad.png' },
  { name: 'Howick', image: '/images/machines/howick.png' },
  { name: 'Knudson', image: '/images/machines/knudson.png' },
  { name: 'Unbak', image: '/images/machines/unbak.png' },
  { name: 'FrameMac', image: '/images/machines/framemac.png' },
  { name: 'Scottsdale', image: '/images/machines/scottsdale.png' },
];


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


export default function LGSPage() {
  const [activePdf, setActivePdf] = useState<{ title: string; url: string } | null>(null);
  return (
    <>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
        className={styles.lgsHeroWrapper}
      >
        <PageHero
          label="Engineering Services"
          title={<span style={{ fontWeight: 'bold' }}>Light Gauge Steel</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>(LGS) Solutions</span>}
          subtitle={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '900', color: '#000000', margin: '8px 0 0 0', lineHeight: 1.2 }}>
                About Our LGS Expertise
              </h2>
              <span style={{ color: '#000000', fontWeight: 'bold' }}>
                Advanced structural systems designed for fast and efficient construction.
              </span>
              <p style={{ color: '#000000', fontSize: '16.5px', lineHeight: 1.6, margin: 0, fontWeight: 'bold', fontFamily: 'var(--font-body)' }}>
                FAECOM has extensive experience in Affordable Housing, Residential Apartments, Hotels, Mixed-Use Developments, Modular Construction, and Multifamily Units. We provide Architectural, Structural, and MEP services for Light Gauge Steel (LGS) construction.
              </p>
              <p style={{ color: '#000000', fontSize: '16.5px', lineHeight: 1.6, margin: 0, fontWeight: 'bold', fontFamily: 'var(--font-body)' }}>
                Our services are designed to help clients achieve their missions and visions with optimal financial returns through:
              </p>
              <ul style={{ color: '#000000', fontSize: '16.5px', lineHeight: 1.6, paddingLeft: '24px', margin: 0, fontWeight: 'bold', fontFamily: 'var(--font-body)' }}>
                <li style={{ color: '#000000' }}>High-quality and cost-effective services.</li>
                <li style={{ color: '#000000' }}>Owner-focused solutions ensuring project success.</li>
                <li style={{ color: '#000000' }}>World-class, client-oriented approaches that transform plans into successful stories.</li>
                <li style={{ color: '#000000' }}>Advanced technology and engineering software integration.</li>
              </ul>
            </div>
          }
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443295/1662696676169_edited_edited_edited.jpg"
        />
      </motion.div>

      <div className="divider" />

      <div className={styles.lgsContainer}>
        {/* ── SECTION 1: LGS Systems & Overview ── */}
        <section className={styles.lgsOverviewSection}>
          <div className={styles.lgsSystemsStack}>

            {/* Row 1: LGS FRAMING SYSTEM */}
            <div className={styles.lgsSystemRow}>
              <div className={styles.lgsRowImageCard}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786446264/NELSON_USA.png"
                  alt="LGS Framing System - Nelson USA"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsSystemBlock}>
                <h2 className={styles.lgsSystemTitle}>LGS FRAMING SYSTEM</h2>
                <ul className={styles.lgsSystemList}>
                  {[
                    'Modern structural systems designed for fast and efficient construction of modern framed buildings.',
                    'Cost and weight reductions of 30-40% in CFS construction.',
                    'Multiple CFS stud ranges for multistory Residential Apartments, Affordable Housing, Modular Construction, and Facade Solutions.',
                    'Widely used in Load-Bearing structures, Modular Construction, and Infill Wall Systems.',
                    'Panel and stick-build systems for fast Construction, Suitable for indigenous buildings and high-separation walls.',
                    'Ideal bearing systems for low-rise homes where Construction speed is critical.',
                  ].map((bullet, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Row 2: LOAD BEARING SYSTEM */}
            <div className={styles.lgsSystemRow}>
              <div className={styles.lgsRowImageCard}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1787032485/1loadbearing.png"
                  alt="Load Bearing System"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsSystemBlock}>
                <h2 className={styles.lgsSystemTitle}>LOAD BEARING SYSTEM</h2>
                <ul className={styles.lgsSystemList}>
                  {[
                    'Feasibility analysis for structures like multistory apartments, modular structures, and affordable housing.',
                    'Design and analysis of LGS for walls, floors, and trusses.',
                    'Revit structural drawings and detailed documentation.',
                    'Construction GA and shop drawings for walls, floors, and trusses.',
                    'Machine file generation for Howick, FrameCAD, and other roll-formed machines.',
                    'Utilization of REVIT, MWF STRUCT SOFT, Vertex-BD, Scottsdale and FRAMECAD.',
                  ].map((bullet, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Row 3: INFILL SYSTEM */}
            <div className={styles.lgsSystemRow}>
              <div className={styles.lgsRowImageCard}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786446440/KHAN_HOUSE_CANADA.png"
                  alt="Infill System - Khan House Canada"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsSystemBlock}>
                <h2 className={styles.lgsSystemTitle}>INFILL SYSTEM</h2>
                <ul className={styles.lgsSystemList}>
                  {[
                    'Design and analysis of LGS infill walls and façade supporting elements.',
                    'Revit structural drawings with precise connection details.',
                    'Construction GA and shop drawings for walls.',
                    'Building elevation designs integrated with SFS framing.',
                    'Material take-off for accurate project estimation.',
                  ].map((bullet, i) => (
                    <li key={i} className={styles.lgsSystemListItem}>
                      <span className={styles.lgsDot} />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

          </div>
        </section>

        {/* ── SECTION 2: Roll Forming Machine ── */}
        <section className={styles.rollMachineSection}>
          <h2 className={styles.rollMachineTitle}>Roll Forming Machine</h2>
          <p className={styles.rollMachineSub}>
            FAECOM integrates advanced roll forming machine technology to enhance precision and efficiency in steel fabrication. We work with industry-leading machines, including:
          </p>

          <div className={styles.machinesGrid}>
            {ROLL_MACHINES.map((m) => (
              <div key={m.name} className={styles.machineCard}>
                <div className={styles.machineImgWrap}>
                  <Image
                    src={m.image}
                    alt={m.name}
                    fill
                    style={{ objectFit: 'contain' }}
                  />
                </div>
                <div className={styles.machineName}>{m.name}</div>
              </div>
            ))}
          </div>

          <p className={styles.rollMachineFooterNote}>
            FAECOM utilizes a wide range of roll forming machines available in the market, ensuring maximum flexibility and adaptability for diverse project requirements.
          </p>
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
