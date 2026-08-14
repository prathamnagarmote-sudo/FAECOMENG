'use client';
import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Lightbulb, Users, Target } from 'lucide-react';
import styles from './AboutSection.module.css';

const VALUES = [
  {
    icon: ShieldCheck,
    title: 'Integrity',
    desc: 'We operate with honesty and transparency in everything we do.',
  },
  {
    icon: Lightbulb,
    title: 'Innovation',
    desc: 'We embrace new ideas and technologies to deliver better outcomes.',
  },
  {
    icon: Users,
    title: 'Collaboration',
    desc: 'We believe in teamwork and building strong partnerships.',
  },
  {
    icon: Target,
    title: 'Excellence',
    desc: 'We are committed to the highest standards in quality and performance.',
  },
];

interface AboutSectionProps {
  eyebrow?: string;
  titleLine1?: string;
  titleLine2?: string;
  titleLine3?: string;
  description?: React.ReactNode;
  isHero?: boolean;
}

export default function AboutSection({
  eyebrow = 'ABOUT FAECOM INC',
  titleLine1 = 'ENGINEERING',
  titleLine2 = 'SOLUTIONS.',
  titleLine3 = 'BUILDING TRUST.',
  description,
  isHero = false,
}: AboutSectionProps) {
  const defaultDescription = (
    <>
      At <strong>FAECOM INC</strong>, we turn ideas into strong, sustainable structures. With innovation, integrity, and expertise, we create solutions that empower communities and shape a better tomorrow.
    </>
  );

  return (
    <section className={`${styles.aboutSection} ${isHero ? styles.heroMode : ''}`} aria-label="About FAECOM INC">
      {/* Background blueprint decorative elements */}
      <div className={styles.bgBlueprintPattern} />
      <div className={styles.bgDotsTop} />
      <div className={styles.bgDotsBottom} />

      <div className={styles.aboutContainer}>
        {/* Top Split Layout: Text Content Left + Diagonal Building Cut Right */}
        <div className={styles.topSplit}>
          {/* Left Column: Text Header & Description */}
          <motion.div
            className={styles.leftCol}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Eyebrow Label */}
            <div className={styles.eyebrowWrap}>
              <span className={styles.eyebrowDash} />
              <span className={styles.eyebrowText}>{eyebrow}</span>
            </div>

            {/* Main 3-Line Heading */}
            <h1 className={styles.heading}>
              <span className={styles.titleNavy}>{titleLine1}</span>
              {titleLine2 && (
                <>
                  <br />
                  <span className={styles.titleOrange}>{titleLine2}</span>
                </>
              )}
              {titleLine3 && (
                <>
                  <br />
                  <span className={styles.titleNavy}>{titleLine3}</span>
                </>
              )}
            </h1>

            {/* Accent Line + Subtext */}
            <div className={styles.subtextWrap}>
              <span className={styles.subtextAccentLine} />
              <p className={styles.description}>
                {description || defaultDescription}
              </p>
            </div>
          </motion.div>

          {/* Right Column: Building Photo with Diagonal Cut & Polygon Overlay */}
          <motion.div
            className={styles.rightCol}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className={styles.imageFrame}>
              <Image
                src="/images/about_building.png"
                alt="FAECOM Commercial Building"
                fill
                quality={95}
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                style={{ objectFit: 'cover', objectPosition: 'center' }}
              />
              {/* Geometric Diagonal Blue Slice Overlay */}
              <div className={styles.polygonOverlay} />
            </div>
          </motion.div>
        </div>

        {/* Floating White Values Card Bar */}
        <motion.div
          className={styles.valuesCard}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        >
          {VALUES.map((val) => {
            const Icon = val.icon;
            return (
              <div key={val.title} className={styles.valueItem}>
                <div className={styles.iconCircle}>
                  <Icon size={24} strokeWidth={2} className={styles.iconSvg} />
                </div>
                <div className={styles.valueTextWrap}>
                  <h2 className={styles.valueTitle}>{val.title}</h2>
                  <p className={styles.valueDesc}>{val.desc}</p>
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
