"use client";

import { motion } from "framer-motion";
import { Users, Trophy, Star, GraduationCap, Calendar } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";

const STATS = [
  {
    icon: <Star className="w-8 h-8 text-yellow-400" />,
    value: "4.8★",
    label: "Rated Institute",
  },
  {
    icon: <Users className="w-8 h-8 text-primary-400" />,
    value: "500+",
    label: "Students Trained",
  },
  {
    icon: <Calendar className="w-8 h-8 text-emerald-400" />,
    value: "2017",
    label: "Established Since",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-accent-400" />,
    value: "Expert",
    label: "Faculty",
  },
];

export default function Trust() {
  return (
    <section className="py-12 relative z-10 -mt-10 sm:-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {STATS.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="h-full"
            >
              <SpotlightCard className="p-6 lg:p-8 h-full flex flex-col sm:flex-row items-center text-center sm:text-left gap-4 sm:gap-6">
                <div className="p-4 rounded-xl bg-white/5 border border-white/10 relative z-10 flex-shrink-0">
                  {stat.icon}
                </div>
                <div className="relative z-10">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">{stat.value}</h3>
                  <p className="text-gray-400 text-xs sm:text-sm font-medium uppercase tracking-wider">{stat.label}</p>
                </div>
              </SpotlightCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
