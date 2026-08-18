import PageHero from "@/components/PageHero";
import CtaSection from "@/components/CtaSection";
import styles from "./page.module.css";
export const metadata = { title: "Process" };

const STEPS = [
  { n:"01", title:"Blueprint", desc:"Architectural drawings, site analysis, structural concept development and project brief alignment." },
  { n:"02", title:"Concept",   desc:"3D BIM modelling, clash detection and design iteration across all disciplines." },
  { n:"03", title:"Engineering", desc:"Structural calculations, PE stamping and fully coordinated construction documents." },
  { n:"04", title:"Construction", desc:"On-site coordination, RFI support, shop drawing review and construction oversight." },
  { n:"05", title:"Delivery",  desc:"Project handover, as-built documentation and post-completion engineering support." },
];
const WHY = [
  ["01","PE Stamped — 24 States","Licensed Professional Engineers across 21 US states. Your project meets every local code, every time."],
  ["02","100% Remote Capable","Fully digital cloud-based workflows enabling seamless collaboration with clients worldwide."],
  ["03","Multi-Discipline","Structural, BIM, MEP — all under one roof. Coordinated, collision-free models on schedule."],
  ["04","Cost-Optimised","Value engineering at every stage — reducing waste, construction cost, and timelines without compromise."],
  ["05","Dedicated Teams","A dedicated senior engineer leads every project from kickoff to handover — accountable, always reachable."],
  ["06","5+ Countries","USA, Canada, Bahamas, UAE, India — a single uncompromised standard of engineering excellence."],
];

export default function Process() {
  return (
    <>
      <PageHero label="How We Work" title="From Blueprint" titleEm="to Reality" subtitle="A structured, transparent engineering process that keeps your project on schedule, on budget, and engineered to perfection." />
      <div className="divider" />

      <section className={styles.steps}>
        <div className={styles.stepsHdr}>
          <span className="lbl" style={{justifyContent:"center"}}>Our Methodology</span>
          <h2 className={styles.stepsH2}>Five Phases.<br />Zero Surprises.</h2>
        </div>
        <div className={styles.procTrack}>
          <div className={styles.procLine} />
          {STEPS.map(s => (
            <div key={s.n} className={styles.procStep}>
              <div className={`proc-step-icon ${styles.procIcon}`}>
                <span className={styles.procSn}>{s.n}</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="32" height="32">
                  <path d="M9 12h6M9 8h6M9 16h4M5 4h14a1 1 0 0 1 1 1v15a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1z"/>
                </svg>
              </div>
              <h3 className={styles.procTitle}>{s.title}</h3>
              <p className={styles.procDesc}>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className={styles.detail}>
        <div className={styles.detailHdr}>
          <span className="lbl">Phase Details</span>
          <h2 className="sec-h2">What Happens<br />at Each <em>Stage</em></h2>
          <p className={styles.detailIntro}>Transparency and communication are built into every phase. You always know exactly where your project stands.</p>
        </div>
        <div className={styles.detailGrid}>
          {[["PHASE 01","Blueprint & Brief","We start with a thorough review of your architectural drawings, site conditions, soil reports, and project brief. We identify structural system options, material choices, and establish the project timeline and deliverable schedule."],
            ["PHASE 02","3D BIM Concept","Our BIM team develops a full 3D model integrating structural, architectural, and MEP elements. Clash detection runs automatically across disciplines, and we iterate with your design team until the model is collision-free."],
            ["PHASE 03","Structural Engineering","Comprehensive structural calculations, load analysis, connection design, and foundation engineering. All documents are reviewed, signed, and PE-stamped by our licensed engineers — valid in 24 US states."],
            ["PHASE 04+05","Build & Delivery","Throughout construction, we provide RFI responses, shop drawing reviews, and site observation reports. At completion, we deliver as-built documentation and remain available for any post-completion queries."]].map(([ph,t,d])=>(
            <div key={ph} className={styles.detailCard}>
              <span className={styles.detailPh}>{ph}</span>
              <h3 className={styles.detailTitle}>{t}</h3>
              <p className={styles.detailDesc}>{d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className={styles.why}>
        <div className={styles.whyHdr}>
          <span className="lbl">Why FAECOM</span>
          <h2 className="sec-h2">Built on <em>Trust</em>,<br />Driven by Precision</h2>
        </div>
        <div className={styles.whyGrid}>
          {WHY.map(([n,t,d]) => (
            <div key={n} className="why-card">
              <div className="why-card-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg></div>
              <span className="why-card-num">{n}</span>
              <h3 className="why-card-title">{t}</h3><p className="why-card-desc">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />
      <CtaSection />
    </>
  );
}
