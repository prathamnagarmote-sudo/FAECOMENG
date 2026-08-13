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
          title={<span style={{ fontWeight: 'bold' }}>Insulated</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>Concrete Form (ICF) Solutions</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Disaster-resistant, high-R-value, and acoustically insulated structural wall engineering.</span>}
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
              <span style={{ color: 'var(--accent)' }}>Insulated Concrete Form (ICF) Solutions</span>
            </h2>

            <p style={{ fontSize: '18px', color: '#FFFFFF', lineHeight: '1.7' }}>
              We provide specialized ICF structural engineering for energy-efficient developments. Our designs optimize reinforcement steel layouts within insulating concrete forms, delivering structures that resist seismic, fire, and extreme weather loads.
            </p>

            {/* Bullet List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Reinforced concrete core structural design for commercial and residential ICF systems.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Optimized rebar layouts to ease concrete placement and prevent voids.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Seismic and high-wind lateral load path calculations for ICF walls.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Integration with timber floor framing and structural steel roof connections.
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
            <Image src={SERVICES_IMAGES.icf.expertise} alt="ICF Solutions Expertise" fill style={{ objectFit: 'cover' }} />
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>ICF WALL SYSTEMS</h3>
              <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>Load-bearing and shear walls with unparalleled energy efficiency and strength.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['High R-value continuous thermal insulation.', 'Superior soundproofing (high STC rating).', '4-hour fire resistance standards.', 'Disaster-resilient monolithic concrete cores.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>INTEGRATED FLOOR SYSTEMS</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['EPS decking systems for suspended concrete floors.', 'Radiant floor heating integration.', 'Clear-span designs minimizing interior columns.', 'Seamless wall-to-floor concrete pours.', 'Vibration dampening and acoustic isolation.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>ENERGY OPTIMIZATION</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Net-Zero and Passive House compliant designs.', 'Elimination of thermal bridging.', 'Reduced HVAC loads and mechanical requirements.', 'Moisture and mold resistance engineering.', 'Sustainable, low waste construction practices.'].map((item, i) => (
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

      {/* ICF Core Advantages - New Unique Layout */}
      <section style={{ padding: '100px var(--gutter)', background: '#0E0F20', position: 'relative', overflow: 'hidden' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--accent)' }}>Advanced Building Systems</span>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '900', color: '#FFFFFF', marginTop: '16px', letterSpacing: '-0.02em', textTransform: 'uppercase' }}>
              The ICF Advantage
            </h2>
            <p style={{ fontSize: '16px', color: '#A0AABF', maxWidth: '600px', margin: '24px auto 0', lineHeight: '1.8' }}>
              Insulating Concrete Forms offer unparalleled structural integrity, extreme energy efficiency, and total disaster resilience—merging the strength of reinforced concrete with continuous EPS insulation.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
            
            {/* Feature 1 */}
            <div style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,107,44,0.3)', padding: '50px', borderRadius: '0 40px 0 40px', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '40px', background: 'var(--accent)', color: '#000', fontWeight: '900', fontSize: '24px', padding: '10px 20px', borderRadius: '8px' }}>
                01
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginTop: '20px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Extreme Disaster Resilience</h3>
              <p style={{ fontSize: '17px', color: '#FFFFFF', lineHeight: '1.7' }}>
                With a solid reinforced concrete core, ICF structures can withstand hurricane-force winds, seismic events, and fire with ratings up to 4 hours.
              </p>
            </div>

            {/* Feature 2 */}
            <div style={{ background: 'linear-gradient(145deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)', border: '1px solid rgba(255,107,44,0.3)', padding: '50px', borderRadius: '40px 0 40px 0', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '-20px', left: '40px', background: 'var(--accent)', color: '#000', fontWeight: '900', fontSize: '24px', padding: '10px 20px', borderRadius: '8px' }}>
                02
              </div>
              <h3 style={{ fontSize: '20px', fontWeight: '800', color: '#FFFFFF', marginTop: '20px', marginBottom: '16px', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Continuous Thermal Mass</h3>
              <p style={{ fontSize: '17px', color: '#FFFFFF', lineHeight: '1.7' }}>
                Dual layers of EPS foam eliminate thermal bridging entirely, providing R-values well above code and slashing HVAC requirements.
              </p>
            </div>

          </div>
        </div>
      </section>


    </>
  );
}
