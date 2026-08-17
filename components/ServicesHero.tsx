'use client';
import { useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useIsMobile } from '@/hooks/useIsMobile';
import styles from './ServicesHero.module.css';

export default function ServicesHero() {
  const ref = useRef(null);
  const isMobile = useIsMobile(900);
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const rawLeftSlideOnScroll = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const rawRightSlideOnScroll = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

  // On Mobile: Disable horizontal sliding to prevent overflow while keeping PC view 100% intact
  const leftSlideOnScroll = isMobile ? 0 : rawLeftSlideOnScroll;
  const rightSlideOnScroll = isMobile ? 0 : rawRightSlideOnScroll;

  return (
    <section className={styles.aboutHeroNew} ref={ref}>
      {/* Right-aligned image background (3D Parallax on PC, Inline mobile Hero Banner on Mobile) */}
      <motion.div 
        className={styles.servicesHeroImageWrapper}
        style={{ 
          position: isMobile ? 'relative' : 'absolute', 
          right: isMobile ? 0 : '2%', 
          top: isMobile ? 0 : '40px', 
          bottom: isMobile ? 0 : '40px',
          height: isMobile ? '240px' : 'auto', 
          width: isMobile ? '100%' : '55%', 
          zIndex: 0,
          x: rightSlideOnScroll,
          marginBottom: isMobile ? '24px' : 0,
          borderRadius: isMobile ? '14px' : 0,
          overflow: 'hidden',
        }}
      >
        <AnimatePresence mode="wait">
          <motion.div
            initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: isMobile ? 0.8 : 1.2, ease: [0.16, 1, 0.3, 1], delay: isMobile ? 0.2 : 0.5 }}
            style={{ width: '100%', height: '100%', position: 'relative', padding: isMobile ? 0 : '20px' }}
          >
            {/* Soft white feather/fade on the left edge for desktop */}
            {!isMobile && (
              <div style={{
                position: 'absolute',
                top: 0, left: 0, bottom: 0, width: '40%',
                background: 'linear-gradient(to right, #FFFFFF 0%, rgba(255,255,255,0) 100%)',
                zIndex: 1
              }} />
            )}

            <Image 
              src="https://res.cloudinary.com/yqs3dtap/image/upload/v1786950526/hero_page_service.png"
              alt="Engineering Services" 
              fill 
              style={{ objectFit: isMobile ? 'cover' : 'contain', objectPosition: 'right center' }} 
              priority 
              quality={100} 
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>

      <motion.div className={styles.aboutHeroNewContent} style={{ opacity, zIndex: 1, width: '100%' }}>
        <motion.div className={styles.aboutHeroNewLeft} style={{ x: leftSlideOnScroll }}>
          <motion.div
            initial={isMobile ? { opacity: 0, y: 15 } : { opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
            animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
            transition={{ duration: isMobile ? 0.7 : 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
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
                initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
                animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotateX: -10, rotateY: 10, y: 20 }}
                transition={{ duration: isMobile ? 0.8 : 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <span className={styles.textNavy}>COMPREHENSIVE</span> <span className={styles.textOrange}>ENGINEERING</span><br/>
                <span className={styles.textNavy}>SERVICES.</span> <span className={styles.textOrange}>SOLUTIONS.</span>
              </motion.h1>

              <motion.p 
                className={styles.aboutHeroNewSubtitle}
                initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
                animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotateX: -10, rotateY: 10, y: 20 }}
                transition={{ duration: isMobile ? 0.8 : 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                End-to-end structural, BIM, MEP, and value engineering solutions built on 25+ years of international expertise. We deliver precision and efficiency for projects of any scale, translating your vision into constructible, cost-effective reality.
              </motion.p>
            </motion.div>
          </AnimatePresence>

          <motion.div 
            className={styles.aboutHeroNewButtons}
            initial={isMobile ? { opacity: 0, y: 20 } : { opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
            animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
            transition={{ duration: isMobile ? 0.8 : 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          >
            <div className={styles.quoteBox}>
              &quot;Delivering precision and efficiency for projects of any scale, translating your vision into constructible, cost-effective reality.&quot;
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
