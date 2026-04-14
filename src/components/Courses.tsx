"use client";

import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "./ui/SpotlightCard";

const COURSES = [
  {
    title: "JEE (Main + Advanced)",
    description: "Comprehensive preparation with concept clarity, mock tests, and performance tracking.",
    gradient: "from-blue-600/20 to-primary-600/20",
    border: "group-hover:border-primary-500/50",
    features: ["Intensive Practice Sessions", "Previous Year Question Analysis", "All India Mock Test Series"],
  },
  {
    title: "NEET (UG)",
    description: "Focused medical entrance coaching with structured study material and doubt-solving sessions.",
    gradient: "from-purple-600/20 to-accent-600/20",
    border: "group-hover:border-accent-500/50",
    features: ["NCERT Focused Curriculum", "Daily Practice Papers (DPPs)", "Special Doubt Solving Counters"],
  },
  {
    title: "Board Classes (6–12)",
    description: "Strong foundation building with personalized attention and regular assessments.",
    gradient: "from-emerald-600/20 to-teal-600/20",
    border: "group-hover:border-teal-500/50",
    features: ["Concept Clarity", "Regular Assessments", "Personalized Attention"],
  },
];

export default function Courses() {
  return (
    <section id="courses" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Our <span className="text-gradient">Programs</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Tailored curriculum designed by experts to help you achieve your academic goals.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES.map((course, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SpotlightCard className={`group p-8 h-full flex flex-col relative transition-all hover:-translate-y-2 border border-white/5 ${course.border}`}>
                <div className={`absolute inset-0 bg-gradient-to-br ${course.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                
                <h3 className="text-2xl font-bold text-white mb-3 relative z-10">{course.title}</h3>
                <p className="text-gray-400 mb-8 h-12 relative z-10">{course.description}</p>
                
                <ul className="space-y-4 mb-8 flex-1 relative z-10">
                  {course.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary-400 shrink-0 mt-0.5" />
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="#contact"
                  className="inline-flex items-center gap-2 text-white font-medium group-hover:text-primary-400 transition-colors mt-auto relative z-10"
                >
                  Learn more <ArrowRight className="w-4 h-4" />
                </Link>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
