import React from "react";
import Title from "./Title";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Cetagory = () => {
  const cetagoris = ["Sedan", "SUV", "Van", "Others"];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="flex flex-col items-center py-24 px-6 md:px-16 lg:px-24 xl:px-32"
    >
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <Title
          className=""
          title="Discover Cars by Category"
          subTitle="Browse and select your ideal car from each category"
        />
      </motion.div>

     
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="grid grid-cols-4 sm:grid-cols-2 lg:grid-cols-4 pr-4 gap-8 mt-10 w-full"
      >
        {cetagoris.map((car, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Link
              to={`/cetagory/${car}`}
              className="flex items-center justify-center text-2xl border border-gray-300 rounded-full p-10 bg-blue-100 hover:bg-blue-200 hover:scale-105 transition-all cursor-pointer"
            >
              {car}
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Cetagory;
