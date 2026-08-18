'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from './steel.module.css';

export default function StructuralSteelPage() {
  return (
    <>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <PageHero
          label="Engineering Services"
          title={<span style={{ fontWeight: 'bold' }}>Structural</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Steel Solutions</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Heavy structural steel detailing, connection engineering, and fabrication documentation.</span>}
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
                  src="/images/expertise_steel.png"
                  alt="3D Structural Steel Frame Model"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.steelImageCard}>
                <Image
                  src="/images/hero_white_bim.png"
                  alt="3D Steel Connection Joint Detail Model"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.steelImageCard}>
                <Image
                  src="/images/who_we_are.png"
                  alt="Structural Steel Erection & Bolted Connections"
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
