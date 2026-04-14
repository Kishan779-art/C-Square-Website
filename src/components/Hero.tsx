"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowRight, BookOpen, Star, Trophy, Users } from "lucide-react";
import MagneticButton from "./ui/MagneticButton";

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 1000], [0, 200]);
  const y2 = useTransform(scrollY, [0, 1000], [0, -200]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Gradients */}
      <motion.div style={{ y: y1 }} className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary-600/30 rounded-full blur-[120px] -z-10 mix-blend-screen" />
      <motion.div style={{ y: y2 }} className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-accent-600/30 rounded-full blur-[100px] -z-10 mix-blend-screen" />
      <div className="absolute inset-0 bg-[#0a0a0f]/80 -z-10" />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center max-w-4xl mx-auto">
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-300">Admissions Open 2026-2027</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-tight"
          >
            Crack{" "}
            <motion.span
               initial={{ opacity: 0, scale: 0.95 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8, delay: 0.4, type: "spring", stiffness: 100 }}
               className="inline-block text-gradient"
            >
              JEE, NEET & Boards
            </motion.span>
            <br className="hidden sm:block" /> with Expert Guidance
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-base sm:text-lg lg:text-xl text-gray-400 mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Join a result-driven coaching institute trusted by 500+ students for academic excellence and competitive success
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-6"
          >
            <MagneticButton>
              <Link
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-semibold text-lg flex items-center justify-center gap-2 hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all"
              >
                Enroll Now
                <ArrowRight className="w-5 h-5" />
              </Link>
            </MagneticButton>
            <MagneticButton>
              <Link
                href="#contact"
                className="w-full sm:w-auto px-8 py-4 rounded-xl glass hover:bg-white/10 text-white font-semibold text-lg flex items-center justify-center gap-2 transition-all shadow-[0_0_0_1px_rgba(255,255,255,0.1)] hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]"
              >
                <BookOpen className="w-5 h-5 opacity-80" />
                Book Free Demo
              </Link>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="mt-10 sm:mt-14 flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-8 flex-wrap"
          >
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 glass px-5 py-3 sm:py-2.5 rounded-2xl sm:rounded-full border border-white/5 bg-white/5 w-full sm:w-auto text-center sm:text-left">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-dark-900 bg-gray-500 overflow-hidden flex justify-center items-center">
                  <img src="https://i.pravatar.cc/100?img=1" alt="student" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border-2 border-dark-900 bg-gray-500 overflow-hidden flex justify-center items-center">
                  <img src="https://i.pravatar.cc/100?img=2" alt="student" className="w-full h-full object-cover" />
                </div>
                <div className="w-8 h-8 rounded-full border-2 border-dark-900 bg-gray-500 overflow-hidden flex justify-center items-center">
                  <img src="https://i.pravatar.cc/100?img=3" alt="student" className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="text-left">
                <div className="flex items-center gap-1">
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                  <Star className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                </div>
                <p className="text-xs font-semibold text-white mt-0.5">Trusted by 500+ Students</p>
              </div>
            </div>

            <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-white/20" />

            <div className="flex items-center gap-2.5 text-gray-300">
              <div className="w-10 h-10 rounded-full bg-primary-500/20 text-primary-400 flex items-center justify-center">
                <Trophy className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-sm font-bold text-white leading-tight">Top Results</p>
                <p className="text-xs text-gray-400">in JEE & NEET 2024</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
