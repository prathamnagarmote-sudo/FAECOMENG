import styles from './LeadershipSection.module.css';
import { StaggerContainer, FadeUp } from './Animations';

import Image from 'next/image';

const LEADERS = [
  {
    name: 'Harvey',
    image: '/images/harvey.jpeg',
    role: 'Chief Executive Officer',
    role2: 'Principal Structural Engineer, Ph.D., P.E.',
    email: 'harvey@faecom.com',
    desc: 'Harvey Dang is a Principal Structural Engineer, Ph.D., and licensed Professional Engineer (P.E.) registered in multiple U.S. states, with over 20 years of experience in structural design, analysis, and project execution. He specializes in structural steel, reinforced concrete, ICF, podium, and wood-framed systems, delivering innovative, code-compliant, safe, and cost-effective solutions. Harvey collaborates with multidisciplinary teams to ensure successful project delivery, client satisfaction, and engineering excellence.',
  },
  {
    name: 'Pratik',
    image: '/images/pratik.png',
    role: 'Chief Production Officer',
    role2: null,
    email: 'pratik@faecom.com',
    desc: 'Pratik D. is the Chief Production Officer with extensive experience in delivering innovative, practical, and code-compliant solutions across residential, commercial, industrial, and institutional projects. His expertise includes reinforced concrete, post-tensioned concrete, structural steel, timber, ICF, cold-formed steel, composite, and light-gauge steel construction systems. He is committed to operational excellence, process efficiency, and delivering the highest standards of quality and professionalism.',
  },
  {
    name: 'Sam',
    image: '/images/pravin.png',
    imagePosition: 'center 80%',
    role: 'Director, Head of Engineering',
    role2: null,
    email: 'sam@faecom.com',
    desc: "Sam S. holds a Master's degree in Structural Engineering and is currently pursuing his Ph.D. in Cold-Formed Steel Structure Construction — academic rigor backed by 17+ years delivering structural solutions across four continents. As Technical Director, he's the partner builders and developers trust when projects demand precision, speed, and cost-smart engineering. Specializing in light gauge steel, ICF, lumber, hot rolled steel, and mixed structural systems, Sam has delivered projects across the US, Canada, the UK, and Dubai, combining advanced software expertise, international coordination, and dependable engineering leadership.",
  },
  {
    name: 'Max',
    image: '/images/max.jpeg',
    imagePosition: 'center 15%',
    role: 'Chief Marketing Officer',
    role2: null,
    email: 'max@faecom.com',
    desc: 'Max Langley is the Chief Marketing Officer, bringing over 19 years of experience to FAECOM, driving strategic growth across the Architecture, Engineering, and Construction (AEC) industry. He leads brand strategy, business development, and key account partnerships with leading architects, engineers, fabricators, and global ICF manufacturers. By combining market intelligence with customer-focused strategies, Max strengthens industry relationships, expands market presence, and delivers sustainable business growth.',
  }
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
            <div style={{ width: '40px', height: '2px', background: 'var(--accent)', margin: '0 auto 48px auto' }} />
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
              <div className={styles.cardImageWrapper}>
                {leader.image && <Image src={leader.image} alt={leader.name} fill className={styles.cardImage} style={leader.imagePosition ? { objectPosition: leader.imagePosition } : {}} />}
                <div className={styles.avatarIcon}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                </div>
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.name}>{leader.name}</h3>
                <span className={styles.role}>{leader.role}</span>
                {leader.role2 && <span className={styles.role2}>{leader.role2}</span>}
                <span className={styles.email}>{leader.email}</span>
                <p className={styles.desc}>{leader.desc}</p>
              </div>
            </FadeUp>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
