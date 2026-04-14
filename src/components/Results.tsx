"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useState, useRef } from "react";

const Counter = ({ end, duration = 2, suffix = "" }: { end: number, duration?: number, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / (duration * 1000);
        
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }
  }, [isInView, end, duration]);

  return (
    <span ref={ref} className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">
      {count}{suffix}
    </span>
  );
};

export default function Results() {
  return (
    <section id="results" className="py-24 relative border-y border-white/5 bg-dark-800/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Legacy of Success</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Numbers that speak for the hard work of our students and the dedication of our faculty.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center flex-shrink-0"
          >
            <div className="mb-2">
              <Counter end={500} suffix="+" />
            </div>
            <p className="text-primary-400 font-medium uppercase tracking-wider text-xs sm:text-sm text-center">Students Trained</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex flex-col items-center flex-shrink-0"
          >
            <div className="mb-2 mt-4 sm:mt-0">
              <span className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight">Top</span>
            </div>
            <p className="text-accent-400 font-medium uppercase tracking-wider text-xs sm:text-sm text-center">Consistent Top Results</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex flex-col items-center flex-shrink-0"
          >
            <div className="mb-2 mt-4 sm:mt-0">
              <Counter end={99} suffix="%" />
            </div>
            <p className="text-emerald-400 font-medium uppercase tracking-wider text-xs sm:text-sm text-center">High Success Rate</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="flex flex-col items-center flex-shrink-0"
          >
            <div className="mb-2 mt-4 sm:mt-0">
              <Counter end={100} suffix="%" />
            </div>
            <p className="text-blue-400 font-medium uppercase tracking-wider text-xs sm:text-sm text-center">Trusted by Parents</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
