import type { Metadata } from 'next';
import styles from './terms.module.css';

export const metadata: Metadata = {
  title: 'Terms of Service | FAECOM INC.',
  description: 'FAECOM INC. Terms of Service — Our terms governing the use of engineering services and this website.',
};

export default function TermsOfServicePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Legal Document</span>
          <h1 className={styles.heroTitle}>Terms of Service</h1>
          <p className={styles.heroSub}>Effective: January 1, 2024 &nbsp;|&nbsp; Last Updated: August 2025</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <p>These Terms of Service (&ldquo;Terms&rdquo;) govern your use of the FAECOM INC. website (<strong>faecom.com</strong>) and all engineering services provided by FAECOM INC. By accessing this website or engaging our services, you agree to these Terms. Please read them carefully.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>01</span> Services Provided</h2>
            <p>FAECOM INC. provides professional engineering and consulting services including, but not limited to:</p>
            <ul className={styles.list}>
              <li>Structural Engineering Design &amp; Analysis (Residential, Commercial, Industrial)</li>
              <li>Light Gauge Steel (LGS / LGSF) Framing &amp; Detailing</li>
              <li>Architectural BIM Modeling &amp; Coordination</li>
              <li>Insulated Concrete Form (ICF) Engineering</li>
              <li>Mass Timber &amp; Wood Engineering</li>
              <li>MEP (Mechanical, Electrical &amp; Plumbing) Engineering Coordination</li>
              <li>Rebar Detailing &amp; Concrete Design</li>
              <li>Third-Party Structural Review &amp; Peer Review</li>
            </ul>
            <p>All services are subject to a separate signed agreement or proposal letter specifying scope, fees, and deliverables.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>02</span> Website Use</h2>
            <ul className={styles.list}>
              <li>This website is for informational purposes and professional enquiry only.</li>
              <li>You may not use this website for any unlawful purpose or in any manner inconsistent with these Terms.</li>
              <li>You may not attempt to gain unauthorized access to any portion of the website or its related systems.</li>
              <li>FAECOM reserves the right to modify or discontinue any part of the website at any time without notice.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>03</span> Intellectual Property</h2>
            <p>All content on this website — including text, images, logos, graphics, drawings, and software — is the exclusive property of FAECOM INC. or its licensed content providers and is protected by applicable copyright, trademark, and intellectual property laws.</p>
            <ul className={styles.list}>
              <li>You may not reproduce, distribute, modify, or create derivative works from any content on this site without written permission from FAECOM.</li>
              <li>Engineering drawings, calculations, and reports produced by FAECOM remain the intellectual property of FAECOM until full payment has been received, unless otherwise agreed in writing.</li>
              <li>Client logos and project images used for portfolio purposes are published with client consent.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>04</span> Professional Standards &amp; Liability</h2>
            <ul className={styles.list}>
              <li>FAECOM engineers are licensed Professional Engineers (P.E.) registered in applicable U.S. states. All stamped drawings are prepared and reviewed by a licensed engineer of record.</li>
              <li>Engineering services are provided in accordance with applicable building codes (IBC, ASCE 7, ACI 318, NDS, AISC, etc.) at the time of project execution.</li>
              <li>FAECOM&apos;s liability is limited to the scope of work defined in the signed project agreement. We are not liable for damages arising from construction deviations from our approved drawings.</li>
              <li>Clients are responsible for providing accurate site information, geotechnical reports, and architectural documents necessary for engineering design.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>05</span> Payment Terms</h2>
            <ul className={styles.list}>
              <li>Payment terms are specified in each individual project proposal or engagement agreement.</li>
              <li>Invoices are due within the timeframe stated in the project agreement (typically Net 14 or Net 30 days).</li>
              <li>FAECOM reserves the right to withhold deliverables pending full payment of outstanding invoices.</li>
              <li>Late payments may incur interest charges at the rate specified in the project agreement.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>06</span> Confidentiality</h2>
            <p>FAECOM maintains strict confidentiality of all client project information, drawings, and business data. We do not disclose client-specific information to third parties without prior written consent, except as required by law or professional engineering standards.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>07</span> Disclaimer of Warranties</h2>
            <p>This website and its content are provided &ldquo;as is&rdquo; without warranties of any kind. FAECOM does not warrant that the website will be error-free or uninterrupted. General information on this website does not constitute professional engineering advice for any specific project.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>08</span> Governing Law</h2>
            <p>These Terms are governed by and construed in accordance with the laws of the <strong>State of Washington, United States</strong>. Any disputes arising from these Terms shall be subject to the exclusive jurisdiction of the courts in Clark County, Washington.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>09</span> Changes to Terms</h2>
            <p>FAECOM reserves the right to modify these Terms at any time. Updated Terms will be posted on this page. Your continued use of the website constitutes acceptance of the revised Terms.</p>
          </div>

          <div className={styles.contactBox}>
            <h2>Legal Enquiries</h2>
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
