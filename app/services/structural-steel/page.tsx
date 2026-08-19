'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const FV = { hidden:{ opacity:0, y:32 }, show:{ opacity:1, y:0 } };
const BADGES = ['AISC 360-21','AISC 341-16','ACI 318-19','ASTM A992','NBCC 2020','CSA S16','AWS D1.1','ETABS','SAP2000'];
const SERVICES = [
  { title:'Structural Steel Analysis & Design', desc:'Ensuring stability, efficiency, and load-bearing capacity in all steel structures.' },
  { title:'Steel Modeling, Detailing & Shop Drawings', desc:'Precision-driven 3D models and fabrication-ready drawings for seamless execution.' },
  { title:'Structural Engineering Reports', desc:'Detailed documentation covering calculations, compliance, and approval requirements.' },
  { title:'Code-Compliant Engineering', desc:'Designs strictly adhering to AISC, ASTM, ACI, and global structural codes.' },
  { title:'Value-Engineered Designs', desc:'Optimized solutions to reduce material use while maximizing structural strength.' },
  { title:'BIM Integration for Steel', desc:'Advanced 3D modeling and coordination to reduce errors and streamline workflows.' },
  { title:'PE Seal & Stamping', desc:'Regulatory compliance with nationwide approvals across all US states.' },
  { title:'Custom Structural Solutions', desc:'Unique and tailored designs for high-rise buildings, bridges, and modular structures.' },
];
const CODES = [
  {t:'AISC 360-21',d:'Steel Building Standards'},{t:'AISC 341-16',d:'Seismic Steel Design'},{t:'AISC 358-16',d:'Prequalified Connections'},
  {t:'ACI 318-19',d:'Concrete Design Standards'},{t:'ASTM A992/A572',d:'Structural Steel Grades'},{t:'ASTM A36/A500',d:'Carbon Steel Standards'},
  {t:'AISI S100-16',d:'Cold-Formed Steel'},{t:'NBCC 2020',d:'Canada Building Code'},{t:'CSA S136-16',d:'Cold-Formed Steel Canada'},
  {t:'CSA S16-14',d:'Steel Structure Design'},{t:'ANSI/AWS D1.1',d:'Steel Welding'},{t:'RCSC 2020',d:'High-Strength Bolt Joints'},
  {t:'SDI Manual',d:'Steel Deck Standards'},{t:'OSHA 29 CFR 1926',d:'Steel Erection Safety'},
];

export default function StructuralSteelPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
        <PageHero label="Engineering Services" title={<span>Structural</span>} titleEm={<span>Steel Solutions</span>}
          subtitle={<span>Heavy structural steel detailing, connection engineering, and fabrication-ready documentation — delivered with precision from analysis to PE-stamped shop drawings.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443972/structural_steel_solutions.png" imageScale="1.3, 0.9" />
      </motion.div>

      <motion.div className={styles.statsStrip} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4, duration:0.6 }}>
        <div className={styles.statsRow}>
          {[{num:'14+',label:'Design Codes Followed'},{num:'300+',label:'Steel Projects Delivered'},{num:'All US',label:'States PE Stamping'},{num:'High-Rise',label:'to Industrial Capability'}].map(s=>(
            <div key={s.label} className={styles.statItem}><span className={styles.statNum}>{s.num}</span><span className={styles.statLabel}>{s.label}</span></div>
          ))}
        </div>
      </motion.div>

      <div className={styles.introSection}>
        <div className={styles.introInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Structural Steel</div>
            <h2 className={styles.sectionTitle}>High-Quality Steel Engineering for <em>Every Structure Type</em></h2>
            <p className={styles.sectionDesc}>FAECOM specializes in code-compliant, cost-effective structural steel solutions across high-rise buildings, industrial facilities, bridges, and modular structures.</p>
            <div className={styles.badgesWrap}>{BADGES.map((b,i)=>(<motion.span key={b} className={styles.badge} initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.05 }}><span className={styles.badgeDot}/>{b}</motion.span>))}</div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 1: Charter School image | Services */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Our Services</div>
            <h2 className={styles.sectionTitle}>Structural Steel <em>Engineering Services</em></h2>
          </motion.div>
          <motion.div className={styles.featureRow} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786521241/CHARTER_SCHOOL_BRONX_NY.png" alt="Charter School Bronx NY Steel" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>Charter School, Bronx NY</div>
            </div>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>Our Structural Steel Services Include</div>
              <div className={styles.gap16}>
                {SERVICES.map((s,i)=>(
                  <motion.div key={s.title} initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.06, duration:0.4 }}>
                    <div className={styles.cardTitle} style={{ marginBottom:'3px' }}>{s.title}</div>
                    <div className={styles.cardDesc}>{s.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 2: Content | Emmons Bay Hotel image */}
      <div className={styles.cardsSection}>
        <div className={styles.cardsSectionInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Featured Project</div>
            <h2 className={styles.sectionTitle}>Precision Steel for <em>Complex Projects</em></h2>
          </motion.div>
          <motion.div className={`${styles.featureRow} ${styles.featureRowReverse}`} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>Engineering Excellence</div>
              <ul className={styles.blockList}>
                {['Engineering-backed solutions ensuring safety, durability, and global standards alignment.','From high-rise buildings and industrial facilities to bridges and modular structures.','Advanced BIM-integrated steel modeling for coordination across all disciplines.','Value-engineered to reduce material use while maximizing structural performance.','Full PE stamping and approval documentation for all US states.','Strict compliance with AISC, ASTM, ACI, AWS, and OSHA safety standards.'].map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
              </ul>
              <div className={styles.whyBox}>
                <div className={styles.whyBoxTitle}>Why Choose FAECOM for Steel?</div>
                <ul className={styles.blockList}>
                  {['Years of hands-on industry experience across North America and globally.','Fast turnaround without compromising engineering accuracy or code compliance.','Dedicated steel engineering team with expertise from schematic to fabrication.'].map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
                </ul>
              </div>
            </div>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786449074/EMMONS_BAY_HOTEL_2902_EMMONS_AVENUE_BROOKLYN_NY.png" alt="Emmons Bay Hotel Brooklyn NY" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>Emmons Bay Hotel, Brooklyn NY</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Codes Grid */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Code Compliance</div>
            <h2 className={styles.sectionTitle}>14 Codes & Standards <em>We Follow</em></h2>
            <p className={styles.sectionDesc}>All FAECOM structural steel designs comply with globally recognized codes for safety, reliability, and regulatory approval.</p>
          </motion.div>
          <div className={styles.codesGrid}>
            {CODES.map((c,i)=>(<motion.div key={c.t} className={styles.codeTag} initial={{ opacity:0, y:16 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.04, duration:0.4 }}><span className={styles.codeTagTitle}>{c.t}</span><span className={styles.codeTagDesc}>{c.d}</span></motion.div>))}
          </div>
        </div>
      </div>

      <div className={styles.deliverables}><TwoDeliverablesSections /></div>
      <CtaSection />
    </div>
  );
}
