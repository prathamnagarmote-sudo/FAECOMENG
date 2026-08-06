'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Nav.module.css';

const NAV_LINKS = [
  { href: '/',         label: 'Home' },
  { href: '/about',    label: 'About Us' },
  { href: '/services', label: 'Services', hasDropdown: true },
  { href: '/projects', label: 'Projects' },
  { href: '/clients',  label: 'Software We Know' },
  { href: '/process',  label: 'Insights' },
  { href: '/clients',  label: 'Contact' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <>
      {/* ── Standard Full-Width Navbar ─────────────────────── */}
      <nav
        className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}
        role="navigation"
        aria-label="Main navigation"
      >
        <div className={styles.inner}>
          {/* Logo + Tagline */}
          <Link href="/" className={styles.logo} aria-label="FAECOM INC homepage">
            <Image
              src="/images/logo.png"
              alt="FAECOM INC."
              width={180}
              height={44}
              priority
              style={{ objectFit: 'contain', width: 'auto', height: '44px' }}
            />
          </Link>

          {/* Desktop Links */}
          <ul className={styles.links} role="list">
            {NAV_LINKS.map(({ href, label, hasDropdown }) => (
              <li key={label} className={styles.linkItem}>
                <Link
                  href={href}
                  className={`${styles.link} ${pathname === href ? styles.active : ''}`}
                >
                  {label}
                  {hasDropdown && <ChevronDown size={12} strokeWidth={2} className={styles.chevron} />}
                </Link>
              </li>
            ))}
          </ul>

          {/* Right: CTA + Burger */}
          <div className={styles.right}>
            <Link href="/clients" className={styles.cta} aria-label="Let's build together">
              <span>Let's Build Together</span>
              <ArrowRight size={14} strokeWidth={2} />
            </Link>

            <button
              className={styles.burger}
              onClick={() => setOpen(true)}
              aria-label="Open navigation menu"
              aria-expanded={open}
            >
              <Menu size={22} strokeWidth={1.8} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Mobile Overlay ──────────────────────────────────── */}
      <AnimatePresence>
        {open && (
          <motion.div
            className={styles.overlay}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            role="dialog"
            aria-modal="true"
          >
            <button className={styles.closeBtn} onClick={() => setOpen(false)} aria-label="Close">
              <X size={24} strokeWidth={1.5} />
            </button>
            <div className={styles.overlayLogo}>
              <Image src="/images/logo.png" alt="FAECOM" width={160} height={40}
                style={{ objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
            </div>
            <nav className={styles.overlayLinks}>
              {NAV_LINKS.map(({ href, label }, i) => (
                <motion.div key={label}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.4 }}
                >
                  <Link href={href} className={styles.overlayLink}>{label}</Link>
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link href="/clients" className={styles.overlayCtaLink}>
                  Let's Build Together <ArrowRight size={14} />
                </Link>
              </motion.div>
            </nav>
            <div className={styles.overlayContact}>
              <a href="mailto:info@faecom.com">info@faecom.com</a>
              <a href="tel:+12026888858">+1 (202) 688-8858</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
