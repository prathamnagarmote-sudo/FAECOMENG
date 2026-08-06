import styles from './IndustriesSection.module.css';

const INDUSTRIES = [
  { name: 'Retail Spaces', desc: 'Shopping centers, luxury boutiques & retail arcades.', icon: 'M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z' },
  { name: 'Hotels & Hospitality', desc: 'Resorts, boutique hotels & hospitality towers.', icon: 'M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16' },
  { name: 'Mixed-Use Developments', desc: 'Integrated commercial, residential & lifestyle complexes.', icon: 'M18 20V10M12 20V4M6 20v-6' },
  { name: 'Multifamily Residential', desc: 'Luxury apartment towers & residential complexes.', icon: 'M3 21h18M3 7v14M21 7v14M3 7l9-4 9 4' },
  { name: 'Commercial Offices', desc: 'Corporate headquarters & high-rise office buildings.', icon: 'M4 4h16v16H4zM4 12h16M12 4v16' },
  { name: 'Industrial Projects', desc: 'Warehouses, manufacturing plants & logistics hubs.', icon: 'M2 20h20M5 20V10l7-6 7 6v10' },
];

export default function IndustriesSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="lbl">Sector Specialization</span>
          <h2 className={styles.title}>Industries We Serve</h2>
          <p className={styles.subtitle}>
            From luxury retail and hospitality to heavy industrial facilities, FAECOM delivers tailored engineering excellence across diverse building typologies.
          </p>
        </div>

        <div className={styles.grid}>
          {INDUSTRIES.map((ind) => (
            <div key={ind.name} className={styles.card}>
              <div className={styles.iconBox}>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" width="24" height="24">
                  <path d={ind.icon}/>
                </svg>
              </div>
              <h3 className={styles.name}>{ind.name}</h3>
              <p className={styles.desc}>{ind.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
