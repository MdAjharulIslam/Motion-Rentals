import React, { useState, useEffect } from "react";
import { assets, cityList } from "../assets/assets";
import { useAppContext } from "../context/AppContext";
import { motion } from "motion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import StatCard from "./StatCard";

const Hero = () => {
  const [pickupLocation, setPickupLocation] = useState("");

  const {
    pickupDate,
    setPickupDate,
    returnDate,
    setReturnDate,
    navigate,
    cars,
  } = useAppContext();

  const handleSearch = (e) => {
    e.preventDefault();
    navigate(
      "/cars?pickupLocation=" +
        pickupLocation +
        "&pickupDate=" +
        pickupDate +
        "&returnDate=" +
        returnDate
    );
  };

  const popularCities = cars
    ? [...new Set(cars.map((car) => car.location))].slice(0, 5)
    : [];

  const totalCars = cars ? cars.length : 0;
  const availableCars = cars ? cars.filter((car) => car.isAvalible).length : 0;
  const uniqueLocations = cars
    ? new Set(cars.map((car) => car.location)).size
    : 0;
  const uniqueCategories = cars
    ? new Set(cars.map((car) => car.category)).size
    : 0;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col items-center justify-center gap-8 py-12
       bg-blue-50 text-center shadow-2xl shadow-blue-200 mt-5"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl px-4 mb-4"
      >
        <StatCard
          number={totalCars}
          suffix="+"
          label="Premium Cars"
          delay={0.1}
        />
        <StatCard
          number={availableCars}
          suffix=""
          label="Available Now"
          delay={0.2}
        />
        <StatCard
          number={uniqueLocations}
          suffix="+"
          label="Cities"
          delay={0.3}
        />
        <StatCard
          number={uniqueCategories}
          suffix="+"
          label="Categories"
          delay={0.4}
        />
      </motion.div>

      <motion.h1
        initial={false}
        animate={{
          y: [0, -10, 0],
          opacity: 1,
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "mirror",
          ease: "easeInOut",
        }}
        className="text-4xl md:text-5xl font-semibold bg-clip-text text-transparent hover:scale-110 transition"
        style={{
          backgroundImage: "linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)",
          backgroundSize: "200% 200%",
          animation: "gradientShift 1s ease infinite",
          willChange: "transform",
        }}
      >
        Step into Luxury, Comfort, and Style on the Road <br />
        <motion.span
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="p-4 text-gray-600 dark:text-gray-300"
        >
          with Our Luxury Motion Rentals
        </motion.span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 text-white px-6 py-3 rounded-full shadow-lg"
      >
        <p className="text-sm md:text-base font-semibold flex items-center gap-2">
          🎁 Special Offer: Get 20% OFF on weekend bookings! Use code: WEEKEND20
        </p>
      </motion.div>

      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="w-full max-w-5xl mx-auto px-4"
      >
        <Swiper
          modules={[Autoplay]}
          autoplay={{ delay: 2500, disableOnInteraction: false }}
          loop
          spaceBetween={30}
          slidesPerView={1}
        >
          <SwiperSlide>
            <img
              src={assets.main_car}
              alt="car 1"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={assets.main_car2}
              alt="car 2"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={assets.main_car3}
              alt="car 3"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src={assets.main_car4}
              alt="car 4"
              className="w-full rounded-xl"
            />
          </SwiperSlide>
        </Swiper>
      </motion.div>

    
      {popularCities.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-3 px-4"
        >
          <span className="text-sm font-semibold text-gray-700">Popular:</span>
          {popularCities.map((city) => (
            <motion.button
              key={city}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setPickupLocation(city)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all hover:scale-110 ${
                pickupLocation === city
                  ? "bg-primary text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-100 shadow"
              }`}
            >
              📍 {city}
            </motion.button>
          ))}
        </motion.div>
      )}

      <motion.form
  initial={{ scale: 0.95, opacity: 0, y: 50 }}
  animate={{ scale: 1, opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.4 }}
  onSubmit={handleSearch}
  className="flex flex-col md:flex-row items-center justify-between
    p-6 rounded-2xl md:rounded-full w-full max-w-4xl
    bg-white shadow-lg mx-auto gap-6"
>
  <div className="flex flex-col md:flex-row items-center gap-6 w-full">

    {/* Pickup Location */}
    <div className="flex flex-col w-full md:w-auto">
      <label className="text-sm font-medium text-gray-700">Pickup Location</label>
      <select
        required
        value={pickupLocation}
        onChange={(e) => setPickupLocation(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-300"
      >
        <option value="">Select Location</option>
        {cars &&
          [...new Set(cars.map((car) => car.location))]
            .sort()
            .map((city) => (
              <option key={city}>{city}</option>
            ))}
      </select>
    </div>

    {/* Pickup Date */}
    <div className="flex flex-col w-full md:w-auto">
      <label className="text-sm font-medium text-gray-700">Pick-up Date</label>
      <input
        type="date"
        value={pickupDate}
        required
        min={new Date().toISOString().split("T")[0]}
        onChange={(e) => setPickupDate(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-300"
      />
    </div>

    {/* Return Date */}
    <div className="flex flex-col w-full md:w-auto">
      <label className="text-sm font-medium text-gray-700">Return Date</label>
      <input
        type="date"
        value={returnDate}
        required
        min={pickupDate || new Date().toISOString().split("T")[0]}
        onChange={(e) => setReturnDate(e.target.value)}
        className="px-4 py-2 border border-gray-300 rounded-xl text-sm focus:ring-2 focus:ring-blue-300"
      />
    </div>
  </div>

  {/* Button */}
  <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className="flex items-center gap-2 px-10 py-3 bg-primary text-white rounded-full shadow-md hover:bg-primary-dull w-full md:w-auto"
  >
    <img src={assets.search_icon} className="w-5 h-5 brightness-300" />
    Search
  </motion.button>
</motion.form>


      {pickupDate && returnDate && cars && availableCars > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="flex items-center gap-2 bg-green-50 border border-green-200 px-6 py-3 rounded-full"
        >
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <p className="text-sm font-medium text-green-700">
            Great! {availableCars} cars available for your dates
          </p>
        </motion.div>
      )}
    </motion.div>
  );
};



export default Hero;
