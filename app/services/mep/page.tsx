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
          title={<span style={{ fontWeight: 'bold' }}>MEP</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Engineering Solutions</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Energy-efficient HVAC, plumbing, electrical systems, and coordinated fire protection.</span>}
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
              <span style={{ color: 'var(--accent)' }}>MEP Engineering Solutions</span>
            </h2>

            <p style={{ fontSize: '18px', color: '#FFFFFF', lineHeight: '1.7' }}>
              Coordinated Mechanical, Electrical, and Plumbing (MEP) systems engineered for energy efficiency and modern building codes. We integrate mechanical layouts directly with BIM models to eliminate spatial clashes and optimize system performance.
            </p>

            {/* Bullet List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  HVAC system sizing, load calculations, duct layouts, and energy compliance reports.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Power distribution, lighting, auxiliary power, and electrical system load sizing.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Plumbing distribution systems, gas piping, and clean water layout detailing.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Fire sprinkler system layout and hydraulic load calculation coordination.
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
            <Image src={SERVICES_IMAGES.mep.expertise} alt="MEP Solutions Expertise" fill style={{ objectFit: 'cover' }} />
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>MECHANICAL (HVAC)</h3>
              <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>Advanced heating, ventilation, and air conditioning modeling.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Ductwork layout and airflow optimization.', 'Equipment sizing and schedule documentation.', 'Exhaust and ventilation compliance checking.', 'Energy modeling for LEED certification.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>ELECTRICAL LAYOUTS</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['High and low voltage power distribution networks.', 'Lighting fixture placement and photometric analysis.', 'Fire alarm and life safety system integration.', 'Panel schedule and circuitry documentation.', 'Backup generator and UPS system sizing.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>PLUMBING & PIPING</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Sanitary and storm drainage system engineering.', 'Domestic hot and cold water distribution.', 'Medical gas routing for healthcare facilities.', 'Piping isometrics and fabrication spooling.', 'Sprinkler head and fire suppression grids.'].map((item, i) => (
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

      {/* MEP Pillars - New Unique Layout */}
      <section style={{ padding: '100px var(--gutter)', background: '#0E0F20' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--accent)' }}>System Integration</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '900', color: '#FFFFFF', marginTop: '16px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              Comprehensive MEP Deliverables
            </h2>
            <p style={{ fontSize: '16px', color: '#FFFFFF', fontWeight: 'bold', maxWidth: '650px', margin: '24px auto 0', lineHeight: '1.8' }}>
              We provide construction-ready documentation across all disciplines, ensuring your facility operates at peak efficiency while strictly adhering to local codes and ASHRAE standards.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
            
            {/* Pillar 1: Mechanical */}
            <div style={{ background: '#16182C', padding: '40px', borderRadius: '12px', border: '1px solid #FFFFFF', borderTop: '4px solid var(--accent)', transition: 'transform 0.3s ease' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,107,44,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Settings color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px', textTransform: 'uppercase' }}>Mechanical (HVAC)</h3>
              <p style={{ fontSize: '15px', color: '#FFFFFF', lineHeight: '1.7' }}>
                Detailed load calculations, precise duct routing layouts, and comprehensive equipment schedules ensuring total thermal comfort and energy optimization.
              </p>
            </div>

            {/* Pillar 2: Electrical */}
            <div style={{ background: '#16182C', padding: '40px', borderRadius: '12px', border: '1px solid #FFFFFF', borderTop: '4px solid var(--accent)', transition: 'transform 0.3s ease' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,107,44,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Zap color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px', textTransform: 'uppercase' }}>Electrical Systems</h3>
              <p style={{ fontSize: '15px', color: '#FFFFFF', lineHeight: '1.7' }}>
                High and low voltage power distribution networks, lighting photometry, and backup generator sizing for resilient, code-compliant operations.
              </p>
            </div>

            {/* Pillar 3: Plumbing */}
            <div style={{ background: '#16182C', padding: '40px', borderRadius: '12px', border: '1px solid #FFFFFF', borderTop: '4px solid var(--accent)', transition: 'transform 0.3s ease' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: 'rgba(255,107,44,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                <Layers color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginBottom: '16px', textTransform: 'uppercase' }}>Plumbing & Piping</h3>
              <p style={{ fontSize: '15px', color: '#FFFFFF', lineHeight: '1.7' }}>
                Sanitary drainage, domestic water supply, and complex piping isometrics mapped perfectly to avoid structural clashes.
              </p>
            </div>

          </div>
        </div>
      </section>


    </>
  );
}
