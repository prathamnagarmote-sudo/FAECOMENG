'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '@/app/about/page.module.css';

export default function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const leftX = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);
  const rightX = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);

  return (
    <section className={styles.aboutHero} ref={ref}>
      <motion.div 
        className={styles.aboutHeroBg}
        style={{ y: bgY }}
        initial={{ scale: 1.15, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <Image src="/images/about_hero_shared.jpg" alt="About FAECOM" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority quality={90} />
        <div className={styles.aboutHeroOverlay} />
      </motion.div>
      
      <motion.div className={styles.aboutHeroContentSplit} style={{ opacity }}>
        <motion.div 
          className={styles.aboutHeroLeft} 
          style={{ x: leftX }}
          initial={{ x: -80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className={styles.aboutHeroLabel}>INNOVATION • PRECISION • PERFORMANCE</span>
          <h1 className={styles.aboutHeroTitle}>
            Designing the Future. <br />
            <em>Engineering the Impossible.</em>
          </h1>
        </motion.div>
        
        <motion.div 
          className={styles.aboutHeroRight} 
          style={{ x: rightX }}
          initial={{ x: 80, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className={styles.aboutHeroSubtitle}>
            At FAECOM, engineering is more than calculations—it's the foundation of visionary architecture. Through advanced structural design, BIM integration, Light Gauge Steel, ICF, Timber, and multidisciplinary collaboration, we deliver intelligent, sustainable, and high-performance solutions that transform ambitious concepts into enduring landmarks.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
