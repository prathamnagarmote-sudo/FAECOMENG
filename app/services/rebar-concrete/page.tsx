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
          title={<span style={{ fontWeight: 'bold' }}>Rebar</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Detailing & Concrete Solutions</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Precise placing drawings, bar lists, and concrete reinforcement detailing.</span>}
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
              <span style={{ color: 'var(--accent)' }}>Rebar Detailing & Concrete Solutions</span>
            </h2>

            <p style={{ fontSize: '18px', color: '#FFFFFF', lineHeight: '1.7' }}>
              Our rebar detailing team creates accurate concrete reinforcement drawings conforming to ACI, CRSI, and international standard codes. We provide bar bending schedules (BBS) and clear concrete layouts to streamline field operations.
            </p>

            {/* Bullet List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Reinforced concrete shop drawings showing exact bar sizes, bends, and lap splice locations.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Computer-generated Bar Bending Schedules (BBS) formatted for immediate fabrication.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Post-tensioned (PT) concrete floor slab reinforcing detailing.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Precast concrete panel detailing, anchor layouts, and pick-point calculations.
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
            <Image src={SERVICES_IMAGES['rebar-concrete'].expertise} alt="Rebar Concrete Expertise" fill style={{ objectFit: 'cover' }} />
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>REBAR PLACEMENT DRAWINGS</h3>
              <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>Comprehensive shop drawings providing exact layouts for site ironworkers.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Foundation and pile cap reinforcement.', 'Column and shear wall vertical detailing.', 'Beam and suspended slab rebar placement.', 'Staircase and ramp concrete detailing.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>BAR BENDING SCHEDULES</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Automated extraction of rebar shapes and lengths.', 'Standardized ACI bend types and hook lengths.', 'Material weight summaries for procurement.', 'Tagging systems for easy site sorting.', 'Reduction in steel wastage and offcuts.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>3D REBAR MODELING</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['LOD 400 highly detailed reinforcement models.', 'BIM clash detection with MEP and structural steel.', 'Visualization of congested reinforcement nodes.', 'Embedment and anchor bolt coordination.', 'Improved constructability in heavy concrete structures.'].map((item, i) => (
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

      {/* Rebar Deliverables - New Unique Layout */}
      <section style={{ padding: '100px var(--gutter)', background: '#0E0F20', position: 'relative' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--accent)' }}>Precision Output</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '900', color: '#FFFFFF', marginTop: '16px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              Construction-Ready Deliverables
            </h2>
            <p style={{ fontSize: '16px', color: '#FFFFFF', maxWidth: '650px', margin: '24px auto 0', lineHeight: '1.8' }}>
              Our concrete and rebar detailing outputs are designed for immediate site execution, minimizing steel wastage and perfectly coordinating with all structural embedments.
            </p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', maxWidth: '900px', margin: '0 auto' }}>
            
            {/* Horizontal Row 1 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', background: 'rgba(255,255,255,0.02)', border: '1px solid #FFFFFF', padding: '40px', borderRadius: '16px', transition: 'all 0.3s ease' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(255,107,44,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '2px dashed var(--accent)' }}>
                <FileText color="var(--accent)" size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px', letterSpacing: '0.02em' }}>Reinforcement Placement Drawings</h3>
                <p style={{ fontSize: '16px', color: '#FFFFFF', lineHeight: '1.7', fontWeight: 'bold' }}>
                  Fully detailed, clash-coordinated rebar placement drawings ensuring smooth, unambiguous communication between structural engineers and on-site fabricators.
                </p>
              </div>
            </div>

            {/* Horizontal Row 2 */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', background: 'rgba(255,255,255,0.02)', border: '1px solid #FFFFFF', padding: '40px', borderRadius: '16px', transition: 'all 0.3s ease' }}>
              <div style={{ width: '80px', height: '80px', borderRadius: '20px', background: 'rgba(255,107,44,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: '2px dashed var(--accent)' }}>
                <CheckSquare color="var(--accent)" size={32} />
              </div>
              <div>
                <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#FFFFFF', marginBottom: '12px', letterSpacing: '0.02em' }}>Bar Bending Schedules (BBS)</h3>
                <p style={{ fontSize: '16px', color: '#FFFFFF', lineHeight: '1.7', fontWeight: 'bold' }}>
                  Extremely precise schedules extracting exact bar lengths, quantities, bend angles, and ACI standard bending codes directly from the 3D model.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>


    </>
  );
}
