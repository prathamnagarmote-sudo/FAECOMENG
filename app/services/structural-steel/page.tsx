'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Zap, Layers, Settings, FileText, CheckSquare, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import SERVICES_IMAGES from '@/data/servicesImages.json';

export default function ServiceDetail() {
  return (
    <>
      {/* Dynamic Header */}
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <PageHero
          label="Engineering Services"
          title={<span style={{ fontWeight: 'bold' }}>Structural</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Steel Solutions</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Heavy structural steel detailing, connection engineering, and fabrication documentation.</span>}
        />
      </motion.div>

      <div className="divider" />

      {/* Main Content Layout */}
      <section style={{ padding: 'clamp(64px, 8vw, 120px) var(--gutter)', background: '#0E0F20' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
          
          {/* Left Column: Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none' }}>
              <ArrowLeft size={14} />
              <span>Back to Services</span>
            </Link>

            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              High-Precision <br />
              <span style={{ color: 'var(--accent)' }}>Structural Steel Solutions</span>
            </h2>

            <p style={{ fontSize: '18px', color: '#FFFFFF', lineHeight: '1.7' }}>
              We engineer heavy-duty structural steel frames for industrial, commercial, and institutional projects. Our Tekla-driven modeling ensures that connections are designed to withstand ultimate loads and fit seamlessly during on-site erection.
            </p>

            {/* Bullet List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Detailed connection design using advanced finite element analysis (FEA).
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Tekla Structures 3D modeling for error-free fabrication shop drawings (LOD 400).
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Moment connection, shear tab, and bracing connection engineering.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Integration with CNC machinery for automated steel fabrication.
                </span>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <Link href="/clients" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#FFFFFF', color: '#0F1238', padding: '16px 32px', borderRadius: '4px', textDecoration: 'none', fontWeight: '700', fontSize: '12px', letterSpacing: '0.06em' }}>
                <span>REQUEST A PROPOSAL</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          
          <div style={{ position: 'relative', height: '600px', borderRadius: '16px', overflow: 'hidden', border: '4px solid var(--accent)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <Image src={SERVICES_IMAGES['structural-steel'].expertise} alt="Structural Steel Expertise" fill style={{ objectFit: 'cover' }} />
          </div>

        </div>
      </section>

      {/* Systems Grid */}
      <section style={{ padding: '80px var(--gutter)', background: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', border: '1px solid #000000', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <Layers color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>MOMENT FRAMES</h3>
              <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>High-ductility steel structures designed to resist extreme lateral loads and seismic activity.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Rigid connections for maximum stability.', 'Unobstructed open floor plans.', 'Seismic and wind load compliance.', 'Advanced FEA connection modeling.'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#333333', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', border: '1px solid #000000', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <Zap color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>BRACED FRAMES</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Highly efficient lateral force resistance.', 'Cost-effective alternative to moment frames.', 'Concentric and eccentric bracing options.', 'Ideal for high-rise steel structures.', 'Fast erection and simplified connections.'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#333333', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', border: '1px solid #000000', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <Settings color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>STEEL TRUSSES</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Long-span capabilities for stadiums and arenas.', 'Complex geometric roof structures.', 'Lightweight tubular steel networks.', 'Optimized material-to-strength ratios.', 'Detailed node connection engineering.'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#333333', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* Advanced Steel Engineering */}
      <section style={{ padding: '80px var(--gutter)', background: '#0E0F20' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--accent)' }}>Advanced Analysis</span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#FFFFFF', marginTop: '12px' }}>Specialized Steel Engineering</h2>
            <p style={{ fontSize: '17px', fontWeight: 'bold', color: '#FFFFFF', maxWidth: '700px', margin: '16px auto 0', lineHeight: '1.7' }}>
              Structural steel demands precision. We specialize in advanced analytical methods and sophisticated detailing to ensure your steel structures achieve peak performance and safety.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <div style={{ background: '#1A1C35', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <Settings color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px' }}>CONNECTION DESIGN</h3>
              <p style={{ fontSize: '14px', color: '#FFFFFF', lineHeight: '1.7' }}>
                Steel structures rely heavily on the integrity of their connections. We engineer robust welded and bolted connections, optimizing for both fabrication efficiency and structural performance under extreme loading.
              </p>
            </div>

            <div style={{ background: '#1A1C35', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <ShieldCheck color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px' }}>PROGRESSIVE COLLAPSE</h3>
              <p style={{ fontSize: '14px', color: '#FFFFFF', lineHeight: '1.7' }}>
                We conduct advanced 3D modeling and analysis to ensure frameworks can withstand extreme loads. Our redundant load-path designs prevent progressive collapse scenarios, maximizing building safety.
              </p>
            </div>

            <div style={{ background: '#1A1C35', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <Zap color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px' }}>SEISMIC DETAILING</h3>
              <p style={{ fontSize: '14px', color: '#FFFFFF', lineHeight: '1.7' }}>
                Our advanced analysis includes high-ductility moment frames and concentrically braced frames, specifically engineered to absorb and dissipate energy during severe seismic events to protect occupants.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Why Steel Section */}
      <section style={{ padding: '100px var(--gutter)', background: '#F8F9FC' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--accent)' }}>Unmatched Strength</span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#0F1238', marginTop: '12px' }}>Why Choose Structural Steel?</h2>
            <p style={{ fontSize: '16px', color: '#4A4D6B', maxWidth: '600px', margin: '16px auto 0', lineHeight: '1.7' }}>
              Structural steel is the backbone of modern construction, offering unparalleled strength, adaptability, and long-term value for a wide range of structures.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {/* Card 1 */}
            <div style={{ background: '#FFFFFF', padding: '40px 32px', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Layers color="var(--accent)" size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#000000', marginBottom: '12px' }}>HIGH STRENGTH-TO-WEIGHT</h3>
              <p style={{ fontSize: '14px', color: '#4A4D6B', lineHeight: '1.6' }}>
                Steel boasts the highest strength-to-weight ratio of any common building material, allowing for longer spans, more open spaces, and slender columns.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{ background: '#FFFFFF', padding: '40px 32px', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <CheckCircle2 color="var(--accent)" size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#000000', marginBottom: '12px' }}>UNRIVALED DURABILITY</h3>
              <p style={{ fontSize: '14px', color: '#4A4D6B', lineHeight: '1.6' }}>
                Highly resistant to aging, shrinking, and rot, steel frameworks maintain their structural integrity over decades with minimal required maintenance.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{ background: '#FFFFFF', padding: '40px 32px', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Cpu color="var(--accent)" size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#000000', marginBottom: '12px' }}>ENDLESS ADAPTABILITY</h3>
              <p style={{ fontSize: '14px', color: '#4A4D6B', lineHeight: '1.6' }}>
                Steel frames can be easily modified, reinforced, or expanded in the future, providing building owners with unmatched flexibility as needs evolve.
              </p>
            </div>
            
            {/* Card 4 */}
            <div style={{ background: '#FFFFFF', padding: '40px 32px', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <FileText color="var(--accent)" size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#000000', marginBottom: '12px' }}>100% RECYCLABLE</h3>
              <p style={{ fontSize: '14px', color: '#4A4D6B', lineHeight: '1.6' }}>
                Structural steel is the most recycled material on the planet. It can be recycled infinitely without loss of quality, making it a highly sustainable choice.
              </p>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
