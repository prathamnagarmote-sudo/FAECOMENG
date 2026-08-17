'use client';

import { motion } from 'framer-motion';
import { Layers, ShieldCheck, Cpu, HardHat, CheckCircle2 } from 'lucide-react';
import styles from './EngineeringMethodologySection.module.css';

const WORKFLOW_STEPS = [
  {
    num: '01',
    icon: Layers,
    title: 'Feasibility & Structural Load Path Audit',
    desc: 'Deep-dive evaluation of architectural plans, gravity loads, wind & seismic requirements, site conditions, and building code constraints.',
    tag: 'CONCEPT PHASE',
  },
  {
    num: '02',
    icon: Cpu,
    title: '3D BIM & Finite Element Calculation',
    desc: 'Parametric 3D modeling (Tekla/Revit) paired with rigorous structural analysis in SAP2000, RISA 3D, STAAD.Pro, and Tekla Tedds.',
    tag: 'DESIGN & MODELING',
  },
  {
    num: '03',
    icon: ShieldCheck,
    title: 'PE/SE Stamping & Quality Assurance',
    desc: 'Rigorous peer review, structural optimization, code compliance verification, and licensed Professional Engineering sign-off across US states.',
    tag: 'PE REVIEW & STAMP',
  },
  {
    num: '04',
    icon: HardHat,
    title: 'Construction Detailing & Field Support',
    desc: 'Complete shop drawings, fabrication plans, BOQ quantity takeoff, and ongoing field coordination to ensure seamless execution on site.',
    tag: 'BUILD & HANDOVER',
  },
];

const BUILDING_CODES = [
  'IBC (International Building Code)',
  'ASCE 7 (Minimum Design Loads)',
  'ACI 318 (Building Code for Structural Concrete)',
  'AISC 360 (Specification for Structural Steel Buildings)',
  'AISI S100 (Cold-Formed Steel Specification)',
  'NBCC (National Building Code of Canada)',
  'Eurocode / BS EN Standards',
];

export default function EngineeringMethodologySection() {
  return (
    <section className={styles.methodologySection}>
      <div className={styles.container}>
        
        {/* Header */}
        <div className={styles.header}>
          <div className={styles.eyebrowTag}>
            <span className={styles.eyebrowLine} />
            <span>ENGINEERING EXCELLENCE PROTOCOL</span>
          </div>
          <h2 className={styles.title}>Our 4-Stage Delivery Methodology</h2>
          <div className={styles.titleLine} />
          <p className={styles.subtitle}>
            Every structural calculation and BIM model at FAECOM follows a disciplined, multi-tier quality assurance framework to ensure zero site errors, maximum cost-efficiency, and 100% code compliance.
          </p>
        </div>

        {/* 4-Step Grid */}
        <div className={styles.grid}>
          {WORKFLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.num}
                className={styles.card}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className={styles.cardTop}>
                  <span className={styles.stepNum}>{step.num}</span>
                  <span className={styles.stepTag}>{step.tag}</span>
                </div>
                
                <div className={styles.iconCircle}>
                  <Icon size={24} strokeWidth={1.8} className={styles.iconSvg} />
                </div>

                <h3 className={styles.cardTitle}>{step.title}</h3>
                <p className={styles.cardDesc}>{step.desc}</p>
              </motion.div>
            );
          })}
        </div>

        {/* Global Building Codes Mastery Strip */}
        <motion.div
          className={styles.codesBanner}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <div className={styles.codesHeader}>
            <CheckCircle2 size={20} className={styles.codesCheckIcon} />
            <h4>GLOBAL BUILDING CODE MASTERY & COMPLIANCE</h4>
          </div>

          <div className={styles.codesGrid}>
            {BUILDING_CODES.map((code) => (
              <div key={code} className={styles.codePill}>
                <span className={styles.codeDot} />
                <span>{code}</span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
