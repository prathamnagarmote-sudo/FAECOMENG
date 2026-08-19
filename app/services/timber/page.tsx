'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import TwoDeliverablesSections from '@/components/HorizontalSheetSlider';
import styles from '../service.module.css';

const BADGES = ['NDS 2018', 'CLT', 'Glulam', 'ETABS', 'SAP2000', 'Revit', 'IBC 2021', 'ASCE 7', 'Mass Timber'];

const SERVICES = [
  { title: 'Structural Design & Analysis', desc: 'Optimized, stable, and cost-effective timber designs meeting NDS, IBC, and project-specific standards.' },
  { title: 'Permit Drawings & PE Stamping', desc: 'Professional Engineer–stamped drawings ensuring compliance and permit readiness.' },
  { title: 'Connection & Construction Details', desc: 'Precise joinery details, bearing connections, and execution plans for timber systems.' },
  { title: 'Code Compliance & Value Engineering', desc: 'Cost-effective, regulation-ready solutions optimized for material efficiency.' },
  { title: '3D BIM Modeling', desc: 'Advanced Revit-based visualization for seamless multi-discipline project coordination.' },
  { title: 'Wood Panel & Truss Drawings', desc: 'Detailed assembly schematics for accurate fabrication and on-site installation.' },
  { title: 'Mass Timber Design', desc: 'Sustainable, high-performance CLT and glulam engineered wood solutions.' },
  { title: 'Seismic & Wind-Resistant Systems', desc: 'Timber systems designed to withstand lateral and gravity loads in high-hazard zones.' },
];

export default function TimberPage() {
  return (
    <div className={styles.page}>
      <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.16,1,0.3,1] }}>
        <PageHero
          label="Engineering Services"
          title={<span>Wood & Mass</span>}
          titleEm={<span>Timber Engineering</span>}
          subtitle={<span>High-performance timber, CLT, and glulam systems that marry natural aesthetics with structural excellence — engineered for sustainability, seismic resistance, and beauty.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443980/wood_and_timber.png"
        />
      </motion.div>

      {/* Stats */}
      <div className={styles.statsStrip}>
        <div className={styles.statsRow}>
          {[
            { num: 'CLT + Glulam', label: 'Mass Timber Specialties' },
            { num: 'NDS 2018', label: 'Primary Design Code' },
            { num: 'Carbon−', label: 'Negative Building Systems' },
            { num: '50+', label: 'Timber Projects Delivered' },
          ].map((s) => (
            <div key={s.label} className={styles.statItem}>
              <span className={styles.statNum}>{s.num}</span>
              <span className={styles.statLabel}>{s.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Section 1 */}
      <section className={styles.section}>
        <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Wood Engineering</div>
        <h2 className={styles.sectionTitle}>Innovative Timber Solutions for <em>Every Structural Challenge</em></h2>
        <p className={styles.sectionDesc}>FAECOM specializes in timber engineering solutions delivering structural integrity, sustainability, and aesthetic excellence — from residential homes to large-scale mass timber commercial projects.</p>
        <div className={styles.badgesWrap}>
          {BADGES.map((b) => <span key={b} className={styles.badge}><span className={styles.badgeDot}/>{b}</span>)}
        </div>
        <div className={styles.twoCol}>
          <div className={styles.imgStack}>
            <div className={styles.imgCard}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786447633/MANCHESTER_NEW_HAMPSHIREE.png" alt="Manchester New Hampshire Timber Engineering" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.imgCard}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786448864/M_M_RESIDENCE_NORTH_CAROLINA.png" alt="M&M Residence North Carolina Timber Architecture" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>
          <div className={styles.contentCol}>
            <div className={styles.block}>
              <div className={styles.blockTitle}>Why Choose Mass Timber?</div>
              <ul className={styles.blockList}>
                {[
                  'Advanced structural analysis for long-term durability.',
                  'Eco-friendly and sustainable wood design — carbon-sequestering materials.',
                  'Custom connections for unique architectural forms.',
                  'High-performance load-bearing timber structures.',
                  'Seismic & wind-resistant wood systems meeting ASCE 7.',
                  'Blending craftsmanship with modern BIM technology.',
                  'Optimized material use for cost efficiency.',
                ].map((b) => (
                  <li key={b} className={styles.blockItem}><span className={styles.dot}/><span>{b}</span></li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 — Why FAECOM */}
      <div className={styles.sectionAlt}>
        <div className={styles.sectionAltInner}>
          <div className={styles.eyebrow}><span className={styles.eyebrowLine}/>Why FAECOM</div>
          <h2 className={styles.sectionTitle}>Our Wood Engineering <em>Service Suite</em></h2>
          <div className={styles.twoCol}>
            <div className={styles.imgCardLarge}>
              <Image src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786448140/TIPSY_MOOSE_USA.png" alt="Tipsy Moose USA Timber Framing" fill style={{ objectFit: 'cover' }} />
            </div>
            <div className={styles.cardsGrid} style={{ gridTemplateColumns: '1fr' }}>
              {SERVICES.slice(0, 5).map((s) => (
                <div key={s.title} className={styles.serviceCard}>
                  <div className={styles.cardTitle}>{s.title}</div>
                  <div className={styles.cardDesc}>{s.desc}</div>
                </div>
              ))}
            </div>
          </div>
          <div className={styles.cardsGrid} style={{ marginTop: '24px' }}>
            {SERVICES.slice(5).map((s) => (
              <div key={s.title} className={styles.serviceCard}>
                <div className={styles.cardTitle}>{s.title}</div>
                <div className={styles.cardDesc}>{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deliverables */}
      <div className={styles.deliverables}>
        <TwoDeliverablesSections />
      </div>

      <CtaSection />
    </div>
  );
}
