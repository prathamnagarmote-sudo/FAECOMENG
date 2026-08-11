'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  Building2,
  FileCheck,
  Globe2,
  ArrowUpRight,
  Sparkles,
  ChevronDown
} from 'lucide-react';
import styles from './contact.module.css';

const CONTACT_INFO = [
  {
    icon: <Mail className={styles.infoIcon} />,
    label: 'Email Us Directly',
    primary: 'info@faecom.com',
    secondary: 'max@faecom.com',
    primaryHref: 'mailto:info@faecom.com',
    secondaryHref: 'mailto:max@faecom.com',
    badge: 'Response < 24 Hours',
  },
  {
    icon: <Phone className={styles.infoIcon} />,
    label: 'Call Engineering Desk',
    primary: '+1 (202)-688-8858',
    secondary: '+1 (206)-257-2889',
    primaryHref: 'tel:+12026888858',
    secondaryHref: 'tel:+12062572889',
    badge: 'Mon - Fri · 8am - 6pm EST',
  },
  {
    icon: <MapPin className={styles.infoIcon} />,
    label: 'Headquarters',
    primary: '9407 NE Vancouver Mall Dr',
    secondary: 'Vancouver, WA 98662, United States',
    primaryHref: 'https://maps.google.com/?q=9407+NE+Vancouver+Mall+Dr,+Vancouver,+WA+98662',
    badge: 'USA Office',
  },
  {
    icon: <FileCheck className={styles.infoIcon} />,
    label: 'PE Stamp Coverage',
    primary: '24+ US States Licensed',
    secondary: 'PE Stamping & Structural Review',
    badge: 'Licensed Engineers',
  },
];

const SERVICE_OPTIONS = [
  'Architectural BIM (LOD 100 - 500)',
  'Structural Engineering & Detailing',
  'Light Gauge Steel (LGSF / CFS)',
  'Wood & Mass Timber (CLT / Glulam)',
  'Insulated Concrete Form (ICF)',
  'MEP Engineering Solutions',
  'Rebar Detailing & Precast Concrete',
  'Third-Party Review & Value Engineering',
];

const GLOBAL_OFFICES = [
  { country: 'United States', city: 'Vancouver, WA (HQ)', role: 'Engineering & PE Stamping Hub' },
  { country: 'Canada', city: 'Toronto / Vancouver', role: 'BIM & Structural Detailing' },
  { country: 'Bahamas & Caribbean', city: 'Nassau', role: 'Resort & High-Wind Engineering' },
  { country: 'United Arab Emirates', city: 'Dubai', role: 'Commercial & High-Rise BIM' },
  { country: 'India', city: 'Engineering Center', role: 'Dedicated Offshore Production' },
];

const FAQS = [
  {
    q: 'How fast can FAECOM provide a project proposal & quote?',
    a: 'We evaluate drawing sets and preliminary RFPs within 12 to 24 hours. For urgent PE review or detailing bids, our senior engineering leads can issue same-day scope breakdowns.'
  },
  {
    q: 'Are FAECOM drawings and calculations PE stamped for US states?',
    a: 'Yes. FAECOM holds active Professional Engineer (PE) licenses across 24+ US states. All calculation packages, structural drawings, and connection calculations are stamped by a licensed PE.'
  },
  {
    q: 'What BIM software formats do you deliver?',
    a: 'We deliver native Tekla Structures (.db1), Autodesk Revit (.rvt), SDS2, AutoCAD (.dwg), IFC, and Navisworks (.nwd) files tailored to your specific BIM Execution Plan (BEP).'
  },
  {
    q: 'Can FAECOM handle high-volume structural steel or LGS shop drawings?',
    a: 'Absolutely. With dedicated structural modeling teams across North America and offshore engineering centers, we process large-scale multi-ton steel structures and complex LGS framing packages seamlessly.'
  }
];

