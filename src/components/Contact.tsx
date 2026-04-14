"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  return (
    <section id="contact" className="py-24 relative border-t border-white/5 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto text-lg"
          >
            Visit our center or contact us for admissions and inquiries.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Form */}
          <motion.div
             initial={{ opacity: 0, x: -20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="space-y-8 h-full flex flex-col"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl flex-1 flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary-500/10 rounded-full blur-[80px] -z-10" />
              
              <h3 className="text-3xl font-bold text-white mb-2">Request a Callback</h3>
              <p className="text-gray-400 mb-8">Fill out the form and our counselors will contact you shortly.</p>
              
              <form 
                className="space-y-5" 
                onSubmit={(e) => {
                  e.preventDefault();
                  // Dummy submission visual logic can be handled here if needed
                  const btn = e.currentTarget.querySelector('button');
                  if (btn) {
                    btn.innerHTML = 'Message Sent! ✓';
                    btn.classList.add('bg-emerald-500', 'hover:bg-emerald-600');
                    setTimeout(() => {
                      btn.innerHTML = 'Send Message';
                      btn.classList.remove('bg-emerald-500', 'hover:bg-emerald-600');
                      (e.target as HTMLFormElement).reset();
                    }, 3000);
                  }
                }}
              >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Full Name</label>
                    <input required type="text" placeholder="John Doe" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">Phone Code</label>
                    <input required type="tel" placeholder="+91 92006 40003" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all" />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Target Exam / Course</label>
                  <select className="w-full bg-[#1c1c28] border border-white/10 rounded-xl px-4 py-3.5 text-white focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all appearance-none cursor-pointer">
                    <option value="jee">JEE (Main + Advanced)</option>
                    <option value="neet">NEET (UG)</option>
                    <option value="board">Board Classes (11th & 12th)</option>
                    <option value="foundation">Foundation (8th - 10th)</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">Message</label>
                  <textarea rows={3} placeholder="How can we help you?" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3.5 text-white placeholder:text-gray-600 focus:outline-none focus:border-primary-500 focus:ring-1 focus:ring-primary-500 transition-all resize-none"></textarea>
                </div>

                <button type="submit" className="w-full py-4 rounded-xl bg-gradient-to-r from-primary-600 to-accent-600 text-white font-bold text-lg hover:shadow-[0_0_20px_rgba(59,130,246,0.5)] transition-all flex items-center justify-center">
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Soft Contact Information Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="flex flex-col items-center justify-center p-4 glass-card rounded-2xl text-center">
                <Phone className="w-6 h-6 text-primary-400 mb-2" />
                <span className="text-xs text-gray-400">Call Us</span>
                <span className="text-sm font-medium text-white break-words">+91 9200640003</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 glass-card rounded-2xl text-center">
                <Mail className="w-6 h-6 text-accent-400 mb-2" />
                <span className="text-xs text-gray-400">Email</span>
                <span className="text-sm font-medium text-white truncate w-full">info@csquare.in</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 glass-card rounded-2xl text-center">
                <MapPin className="w-6 h-6 text-emerald-400 mb-2" />
                <span className="text-xs text-gray-400">Location</span>
                <span className="text-[10px] sm:text-xs font-medium text-white leading-tight">Opp. Gold Cinema, Anand</span>
              </div>
              <div className="flex flex-col items-center justify-center p-4 glass-card rounded-2xl text-center">
                <Clock className="w-6 h-6 text-orange-400 mb-2" />
                <span className="text-xs text-gray-400">Mon-Sat</span>
                <span className="text-sm font-medium text-white">8AM - 8PM</span>
              </div>
            </div>
          </motion.div>

          {/* Map Embed */}
          <motion.div
             initial={{ opacity: 0, x: 20 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             className="h-full min-h-[500px] lg:min-h-full rounded-3xl overflow-hidden glass-card p-2 relative"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-dark-900/40 to-transparent pointer-events-none z-10" />
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3684.7315617406207!2d72.93680147475655!3d22.551726333736095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e4f97c8f52147%3A0x322604849ceb548f!2sC%20SQUARE%20coaching%20institute%20-%20JEE%20%7C%20NEET%20%7C%20GUJCET%20%7C%20Board!5e0!3m2!1sen!2sin!4v1776153743078!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0, borderRadius: '1.2rem', filter: "invert(90%) hue-rotate(180deg)" }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Google Map Location"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
