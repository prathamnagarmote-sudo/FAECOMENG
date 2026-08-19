'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const BADGES = ['ACI 318', 'IS 456', 'BS 8110', 'AutoCAD', 'Tekla', 'Revit', 'BIM 360', 'PT-Data'];

const CONCRETE_SERVICES = [
  { t: 'Structural Design & Detailing', d: 'Detailed design of beams, columns, slabs, foundations, and retaining walls with reinforcement drawings.' },
  { t: 'Support of Excavation (SOE)', d: 'Design of temporary and permanent excavation support systems including shoring and underpinning drawings.' },
  { t: 'Rebar Shop Drawings', d: 'Comprehensive reinforcement detailing with bar bending schedules for optimized material use.' },
  { t: 'Foundation Design & Drawings', d: 'Isolated footings, raft foundations, pile caps, and grade slab design with full structural drawings.' },
  { t: 'Material Optimization', d: 'Concrete mix design recommendations, pouring sequences, and quality control protocols.' },
];

const REBAR_SERVICES = [
  { t: 'Rebar Detailing Drawings (2D & 3D)', d: 'Precise 2D and advanced 3D rebar detailing for all structural elements.' },
  { t: 'Bar Bending Schedules (BBS)', d: 'Expert BBS generation to optimize material use and simplify fabrication.' },
  { t: 'Material Take-Offs (MTO)', d: 'Precise rebar quantities and listings for accurate procurement and budgeting.' },
  { t: 'Placement Plans & Installation Drawings', d: 'Clear plans guiding seamless rebar installation on site.' },
  { t: 'Formwork Shop Drawings', d: 'Detailed formwork drawings for accurate and efficient concrete construction.' },
  { t: '3D Rebar Modeling & BIM Integration', d: 'Enhanced collaboration, clash detection, and optimized project workflows.' },
  { t: 'Shoring Design & Calculations', d: 'Robust shoring designs ensuring safety and stability during construction.' },
  { t: 'PE Seal & Stamp', d: 'PE-stamped engineering for all US states ensuring regulatory compliance.' },
];

const PRECAST_SERVICES = [
  { t: 'Cast In-Situ Concrete Design', d: 'Tailored structural designs for on-site casting with flexibility for unique project requirements.' },
  { t: 'Precast Element Engineering', d: 'Detailing and design of precast slabs, beams, columns, and wall panels for off-site manufacturing.' },
  { t: 'Formwork & Shuttering Drawings', d: 'Accurate formwork design for complex geometries, optimizing labor and material use.' },
  { t: 'Connection Detailing for Precast', d: 'Joints and connections designed for structural continuity, assembly ease, and long-term durability.' },
  { t: 'Lift & Handling Design', d: 'Engineering support for safe transport, lifting, and installation of precast elements.' },
  { t: 'Hybrid Solutions', d: 'Integration of in-situ and precast methods for high-rise, infrastructure, and modular buildings.' },
];

