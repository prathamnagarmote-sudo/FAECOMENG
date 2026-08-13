'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Zap, Layers, Leaf, Flame, Timer, Heart } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import SoftwareSection from '@/components/SoftwareSection';
import SERVICES_IMAGES from '@/data/servicesImages.json';
import { Settings, FileText, CheckSquare } from 'lucide-react';

export default function ServiceDetail() {
  return (
    <>
      {/* Dynamic Header */}
      <PageHero
        label="Engineering Services"
        title={<span style={{ fontWeight: 'bold' }}>Wood</span>}
        titleEm={<span style={{ fontWeight: 'bold' }}>And Mass Timber Engineering</span>}
        subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>High-performance timber, CLT, and glulam systems marrying natural aesthetics with structural excellence.</span>}
      />

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

            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '900', color: '#FFFFFF', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              High-Precision <br />
              <span style={{ color: 'var(--accent)' }}>Wood And Mass Timber Engineering</span>
            </h2>

            <p style={{ fontSize: '18px', color: '#FFFFFF', lineHeight: '1.7' }}>
              We combine traditional timber frame craftsmanship with state-of-the-art Mass Timber engineering. From Cross-Laminated Timber (CLT) floor systems to glulam trusses, our team coordinates carbon-negative structural solutions.
            </p>

            {/* Bullet List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Cross-Laminated Timber (CLT) and Glue-Laminated Timber (Glulam) system layout and sizing.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Connection detailing for high-load timber joints and hybrid steel-wood connectors.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  BIM-coordinated wood framing layouts with exact CNC fabrication coordinates.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Material optimization to achieve maximum sustainability and carbon-negative footprints.
                </span>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <Link href="/clients" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: '#0F1238', color: '#FFFFFF', padding: '16px 32px', borderRadius: '4px', textDecoration: 'none', fontWeight: '700', fontSize: '12px', letterSpacing: '0.06em' }}>
                <span>REQUEST A PROPOSAL</span>
                <ArrowRight size={14} />
              </Link>
            </div>
          </div>
          
          <div style={{ position: 'relative', height: '600px', borderRadius: '16px', overflow: 'hidden', border: '4px solid var(--accent)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <Image src={SERVICES_IMAGES.timber.expertise} alt="Timber Expertise" fill style={{ objectFit: 'cover' }} />
          </div>

        </div>
      </section>

      {/* Systems Grid */}
      <section style={{ padding: '80px var(--gutter)', background: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', border: '1px solid #000000', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <Settings color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>CROSS-LAMINATED TIMBER (CLT)</h3>
              <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>Mass timber floor and wall systems providing exceptional strength and fire resistance.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Lightweight alternative to concrete and steel.', 'Rapid installation with prefabricated panels.', 'Superior thermal and acoustic performance.', 'Carbon sequestration benefits.'].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#333333', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', border: '1px solid #000000', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <Layers color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>GLULAM STRUCTURES</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Long-span capabilities for open architectural spaces.', 'Engineered beams and columns for heavy loads.', 'Custom curved profiles for unique geometry.', 'High strength-to-weight ratio.', 'Exposed natural wood aesthetics.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>HYBRID TIMBER SYSTEMS</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Integration of steel, concrete, and timber.', 'Optimized material use for towering structures.', 'Custom steel-to-timber connection detailing.', 'Enhanced ductility and seismic performance.', 'Flexible design for complex building cores.'].map((item, i) => (
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

      {/* Specialized Timber Engineering Challenges */}
      <section style={{ padding: '80px var(--gutter)', background: '#0E0F20' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--accent)' }}>Advanced Analysis</span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#FFFFFF', marginTop: '12px' }}>Specialized Timber Engineering</h2>
            <p style={{ fontSize: '17px', fontWeight: 'bold', color: '#FFFFFF', maxWidth: '600px', margin: '16px auto 0', lineHeight: '1.7' }}>
              Mass timber requires unique engineering considerations compared to traditional materials. We specialize in advanced analysis to ensure your wood structures perform flawlessly.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <div style={{ background: '#1A1C35', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <Settings color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px' }}>CONNECTION DETAILING</h3>
              <p style={{ fontSize: '14px', color: '#FFFFFF', lineHeight: '1.7' }}>
                Timber connections often govern the design. We engineer sophisticated concealed steel-plate, dowel, and glued-in rod connections that provide high ductility while maintaining the clean, natural aesthetic of exposed wood.
              </p>
            </div>

            <div style={{ background: '#1A1C35', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <Zap color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px' }}>VIBRATION ANALYSIS</h3>
              <p style={{ fontSize: '14px', color: '#FFFFFF', lineHeight: '1.7' }}>
                Because mass timber floors are significantly lighter than concrete slabs, they are more susceptible to footfall vibrations. We conduct rigorous dynamic analyses to ensure comfortable floor performance for occupants.
              </p>
            </div>

            <div style={{ background: '#1A1C35', padding: '40px', borderRadius: '16px', border: '1px solid rgba(255,255,255,0.05)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <ShieldCheck color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px' }}>MOISTURE MANAGEMENT</h3>
              <p style={{ fontSize: '14px', color: '#FFFFFF', lineHeight: '1.7' }}>
                Wood is hygroscopic and reacts to moisture. Our engineering accounts for dimensional changes (shrinkage/swelling) and details protective strategies during the construction phase to prevent water damage.
              </p>
            </div>

          </div>
        </div>
      </section>

      <div className="divider" />

      {/* Why Mass Timber Section */}
      <section style={{ padding: '100px var(--gutter)', background: '#F8F9FC' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--accent)' }}>Sustainable Innovation</span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#0F1238', marginTop: '12px' }}>Why Choose Mass Timber?</h2>
            <p style={{ fontSize: '16px', color: '#4A4D6B', maxWidth: '600px', margin: '16px auto 0', lineHeight: '1.7' }}>
              Mass timber isn't just an alternative material; it represents a paradigm shift in how we build sustainable, beautiful, and highly efficient structures.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
            {/* Card 1 */}
            <div style={{ background: '#FFFFFF', padding: '40px 32px', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Leaf color="var(--accent)" size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#000000', marginBottom: '12px' }}>CARBON NEGATIVE</h3>
              <p style={{ fontSize: '14px', color: '#4A4D6B', lineHeight: '1.6' }}>
                Wood naturally sequesters carbon dioxide. Building with mass timber locks in carbon, significantly reducing the overall carbon footprint of your project compared to traditional materials.
              </p>
            </div>

            {/* Card 2 */}
            <div style={{ background: '#FFFFFF', padding: '40px 32px', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Flame color="var(--accent)" size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#000000', marginBottom: '12px' }}>FIRE RESISTANCE</h3>
              <p style={{ fontSize: '14px', color: '#4A4D6B', lineHeight: '1.6' }}>
                Mass timber panels are designed with a predictable char rate. In the event of a fire, the outer layer chars, protecting the structural integrity of the inner core.
              </p>
            </div>

            {/* Card 3 */}
            <div style={{ background: '#FFFFFF', padding: '40px 32px', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Timer color="var(--accent)" size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#000000', marginBottom: '12px' }}>RAPID ASSEMBLY</h3>
              <p style={{ fontSize: '14px', color: '#4A4D6B', lineHeight: '1.6' }}>
                Prefabricated to exact tolerances in a factory, mass timber elements arrive on-site ready for immediate installation, accelerating construction timelines drastically.
              </p>
            </div>

            {/* Card 4 */}
            <div style={{ background: '#FFFFFF', padding: '40px 32px', borderRadius: '16px', border: '1px solid #E5E7EB', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Heart color="var(--accent)" size={28} />
              </div>
              <h3 style={{ fontSize: '18px', fontWeight: '800', color: '#000000', marginBottom: '12px' }}>BIOPHILIC DESIGN</h3>
              <p style={{ fontSize: '14px', color: '#4A4D6B', lineHeight: '1.6' }}>
                Exposed wood interiors connect occupants with nature, promoting well-being, reducing stress, and improving productivity in commercial spaces.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
