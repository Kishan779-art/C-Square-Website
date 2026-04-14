"use client";

import { useRef, useEffect, useState } from "react";
import { motion, useAnimation, useMotionValue } from "framer-motion";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";

const TESTIMONIALS = [
  {
    name: "Ravi Patel",
    course: "JEE Aspirant",
    text: "Excellent atmosphere with supportive faculty. Truly focused on student success.",
    rating: 5,
  },
  {
    name: "Aarti Desai",
    course: "NEET Batch",
    text: "Best coaching experience with quality teaching and proper guidance.",
    rating: 5,
  },
  {
    name: "Kunal Shah",
    course: "Board Classes",
    text: "Peaceful environment and experienced teachers make learning easy.",
    rating: 5,
  }
];

export default function Testimonials() {
  const [width, setWidth] = useState(0);
  const carousel = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (carousel.current) {
      setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
    }
    const handleResize = () => {
      if (carousel.current) {
        setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="testimonials" className="py-24 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-900/20 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Student <span className="text-gradient">Success Stories</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg mb-4"
          >
            Don't just take our word for it. Hear from the students who have achieved their dreams with us.
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-primary-500/80 text-sm font-medium tracking-wide uppercase flex items-center justify-center gap-2"
          >
            <ChevronLeft className="w-4 h-4" /> Swipe to explore <ChevronRight className="w-4 h-4" />
          </motion.p>
        </div>

        <motion.div ref={carousel} className="cursor-grab overflow-hidden active:cursor-grabbing px-4 pb-12 -mx-4 sm:px-6 sm:-mx-6 lg:px-8 lg:-mx-8">
          <motion.div
            drag="x"
            dragConstraints={{ right: 0, left: -width }}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-8"
          >
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="h-auto min-w-[300px] sm:min-w-[400px] shrink-0"
              >
                <SpotlightCard className="p-8 h-full flex flex-col relative pointer-events-none hover:scale-[1.02] transition-transform duration-300">
                  <Quote className="absolute top-6 right-6 w-10 h-10 text-white/5" />
                  
                  <div className="flex gap-1 mb-6 relative z-10">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <p className="text-gray-300 mb-8 italic relative z-10 leading-relaxed text-lg">"{testimonial.text}"</p>
                  
                  <div className="flex items-center gap-4 mt-auto relative z-10">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-accent-600 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-white tracking-wide">{testimonial.name}</h4>
                      <p className="text-gray-400 text-sm">{testimonial.course}</p>
                    </div>
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
