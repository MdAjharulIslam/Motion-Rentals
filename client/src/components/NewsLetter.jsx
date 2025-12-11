import React from "react";
import { motion } from "motion/react";

const NewsLetter = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      className="relative py-20 bg-blue-50"
    >
      {/* Road / motion accents */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -bottom-10 left-0 right-0 h-40 bg-gradient-to-r from-blue-100 via-blue-200/70 to-blue-100/80 skew-y-2 opacity-70" />
        <div className="absolute top-10 right-5 w-32 h-32 bg-blue-200/50 rounded-full blur-2xl" />
        <div className="absolute bottom-24 left-10 w-40 h-40 bg-sky-200/40 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-5xl mx-auto px-4 md:px-6">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-14">
          <motion.span
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white shadow-sm border border-blue-100 text-xs md:text-sm font-semibold text-blue-700"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            Motion Rentals • Smart trip alerts
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-4 text-3xl md:text-5xl font-extrabold text-blue-950 tracking-tight"
          >
            Never Miss a Ride-Ready Deal
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-3 md:mt-4 text-sm md:text-lg text-blue-800/80 max-w-2xl mx-auto"
          >
            Get early access to weekend offers, last‑minute discounts, and new car
            additions tailored to your favorite routes.
          </motion.p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="bg-white/90 backdrop-blur-xl border border-blue-100 rounded-3xl shadow-xl px-5 py-6 md:px-8 md:py-7 flex flex-col md:flex-row items-stretch gap-6 md:gap-8"
        >
          {/* Left: form */}
          <div className="md:w-3/5">
            <h3 className="text-lg md:text-xl font-semibold text-blue-950 mb-2">
              Be first in line for cheaper rentals
            </h3>
            <p className="text-xs md:text-sm text-blue-700/80 mb-4">
              Subscribe and receive alerts before prices surge on popular dates.
            </p>

            <motion.form
              className="flex flex-col sm:flex-row gap-3 sm:gap-4"
            >
              <div className="relative flex-1">
                <span className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-blue-400">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.27 7.27c.883.883 2.317.883 3.2 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </span>
                <input
                  type="email"
                  required
                  className="w-full h-11 md:h-12 pl-10 pr-3 rounded-xl border border-blue-200 bg-blue-50/60 text-sm md:text-base text-blue-900 placeholder-blue-400 outline-none focus:border-blue-400 focus:bg-white transition"
                  placeholder="Enter your email"
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.03, x: 1 }}
                whileTap={{ scale: 0.97 }}
                type="submit"
                className="h-11 md:h-12 px-5 md:px-7 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-sm md:text-base font-semibold flex items-center justify-center gap-2 shadow-md transition"
              >
                Get car deals
                <svg
                  className="w-4 h-4 md:w-5 md:h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </motion.form>

            <div className="mt-3 flex items-center gap-3 text-[11px] md:text-xs text-blue-600/80">
              <div className="flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                No spam, only ride‑ready offers.
              </div>
              <span className="hidden sm:inline-block w-px h-3 bg-blue-200" />
              <div className="hidden sm:flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Unsubscribe anytime.
              </div>
            </div>
          </div>

          {/* Right: car / stats */}
          <div className="md:w-2/5 flex flex-col justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-14 h-14 rounded-2xl bg-gradient-to-tr from-blue-600 to-sky-500 flex items-center justify-center text-white shadow-lg">
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.8}
                    d="M3 13l2-5a2 2 0 011.87-1.3h7.26A2 2 0 0118 7.7l3 5.3M5 19h1m12 0h1M5 19a2 2 0 01-2-2v-2.5A2.5 2.5 0 015.5 12H19a2 2 0 012 2v3a2 2 0 01-2 2M7 19h10"
                  />
                </svg>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-blue-500 font-semibold">
                  Motion Rentals
                </p>
                <p className="text-sm md:text-base font-semibold text-blue-950">
                  Smarter car rentals, lower prices
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 text-xs md:text-sm text-blue-800/90">
              <div className="rounded-2xl bg-blue-50 border border-blue-100 px-3 py-2">
                <p className="font-semibold text-blue-900">Up to 30% off</p>
                <p className="text-[11px] md:text-xs">
                  on early‑bird weekend bookings.
                </p>
              </div>
              <div className="rounded-2xl bg-blue-50 border border-blue-100 px-3 py-2">
                <p className="font-semibold text-blue-900">Last‑minute deals</p>
                <p className="text-[11px] md:text-xs">
                  Get notified when prices drop in your city.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default NewsLetter;
