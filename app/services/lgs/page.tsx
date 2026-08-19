'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const FV = { hidden:{ opacity:0, y:32 }, show:{ opacity:1, y:0 } };
const BADGES = ['AISI S100','AISC 360','ASCE 7','IBC 2021','REVIT','MWF StructSoft','Vertex-BD','FrameCAD','Howick'];
const LB_ITEMS = ['Feasibility analysis for multistory apartments, modular structures & affordable housing.','Design & analysis of LGS walls, floors, and trusses.','Revit structural drawings and detailed construction documentation.','Construction GA and shop drawings for walls, floors, and trusses.','Machine file generation for Howick, FrameCAD & roll-formed machines.','REVIT, MWF StructSoft, Vertex-BD, Scottsdale and FRAMECAD utilization.'];
const INF_ITEMS = ['Design & analysis of LGS infill walls and façade supporting elements.','Revit structural drawings with precise connection details.','Construction GA and shop drawings for walls.','Building elevation designs integrated with SFS framing.','Material take-off for accurate project estimation.'];
const WHY_ITEMS = ['30–40% reduction in CFS construction cost and weight vs. traditional framing.','Versatile for load-bearing structures, modular construction, and infill wall systems.','Fast construction suitable for indigenous buildings and high-separation walls.','Multistorey apartments, affordable housing, modular construction, and facade solutions.','Compatible with all major roll-forming machine platforms — direct file output.'];
const ROLL_MACHINES = [{name:'FrameCad',image:'/images/machines/framecad.png'},{name:'Howick',image:'/images/machines/howick.png'},{name:'Knudson',image:'/images/machines/knudson.png'},{name:'Unbak',image:'/images/machines/unbak.png'},{name:'FrameMac',image:'/images/machines/framemac.png'},{name:'Scottsdale',image:'/images/machines/scottsdale.png'}];

export default function LGSPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
        <PageHero label="Engineering Services" title={<span>Light Gauge Steel</span>} titleEm={<span>(LGS) Solutions</span>}
          subtitle={<span>Advanced cold-formed steel structural systems for residential, modular, and commercial construction — precision-engineered for speed, efficiency, and code compliance.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443295/1662696676169_edited_edited_edited.jpg" />
      </motion.div>

      <motion.div className={styles.statsStrip} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4, duration:0.6 }}>
        <div className={styles.statsRow}>
          {[{num:'30–40%',label:'Weight Reduction vs Concrete'},{num:'200+',label:'LGS Projects Delivered'},{num:'6',label:'Roll Machine Platforms'},{num:'25+',label:'Countries Served'}].map(s=>(
            <div key={s.label} className={styles.statItem}><span className={styles.statNum}>{s.num}</span><span className={styles.statLabel}>{s.label}</span></div>
          ))}
        </div>
      </motion.div>

      {/* Intro */}
      <div className={styles.introSection}>
        <div className={styles.introInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>LGS Engineering</div>
            <h2 className={styles.sectionTitle}>Modern Structural Systems for <em>Fast & Efficient Construction</em></h2>
            <p className={styles.sectionDesc}>FAECOM provides full-spectrum LGS engineering for residential apartments, affordable housing, hotels, mixed-use, and modular buildings — from feasibility through machine file generation.</p>
            <div className={styles.badgesWrap}>
              {BADGES.map((b,i)=>(<motion.span key={b} className={styles.badge} initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.05, duration:0.35 }}><span className={styles.badgeDot}/>{b}</motion.span>))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 1: Image | Load Bearing content */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Load Bearing System</div>
            <h2 className={styles.sectionTitle}>Engineered LGS <em>Load Bearing Structures</em></h2>
          </motion.div>
          <motion.div className={styles.featureRow} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786446264/NELSON_USA.png" alt="LGS Load Bearing — Nelson USA" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>Nelson, USA — LGS Load Bearing</div>
            </div>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>Load Bearing System Services</div>
              <ul className={styles.blockList}>
                {LB_ITEMS.map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
              </ul>
              <div className={styles.whyBox}>
                <div className={styles.whyBoxTitle}>Why LGS Load Bearing?</div>
                <ul className={styles.blockList}>
                  {WHY_ITEMS.map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 2: Infill content | image */}
      <div className={styles.cardsSection}>
        <div className={styles.cardsSectionInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Infill System</div>
            <h2 className={styles.sectionTitle}>Precision LGS <em>Infill & Façade Systems</em></h2>
          </motion.div>
          <motion.div className={`${styles.featureRow} ${styles.featureRowReverse}`} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>Infill System Services</div>
              <ul className={styles.blockList}>
                {INF_ITEMS.map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
              </ul>
              <div className={styles.whyBox} style={{ marginTop:'8px' }}>
                <div className={styles.whyBoxTitle}>Machine File Generation</div>
                <ul className={styles.blockList}>
                  {['Direct machine file output compatible with all major roll-forming platforms.','FrameCAD, Howick, Knudson, Scottsdale, Unbak, and FrameMac supported.','Eliminates manual programming — files feed directly to the machine.','Reduces fabrication errors and accelerates production timelines.'].map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
                </ul>
              </div>
            </div>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786446440/KHAN_HOUSE_CANADA.png" alt="Khan House Canada — LGS Infill System" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>Khan House, Canada — Infill System</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Roll Machines */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Machine Compatibility</div>
            <h2 className={styles.sectionTitle}>Roll Forming Machine <em>Integration</em></h2>
            <p className={styles.sectionDesc}>FAECOM generates machine-ready output files for all major CFS roll forming platforms — seamless handoff from design to fabrication.</p>
          </motion.div>
          <div className={styles.machinesGrid}>
            {ROLL_MACHINES.map((m,i)=>(
              <motion.div key={m.name} className={styles.machineCard} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07, duration:0.4 }}>
                <div className={styles.machineImgWrap}><Image src={m.image} alt={m.name} fill style={{ objectFit:'contain' }} /></div>
                <div className={styles.machineName}>{m.name}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <div className={styles.deliverables}><TwoDeliverablesSections /></div>
      <CtaSection />
    </div>
  );
}
