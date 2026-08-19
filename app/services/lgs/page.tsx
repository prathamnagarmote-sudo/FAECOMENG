'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const ROLL_MACHINES = [
  { name: 'FrameCad', image: '/images/machines/framecad.png' },
  { name: 'Howick', image: '/images/machines/howick.png' },
  { name: 'Knudson', image: '/images/machines/knudson.png' },
  { name: 'Unbak', image: '/images/machines/unbak.png' },
  { name: 'FrameMac', image: '/images/machines/framemac.png' },
  { name: 'Scottsdale', image: '/images/machines/scottsdale.png' },
];

const BADGES = ['AISI S100', 'AISC 360', 'ASCE 7', 'IBC 2021', 'REVIT', 'MWF StructSoft', 'Vertex-BD', 'FrameCAD', 'Howick'];

export default function LGSPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
        <PageHero
          label="Engineering Services"
          title={<span>Light Gauge Steel</span>}
          titleEm={<span>(LGS) Solutions</span>}
          subtitle={<span>Advanced cold-formed steel structural systems for residential, modular, and commercial construction. Precision-engineered for speed, efficiency, and code compliance.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443295/1662696676169_edited_edited_edited.jpg"
        />
      </motion.div>

      {/* Stats Strip */}
      <div className={styles.statsStrip}>
        <div className={styles.statsRow}>
          {[
            { num: '30–40%', label: 'Weight Reduction vs Concrete' },
            { num: '200+', label: 'LGS Projects Delivered' },
            { num: '6', label: 'Roll Machine Platforms Supported' },
            { num: '25+', label: 'Countries Served' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1 — Framing System */}
      <section className={styles.section}>
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>LGS Framing System</div>
        <h2 className={styles.sectionTitle}>Modern Structural Systems for <em>Fast & Efficient Construction</em></h2>
        <p className={styles.sectionDesc}>FAECOM provides full-spectrum LGS engineering for Residential Apartments, Affordable Housing, Hotels, Mixed-Use, and Modular buildings — from feasibility through machine file generation.</p>
        <div className={styles.badgesWrap}>
          {BADGES.map((b) => <span key={b} className={styles.badge}><span className={styles.badgeDot}/>{b}</span>)}
        </div>
        <div className={styles.twoCol}>
          <div className={styles.imgStack}>
            <div className={styles.imgCardLarge} style={{ height: 'clamp(280px,30vw,380px)' }}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786446264/NELSON_USA.png" alt="LGS Framing System — Nelson USA" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className={styles.contentCol}>
            <div className={styles.block}>
              <div className={styles.blockTitle}>LGS Framing System</div>
              <ul className={styles.blockList}>
                {[
                  { t: 'Modern Systems', d: 'Designed for fast and efficient construction of modern framed buildings.' },
                  { t: 'Cost & Weight Reduction', d: '30–40% reduction in CFS construction cost and weight.' },
                  { t: 'Multiple Stud Ranges', d: 'Multistory apartments, affordable housing, modular construction, and facade solutions.' },
                  { t: 'Versatile Applications', d: 'Load-bearing structures, modular construction, and infill wall systems.' },
                  { t: 'Panel & Stick-Build', d: 'Fast construction suitable for indigenous buildings and high-separation walls.' },
                  { t: 'Low-Rise Ideal', d: 'Ideal bearing systems where construction speed is critical.' },
                ].map((item) => (
                  <li key={item.t} className={styles.blockItem}>
                    <span className={styles.dot}/>
                    <span><strong>{item.t}</strong> — {item.d}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Systems (Load Bearing + Infill) */}
      <div className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Structural Systems</div>
          <h2 className={styles.sectionTitle}>Load Bearing & <em>Infill Systems</em></h2>
          <div className={styles.twoCol}>
            {/* Load Bearing */}
            <div>
              <div className={styles.imgCard} style={{ height: 'clamp(200px,22vw,260px)', marginBottom: '24px' }}>
                <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1787032485/1loadbearing.png" alt="Load Bearing System" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.block}>
                <div className={styles.blockTitle}>Load Bearing System</div>
                <ul className={styles.blockList}>
                  {[
                    'Feasibility analysis for multistory apartments, modular structures & affordable housing.',
                    'Design & analysis of LGS walls, floors, and trusses.',
                    'Revit structural drawings and detailed documentation.',
                    'Construction GA and shop drawings for walls, floors, and trusses.',
                    'Machine file generation for Howick, FrameCAD & roll-formed machines.',
                    'REVIT, MWF StructSoft, Vertex-BD, Scottsdale and FRAMECAD utilization.',
                  ].map((b) => (
                    <li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </div>
            {/* Infill */}
            <div>
              <div className={styles.imgCard} style={{ height: 'clamp(200px,22vw,260px)', marginBottom: '24px' }}>
                <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786446440/KHAN_HOUSE_CANADA.png" alt="Infill System — Khan House Canada" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.block}>
                <div className={styles.blockTitle}>Infill System</div>
                <ul className={styles.blockList}>
                  {[
                    'Design & analysis of LGS infill walls and façade supporting elements.',
                    'Revit structural drawings with precise connection details.',
                    'Construction GA and shop drawings for walls.',
                    'Building elevation designs integrated with SFS framing.',
                    'Material take-off for accurate project estimation.',
                  ].map((b) => (
                    <li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 — Roll Machines */}
      <section className={styles.section}>
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Machine Compatibility</div>
        <h2 className={styles.sectionTitle}>Roll Forming Machine <em>Integration</em></h2>
        <p className={styles.sectionDesc}>FAECOM generates machine-ready output files for all major CFS roll forming platforms, ensuring seamless handoff from design to fabrication.</p>
        <div className={styles.machinesGrid}>
          {ROLL_MACHINES.map((m) => (
            <div key={m.name} className={styles.machineCard}>
              <div className={styles.machineImgWrap}>
                <Image src={m.image} alt={m.name} fill style={{ objectFit: 'contain' }} />
              </div>
              <div className={styles.machineName}>{m.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <div className={styles.deliverables}>
        <TwoDeliverablesSections />
      </div>

      <CtaSection />
    </div>
  );
}
