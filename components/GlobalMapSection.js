import styles from './GlobalMapSection.module.css';

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
        <div className={styles.header}>
          <span className="lbl-dk">Worldwide Presence</span>
          <h2 className={styles.title}>Global Engineering Work</h2>
          <p className={styles.subtitle}>
            Our structural engineering expertise spans multiple continents, delivering innovative, code-compliant solutions worldwide.
          </p>
        </div>

        {/* Global Stats Ribbon */}
        <div className={styles.statsRibbon}>
          {IMPACT_STATS.map((s) => (
            <div key={s.label} className={styles.statCell}>
              <div className={styles.statVal}>{s.val}</div>
              <div className={styles.statLabel}>{s.label}</div>
              <div className={styles.statDesc}>{s.desc}</div>
            </div>
          ))}
        </div>

        {/* Global Footprint Grid */}
        <div className={styles.locationGrid}>
          {LOCATIONS.map((loc) => (
            <div key={loc.country} className={styles.locCard}>
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
