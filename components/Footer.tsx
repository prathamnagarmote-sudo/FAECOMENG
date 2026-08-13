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
  { label: 'About FAECOM', href: '/about' },
  { label: 'Projects',     href: '/projects' },
  { label: 'Our Process',  href: '/process' },
  { label: 'Contact',      href: '/contact' },
];

export default function Footer() {
  const pathname = usePathname();
  if (pathname === '/services/lgs') return null;

  return (
    <footer className={styles.footer} role="contentinfo">
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
              <Mail size={15} strokeWidth={2} />
              <span>info@faecom.com</span>
            </a>
            <a href="mailto:max@faecom.com" className={styles.contactItem}>
              <Mail size={15} strokeWidth={2} />
              <span>max@faecom.com</span>
            </a>
            <a href="tel:+12026888858" className={styles.contactItem}>
              <Phone size={15} strokeWidth={2} />
              <span>+1 (202)-688-8858</span>
            </a>
            <a href="tel:+12062572889" className={styles.contactItem}>
              <Phone size={15} strokeWidth={2} />
              <span>+1 (206)-257-2889</span>
            </a>
          </div>

          <a
            href="https://www.google.com/maps/search/?api=1&query=9407+NE+Vancouver+Mall+Dr,+Vancouver,+WA+98662"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.address}
            style={{ textDecoration: 'none' }}
          >
            <MapPin size={18} strokeWidth={2.2} style={{ flexShrink: 0, marginTop: 2, color: '#FF6B2C' }} />
            <span>9407 NE Vancouver Mall Dr, Vancouver, WA 98662, United States</span>
          </a>
        </div>

        {/* Services */}
        <div>
          <p className={styles.colTitle}>Services</p>
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

          {/* Social Icons */}
          <div className={styles.social}>
            <a href="https://www.linkedin.com/company/faecominc/" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on LinkedIn" className={styles.socialBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
            <a href="https://www.instagram.com/faecominc/" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on Instagram" className={styles.socialBtn}>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a href="https://www.youtube.com/@FAECOMINC" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on YouTube" className={styles.socialBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
            </a>
            <a href="https://www.facebook.com/profile.php?id=61592669586654" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on Facebook" className={styles.socialBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
            </a>
            <a href="https://x.com/FaecomINC" target="_blank" rel="noopener noreferrer" aria-label="FAECOM on X (Twitter)" className={styles.socialBtn}>
              <svg viewBox="0 0 24 24" fill="currentColor" width="16" height="16"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className={styles.bottom}>
        <p className={styles.copy}>
          &copy; {new Date().getFullYear()} FAECOM INC. All rights reserved.
        </p>
        <p className={styles.subCopy}>
          We build success stories for your future!
        </p>
      </div>
    </footer>
  );
}

