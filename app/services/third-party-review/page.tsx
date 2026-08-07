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
        title="Third"
        titleEm="Party Review & Value Engineering"
        subtitle="Independent peer reviews, safety audits, and material cost optimization analysis."
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
              <span style={{ color: 'var(--accent)' }}>Third Party Review & Value Engineering</span>
            </h2>

            <p style={{ fontSize: '15px', color: '#4A4D6B', lineHeight: '1.7' }}>
              We perform third-party structural design audits, code reviews, and comprehensive value engineering. Our objective is to safeguard structural safety while optimizing structural geometry and materials to reduce construction costs and schedule timelines.
            </p>

            {/* Bullet List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '13.5px', color: '#1E224E', fontWeight: '500', lineHeight: '1.5' }}>
                  Independent structural peer review and code compliance audits (IBC, Eurocodes, etc.).
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '13.5px', color: '#1E224E', fontWeight: '500', lineHeight: '1.5' }}>
                  Value engineering analysis to optimize concrete strength classes, steel profiles, and spans.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '13.5px', color: '#1E224E', fontWeight: '500', lineHeight: '1.5' }}>
                  Foundation and retaining system evaluation for geotechnical optimization.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <div style={{ marginTop: '4px', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', flexShrink: 0 }} />
                <span style={{ fontSize: '13.5px', color: '#1E224E', fontWeight: '500', lineHeight: '1.5' }}>
                  PE-stamped peer review reports for municipality permit clearance.
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
              src="/images/project_commercial.png"
              alt="Third Party Review & Value Engineering"
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
              ETABS
            </div>
            <div style={{ padding: '14px 28px', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#0F1238', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              SAFE
            </div>
            <div style={{ padding: '14px 28px', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#0F1238', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              SAP2000
            </div>
            <div style={{ padding: '14px 28px', background: '#FFFFFF', border: '1px solid rgba(0,0,0,0.06)', borderRadius: '6px', fontSize: '13px', fontWeight: '700', color: '#0F1238', boxShadow: '0 4px 12px rgba(0,0,0,0.02)' }}>
              Mathcad
            </div>
          </div>
        </div>
      </section>

      <div className="divider" />

      <CtaSection />
    </>
  );
}
