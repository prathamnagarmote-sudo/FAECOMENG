import Image from 'next/image';
import Link from 'next/link';
import CtaSection from '@/components/CtaSection';
import LeadershipSection from '@/components/LeadershipSection';
import PEStampingSection from '@/components/PEStampingSection';
import GlobalMapSection from '@/components/GlobalMapSection';
import AboutHero from '@/components/AboutHero';
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
      <AboutHero />
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
        <div className={styles.industriesBg}>
          <Image src="/images/cta_building.png" alt="Industries Background" fill style={{ objectFit: 'cover' }} quality={70} />
          <div className={styles.industriesOverlay} />
        </div>
        
        <StaggerContainer className={styles.industriesContent}>
          <FadeUp>
            <h2 className={styles.industriesH2}>Industries We Serve</h2>
            <div className={styles.whoLblLine} style={{ margin: '0 auto 48px auto' }} />
          </FadeUp>
          <FadeUp>
            <div className={styles.indGrid}>
              <div className={styles.indCard}>
                <Image src="/images/industry_retail.png" alt="Retail Spaces" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>Retail<br/>Spaces</span>
              </div>
              <div className={styles.indCard}>
                <Image src="/images/industry_hotel.png" alt="Hotels" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>Hotels</span>
              </div>
              <div className={styles.indCard}>
                <Image src="/images/industry_mixed.png" alt="Mixed-Use Developments" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>Mixed-Use<br/>Developments</span>
              </div>
              <div className={styles.indCard}>
                <Image src="/images/industry_multifamily.png" alt="Multifamily Residential" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>Multifamily<br/>Residential</span>
              </div>
              <div className={styles.indCard}>
                <Image src="/images/industry_commercial.png" alt="Commercial Offices" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>Commercial<br/>Offices</span>
              </div>
              <div className={styles.indCard}>
                <Image src="/images/industry_industrial.png" alt="Industrial Projects" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>Industrial<br/>Projects</span>
              </div>
            </div>
          </FadeUp>
          
        </StaggerContainer>
      </section>

      <div style={{ width: '100%', height: '1px', background: '#000000' }} />

      {/* Construction Expertise */}
      <section className={styles.construction}>
        <div className={styles.constructionBg}>
          <Image src="/images/about_building.png" alt="Construction Background" fill style={{ objectFit: 'cover' }} quality={70} />
          <div className={styles.constructionOverlay} />
        </div>

        <StaggerContainer className={styles.constructionContent}>
          <FadeUp>
            <h2 className={styles.industriesH2}>Construction Expertise</h2>
            <div className={styles.whoLblLine} style={{ margin: '0 auto 24px auto' }} />
          </FadeUp>

          <FadeUp>
            <p className={styles.constructionSubtitle}>
              From traditional reinforced concrete to cutting-edge hybrid structural systems, our multidisciplinary teams engineer solutions tailored to the unique demands of every material, ensuring peak performance, sustainability, and construction efficiency.
            </p>
          </FadeUp>

          <FadeUp>
            <div className={styles.constGrid}>
              <div className={styles.indCard}>
                <Image src="/images/expertise_icf.png" alt="ICF" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>ICF<br/>(Insulated<br/>Concrete Form)</span>
              </div>
              <div className={styles.indCard}>
                <Image src="/images/expertise_steel.png" alt="Structural Steel" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>Structural<br/>Steel</span>
              </div>
              <div className={styles.indCard}>
                <Image src="/images/expertise_wood.png" alt="Wood & Timber" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>Wood &<br/>Timber</span>
              </div>
              <div className={styles.indCard}>
                <Image src="/images/expertise_lgs.png" alt="Light Gauge Steel" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>Light Gauge<br/>Steel</span>
              </div>
              <div className={styles.indCard}>
                <Image src="/images/expertise_rc.png" alt="Reinforced Concrete" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>Reinforced<br/>Concrete</span>
              </div>
              <div className={styles.indCard}>
                <Image src="/images/expertise_precast.png" alt="Precast Concrete" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>Precast<br/>Concrete</span>
              </div>
              <div className={styles.indCard}>
                <Image src="/images/expertise_hybrid.png" alt="Hybrid Structural Systems" width={240} height={240} className={styles.indImg} />
                <span className={styles.indTitle}>Hybrid<br/>Structural Systems</span>
              </div>
            </div>
          </FadeUp>
        </StaggerContainer>
      </section>

      <div className="divider" />

      {/* Featured Projects */}
      <section className={styles.featured}>
        <StaggerContainer>
          <FadeUp>
            <h2 className={styles.featuredH2}>Featured Projects</h2>
            <div className={styles.whoLblLine} style={{ margin: '0 auto 48px auto' }} />
          </FadeUp>

          <FadeUp>
            <div className={styles.featuredGrid}>
              <div className={styles.featuredCard}>
                <Image src="/images/featured_commercial.jpg" alt="Commercial Mixed-Use Project" width={600} height={350} className={styles.featuredImg} />
                <h3 className={styles.featuredTitle}>COMMERCIAL MIXED-USE PROJECT</h3>
                <p className={styles.featuredSubtitle}>Structural Design & BIM Modelling</p>
              </div>
              <div className={styles.featuredCard}>
                <Image src="/images/featured_residential.png" alt="Residential Apartment Project" width={600} height={350} className={styles.featuredImg} />
                <h3 className={styles.featuredTitle}>RESIDENTIAL APARTMENT PROJECT</h3>
                <p className={styles.featuredSubtitle}>Structural Design & BIM Modelling</p>
              </div>
            </div>
          </FadeUp>
        </StaggerContainer>
      </section>

      {/* Leadership Team */}
      <div style={{ width: '100%', height: '1px', backgroundColor: '#FFFFFF' }} />
      <LeadershipSection />

      {/* Global Impact */}
      <GlobalMapSection />
    </>
  );
}
