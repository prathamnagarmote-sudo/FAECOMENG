'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Mail, X, ArrowRight, Award, ShieldCheck } from 'lucide-react';
import { StaggerContainer, FadeUp } from './Animations';
import styles from './MeetOurTeamSection.module.css';

interface MeetOurTeamSectionProps {
  showAboutCta?: boolean;
}

const LEADERS = [
  {
    name: 'Harvey',
    image: '/images/harvey_new.jpg',
    role: 'Chief Executive Officer',
    role2: 'Principal Structural Engineer, Ph.D., P.E.',
    badge: '20+ YRS EXP // Ph.D. P.E.',
    email: 'harvey@faecom.com',
    shortDesc: 'Structural Engineer with Ph.D. & P.E. licenses across multiple U.S. states with 20+ years experience in structural design, ICF, steel, concrete, podium, and timber systems.',
    fullDesc: `Harvey is a highly accomplished Structural Engineer with a Ph.D. in Structural Engineering and over 20 years of professional experience in the design, analysis, and execution of structural systems across a wide range of construction projects. He is a registered Professional Engineer (P.E.) in multiple states across the United States, demonstrating his commitment to the highest standards of engineering practice and professional excellence.

Throughout his career, Harvey has successfully delivered numerous residential, commercial, industrial, and mixed-use projects, providing innovative, practical, and code-compliant structural solutions tailored to each client's unique requirements. His extensive expertise spans multiple construction systems, including Insulated Concrete Forms (ICF), structural steel, reinforced concrete, podium structures, and wood-framed buildings.

Harvey is recognized for his deep technical knowledge, meticulous attention to detail, and ability to develop efficient structural designs that optimize safety, constructability, and cost-effectiveness. He has worked closely with architects, developers, contractors, and multidisciplinary engineering teams to ensure seamless project delivery from concept through construction.

With a strong commitment to engineering excellence, quality, and client satisfaction, Harvey continues to provide reliable structural engineering solutions that meet modern building standards while addressing the challenges of complex and demanding projects.`,
  },
  {
    name: 'Pratik',
    image: '/images/pratik_new.png',
    role: 'Chief Production Officer',
    role2: 'Structural & BIM Systems Lead',
    badge: 'CPO // ETABS, SAFE & REVIT LEAD',
    email: 'pratik@faecom.com',
    shortDesc: 'Director of Structural Engineering delivering code-compliant solutions across high-seismic/wind regions, post-tensioned slabs, CFS/LGS detailing, & Revit BIM workflows.',
    fullDesc: `As Director of Structural Engineering, I bring extensive experience in delivering innovative, practical, and code-compliant structural solutions across a wide range of residential, commercial, industrial, and institutional projects. My expertise spans reinforced concrete, post-tensioned concrete, structural steel, timber, insulated concrete form (ICF), cold-formed steel (CFS), composite, and light-gauge steel construction systems.

With a strong technical foundation and a results-driven approach, I have successfully led engineering teams in designing structures for high seismic and high wind regions while ensuring compliance with international standards, including ACI, ASCE, NDS, and IS codes. My experience covers the complete project lifecycle—from concept design and structural analysis to construction support, responding to RFIs, and close coordination with architects, contractors, and clients.

Driven by a commitment to engineering excellence and efficiency, I specialize in advanced structural modeling using ETABS, SAFE, SAP2000, and RISA 3D, seamlessly integrated with Revit BIM workflows. I am passionate about optimizing structural design for constructability, safety, and economy while delivering high-quality engineering services tailored to client requirements.`,
  },
  {
    name: 'Sam',
    image: '/images/pravin_new.png',
    imagePosition: 'center 85%',
    role: 'Director, Head of Engineering',
    role2: 'M.S. Structural, Ph.D. Candidate (CFS)',
    badge: 'TECHNICAL DIRECTOR // 17+ YRS',
    email: 'sam@faecom.com',
    shortDesc: "Technical Director with M.S. Structural & Ph.D. Candidate (CFS) with 17+ years leading structural design across 4 continents (US, Canada, UK, Dubai).",
    fullDesc: `Sam holds a Master's degree in Structural Engineering and is currently pursuing his Ph.D. in Cold-Formed Steel Structure Construction — academic rigor backed by 17+ years delivering structural solutions across four continents. As Technical Director, he's the partner builders and developers trust when projects demand precision, speed, and cost-smart engineering.

Specializing in light gauge steel, ICF, lumber, hot rolled steel, and mixed structural systems, Sam has led design teams through millions of square feet of residential and commercial developments across the United States, Canada, the UK, and Dubai — with hands-on international coordination that means fewer surprises and tighter timelines.

An expert in FrameCAD, Scottsdale, Vertex, MWF, Tekla, and STAAD Pro, Sam also mentors the next generation of engineers, ensuring every project benefits from best-in-class practices. For developers seeking a technical partner who delivers, Sam brings the credentials, experience, and dependability to get it done right.`,
  },
  {
    name: 'Max',
    image: '/images/max_new.jpg',
    role: 'Chief Marketing Officer',
    role2: 'AEC Strategic Partnerships Lead',
    badge: 'CMO // 19+ YRS AEC GROWTH',
    email: 'max@faecom.com',
    shortDesc: 'Chief Marketing Officer with 19+ years driving AEC strategic growth, key account partnerships, and global ICF manufacturer relationships.',
    fullDesc: `Max Langley is the Chief Marketing Officer, bringing over 19 years of experience to FAECOM driving strategic growth across the Architecture, Engineering, and Construction (AEC) industry. He leads brand strategy, business development, and key account partnerships with leading architects, engineers, fabricators, and global ICF manufacturers. By combining market intelligence with customer-focused strategies, Max strengthens industry relationships, expands market presence, and delivers sustainable business growth.`,
  }
];

export default function MeetOurTeamSection({ showAboutCta = false }: MeetOurTeamSectionProps) {
  const [activeLeader, setActiveLeader] = useState<typeof LEADERS[0] | null>(null);

  // Prevent background page scrolling when bio modal is open
  useEffect(() => {
    if (activeLeader) {
      document.body.style.overflow = 'hidden';
      document.body.style.height = '100vh';
      document.documentElement.style.overflow = 'hidden';
      document.documentElement.style.height = '100vh';
    } else {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.height = '';
      document.documentElement.style.overflow = '';
      document.documentElement.style.height = '';
    };
  }, [activeLeader]);

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

        {/* Optional About Us CTA */}
        {showAboutCta && (
          <FadeUp className={styles.aboutCtaRow}>
            <Link
              href="/about"
              scroll={true}
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({ top: 0, behavior: 'instant' });
                }
              }}
              className={styles.aboutCtaBtn}
            >
              <span>LEARN MORE ABOUT OUR COMPANY &amp; METHODOLOGY</span>
              <ArrowRight size={18} strokeWidth={2.2} />
            </Link>
          </FadeUp>
        )}
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

            {/* Scrollable body — only this area scrolls */}
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

              <div className={styles.modalBioText} data-lenis-prevent>
                <h4>Executive Bio &amp; Professional Experience</h4>
                <p style={{ whiteSpace: 'pre-wrap' }}>{activeLeader.fullDesc}</p>
              </div>
            </div>

            {/* Fixed footer — stays at bottom, never scrolls away */}
            <div className={styles.modalFooter}>
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
