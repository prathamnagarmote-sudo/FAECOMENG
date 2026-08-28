'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const FV = { hidden:{ opacity:0, y:32 }, show:{ opacity:1, y:0 } };
const BADGES = ['Revit','Navisworks','BIM 360','COBie','IFC','LOD 400','Dynamo','Enscape','4D BIM'];
const FEATURES_A = [
  {t:'Photorealistic 3D Renders',d:'High-quality, lifelike images for real-time design visualization and client approvals.'},
  {t:'360° Virtual Walkthroughs',d:'Interactive exploration of building interiors & exteriors for immersive stakeholder engagement.'},
  {t:'Architectural & Interior Visualization',d:'Detailed facade, layout, material, and furniture visualizations for design review.'},
  {t:'Interactive 3D Models',d:'Real-time manipulation enabling faster client feedback and design iteration cycles.'},
  {t:'Virtual Reality (VR) Experiences',d:'Fully immersive walkthroughs for high-stakes presentations and design reviews.'},
  {t:'Augmented Reality (AR) Integration',d:'Overlay BIM models on real-world spaces via phone or tablet devices.'},
];
const FEATURES_B = [
  {t:'Clash Detection & Conflict Resolution',d:'Identify and resolve design conflicts before construction begins — saving cost & time.'},
  {t:'Quantity Take-Offs & Cost Estimation',d:'Auto-generated BOQs directly from the BIM model for accurate project budgeting.'},
  {t:'Construction Phasing (4D BIM)',d:'Simulate timelines, visualize sequences, and identify scheduling conflicts proactively.'},
  {t:'Facilities Management (5D/6D BIM)',d:'Integrate asset, maintenance, and lifecycle data for post-construction management.'},
  {t:'Energy Performance Analysis',d:'Analyze energy use patterns and improve sustainability in the design phase.'},
  {t:'Daylight & Shadow Analysis',d:'Study solar impact for better natural light planning and passive design strategies.'},
  {t:'Customizable Asset Libraries',d:'Ready-to-use BIM components for faster and consistent modeling across projects.'},
];
const WHY_FAECOM = [
  {t:'BIM Expertise in AEC',d:'High-quality BIM solutions customized for Architecture, Engineering, and Construction.'},
  {t:'Automation-Focused Workflow',d:'Dynamo scripts and Revit add-ins to streamline processes and save project time.'},
  {t:'Custom Software Development',d:'Tools, dashboards, and apps (web/mobile) solving project-specific challenges.'},
  {t:'Global Project Experience',d:'Trusted by clients across 10+ countries with fast and standard-compliant delivery.'},
  {t:'Strong QA/QC Systems',d:'Multi-stage quality checks ensuring every model and document meets highest standards.'},
];

export default function BIMIntegratedSolutionsPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity:0, y:40 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.8, ease:[0.16,1,0.3,1] }}>
        <PageHero label="Engineering Services" title={<span>BIM Integrated</span>} titleEm={<span>Solutions 3D</span>}
          subtitle={<span>End-to-end 3D BIM integration — photorealistic renders, VR walkthroughs, clash detection, and intelligent project data for AEC projects worldwide.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/f_auto,q_auto/v1786443953/Bim_integrated_3d.jpg" />
      </motion.div>

      <motion.div className={styles.statsStrip} initial={{ opacity:0 }} animate={{ opacity:1 }} transition={{ delay:0.4, duration:0.6 }}>
        <div className={styles.statsRow}>
          {[{num:'13+',label:'BIM Capabilities'},{num:'4D + 5D',label:'BIM Phasing & Costing'},{num:'VR Ready',label:'Immersive Walkthroughs'},{num:'10+',label:'Countries Delivered'}].map(s=>(
            <div key={s.label} className={styles.statItem}><span className={styles.statNum}>{s.num}</span><span className={styles.statLabel}>{s.label}</span></div>
          ))}
        </div>
      </motion.div>

      <div className={styles.introSection}>
        <div className={styles.introInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>BIM Solutions 3D</div>
            <h2 className={styles.sectionTitle}>Immersive, Data-Rich BIM That <em>Transforms Decision-Making</em></h2>
            <p className={styles.sectionDesc}>FAECOM delivers integrated BIM workflows enhancing design understanding, stakeholder engagement, and multi-discipline coordination from concept to construction and beyond.</p>
            <div className={styles.badgesWrap}>{BADGES.map((b,i)=>(<motion.span key={b} className={styles.badge} initial={{ opacity:0, scale:0.85 }} whileInView={{ opacity:1, scale:1 }} viewport={{ once:true }} transition={{ delay:i*0.05 }}><span className={styles.badgeDot}/>{b}</motion.span>))}</div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 1: 3D render | Visualization features */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Visualization Services</div>
            <h2 className={styles.sectionTitle}>Photorealistic 3D Visualization & <em>VR Experiences</em></h2>
          </motion.div>
          <motion.div className={styles.featureRow} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/f_auto,q_auto/v1787034262/Loom_Screenshot_2026-08-18_at_11.54.11.png" alt="3D Building Render" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>Photorealistic 3D Render</div>
            </div>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>Visualization Capabilities</div>
              <div className={styles.gap16}>
                {FEATURES_A.map((f,i)=>(<motion.div key={f.t} initial={{ opacity:0, x:16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.06, duration:0.4 }}>
                  <div className={styles.cardTitle} style={{ marginBottom:'3px' }}>{f.t}</div>
                  <div className={styles.cardDesc}>{f.d}</div>
                </motion.div>))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Feature Row 2: BIM data services | 3D render 2 */}
      <div className={styles.cardsSection}>
        <div className={styles.cardsSectionInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>BIM Data Services</div>
            <h2 className={styles.sectionTitle}>4D/5D BIM, Clash Detection & <em>Analytics</em></h2>
          </motion.div>
          <motion.div className={`${styles.featureRow} ${styles.featureRowReverse}`} variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.7, delay:0.1 }}>
            <div className={styles.featureContent}>
              <div className={styles.blockTitle}>BIM Data & Analytics Services</div>
              <div className={styles.gap16}>
                {FEATURES_B.map((f,i)=>(<motion.div key={f.t} initial={{ opacity:0, x:-16 }} whileInView={{ opacity:1, x:0 }} viewport={{ once:true }} transition={{ delay:i*0.06, duration:0.4 }}>
                  <div className={styles.cardTitle} style={{ marginBottom:'3px' }}>{f.t}</div>
                  <div className={styles.cardDesc}>{f.d}</div>
                </motion.div>))}
              </div>
            </div>
            <div className={styles.featureImg}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/f_auto,q_auto/v1787034358/Loom_Screenshot_2026-08-18_at_11.55.15.png" alt="Full Elevation 3D Render" fill style={{ objectFit:'cover' }} />
              <div className={styles.featureImgTag}>Architectural Elevation Render</div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Why FAECOM */}
      <div className={styles.contentSection}>
        <div className={styles.contentInner}>
          <motion.div variants={FV} initial="hidden" whileInView="show" viewport={{ once:true }} transition={{ duration:0.6 }}>
            <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Why FAECOM</div>
            <h2 className={styles.sectionTitle}>Why Choose FAECOM for <em>BIM Solutions?</em></h2>
          </motion.div>
          <div className={styles.cardsGrid}>
            {WHY_FAECOM.map((w,i)=>(<motion.div key={w.t} className={styles.serviceCard} initial={{ opacity:0, y:24 }} whileInView={{ opacity:1, y:0 }} viewport={{ once:true }} transition={{ delay:i*0.08, duration:0.45 }}>
              <div className={styles.cardTitle}>{w.t}</div>
              <div className={styles.cardDesc}>{w.d}</div>
            </motion.div>))}
          </div>
        </div>
      </div>

      <div className={styles.deliverables}><TwoDeliverablesSections /></div>
      <CtaSection />
    </div>
  );
}
