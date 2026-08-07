import Image from 'next/image';
import Link from 'next/link';
import CtaSection from '@/components/CtaSection';
import LeadershipSection from '@/components/LeadershipSection';
import PEStampingSection from '@/components/PEStampingSection';
import GlobalMapSection from '@/components/GlobalMapSection';
import { Building2, Globe, ShieldCheck, Users, Store, Building, Home, Briefcase, Factory } from 'lucide-react';
import { StaggerContainer, FadeUp, ScaleIn, ParallaxImage } from '@/components/Animations';
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
      <section className={styles.aboutHero}>
        <ParallaxImage className={styles.aboutHeroBg} offset={100}>
          <Image 
            src="/images/about_hero_shared.jpg" 
            alt="FAECOM Architectural Design" 
            fill 
            style={{ objectFit: 'cover', objectPosition: 'center' }} 
            priority
            quality={90}
          />
        </ParallaxImage>
        <div className={styles.aboutHeroOverlay} />
        <StaggerContainer className={styles.aboutHeroContent}>
          <FadeUp>
            <span className={styles.aboutHeroLabel}>INNOVATION • PRECISION • PERFORMANCE</span>
          </FadeUp>
          <FadeUp>
            <h1 className={styles.aboutHeroTitle}>
              Designing the Future. <br />
              <em>Engineering the Impossible.</em>
            </h1>
          </FadeUp>
          <FadeUp>
            <p className={styles.aboutHeroSubtitle}>
              At FAECOM, engineering is more than calculations—it's the foundation of visionary architecture. Through advanced structural design, BIM integration, Light Gauge Steel, ICF, Timber, and multidisciplinary collaboration, we deliver intelligent, sustainable, and high-performance solutions that transform ambitious concepts into enduring landmarks.
            </p>
          </FadeUp>
        </StaggerContainer>
      </section>
      <div className="divider" />

      {/* Who We Are */}
      <section className={styles.whoWeAre}>
        <div className={styles.whoWeAreBg}>
          <Image src="/images/who_we_are.png" alt="Background Texture" fill style={{ objectFit: "cover" }} quality={90} priority />
          <div className={styles.whoWeAreOverlay} />
        </div>

        <div className={styles.whoWeAreInner}>
          <div className={styles.whoColumns}>
            <StaggerContainer className={styles.whoLeft}>
              <FadeUp className={styles.whoLblContainer}>
                <span className={styles.whoLbl}>Who We Are</span>
                <span className={styles.whoLblLine} />
              </FadeUp>
              <FadeUp>
                <p className={styles.whoText}>
                  FAECOM INC is a multidisciplinary engineering firm providing reliable and cost-effective Insulated Concrete Form (ICF) solutions, Structural, Architectural, MEP, and BIM Design, along with Structural Drawings, Design Calculations, Engineering Review & Stamp, and Detailing.
                </p>
              </FadeUp>
              <FadeUp>
                <p className={styles.whoText}>
                  We help Architects, Contractors, Fabricators, Developers, and Owners deliver practical, code-compliant, and efficient engineering solutions.
                </p>
              </FadeUp>
            </StaggerContainer>

            <StaggerContainer className={styles.whoGrid} delayOrder={1}>
              {/* Item 1 */}
              <FadeUp className={styles.whoGridItem}>
                <Building2 className={styles.whoIcon} size={36} strokeWidth={1.5} />
                <div className={styles.whoItemContent}>
                  <h3 className={styles.whoItemTitle}>Multidisciplinary<br/>Expertise</h3>
                  <p className={styles.whoItemDesc}>End-to-end engineering solutions under one roof.</p>
                </div>
              </FadeUp>
              
              {/* Item 2 */}
              <FadeUp className={styles.whoGridItem}>
                <Globe className={styles.whoIcon} size={36} strokeWidth={1.5} />
                <div className={styles.whoItemContent}>
                  <h3 className={styles.whoItemTitle}>Global<br/>Experience</h3>
                  <p className={styles.whoItemDesc}>Serving clients across multiple countries.</p>
                </div>
              </FadeUp>

              {/* Item 3 */}
              <FadeUp className={styles.whoGridItem}>
                <ShieldCheck className={styles.whoIcon} size={36} strokeWidth={1.5} />
                <div className={styles.whoItemContent}>
                  <h3 className={styles.whoItemTitle}>Quality &<br/>Compliance</h3>
                  <p className={styles.whoItemDesc}>Code-compliant designs with industry standards.</p>
                </div>
              </FadeUp>

              {/* Item 4 */}
              <FadeUp className={styles.whoGridItem}>
                <Users className={styles.whoIcon} size={36} strokeWidth={1.5} />
                <div className={styles.whoItemContent}>
                  <h3 className={styles.whoItemTitle}>Client<br/>Focused</h3>
                  <p className={styles.whoItemDesc}>Practical, efficient and cost-effective solutions.</p>
                </div>
              </FadeUp>
            </StaggerContainer>
          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Industries We Serve */}
      <section className={styles.industries}>
        <StaggerContainer className={styles.industriesContent}>
          <FadeUp>
            <h2 className={styles.industriesH2}>Industries We Serve</h2>
            <div className={styles.whoLblLine} style={{ margin: '0 auto 48px auto' }} />
          </FadeUp>
          <FadeUp>
            <div className={styles.indGrid}>
              <div className={styles.indCard}>
                <Store className={styles.indIcon} size={72} strokeWidth={1.2} />
                <span className={styles.indTitle}>Retail<br/>Spaces</span>
              </div>
              <div className={styles.indCard}>
                <Building2 className={styles.indIcon} size={72} strokeWidth={1.2} />
                <span className={styles.indTitle}>Hotels</span>
              </div>
              <div className={styles.indCard}>
                <Building className={styles.indIcon} size={72} strokeWidth={1.2} />
                <span className={styles.indTitle}>Mixed-Use<br/>Developments</span>
              </div>
              <div className={styles.indCard}>
                <Home className={styles.indIcon} size={72} strokeWidth={1.2} />
                <span className={styles.indTitle}>Multifamily<br/>Residential</span>
              </div>
              <div className={styles.indCard}>
                <Briefcase className={styles.indIcon} size={72} strokeWidth={1.2} />
                <span className={styles.indTitle}>Commercial<br/>Offices</span>
              </div>
              <div className={styles.indCard}>
                <Factory className={styles.indIcon} size={72} strokeWidth={1.2} />
                <span className={styles.indTitle}>Industrial<br/>Projects</span>
              </div>
            </div>
          </FadeUp>
          
          <FadeUp>
            <div className={styles.indSubImages}>
              <Image src="/images/project_commercial.png" width={400} height={250} alt="Commercial Project" className={styles.indSubImg} />
              <Image src="/images/project_industrial.png" width={400} height={250} alt="Industrial Project" className={styles.indSubImg} />
              <Image src="/images/project_residential.png" width={400} height={250} alt="Residential Project" className={styles.indSubImg} />
            </div>
          </FadeUp>
        </StaggerContainer>
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
        <StaggerContainer className={styles.whyHdr}>
          <div>
            <FadeUp>
              <span className="lbl">Why FAECOM</span>
            </FadeUp>
            <FadeUp>
              <h2 className="sec-h2">
                Built on <em>Trust</em>,<br />
                Driven by<br />
                Precision
              </h2>
            </FadeUp>
          </div>
          <FadeUp>
            <p className={styles.whyIntro}>
              We are more than engineers. We are partners in your project success — from the first line on the blueprint to the final bolt on site.
            </p>
          </FadeUp>
        </StaggerContainer>
        <StaggerContainer className={styles.whyGrid} delayOrder={1}>
          {WHY.map(w => (
            <FadeUp key={w.n} className="why-card">
              <div className="why-card-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                </svg>
              </div>
              <span className="why-card-num">{w.n}</span>
              <h3 className="why-card-title">{w.title}</h3>
              <p className="why-card-desc">{w.desc}</p>
            </FadeUp>
          ))}
        </StaggerContainer>
      </section>

      <div className="divider" />
      <CtaSection />
    </>
  );
}
