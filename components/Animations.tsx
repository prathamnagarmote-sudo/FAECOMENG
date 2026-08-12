'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

export const StaggerContainer = ({ children, className = '', delayOrder = 0 }) => {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
      variants={{
        hidden: {},
        show: {
          transition: {
            staggerChildren: 0.15,
            delayChildren: delayOrder * 0.2,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
};

export const FadeUp = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 30 },
        show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
      }}
      initial={delay ? "hidden" : undefined}
      whileInView={delay ? "show" : undefined}
      viewport={delay ? { once: true, amount: 0.1 } : undefined}
      transition={delay ? { delay, duration: 0.8, ease: [0.16, 1, 0.3, 1] } : undefined}
    >
      {children}
    </motion.div>
  );
};

export const PopIn = ({ children, className = '', delay = 0 }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, scale: 0.8 },
        show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 150, damping: 12, delay } },
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </motion.div>
  );
};

export const ScaleIn = ({ children, className = '' }) => {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, scale: 0.95 },
        show: { opacity: 1, scale: 1, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
};

export const ParallaxImage = ({ children, className = '', offset = 50 }) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [-offset, offset]);

  return (
    <div ref={ref} className={className} style={{ overflow: 'hidden' }}>
      <motion.div style={{ y, width: '100%', height: '100%' }}>
        {children}
      </motion.div>
    </div>
  );
};
