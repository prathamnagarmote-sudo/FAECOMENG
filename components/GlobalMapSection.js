import styles from './GlobalMapSection.module.css';
import { StaggerContainer, FadeUp } from './Animations';
import CountUpStat from './CountUpStat';

const IMPACT_STATS = [
  { val: '1000+', label: 'PROJECTS DELIVERED', desc: 'Residential, Commercial & Industrial' },
  { val: '90+',   label: 'REPEAT CLIENTS',     desc: 'Global architectural & AEC partners' },
  { val: '5+',    label: 'CONTINENTS',         desc: 'USA, Canada, UK, UAE, India, Australia' },
  { val: '25+',   label: 'YEARS EXPERIENCE',   desc: 'Engineering excellence since 2004' },
  { val: '24 HR', label: 'RESPONSE TIME',      desc: 'Rapid support across time zones' },
];

const LOCATIONS = [
  { country: 'USA', desc: 'PE Licensed in 25+ States' },
  { country: 'Canada', desc: 'Mass Timber & Residential' },
  { country: 'UK', desc: 'BIM & Structural Detailing' },
  { country: 'Dubai (UAE)', desc: 'High-rise & Commercial' },
  { country: 'India', desc: 'Engineering & Delivery Center' },
  { country: 'Australia', desc: 'Structural Design & Detailing' },
];

export default function GlobalMapSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <StaggerContainer className={styles.header}>
          <FadeUp>
            <span className="lbl-dk">Worldwide Presence</span>
          </FadeUp>
          <FadeUp>
            <h2 className={styles.title}>Global Engineering Work</h2>
          </FadeUp>
          <FadeUp>
            <p className={styles.subtitle}>
              Our structural engineering expertise spans multiple continents, delivering innovative, code-compliant solutions worldwide.
            </p>
          </FadeUp>
        </StaggerContainer>

        {/* Global Stats Ribbon */}
        <StaggerContainer className={styles.statsRibbon} delayOrder={1}>
          {IMPACT_STATS.map((s) => (
            <FadeUp key={s.label} className={styles.statCell}>
              <div className={styles.statVal}>
                <CountUpStat value={s.val.replace(/[^0-9]/g, '')} suffix={s.val.replace(/[0-9]/g, '')} />
              </div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statDesc}>{s.desc}</div>
            </FadeUp>
          ))}
        </StaggerContainer>

        {/* Global Footprint Grid */}
        <StaggerContainer className={styles.locationGrid} delayOrder={2}>
          {LOCATIONS.map((loc) => (
            <FadeUp key={loc.country} className={styles.locCard}>
              <div className={styles.locIcon}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="20" height="20">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <div>
                <h4 className={styles.locCountry}>{loc.country}</h4>
                <p className={styles.locDesc}>{loc.desc}</p>
              </div>
            </FadeUp>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
