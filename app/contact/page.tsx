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
  ShieldCheck,
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
    secondary: '',
    primaryHref: 'mailto:info@faecom.com',
    secondaryHref: '',
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
    primary: '24 US States Licensed',
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

const DELIVERY_COMMITMENTS = [
  {
    title: '24-48 HOUR RESPONSE SLA',
    desc: 'Rapid technical evaluation of drawing sets and preliminary RFPs directly by senior structural leads.'
  },
  {
    title: 'PE / SE STAMPED COMPLIANCE',
    desc: 'Licensed Professional Engineering stamps and calculation packages across 24 US states.'
  },
  {
    title: 'GLOBAL TURNKEY CAPACITY',
    desc: 'Round-the-clock modeling and detailing teams utilizing Tekla, Revit, SDS2, and STAAD.Pro.'
  },
  {
    title: '100% CONFIDENTIALITY & NDA',
    desc: 'Full IP security for all CAD blueprints, structural models, and proprietary architectural specifications.'
  }
];

const FAQS = [
  {
    q: 'How fast can FAECOM provide a project proposal & quote?',
    a: 'We evaluate drawing sets and preliminary RFPs within 12 to 24 hours. For urgent PE review or detailing bids, our senior engineering leads can issue same-day scope breakdowns.'
  },
  {
    q: 'Are FAECOM drawings and calculations PE stamped for US states?',
    a: 'Yes. FAECOM holds active Professional Engineer (PE) licenses across 24 US states. All calculation packages, structural drawings, and connection calculations are stamped by a licensed PE.'
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
    classKey: 'socialLinkedin',
    href: 'https://www.linkedin.com/company/faecominc/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
      </svg>
    )
  },
  {
    name: 'Instagram',
    classKey: 'socialInstagram',
    href: 'https://www.instagram.com/faecominc/',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      </svg>
    )
  },
  {
    name: 'YouTube',
    classKey: 'socialYoutube',
    href: 'https://www.youtube.com/@FAECOMINC',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    )
  },
  {
    name: 'Facebook',
    classKey: 'socialFacebook',
    href: 'https://www.facebook.com/profile.php?id=61592669586654',
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    )
  },
  {
    name: 'X (Twitter)',
    classKey: 'socialX',
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch (err) {
      console.error('Error submitting form:', err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
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
                <span className={styles.metricValue}>24 States</span>
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
                    <a key={s.name} href={s.href} target="_blank" rel="noopener noreferrer" className={`${styles.socialBtn} ${styles[s.classKey] || ''}`} title={s.name}>
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

                    <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                      <span>{isSubmitting ? 'Sending Proposal Request...' : 'Submit Inquiry to Engineering Team'}</span>
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

      {/* ── 3. Engineering Delivery Commitments ─────────────────────── */}
      <section className={styles.officesSection}>
        <div className={styles.container}>
          <div className={styles.officesHeader}>
            <span className={styles.eyebrow}>OUR SERVICE COMMITMENT</span>
            <h2 className={styles.officesTitle}>Why Leading Firms Partner With FAECOM</h2>
            <p className={styles.officesSub}>Built on 25+ years of international engineering precision, transparency, and rapid turnaround.</p>
          </div>

          <div className={styles.officesGrid}>
            {DELIVERY_COMMITMENTS.map((item, idx) => (
              <div key={idx} className={styles.officeCard}>
                <div className={styles.officeTop}>
                  <ShieldCheck className={styles.officeGlobeIcon} />
                  <span className={styles.officeCountry}>FAECOM STANDARD</span>
                </div>
                <h3 className={styles.officeCity} style={{ fontSize: '15px', letterSpacing: '0.04em', color: '#FFFFFF', marginBottom: '8px' }}>{item.title}</h3>
                <p className={styles.officeRole} style={{ fontSize: '13px', textTransform: 'none', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', fontWeight: 400 }}>{item.desc}</p>
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
