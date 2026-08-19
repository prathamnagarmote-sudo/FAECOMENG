'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Zap, Settings, FileText, CheckSquare } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import SERVICES_IMAGES from '@/data/servicesImages.json';
import styles from '../service.module.css';

const FV = { hidden:{ opacity:0, y:32 }, show:{ opacity:1, y:0 } };
const BADGES = ['IBC 2021','ASCE 7','ACI 318','AISC 360','CBC','NBCC','Eurocodes','PE Stamped'];
const REVIEWS = [
  { Icon:ShieldCheck, title:'CODE COMPLIANCE REVIEW', items:['IBC, ASCE 7, ACI 318, and AISC compliance checks.','Seismic and wind load parameter verification.','Fire safety rating analysis for structural elements.','Identify deficiencies prior to municipal submission.'] },
  { Icon:Zap, title:'VALUE ENGINEERING', items:['Alternative framing analysis for measurable cost reduction.','Material strength class and section optimization.','Foundation redesign based on geotechnical data.','Reduction of redundant reinforcements and steel weight.','Constructability reviews to accelerate scheduling.'] },
  { Icon:Settings, title:'INDEPENDENT PEER REVIEW', items:['Unbiased third-party structural analysis and parallel load calculations.','Constructability and erection sequence audits.','Mitigation of designer liability and design errors.','Licensed Professional Engineer (PE) stamps and sign-off.'] },
];
const DELIVERABLES = [
  { Icon:FileText, title:'VALUE ENGINEERING REPORT', desc:'A comprehensive comparative analysis demonstrating precise cost savings, optimized material usage, and structural improvements without compromising safety or architectural intent.' },
  { Icon:CheckSquare, title:'PEER REVIEW CERTIFICATION', desc:'PE-stamped letters of structural adequacy ensuring absolute compliance with all governing jurisdictions — streamlining the permitting and approval process.' },
];

export default function ThirdPartyReviewPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
        <PageHero label="Engineering Services" title={<span>Third-Party Review &</span>} titleEm={<span>Value Engineering</span>}
          subtitle={<span>Independent PE-stamped peer reviews, safety audits, and material cost optimization — safeguarding structural safety while reducing construction costs and schedule timelines.</span>} />
      </motion.div>

      <motion.div className={styles.statsStrip} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4, duration:0.6 }}>
        <div className={styles.statsRow}>
          {[{num:'PE Stamped',label:'All Review Reports'},{num:'All US',label:'States Covered'},{num:'15–30%',label:'Typical Cost Savings'},{num:'IBC + ASCE',label:'Primary Code Basis'}].map(s=>(
            <div key={s.label} className={styles.statItem}><span className={styles.statNum}>{s.num}</span><span className={styles.statLabel}>{s.label}</span></div>
          ))}
        </div>
      </motion.div>

      <div className={styles.introSection}>
        <div className={styles.introInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Third-Party Review</div>
            <h2 className={styles.sectionTitle}>High-Precision Structural Reviews That <em>Protect Your Project</em></h2>
            <p className={styles.sectionDesc}>We perform third-party structural design audits, code reviews, and comprehensive value engineering — delivering PE-stamped reports that streamline permitting while optimizing cost and safety.</p>
            <div className={styles.badgesWrap}>{BADGES.map((b,i)=>(<motion.span key={b} className={styles.badge} initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.05 }}><span className={styles.badgeDot}/>{b}</motion.span>))}</div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row: Image | What we review */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div className={styles.featureRow} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className={styles.featureImg} style={{ background:'#F4F5FC' }}>
              <Image src={SERVICES_IMAGES['third-party-review'].expertise} alt="Third-Party Review Engineering" fill style={{ objectFit:'contain', padding:'24px' }} />
            </div>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>What We Review</div>
              <ul className={styles.blockList}>
                {['Independent structural peer review and code compliance audits (IBC, Eurocodes, etc.).','Value engineering analysis to optimize concrete strength classes, steel profiles, and spans.','Foundation and retaining system evaluation for geotechnical optimization.','PE-stamped peer review reports for municipality permit clearance.','Constructability and erection sequence audits.','Seismic and wind load parameter verification and re-analysis.'].map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
              </ul>
              <div className={styles.whyBox}>
                <div className={styles.whyBoxTitle}>Why Independent Review?</div>
                <ul className={styles.blockList}>
                  {['Unbiased verification catches design errors before construction.','Reduces engineer-of-record liability exposure significantly.','Often required by AHJ for high-importance or complex structures.','Optimizes cost without compromising structural integrity.'].map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Three review pillars */}
      <div className={styles.cardsSection}>
        <div className={styles.cardsSectionInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Three Pillars</div>
            <h2 className={styles.sectionTitle}>Three Pillars of <em>Independent Review</em></h2>
          </motion.div>
          <div className={styles.cardsGrid}>
            {REVIEWS.map((cat,i)=>(<motion.div key={cat.title} className={styles.serviceCard} style={{ gap:'16px' }} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.1, duration:0.5 }}>
              <div className={styles.cardIcon}><cat.Icon size={20}/></div>
              <div className={styles.cardTitle}>{cat.title}</div>
              <ul className={styles.blockList}>
                {cat.items.map(item=>(<li key={item} className={styles.blockItem}><span className={styles.dot}/><span>{item}</span></li>))}
              </ul>
            </motion.div>))}
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Deliverables</div>
            <h2 className={styles.sectionTitle}>PE-Stamped <em>Report Deliverables</em></h2>
          </motion.div>
          <div className={styles.cardsGrid} style={{ gridTemplateColumns:'1fr 1fr' }}>
            {DELIVERABLES.map((d,i)=>(<motion.div key={d.title} className={styles.serviceCard} style={{ gap:'16px' }} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.12, duration:0.5 }}>
              <div className={styles.cardIcon}><d.Icon size={20}/></div>
              <div className={styles.cardTitle}>{d.title}</div>
              <div className={styles.cardDesc}>{d.desc}</div>
            </motion.div>))}
          </div>
        </div>
      </div>

      <CtaSection />
    </div>
  );
}
