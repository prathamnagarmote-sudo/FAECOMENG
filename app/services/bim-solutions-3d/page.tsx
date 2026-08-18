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


export default function BIMIntegratedSolutionsPage() {
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
          title={<span style={{ fontWeight: 'bold' }}>BIM Integrated</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Solutions 3D</span>}
          subtitle={
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <h2 style={{ fontSize: 'clamp(24px, 3vw, 32px)', fontWeight: '900', color: '#FF6B2C', margin: '8px 0 0 0', lineHeight: 1.2 }}>
                About Our BIM Integrated Solutions 3D Expertise
              </h2>
              <span style={{ color: '#FF6B2C', fontWeight: 'bold' }}>
                Integrated BIM workflows across architecture, structure, and MEP disciplines for efficient project delivery.
              </span>
              <p style={{ color: '#000000', fontSize: '16.5px', lineHeight: 1.6, margin: 0, fontWeight: 'bold', fontFamily: 'var(--font-body)' }}>
                End-to-end 3D BIM integration for effective project management, accurate visualization, and seamless construction execution.
              </p>
              <p style={{ color: '#000000', fontSize: '16.5px', lineHeight: 1.6, margin: 0, fontWeight: 'bold', fontFamily: 'var(--font-body)' }}>
                Delivering immersive, data-rich visual experiences that enhance design understanding, stakeholder engagement, and decision-making.
              </p>
            </div>
          }
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443953/Bim_integrated_3d.jpg"
        />
      </motion.div>

      <div className="divider" />

      <div className={styles.lgsContainer}>
        {/* ── SECTION 1: Features & Why Faecom Engineering ── */}
        <section className={styles.lgsOverviewSection}>
          <div className={styles.lgsOverviewGrid}>
            {/* Left Column: Stack of 2 3D Building Renders */}
            <div className={styles.lgsImagesStack}>
              <div className={styles.lgsImageCard} style={{ height: '260px' }}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1787034262/Loom_Screenshot_2026-08-18_at_11.54.11.png"
                  alt="3D Building Render Model Perspective"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard} style={{ height: '260px' }}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1787034358/Loom_Screenshot_2026-08-18_at_11.55.15.png"
                  alt="Full Elevation Architectural 3D Render"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column: 13 Features & Why Faecom Engineering */}
            <div className={styles.lgsContentCol}>
              <ul className={styles.lgsTopBullets} style={{ gap: '10px', marginBottom: '40px' }}>
                {[
                  { label: 'Photorealistic 3D Renders', desc: 'High-quality, lifelike images for real-time design visualization.' },
                  { label: '360° Virtual Walkthroughs', desc: 'Interactive exploration of the building interior & exterior.' },
                  { label: 'Architectural & Interior Visualization', desc: 'Detailed views of facade, layout, material & furniture.' },
                  { label: 'Interactive 3D Models', desc: 'Real-time manipulation for faster client feedback and design changes.' },
                  { label: 'Virtual Reality (VR) Experiences', desc: 'Fully immersive walkthroughs for presentations and design reviews.' },
                  { label: 'Augmented Reality (AR) Integration', desc: 'Overlay models on real-world spaces via phone/tablet.' },
                  { label: 'Clash Detection & Conflict Resolution', desc: 'Identify issues before construction begins to save cost & time.' },
                  { label: 'Quantity Take-Offs & Cost Estimation', desc: 'Auto-generated BOQs directly from BIM model.' },
                  { label: 'Construction Phasing (4D BIM)', desc: 'Simulate timelines, visualize sequences, and avoid delays.' },
                  { label: 'Facilities Management (5D/6D BIM)', desc: 'Integrate asset, maintenance & lifecycle data post-construction.' },
                  { label: 'Energy Performance Analysis', desc: 'Analyze energy use and improve sustainability in design.' },
                  { label: 'Daylight & Shadow Analysis', desc: 'Study sun impact for better natural light planning.' },
                  { label: 'Customizable Asset Libraries', desc: 'Ready-to-use BIM components for faster and consistent modeling.' },
                ].map((feat, i) => (
                  <li key={i} className={styles.lgsTopBulletItem}>
                    <span className={styles.lgsDot} />
                    <span>
                      <span style={{ fontWeight: 800, color: '#161347' }}>{feat.label}</span> – {feat.desc}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Why Faecom Engineering? */}
              <div className={styles.lgsSystemBlock}>
                <h2 className={styles.lgsSystemTitle} style={{ fontSize: '26px' }}>Why Faecom Engineering?</h2>
                <ul className={styles.lgsSystemList} style={{ gap: '14px' }}>
                  {[
                    { label: 'BIM Expertise in AEC', desc: 'We specialize in high-quality BIM solutions customized for the Architecture, Engineering, and Construction industry.' },
                    { label: 'Automation-Focused Workflow', desc: 'From Dynamo scripts to Revit add-ins, we streamline processes and save time through intelligent automation.' },
                    { label: 'Custom Software Development', desc: 'We develop tools, dashboards, and apps (web/mobile) that solve project-specific challenges and improve coordination.' },
                    { label: 'Global Project Experience', desc: 'Trusted by clients across continents, we ensure fast, reliable, and standard-compliant project delivery.' },
                    { label: 'Strong QA/QC Systems', desc: 'Our rigorous multi-stage quality checks ensure every model and document meets the highest standards.' },
                  ].map((why, i) => (
                    <li key={i} className={styles.lgsSystemListItem} style={{ flexDirection: 'column', gap: '4px' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <span className={styles.lgsDot} />
                        <span style={{ fontWeight: 800, color: '#161347', fontSize: '15px' }}>{why.label}</span>
                      </div>
                      <span style={{ fontSize: '14px', color: '#4A4A5A', paddingLeft: '16px', lineHeight: 1.5 }}>{why.desc}</span>
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
