import Image from 'next/image';
import Link from 'next/link';
import styles from './CtaSection.module.css';

export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <div className={styles.bg}>
        <Image src="/images/cta_building.png" alt="FAECOM CTA" fill style={{ objectFit: 'cover' }} quality={80} />
      </div>
      <div className={styles.overlay} />
      <div className={styles.grid} />
      <div className={styles.body}>
        <span className="lbl-dk" style={{ justifyContent: 'center' }}>Ready to Begin?</span>
        <h2 className={styles.h2}>
          Let&apos;s Build the<br /><em>Future</em><br />Together
        </h2>
        <p className={styles.sub}>
          We build success stories for your future! Tell us about your project and our senior engineers will connect with you within 24 hours.
        </p>
        <div className={styles.acts}>
          <a href="mailto:info@faecom.com" className="btn-gold">
            <span>Start Your Project</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="tel:+12026888858" className="btn-outline-w">Call Us Now</a>
        </div>
      </div>
    </section>
  );
}
