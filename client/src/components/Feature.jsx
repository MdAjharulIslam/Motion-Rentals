import React from 'react';
import { motion } from "framer-motion";
import Title from './Title';

const Feature = () => {
  const features = [
  { icon: "🚗", title: "500+ Premium Cars", subtitle: "Luxury Fleet Available" },
  { icon: "✅", title: "Verified Partners", subtitle: "Trusted & Licensed" },
  { icon: "🔒", title: "Secure Payments", subtitle: "256-bit Encryption" },
  { icon: "⚡", title: "Instant Booking", subtitle: "Reserve in 60 Seconds" },
  { icon: "🛡️", title: "24/7 Support", subtitle: "Always Here for You" },
  { icon: "🌟", title: "Full Coverage", subtitle: "Comprehensive Insurance" },
  { icon: "💳", title: "No Hidden Fees", subtitle: "Transparent Pricing" },
  { icon: "🚙", title: "Contactless Delivery", subtitle: "Pickup at Your Door" },
  { icon: "⚙️", title: "Well Maintained", subtitle: "Regular Servicing" },
  { icon: "📱", title: "Easy Cancellation", subtitle: "Flexible Policy" },
  { icon: "🏆", title: "Top Rated", subtitle: "5-Star Reviews" },
  { icon: "🌍", title: "Nationwide Coverage", subtitle: "Multiple Locations" },
];

  return (
    <section className="relative py-24 overflow-hidden bg-blue-50 from-white via-blue-50/30 to-white">
     
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-px bg-gradient-to-r from-transparent via-blue-200/30 to-transparent"></div>
      </div>

      
      <div className="max-w-7xl mx-auto px-4 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
            <Title title={"Why Choose Us"} subTitle={" Experience premium car rentals with unmatched service and reliability"}/>
          
        </motion.div>
      </div>


      <div className="relative">
        
        <motion.div
          animate={{ x: [0, -1200] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex gap-6 mb-6"
        >
          {[...features, ...features, ...features].map((feature, index) => (
            <FeatureCard key={`forward-${index}`} feature={feature} />
          ))}
        </motion.div>

        
        <motion.div
          animate={{ x: [-1200, 0] }}
          transition={{ 
            duration: 40, 
            repeat: Infinity, 
            ease: "linear",
            repeatType: "loop"
          }}
          className="flex gap-6"
        >
          {[...features, ...features, ...features].map((feature, index) => (
            <FeatureCard key={`reverse-${index}`} feature={feature} delay={index * 0.1} />
          ))}
        </motion.div>
      </div>

     
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent pointer-events-none z-10"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent pointer-events-none z-10"></div>
    </section>
  );
};

const FeatureCard = ({ feature, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        scale: 1.05,
        y: -8,
        transition: { duration: 0.3 }
      }}
      className="group relative flex-shrink-0 w-72 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100"
    >
      {/* Gradient Background on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-transparent to-purple-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      {/* Content */}
      <div className="relative p-8 flex flex-col items-center text-center space-y-4">
        {/* Icon Container */}
        <motion.div 
          whileHover={{ rotate: [0, -10, 10, -10, 0] }}
          transition={{ duration: 0.5 }}
          className="relative"
        >
          <div className="w-20 h-20 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow duration-300 border-2 border-white group-hover:border-blue-200">
            <span className="text-4xl filter drop-shadow-sm">{feature.icon}</span>
          </div>
          {/* Glow Effect */}
          <div className="absolute inset-0 bg-blue-400/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </motion.div>

        {/* Text Content */}
        <div className="space-y-2">
          <h3 className="font-bold text-xl text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {feature.title}
          </h3>
          <p className="text-sm text-gray-600 font-medium">
            {feature.subtitle}
          </p>
        </div>

        {/* Bottom Accent Line */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 group-hover:w-3/4 transition-all duration-500 rounded-full"></div>
      </div>
    </motion.div>
  );
};

export default Feature;