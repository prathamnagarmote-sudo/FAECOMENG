import Image from 'next/image';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from './page.module.css';
export const metadata = { title: 'Projects' };

const PHOTO = [
  { src:"/images/project_residential.png", loc:"Manchester, New Hampshire · USA", name:"Elm Street Residences", h:500 },
  { src:"/images/project_commercial.png",  loc:"New York · USA",                  name:"TM Heights Tower",      h:360 },
];
const BLUEPRINT = [
  { loc:"Little Exuma · Bahamas",    name:"Sugar Villa",                viewBox:"0 0 400 300", fill:"#0d1008" },
  { loc:"Kerrville, Texas · USA",    name:"Goat Creek Medical Facility", viewBox:"0 0 400 380", fill:"#0a0c10" },
  { loc:"Ontario · Canada",          name:"Khan Residence",              viewBox:"0 0 400 250", fill:"#100d08" },
  { loc:"Washington D.C. · USA",     name:"Nelson Senior Care Center",   viewBox:"0 0 400 330", fill:"#0c0b10" },
];

export default function Projects() {
  return (
    <>
      <PageHero label="Featured Work" title="Selected" titleEm="Projects" subtitle="300+ projects delivered across residential, commercial, healthcare, and industrial sectors in 10+ countries." />
      <div className="divider" />

      <section className={styles.gallery}>
        <div className={styles.masonry}>
          {PHOTO.map(p => (
            <div key={p.name} className={`proj-card ${styles.projCard}`}>
              <Image src={p.src} alt={p.name} width={600} height={p.h} style={{width:"100%",height:"auto",display:"block"}} quality={85} />
              <div className="proj-card-ov" />
              <div className="proj-card-info">
                <p className="proj-card-loc">{p.loc}</p>
                <h3 className="proj-card-name">{p.name}</h3>
              </div>
              <div className="proj-card-bdr" />
            </div>
          ))}
          {BLUEPRINT.map(b => (
            <div key={b.name} className={`proj-card ${styles.bpCard}`}>
              <svg viewBox={b.viewBox} xmlns="http://www.w3.org/2000/svg" style={{display:"block",width:"100%"}}>
                <rect width="400" height="400" fill={b.fill}/>
                <rect x="40" y="35" width="320" height="230" fill="none" stroke="rgba(184,145,61,.28)" strokeWidth="1.2"/>
                <line x1="40" y1="105" x2="360" y2="105" stroke="rgba(184,145,61,.12)" strokeWidth=".8" strokeDasharray="8,4"/>
                <line x1="40" y1="175" x2="360" y2="175" stroke="rgba(184,145,61,.12)" strokeWidth=".8" strokeDasharray="8,4"/>
                <line x1="200" y1="35" x2="200" y2="265" stroke="rgba(184,145,61,.1)" strokeWidth=".7"/>
                <rect x="55" y="48" width="130" height="50" fill="rgba(184,145,61,.06)" stroke="rgba(184,145,61,.28)" strokeWidth=".8"/>
                <rect x="215" y="48" width="130" height="50" fill="rgba(184,145,61,.06)" stroke="rgba(184,145,61,.28)" strokeWidth=".8"/>
                <rect x="140" y="180" width="120" height="60" fill="rgba(184,145,61,.08)" stroke="rgba(184,145,61,.35)" strokeWidth="1"/>
                <text x="200" y="22" fontFamily="Space Mono,monospace" fontSize="9" fill="rgba(184,145,61,.4)" textAnchor="middle" letterSpacing="2">{b.loc.toUpperCase()}</text>
              </svg>
              <div className="proj-card-ov" style={{opacity:.6}} />
              <div className="proj-card-info">
                <p className="proj-card-loc">{b.loc}</p>
                <h3 className="proj-card-name">{b.name}</h3>
              </div>
              <div className="proj-card-bdr" />
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />
      <CtaSection />
    </>
  );
}
