import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import { useAppContext } from "../context/AppContext";

const StatCard = ({ number, suffix = "", label, delay = 0 }) => {
  const [count, setCount] = useState(0);

  // If you need cars later, keep this
  const { cars } = useAppContext();

  useEffect(() => {
    let start = 0;
    const end = Number(number);
    const duration = 2000;
    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [number]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="bg-white rounded-xl p-4 shadow-lg hover:shadow-xl transition-all  transition-transform duration-300
  hover:scale-105
  sm:hover:scale-110
  md:hover:scale-125
  lg:hover:scale-150
  xl:hover:scale-200  hover:bg-blue-50"
    >
      <h3 className="text-3xl md:text-4xl font-bold text-primary">
        {count.toLocaleString()}
        {suffix}
      </h3>

      <p className="text-sm text-gray-600 font-medium mt-2">{label}</p>
    </motion.div>
  );
};

export default StatCard;
