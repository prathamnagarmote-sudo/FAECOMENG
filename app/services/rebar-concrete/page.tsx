'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, Download, Eye, ChevronLeft, ChevronRight } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from './rebar.module.css';


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


export default function RebarConcretePage() {
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
          title={<span style={{ fontWeight: 'bold' }}>Rebar</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Detailing & Concrete Solutions</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Precise placing drawings, bar lists, and concrete reinforcement detailing.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443919/concrete_and_rebar_solutions.png"
        />
      </motion.div>

      <div className="divider" />

      <div className={styles.rebarContainer}>
        {/* ── PART 1: Our Concrete Design Services ── */}
        <section className={styles.rebarSection}>
          <div className={styles.rebarTwoColGrid}>
            {/* Left Column: 2 Structural CAD Drawing Layout Cards */}
            <div className={styles.imagesStack}>
              <div className={styles.imageCard}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786534150/225TH_STREET_CSS.png"
                  alt="225th Street Structural Concrete Design Drawing"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.imageCard}>
                <Image
                  src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786534156/RUIZ_RESIDENCE_USA_CSS.png"
                  alt="Ruiz Residence Foundation Footing Rebar Plan"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column: Concrete Design Services & Foundation Design */}
            <div className={styles.contentCol}>
              <h2 className={styles.sectionTitle}>Our Concrete Design Services include:</h2>

              {/* STRUCTURAL DESIGN & DETAILING */}
              <div className={styles.serviceBlock}>
                <h3 className={styles.serviceBlockTitle}>STRUCTURAL DESIGN & DETAILING</h3>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Detailed design of concrete elements such as beams, columns, slabs, foundations, and retaining walls.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Preparation of reinforcement drawings and bar bending schedules aligned with industry standards.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>BIM-integrated design workflows ensuring accuracy and coordination.</span></li>
                </ul>
              </div>

              {/* SUPPORT OF EXCAVATION (SOE) DESIGN AND DRAWINGS */}
              <div className={styles.serviceBlock}>
                <h3 className={styles.serviceBlockTitle}>SUPPORT OF EXCAVATION (SOE) DESIGN AND DRAWINGS</h3>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Design of temporary and permanent excavation support systems to ensure site safety during excavation.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Detailed SOE drawings for soil retention, shoring, and underpinning.</span></li>
                </ul>
              </div>

              {/* REBAR DETAILING AND CONCRETE SHOP DRAWINGS */}
              <div className={styles.serviceBlock}>
                <h3 className={styles.serviceBlockTitle}>REBAR DETAILING AND CONCRETE SHOP DRAWINGS</h3>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Comprehensive reinforcement detailing for optimized material use and structural integrity.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Accurate concrete shop drawings with bar bending schedules to guide fabrication and installation.</span></li>
                </ul>
              </div>

              {/* MATERIAL OPTIMIZATION & CONSTRUCTION PLANNING */}
              <div className={styles.serviceBlock}>
                <h3 className={styles.serviceBlockTitle}>MATERIAL OPTIMIZATION & CONSTRUCTION PLANNING</h3>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Recommendations for concrete mix design tailored to project performance and durability requirements.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Designing concrete pouring and curing sequences integrated with project schedules for efficient execution.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Design-level input for quality control and testing protocols to meet strength and consistency standards.</span></li>
                </ul>
              </div>

              {/* FOUNDATION DESIGN & DRAWINGS */}
              <div className={styles.serviceBlock}>
                <h3 className={styles.serviceBlockTitle}>FOUNDATION DESIGN & DRAWINGS</h3>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Isolated and combined footing design with detailed reinforcement.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Raft / mat foundation design with structural drawings.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Pile foundation layout and pile cap detailing.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Grade slab and plinth beam design drawings.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Soil-structure interaction-based structural design.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Code-compliant design (IS, ACI, or project-specific standards).</span></li>
                </ul>
              </div>

              {/* Why Choose Faecom for Concrete Design? */}
              <div className={styles.whyBox}>
                <h3 className={styles.whyBoxTitle}>Why Choose Faecom for Concrete Design?</h3>
                <ul className={styles.bulletList}>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Expert structural engineers focused on design precision.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Advanced BIM-enabled workflows for clash-free coordination.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Detailed, code-compliant drawings to facilitate smooth construction by contractors.</span></li>
                  <li className={styles.bulletItem}><span className={styles.squareDot} /><span>Commitment to quality, safety, and sustainability.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ── PART 2: Rebar Detailing Solutions ── */}
        <section className={styles.rebarSectionBordered}>
          <h2 className={styles.mainCenteredTitle}>Rebar Detailing Solutions</h2>
          <div className={styles.centeredSubtitle}>About Our Rebar Detailing Solutions Expertise</div>
          <p className={styles.centeredDesc}>
            At Faecom Engineering Services, we provide comprehensive Rebar Detailing and Structural Drafting Services tailored to meet the highest global standards. From basic 2D detailing to advanced 3D BIM integration, our team delivers precise, code-compliant rebar shop drawings and construction documents with fast turnaround and unmatched accuracy.
          </p>

          <div className={styles.rebarTwoColGrid}>
            {/* Left Column: 4 Rebar Detailing Blueprint Images */}
            <div className={styles.imagesStack}>
              <div className={styles.imageCard}>
                <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786534151/5TH_AVENUE_New_York_NY_10011_CSS.png" alt="5th Avenue New York Rebar Shop Drawing" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.imageCard}>
                <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786535051/GRAND_CONCOURSE_BRONX_USA_CSS.png" alt="Grand Concourse Bronx Structural Detailing" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.imageCard}>
                <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786535053/UTPHIN_BOULEVARD_CSS.png" alt="Utphin Boulevard Rebar Placement Layout" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.imageCard}>
                <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786535187/JUNCTION_BLVD_QUEENS_CSS.png" alt="Junction Blvd Queens Reinforcement Detail" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>

            {/* Right Column: Core Services List */}
            <div className={styles.contentCol}>
              <h2 className={styles.sectionTitle}>Our Core Services Include:</h2>
              <ul className={styles.bulletList} style={{ gap: '16px' }}>
                {[
                  { label: 'REBAR DETAILING DRAWINGS (2D & 3D)', desc: 'We create precise 2D and advanced 3D rebar detailing drawings, providing clear visualization and accurate representation of reinforcement placement for all structural elements.' },
                  { label: 'BAR BENDING SCHEDULES (BBS)', desc: 'Our expertly generated Bar Bending Schedules optimize material utilization and simplify fabrication, ensuring cost-effectiveness and minimizing on-site waste.' },
                  { label: 'MATERIAL TAKE-OFFS (MTO) & REBAR LISTING', desc: 'Get precise quantities of reinforcement steel and detailed rebar listings for accurate procurement and project budgeting.' },
                  { label: 'PLACEMENT PLANS & INSTALLATION DRAWINGS', desc: 'Clear, easy-to-follow plans and drawings guide the seamless installation of rebar on your construction site.' },
                  { label: 'FORMWORK SHOP DRAWINGS', desc: 'We provide detailed formwork drawings that ensure accurate and efficient construction of concrete elements.' },
                  { label: 'SHORING DESIGN AND CALCULATIONS', desc: 'Our team offers robust shoring designs and calculations to ensure the safety and stability of your structures during construction.' },
                  { label: 'REBAR SHOP DRAWINGS & BBS', desc: 'Meticulous shop drawings and bar bending schedules are the cornerstone of accurate rebar fabrication and placement.' },
                  { label: '3D REBAR MODELING & BIM INTEGRATION', desc: 'Leverage the power of 3D modeling and Building Information Modeling (BIM) for enhanced collaboration, clash detection, and optimized project workflows.' },
                  { label: 'SPECIALIZED REINFORCEMENT DETAILING', desc: 'From Foundation, Slab, Column & Beam Reinforcement to complex Bridge & Infrastructure Detailing, we cover all your structural needs.' },
                  { label: 'ESTIMATION & MATERIAL TAKEOFF', desc: 'Accurate estimations and material takeoffs provide you with clear insights into project costs from the outset.' },
                  { label: 'FAST TURNAROUND & QUALITY ASSURANCE', desc: 'Accurate estimations and material takeoffs provide you with clear insights into project costs from the outset.' },
                  { label: 'PROFESSIONAL ENGINEER SEAL AND STAMP', desc: 'Our commitment to quality is reinforced with professional engineer seals and stamps, guaranteeing compliance and reliability.' },
                  { label: 'ENGINEERING FOR ALL US STATES', desc: 'We possess the expertise and licensing to provide rebar detailing and engineering services compliant with codes and standards across all US states.' },
                ].map((item, i) => (
                  <li key={i} className={styles.bulletItem} style={{ flexDirection: 'column', gap: '2px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className={styles.squareDot} />
                      <span style={{ fontWeight: 800, color: '#161347', fontSize: '14px' }}>{item.label}</span>
                    </div>
                    <span style={{ fontSize: '13.5px', color: '#4A4A5A', paddingLeft: '13px', lineHeight: 1.5 }}>{item.desc}</span>
                  </li>
                ))}
              </ul>

              {/* Why Choose Faecom for Rebar Detailing? */}
              <div className={styles.whyBox}>
                <h3 className={styles.whyBoxTitle}>Why Choose Faecom for Rebar Detailing?</h3>
                <p style={{ fontSize: '13.5px', color: '#383848', lineHeight: 1.6 }}>
                  We deliver accurate, code-compliant rebar designs with fast, precise detailing. Our cost-effective solutions optimize material use, backed by an experienced team meeting global standards. We are dedicated to reducing errors, enhancing safety, and ensuring the smooth execution of your construction projects.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── PART 3: Cast In-Situ Concrete & Precast Solutions ── */}
        <section className={styles.rebarSectionBordered}>
          <h2 className={styles.mainCenteredTitle}>Cast In-Situ Concrete & Precast Solutions</h2>
          <div className={styles.centeredSubtitle}>About Our Precast Solutions Expertise</div>
          <p className={styles.centeredDesc}>
            FAECOM Engineering delivers precision-engineered solutions for both cast in-situ concrete and precast systems, ensuring strength, speed, and cost-efficiency across diverse construction projects.
          </p>

          <div style={{ maxWidth: '900px', margin: '0 auto' }}>
            <ul className={styles.bulletList} style={{ gap: '16px', marginBottom: '40px' }}>
              {[
                { label: 'CAST IN-SITU CONCRETE DESIGN', desc: 'Tailored structural designs for on-site casting, ensuring flexibility and adaptability for unique project requirements.' },
                { label: 'PRECAST ELEMENT ENGINEERING', desc: 'Detailing and design of precast components like slabs, beams, columns, and walls for off-site manufacturing and on-site assembly.' },
                { label: 'FORMWORK & SHUTTERING DRAWINGS', desc: 'Accurate and efficient formwork design for complex geometries, optimizing labor and material use.' },
                { label: 'REINFORCEMENT DETAILING (REBAR SHOP DRAWINGS)', desc: 'Precision-detailed rebar drawings to guide reinforcement placement for both in-situ and precast concrete.' },
                { label: 'CONNECTION DETAILING FOR PRECAST', desc: 'Design of joints and connections to ensure structural continuity, ease of assembly, and long-term durability.' },
                { label: 'LIFT & HANDLING DESIGN', desc: 'Engineering support for safe transport, lifting, and installation of precast elements.' },
                { label: 'HYBRID SOLUTIONS', desc: 'Integration of cast in-situ and precast methods for optimized performance in high-rise, infrastructure, and modular buildings.' },
              ].map((item, i) => (
                <li key={i} className={styles.bulletItem} style={{ flexDirection: 'column', gap: '2px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span className={styles.squareDot} />
                    <span style={{ fontWeight: 800, color: '#161347', fontSize: '14.5px' }}>{item.label}</span>
                  </div>
                  <span style={{ fontSize: '14px', color: '#4A4A5A', paddingLeft: '13px', lineHeight: 1.6 }}>{item.desc}</span>
                </li>
              ))}
            </ul>

            <div className={styles.whyBox} style={{ textAlign: 'center', borderLeft: 'none', borderTop: '4px solid #161347', borderRadius: '8px' }}>
              <h3 className={styles.whyBoxTitle}>Why Choose Faecom for Precast Solutions?</h3>
              <p style={{ fontSize: '14px', color: '#383848', lineHeight: 1.7 }}>
                Faecom delivers precision-engineered precast solutions tailored for speed, efficiency, and quality. With BIM-integrated detailing, we ensure seamless coordination across disciplines, reducing errors and construction delays. Our off-site fabrication process minimizes on-site labor and material waste, enabling faster project turnaround and cost-effective execution. Each design complies with global standards and is optimized for safe installation, whether for modular housing, commercial complexes, or industrial facilities. At Faecom, we combine engineering excellence with practical innovation to help clients build smarter and faster.
              </p>
            </div>
          </div>
        </section>

        {/* ── PART 4: Deliverables Grid ── */}
        
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
