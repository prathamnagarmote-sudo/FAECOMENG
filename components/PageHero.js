import styles from './PageHero.module.css';

export default function PageHero({ label, title, titleEm, subtitle }) {
  return (
    <section className={styles.hero}>
      <div className={styles.wm} aria-hidden="true">{title}</div>
      <div className={styles.inner}>
        <span className="lbl">{label}</span>
        <h1 className={styles.h1}>
          {title}
          {titleEm && <><br /><em>{titleEm}</em></>}
        </h1>
        {subtitle && <p className={styles.sub}>{subtitle}</p>}
      </div>
      {/* Architectural corner marks */}
      <div className={styles.cornerTL} />
      <div className={styles.cornerBR} />
    </section>
  );
}
