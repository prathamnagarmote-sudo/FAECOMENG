'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from '@/app/about/page.module.css';

export default function ServicesHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const leftSlideOnScroll = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const rightSlideOnScroll = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

  return (
    <section className={styles.aboutHeroNew} ref={ref}>
      {/* Absolute right-aligned image background */}
      <motion.div 
        className={styles.servicesHeroImageWrapper}
        style={{ 
          position: 'absolute', 
          right: '2%', 
          top: '40px', 
          bottom: '40px', 
          width: '55%', 
          zIndex: 0,
          x: rightSlideOnScroll
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
            style={{ width: '100%', height: '100%', position: 'relative', padding: '20px' }}
          >
            <Image 
              src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786950526/hero_page_service.png"
              alt="Engineering Services" 
              fill 
              style={{ objectFit: 'contain', objectPosition: 'right center' }} 
              priority 
              quality={100} 
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div className={styles.aboutHeroNewContent} style={{ opacity, zIndex: 1, width: '100%' }}>
        <motion.div className={styles.aboutHeroNewLeft} style={{ x: leftSlideOnScroll }}>
          <motion.div
            initial={{ opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
            animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className={styles.aboutHeroNewLabel}>
              <span className={styles.aboutHeroNewLabelLine} />
              OUR EXPERTISE
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div>
              <motion.h1 
                className={styles.aboutHeroNewTitle}
                initial={{ opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
                animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotateX: -10, rotateY: 10, y: 20 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                style={{ fontSize: 'clamp(50px, 6vw, 90px)' }}
              >
                <span className={styles.textNavy}>COMPREHENSIVE</span> <span className={styles.textOrange}>ENGINEERING</span><br/>
                <span className={styles.textNavy}>SERVICES.</span> <span className={styles.textOrange}>SOLUTIONS.</span>
              </motion.h1>

              <motion.p 
                className={styles.aboutHeroNewSubtitle}
                initial={{ opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
                animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotateX: -10, rotateY: 10, y: 20 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                style={{ fontSize: 'clamp(18px, 1.8vw, 22px)' }}
              >
                End-to-end structural, BIM, MEP, and value engineering solutions built on 25+ years of international expertise. We deliver precision and efficiency for projects of any scale, translating your vision into constructible, cost-effective reality.
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className={styles.aboutHeroNewButtons}
            initial={{ opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
            animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div style={{ 
              padding: '1rem 1.5rem', 
              backgroundColor: 'rgba(0, 31, 63, 0.04)', 
              borderLeft: '4px solid #FF5722',
              color: '#001f3f',
              fontWeight: 600,
              fontSize: '1.2rem',
              maxWidth: '100%',
              lineHeight: '1.5'
            }}>
              "Delivering precision and efficiency for projects of any scale, translating your vision into constructible, cost-effective reality."
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
