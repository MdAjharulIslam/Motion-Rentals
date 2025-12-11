import React from "react";
import { assets } from "../assets/assets";
import { motion } from "motion/react";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mt-24 px-4 sm:px-8 lg:px-16 xl:px-24 pt-16 pb-12 bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white relative overflow-hidden border-t-2 border-blue-400/30"
    >
      
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.4),transparent)] opacity-75" />
      
      <div className="relative z-10 max-w-7xl mx-auto">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16"
        >
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="space-y-6"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="w-48 h-16 bg-white/10 hover:bg-white/20 rounded-2xl p-4 flex items-center backdrop-blur-sm border border-white/20"
            >
              <img 
                src={assets.logo} 
                alt="logo" 
                className="h-fit w-fit drop-shadow-lg"
              />
            </motion.div>
            
            <p className="text-lg leading-relaxed text-blue-100 max-w-md">
              Premium car rental service offering luxury and everyday vehicles for all your driving needs.
            </p>
            
            {/* FIXED Social Links - Single motion.div */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="flex gap-4 pt-2 items-center"
            >
              {[
                { src: assets.facebook_logo, alt: 'Facebook', label: 'Facebook' },
                { src: assets.instagram_logo, alt: 'Instagram', label: 'Instagram' },
                { src: assets.twitter_logo, alt: 'Twitter', label: 'Twitter' },
                { src: assets.gmail_logo, alt: 'Email', label: 'Email' }
              ].map((social, index) => (
                <motion.a
                  key={social.alt}
                  href="#"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -4,
                    boxShadow: '0 20px 40px rgba(59, 130, 246, 0.4)'
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative w-16 h-16 bg-gradient-to-br from-blue-400 via-blue-500 to-indigo-600 hover:from-blue-500 hover:via-blue-600 hover:to-indigo-700 rounded-2xl flex items-center justify-center backdrop-blur-md border-2 border-white/30 shadow-2xl hover:border-white/50 hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-[100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <img 
                    src={social.src} 
                    alt={social.alt} 
                    className="w-7 h-7 z-10 drop-shadow-lg filter brightness-0 invert"
                  />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {['Home', 'Browse Cars', 'List Your Car', 'About Us'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 + index * 0.05 }}
                  whileHover={{ x: 5, color: 'rgb(219 234 254)' }}
                  className="block py-2 text-blue-200 hover:text-white font-medium transition-all duration-300 border-b border-white/10 hover:border-blue-400/50"
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Resources */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
              Resources
            </h3>
            <nav className="space-y-3">
              {['Help Center', 'Terms of Service', 'Privacy Policy', 'Insurance'].map((link, index) => (
                <motion.a
                  key={link}
                  href="#"
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.35 + index * 0.05 }}
                  whileHover={{ x: 5, color: 'rgb(219 234 254)' }}
                  className="block py-2 text-blue-200 hover:text-white font-medium transition-all duration-300 border-b border-white/10 hover:border-blue-400/50"
                >
                  {link}
                </motion.a>
              ))}
            </nav>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <h3 className="text-xl font-bold mb-6 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent drop-shadow-lg">
              Contact Info
            </h3>
            <div className="space-y-4 text-blue-200">
              <div className="flex items-start space-x-3 p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/15 transition-all duration-300">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-400/80 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">1234 Luxury Drive</p>
                  <p className="text-sm">San Francisco, CA 57675</p>
                </div>
              </div>
              
              <motion.a 
                href="tel:+8801786598356"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/15 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                </div>
                <span className="font-medium group-hover:text-white">+880 1786598356</span>
              </motion.a>
              
              <motion.a 
                href="mailto:info@example.com"
                whileHover={{ x: 5 }}
                className="flex items-center space-x-3 p-4 bg-white/10 hover:bg-white/20 rounded-2xl backdrop-blur-sm border border-white/15 transition-all duration-300 group"
              >
                <div className="w-10 h-10 bg-gradient-to-br from-orange-400 to-red-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                </div>
                <span className="font-medium group-hover:text-white">motionrentals@example.com</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="pt-12 border-t border-white/15 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-blue-200"
        >
          <p>© {new Date().getFullYear()} Motion Rentals. All rights reserved.</p>
          <div className="flex items-center space-x-6">
            <motion.a href="#" whileHover={{ scale: 1.05 }} className="hover:text-white transition-colors">Privacy</motion.a>
            <span className="w-px h-4 bg-white/20" />
            <motion.a href="#" whileHover={{ scale: 1.05 }} className="hover:text-white transition-colors">Terms</motion.a>
            <span className="w-px h-4 bg-white/20" />
            <motion.a href="#" whileHover={{ scale: 1.05 }} className="hover:text-white transition-colors">Cookies</motion.a>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
