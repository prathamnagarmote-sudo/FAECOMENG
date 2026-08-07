import Image from 'next/image';
import styles from './CtaSection.module.css';
import { StaggerContainer, FadeUp, ScaleIn } from './Animations';
import MagneticButton from './MagneticButton';

export default function CtaSection() {
  return (
    <section className={styles.cta}>
      <ScaleIn className={styles.bg}>
        <Image src="/images/cta_building.png" alt="FAECOM CTA" fill style={{ objectFit: 'cover' }} quality={80} />
      </ScaleIn>
      <div className={styles.overlay} />
      <div className={styles.grid} />

      <StaggerContainer className={styles.body}>
        <FadeUp>
          <span className="lbl-dk" style={{ justifyContent: 'center' }}>Ready to Begin?</span>
        </FadeUp>
        <FadeUp>
          <h2 className={styles.h2}>
            Let&apos;s Build the<br /><em>Future</em><br />Together
          </h2>
        </FadeUp>
        <FadeUp>
          <p className={styles.sub}>
            We build success stories for your future! Tell us about your project and our senior engineers will connect with you within 24 hours.
          </p>
        </FadeUp>
        <FadeUp>
          <div className={styles.acts}>
            <MagneticButton href="mailto:info@faecom.com" className="btn-primary">
              <span>Start Your Project</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </MagneticButton>
            <MagneticButton href="tel:+12026888858" className="btn-outline-w">
              Call Us Now
            </MagneticButton>
          </div>
        </FadeUp>
      </StaggerContainer>
    </section>
  );
}
