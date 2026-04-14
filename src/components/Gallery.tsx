"use client";

import { motion } from "framer-motion";
import { ImageIcon } from "lucide-react";

export default function Gallery() {
  return (
    <section id="gallery" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-4xl md:text-5xl font-bold mb-4"
          >
            Campus <span className="text-gradient">Gallery</span>
          </motion.h2>
          <motion.p
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ delay: 0.1 }}
             className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            A glimpse into our state-of-the-art facilities and vibrant learning environment.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-[200px]">
          {/* Large prominent placeholder */}
          <motion.div
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true }}
             className="col-span-2 row-span-2 rounded-3xl glass-card overflow-hidden relative group"
          >
            <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 bg-white/5 transition-transform duration-700 group-hover:scale-105 group-hover:bg-white/10">
              <ImageIcon className="w-12 h-12 text-gray-500 transition-transform duration-500 group-hover:scale-110" />
              <span className="text-gray-500 font-medium tracking-widest text-sm uppercase">Campus Main Building</span>
            </div>
          </motion.div>

          {/* Standard placeholders */}
          {[
            { title: "Classrooms", rowSpan: "row-span-1" },
            { title: "Library", rowSpan: "row-span-2" },
            { title: "Doubt Counter", rowSpan: "row-span-1" },
            { title: "Computer Lab", rowSpan: "row-span-1" },
            { title: "Auditorium", rowSpan: "row-span-1" },
          ].map((item, index) => (
            <motion.div
               key={index}
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               transition={{ delay: index * 0.1 }}
               className={`rounded-3xl glass-card overflow-hidden relative group ${item.rowSpan}`}
            >
              <div className="absolute inset-0 flex items-center justify-center flex-col gap-2 bg-white/5 transition-transform duration-700 group-hover:scale-105 group-hover:bg-white/10">
                <ImageIcon className="w-8 h-8 text-gray-500 transition-transform duration-500 group-hover:scale-110" />
                <span className="text-gray-500 font-medium tracking-widest text-xs uppercase text-center px-4">{item.title}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
