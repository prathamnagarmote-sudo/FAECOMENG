import type { Metadata } from 'next';
import styles from './privacy.module.css';

export const metadata: Metadata = {
  title: 'Privacy Policy | FAECOM INC.',
  description: 'FAECOM INC. Privacy Policy — How we collect, use, and protect your personal information.',
};

export default function PrivacyPolicyPage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Legal Document</span>
          <h1 className={styles.heroTitle}>Privacy Policy</h1>
          <p className={styles.heroSub}>Effective: January 1, 2024 &nbsp;|&nbsp; Last Updated: August 2025</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <p>FAECOM INC. (&ldquo;FAECOM&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit <strong>faecom.com</strong> or engage with our engineering services.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>01</span> Information We Collect</h2>
            <h3 className={styles.subsectionTitle}>Information You Provide</h3>
            <ul className={styles.list}>
              <li><strong>Contact Information:</strong> Name, email address, phone number, and company name submitted via contact forms.</li>
              <li><strong>Project Information:</strong> Building type, scope, location, and engineering requirements you share voluntarily.</li>
              <li><strong>Correspondence:</strong> Records of email and message communications with FAECOM staff.</li>
            </ul>
            <h3 className={styles.subsectionTitle}>Automatically Collected Data</h3>
            <ul className={styles.list}>
              <li><strong>Usage Data:</strong> Pages visited, time on page, browser type, OS, and IP address.</li>
              <li><strong>Cookies:</strong> We use cookies to improve browsing experience. You may disable them in browser settings.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>02</span> How We Use Your Information</h2>
            <ul className={styles.list}>
              <li>To respond to engineering enquiries and project requests.</li>
              <li>To provide and improve our structural, BIM, and MEP engineering services.</li>
              <li>To send project updates, proposals, invoices, and technical documentation.</li>
              <li>To comply with applicable laws and professional engineering regulations.</li>
              <li>To analyze website usage to improve our online presence.</li>
            </ul>
            <p className={styles.note}>We do <strong>not</strong> sell, rent, or trade your personal information to third parties for marketing purposes.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>03</span> Information Sharing</h2>
            <ul className={styles.list}>
              <li><strong>Service Providers:</strong> Trusted vendors operating our website infrastructure (Resend for email, Vercel for hosting, Cloudinary for media). These parties are contractually obligated to maintain confidentiality.</li>
              <li><strong>Professional Advisors:</strong> Lawyers and accountants as required to fulfill professional duties.</li>
              <li><strong>Legal Authorities:</strong> When required by law, court order, or government regulation.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>04</span> Data Retention</h2>
            <p>We retain personal information for as long as necessary to fulfill described purposes. Project data may be retained for a minimum of <strong>7 years</strong> to comply with professional engineering record-keeping standards in applicable jurisdictions.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>05</span> Security</h2>
            <ul className={styles.list}>
              <li>SSL/TLS encryption for all data transmitted to and from faecom.com.</li>
              <li>Restricted internal access to personal data on a need-to-know basis.</li>
              <li>Regular security assessments of our technology infrastructure.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>06</span> Your Rights</h2>
            <ul className={styles.list}>
              <li><strong>Access:</strong> Request a copy of the personal information we hold about you.</li>
              <li><strong>Correction:</strong> Request correction of inaccurate data.</li>
              <li><strong>Deletion:</strong> Request deletion, subject to legal retention obligations.</li>
              <li><strong>Portability:</strong> Request your data in a machine-readable format.</li>
            </ul>
            <p>To exercise these rights, contact us at <a href="mailto:info@faecom.com" className={styles.link}>info@faecom.com</a>.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>07</span> Policy Changes</h2>
            <p>We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Continued use of our website constitutes acceptance of the updated policy.</p>
          </div>

          <div className={styles.contactBox}>
            <h2>Contact Our Privacy Team</h2>
            <div className={styles.contactDetails}>
              <p><strong>FAECOM INC.</strong></p>
              <p>9407 NE Vancouver Mall Dr, Vancouver, WA 98662, United States</p>
              <p>Email: <a href="mailto:info@faecom.com" className={styles.link}>info@faecom.com</a></p>
              <p>Phone: <a href="tel:+12026888858" className={styles.link}>+1 (202) 688-8858</a></p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
