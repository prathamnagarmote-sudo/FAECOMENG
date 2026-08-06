'use client';
import { useState } from 'react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import styles from './page.module.css';

const CLIENTS = ['Turner Construction','Skidmore Owings','Gensler Group','HDR Engineering','Perkins + Will','Jacobs Group','AECOM Corp','WSP Global','Thornton Tomasetti','Walter P Moore'];
const TESTS = [
  { co:"Turner Construction · USA", name:"Michael R. Torres", role:"Senior Project Manager", q:"FAECOM\u2019s structural BIM coordination saved us weeks of on-site rework. Their team\u2019s precision, responsiveness, and depth of knowledge is unlike anything I\u2019ve seen from an engineering firm of this scale." },
  { co:"Perkins + Will · Canada",   name:"Sarah K. Beaumont", role:"Principal Architect",     q:"The LGSF detailing FAECOM delivered for our mass timber hybrid project was extraordinary. They pushed material boundaries and delivered a buildable, code-compliant solution ahead of schedule." },
  { co:"HDR Engineering · Texas",  name:"James A. Whitfield", role:"VP of Structural Engineering", q:"We\u2019ve worked with FAECOM across three states on healthcare and senior living facilities. Their PE stamping is seamless, their engineers are thorough, and the quality of drawings is impeccable." },
];

export default function Clients() {
  const [idx, setIdx] = useState(0);
  const n = TESTS.length;
  const go = (i) => setIdx((i + n) % n);

  return (
    <>
      <PageHero label="Trusted Partners" title="Built on" titleEm="Trust" subtitle="We are proud to partner with some of the world's most respected architecture and construction firms." />
      <div className="divider" />

      <section className={styles.cli}>
        <div className={styles.cliHdr}>
          <span className="lbl" style={{justifyContent:'center'}}>Industry Partners</span>
          <h2 className={styles.cliH2}>Trusted by Industry Leaders</h2>
        </div>
        <div className={styles.cliGrid}>
          {CLIENTS.map(c => (
            <div key={c} className={`cli-item ${styles.cliItem}`}>
              <span className="cli-name">{c}</span>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className={styles.test}>
        <div className={styles.testHdr}>
          <div>
            <span className="lbl">What Clients Say</span>
            <h2 className={styles.testH2}>Voices of<br />Excellence</h2>
          </div>
          <div className={styles.testCtl}>
            <button className="tbtn" onClick={() => go(idx-1)} aria-label="Previous">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
            </button>
            <button className="tbtn" onClick={() => go(idx+1)} aria-label="Next">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>
        <div className={styles.testCard}>
          <div className={styles.testAuthor}>
            <p className={styles.testCo}>{TESTS[idx].co}</p>
            <h4 className={styles.testName}>{TESTS[idx].name}</h4>
            <p className={styles.testRole}>{TESTS[idx].role}</p>
            <div className={styles.testStars}>
              {[...Array(5)].map((_,i) => (
                <svg key={i} className="tstar" viewBox="0 0 24 24" fill="currentColor" width="13" height="13">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01z"/>
                </svg>
              ))}
            </div>
          </div>
          <div className={styles.testQBody}>
            <div className="tquote-mark">&ldquo;</div>
            <blockquote className="tquote-text">{TESTS[idx].q}</blockquote>
          </div>
        </div>
        <div className={styles.testDots}>
          {TESTS.map((_,i) => (
            <button key={i} className={`tdot ${i===idx?'active':''}`} onClick={() => go(i)} aria-label={`Slide ${i+1}`} />
          ))}
        </div>
      </section>

      <div className="divider" />

      <section className={styles.contact} id="contact">
        <div className={styles.contactHdr}>
          <span className="lbl">Get in Touch</span>
          <h2 className="sec-h2">Start Your<br /><em>Project</em><br />Today</h2>
        </div>
        <div className={styles.contactForm}>
          <p className={styles.contactDesc}>Tell us about your project and our senior engineering team will respond within 24 hours.</p>
          <div className={styles.formFields}>
            <input type="text" placeholder="Your Name" className={styles.field} />
            <input type="email" placeholder="Email Address" className={styles.field} />
            <input type="tel" placeholder="Phone Number" className={styles.field} />
            <textarea placeholder="Describe your project..." rows={5} className={styles.field} style={{resize:'none'}} />
            <div className={styles.formActs}>
              <a href="mailto:info@faecom.com" className="btn-primary">
                <span>Send Message</span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="14" height="14"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
              <a href="tel:+12026888858" className="btn-outline">+1 (202) 688-8858</a>
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />
      <CtaSection />
    </>
  );
}
