import styles from './LeadershipSection.module.css';
import { StaggerContainer, FadeUp } from './Animations';

const LEADERS = [
  {
    name: 'Sam',
    role: 'Chief Engineering Officer',
    desc: 'Over 17 years of international structural engineering experience across North America, Europe, the Middle East, and Asia. Specialist in light gauge steel, ICF, structural steel, mass timber, and complex structural systems.',
  },
  {
    name: 'Patrick',
    role: 'Chief Production Officer',
    desc: 'Extensive production leadership experience delivering innovative, practical, and code-compliant structural solutions across residential, commercial, industrial, and institutional projects worldwide.',
  },
  {
    name: 'Harvey',
    role: 'Chief Executive Officer',
    desc: 'Leading FAECOM’s vision for delivering architectural BIM and structural engineering solutions globally. AEC industry leader focused on strategic growth, client partnerships, and operational excellence.',
  },
];

export default function LeadershipSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <StaggerContainer className={styles.header}>
          <FadeUp>
            <span className="lbl">Executive Leadership</span>
          </FadeUp>
          <FadeUp>
            <h2 className={styles.title}>Our Leadership Team</h2>
          </FadeUp>
          <FadeUp>
            <p className={styles.subtitle}>
              Guided by seasoned structural engineers and AEC industry leaders committed to engineering excellence, innovation, and client success.
            </p>
          </FadeUp>
        </StaggerContainer>

        <StaggerContainer className={styles.grid} delayOrder={1}>
          {LEADERS.map((leader) => (
            <FadeUp key={leader.name} className={styles.card}>
              <div className={styles.avatarBox}>
                <div className={styles.avatarInitial}>{leader.name[0]}</div>
                <div className={styles.avatarBorder} />
              </div>
              <h3 className={styles.name}>{leader.name}</h3>
              <span className={styles.role}>{leader.role}</span>
              <p className={styles.desc}>{leader.desc}</p>
            </FadeUp>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
