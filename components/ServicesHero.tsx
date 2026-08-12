'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import styles from '@/app/about/page.module.css'; // Reusing the layout styles from about page hero

export default function ServicesHero() {
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
        <Image src="/images/services_hero_bg.png" alt="Engineering Services" fill style={{ objectFit: 'cover', objectPosition: 'center' }} priority quality={90} />
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
          <span className={styles.aboutHeroLabel}>OUR EXPERTISE</span>
          <h1 className={styles.aboutHeroTitle}>
            Comprehensive <br />
            <em>Engineering Services.</em>
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
            End-to-end structural, BIM, MEP, and value engineering solutions built on 25+ years of international expertise. We deliver precision and efficiency for projects of any scale, translating your vision into constructible, cost-effective reality.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
