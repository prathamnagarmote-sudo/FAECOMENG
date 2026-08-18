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
      <div style={{ width: '100%', height: '800px', background: '#FFFFFF', position: 'relative', overflow: 'hidden' }}>
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


export default function ICFPage() {
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
          title={<span style={{ fontWeight: 'bold' }}>ICF (Insulated</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Concrete Form) Solutions</span>}
          subtitle={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '900', color: '#FF6B2C', margin: '8px 0 0 0', lineHeight: 1.2 }}>
                About Our Insulated Concrete Form (ICF) Expertise
              </h2>
              <span style={{ color: '#FF6B2C', fontWeight: 'bold' }}>
                Energy-efficient concrete construction systems offering superior insulation, strength, and faster installation.
              </span>
              <p style={{ color: '#000000', fontSize: '16.5px', lineHeight: 1.6, margin: 0, fontWeight: 'bold', fontFamily: 'var(--font-body)' }}>
                FAECOM specializes in advanced Insulated Concrete Form (ICF) solutions, delivering high-performance, energy-efficient, and durable building systems. Our expertise spans Structural Engineering, Detailing, and Construction Support, ensuring compliance with industry standards while optimizing cost and performance.
              </p>
              <p style={{ color: '#000000', fontSize: '16.5px', lineHeight: 1.6, margin: 0, fontWeight: 'bold', fontFamily: 'var(--font-body)' }}>
                With extensive experience in ICF Technology, FAECOM provides engineering-backed solutions that offer superior thermal insulation, structural integrity, and sustainability. From Residential and Commercial Buildings to Industrial and Disaster-Resistant Structures, we bring cutting-edge ICF engineering to every project.
              </p>
            </div>
          }
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443935/ICF.jpg"
          imageScale="0.8"
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
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1787045994/icf_what_include.png"
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
