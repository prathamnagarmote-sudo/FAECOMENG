'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import styles from './Footer.module.css';

const SERVICES = [
  'Architectural BIM',
  'Structural Engineering',
  'LGSF Engineering',
  'ICF Construction',
  'Timber Engineering',
  'MEP Engineering',
  'Industrial Buildings',
];

const COMPANY = [
  { label: 'About FAECOM', href: '/about' },
  { label: 'Projects',     href: '/projects' },
  { label: 'Our Process',  href: '/process' },
  { label: 'Software We Know', href: '/clients' },
  { label: 'Contact',      href: '/clients' },
];

export default function Footer() {
  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Top CTA band */}
      <div className={styles.ctaBand}>
        <div className={styles.ctaBandInner}>
          <div>
            <p className={styles.ctaBandTag}>Ready to build?</p>
            <h2 className={styles.ctaBandH2}>
              Let's create something<br />
              <em>extraordinary</em>
            </h2>
          </div>
          <Link href="/clients" className={styles.ctaBandBtn}>
            <span>Start a Project</span>
            <ArrowUpRight size={16} strokeWidth={2} />
          </Link>
        </div>
      </div>

      {/* Main footer */}
      <div className={styles.main}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logoWrap}>
            <Image
              src="/images/logo.png"
              alt="FAECOM INC. Logo"
              width={180}
              height={45}
              style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <p className={styles.tagline}>We build success stories for your future!</p>
          <p className={styles.desc}>
            FAECOM INC. delivers world-class architectural, structural and MEP engineering
            across North America, the Middle East, and South Asia.
          </p>

          <div className={styles.contact}>
            <a href="mailto:info@faecom.com" className={styles.contactItem}>
              <Mail size={14} strokeWidth={1.5} />
              <span>info@faecom.com</span>
            </a>
            <a href="mailto:sam@faecom.com" className={styles.contactItem}>
              <Mail size={14} strokeWidth={1.5} />
              <span>sam@faecom.com</span>
            </a>
            <a href="tel:+919975930122" className={styles.contactItem}>
              <Phone size={14} strokeWidth={1.5} />
              <span>+91 99759 30122</span>
            </a>
            <a href="tel:+12026888858" className={styles.contactItem}>
              <Phone size={14} strokeWidth={1.5} />
              <span>+1 (202) 688-8858</span>
            </a>
          </div>

          <div className={styles.address}>
            <MapPin size={14} strokeWidth={1.5} style={{ flexShrink: 0, marginTop: 2 }} />
            <span>IT Park, Nagpur, Maharashtra, India 440022</span>
          </div>
        </div>

        {/* Services */}
        <div>
          <p className={styles.colTitle}>Services</p>
          <ul className={styles.colList}>
            {SERVICES.map((s) => (
              <li key={s}>
                <Link href="/services" className={styles.colLink}>
                  <span className={styles.colLinkDot} />
                  {s}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company */}
        <div>
          <p className={styles.colTitle}>Company</p>
          <ul className={styles.colList}>
            {COMPANY.map(({ label, href }) => (
              <li key={label}>
                <Link href={href} className={styles.colLink}>
                  <span className={styles.colLinkDot} />
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <p className={styles.colTitle}>Stay Updated</p>
          <p className={styles.colDesc}>
            Engineering insights, project spotlights and industry updates.
          </p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="your@email.com"
              className={styles.emailInput}
              aria-label="Email address for newsletter"
            />
            <button type="submit" className={styles.subBtn}>
              Subscribe
            </button>
          </form>

          {/* Social */}
          <div className={styles.social}>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on LinkedIn" className={styles.socialBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on Instagram" className={styles.socialBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="15" height="15"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on Twitter" className={styles.socialBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="15" height="15"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} FAECOM INC. All rights reserved.
        </p>
        <p className={styles.copy} style={{ color: 'rgba(255,255,255,0.25)' }}>
          We build success stories for your future!
        </p>
      </div>
    </footer>
  );
}
