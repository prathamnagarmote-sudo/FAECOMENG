'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const FV = { hidden:{ opacity:0, y:32 }, show:{ opacity:1, y:0 } };
const BADGES = ['ACI 318','IS 456','BS 8110','AutoCAD','Tekla','Revit','BIM 360','PT-Data'];
const CONCRETE_SVCS = [
  {t:'Structural Design & Detailing',d:'Detailed design of beams, columns, slabs, foundations, and retaining walls with reinforcement drawings.'},
  {t:'Support of Excavation (SOE)',d:'Temporary and permanent excavation support systems including shoring and underpinning drawings.'},
  {t:'Rebar Shop Drawings',d:'Comprehensive reinforcement detailing with bar bending schedules for optimized material use.'},
  {t:'Foundation Design & Drawings',d:'Isolated footings, raft foundations, pile caps, and grade slab design with full structural drawings.'},
  {t:'Material Optimization',d:'Concrete mix design recommendations, pouring sequences, and quality control protocols.'},
];
const REBAR_SVCS = [
  {t:'Rebar Detailing Drawings (2D & 3D)',d:'Precise 2D and advanced 3D rebar detailing for all structural elements.'},
  {t:'Bar Bending Schedules (BBS)',d:'Expert BBS generation to optimize material use and simplify fabrication.'},
  {t:'Material Take-Offs (MTO)',d:'Precise rebar quantities and listings for accurate procurement and budgeting.'},
  {t:'Placement Plans & Installation Drawings',d:'Clear plans guiding seamless rebar installation on site.'},
  {t:'Formwork Shop Drawings',d:'Detailed formwork drawings for accurate and efficient concrete construction.'},
  {t:'3D Rebar Modeling & BIM Integration',d:'Enhanced collaboration, clash detection, and optimized project workflows.'},
  {t:'Shoring Design & Calculations',d:'Robust shoring designs ensuring safety and stability during construction.'},
  {t:'PE Seal & Stamp',d:'PE-stamped engineering for all US states ensuring regulatory compliance.'},
];
const PRECAST_SVCS = [
  {t:'Cast In-Situ Concrete Design',d:'Tailored structural designs for on-site casting with flexibility for unique project requirements.'},
  {t:'Precast Element Engineering',d:'Detailing and design of precast slabs, beams, columns, and wall panels for off-site manufacturing.'},
  {t:'Connection Detailing for Precast',d:'Joints and connections designed for structural continuity, assembly ease, and long-term durability.'},
  {t:'Lift & Handling Design',d:'Engineering support for safe transport, lifting, and installation of precast elements.'},
  {t:'Hybrid Solutions',d:'Integration of in-situ and precast methods for high-rise, infrastructure, and modular buildings.'},
  {t:'Formwork & Shuttering Drawings',d:'Accurate formwork design for complex geometries, optimizing labor and material use.'},
];

