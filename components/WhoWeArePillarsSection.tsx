'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import styles from './WhoWeArePillarsSection.module.css';

export default function WhoWeArePillarsSection() {
  return (
    <section className={styles.whoSection} aria-label="Who We Are">
      {/* Background Ambient Glow & Grid Accent */}
      <div className={styles.ambientGlow} />
      <div className={styles.subtleGridPattern} />

      <div className={styles.whoContainer}>
        {/* Left Column: Animated Who We Are Editorial */}
        <motion.div
          className={styles.whoLeftCol}
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          {/* Eyebrow Label */}
          <div className={styles.eyebrowBadge}>
            <span className={styles.eyebrowDot} />
            <span>FOUNDATION OF ENGINEERING EXCELLENCE</span>
          </div>

          <div className={styles.whoTitleGroup}>
            <h2 className={styles.whoTitle}>WHO WE ARE</h2>
            <motion.span
              className={styles.whoTitleLine}
              initial={{ scaleX: 0, originX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            />
          </div>

          <p className={styles.whoParagraph}>
            <strong>FAECOM</strong> is a multidisciplinary engineering firm providing reliable and cost-effective Insulated Concrete Form (ICF) solutions, Structural, Architectural, MEP, and BIM Design, along with Structural Drawings, Design Calculations, Engineering Review & Stamp, and Detailing. We help Architects, Contractors, Fabricators, Developers, and Owners successfully deliver projects through practical, code-compliant, and efficient engineering.
          </p>

          <p className={styles.whoParagraphSecondary}>
            With extensive experience across Retail Spaces, Hotels, Mixed-use Developments, Multifamily Residential, Commercial Offices, Senior Living Apartments, and Industrial Projects, FAECOM delivers high-quality engineering and detailing services that help clients achieve their goals while maximizing project value. Our client-focused approach transforms plans into successful projects.
          </p>

          {/* Key Bullet Checklist Highlights */}
          <div className={styles.bulletList}>
            <div className={styles.bulletItem}>
              <CheckCircle2 size={16} className={styles.bulletIcon} />
              <span>Full In-House PE & SE Engineering Stamp</span>
            </div>
            <div className={styles.bulletItem}>
              <CheckCircle2 size={16} className={styles.bulletIcon} />
              <span>Collision-Free 3D BIM Coordination</span>
            </div>
          </div>
        </motion.div>

        {/* Center Animated Vertical Divider Line */}
        <motion.div
          className={styles.centerDivider}
          initial={{ scaleY: 0, originY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeInOut' }}
          aria-hidden
        />

        {/* Right Column: High-Res Who We Are Infographic Image */}
        <motion.div
          className={styles.whoRightCol}
          initial={{ opacity: 0, x: 50, scale: 0.95 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className={styles.imageFrameWrapper}>
            <Image
              src="/images/worktogetherpng.png"
              alt="FAECOM Multidisciplinary Engineering & Global Capabilities"
              width={720}
              height={520}
              priority
              quality={98}
              className={styles.whoRightImg}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
