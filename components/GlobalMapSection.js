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
      </div>
    </section>
  );
}
