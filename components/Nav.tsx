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
  { href: '/contact',  label: 'Contact' },
];

const SERVICES_ITEMS = [
  { href: '/services/lgs', label: 'Light Gauge Steel (LGS)', desc: 'Framing design, load calculations & shop drawings' },
  { href: '/services/timber', label: 'Wood & Mass Timber', desc: 'CLT, glulam & hybrid mass timber engineering' },
  { href: '/services/structural-steel', label: 'Structural Steel Solutions', desc: 'Heavy structural design & Tekla connection detailing' },
  { href: '/services/bim', label: 'Architectural BIM Services', desc: '3D modeling, clash detection & LOD 400 twins' },
  { href: '/services/bim-solutions-3d', label: 'BIM-integrated Solutions 3D', desc: 'Multi-discipline coordination & construction planning' },
  { href: '/services/icf', label: 'Insulated Concrete Form (ICF)', desc: 'High-performance concrete forming solutions' },
  { href: '/services/mep', label: 'MEP Engineering Solutions', desc: 'Coordinated HVAC, piping & power systems' },
  { href: '/services/rebar-concrete', label: 'Rebar Detailing & Concrete', desc: 'Precast concrete & detailed placing drawings' },
  { href: '/services/third-party-review', label: 'Third Party Review & Value Engineering', desc: 'Peer review & structural system optimization' },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen]         = useState(false);
  const [mobileSvcOpen, setMobileSvcOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handler, { passive: true });
    handler();
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => { 
    setOpen(false); 
    setMobileSvcOpen(false);
  }, [pathname]);

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
          {/* Logo + Tagline with 3D Fly-In */}
          <motion.div
            initial={{ opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
            animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            <Link href="/" className={styles.logoContainer} aria-label="FAECOM INC homepage">
              <Image
                src="/images/logo.png"
                alt="FAECOM INC."
                width={72}
                height={72}
                priority
                className={styles.logoImage}
                style={{ objectFit: 'contain' }}
              />
              <div className={styles.logoTextGroup}>
                <span className={styles.logoTitle}>FAECOM INC</span>
                <span className={styles.logoSubline}>We bring success stories for your future!</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Links with Left-to-Right Staggered 3D Fly-In */}
          <ul className={styles.links} role="list">
            {NAV_LINKS.map(({ href, label, hasDropdown }, idx) => (
              <motion.li 
                key={label} 
                className={`${styles.linkItem} ${hasDropdown ? styles.hasDropdown : ''}`}
                initial={{ opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
                animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
                transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.2 + idx * 0.08 }}
              >
                <Link
                  href={href}
                  className={`${styles.link} ${pathname === href || (hasDropdown && pathname.startsWith(href)) ? styles.active : ''}`}
                >
                  {label}
                  {hasDropdown && <ChevronDown size={12} strokeWidth={2} className={styles.chevron} />}
                </Link>
                {hasDropdown && (
                  <div className={styles.dropdownMenu}>
                    <div className={styles.dropdownHeader}>
                      <span className={styles.dropdownHeading}>Services</span>
                      <span className={styles.dropdownSubheading}>Engineering solutions that build better stories.</span>
                    </div>
                    <div className={styles.dropdownGrid}>
                      {SERVICES_ITEMS.map((item) => (
                        <Link key={item.label} href={item.href} className={styles.dropdownCell}>
                          <div className={styles.dropdownCellLabel}>{item.label}</div>
                          <div className={styles.dropdownCellDesc}>{item.desc}</div>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.li>
            ))}
          </ul>

          {/* Right: CTA + Burger with 3D Fly-In */}
          <div className={styles.right}>
            <motion.div
              initial={{ opacity: 0, scale: 1.5, rotateX: 20, rotateY: -15, y: -20 }}
              animate={{ opacity: 1, scale: 1.0, rotateX: 0, rotateY: 0, y: 0 }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.75 }}
            >
              <Link href="/contact" className={styles.cta} aria-label="Let's build together">
                <span>Let's Build Together</span>
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </motion.div>

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
              <Image src="/images/logo.png" alt="FAECOM" width={40} height={40}
                style={{ objectFit: 'contain' }} />
            </div>
            <nav className={styles.overlayLinks}>
              {NAV_LINKS.map(({ href, label, hasDropdown }, i) => (
                <motion.div key={label}
                  className={styles.overlayLinkWrapper}
                  initial={{ opacity: 0, x: -24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: i * 0.04, duration: 0.4 }}
                >
                  {hasDropdown ? (
                    <div className={styles.mobileDropdownGroup}>
                      <div className={styles.mobileLinkRow} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
                        <Link href={href} className={styles.overlayLink} onClick={() => setOpen(false)}>
                          {label}
                        </Link>
                        <button 
                          className={styles.mobileDropdownToggle}
                          onClick={() => setMobileSvcOpen(!mobileSvcOpen)}
                          aria-label="Toggle sub-services dropdown"
                          style={{ background: 'none', border: 'none', color: '#FFF', padding: '8px 12px', cursor: 'pointer' }}
                        >
                          <ChevronDown size={22} style={{ transform: mobileSvcOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }} />
                        </button>
                      </div>
                      
                      <AnimatePresence>
                        {mobileSvcOpen && (
                          <motion.div 
                            className={styles.mobileSublist}
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <Link href="/services" className={styles.mobileSubLink} style={{ color: '#FF6B2C', fontWeight: '700' }}>
                              Explore All Services →
                            </Link>
                            {SERVICES_ITEMS.map((subItem) => (
                              <Link key={subItem.label} href={subItem.href} className={styles.mobileSubLink}>
                                {subItem.label}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link href={href} className={styles.overlayLink}>{label}</Link>
                  )}
                </motion.div>
              ))}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                <Link href="/contact" className={styles.overlayCtaLink}>
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
