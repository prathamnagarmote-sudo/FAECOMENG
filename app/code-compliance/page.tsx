import type { Metadata } from 'next';
import styles from './compliance.module.css';

export const metadata: Metadata = {
  title: 'Code Compliance | FAECOM INC.',
  description: 'FAECOM INC. engineering code compliance — Building codes, standards, and regulations we adhere to across all projects.',
};

export default function CodeCompliancePage() {
  return (
    <main className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <span className={styles.eyebrow}>Engineering Standards</span>
          <h1 className={styles.heroTitle}>Code Compliance</h1>
          <p className={styles.heroSub}>Building Codes &amp; Engineering Standards We Adhere To</p>
        </div>
      </section>

      <section className={styles.content}>
        <div className={styles.container}>
          <div className={styles.intro}>
            <p>FAECOM INC. is committed to the highest standards of engineering excellence. All structural, BIM, MEP, and specialty engineering services are delivered in strict accordance with applicable international and domestic building codes, standards, and regulatory requirements.</p>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>01</span> Primary Building Codes</h2>
            <ul className={styles.list}>
              <li><strong>IBC — International Building Code (2018 / 2021):</strong> Primary structural design code adopted across all US jurisdictions we serve.</li>
              <li><strong>IRC — International Residential Code:</strong> For single-family residential and low-rise construction projects.</li>
              <li><strong>NBC — National Building Code of Canada:</strong> Applied to all Canadian projects including British Columbia, Alberta, and Ontario.</li>
              <li><strong>IS Codes (BIS):</strong> Bureau of Indian Standards codes applied to projects in South Asian jurisdictions.</li>
              <li><strong>British Standards (BS EN / Eurocodes):</strong> Applied to projects in the United Kingdom and applicable GCC markets.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>02</span> Structural Engineering Standards</h2>
            <ul className={styles.list}>
              <li><strong>ASCE 7:</strong> Minimum Design Loads for Buildings and Other Structures — the basis for wind, seismic, snow, and live load calculations.</li>
              <li><strong>ACI 318:</strong> Building Code Requirements for Structural Concrete — governs all reinforced and post-tensioned concrete design.</li>
              <li><strong>AISC 360:</strong> Specification for Structural Steel Buildings — applied to all hot-rolled structural steel design and connection detailing.</li>
              <li><strong>AISC 341:</strong> Seismic Provisions for Structural Steel Buildings — applied in high seismic design categories (SDC C, D, E, F).</li>
              <li><strong>NDS:</strong> National Design Specification for Wood Construction — applies to lumber, glulam, CLT, and mass timber systems.</li>
              <li><strong>AISI S100:</strong> North American Specification for the Design of Cold-Formed Steel Structural Members — applies to all LGSF / CFS framing.</li>
              <li><strong>ACI 318 Chapter 26 (Special Inspections):</strong> Required quality assurance for high-importance structural systems.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>03</span> BIM &amp; Coordination Standards</h2>
            <ul className={styles.list}>
              <li><strong>LOD 300 / LOD 400:</strong> Level of Development standards per AIA G202 for BIM model deliverables.</li>
              <li><strong>NBIMS-US:</strong> National BIM Standard — United States (applicable to federal and institutional projects).</li>
              <li><strong>ISO 19650:</strong> International standard for organizing and managing information over the entire life cycle of a built asset.</li>
              <li><strong>COBie:</strong> Construction Operations Building Information Exchange — for facility management handover deliverables.</li>
              <li><strong>OmniClass / UniFormat:</strong> Classification systems for BIM element categorization and cost estimation.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>04</span> MEP Engineering Standards</h2>
            <ul className={styles.list}>
              <li><strong>ASHRAE Standards (62.1, 90.1, 55):</strong> Ventilation, energy efficiency, and thermal comfort for all commercial HVAC designs.</li>
              <li><strong>NFPA 70 (NEC):</strong> National Electrical Code — governs all electrical distribution and power system design.</li>
              <li><strong>NFPA 13 / NFPA 14:</strong> Installation of Sprinkler Systems and Standpipe Systems.</li>
              <li><strong>IPC — International Plumbing Code:</strong> Governs plumbing system design and installation standards.</li>
              <li><strong>IMC — International Mechanical Code:</strong> Governs mechanical system installations.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>05</span> Seismic Design Standards</h2>
            <ul className={styles.list}>
              <li>ASCE 7-22 Chapter 11–22: Seismic Design Provisions — applied for all projects in seismic zones SDC A through F.</li>
              <li>AISC 341: Seismic Provisions for Structural Steel (SMRF, IMRF, OCBF, SCBF, EBF systems).</li>
              <li>ACI 318 Chapter 18: Seismic Design of Concrete Structures.</li>
              <li>AISI S400: North American Standard for Seismic Design of Cold-Formed Steel Structural Systems.</li>
              <li>Ground motion values are sourced directly from USGS and ASCE Hazard Tool for project-specific site data.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>06</span> Accessibility &amp; Sustainability</h2>
            <ul className={styles.list}>
              <li><strong>ADA / ICC A117.1:</strong> Accessibility requirements incorporated into all commercial and public building designs.</li>
              <li><strong>LEED / BREEAM:</strong> Coordination with LEED and BREEAM certification requirements where applicable.</li>
              <li><strong>Energy Codes:</strong> ASHRAE 90.1 and local energy conservation codes applied to all applicable building types.</li>
            </ul>
          </div>

          <div className={styles.section}>
            <h2 className={styles.sectionTitle}><span className={styles.numTag}>07</span> Professional Engineering Licensure</h2>
            <p>FAECOM engineers hold active Professional Engineer (P.E.) licenses in multiple U.S. states and work with licensed engineers in Canadian provinces. All stamped engineering deliverables are reviewed and sealed by a licensed engineer of record in the applicable jurisdiction.</p>
            <ul className={styles.list}>
              <li>All PE-stamped drawings carry the engineer of record&apos;s license number and expiry date.</li>
              <li>We maintain professional liability (E&amp;O) insurance coverage for all engineering engagements.</li>
              <li>Continuing education requirements are met by all licensed engineers to maintain current licensure.</li>
            </ul>
          </div>

          <div className={styles.contactBox}>
            <h2>Questions About Our Engineering Standards?</h2>
            <div className={styles.contactDetails}>
              <p><strong>FAECOM INC. — Technical Standards Team</strong></p>
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
