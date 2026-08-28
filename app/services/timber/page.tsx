'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const FV = { hidden: { opacity: 0, y: 32 }, show: { opacity: 1, y: 0 } };
const BADGES = ['NDS 2018', 'CLT', 'Glulam', 'ETABS', 'SAP2000', 'Revit', 'IBC 2021', 'ASCE 7', 'Mass Timber'];
const SERVICES = [
  { title: 'Structural Design & Analysis', desc: 'Optimized, stable, and cost-effective timber designs meeting NDS, IBC, and project-specific standards.' },
  { title: 'Permit Drawings & PE Stamping', desc: 'Professional Engineer–stamped drawings ensuring compliance and permit readiness across all US states.' },
  { title: 'Connection & Construction Details', desc: 'Precise joinery details, bearing connections, and execution plans for timber systems.' },
  { title: 'Code Compliance & Value Engineering', desc: 'Cost-effective, regulation-ready solutions optimized for material efficiency.' },
  { title: '3D BIM Modeling', desc: 'Advanced Revit-based visualization for seamless multi-discipline project coordination.' },
  { title: 'Wood Panel & Truss Drawings', desc: 'Detailed assembly schematics for accurate fabrication and on-site installation.' },
  { title: 'Mass Timber Design', desc: 'Sustainable, high-performance CLT and glulam engineered wood solutions.' },
  { title: 'Seismic & Wind-Resistant Systems', desc: 'Timber systems designed to withstand lateral and gravity loads in high-hazard zones.' },
];
const WHY = [
  'Advanced structural analysis for long-term durability and safety.',
  'Eco-friendly and sustainable wood design — carbon-sequestering materials.',
  'Custom connections for unique architectural forms and complex joinery.',
  'High-performance load-bearing timber structures for multi-storey buildings.',
  'Seismic & wind-resistant systems meeting ASCE 7 requirements.',
  'Blending craftsmanship with modern BIM technology.',
  'Optimized material use for measurable cost efficiency.',
];

export default function TimberPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
        <PageHero label="Engineering Services" title={<span>Wood & Mass</span>} titleEm={<span>Timber Engineering</span>}
          subtitle={<span>High-performance timber, CLT, and glulam systems — engineered for sustainability, seismic resistance, and aesthetic excellence.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/f_auto,q_auto/v1786443980/wood_and_timber.png" />
      </motion.div>

      {/* Stats */}
      <motion.div className={styles.statsStrip} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4, duration:0.6 }}>
        <div className={styles.statsRow}>
          {[{num:'CLT + Glulam',label:'Mass Timber Specialties'},{num:'NDS 2018',label:'Primary Design Code'},{num:'Carbon−',label:'Negative Building Systems'},{num:'50+',label:'Timber Projects Delivered'}].map((s)=>(
            <div key={s.label} className={styles.statItem}><span className={styles.statNum}>{s.num}</span><span className={styles.statLabel}>{s.label}</span></div>
          ))}
        </div>
      </motion.div>

      {/* Section 1 — Intro + Badges */}
      <div className={styles.introSection}>
        <div className={styles.introInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Wood Engineering</div>
            <h2 className={styles.sectionTitle}>Innovative Timber Solutions for <em>Every Structural Challenge</em></h2>
            <p className={styles.sectionDesc}>FAECOM specializes in timber engineering delivering structural integrity, sustainability, and aesthetic excellence — from residential homes to large-scale mass timber commercial projects.</p>
            <div className={styles.badgesWrap}>
              {BADGES.map((b,i)=>(
                <motion.span key={b} className={styles.badge} initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.05, duration:0.35 }}>
                  <span className={styles.badgeDot}/>{b}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 1: Manchester image (tall) | Why Mass Timber + services preview */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div className={styles.featureRow} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/f_auto,q_auto/v1786447633/MANCHESTER_NEW_HAMPSHIREE.png" alt="Manchester New Hampshire Timber" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>Manchester, New Hampshire</div>
            </div>
            <div className={styles.featureContent}>
              <div>
                <div className={styles.blockTitle}>Why Choose Mass Timber?</div>
                <ul className={styles.blockList} style={{ marginTop:'12px' }}>
                  {WHY.map((b)=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
                </ul>
              </div>
              <div className={styles.whyBox}>
                <div className={styles.whyBoxTitle}>Engineering-Backed Sustainability</div>
                <ul className={styles.blockList}>
                  {['Designs comply with NDS 2018, IBC 2021, and ASCE 7.','CLT and glulam systems designed for precision and longevity.','BIM-integrated workflows from concept through permit approval.'].map((b)=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 2: Content | M&M Residence image */}
      <div className={styles.cardsSection}>
        <div className={styles.cardsSectionInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Our Service Suite</div>
            <h2 className={styles.sectionTitle}>Complete Wood Engineering <em>Services</em></h2>
          </motion.div>
          <motion.div className={`${styles.featureRow} ${styles.featureRowReverse}`} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}>
            <div className={styles.featureContent}>
              <div className={styles.gap16}>
                {SERVICES.map((s,i)=>(
                  <motion.div key={s.title} initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.06, duration:0.4 }}>
                    <div className={styles.cardTitle} style={{ marginBottom:'3px' }}>{s.title}</div>
                    <div className={styles.cardDesc}>{s.desc}</div>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/f_auto,q_auto/v1786448864/M_M_RESIDENCE_NORTH_CAROLINA.png" alt="M&M Residence North Carolina" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>M&M Residence, North Carolina</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 3: Tipsy Moose image | Why FAECOM */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div className={styles.featureRow} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/f_auto,q_auto/v1786448140/TIPSY_MOOSE_USA.png" alt="Tipsy Moose USA Timber Framing" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>Tipsy Moose, USA</div>
            </div>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>Why Choose FAECOM?</div>
              {[{t:'Tailored Engineering Solutions',d:'Customized designs to fit every project need, scale, and budget.'},{t:'Cutting-Edge Technology',d:'Advanced software and BIM modeling for precision across all timber types.'},{t:'Sustainability at the Core',d:'Eco-friendly solutions using CLT and glulam for a greener built environment.'},{t:'End-to-End Support',d:'From concept through PE-stamped permit drawings — seamless assistance throughout.'},{t:'Proven Expertise',d:'A strong track record of successful wood engineering projects across North America.'}].map((item,i)=>(
                <motion.div key={item.t} className={styles.blockItem} style={{ flexDirection:'column', gap:'3px', alignItems:'flex-start' }} initial={{ opacity:0, x:20 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.08, duration:0.4 }}>
                  <strong style={{ color:'#21145F', fontWeight:800, fontSize:'14px' }}>{item.t}</strong>
                  <span style={{ color:'#5A5A7A', fontSize:'13.5px', lineHeight:1.6 }}>{item.d}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.deliverables}><TwoDeliverablesSections /></div>
      <CtaSection />
    </div>
  );
}
