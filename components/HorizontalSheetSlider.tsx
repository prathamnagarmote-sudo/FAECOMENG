"use client";

import React, { useRef, useState } from "react";
import styles from "./HorizontalSheetSlider.module.css";

export const STRUCTURAL_DRAWINGS_IMAGES = Array.from({ length: 32 }, (_, i) => ({
  src: `https://res.cloudinary.com/yqs3dtap/image/upload/f_auto,q_auto/v1787055364/RESIDENCE_INN_STRUCTURAL_SET_5_Page_${String(i + 1).padStart(3, "0")}.jpg`,
  alt: `Structural Drawing Sheet ${i + 1}`,
}));

export const DESIGN_REPORT_IMAGES = Array.from({ length: 186 }, (_, i) => {
  const pageNum = String(i + 1).padStart(3, "0");
  const ext = i === 0 ? "png" : "jpg";
  return {
    src: `https://res.cloudinary.com/yqs3dtap/image/upload/f_auto,q_auto/LA_MARINA__Design_Report_220925_Page_${pageNum}.${ext}`,
    alt: `Design Calculation Sheet ${i + 1}`,
  };
});

interface HorizontalSheetSliderProps {
  badge: string;
  title: string;
  subtitle: string;
  images: { src: string; alt?: string }[];
  animationClass: string;
  isPortrait?: boolean;
}

export function HorizontalSheetSlider({
  badge,
  title,
  subtitle,
  images,
  animationClass,
  isPortrait = false,
}: HorizontalSheetSliderProps) {
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // Duplicate images array for seamless infinite marquee loop
  const displayList = [...images, ...images];

  return (
    <div className={styles.sectionCardPanel}>
      {/* Section Header with Left Accent Line */}
      <div className={styles.headerContainer}>
        <span className={styles.tagBadge}>{badge}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
        <p className={styles.sectionSubtitle}>{subtitle}</p>
      </div>

      {/* Marquee Track Container (Hover & Drag Pauses Animation) */}
      <div
        ref={containerRef}
        className={`${styles.marqueeWrapper} ${isDragging ? styles.isDragging : ""}`}
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
      >
        <div className={`${styles.track} ${animationClass}`}>
          {displayList.map((img, idx) => (
            <div
              key={idx}
              className={isPortrait ? styles.sheetCardPortrait : styles.sheetCardLandscape}
            >
              <img
                src={img.src}
                alt={img.alt || `Sheet ${(idx % images.length) + 1}`}
                className={isPortrait ? styles.sheetImgPortrait : styles.sheetImgLandscape}
                loading="lazy"
                draggable={false}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function TwoDeliverablesSections() {
  return (
    <div className={styles.container}>
      {/* Section 1: DESIGN CALCULATION REPORT (Portrait Format) */}
      <HorizontalSheetSlider
        badge="186 SEALED CALCULATION SHEETS"
        title="DESIGN CALCULATION REPORT"
        subtitle="FAECOM provides comprehensive Design Calculation Reports to ensure structural stability, code compliance, and engineering efficiency."
        images={DESIGN_REPORT_IMAGES}
        animationClass={styles.animateDesign}
        isPortrait={true}
      />

      {/* Intelligent Architectural Section Divider */}
      <div className={styles.sectionDivider}>
        <div className={styles.dividerLine} />
        <span className={styles.dividerBadge}>TECHNICAL DRAWINGS & CALCULATIONS</span>
      </div>

      {/* Section 2: STRUCTURAL DRAWINGS PACKAGE (Landscape Format) */}
      <HorizontalSheetSlider
        badge="32 ERECTION & FABRICATION DRAWINGS"
        title="STRUCTURAL DRAWINGS PACKAGE"
        subtitle="FAECOM provides detailed Structural Drawings Packages that include essential documentation for shop fabrication and jobsite construction."
        images={STRUCTURAL_DRAWINGS_IMAGES}
        animationClass={styles.animateStructural}
        isPortrait={false}
      />
    </div>
  );
}

export default TwoDeliverablesSections;
