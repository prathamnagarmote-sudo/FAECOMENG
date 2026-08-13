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
          title={<span style={{ fontWeight: 'bold' }}>Architectural</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>BIM Services</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Intelligent, clash-coordinated 3D Revit models built for accurate lifecycle planning.</span>}
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
              <span style={{ color: 'var(--accent)' }}>Architectural BIM Services</span>
            </h2>

            <p style={{ fontSize: '18px', color: '#FFFFFF', lineHeight: '1.7' }}>
              Our Architectural BIM services transform 2D planning drawings into multi-dimensional, intelligent databases. We align architectural design, structural framing, and MEP systems into a single, high-fidelity BIM model.
            </p>

            {/* Bullet List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  LOD 300 to LOD 400 construction-ready architectural Revit modeling.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Clash detection, interference reports, and coordination management.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Quantity takeoff (QTO) extraction directly from coordinated 3D databases.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Conversion of legacy CAD and PDF plans into parametric BIM databases.
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
            <Image src={SERVICES_IMAGES.bim.expertise} alt="Architectural BIM Expertise" fill style={{ objectFit: 'cover' }} />
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>ARCHITECTURAL MODELING</h3>
              <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>Comprehensive 3D visualizations and spatial coordination models.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Parametric families and dynamic components.', 'High-LOD interior and exterior detailing.', 'Accurate site-context modeling.', 'Cloud-based multi-disciplinary collaboration.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>CLASH DETECTION</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Automated interference checks using Navisworks.', 'Hard clash and soft clearance conflict resolution.', 'MEP, Structural, and Architectural synchronization.', 'Reduction of costly on-site rework.', 'Constructability review reports.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>POINT CLOUD TO BIM</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Laser scan to accurate 3D model conversion.', 'As-built documentation for renovation projects.', 'Heritage and historical preservation modeling.', 'Facility management and digital twin setup.', 'Precise spatial measurement processing.'].map((item, i) => (
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

      {/* BIM Lifecycle Process - New Style Idea */}
      <section style={{ padding: '80px var(--gutter)', background: '#0E0F20' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--accent)' }}>Our Methodology</span>
            <h2 style={{ fontSize: '32px', fontWeight: '800', color: '#FFFFFF', marginTop: '12px' }}>The Architectural BIM Lifecycle</h2>
            <p style={{ fontSize: '16px', color: '#FFFFFF', maxWidth: '700px', margin: '16px auto 0', lineHeight: '1.7' }}>
              We don't just build 3D models; we integrate data into every phase of the project lifecycle to ensure seamless collaboration and zero-clash execution.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '800px', margin: '0 auto' }}>
            
            {/* Step 1 */}
            <div style={{ display: 'flex', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '80px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '24px', fontWeight: '800' }}>
                01
              </div>
              <div style={{ padding: '32px', flex: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0F1238', marginBottom: '12px' }}>Conceptual Design & Scanning</h3>
                <p style={{ fontSize: '14px', color: '#4A4D6B', lineHeight: '1.7' }}>
                  Starting with raw architectural concepts or point-cloud laser scans of existing conditions, we establish the highly accurate foundational geometry for the BIM environment.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div style={{ display: 'flex', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '80px', background: '#0E0F20', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '24px', fontWeight: '800' }}>
                02
              </div>
              <div style={{ padding: '32px', flex: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0F1238', marginBottom: '12px' }}>Intelligent Modeling (LOD 300-400)</h3>
                <p style={{ fontSize: '14px', color: '#4A4D6B', lineHeight: '1.7' }}>
                  We develop the architecture in Revit, embedding rich meta-data into walls, doors, and finishes, ensuring the model serves as an accurate digital twin for cost estimation.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div style={{ display: 'flex', background: '#FFFFFF', borderRadius: '16px', border: '1px solid #E5E7EB', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
              <div style={{ width: '80px', background: 'var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#FFFFFF', fontSize: '24px', fontWeight: '800' }}>
                03
              </div>
              <div style={{ padding: '32px', flex: 1 }}>
                <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#0F1238', marginBottom: '12px' }}>Multi-Disciplinary Coordination</h3>
                <p style={{ fontSize: '14px', color: '#4A4D6B', lineHeight: '1.7' }}>
                  Using Navisworks, the architectural model is federated with structural and MEP models. We run rigorous interference checks to resolve clashes before they reach the site.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  );
}
