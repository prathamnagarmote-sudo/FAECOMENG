'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, ArrowRight, ShieldCheck, Cpu, Zap, Layers } from 'lucide-react';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import SoftwareSection from '@/components/SoftwareSection';

export default function ServiceDetail() {
  return (
    <>
      {/* Dynamic Header */}
      <PageHero
        label="Engineering Services"
        title="Wood"
        titleEm="And Mass Timber Engineering"
        subtitle="High-performance timber, CLT, and glulam systems marrying natural aesthetics with structural excellence."
      />

      <div className="divider" />

      {/* Main Content Layout */}
      <section style={{ padding: 'clamp(64px, 8vw, 120px) var(--gutter)', background: '#FFFFFF' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: '64px', alignItems: 'center' }}>
          
          {/* Left Column: Copy */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none' }}>
              <ArrowLeft size={14} />
              <span>Back to Services</span>
            </Link>

            <h2 style={{ fontSize: 'clamp(28px, 4vw, 44px)', fontWeight: '800', color: '#0F1238', letterSpacing: '-0.02em', lineHeight: '1.1' }}>
              High-Precision <br />
              <span style={{ color: 'var(--accent)' }}>Wood And Mass Timber Engineering</span>
            </h2>

            <p style={{ fontSize: '15px', color: '#4A4D6B', lineHeight: '1.7' }}>
              We combine traditional timber frame craftsmanship with state-of-the-art Mass Timber engineering. From Cross-Laminated Timber (CLT) floor systems to glulam trusses, our team coordinates carbon-negative structural solutions.
            </p>

            {/* Bullet List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '13.5px', color: '#1E224E', fontWeight: '500', lineHeight: '1.5' }}>
                  Cross-Laminated Timber (CLT) and Glue-Laminated Timber (Glulam) system layout and sizing.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '13.5px', color: '#1E224E', fontWeight: '500', lineHeight: '1.5' }}>
                  Connection detailing for high-load timber joints and hybrid steel-wood connectors.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '13.5px', color: '#1E224E', fontWeight: '500', lineHeight: '1.5' }}>
                  BIM-coordinated wood framing layouts with exact CNC fabrication coordinates.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '13.5px', color: '#1E224E', fontWeight: '500', lineHeight: '1.5' }}>
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

          {/* Right Column: Dynamic Graphic Panel */}
          <div style={{ position: 'relative', width: '100%', height: '560px', borderRadius: '8px', overflow: 'hidden', boxShadow: '0 20px 48px rgba(0,0,0,0.08)' }}>
            <Image
              src="/images/about_building.png"
              alt="Wood And Mass Timber Engineering"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

        </div>
      </section>

      <div className="divider" />

      {/* Tech Stack used */}
      <section style={{ padding: '80px var(--gutter)', background: '#F8F9FC' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', textAlign: 'center' }}>
          <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--accent)' }}>Design Stack</span>
          <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0F1238', margin: '12px 0 32px 0', letterSpacing: '-0.01em' }}>Software & Tools We Employ</h3>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '16px' }}>
            
            <div style={{ padding: '14px 28px', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#0F1238', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              Dlubal RFEM
            </div>
            <div style={{ padding: '14px 28px', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#0F1238', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              RISA-3D
            </div>
            <div style={{ padding: '14px 28px', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#0F1238', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              Revit BIM
            </div>
            <div style={{ padding: '14px 28px', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#0F1238', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              Cadwork
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <CtaSection />
    </>
  );
}
