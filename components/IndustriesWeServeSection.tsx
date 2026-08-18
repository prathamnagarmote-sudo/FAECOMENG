'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import styles from './IndustriesWeServeSection.module.css';

const INDUSTRIES = [
  {
    num: '01',
    title: 'Residential',
    sub: 'Homes • Villas • Apartments',
    img: '/images/industry_editorial_residential.png',
    isFeature: true,
  },
  {
    num: '02',
    title: 'Commercial',
    sub: 'Offices • Retail • Commercial Buildings',
    img: '/images/industry_editorial_commercial.png',
    isFeature: false,
  },
  {
    num: '03',
    title: 'Mixed-Use',
    sub: 'Integrated Developments • Complex Buildings',
    img: '/images/industry_editorial_mixeduse.png',
    isFeature: false,
  },
  {
    num: '04',
    title: 'Hospitality',
    sub: 'Hotels • Resorts • Hospitality Spaces',
    img: '/images/industry_editorial_hospitality.png',
    isFeature: false,
  },
  {
    num: '05',
    title: 'Industrial',
    sub: 'Factories • Warehouses • Industrial Facilities',
    img: '/images/industry_editorial_industrial.png',
    isFeature: true,
  },
  {
    num: '06',
    title: 'Institutional',
    sub: 'Education • Healthcare • Public Buildings',
    img: '/images/industry_editorial_institutional.png',
    isFeature: false,
  },
];

export default function IndustriesWeServeSection() {
  const row1 = INDUSTRIES.slice(0, 3);
  const row2 = INDUSTRIES.slice(3, 6);

  return (
    <section className={styles.section} aria-label="Industries We Serve">
      {/* Architectural Rough Work Sketches Background Overlay Layer */}
      <div className={styles.roughSketchesBgLayer} aria-hidden>
        <Image
          src="/images/architectural_rough_sketches_bg.png"
          alt="Architectural Sketches Background"
          fill
          quality={85}
          style={{ objectFit: 'cover' }}
        />
      </div>

      <div className={styles.blueprintLineworkTopRight} aria-hidden />
      <div className={styles.blueprintLineworkBottomLeft} aria-hidden />

      <div className={styles.container}>
        
        {/* Editorial Section Heading */}
        <div className={styles.header}>
          <div className={styles.headerTopMeta}>
            <div className={styles.eyebrow}>
              <span className={styles.eyebrowDash} />
              <span>OUR INDUSTRIES</span>
            </div>
            <div className={styles.cadRefTag}>
              <span>FAECOM INDUSTRIES</span>
            </div>
          </div>

          <h2 className={styles.mainTitle}>Industries We Serve.</h2>
          <p className={styles.italicSubline}>Engineered for Every Environment.</p>

          <p className={styles.supportingDesc}>
            From residential developments to complex industrial facilities, we deliver integrated engineering solutions tailored to the demands of every sector.
          </p>
        </div>

        {/* 6-Item Asymmetric Architectural Grid */}
        <div className={styles.asymmetricGrid}>
          
          {/* Row 1: Residential (Feature 1.4x), Commercial (1x), Mixed-Use (1x) */}
          <div className={styles.gridRow1}>
            {row1.map((item) => (
              <div
                key={item.num}
                className={`${styles.tileCard} ${item.isFeature ? styles.tileFeature : styles.tileStandard}`}
              >
                <div className={styles.tileImageWrapper}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.tileImg}
                    priority={item.num === '01'}
                    quality={92}
                  />
                  <div className={styles.tileOverlay} />
                  <div className={styles.tileBorderAccent} />
                </div>

                {/* Content Overlay */}
                <div className={styles.tileContent}>
                  <div className={styles.numBadgeWrap}>
                    <span className={styles.numText}>{item.num}</span>
                    <span className={styles.numDash} />
                  </div>

                  <div className={styles.tileBottomMeta}>
                    <h3 className={styles.tileTitle}>{item.title}</h3>
                    <p className={styles.tileSub}>{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Row 2: Hospitality (1x), Industrial (Feature 1.4x), Institutional (1x) */}
          <div className={styles.gridRow2}>
            {row2.map((item) => (
              <div
                key={item.num}
                className={`${styles.tileCard} ${item.isFeature ? styles.tileFeature : styles.tileStandard}`}
              >
                <div className={styles.tileImageWrapper}>
                  <Image
                    src={item.img}
                    alt={item.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className={styles.tileImg}
                    quality={92}
                  />
                  <div className={styles.tileOverlay} />
                  <div className={styles.tileBorderAccent} />
                </div>

                {/* Content Overlay */}
                <div className={styles.tileContent}>
                  <div className={styles.numBadgeWrap}>
                    <span className={styles.numText}>{item.num}</span>
                    <span className={styles.numDash} />
                  </div>

                  <div className={styles.tileBottomMeta}>
                    <h3 className={styles.tileTitle}>{item.title}</h3>
                    <p className={styles.tileSub}>{item.sub}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
