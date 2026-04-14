"use client";

import { motion } from "framer-motion";
import { BookOpen, GraduationCap, ClipboardCheck, MessageCircleQuestion } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";

const FEATURES = [
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Experienced and supportive faculty",
    description: "Learn from top educators and IIT/NIT alumni with years of teaching experience and robust support.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: <ClipboardCheck className="w-6 h-6" />,
    title: "Regular mock tests and analysis",
    description: "Detailed performance mapping through consistent testing ensuring peak exam readiness.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
  {
    icon: <MessageCircleQuestion className="w-6 h-6" />,
    title: "Dedicated doubt-solving sessions",
    description: "Immediate doubt resolution to ensure conceptual clarity at every step of your preparation.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Structured study material",
    description: "Comprehensive and curated physical & digital modules mapped perfectly with upcoming exams.",
    color: "text-orange-400",
    bg: "bg-orange-400/10",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Peaceful and focused environment",
    description: "State-of-the-art infrastructure designed explicitly to maximize focus and retention.",
    color: "text-pink-400",
    bg: "bg-pink-400/10",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    title: "Personalized student guidance",
    description: "One-on-one structured mentorship assigning individual responsibility for student evolution.",
    color: "text-teal-400",
    bg: "bg-teal-400/10",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <div className="lg:w-1/3 shrink-0">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-6"
            >
              <span className="text-sm font-medium text-primary-400">Why Us?</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Transforming <span className="text-gradient">Potential</span> into Excellence
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg mb-8"
            >
              At C SQUARE Coaching Institute, we do not just teach; we mentor. Our holistic pedagogical approach ensures that every student gets the attention they need to succeed in highly competitive exams.
            </motion.p>
          </div>

          <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {FEATURES.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="h-full"
              >
                <SpotlightCard className="p-6 h-full hover:-translate-y-1 transition-transform">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 relative z-10 ${feature.bg} ${feature.color}`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">{feature.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed relative z-10">{feature.description}</p>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
