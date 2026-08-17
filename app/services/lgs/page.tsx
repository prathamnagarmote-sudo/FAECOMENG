'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, CheckCircle2, Settings, FileText, CheckSquare, Layers, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import PageHero from '@/components/PageHero';
import CtaSection from '@/components/CtaSection';
import LGS_DATA from '@/data/lgs.json';
export default function LGSPage() {
  return (
    <>
      <motion.div
        initial={{ y: 60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.0, ease: [0.16, 1, 0.3, 1] }}
      >
        <PageHero
          label="Engineering Services"
          title={<span style={{ fontWeight: 'bold' }}>Light Gauge Steel</span>}
          titleEm={<span style={{ fontWeight: 'bold' }}>(LGS) Solutions</span>}
          subtitle={<span style={{ color: '#000000', fontWeight: 'bold' }}>Advanced structural systems designed for fast and efficient construction.</span>}
          imageSrc="https://res.cloudinary.com/yqs3dtap/image/upload/v1786443295/1662696676169_edited_edited_edited.jpg"
        />
      </motion.div>

      <div className="divider" />

      {/* About Our LGS Expertise */}
      <section style={{ padding: 'clamp(60px, 8vw, 100px) var(--gutter)', background: '#0E0F20' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '60px', alignItems: 'center' }}>
          <div>
            <Link href="/services" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', fontSize: '12px', fontWeight: '700', letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent)', textDecoration: 'none', marginBottom: '24px' }}>
              <ArrowLeft size={14} />
              <span>Back to Services</span>
            </Link>
            <h2 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: '800', color: '#FFFFFF', marginBottom: '24px', lineHeight: 1.1 }}>
              About Our <span style={{ color: 'var(--accent)' }}>LGS Expertise</span>
            </h2>
            <p style={{ fontSize: '18px', color: '#FFFFFF', lineHeight: '1.8', marginBottom: '24px' }}>
              FAECOM has extensive experience in Affordable Housing, Residential Apartments, Hotels, Mixed-Use Developments, Modular Construction, and Multifamily Units. We provide Architectural, Structural, and MEP services for Light Gauge Steel (LGS) construction.
            </p>
            <p style={{ fontSize: '18px', color: '#FFFFFF', lineHeight: '1.8', marginBottom: '24px' }}>
              Our services are designed to help clients achieve their missions and visions with optimal financial returns through:
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                'High-quality and cost-effective services.',
                'Owner-focused solutions ensuring project success.',
                'World-class, client-oriented approaches that transform plans into successful stories.',
                'Advanced technology and engineering software integration.'
              ].map((item, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                  <CheckCircle2 size={20} color="var(--accent)" style={{ flexShrink: 0, marginTop: '4px' }} />
                  <span style={{ fontSize: '15px', color: '#FFFFFF', lineHeight: '1.6' }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div style={{ position: 'relative', height: '600px', borderRadius: '16px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.1)', boxShadow: '0 20px 40px rgba(0,0,0,0.4)' }}>
            <Image src="/images/expertise_lgs.png" alt="LGS Expertise" fill style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </section>

      {/* Systems Grid */}
      <section style={{ padding: '80px var(--gutter)', background: '#FFFFFF', borderTop: '1px solid #E5E7EB', borderBottom: '1px solid #E5E7EB' }}>
        <div style={{ maxWidth: 'var(--max-w)', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            {/* LGS FRAMING SYSTEM */}
            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', border: '1px solid #000000', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <Settings color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>LGS FRAMING SYSTEM</h3>
              <p style={{ fontSize: '14px', color: '#333333', lineHeight: 1.7, marginBottom: '20px' }}>Modern structural systems designed for fast and efficient construction of modern framed buildings.</p>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Cost and weight reductions of 30-40% in CFS construction.',
                  'Multiple CFS stud ranges for multistory Residential Apartments, Affordable Housing, Modular Construction, and Facade Solutions.',
                  'Widely used in Load-Bearing structures, Modular Construction, and Infill Wall Systems.',
                  'Panel and stick-build systems for fast Construction, Suitable for indigenous buildings and high-separation walls.',
                  'Ideal bearing systems for low-rise homes where Construction speed is critical.'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#333333', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* LOAD BEARING SYSTEM */}
            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', border: '1px solid #000000', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <Layers color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>LOAD BEARING SYSTEM</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Feasibility analysis for structures like multistory apartments, modular structures, and affordable housing.',
                  'Design and analysis of LGS for walls, floors, and trusses.',
                  'Revit structural drawings and detailed documentation.',
                  'Construction GA and shop drawings for walls, floors, and trusses.',
                  'Machine file generation for Howick, FrameCAD, and other roll-formed machines.',
                  'Utilization of REVIT, MWF STRUCT SOFT, Vertex-BD, Scottdale and FRAMECAD.'
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent)', marginTop: '8px', flexShrink: 0 }} />
                    <span style={{ fontSize: '13px', color: '#333333', lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* INFILL SYSTEM */}
            <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', border: '1px solid #000000', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', border: '1px solid var(--accent)' }}>
                <Zap color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000', marginBottom: '20px' }}>INFILL SYSTEM</h3>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {[
                  'Design and analysis of LGS infill walls and façade supporting elements.',
                  'Revit structural drawings with precise connection details.',
                  'Construction GA and shop drawings for walls.',
                  'Building elevation designs integrated with SFS framing.',
                  'Material take-off for accurate project estimation.'
                ].map((item, i) => (
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
          
          <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', border: '1px solid #000000', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent)' }}>
                <FileText color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000' }}>STRUCTURAL DRAWINGS PACKAGE</h3>
            </div>
            <p style={{ fontSize: '15px', color: '#333333', lineHeight: '1.7', marginBottom: '32px' }}>
              FAECOM provides detailed Structural Drawings Packages that include essential documentation for fabrication and construction.
            </p>
            <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
              <Image src={LGS_DATA.structuralDrawingsPackageImage} alt="Drawings Package" fill style={{ objectFit: 'cover' }} />
            </div>
          </div>

          <div style={{ background: '#FFFFFF', padding: '40px', borderRadius: '16px', border: '1px solid #000000', boxShadow: '0 10px 30px rgba(0,0,0,0.15)' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(255, 107, 44, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid var(--accent)' }}>
                <CheckSquare color="var(--accent)" size={24} />
              </div>
              <h3 style={{ fontSize: '24px', fontWeight: '800', color: '#000000' }}>DESIGN CALCULATION REPORT</h3>
            </div>
            <p style={{ fontSize: '15px', color: '#333333', lineHeight: '1.7', marginBottom: '32px' }}>
              FAECOM provides comprehensive Design Calculation Reports to ensure structural stability, compliance, and efficiency.
            </p>
            <div style={{ position: 'relative', width: '100%', height: '300px', borderRadius: '12px', overflow: 'hidden', border: '1px solid #E5E7EB' }}>
              <Image src="/images/featured_residential.png" alt="Calculation Report" fill style={{ objectFit: 'cover', objectPosition: 'center' }} />
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
