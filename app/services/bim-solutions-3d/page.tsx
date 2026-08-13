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
          title={<span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>BIM-integrated</span>}
          titleEm={<span style={{ fontWeight: 'bold', textTransform: 'uppercase' }}>Solutions 3D</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Coordinating architectural, structural, and mechanical systems into a single source of truth.</span>}
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
              <span style={{ color: 'var(--accent)' }}>BIM-integrated Solutions 3D</span>
            </h2>

            <p style={{ fontSize: '18px', color: '#FFFFFF', lineHeight: '1.7' }}>
              Virtual design and construction (VDC) driven by 3D BIM integration. We run comprehensive coordination workflows to resolve architectural, structural, and MEP conflicts in the cloud before the first shovel hits the ground.
            </p>

            {/* Bullet List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '16px' }}>
              
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Multi-discipline BIM synthesis combining structural, mechanical, and architectural layers.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Cloud-coordinated issue tracking and clash resolution logs using Navisworks.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  Pre-fabrication spool drawing coordination for mechanical and plumbing layouts.
                </span>
              </div>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
                <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                <span style={{ fontSize: '15px', color: '#FFFFFF', fontWeight: '500', lineHeight: '1.5' }}>
                  4D schedule sequencing and 5D cost-integration support.
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
            <Image src={SERVICES_IMAGES['bim-solutions-3d'].expertise} alt="BIM 3D Expertise" fill style={{ objectFit: 'cover' }} />
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>3D COORDINATION</h3>
              <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>Centralized digital models integrating every construction discipline.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Single-source-of-truth federated models.', 'Interdisciplinary collision detection.', 'Constructability reviews in virtual space.', 'Optimized routing for complex MEP systems.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>4D SCHEDULING</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Time-based visual construction sequencing.', 'Integration with MS Project and Primavera.', 'Site logistics and crane placement optimization.', 'Phased demolition and renovation planning.', 'Reduction in project delays and downtime.'].map((item, i) => (
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
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>5D COST ESTIMATION</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {['Automated material quantity takeoffs (QTO).', 'Real-time cost updates during design changes.', 'Detailed bill of materials (BOM) extraction.', 'Budget tracking and value engineering support.', 'Life cycle cost analysis capability.'].map((item, i) => (
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

      {/* 3D BIM Impact & Value - New Unique Layout */}
      <section style={{ padding: '100px var(--gutter)', background: '#0E0F20' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '80px' }}>
            <span style={{ fontSize: '11px', fontWeight: '800', textTransform: 'uppercase', letterSpacing: '0.18em', color: 'var(--accent)' }}>Value Engineering</span>
            <h2 style={{ fontSize: '36px', fontWeight: '800', color: '#FFFFFF', marginTop: '16px', letterSpacing: '-0.02em' }}>
              The Power of a Single Source of Truth
            </h2>
            <p style={{ fontSize: '16px', color: '#A0AABF', maxWidth: '650px', margin: '20px auto 0', lineHeight: '1.8' }}>
              By centralizing all architectural, structural, and MEP data into a single federated 3D model, FAECOM completely transforms how complex projects are managed.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            
            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '40px', borderRadius: '16px', textAlign: 'center', transition: 'transform 0.3s ease' }}>
              <div style={{ fontSize: '48px', fontWeight: '900', color: 'var(--accent)', marginBottom: '12px' }}>0</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Hard Clashes On-Site</h3>
              <p style={{ fontSize: '14px', color: '#8A94A6', marginTop: '12px', lineHeight: '1.6' }}>Virtual pre-construction eliminates physical rework.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '40px', borderRadius: '16px', textAlign: 'center', transition: 'transform 0.3s ease' }}>
              <div style={{ fontSize: '48px', fontWeight: '900', color: 'var(--accent)', marginBottom: '12px' }}>4D</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Time Sequencing</h3>
              <p style={{ fontSize: '14px', color: '#8A94A6', marginTop: '12px', lineHeight: '1.6' }}>Visualizing the construction schedule week by week.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '40px', borderRadius: '16px', textAlign: 'center', transition: 'transform 0.3s ease' }}>
              <div style={{ fontSize: '48px', fontWeight: '900', color: 'var(--accent)', marginBottom: '12px' }}>5D</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Cost Integration</h3>
              <p style={{ fontSize: '14px', color: '#8A94A6', marginTop: '12px', lineHeight: '1.6' }}>Automated QTOs for hyper-accurate budgeting.</p>
            </div>

            <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.1)', padding: '40px', borderRadius: '16px', textAlign: 'center', transition: 'transform 0.3s ease' }}>
              <div style={{ fontSize: '48px', fontWeight: '900', color: 'var(--accent)', marginBottom: '12px' }}>LOD</div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', color: '#FFFFFF', textTransform: 'uppercase', letterSpacing: '0.05em' }}>300 - 500</h3>
              <p style={{ fontSize: '14px', color: '#8A94A6', marginTop: '12px', lineHeight: '1.6' }}>From design development to as-built facilities management.</p>
            </div>

          </div>

        </div>
      </section>

      {/* Detailed BIM Protocols Section */}
      <section style={{ padding: '80px var(--gutter)', background: '#FFFFFF', borderTop: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'flex', flexWrap: 'wrap', gap: '60px' }}>
          
          {/* Left: Detailed Text */}
          <div style={{ flex: '1 1 500px' }}>
            <h3 style={{ fontSize: '28px', fontWeight: '800', color: '#0F1238', marginBottom: '24px', letterSpacing: '-0.01em' }}>
              Advanced Integrated 3D Methodologies
            </h3>
            <p style={{ fontSize: '15px', color: '#4A4D6B', lineHeight: '1.8', marginBottom: '20px' }}>
              At FAECOM, we move beyond basic 3D modeling to fully integrated Virtual Design and Construction (VDC). Our process begins with a comprehensive BIM Execution Plan (BEP) that defines the precise Level of Development (LOD) requirements for each discipline at every project stage.
            </p>
            <p style={{ fontSize: '15px', color: '#4A4D6B', lineHeight: '1.8' }}>
              By establishing a Common Data Environment (CDE), we ensure that structural steel, timber, LGS, architectural, and MEP teams operate synchronously. This proactive environment allows us to conduct automated clash detection matrices, resolving spatial conflicts virtually before materials are even ordered for the site.
            </p>
          </div>

          {/* Right: Detailed List */}
          <div style={{ flex: '1 1 400px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <div style={{ background: '#F8F9FC', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--accent)', border: '1px solid #E5E7EB', borderLeftColor: 'var(--accent)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0F1238', marginBottom: '8px' }}>BIM Execution Plans (BEP)</h4>
              <p style={{ fontSize: '13px', color: '#4A4D6B', lineHeight: '1.6' }}>Strict protocols establishing data exchange formats, coordinate systems, and LOD progression schedules.</p>
            </div>

            <div style={{ background: '#F8F9FC', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--accent)', border: '1px solid #E5E7EB', borderLeftColor: 'var(--accent)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0F1238', marginBottom: '8px' }}>Common Data Environment (CDE)</h4>
              <p style={{ fontSize: '13px', color: '#4A4D6B', lineHeight: '1.6' }}>A centralized, cloud-based repository ensuring all stakeholders access the most current, un-siloed data.</p>
            </div>

            <div style={{ background: '#F8F9FC', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--accent)', border: '1px solid #E5E7EB', borderLeftColor: 'var(--accent)' }}>
              <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0F1238', marginBottom: '8px' }}>Interdisciplinary Coordination</h4>
              <p style={{ fontSize: '13px', color: '#4A4D6B', lineHeight: '1.6' }}>Rigorous Navisworks clash reports categorized by severity, with actionable resolution pathways.</p>
            </div>

          </div>

        </div>
      </section>


    </>
  );
}
