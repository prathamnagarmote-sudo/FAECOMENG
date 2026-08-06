import Image from 'next/image';
import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import LeadershipSection from '@/components/LeadershipSection';
import PEStampingSection from '@/components/PEStampingSection';
import GlobalMapSection from '@/components/GlobalMapSection';
import styles from './page.module.css';

export const metadata = { title: 'About FAECOM INC.' };

const WHY = [
  { icon:'shield', n:'01', title:'PE Stamped in 25+ States', desc:'Licensed Professional Engineers across more than 25 US states. Your project meets every local building code, every time.' },
  { icon:'globe',  n:'02', title:'100% Remote Capability', desc:'Fully digital cloud-based workflows enabling seamless collaboration with clients worldwide — no delays, no borders.' },
  { icon:'layers', n:'03', title:'Multidisciplinary Mastery', desc:'Structural, BIM, MEP — all under one roof. Fully coordinated, collision-free models delivered on schedule.' },
  { icon:'bar-chart-2', n:'04', title:'Cost-Optimised Design', desc:'Value engineering at every stage — reducing material waste, construction cost, and timelines without compromise.' },
  { icon:'users', n:'05', title:'Dedicated Project Teams', desc:'A dedicated senior engineer leads every project from kickoff to handover — consistent, accountable, always reachable.' },
  { icon:'map-pin', n:'06', title:'Global Impact, One Standard', desc:'USA, Canada, UK, UAE, India, Australia — a single uncompromised standard of engineering excellence, globally.' },
];

export default function About() {
  return (
    <>
      <PageHero
        label="About FAECOM"
        title="Engineering the"
        titleEm="Built World"
        subtitle="Over 25 years of precision, passion, and world-class structural engineering delivered across 5 continents."
      />
      <div className="divider" />

      {/* Story */}
      <section className={styles.story}>
        <div className={styles.storyImg}>
          <div className={styles.storyImgFr} />
          <Image
            src="/images/about_building.png"
            alt="FAECOM building"
            width={600}
            height={800}
            style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.88)" }}
            quality={90}
          />
          <div className={styles.storyTag}>Established 2004</div>
        </div>

        <div className={styles.storyContent}>
          <span className="lbl">Our Story</span>
          <h2 className={styles.storyH2}>
            Over 25 Years of<br />
            <em>Engineering</em><br />
            Excellence
          </h2>
          <p className={styles.storyP}>
            FAECOM INC. is a multidisciplinary engineering firm providing reliable and cost-effective Insulated Concrete Form (ICF) solutions, Structural, Architectural, MEP, and BIM Design, along with Structural Drawings, Design Calculations, Engineering Review & Stamp, and Detailing.
          </p>
          <p className={styles.storyP}>
            We help Architects, Contractors, Fabricators, Developers, and Owners deliver practical, code-compliant, and efficient engineering solutions across Retail Spaces, Hotels, Mixed-Use Developments, Multifamily Residential, Commercial Offices, Senior Living, and Industrial Projects.
          </p>
          <p className={styles.storyP}>
            From concept to construction, we provide structural design, structural drawings, design calculations, engineering review & stamp, hybrid design, prescriptive tables, modular structural design & detailing, steel staircases, and specialized solutions for light gauge steel, timber, wood, concrete, steel, precast, and ICF structures.
          </p>
        </div>
      </section>

      <div className="divider" />

      {/* Leadership Team */}
      <LeadershipSection />

      {/* Global Impact */}
      <GlobalMapSection />

      {/* PE Stamping States */}
      <PEStampingSection />

      {/* Why Choose Us */}
      <section className={styles.why}>
        <div className={styles.whyHdr}>
          <div>
            <span className="lbl">Why FAECOM</span>
            <h2 className="sec-h2">
              Built on <em>Trust</em>,<br />
              Driven by<br />
              Precision
            </h2>
          </div>
          <p className={styles.whyIntro}>
            We are more than engineers. We are partners in your project success — from the first line on the blueprint to the final bolt on site.
          </p>
        </div>
        <div className={styles.whyGrid}>
          {WHY.map(w => (
            <div key={w.n} className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span className="why-card-num">{w.n}</span>
              <h3 className="why-card-title">{w.title}</h3>
              <p className="why-card-desc">{w.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />
      <CtaSection />
    </>
  );
}
