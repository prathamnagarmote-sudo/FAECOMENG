import Link from 'next/link';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import SoftwareSection from '@/components/SoftwareSection';
import IndustriesSection from '@/components/IndustriesSection';
import styles from './page.module.css';

export const metadata = { title: 'Engineering Services | FAECOM INC.' };

const SVCS = [
  {
    n: "01",
    title: "Architectural BIM Services",
    desc: "Full-scope Building Information Modeling — from conceptual 3D modeling to detailed construction documentation. Intelligent 3D models for smarter design, clash detection, multi-discipline coordination, and 4D construction scheduling.",
    bg: "linear-gradient(145deg,#0E092D,#1B134A)"
  },
  {
    n: "02",
    title: "LGS (Light Gauge Steel)",
    desc: "Light Gauge Steel Framing (LGSF) structural design, load calculations, and shop drawing preparation. Ideal for modular construction, residential multi-family, commercial buildings, and rapid on-site assembly.",
    bg: "linear-gradient(145deg,#0A0A08,#121210)"
  },
  {
    n: "03",
    title: "Wood & Mass Timber",
    desc: "Cross-Laminated Timber (CLT), glulam, LVL, and hybrid mass timber structural engineering. Combining sustainable material science with high-performance structural systems for low-carbon, architecturally expressive structures.",
    bg: "linear-gradient(145deg,#120E08,#241B10)"
  },
  {
    n: "04",
    title: "Structural Steel Solutions",
    desc: "Comprehensive structural steel framing design, heavy industrial steelwork, connection detailing, and fabrication shop drawings (Tekla & SDS/2). Built for strength, efficiency, and seamless erectability.",
    bg: "linear-gradient(145deg,#0B0726,#160F42)"
  },
  {
    n: "05",
    title: "ICF (Insulating Concrete Form)",
    desc: "Insulating Concrete Form structural engineering delivering superior thermal performance, acoustic insulation, structural integrity, and extreme weather / fire resistance for residential and commercial structures.",
    bg: "linear-gradient(145deg,#140C08,#281810)"
  },
  {
    n: "06",
    title: "MEP Engineering Solutions",
    desc: "Mechanical, Electrical, and Plumbing engineering fully integrated with structural and architectural BIM models. Coordinated ductwork, piping, power distribution, HVAC design, energy modeling, and code compliance.",
    bg: "linear-gradient(145deg,#0A0A08,#181816)"
  },
  {
    n: "07",
    title: "Rebar Detailing & Concrete",
    desc: "Reinforced concrete structural design, post-tensioned slab analysis, precast concrete sandwich panels, foundation engineering, and precise rebar placing drawings meeting ACI and international building codes.",
    bg: "linear-gradient(145deg,#0D082A,#1C1252)"
  },
  {
    n: "08",
    title: "Third Party Review & Value Engineering",
    desc: "Independent peer review, structural safety audits, code compliance verification, and value engineering. We optimize structural systems to reduce material quantities, construction time, and project costs.",
    bg: "linear-gradient(145deg,#160C08,#2C1810)"
  },
  {
    n: "09",
    title: "Industrial & Special Structures",
    desc: "Heavy-duty structural engineering for industrial manufacturing plants, warehouses, distribution centers, equipment foundations, crane gantry systems, and specialized infrastructure.",
    bg: "linear-gradient(145deg,#080806,#141412)"
  }
];

export default function Services() {
  return (
    <>
      <PageHero
        label="Our Engineering Capabilities"
        title="Comprehensive"
        titleEm="Engineering Services"
        subtitle="End-to-end structural, BIM, MEP, and value engineering solutions built on 25+ years of international expertise."
      />
      <div className="divider" />

      {/* Services Grid */}
      <section className={styles.svcBand}>
        <div className={styles.svcGrid}>
          {SVCS.map(s => (
            <div key={s.n} className={`svc-card ${styles.svcCardFull}`}>
              <div className="svc-card-bg" style={{ background: s.bg }} />
              <div className="svc-card-overlay" />
              <div className="svc-card-border" />
              <div className="svc-card-top">
                <span className="svc-card-num">{s.n}</span>
                <div className="svc-card-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                    <path d="M2 20h20M5 20V10l7-6 7 6v10M9 20v-6h6v6"/>
                  </svg>
                </div>
              </div>
              <div className="svc-card-body">
                <h3 className="svc-card-title">{s.title}</h3>
                <p className={styles.svcDesc}>{s.desc}</p>
                <Link href="/clients" className={styles.svcCta}>
                  <span>Request a Proposal</span>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="13" height="13" style={{ marginLeft: '6px' }}>
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      {/* Sector Specialization */}
      <IndustriesSection />

      {/* Software Portfolio */}
      <SoftwareSection />

      <div className="divider" />
      <CtaSection />
    </>
  );
}
