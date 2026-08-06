import styles from './SoftwareSection.module.css';

const SOFTWARES = [
  { name: 'Autodesk Revit', category: 'BIM & Modeling', tag: 'Full BIM 3D' },
  { name: 'AutoCAD', category: '2D Drafting & Detailing', tag: 'CAD Standard' },
  { name: 'Tekla Structures', category: 'Steel & Concrete BIM', tag: '3D Detailing' },
  { name: 'ETABS', category: 'Structural Analysis', tag: 'Building Analysis' },
  { name: 'SAFE', category: 'Slab & Foundation Design', tag: 'Concrete Slabs' },
  { name: 'STAAD.Pro', category: '3D Structural Engineering', tag: 'Steel & Concrete' },
  { name: 'Navisworks', category: 'Clash Detection', tag: 'BIM Coordination' },
  { name: 'RISA 3D', category: 'General Structural', tag: 'Frame Analysis' },
  { name: 'SolidWorks', category: 'Mechanical & Steel', tag: '3D Component' },
  { name: 'SDS/2', category: 'Steel Detailing', tag: 'Connection Detailing' },
  { name: 'Bluebeam Revu', category: 'PDF & Quantity Takeoff', tag: 'QA / QC' },
  { name: 'Vectorworks', category: 'Architectural Design', tag: 'Modeling' },
];

export default function SoftwareSection() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="lbl">Advanced Technology</span>
          <h2 className={styles.title}>Software We Master</h2>
          <p className={styles.subtitle}>
            Our commitment to delivering precise and efficient engineering solutions is backed by a robust portfolio of industry-leading software tools.
          </p>
        </div>

        <div className={styles.grid}>
          {SOFTWARES.map((sw) => (
            <div key={sw.name} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.badge}>{sw.tag}</span>
                <span className={styles.category}>{sw.category}</span>
              </div>
              <h3 className={styles.name}>{sw.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