const SOCIAL_LINKS = [
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/company/faecominc/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/faecominc/',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="18" height="18">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    )
  },
  {
    name: 'YouTube',
    href: 'https://www.youtube.com/@FAECOMINC',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    href: 'https://www.facebook.com/profile.php?id=61592669586654',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/FaecomINC',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    )
  }
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: SERVICE_OPTIONS[0],
    budget: '$10k - $50k',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className={styles.page}>
      {/* ── 1. Hero Header ───────────────────────────────────── */}
      <section className={styles.hero}>
        <div className={styles.heroGlow} aria-hidden />
        <div className={styles.heroGridBg} aria-hidden />

        <div className={styles.heroInner}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={styles.heroHeader}
          >
            <span className={styles.eyebrow}>
              <Sparkles size={13} className={styles.sparkleIcon} />
              CONNECT WITH OUR PE ENGINEERS
            </span>
            <h1 className={styles.title}>
              Let&apos;s Engineer Your<br />
              <span className={styles.highlightText}>Next Success Story.</span>
            </h1>
            <p className={styles.subline}>
              Have a complex BIM, structural, or LGS project? Send us your project details or RFPs.
              Our senior engineering leads respond within 24 hours with actionable technical proposals.
            </p>

            {/* Quick Metrics Bar */}
            <div className={styles.heroMetrics}>
              <div className={styles.metricItem}>
                <span className={styles.metricValue}>&lt; 24 hrs</span>
                <span className={styles.metricLabel}>Proposal Response</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricValue}>24+ States</span>
                <span className={styles.metricLabel}>PE Stamp Coverage</span>
              </div>
              <div className={styles.metricDivider} />
              <div className={styles.metricItem}>
                <span className={styles.metricValue}>5 Countries</span>
                <span className={styles.metricLabel}>Global Hub Delivery</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 2. Contact Info Grid & Interactive Form ───────────── */}
      <section className={styles.mainSection}>
        <div className={styles.container}>
          <div className={styles.grid}>

            {/* Left Column: Direct Contact Info & Office Details */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={styles.leftCol}
            >
              <div className={styles.infoBoxGroup}>
                <h2 className={styles.sectionHeaderTitle}>Direct Contact Desk</h2>
                <p className={styles.sectionHeaderDesc}>
                  Reach out directly to our engineering coordinators for immediate inquiry routing.
                </p>

                <div className={styles.infoCardsList}>
                  {CONTACT_INFO.map((info, idx) => (
                    <div key={idx} className={styles.infoCard}>
                      <div className={styles.infoIconWrap}>{info.icon}</div>
                      <div className={styles.infoContent}>
                        <div className={styles.infoLabelRow}>
                          <span className={styles.infoLabel}>{info.label}</span>
                          <span className={styles.infoBadge}>{info.badge}</span>
                        </div>
                        {info.primaryHref ? (
                          <a href={info.primaryHref} className={styles.infoPrimaryLink} target={info.primaryHref.startsWith('http') ? '_blank' : '_self'} rel="noreferrer">
                            {info.primary}
                            <ArrowUpRight size={14} />
                          </a>
                        ) : (
                          <span className={styles.infoPrimaryText}>{info.primary}</span>
                        )}
                        {info.secondary && (
                          info.secondaryHref ? (
                            <a href={info.secondaryHref} className={styles.infoSecondaryLink}>
                              {info.secondary}
                            </a>
                          ) : (
                            <span className={styles.infoSecondaryText}>{info.secondary}</span>
                          )
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Channels Card */}
              <div className={styles.socialCard}>
                <h3 className={styles.socialCardTitle}>Official Social Channels</h3>
                <p className={styles.socialCardSub}>Follow FAECOM INC. for project case studies, BIM workflows, and structural insights.</p>
                <div className={styles.socialButtonsRow}>
                  {SOCIAL_LINKS.map(s => (
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={styles.socialBtn} title={s.name}>
                      {s.icon}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Right Column: Premium Engineering Inquiry Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className={styles.rightCol}
            >
              <div className={styles.formContainer}>
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className={styles.successState}
                  >
                    <div className={styles.successIconWrap}>
                      <CheckCircle2 size={48} className={styles.successIcon} />
                    </div>
                    <h3 className={styles.successTitle}>Inquiry Submitted Successfully!</h3>
                    <p className={styles.successDesc}>
                      Thank you, <strong>{formData.name}</strong>. Our senior engineering team has received your project details.
                      A dedicated project lead will contact you at <strong>{formData.email}</strong> within 24 hours.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className={styles.resetBtn}
                    >
                      Send Another Message
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.form}>
                    <div className={styles.formHeader}>
                      <h2 className={styles.formTitle}>Request a Technical Proposal</h2>
                      <p className={styles.formSub}>Fill in your project requirements for an estimate or engineering consultation.</p>
                    </div>

                    <div className={styles.formGrid}>
                      <div className={styles.fieldGroup}>
                        <label htmlFor="name" className={styles.label}>Full Name *</label>
                        <input
                          type="text"
                          id="name"
                          required
                          placeholder="e.g. Michael Smith"
                          value={formData.name}
                          onChange={e => setFormData({ ...formData, name: e.target.value })}
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.fieldGroup}>
                        <label htmlFor="email" className={styles.label}>Work Email *</label>
                        <input
                          type="email"
                          id="email"
                          required
                          placeholder="michael@company.com"
                          value={formData.email}
                          onChange={e => setFormData({ ...formData, email: e.target.value })}
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.fieldGroup}>
                        <label htmlFor="phone" className={styles.label}>Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          placeholder="+1 (555) 000-0000"
                          value={formData.phone}
                          onChange={e => setFormData({ ...formData, phone: e.target.value })}
                          className={styles.input}
                        />
                      </div>

                      <div className={styles.fieldGroup}>
                        <label htmlFor="company" className={styles.label}>Company / Firm Name</label>
                        <input
                          type="text"
                          id="company"
                          placeholder="e.g. Apex Construction LLC"
                          value={formData.company}
                          onChange={e => setFormData({ ...formData, company: e.target.value })}
                          className={styles.input}
                        />
                      </div>

                      <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                        <label htmlFor="service" className={styles.label}>Primary Service Required</label>
                        <select
                          id="service"
                          value={formData.service}
                          onChange={e => setFormData({ ...formData, service: e.target.value })}
                          className={styles.select}
                        >
                          {SERVICE_OPTIONS.map(s => (
                            <option key={s} value={s}>{s}</option>
                          ))}
                        </select>
                      </div>

                      <div className={`${styles.fieldGroup} ${styles.fullWidth}`}>
                        <label htmlFor="message" className={styles.label}>Project Scope &amp; Details *</label>
                        <textarea
                          id="message"
                          required
                          rows={4}
                          placeholder="Describe your project, square footage, structural material, location, required timeline, and specific deliverables needed..."
                          value={formData.message}
                          onChange={e => setFormData({ ...formData, message: e.target.value })}
                          className={styles.textarea}
                        />
                      </div>
                    </div>

                    <button type="submit" className={styles.submitBtn}>
                      <span>Submit Inquiry to Engineering Team</span>
                      <Send size={16} />
                    </button>

                    <p className={styles.formFooterNote}>
                      🔒 Your technical data &amp; drawing files are kept strictly confidential under NDA.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── 3. Global Engineering Offices ─────────────────────── */}
      <section className={styles.officesSection}>
        <div className={styles.container}>
          <div className={styles.officesHeader}>
            <span className={styles.eyebrow}>GLOBAL PRESENCE</span>
            <h2 className={styles.officesTitle}>Engineering Hubs &amp; Regional Offices</h2>
            <p className={styles.officesSub}>Operated under one unified standard of engineering precision across 5 countries.</p>
          </div>

          <div className={styles.officesGrid}>
            {GLOBAL_OFFICES.map((office, idx) => (
              <div key={idx} className={styles.officeCard}>
                <div className={styles.officeTop}>
                  <Globe2 className={styles.officeGlobeIcon} />
                  <span className={styles.officeCountry}>{office.country}</span>
                </div>
                <h3 className={styles.officeCity}>{office.city}</h3>
                <p className={styles.officeRole}>{office.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. Frequently Asked Questions (FAQ) ────────────────── */}
      <section className={styles.faqSection}>
        <div className={styles.container}>
          <div className={styles.faqHeader}>
            <span className={styles.eyebrow}>FREQUENTLY ASKED QUESTIONS</span>
            <h2 className={styles.faqTitle}>Got Questions? We Have Answers.</h2>
          </div>

          <div className={styles.faqList}>
            {FAQS.map((faq, idx) => {
              const isOpen = activeFaq === idx;
              return (
                <div key={idx} className={`${styles.faqItem} ${isOpen ? styles.faqOpen : ''}`}>
                  <button
                    onClick={() => setActiveFaq(isOpen ? null : idx)}
                    className={styles.faqQuestionBtn}
                  >
                    <span>{faq.q}</span>
                    <ChevronDown size={18} className={styles.faqChevron} />
                  </button>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className={styles.faqAnswer}
                    >
                      <p>{faq.a}</p>
                    </motion.div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

    </main>
  );
}
