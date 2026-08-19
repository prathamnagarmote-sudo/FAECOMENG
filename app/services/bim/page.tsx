'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const FV = { hidden:{ opacity:0, y:32 }, show:{ opacity:1, y:0 } };
const BADGES = ['Revit','AutoCAD','LOD 300/400','IFC','ISO 19650','AIA G202','NBIMS-US','COBie'];
const SERVICES = [
  { title:'Floor Plans', desc:'Accurate room layouts, door/window openings, dimensions, and spatial arrangements ready for permit submission.' },
  { title:'Elevations', desc:'Exterior facades, finishes, rooflines, and precise height details for design review and approvals.' },
  { title:'Sections & Details', desc:'Cross-sectional views with structural elements, material callouts, stairs, railings, and wall assembly details.' },
  { title:'3D BIM Modeling', desc:'Detailed interior and exterior 3D architectural models with full LOD 300/400 compliance.' },
  { title:'Renderings & Visualizations', desc:'Photorealistic renderings for client presentations, stakeholder approvals, and marketing packages.' },
  { title:'Permit & Construction Sets', desc:'Full architectural, structural, and MEP drawing sets prepared to local building code and permit standards.' },
  { title:'Zoning & Land-Use Analysis', desc:'Regulatory compliance checks, setback analysis, and zoning verification during the planning phase.' },
  { title:'Sustainability Integration', desc:'Green design principles, LEED documentation support, and energy-efficient building strategies.' },
];

export default function ArchitecturalBIMPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
        <PageHero label="Engineering Services" title={<span>Architectural</span>} titleEm={<span>BIM Services</span>}
          subtitle={<span>Intelligent 3D BIM models that improve planning, eliminate design conflicts, and enhance multi-discipline project coordination from concept to construction.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443962/architectural_bim_services.jpg" imageScale="1.15, 1" />
      </motion.div>

      <motion.div className={styles.statsStrip} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4, duration:0.6 }}>
        <div className={styles.statsRow}>
          {[{num:'LOD 400',label:'Max Model Detail Level'},{num:'500+',label:'BIM Projects Completed'},{num:'10+',label:'Countries Served'},{num:'24–48 hr',label:'Typical Turnaround'}].map(s=>(
            <div key={s.label} className={styles.statItem}><span className={styles.statNum}>{s.num}</span><span className={styles.statLabel}>{s.label}</span></div>
          ))}
        </div>
      </motion.div>

      <div className={styles.introSection}>
        <div className={styles.introInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Architectural BIM</div>
            <h2 className={styles.sectionTitle}>BIM-Integrated Models That <em>Streamline Every Phase</em></h2>
            <p className={styles.sectionDesc}>Complete architectural BIM solutions for residential, commercial, and industrial projects — from planning through permit-ready construction documentation.</p>
            <div className={styles.badgesWrap}>{BADGES.map((b,i)=>(<motion.span key={b} className={styles.badge} initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.05 }}><span className={styles.badgeDot}/>{b}</motion.span>))}</div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 1: image | Drawing services */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div className={styles.featureRow} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786532615/CAMPBELL_RESIDENCE_WALTON_USA_ABIM.png" alt="Campbell Residence Walton USA BIM" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>Campbell Residence, Walton USA</div>
            </div>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>Architectural Drawing Services</div>
              <ul className={styles.blockList}>
                {[{t:'Floor Plans',d:'Accurate room layouts, openings, dimensions, and spatial arrangements.'},{t:'Elevations',d:'Exterior facades, finishes, rooflines, and precise height details.'},{t:'Sections',d:'Cross-sectional views with structural elements, materials, and internal components.'},{t:'Details',d:'Stairs, railings, wall assemblies, and precision architectural features.'},{t:'3D BIM Models',d:'LOD 300/400 compliant interior and exterior architectural models.'}].map(item=>(<li key={item.t} className={styles.blockItem}><span className={styles.dot}/><span><strong>{item.t}</strong> — {item.d}</span></li>))}
              </ul>
              <div className={styles.whyBox}>
                <div className={styles.whyBoxTitle}>Permit & Construction Sets</div>
                <ul className={styles.blockList}>
                  {['Full architectural, structural, and MEP drawings for construction.','Drawings prepared per building codes and local regulations.','Support with drawing sets and coordination for permit submissions.','PE-stamped documentation for all US state submissions.'].map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Services grid */}
      <div className={styles.cardsSection}>
        <div className={styles.cardsSectionInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Full Service Suite</div>
            <h2 className={styles.sectionTitle}>Everything from <em>Design to Permit</em></h2>
          </motion.div>
          <div className={styles.cardsGrid}>
            {SERVICES.map((s,i)=>(<motion.div key={s.title} className={styles.serviceCard} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07, duration:0.45 }}><div className={styles.cardTitle}>{s.title}</div><div className={styles.cardDesc}>{s.desc}</div></motion.div>))}
          </div>
        </div>
      </div>

      <div className={styles.deliverables}><TwoDeliverablesSections /></div>
      <CtaSection />
    </div>
  );
}
