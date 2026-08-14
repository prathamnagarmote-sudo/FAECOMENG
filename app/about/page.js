import Image from 'next/image';
import Link from 'next/link';
import CtaSection from '@/components/CtaSection';
import LeadershipSection from '@/components/LeadershipSection';
import WhoWeArePillarsSection from '@/components/WhoWeArePillarsSection';
import MeetOurTeamSection from '@/components/MeetOurTeamSection';
import PEStampingSection from '@/components/PEStampingSection';
import GlobalMapSection from '@/components/GlobalMapSection';
import AboutHeroArchitectural from '@/components/AboutHeroArchitectural';
import { Building2, Globe, ShieldCheck, Users, Store, Building, Home, Briefcase, Factory } from 'lucide-react';
import { StaggerContainer, FadeUp, ScaleIn, ParallaxImage } from '@/components/Animations';
import styles from './page.module.css';

export const metadata = { title: 'About FAECOM INC.' };

export default function About() {
  return (
    <>
      {/* Award-Winning Architectural Hero Section */}
      <AboutHeroArchitectural />

      {/* ══ 1. WHO WE ARE & 4 PILLARS (Matching Reference Layout) ══ */}
      <WhoWeArePillarsSection />

      {/* ══ 2. MEET OUR TEAM (Compact Cards + Read Bio Modal) ══ */}
      <MeetOurTeamSection />

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
              Our expertise spans a wide range of construction systems, including ICF, Wood, Cold-Formed Metal, Structural Steel, Reinforced Concrete, Precast Concrete, Precast Sandwich Panels, Light Gauge Steel (LGS), and Hybrid/Composite Structural Systems. From concept to construction, we provide Structural Design, Structural Drawings, Design Calculations, Engineering Review & Stamp, Hybrid Design, Prescriptive Tables, Modular Structural Design & Detailing, Steel Staircases, and specialized solutions.
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

      {/* Global Impact */}
      <GlobalMapSection />
    </>
  );
}
