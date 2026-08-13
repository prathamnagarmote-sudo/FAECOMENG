'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styles from './projects.module.css';
import { supabase } from '@/lib/supabase';
import ALL_PROJECTS from '@/data/projects.json';

/* ── PROJECT DATA ────────────────────────────────────────────── */
const CATEGORIES = [
  'All Projects',
  'Light Gauge Steel',
  'Wood & Mass Timber',
  'Structural Steel',
  'MEP Engineering',
  'BIM Integrated 3D',
  'Architectural BIM',
  'Concrete Solutions',
];

/* ── CATEGORY COLOR MAP ──────────────────────────────────────── */
const CAT_COLORS: Record<string, string> = {
  'Light Gauge Steel': '#FF6A00',
  'Wood & Mass Timber': '#22C55E',
  'Structural Steel': '#3B82F6',
  'MEP Engineering': '#A855F7',
  'BIM Integrated 3D': '#06B6D4',
  'Architectural BIM': '#F59E0B',
  'Concrete Solutions': '#94A3B8',
};

/* ── STAT COUNTER ────────────────────────────────────────────── */
function StatItem({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className={styles.statItem}>
      <motion.span
        className={styles.statValue}
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      >
        {value}
      </motion.span>
      <span className={styles.statLabel}>{label}</span>
    </div>
  );
}

/* ── PROJECT CARD ────────────────────────────────────────────── */
function ProjectCard({ project, index }: { project: typeof ALL_PROJECTS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: '-60px' });

  const typeDesc = project.tag ? `${project.category} - ${project.tag}` : project.category;
  const areaDesc = project.area ? `Area: ${project.area}. ` : '';
  const storeysDesc = project.storeys ? `Storeys: ${project.storeys}.` : '';
  const desc = `A ${typeDesc} project located in ${project.location}. ${areaDesc}${storeysDesc}`;

  return (
    <motion.div
      ref={ref}
      className={styles.dynamicCard}
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: (index % 4) * 0.08 }}
    >
      <div className={styles.dynamicCardImgWrapper}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.name}
          className={styles.dynamicCardImg}
          loading="lazy"
        />
      </div>
      <div className={styles.dynamicCardContent}>
        <h4 className={styles.dynamicCardTitle}>{project.name}</h4>
        {project.category === 'Light Gauge Steel' || project.category === 'Wood & Mass Timber' || project.category === 'Structural Steel' || project.category === 'MEP Engineering' || project.category === 'BIM Integrated 3D' || project.category === 'Architectural BIM' || project.category === 'Concrete Solutions' ? (
          <div className={styles.dynamicCardDesc}>
            <div style={{ color: '#FF6A00', fontSize: '13px', fontWeight: '600', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              {project.category === 'Light Gauge Steel' ? 'LGS (Light Gauge Steel)' : project.category === 'Wood & Mass Timber' ? 'Wood & Mass Timber' : project.category === 'Structural Steel' ? 'Structural Steel Solutions' : project.category === 'MEP Engineering' ? 'MEP Engineering Solutions' : project.category === 'BIM Integrated 3D' ? 'BIM Integrated 3D Solutions' : project.category === 'Architectural BIM' ? 'Architectural BIM Services' : 'Concrete Solution Services'}
            </div>
            {project.area && <div>Area: {project.area}</div>}
            {project.tag && <div>Type: {project.tag}</div>}
            {project.storeys && <div>Storeys: {project.storeys}</div>}
          </div>
        ) : (
          <p className={styles.dynamicCardDesc}>{desc}</p>
        )}
      </div>
    </motion.div>
  );
}