export default function RebarConcretePage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
        <PageHero label="Engineering Services" title={<span>Rebar Detailing &</span>} titleEm={<span>Concrete Solutions</span>}
          subtitle={<span>Precise placing drawings, bar bending schedules, and comprehensive concrete reinforcement detailing — from 2D to 3D BIM integration, all PE-stamped for US compliance.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/f_auto,q_auto/v1786443919/concrete_and_rebar_solutions.png" imageScale="0.9, 1" />
      </motion.div>

      <motion.div className={styles.statsStrip} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4, duration:0.6 }}>
        <div className={styles.statsRow}>
          {[{num:'3',label:'Service Specializations'},{num:'All US',label:'States PE-Stamped'},{num:'2D + 3D',label:'Detailing Capability'},{num:'BIM-Ready',label:'Clash-Free Coordination'}].map(s=>(
            <div key={s.label} className={styles.statItem}><span className={styles.statNum}>{s.num}</span><span className={styles.statLabel}>{s.label}</span></div>
          ))}
        </div>
      </motion.div>

      <div className={styles.introSection}>
        <div className={styles.introInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Rebar & Concrete</div>
            <h2 className={styles.sectionTitle}>Structural Concrete Design for <em>Every Project Type</em></h2>
            <p className={styles.sectionDesc}>FAECOM specializes exclusively in the design and detailing of concrete structures — delivering precise, reliable, and code-compliant solutions from concept through construction documentation.</p>
            <div className={styles.badgesWrap}>{BADGES.map((b,i)=>(<motion.span key={b} className={styles.badge} initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.05 }}><span className={styles.badgeDot}/>{b}</motion.span>))}</div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 1: Concrete image | Concrete services */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Concrete Design</div>
            <h2 className={styles.sectionTitle}>Structural Concrete <em>Design Services</em></h2>
          </motion.div>
          <motion.div className={styles.featureRow} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/f_auto,q_auto/v1786534150/225TH_STREET_CSS.png" alt="225th Street Structural Concrete" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>225th Street, New York</div>
            </div>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>Concrete Design Services Include</div>
              <div className={styles.gap16}>
                {CONCRETE_SVCS.map((s,i)=>(<motion.div key={s.t} initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.07, duration:0.4 }}>
                  <div className={styles.cardTitle} style={{ marginBottom:'3px' }}>{s.t}</div>
                  <div className={styles.cardDesc}>{s.d}</div>
                </motion.div>))}
              </div>
              <div className={styles.whyBox}>
                <div className={styles.whyBoxTitle}>Why Choose FAECOM for Concrete Design?</div>
                <ul className={styles.blockList}>
                  {['Expert structural engineers focused on design precision and code compliance.','Advanced BIM-enabled workflows for clash-free coordination.','Detailed, code-compliant drawings to facilitate smooth contractor execution.','Commitment to quality, safety, and sustainability.'].map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 2: Rebar services | 4 images */}
      <div className={styles.cardsSection}>
        <div className={styles.cardsSectionInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Rebar Detailing</div>
            <h2 className={styles.sectionTitle}>Precision Rebar Detailing <em>Solutions</em></h2>
          </motion.div>
          <motion.div className={`${styles.featureRow} ${styles.featureRowReverse}`} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>Core Rebar Detailing Services</div>
              <div className={styles.gap16}>
                {REBAR_SVCS.map((s,i)=>(<motion.div key={s.t} initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.06, duration:0.4 }}>
                  <div className={styles.cardTitle} style={{ marginBottom:'3px' }}>{s.t}</div>
                  <div className={styles.cardDesc}>{s.d}</div>
                </motion.div>))}
              </div>
            </div>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/f_auto,q_auto/v1786534151/5TH_AVENUE_New_York_NY_10011_CSS.png" alt="5th Avenue New York Rebar" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>5th Avenue, New York</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Precast Cards */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Precast Solutions</div>
            <h2 className={styles.sectionTitle}>Cast In-Situ & Precast <em>Concrete Systems</em></h2>
            <p className={styles.sectionDesc}>FAECOM delivers precision-engineered solutions for both cast in-situ and precast systems — ensuring strength, speed, and cost-efficiency across diverse construction projects.</p>
          </motion.div>
          <div className={styles.cardsGrid}>
            {PRECAST_SVCS.map((s,i)=>(<motion.div key={s.t} className={styles.serviceCard} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08, duration:0.45 }}>
              <div className={styles.cardTitle}>{s.t}</div>
              <div className={styles.cardDesc}>{s.d}</div>
            </motion.div>))}
          </div>
          <motion.div className={styles.whyBox} style={{ marginTop:'28px' }} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6, delay:0.2 }}>
            <div className={styles.whyBoxTitle}>Why Choose FAECOM for Rebar & Concrete?</div>
            <ul className={styles.blockList}>
              {['Accurate, code-compliant rebar designs with fast, precise detailing.','Cost-effective solutions that optimize material use and reduce on-site waste.','BIM-integrated workflows ensuring seamless coordination and clash-free execution.','PE-stamped for all US states — committed to quality, safety, and sustainability.'].map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
            </ul>
          </motion.div>
        </div>
      </div>

      <div className={styles.deliverables}><TwoDeliverablesSections /></div>
      <CtaSection />
    </div>
  );
}
