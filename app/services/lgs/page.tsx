'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
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

export default function LGSPage() {
  return (
    <>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <PageHero
          label="Engineering Services"
          title={<span style={{ fontWeight: 'bold' }}>Light Gauge Steel</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>(LGS) Solutions</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Advanced structural systems designed for fast and efficient construction.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443295/1662696676169_edited_edited_edited.jpg"
        />
      </motion.div>

      <div className="divider" />

      <div className={styles.lgsContainer}>
        {/* ── SECTION 1: LGS Systems & Overview ── */}
        <section className={styles.lgsOverviewSection}>
          <div className={styles.lgsOverviewGrid}>
            {/* Left Column: Stack of 3 3D Building Render Illustrations */}
            <div className={styles.lgsImagesStack}>
              <div className={styles.lgsImageCard}>
                <Image
                  src="/images/hero_clear_disciplines.png"
                  alt="LGS Multistory Steel Frame Structure Model"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard}>
                <Image
                  src="/images/expertise_lgs.png"
                  alt="LGS Multistory Residential Apartments Completed Render"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
              <div className={styles.lgsImageCard}>
                <Image
                  src="/images/luxury_house_3d_model.png"
                  alt="LGS 3D Framing Structural Truss Model"
                  fill
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Right Column: Bullets & Systems Breakdown */}
            <div className={styles.lgsContentCol}>
              <ul className={styles.lgsTopBullets}>
                <li className={styles.lgsTopBulletItem}>
                  <span className={styles.lgsDot} />
                  <span>Owner-focused solutions ensuring project success.</span>
                </li>
                <li className={styles.lgsTopBulletItem}>
                  <span className={styles.lgsDot} />
                  <span>World-class, client-oriented approaches that transform plans into successful stories.</span>
                </li>
                <li className={styles.lgsTopBulletItem}>
                  <span className={styles.lgsDot} />
                  <span>Advanced technology and engineering software integration.</span>
                </li>
              </ul>

              {/* LGS FRAMING SYSTEM */}
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

              {/* LOAD BEARING SYSTEM */}
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

              {/* INFILL SYSTEM */}
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
