'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const FV = { hidden:{ opacity:0, y:32 }, show:{ opacity:1, y:0 } };
const BADGES = ['IBC 2021','ACI 318','ASCE 7','Fox Blocks','Nudura','Logix ICF','Revit','LEED Ready'];
const ICF_SERVICES = [
  {title:'ICF Structural Engineering & Design',desc:'Optimized for load-bearing capacity and full IBC/ACI code compliance.'},
  {title:'Seismic & Wind Load Analysis',desc:'Ensuring structural stability in seismic zones and extreme weather conditions.'},
  {title:'Thermal & Energy Performance',desc:'Superior thermal insulation that reduces heating and cooling costs significantly.'},
  {title:'ICF Wall & Floor Systems Design',desc:'Custom wall and floor configurations for both strength and insulation.'},
  {title:'BIM Integration for ICF Projects',desc:'3D modeling for precise coordination across all building disciplines.'},
  {title:'Cost & Material Optimization',desc:'Reducing waste and improving project efficiency without compromising safety.'},
  {title:'ICF Construction Detailing',desc:'Seamless integration from design documentation through construction support.'},
  {title:'Code-Compliant Engineering',desc:'Meeting IBC, ACI, ASCE, and global ICF standards on every project.'},
];
const WHY_ICF = [
  {t:'Energy Efficiency',d:'Superior thermal insulation reduces heating and cooling costs by up to 50%.'},
  {t:'Structural Strength',d:'Reinforced concrete core provides enhanced durability vs. traditional framing.'},
  {t:'Disaster Resilience',d:'Excellent performance in seismic zones, fires, and extreme weather events.'},
  {t:'Sustainability',d:'Eco-friendly materials with significantly reduced carbon footprint.'},
  {t:'Soundproofing',d:'Exceptional acoustic insulation for quieter, more comfortable environments.'},
  {t:'Faster Construction',d:'Streamlined assembly reduces labor requirements and project timelines.'},
];

export default function ICFPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
        <PageHero label="Engineering Services" title={<span>ICF (Insulated</span>} titleEm={<span>Concrete Form) Solutions</span>}
          subtitle={<span>Energy-efficient concrete construction systems offering superior insulation, structural strength, and significantly faster installation — engineered for resilience.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443935/ICF.jpg" imageScale="0.8" />
      </motion.div>

      <motion.div className={styles.statsStrip} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4, duration:0.6 }}>
        <div className={styles.statsRow}>
          {[{num:'50%',label:'Energy Cost Reduction'},{num:'R-23+',label:'Wall Insulation Value'},{num:'Cat 5',label:'Hurricane Rated'},{num:'4hr',label:'Fire Rating Capable'}].map(s=>(
            <div key={s.label} className={styles.statItem}><span className={styles.statNum}>{s.num}</span><span className={styles.statLabel}>{s.label}</span></div>
          ))}
        </div>
      </motion.div>

      <div className={styles.introSection}>
        <div className={styles.introInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>ICF Engineering</div>
            <h2 className={styles.sectionTitle}>High-Performance ICF Systems for <em>Sustainable Construction</em></h2>
            <p className={styles.sectionDesc}>FAECOM provides advanced ICF solutions for residential, commercial, and disaster-resistant structures — delivering engineering-backed designs combining thermal performance with structural excellence.</p>
            <div className={styles.badgesWrap}>{BADGES.map((b,i)=>(<motion.span key={b} className={styles.badge} initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.05 }}><span className={styles.badgeDot}/>{b}</motion.span>))}</div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 1: ICF image | Services */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div className={styles.featureRow} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1787045994/icf_what_include.png" alt="ICF Wall Construction Site" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>ICF Wall System Construction</div>
            </div>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>Our ICF Services Include</div>
              <div className={styles.gap16}>
                {ICF_SERVICES.map((s,i)=>(<motion.div key={s.title} initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.06, duration:0.4 }}>
                  <div className={styles.cardTitle} style={{ marginBottom:'3px' }}>{s.title}</div>
                  <div className={styles.cardDesc}>{s.desc}</div>
                </motion.div>))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why ICF Cards */}
      <div className={styles.cardsSection}>
        <div className={styles.cardsSectionInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Why ICF?</div>
            <h2 className={styles.sectionTitle}>Why Insulated Concrete Form <em>Outperforms</em> Traditional Framing</h2>
          </motion.div>
          <div className={styles.cardsGrid}>
            {WHY_ICF.map((item,i)=>(<motion.div key={item.t} className={styles.serviceCard} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08, duration:0.45 }}>
              <div className={styles.cardTitle}>{item.t}</div>
              <div className={styles.cardDesc}>{item.d}</div>
            </motion.div>))}
          </div>

          {/* Feature Row 2: content | image */}
          <motion.div className={`${styles.featureRow} ${styles.featureRowReverse}`} style={{ marginTop:'32px' }} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7 }}>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>Engineering Approach</div>
              <ul className={styles.blockList}>
                {['FAECOM brings extensive ICF technology experience to residential, commercial, industrial, and disaster-resistant projects.','Our engineering-backed solutions combine superior thermal insulation with reinforced concrete structural integrity.','Advanced BIM integration ensures precise 3D coordination and clash-free design execution.','Every ICF design is code-compliant with IBC, ACI 318, and ASCE 7 — PE-stamped for all US jurisdictions.','Cost and material optimization reduces project waste and improves long-term building performance.'].map(b=>(<li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>))}
              </ul>
            </div>
            <div className={styles.featureImg}>
              <Image src="/images/expertise_rc.png" alt="ICF Engineering Expertise" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>ICF Engineering Expertise</div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className={styles.deliverables}><TwoDeliverablesSections /></div>
      <CtaSection />
    </div>
  );
}
