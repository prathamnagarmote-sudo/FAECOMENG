import styles from './PEStampingSection.module.css';
import { StaggerContainer, FadeUp, ScaleIn } from './Animations';

const PE_STATES = [
  'Texas', 'California', 'Florida', 'New York', 'New Jersey', 'Illinois',
  'Washington', 'Washington D.C.', 'Massachusetts', 'Georgia', 'Arizona', 'Michigan',
  'Indiana', 'Iowa', 'Nevada', 'Tennessee', 'Ohio', 'Colorado',
  'Virginia', 'Maryland', 'Utah', 'Pennsylvania', 'North Carolina', 'South Carolina',
  'North Dakota', 'South Dakota'
];

export default function PEStampingSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left Text & Map Callout */}
          <StaggerContainer className={styles.left}>
            <FadeUp>
              <span className="lbl-dk">US Licensure & Stamping</span>
            </FadeUp>
            <FadeUp>
              <h2 className={styles.title}>PE Stamping & Approval</h2>
            </FadeUp>
            <FadeUp>
              <p className={styles.desc}>
                FAECOM INC has licensed Professional Engineers (PE) across more than 24 US states, ensuring full building code compliance, structural integrity verification, and sealed engineering calculations for every jurisdiction.
              </p>
            </FadeUp>
            
            <ScaleIn>
              <div className={styles.sealBadge}>
                <div className={styles.sealIcon}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="28" height="28">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    <path d="m9 12 2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <span className={styles.sealTitle}>Sealed Engineering Plans</span>
                  <span className={styles.sealSub}>Licensed Professional Engineers (PE)</span>
                </div>
              </div>
            </ScaleIn>
          </StaggerContainer>

          {/* Right Interactive State Badges */}
          <StaggerContainer className={styles.right} delayOrder={1}>
            <FadeUp className={styles.statesHeader}>
              <span className={styles.statesCount}>24 STATES COVERED</span>
              <span className={styles.statesSub}>Click or inspect licensed jurisdictions</span>
            </FadeUp>

            <StaggerContainer className={styles.statesGrid} delayOrder={2}>
              {PE_STATES.map((state) => (
                <FadeUp key={state} className={styles.stateChip}>
                  <span className={styles.stateDot} />
                  <span>{state}</span>
                </FadeUp>
              ))}
            </StaggerContainer>
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
