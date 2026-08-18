'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowUpRight, Mail, Phone, MapPin } from 'lucide-react';
import { usePathname } from 'next/navigation';
import styles from './Footer.module.css';

const SERVICES = [
  { label: 'Architectural BIM', href: '/services/bim' },
  { label: 'Structural Engineering', href: '/services/structural-steel' },
  { label: 'LGSF Engineering', href: '/services/lgs' },
  { label: 'ICF Construction', href: '/services/icf' },
  { label: 'Timber Engineering', href: '/services/timber' },
  { label: 'MEP Engineering', href: '/services/mep' },
  { label: 'Industrial Buildings', href: '/services' },
];

const COMPANY = [
  { label: 'Home',     href: '/' },
  { label: 'About Us', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Projects', href: '/projects' },
  { label: 'Contact',  href: '/contact' },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/services/lgs') return null;

  return (
    <footer className={styles.footer} role="contentinfo">
      {/* Main footer */}
      <div className={styles.main}>
        {/* Brand & Contact Column */}
        <div className={styles.brand}>
          <div className={styles.logoWrap}>
            <Image
              src="/images/logo.png"
              alt="FAECOM INC. Logo"
              width={190}
              height={48}
              style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }}
            />
          </div>
          <p className={styles.tagline}>ENGINEERING EXCELLENCE • DESIGNING TOMORROW</p>
          <p className={styles.desc}>
            FAECOM INC. delivers world-class architectural, structural, and MEP engineering
            solutions across North America, the Middle East, and South Asia.
          </p>

          {/* High-Readability Contact Cards */}
          <div className={styles.contactGroup}>
            <div className={styles.contactCard}>
              <div className={styles.iconCircle}>
                <Mail size={17} />
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.contactCardLabel}>EMAIL ENQUIRIES</span>
                <a href="mailto:info@faecom.com" className={styles.contactVal}>info@faecom.com</a>
                <a href="mailto:max@faecom.com" className={styles.contactVal} style={{ marginTop: "2px" }}>max@faecom.com</a>
              </div>
            </div>

            <div className={styles.contactCard}>
              <div className={styles.iconCircle}>
                <Phone size={17} />
              </div>
              <div className={styles.contactDetails}>
                <span className={styles.contactCardLabel}>PHONE DIRECT</span>
                <a href="tel:+12026888858" className={styles.contactVal}>+1 (202) 688-8858</a>
                <a href="tel:+12062572889" className={styles.contactVal}>+1 (206) 257-2889</a>
              </div>
            </div>
          </div>

          {/* High-Readability Address Box */}
          <div className={styles.addressCard}>
            <div className={styles.iconCircleOrange}>
              <MapPin size={19} />
            </div>
            <div className={styles.addressDetails}>
              <span className={styles.addressCardLabel}>US HEADQUARTERS ADDRESS</span>
              <span className={styles.addressVal}>9407 NE Vancouver Mall Dr, Vancouver, WA 98662, United States</span>
            </div>
          </div>
        </div>

        {/* Services Column */}
        <div>
          <p className={styles.colTitle}>Engineering Services</p>
          <ul className={styles.colList}>
            {SERVICES.map((s) => (
              <li key={s.label}>
                <Link href={s.href} className={styles.colLink}>
                  <span className={styles.colLinkDot} />
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Company Column */}
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

        {/* Social Links Column */}
        <div>
          <p className={styles.colTitle}>Stay Connected</p>
          <div className={styles.social}>
            <a href="https://www.linkedin.com/company/faecominc/" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on LinkedIn" className={`${styles.socialBtn} ${styles.socialLinkedin}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z"/></svg>
            </a>
            <a href="https://www.instagram.com/faecominc/" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on Instagram" className={`${styles.socialBtn} ${styles.socialInstagram}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="https://www.youtube.com/@FAECOMINC" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on YouTube" className={`${styles.socialBtn} ${styles.socialYoutube}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61592669586654" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on Facebook" className={`${styles.socialBtn} ${styles.socialFacebook}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/FaecomINC" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on X (Twitter)" className={`${styles.socialBtn} ${styles.socialX}`}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottomBar}>
        <div className={styles.bottomInner}>
          <p>© {new Date().getFullYear()} FAECOM INC. All rights reserved.</p>
          <div className={styles.bottomLinks}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <span className={styles.dot}>•</span>
            <Link href="/terms-of-service">Terms of Service</Link>
            <span className={styles.dot}>•</span>
            <Link href="/code-compliance">Code Compliance</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
