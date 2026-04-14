"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function FloatingWhatsApp() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5, y: 50 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-6 right-6 z-[100]"
    >
      <Link
        href="https://wa.me/919200640003"
        target="_blank"
        rel="noopener noreferrer"
        className="relative group flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_8px_30px_rgb(37,211,102,0.4)] hover:shadow-[0_8px_40px_rgb(37,211,102,0.6)] hover:bg-[#1ebd5b] transition-all hover:-translate-y-1"
      >
        {/* Pulsing ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#25D366] animate-ping opacity-75" style={{ animationDuration: '3s' }} />
        
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 1.83 6.362L0 24l5.885-1.782A12 12 0 1 0 11.944 0zM17.433 16.59c-.27.766-1.56 1.41-2.146 1.488-.588.077-1.124.238-3.411-.708-2.753-1.144-4.52-4.004-4.656-4.186-.134-.183-1.111-1.481-1.111-2.825s.696-2.008.938-2.257c.241-.249.525-.312.698-.312.172 0 .346.002.502.009.155.008.375-.061.588.455.213.515.727 1.777.792 1.905.064.128.106.279.021.448-.085.169-.128.275-.256.425-.128.149-.271.32-.384.425-.123.116-.255.244-.117.48.138.236.616 1.018 1.326 1.644.916.808 1.685 1.06 1.921 1.176.236.115.374.095.512-.061.138-.157.597-.698.758-.938.161-.24.321-.199.536-.12.215.08.1363.642 1.597.722.235.08.406.12.464.187.058.067.058.388-.212 1.154z"/>
        </svg>

        {/* Tooltip */}
        <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 py-2 px-4 rounded-xl glass bg-dark-900/90 text-white text-sm font-medium whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 group-hover:-translate-x-2 transition-all shadow-xl">
          Chat with us!
        </div>
      </Link>
    </motion.div>
  );
}
