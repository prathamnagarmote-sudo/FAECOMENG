'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const FV = { hidden:{ opacity:0, y:32 }, show:{ opacity:1, y:0 } };
const BADGES = ['Revit MEP','ASHRAE 90.1','ASHRAE 62.1','NFPA 70','NFPA 13','IPC','IMC','IBC 2021'];
const SYSTEMS = [
  { title:'HVAC Engineering', img:'https://res.cloudinary.com/yqs3dtap/image/upload/v1786522341/MELSON_CARE_UNIT_USA_MEP.png', tag:'Nelson Care Unit, USA', items:['Load calculations and full system design.','Ductwork layout and airflow optimization.','Energy-efficient heating, cooling, and ventilation solutions.','Permit drawings and compliance documentation.'] },
  { title:'Electrical Engineering', img:'https://res.cloudinary.com/yqs3dtap/image/upload/v1786522340/MATTHEW-_CAMPBELL_RESIDENC_MEP.png', tag:'Matthew Campbell Residence', items:['Power distribution and electrical system design.','Lighting layouts, photometric analysis, and energy-efficient solutions.','Fire alarm and emergency power systems.','Electrical permit drawings and PE seal approvals.'] },
  { title:'Plumbing Engineering', img:'https://res.cloudinary.com/yqs3dtap/image/upload/v1786522340/DRESCHER-DRESCHER_RESIDENCE_MEP.png', tag:'Drescher Residence', items:['Water supply and drainage system design.','Stormwater and wastewater management solutions.','Fire suppression and sprinkler system design.','Permit-ready plumbing drawings with regulatory compliance.'] },
  { title:'Fire Protection Engineering', img:'https://res.cloudinary.com/yqs3dtap/image/upload/v1786522340/FELLOWSHIP_CHURCH_USA_Mep.png', tag:'Fellowship Church, USA', items:['Fire suppression system design and layout.','NFPA-compliant sprinkler and smoke control systems.','Fire alarm integration with building management systems.','Emergency egress and fire safety compliance reports.'] },
];
const INDUSTRIES = ['Commercial Buildings','Residential Complexes','Healthcare Facilities','Educational Institutions','Industrial & Manufacturing Units','Hotels & Hospitality','Data Centers'];

export default function MEPPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
        <PageHero label="Engineering Services" title={<span>MEP</span>} titleEm={<span>Engineering</span>}
          subtitle={<span>Mechanical, Electrical, and Plumbing engineering for safety, efficiency, and long-term performance — BIM-coordinated across all building disciplines.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443927/mep.jpg" />
      </motion.div>

      <motion.div className={styles.statsStrip} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4, duration:0.6 }}>
        <div className={styles.statsRow}>
          {[{num:'4',label:'MEP Disciplines Covered'},{num:'Revit',label:'BIM Platform'},{num:'NFPA + IBC',label:'Code Standard'},{num:'7+',label:'Industries Served'}].map(s=>(
            <div key={s.label} className={styles.statItem}><span className={styles.statNum}>{s.num}</span><span className={styles.statLabel}>{s.label}</span></div>
          ))}
        </div>
      </motion.div>

      <div className={styles.introSection}>
        <div className={styles.introInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>MEP Engineering</div>
            <h2 className={styles.sectionTitle}>Comprehensive MEP Solutions, <em>BIM-Coordinated</em></h2>
            <p className={styles.sectionDesc}>FAECOM delivers innovative, sustainable MEP engineering with BIM-driven coordination for optimised execution, regulatory compliance, and seamless multi-discipline integration.</p>
            <div className={styles.badgesWrap}>{BADGES.map((b,i)=>(<motion.span key={b} className={styles.badge} initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.05 }}><span className={styles.badgeDot}/>{b}</motion.span>))}</div>
          </motion.div>
        </div>
      </div>

      {/* 4 Feature Rows — alternating L/R, each image fills height of content */}
      {SYSTEMS.map((sys,i)=>(
        <div key={sys.title} className={i%2===0 ? styles.contentSection : styles.cardsSection}>
          <div className={i%2===0 ? styles.contentInner : styles.cardsSectionInner}>
            <motion.div
              className={i%2===0 ? styles.featureRow : `${styles.featureRow} ${styles.featureRowReverse}`}
              variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}
            >
              {i%2===0 ? (
                <>
                  <div className={styles.featureImg}>
                    <Image src={sys.img} alt={sys.title} fill style={{ objectFit:'cover' }} />
                    <div className={styles.featureImgTag}>{sys.tag}</div>
                  </div>
                  <div className={styles.featureContent}>
                    <div className={styles.blockTitle}>{sys.title}</div>
                    <ul className={styles.blockList}>
                      {sys.items.map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
                    </ul>
                    <div className={styles.whyBox}>
                      <div className={styles.whyBoxTitle}>BIM Coordination Advantage</div>
                      <ul className={styles.blockList}>
                        {['3D modeling and clash detection for seamless coordination.','Revit-based MEP for precise design and documentation.','Real-time collaboration and system optimization.'].map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
                      </ul>
                    </div>
                  </div>
                </>
              ):(
                <>
                  <div className={styles.featureContent}>
                    <div className={styles.blockTitle}>{sys.title}</div>
                    <ul className={styles.blockList}>
                      {sys.items.map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
                    </ul>
                    <div className={styles.whyBox}>
                      <div className={styles.whyBoxTitle}>Code Compliance</div>
                      <ul className={styles.blockList}>
                        {['Strict adherence to NFPA, ASHRAE, IPC, and IMC standards.','PE-stamped drawings accepted by all US jurisdictions.','Energy-efficient designs meeting ASHRAE 90.1 requirements.'].map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
                      </ul>
                    </div>
                  </div>
                  <div className={styles.featureImg}>
                    <Image src={sys.img} alt={sys.title} fill style={{ objectFit:'cover' }} />
                    <div className={styles.featureImgTag}>{sys.tag}</div>
                  </div>
                </>
              )}
            </motion.div>
          </div>
        </div>
      ))}

      {/* Industries */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Industries Served</div>
            <h2 className={styles.sectionTitle}>MEP Engineering for <em>Every Building Type</em></h2>
          </motion.div>
          <div className={styles.cardsGrid}>
            {INDUSTRIES.map((ind,i)=>(<motion.div key={ind} className={styles.serviceCard} style={{ flexDirection:'row', alignItems:'center', gap:'12px', padding:'16px 18px' }} initial={{ opacity:0, y:20 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.07, duration:0.4 }}>
              <span className={styles.badgeDot} style={{ width:'8px', height:'8px', flexShrink:0 }}/>
              <div className={styles.cardTitle} style={{ fontWeight:700, fontSize:'14px' }}>{ind}</div>
            </motion.div>))}
          </div>
        </div>
      </div>

      <div className={styles.deliverables}><TwoDeliverablesSections /></div>
      <CtaSection />
    </div>
  );
}
