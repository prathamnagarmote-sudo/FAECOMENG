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
          title={<span style={{ fontWeight: 'bold' }}>Third</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Party Review & Value Engineering</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Independent peer reviews, safety audits, and material cost optimization analysis.</span>}
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
              <span style={{ color: 'var(--accent)' }}>Third Party Review & Value Engineering</span>
            </h2>

            <p style={{ fontSize: '18px', color: '#FFFFFF', lineHeight: '1.7' }}>
              We perform third-party structural design audits, code reviews, and comprehensive value engineering. Our objective is to safeguard structural safety while optimizing structural geometry and materials to reduce construction costs and schedule timelines.
            </p>

            {/* Bullet List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Independent structural peer review and code compliance audits (IBC, Eurocodes, etc.).
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Value engineering analysis to optimize concrete strength classes, steel profiles, and spans.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Foundation and retaining system evaluation for geotechnical optimization.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  PE-stamped peer review reports for municipality permit clearance.
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
          
          <div style={{ position: 'relative', height: '600px', borderRadius: '16px', overflow: 'hidden', border: '4px solid var(--accent)', background: '#FFFFFF', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <Image src={SERVICES_IMAGES['third-party-review'].expertise} alt="Third Party Review Expertise" fill style={{ objectFit: 'contain', padding: '20px' }} />
          </div>

        </div>
      </section>

      {/* Systems Grid */}
      <section style={{ padding: '80px var(--gutter)', background: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', border: '1px solid #000000', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <ShieldCheck color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>CODE COMPLIANCE</h3>
              <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>Rigorous evaluation against local, state, and international building codes.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['IBC, ASCE 7, ACI 318, and AISC compliance checks.', 'Seismic and wind load parameter verification.', 'Fire safety rating analysis for structural elements.', 'Identify deficiencies prior to municipal submission.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>VALUE ENGINEERING</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Alternative framing analysis for cost reduction.', 'Material strength class optimization.', 'Foundation redesign based on advanced geotechnical data.', 'Reduction of redundant reinforcements and steel weight.', 'Constructability reviews to accelerate scheduling.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>INDEPENDENT PEER REVIEW</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Unbiased, third-party structural analysis models.', 'Parallel independent load calculations.', 'Constructability and erection sequence audits.', 'Mitigation of designer liability and errors.', 'Licensed Professional Engineer (PE) stamps.'].map((item, i) => (
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

      {/* Deliverables */}
      <section style={{ padding: '80px var(--gutter)', background: '#0E0F20' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px' }}>
          
          <div style={{ background: '#0E0F20', padding: '40px', borderRadius: '16px', border: '1px solid #FFFFFF', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent)' }}>
                <FileText color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#FFFFFF' }}>VALUE ENGINEERING REPORT</h3>
            </div>
            <p style={{ fontSize: '15px', color: '#FFFFFF', lineHeight: '1.7' }}>
              FAECOM provides a comprehensive comparative analysis demonstrating precise cost savings, optimized material usage, and structural improvements without compromising safety or architectural intent.
            </p>
          </div>

          <div style={{ background: '#0E0F20', padding: '40px', borderRadius: '16px', border: '1px solid #FFFFFF', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent)' }}>
                <CheckSquare color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#FFFFFF' }}>PEER REVIEW CERTIFICATION</h3>
            </div>
            <p style={{ fontSize: '15px', color: '#FFFFFF', lineHeight: '1.7' }}>
              We issue formalized, PE-stamped letters of structural adequacy ensuring absolute compliance with all governing jurisdictions, streamlining the permitting and approval process.
            </p>
          </div>

        </div>
      </section>

    </>
  );
}
