import styles from './PageHero.module.css';
import Image from 'next/image';
import React from 'react';

export interface PageHeroProps {
  label: React.ReactNode;
  title: React.ReactNode;
  titleEm?: React.ReactNode;
  subtitle?: React.ReactNode;
  imageSrc?: string;
  imageScale?: number | string;
}

export default function PageHero({
  label,
  title,
  titleEm,
  subtitle,
  imageSrc,
  imageScale,
}: PageHeroProps) {
  return (
    <section className={styles.hero}>
      {imageSrc && (
        <div className={styles.heroImageWrapper}>
          <div className={styles.heroImageFade} />
          <Image
            src={imageSrc}
            alt="Hero Image"
            fill
            style={{
              objectFit: 'contain',
              objectPosition: 'right center',
              ...(imageScale && { transform: `scale(${imageScale})`, transformOrigin: 'right center' }),
            }}
            priority
          />
        </div>
      )}
      <div className={styles.wm} aria-hidden="true">
        {title}
      </div>
      <div className={styles.inner}>
        <span className="lbl" style={{ fontSize: 'clamp(14px, 1.5vw, 18px)', fontWeight: 'bold' }}>
          {label}
        </span>
        <h1 className={styles.h1}>
          {title}
          {titleEm && (
            <>
              <br />
              <em>{titleEm}</em>
            </>
          )}
        </h1>
        {subtitle && <div className={styles.sub}>{subtitle}</div>}
      </div>
      {/* Architectural corner marks */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />
    </section>
  );
}
