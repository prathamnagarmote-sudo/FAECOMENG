'use client';
import Image from 'next/image';
import styles from './FaecomWorldMap.module.css';

export default function FaecomWorldMap() {
  return (
    <div className={styles.mapContainer}>
      <Image
        src="https://res.cloudinary.com/dwk1cnlw2/image/upload/v1786096623/GLOBAL_MAP_z63kgv.png"
        alt="FAECOM Global Engineering Reach & Impact Map"
        width={1647}
        height={955}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 95vw, 1200px"
        priority
        quality={90}
        className={styles.mapImage}
      />
    </div>
  );
}
