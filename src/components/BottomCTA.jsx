import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PhoneCall } from "lucide-react";
import { Link } from "react-router-dom";

export const CTABanner = () => {
  return (
    <section
      id="cta "
      data-testid="cta-section "
      className="relative section-pad  py-5"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 ">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-3xl border border-black bg-[#0F172B] px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-16"
        >
          <div className="absolute inset-0 bg-grid opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent_75%)]" />

          <div className="relative grid lg:grid-cols-12 gap-10 items-center">
            {/* Left */}

            <div className="lg:col-span-8 text-center lg:text-left">
              <p className="text-xs sm:text-sm font-mono uppercase tracking-[0.3em] text-white/70">
                Get Started
              </p>

              <h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                Work Your Data
              </h2>

              <p className="mt-5 max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base text-slate-300 leading-7">
                Build pipelines, orchestrate workflows, stream CDC, and power
                your lakehouse from one unified data platform.
              </p>
            </div>

            {/* Right */}

            <div className="lg:col-span-4 flex flex-col gap-4 md:items-center sm:items-center lg:items-end">
              <Link
                to="/contact"
                className="group relative flex w-full sm:w-72 lg:w-64 items-center justify-center overflow-hidden rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

                <span className="relative z-10 flex items-center gap-2">
                  Start for free
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                to="/contact"
                className="group relative flex w-full sm:w-72 lg:w-64 items-center justify-center overflow-hidden rounded-lg border border-slate-600 px-6 py-3 font-semibold text-white transition"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

                <span className="relative z-10 flex items-center gap-2">
                  <PhoneCall className="h-4 w-4" />
                  Schedule Demo
                </span>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTABanner;