export default function RebarConcretePage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
        <PageHero
          label="Engineering Services"
          title={<span>Rebar Detailing &</span>}
          titleEm={<span>Concrete Solutions</span>}
          subtitle={<span>Precise placing drawings, bar bending schedules, and comprehensive concrete reinforcement detailing — from basic 2D to advanced 3D BIM integration, all PE-stamped for US compliance.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443919/concrete_and_rebar_solutions.png"
          imageScale="0.9, 1"
        />
      </motion.div>

      {/* Stats */}
      <div className={styles.statsStrip}>
        <div className={styles.statsRow}>
          {[
            { num: '3', label: 'Service Specializations' },
            { num: 'All US', label: 'States PE-Stamped' },
            { num: '2D + 3D', label: 'Detailing Capability' },
            { num: 'BIM-Ready', label: 'Clash-Free Coordination' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1 — Concrete Design */}
      <section className={styles.section}>
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Concrete Engineering</div>
        <h2 className={styles.sectionTitle}>Structural Concrete Design for <em>Every Project Type</em></h2>
        <p className={styles.sectionDesc}>FAECOM specializes exclusively in the design and detailing of concrete structures — delivering precise, reliable, and code-compliant solutions from concept through construction documentation.</p>
        <div className={styles.badgesWrap}>
          {BADGES.map((b) => <span key={b} className={styles.badge}><span className={styles.badgeDot}/>{b}</span>)}
        </div>
        <div className={styles.twoCol}>
          <div className={styles.imgStack}>
            <div className={styles.imgCard}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786534150/225TH_STREET_CSS.png" alt="225th Street Structural Concrete Drawing" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.imgCard}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786534156/RUIZ_RESIDENCE_USA_CSS.png" alt="Ruiz Residence Foundation Rebar Plan" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className={styles.contentCol}>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Concrete Design Services</div>
              <ul className={styles.blockList}>
                {CONCRETE_SERVICES.map((s) => (
                  <li key={s.t} className={styles.blockItem}><span className={styles.dot}/><span><strong>{s.t}</strong> — {s.d}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Rebar Detailing */}
      <div className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Rebar Detailing</div>
          <h2 className={styles.sectionTitle}>Precision Rebar Detailing for <em>Every Structural Element</em></h2>
          <p className={styles.sectionDesc}>From foundation to roof, our team delivers code-compliant rebar shop drawings and BIM-integrated detailing with fast turnaround and unmatched accuracy.</p>
          <div className={styles.twoCol}>
            <div className={styles.imgStack}>
              <div className={styles.imgCard}>
                <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786534151/5TH_AVENUE_New_York_NY_10011_CSS.png" alt="5th Avenue New York Rebar Drawing" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.imgCard}>
                <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786535051/GRAND_CONCOURSE_BRONX_USA_CSS.png" alt="Grand Concourse Bronx Structural Detailing" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.imgCard}>
                <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786535053/UTPHIN_BOULEVARD_CSS.png" alt="Utphin Boulevard Rebar Placement Layout" fill style={{ objectFit: 'cover' }} />
              </div>
              <div className={styles.imgCard}>
                <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786535187/JUNCTION_BLVD_QUEENS_CSS.png" alt="Junction Blvd Queens Reinforcement Detail" fill style={{ objectFit: 'cover' }} />
              </div>
            </div>
            <div className={styles.cardsGrid} style={{ gridTemplateColumns: '1fr', alignContent: 'start' }}>
              {REBAR_SERVICES.map((s) => (
                <div key={s.t} className={styles.serviceCard}>
                  <div className={styles.cardTitle}>{s.t}</div>
                  <div className={styles.cardDesc}>{s.d}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Section 3 — Precast */}
      <section className={styles.section}>
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Precast Solutions</div>
        <h2 className={styles.sectionTitle}>Cast In-Situ & Precast <em>Concrete Systems</em></h2>
        <p className={styles.sectionDesc}>FAECOM delivers precision-engineered solutions for both cast in-situ and precast systems — ensuring strength, speed, and cost-efficiency across diverse construction projects.</p>
        <div className={styles.cardsGrid}>
          {PRECAST_SERVICES.map((s) => (
            <div key={s.t} className={styles.serviceCard}>
              <div className={styles.cardTitle}>{s.t}</div>
              <div className={styles.cardDesc}>{s.d}</div>
            </div>
          ))}
        </div>
        <div className={styles.whyBox} style={{ marginTop: '32px' }}>
          <div className={styles.whyBoxTitle}>Why Choose FAECOM for Rebar & Concrete?</div>
          <ul className={styles.blockList}>
            {[
              'Expert structural engineers focused on design precision and code compliance.',
              'Advanced BIM-enabled workflows for clash-free multi-discipline coordination.',
              'Detailed, code-compliant drawings that facilitate smooth contractor execution.',
              'Commitment to quality, safety, and sustainability on every project.',
              'Fast turnaround with professional PE seal and stamp for all US states.',
            ].map((b) => (
              <li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>
            ))}
          </ul>
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