/* ── PAGE ────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [projectList, setProjectList] = useState(ALL_PROJECTS);

  React.useEffect(() => {
    async function loadProjects() {
      try {
        const { data: dbProjects, error } = await supabase.from('projects').select('*').order('created_at', { ascending: false });
        if (!error && dbProjects && dbProjects.length > 0) {
          // Merge dbProjects with ALL_PROJECTS, preferring ALL_PROJECTS to keep Prachi's Cloudinary images intact
          const dbOnly = dbProjects.filter(dbP => !ALL_PROJECTS.some(p => p.id === dbP.id));
          const merged = [...ALL_PROJECTS, ...dbOnly];
          setProjectList(merged);
          localStorage.setItem('faecom_admin_projects', JSON.stringify(merged));
          return;
        }
        const saved = localStorage.getItem('faecom_admin_projects');
        if (saved) {
          const parsed = JSON.parse(saved);
          if (Array.isArray(parsed) && parsed.length > 0) {
            // Merge local storage with ALL_PROJECTS
            const savedOnly = parsed.filter(sP => !ALL_PROJECTS.some(p => p.id === sP.id));
            setProjectList([...ALL_PROJECTS, ...savedOnly]);
          }
        }
      } catch (e) {
        console.error(e);
      }
    }
    loadProjects();
  }, []);

  const filtered = activeCategory === 'All Projects'
    ? projectList
    : projectList.filter(p => p.category === activeCategory);

  return (
    <>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg}>
          <div className={styles.heroBgGlow1} />
          <div className={styles.heroBgGlow2} />
          <div className={styles.heroGrid} />
        </div>
        <div className={styles.heroInner}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.heroEyebrow}>
              <span className={styles.heroDash} />
              FAECOM PORTFOLIO
              <span className={styles.heroDash} />
            </div>
            <h1 className={styles.heroH1}>
              Engineering<br />
              <em className={styles.heroEm}>Excellence</em><br />
              Across the World.
            </h1>
            <p className={styles.heroSub}>
              300+ projects delivered across residential, commercial, healthcare, and industrial sectors spanning 5 continents.
            </p>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            className={styles.statsBar}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
          >
            <StatItem value="300+" label="Projects Delivered" />
            <div className={styles.statDivider} />
            <StatItem value="7" label="Disciplines" />
            <div className={styles.statDivider} />
            <StatItem value="5+" label="Continents" />
            <div className={styles.statDivider} />
            <StatItem value="25+" label="US States Licensed" />
            <div className={styles.statDivider} />
            <StatItem value="20+" label="Years Experience" />
          </motion.div>
        </div>
      </section>

      {/* ── FILTER BAR ── */}
      <section className={styles.filterSection}>
        <div className={styles.filterInner}>
          <div className={styles.filterLabel}>Filter by Discipline</div>
          <div className={styles.filterBar}>
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                className={`${styles.filterBtn} ${activeCategory === cat ? styles.filterActive : ''}`}
                onClick={() => setActiveCategory(cat)}
                style={activeCategory === cat && cat !== 'All Projects'
                  ? { borderColor: CAT_COLORS[cat], color: CAT_COLORS[cat], background: `${CAT_COLORS[cat]}15` }
                  : {}
                }
              >
                {cat !== 'All Projects' && (
                  <span
                    className={styles.filterDot}
                    style={{ background: CAT_COLORS[cat] ?? '#FF6A00' }}
                  />
                )}
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROJECT GRID ── */}
      <section className={styles.gridSection}>
        <div className={styles.gridInner}>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              className={styles.grid}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {filtered.map((project, i) => (
                <ProjectCard key={project.id} project={project} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className={styles.emptyState}>No projects found in this category.</div>
          )}

          <div className={styles.gridCount}>
            Showing <strong>{filtered.length}</strong> {filtered.length === 1 ? 'project' : 'projects'}
            {activeCategory !== 'All Projects' && ` in ${activeCategory}`}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaEyebrow}>Start Your Project</p>
          <h2 className={styles.ctaH2}>
            Ready to Build Something<br />
            <span className={styles.ctaOrange}>Extraordinary?</span>
          </h2>
          <p className={styles.ctaSub}>
            Connect with our licensed PE team and turn your vision into precision-engineered reality.
          </p>
          <Link href="/#contact" className={styles.ctaBtn}>
            Get In Touch
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
