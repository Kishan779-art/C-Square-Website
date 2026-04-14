"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function CTA() {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary-600/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-gradient-to-r from-primary-600/30 to-accent-600/30 rounded-[100%] blur-[120px] -z-10 mix-blend-screen" />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
           initial={{ opacity: 0, y: 20 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           className="glass-card p-12 md:p-16 rounded-3xl text-center border-t border-white/20 shadow-2xl relative overflow-hidden"
        >
          {/* Shine effect */}
          <div className="absolute top-0 -inset-full h-full w-1/2 z-5 block transform -skew-x-12 bg-gradient-to-r from-transparent to-white opacity-20 group-hover:animate-shine" />

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white tracking-tight">
            Start Your Journey to <span className="text-gradient">Success Today</span>
          </h2>
          
          <p className="text-gray-300 text-lg md:text-xl mb-10 max-w-2xl mx-auto">
            Enroll now for the upcoming academic session and secure your future with C SQUARE Coaching Institute.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <MagneticButton>
              <Link
                href="#contact"
                className="w-full sm:w-auto px-10 py-4 rounded-xl bg-white text-dark-900 font-bold text-lg flex items-center justify-center gap-2 hover:bg-gray-100 transition-all hover:scale-105"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="#contact"
                className="w-full sm:w-auto px-10 py-4 rounded-xl border border-white/20 text-white font-semibold text-lg flex items-center justify-center transition-all hover:bg-white/10 hover:border-white/30"
              >
                Contact Us
              </Link>
            </MagneticButton>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
