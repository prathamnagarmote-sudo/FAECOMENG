'use client';
import React, { useState, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import styles from './projects.module.css';

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

export const ALL_PROJECTS = [
  /* ── LIGHT GAUGE STEEL ── */
  {
    id: 'tm-heights',
    name: 'TM Heights',
    location: 'USA',
    category: 'Light Gauge Steel',
    tag: 'Residential Apartment',
    area: '100,000 sq. ft.',
    storeys: '6 Floors',
    image: '/images/project_tm_heights.png',
    featured: true,
  },
  {
    id: 'nelson-care',
    name: 'Nelson Senior Care Center',
    location: 'USA',
    category: 'Light Gauge Steel',
    tag: 'Senior Home Care Unit Center',
    area: '220,000 sq. ft.',
    storeys: '5 Floors',
    image: '/images/project_nelson_care.png',
    featured: true,
  },
  {
    id: 'khan-house',
    name: 'Khan House',
    location: 'Canada',
    category: 'Light Gauge Steel',
    tag: 'Residential House',
    area: '5,000 sq. ft.',
    storeys: 'G+1 Floor',
    image: '/images/project_khan_house.png',
    featured: false,
  },
  {
    id: 'chessnut',
    name: 'Chessnut Residence',
    location: 'USA',
    category: 'Light Gauge Steel',
    tag: 'Affordable Housing',
    area: '3,000 sq. ft.',
    storeys: '1 Floor',
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'fellowship-children',
    name: 'Fellowship / Children Building',
    location: 'USA',
    category: 'Light Gauge Steel',
    tag: 'Religious Structure',
    area: '11,760 sq. ft.',
    storeys: 'G+1',
    image: '/images/project_children_bldg.png',
    featured: false,
  },
  {
    id: 'wheel-house',
    name: 'Wheel House',
    location: 'USA',
    category: 'Light Gauge Steel',
    tag: 'ADU Unit',
    area: '810 sq. ft.',
    storeys: '1 Floor',
    image: '/images/project_wheel_house.png',
    featured: false,
  },
  {
    id: 'retail-crain-hwy',
    name: 'Retail Building 810 Crain Highway Gambrills',
    location: 'MD 21054, USA',
    category: 'Light Gauge Steel',
    tag: 'Retail Building',
    area: '11,760 sq. ft.',
    storeys: '1 Floor',
    image: '/images/project_commercial.png',
    featured: false,
  },
  {
    id: 'new-addition-jcc',
    name: 'New Addition JCC',
    location: 'USA',
    category: 'Light Gauge Steel',
    tag: 'Religious Structure',
    area: '13,898 sq. ft.',
    storeys: '1 Floor',
    image: '/images/project_commercial.png',
    featured: false,
  },

  /* ── WOOD & MASS TIMBER ── */
  {
    id: 'elm-st-unit',
    name: 'Elm St Unit',
    location: 'Manchester, New Hampshire, USA',
    category: 'Wood & Mass Timber',
    tag: 'Residential Complex',
    area: '22,492 sq. ft.',
    storeys: null,
    image: '/images/project_elm_st.png',
    featured: true,
  },
  {
    id: 'theodore-cabin',
    name: 'Theodore Cabin',
    location: '1590 E Mirror Dr Duck Creek, UT 84762, USA',
    category: 'Wood & Mass Timber',
    tag: 'Residential Cabin',
    area: '3,689 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'widdison-family-cabin',
    name: 'Widdison Family Cabin',
    location: '1075 E Empty Saddle Rd Duck Creek Village, UT 84782, USA',
    category: 'Wood & Mass Timber',
    tag: 'Residential Cabin',
    area: null,
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'tipsy-moose',
    name: 'Tipsy Moose',
    location: 'Lot 24, 1075 N Valley Hills Blvd, Heber City, UT 84032, USA',
    category: 'Wood & Mass Timber',
    tag: 'Residential Villa',
    area: '2,322 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'cottage-unit-bahamas',
    name: 'Cottage Unit',
    location: 'Little Exuma, The Commonwealth of Bahamas',
    category: 'Wood & Mass Timber',
    tag: 'Residential Villa',
    area: '734.38 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'mm-residence-nc',
    name: 'M & M Residence',
    location: 'North Carolina, USA',
    category: 'Wood & Mass Timber',
    tag: 'Residential Villa',
    area: '10,000 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'sugar-villa-bahamas',
    name: 'Sugar Villa',
    location: 'Little Exuma, The Commonwealth of Bahamas',
    category: 'Wood & Mass Timber',
    tag: 'Residential Villa',
    area: '13,808.80 sq. ft.',
    storeys: null,
    image: '/images/project_sugar_villa.png',
    featured: false,
  },
  {
    id: 'beach-bar-bahamas',
    name: 'Beach Bar',
    location: 'Little Exuma, The Commonwealth of Bahamas',
    category: 'Wood & Mass Timber',
    tag: 'Commercial',
    area: null,
    storeys: null,
    image: '/images/project_commercial.png',
    featured: false,
  },

  /* ── STRUCTURAL STEEL ── */
  {
    id: 'emmons-bay-hotel',
    name: 'Emmons Bay Hotel 2902 Emmons Avenue',
    location: 'Brooklyn, NY, USA',
    category: 'Structural Steel',
    tag: 'Commercial Project',
    area: '11,235 sq. ft.',
    storeys: null,
    image: '/images/project_commercial.png',
    featured: true,
  },
  {
    id: 'ascend-towers',
    name: 'Ascend Towers',
    location: 'New York, USA',
    category: 'Structural Steel',
    tag: 'Industrial Project',
    area: null,
    storeys: null,
    image: '/images/project_commercial.png',
    featured: false,
  },
  {
    id: 'skid-project-1',
    name: 'Skid Project',
    location: 'USA',
    category: 'Structural Steel',
    tag: 'Industrial Project',
    area: null,
    storeys: null,
    image: '/images/project_industrial.png',
    featured: false,
  },
  {
    id: 'skid-project-2',
    name: 'Skid Project',
    location: 'USA',
    category: 'Structural Steel',
    tag: 'Industrial Project',
    area: null,
    storeys: null,
    image: '/images/project_industrial.png',
    featured: false,
  },
  {
    id: 'skid-project-3',
    name: 'Skid Project',
    location: 'USA',
    category: 'Structural Steel',
    tag: 'Industrial Project',
    area: null,
    storeys: null,
    image: '/images/project_industrial.png',
    featured: false,
  },
  {
    id: 'charter-school-bronx',
    name: 'Charter School',
    location: '200 West Tremont, Bronx, NY, USA',
    category: 'Structural Steel',
    tag: 'Charter School For Law And Social Justice',
    area: '10,453 sq. ft.',
    storeys: null,
    image: '/images/project_commercial.png',
    featured: false,
  },
  {
    id: 'highbridge',
    name: 'Highbridge',
    location: '1387 University Avenue, Bronx, USA',
    category: 'Structural Steel',
    tag: 'Commercial Project',
    area: null,
    storeys: null,
    image: '/images/project_commercial.png',
    featured: false,
  },
  {
    id: 'junction-boulevard',
    name: 'Junction Boulevard',
    location: 'Queens, 292 Madison Ave, New York, NY 10017, USA',
    category: 'Structural Steel',
    tag: 'Commercial Project',
    area: null,
    storeys: null,
    image: '/images/project_commercial.png',
    featured: false,
  },
  {
    id: 'glenmark',
    name: 'Glenmark',
    location: 'USA',
    category: 'Structural Steel',
    tag: 'Industrial Project',
    area: null,
    storeys: null,
    image: '/images/project_industrial.png',
    featured: false,
  },

  /* ── MEP ENGINEERING ── */
  {
    id: 'fellowship-church-mep',
    name: 'Fellowship Church',
    location: '2714 Goat Creek Road, Kerrville, Texas, USA',
    category: 'MEP Engineering',
    tag: 'Cross Kingdom Church',
    area: '11,760 sq. ft.',
    storeys: null,
    image: '/images/project_children_bldg.png',
    featured: true,
  },
  {
    id: 'children-building-mep',
    name: 'Children Building',
    location: '2714 Goat Creek Road, Kerrville, Texas, USA',
    category: 'MEP Engineering',
    tag: 'Cross Kingdom Church',
    area: '8,925 sq. ft.',
    storeys: null,
    image: '/images/project_children_bldg.png',
    featured: false,
  },
  {
    id: 'camile-carpenter-res',
    name: 'Camile–Carpenter Residence',
    location: '204 Louisiana Dr, Mexico Beach, FL 32456, USA',
    category: 'MEP Engineering',
    tag: 'New Construction',
    area: null,
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'matthew-campbell-res',
    name: 'Matthew–Campbell Residence',
    location: '12 Bayshore Pines Court, Miramar Beach, FL 32550, USA',
    category: 'MEP Engineering',
    tag: 'Residential',
    area: '8,761.92 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'drescher-drescher-mep',
    name: 'Drescher–Drescher Residence',
    location: '42 Oceanside Drive, Palm Coast, FL 32137, USA',
    category: 'MEP Engineering',
    tag: 'Residential Villa',
    area: '7,671.75 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'nelson-care-mep',
    name: 'Nelson Care Unit',
    location: 'USA',
    category: 'MEP Engineering',
    tag: 'Senior Home Care Unit Center',
    area: '220,000 sq. ft.',
    storeys: '5 Floors',
    image: '/images/project_nelson_care.png',
    featured: false,
  },

  /* ── BIM INTEGRATED 3D ── */
  {
    id: 'elm-st-bim',
    name: 'Elm St Unit',
    location: 'Manchester, New Hampshire, USA',
    category: 'BIM Integrated 3D',
    tag: 'Residential Complex',
    area: '22,492 sq. ft.',
    storeys: null,
    image: '/images/project_elm_st.png',
    featured: true,
  },
  {
    id: 'little-home-nc',
    name: 'Little Home',
    location: 'North Carolina, USA',
    category: 'BIM Integrated 3D',
    tag: 'Residential Villa',
    area: '1,500 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'nelson-care-bim',
    name: 'Nelson Care Unit',
    location: 'USA',
    category: 'BIM Integrated 3D',
    tag: 'Senior Home Care Unit Center',
    area: '220,000 sq. ft.',
    storeys: '5 Floors',
    image: '/images/project_nelson_care.png',
    featured: false,
  },
  {
    id: 'sugar-villa-bim',
    name: 'Sugar Villa',
    location: 'Little Exuma, The Commonwealth of Bahamas',
    category: 'BIM Integrated 3D',
    tag: 'Residential Villa',
    area: '13,808.82 sq. ft.',
    storeys: null,
    image: '/images/project_sugar_villa.png',
    featured: false,
  },
  {
    id: 'cottage-unit-bim',
    name: 'Cottage Unit',
    location: 'Little Exuma, The Commonwealth of Bahamas',
    category: 'BIM Integrated 3D',
    tag: 'Residential Villa',
    area: '734.38 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'widdison-cabin-bim',
    name: 'Widdison Family Cabin',
    location: '1075 E Empty Saddle Rd Duck Creek Village, UT 84762, USA',
    category: 'BIM Integrated 3D',
    tag: 'Residential Cabin',
    area: null,
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'mm-residence-bim',
    name: 'M & M Residence',
    location: 'North Carolina, USA',
    category: 'BIM Integrated 3D',
    tag: 'Residential Villa',
    area: '10,000 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'ruiz-residence-bim',
    name: 'Ruiz Residence',
    location: 'USA',
    category: 'BIM Integrated 3D',
    tag: 'Residential Villa',
    area: '8,000 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },

  /* ── ARCHITECTURAL BIM ── */
  {
    id: 'joacim-miami',
    name: 'Joacim | 17820 SW 104 Ave',
    location: 'Miami, USA',
    category: 'Architectural BIM',
    tag: 'Multifamily Apartment',
    area: '17,884 sq. ft.',
    storeys: '11 Units',
    image: '/images/project_commercial.png',
    featured: true,
  },
  {
    id: 'drescher-arch-bim',
    name: 'Drescher–Drescher Residence',
    location: '42 Oceanside Drive, Palm Coast, FL 32137, USA',
    category: 'Architectural BIM',
    tag: 'Residential Villa',
    area: '7,671.75 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'fellowship-church-arch',
    name: 'Fellowship Church',
    location: '2714 Goat Creek Road, Kerrville, Texas, USA',
    category: 'Architectural BIM',
    tag: 'Cross Kingdom Church',
    area: '11,760 sq. ft.',
    storeys: null,
    image: '/images/project_children_bldg.png',
    featured: false,
  },
  {
    id: 'children-bldg-lvl1',
    name: 'Children Building Level 1',
    location: '2714 Goat Creek Road, Kerrville, Texas, USA',
    category: 'Architectural BIM',
    tag: 'Cross Kingdom Church',
    area: '8,925 sq. ft.',
    storeys: null,
    image: '/images/project_children_bldg.png',
    featured: false,
  },
  {
    id: 'children-bldg-lvl2',
    name: 'Children Building Level 2',
    location: '2714 Goat Creek Road, Kerrville, Texas, USA',
    category: 'Architectural BIM',
    tag: 'Cross Kingdom Church',
    area: '8,925 sq. ft.',
    storeys: null,
    image: '/images/project_children_bldg.png',
    featured: false,
  },
  {
    id: 'angel-ruiz-miami',
    name: 'Angel Ruiz',
    location: '5849 sq. ft. Avenue, Miami, Florida 33127, USA',
    category: 'Architectural BIM',
    tag: 'Residential',
    area: '5,849 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'campbell-walton',
    name: 'Campbell Residence',
    location: '12 Bayshore Pines Court, Miramar Beach, FL, USA',
    category: 'Architectural BIM',
    tag: 'Residential',
    area: '8,761.92 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },
  {
    id: 'carpenter-residence',
    name: 'Carpenter Residence',
    location: '200 Lillian Hwy, Pensacola, Florida 32516, USA',
    category: 'Architectural BIM',
    tag: 'Residential',
    area: '8,761.92 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: false,
  },

  /* ── CONCRETE SOLUTIONS ── */
  {
    id: 'ruiz-residence-concrete',
    name: 'Ruiz Residence',
    location: 'USA',
    category: 'Concrete Solutions',
    tag: 'Residential Villa',
    area: '8,000 sq. ft.',
    storeys: null,
    image: '/images/project_residential.png',
    featured: true,
  },
  {
    id: '5th-ave-ny',
    name: '5th Avenue New York',
    location: 'New York, NY 10011, USA',
    category: 'Concrete Solutions',
    tag: 'Residential Villa',
    area: '8,000 sq. ft.',
    storeys: null,
    image: '/images/project_commercial.png',
    featured: false,
  },
  {
    id: '225th-st-ny',
    name: '225th Street',
    location: 'New York, NY 10463, USA',
    category: 'Concrete Solutions',
    tag: 'Mixed-use: Residential & Commercial',
    area: null,
    storeys: null,
    image: '/images/project_commercial.png',
    featured: false,
  },
  {
    id: 'utphin-blvd-jamaica',
    name: 'Utphin Boulevard',
    location: 'Jamaica, NY 11435, USA',
    category: 'Concrete Solutions',
    tag: 'Mixed-use: Residential & Commercial',
    area: null,
    storeys: null,
    image: '/images/project_commercial.png',
    featured: false,
  },
  {
    id: 'grand-concourse-bronx',
    name: 'Grand Concourse',
    location: 'Bronx, USA',
    category: 'Concrete Solutions',
    tag: 'Mixed-use: Residential & Commercial',
    area: null,
    storeys: null,
    image: '/images/project_commercial.png',
    featured: false,
  },
  {
    id: 'junction-blvd-queens',
    name: 'Junction Blvd, Queens',
    location: 'Queens, New York, USA',
    category: 'Concrete Solutions',
    tag: 'Mixed-use: Residential & Commercial',
    area: null,
    storeys: null,
    image: '/images/project_commercial.png',
    featured: false,
  },
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
  const color = CAT_COLORS[project.category] ?? '#FF6A00';

  return (
    <motion.div
      ref={ref}
      className={styles.card}
      initial={{ opacity: 0, y: 50, scale: 0.96 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1], delay: (index % 4) * 0.08 }}
      whileHover={{ y: -6, transition: { duration: 0.3 } }}
    >
      <div className={styles.cardImgWrap}>
        <Image
          src={project.image}
          alt={project.name}
          fill
          className={styles.cardImg}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
        />
        {/* Overlay */}
        <div className={styles.cardOverlay} />
        {/* Category badge */}
        <div className={styles.cardBadge} style={{ background: color }}>
          {project.category}
        </div>
        {/* Featured star */}
        {project.featured && (
          <div className={styles.featuredPip}>
            <svg viewBox="0 0 16 16" fill="#FF6A00" width="10" height="10">
              <path d="M8 0l2 6h6l-5 3.5 2 6L8 12l-5 3.5 2-6L0 6h6z" />
            </svg>
            Featured
          </div>
        )}
        {/* Hover reveal */}
        <div className={styles.cardHoverPanel}>
          <div className={styles.cardMeta}>
            {project.area && (
              <div className={styles.metaRow}>
                <span className={styles.metaLbl}>Area</span>
                <span className={styles.metaVal}>{project.area}</span>
              </div>
            )}
            {project.storeys && (
              <div className={styles.metaRow}>
                <span className={styles.metaLbl}>Storeys</span>
                <span className={styles.metaVal}>{project.storeys}</span>
              </div>
            )}
            {project.tag && (
              <div className={styles.metaRow}>
                <span className={styles.metaLbl}>Type</span>
                <span className={styles.metaVal}>{project.tag}</span>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className={styles.cardBody}>
        <div className={styles.cardAccent} style={{ background: color }} />
        <h3 className={styles.cardName}>{project.name}</h3>
        <div className={styles.cardLocation}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="12" height="12">
            <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" />
          </svg>
          <span>{project.location}</span>
        </div>
      </div>
    </motion.div>
  );
}

/* ── PAGE ────────────────────────────────────────────────────── */
export default function ProjectsPage() {
  const [activeCategory, setActiveCategory] = useState('All Projects');
  const [projectList, setProjectList] = useState(ALL_PROJECTS);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem('faecom_admin_projects');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setProjectList(parsed);
        }
      }
    } catch (e) {
      console.error(e);
    }
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
