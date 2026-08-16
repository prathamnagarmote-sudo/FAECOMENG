'use client';
import { useState } from 'react';
import Image from 'next/image';
import { Mail, X, ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { StaggerContainer, FadeUp } from './Animations';
import styles from './MeetOurTeamSection.module.css';

const LEADERS = [
  {
    name: 'Harvey',
    image: '/images/harvey_new.jpg',
    role: 'Chief Executive Officer',
    role2: 'Principal Structural Engineer, Ph.D., P.E.',
    badge: '20+ YRS EXP // P.E. STAMP',
    email: 'harvey@faecom.com',
    shortDesc: 'Principal Structural Engineer with Ph.D. & P.E. licenses across 25+ U.S. states. Expert in structural steel, concrete, podium, & ICF systems.',
    fullDesc: 'Harvey Dang is a Principal Structural Engineer, Ph.D., and licensed Professional Engineer (P.E.) registered in multiple U.S. states, with over 20 years of experience in structural design, analysis, and project execution. He specializes in structural steel, reinforced concrete, ICF, podium, and wood-framed systems, delivering innovative, code-compliant, safe, and cost-effective solutions. Harvey collaborates with multidisciplinary teams to ensure successful project delivery, client satisfaction, and engineering excellence.',
  },
  {
    name: 'Pratik',
    image: '/images/pratik_new.png',
    role: 'Chief Production Officer',
    role2: 'Structural & BIM Systems Lead',
    badge: 'CPO // BIM & STRUCTURAL LEAD',
    email: 'pratik@faecom.com',
    shortDesc: 'CPO driving operational excellence, high-precision BIM models, & code-compliant structural solutions across global developments.',
    fullDesc: 'Pratik D. is the Chief Production Officer with extensive experience in delivering innovative, practical, and code-compliant solutions across residential, commercial, industrial, and institutional projects. His expertise includes reinforced concrete, post-tensioned concrete, structural steel, timber, ICF, cold-formed steel, composite, and light-gauge steel construction systems. He is committed to operational excellence, process efficiency, and delivering the highest standards of quality and professionalism.',
  },
  {
    name: 'Sam',
    image: '/images/pravin_new.png',
    imagePosition: 'center 85%',
    role: 'Director, Head of Engineering',
    role2: 'M.S. Structural, Ph.D. Candidate (CFS)',
    badge: 'TECHNICAL DIRECTOR // 17+ YRS',
    email: 'sam@faecom.com',
    shortDesc: 'Technical Director with 17+ years leading structural design across 4 continents, specializing in LGS, ICF, and hybrid structural systems.',
    fullDesc: "Sam S. holds a Master's degree in Structural Engineering and is currently pursuing his Ph.D. in Cold-Formed Steel Structure Construction — academic rigor backed by 17+ years delivering structural solutions across four continents. As Technical Director, he's the partner builders and developers trust when projects demand precision, speed, and cost-smart engineering. Specializing in light gauge steel, ICF, lumber, hot rolled steel, and mixed structural systems, Sam has delivered projects across the US, Canada, the UK, and Dubai, combining advanced software expertise, international coordination, and dependable engineering leadership.",
  },
  {
    name: 'Max',
    image: '/images/max_new.jpg',
    role: 'Chief Marketing Officer',
    role2: 'AEC Strategic Partnerships Lead',
    badge: 'CMO // 19+ YRS AEC GROWTH',
    email: 'max@faecom.com',
    shortDesc: 'CMO with 19+ years driving AEC strategic growth, key account partnerships, and global ICF manufacturer relationships.',
    fullDesc: 'Max Langley is the Chief Marketing Officer, bringing over 19 years of experience to FAECOM, driving strategic growth across the Architecture, Engineering, and Construction (AEC) industry. He leads brand strategy, business development, and key account partnerships with leading architects, engineers, fabricators, and global ICF manufacturers. By combining market intelligence with customer-focused strategies, Max strengthens industry relationships, expands market presence, and delivers sustainable business growth.',
  }
];

export default function MeetOurTeamSection() {
  const [activeLeader, setActiveLeader] = useState<typeof LEADERS[0] | null>(null);

  return (
    <section className={styles.teamSection} aria-label="Meet Our Team">
      <div className={styles.container}>
        <StaggerContainer className={styles.header}>
          <FadeUp>
            <div className={styles.eyebrowTag}>
              <Award size={16} className={styles.eyebrowIcon} />
              <span>EXECUTIVE LEADERSHIP & LICENSED ENGINEERS</span>
            </div>
            <h2 className={styles.title}>MEET OUR TEAM</h2>
            <div className={styles.titleLine} />
          </FadeUp>
          <FadeUp>
            <p className={styles.subtitle}>
              Guided by licensed structural engineers and AEC industry leaders committed to uncompromised engineering excellence, code compliance, and client success.
            </p>
          </FadeUp>
        </StaggerContainer>

        {/* Large Prominent Executive Cards Grid */}
        <StaggerContainer className={styles.grid}>
          {LEADERS.map((leader) => (
            <FadeUp key={leader.name} className={styles.card}>
              {/* Large Portrait Photo Frame */}
              <div className={styles.portraitWrapper}>
                <Image
                  src={leader.image}
                  alt={leader.name}
                  fill
                  priority
                  quality={95}
                  className={styles.portraitImg}
                  style={leader.imagePosition ? { objectPosition: leader.imagePosition } : {}}
                />
                <div className={styles.portraitOverlay} />
                <span className={styles.badgeTag}>{leader.badge}</span>
              </div>

              {/* Card Meta Content */}
              <div className={styles.cardContent}>
                <div className={styles.nameRoleGroup}>
                  <h3 className={styles.name}>{leader.name}</h3>
                  <span className={styles.role}>{leader.role}</span>
                  {leader.role2 && <span className={styles.role2}>{leader.role2}</span>}
                </div>

                <p className={styles.shortDesc}>{leader.shortDesc}</p>

                <div className={styles.cardActionRow}>
                  <a href={`mailto:${leader.email}`} className={styles.emailBtn}>
                    <Mail size={14} />
                    <span>Contact</span>
                  </a>

                  <button
                    type="button"
                    className={styles.readBioBtn}
                    onClick={() => setActiveLeader(leader)}
                  >
                    <span>Read Bio</span>
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </FadeUp>
          ))}
        </StaggerContainer>
      </div>

      {/* Interactive Bio Modal Pop-Up */}
      {activeLeader && (
        <div className={styles.modalOverlay} onClick={() => setActiveLeader(null)}>
          <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.closeBtn}
              onClick={() => setActiveLeader(null)}
              aria-label="Close Bio Modal"
            >
              <X size={22} />
            </button>

            <div className={styles.modalBody}>
              <div className={styles.modalHeader}>
                <div className={styles.modalPortraitWrap}>
                  <Image
                    src={activeLeader.image}
                    alt={activeLeader.name}
                    fill
                    className={styles.modalPortraitImg}
                    style={activeLeader.imagePosition ? { objectPosition: activeLeader.imagePosition } : {}}
                  />
                </div>
                <div className={styles.modalHeaderMeta}>
                  <span className={styles.modalBadge}>{activeLeader.badge}</span>
                  <h3 className={styles.modalName}>{activeLeader.name}</h3>
                  <p className={styles.modalRole}>{activeLeader.role}</p>
                  {activeLeader.role2 && <p className={styles.modalRole2}>{activeLeader.role2}</p>}
                  <a href={`mailto:${activeLeader.email}`} className={styles.modalEmailLink}>
                    <Mail size={15} />
                    <span>{activeLeader.email}</span>
                  </a>
                </div>
              </div>

              <div className={styles.modalDivider} />

              <div className={styles.modalBioText}>
                <h4>Executive Bio & Professional Experience</h4>
                <p>{activeLeader.fullDesc}</p>
              </div>

              <button
                type="button"
                className={styles.modalFooterCloseBtn}
                onClick={() => setActiveLeader(null)}
              >
                <span>Close Bio</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
