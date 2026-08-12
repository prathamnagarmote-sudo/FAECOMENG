import Link from 'next/link';
import Image from 'next/image';
import ServicesHero from '@/components/ServicesHero';
import { PopIn } from '@/components/Animations';

import styles from './page.module.css';

export const metadata = { title: 'Engineering Services | FAECOM INC.' };



export default function Services() {
  return (
    <>
      <ServicesHero />
      <div style={{ width: '100%', height: '1px', background: '#000000' }} />
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '100px 20px 20px', background: '#FFFFFF' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '1300px', margin: '0 auto', left: '30px' }}>
          <PopIn delay={0.1}>
            <h2 style={{ textAlign: 'center', color: '#000000', fontSize: '42px', fontWeight: 'bold', marginTop: '20px', marginBottom: '2px', textTransform: 'uppercase' }}>OUR SERVICES</h2>
            <div style={{ width: '60px', height: '3px', background: 'var(--accent)', margin: '0 auto 4px auto' }} />
            <h3 style={{ textAlign: 'center', color: 'var(--accent)', fontSize: '24px', fontWeight: 'bold', marginBottom: '5px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>COMPREHENSIVE ENGINEERING SERVICES</h3>
          </PopIn>
          <div className={styles.dynamicGrid}>
            {[
              {
                slug: 'lgs',
                title: 'LGS (Light Gauge Steel)',
                desc: 'Lightweight steel framing solutions for residential, commercial, and industrial buildings with faster construction and durability.',
                img: 'https://res.cloudinary.com/dfslgqnds/image/upload/v1/1662696676169_edited_edited_edited'
              },
              {
                slug: 'timber',
                title: 'Wood & Mass Timber',
                desc: 'Sustainable timber engineering solutions that combine strength, aesthetics, and environmental responsibility.',
                img: 'https://res.cloudinary.com/yqs3dtap/image/upload/v1786443980/wood_and_timber.png'
              },
              {
                slug: 'structural-steel',
                title: 'Structural Steel Solutions',
                desc: 'Comprehensive structural steel design and detailing for industrial plants, commercial buildings, and infrastructure projects.',
                img: 'https://res.cloudinary.com/yqs3dtap/image/upload/v1786443972/structural_steel_solutions.png'
              },
              {
                slug: 'bim',
                title: 'Architectural BIM Services',
                desc: 'Intelligent 3D BIM models that improve planning, reduce design conflicts, and enhance project coordination.',
                img: 'https://res.cloudinary.com/yqs3dtap/image/upload/v1786443962/architectural_bim_services.jpg'
              },
              {
                slug: 'bim-solutions-3d',
                title: 'BIM Integrated Solutions 3D',
                desc: 'Integrated BIM workflows across architecture, structure, and MEP disciplines for efficient project delivery.',
                img: 'https://res.cloudinary.com/yqs3dtap/image/upload/v1786443953/Bim_integrated_3d.jpg'
              },
              {
                slug: 'icf',
                title: 'ICF (Insulated Concrete Form)',
                desc: 'Energy-efficient concrete construction systems offering superior insulation, strength, and faster installation.',
                img: 'https://res.cloudinary.com/yqs3dtap/image/upload/v1786443935/ICF.jpg'
              },
              {
                slug: 'mep',
                title: 'MEP Engineering',
                desc: 'Mechanical, Electrical, and Plumbing engineering designed for safety, efficiency, and long-term performance.',
                img: 'https://res.cloudinary.com/yqs3dtap/image/upload/v1786443927/mep.jpg'
              },
              {
                slug: 'third-party-review',
                title: 'Third Party Review & Value Engineering',
                desc: 'Independent design reviews and cost optimization strategies to improve project quality and reduce unnecessary expenses.',
                img: 'https://res.cloudinary.com/yqs3dtap/image/upload/v1786444120/tekla_structures.png'
              },
              {
                slug: 'concrete-rebar',
                title: 'Concrete and Rebar Solutions',
                desc: 'Innovative concrete and rebar engineering solutions ensuring robust infrastructure design and site development.',
                img: 'https://res.cloudinary.com/yqs3dtap/image/upload/v1786443919/concrete_and_rebar_solutions.png'
              },
            ].map((s) => (
              <Link key={s.slug} href={`/services/${s.slug}`} className={styles.dynamicCard}>
                <div className={styles.dynamicCardImgWrapper}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={s.img} alt={s.title} className={styles.dynamicCardImg} loading="lazy" />
                </div>
                <div className={styles.dynamicCardContent}>
                  <h4 className={styles.dynamicCardTitle}>{s.title}</h4>
                  <p className={styles.dynamicCardDesc}>{s.desc}</p>
                  <span className={styles.dynamicCardLink}>Learn More</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div style={{ width: '100%', height: '1px', background: '#000000' }} />
      <section className={styles.featuresSection}>
        <div className={styles.featuresContainer}>
          <PopIn delay={0.1} className={styles.featuresHeader}>
            <h4>ABOUT OUR SERVICES</h4>
            <h2>BUILDING BETTER WITH INNOVATION</h2>
            <p>
              At FAECOM, we combine engineering expertise with advanced digital technologies 
              to deliver accurate, efficient, and sustainable solutions across every project stage.
            </p>
          </PopIn>
          <div className={styles.featuresGrid}>
            {[
              {
                title: 'Expert Engineers',
                desc: 'Experienced professionals delivering reliable and innovative solutions.',
                icon: 'https://img.icons8.com/ios-filled/100/ff6b00/engineer.png'
              },
              {
                title: 'Advanced Technology',
                desc: 'Utilizing modern tools and BIM workflows for better project outcomes.',
                icon: 'https://img.icons8.com/ios-filled/100/ff6b00/gear.png'
              },
              {
                title: 'Timely Delivery',
                desc: 'Committed to on-time delivery without compromising quality.',
                icon: 'https://img.icons8.com/ios-filled/100/ff6b00/clock.png'
              },
              {
                title: 'Client Satisfaction',
                desc: 'Focused on long-term relationships and client success.',
                icon: 'https://img.icons8.com/ios-filled/100/ff6b00/guarantee.png'
              }
            ].map((feature, i) => (
              <div key={i} className={styles.featureItem}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={feature.icon} alt={feature.title} className={styles.featureIcon} loading="lazy" />
                <h3 className={styles.featureTitle}>{feature.title}</h3>
                <p className={styles.featureDesc}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
