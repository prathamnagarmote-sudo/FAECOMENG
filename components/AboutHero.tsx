'use client';
import { useRef, useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import styles from '@/app/about/page.module.css';

const slides = [
  {
    title1: "ENGINEERING",
    title2: "INNOVATION.",
    title3: "DELIVERING",
    title4: "EXCELLENCE.",
    subtitle: "At FAECOM, engineering is more than calculations—it's the foundation of visionary architecture. Through advanced structural design, BIM integration, and multidisciplinary collaboration, we deliver intelligent, sustainable solutions.",
    image: "/images/rich.png"
  }
];

export default function AboutHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Auto rotate every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  
  const leftSlideOnScroll = useTransform(scrollYProgress, [0, 0.5], [0, -150]);
  const rightSlideOnScroll = useTransform(scrollYProgress, [0, 0.5], [0, 150]);

  return (
    <section className={styles.aboutHeroNew} ref={ref}>
      <motion.div className={styles.aboutHeroNewContent} style={{ opacity }}>
        <motion.div className={styles.aboutHeroNewLeft} style={{ x: leftSlideOnScroll }}>
          <motion.div
            initial={{ opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
            animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <span className={styles.aboutHeroNewLabel}>
              <span className={styles.aboutHeroNewLabelLine} />
              ABOUT FAECOM INC.
            </span>
          </motion.div>

          <AnimatePresence mode="wait">
            <motion.div key={currentSlide}>
              <motion.h1 
                className={styles.aboutHeroNewTitle}
                initial={{ opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
                animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotateX: -10, rotateY: 10, y: 20 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
              >
                <span className={styles.textNavy}>{slides[currentSlide].title1}</span> <span className={styles.textOrange}>{slides[currentSlide].title2}</span><br/>
                <span className={styles.textNavy}>{slides[currentSlide].title3}</span> <span className={styles.textOrange}>{slides[currentSlide].title4}</span>
              </motion.h1>

              <motion.p 
                className={styles.aboutHeroNewSubtitle}
                initial={{ opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
                animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotateX: -10, rotateY: 10, y: 20 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
              >
                {slides[currentSlide].subtitle}
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
              fontSize: '1.05rem',
              maxWidth: '100%',
              lineHeight: '1.5'
            }}>
              "Empowering visionary architecture through precision engineering, cutting-edge BIM technology, and structural excellence."
            </div>
          </motion.div>
        </motion.div>

        <motion.div className={styles.aboutHeroNewRight} style={{ x: rightSlideOnScroll }}>
          <motion.div 
            className={styles.aboutHeroNewImageWrapper}
            style={{ y: y1, width: '100%', height: '100%', position: 'relative' }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
                animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
                exit={{ opacity: 0, scale: 1.05, rotateX: -10, rotateY: 10, y: 20 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                style={{ width: '100%', height: '100%', position: 'relative' }}
              >
                <Image 
                  src={slides[currentSlide].image}
                  alt="FAECOM 3D Engineering Model" 
                  fill 
                  style={{ objectFit: 'contain', objectPosition: 'center', transform: 'scale(1.15)' }} 
                  priority 
                  quality={90} 
                />
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
