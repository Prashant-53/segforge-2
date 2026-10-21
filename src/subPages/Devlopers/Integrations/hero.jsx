import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlugZap, Database, Cloud, Workflow } from "lucide-react";
import { Link } from "react-router-dom";

import Hero from "../../../assets/Devlopers/Integrations/hero.webp";

const IntegrationsHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-28 pb-20 sm:pt-32 sm:pb-24 lg:pt-36 lg:pb-28">
      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Background Glow */}

      <motion.div
        animate={{
          scale: [1, 1.08, 1],
          x: [-40, 40, -40],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-0 h-72 w-72 rounded-full bg-cyan-400/10 blur-[120px] sm:h-96 sm:w-96 lg:h-[550px] lg:w-[550px] lg:blur-[170px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          x: [40, -40, 40],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px] sm:h-[420px] sm:w-[420px] lg:h-[600px] lg:w-[600px] lg:blur-[180px]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <PlugZap className="h-4 w-4" />
              Integrations
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-none text-slate-900 sm:text-5xl lg:text-5xl">
              Connect your
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                entire data ecosystem.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-base leading-7 text-md text-slate-600 ">
              Seg Forge acts as the central integration hub for modern data
              platforms by connecting operational databases, cloud storage,
              streaming systems, analytics engines, orchestration platforms, and
              AI workflows through one unified experience.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-cyan-500 px-7 py-3 font-semibold text-slate-900 transition-colors duration-300 hover:text-white"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

                <span className="relative z-10 flex items-center gap-2">
                  Request Integration
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>

            {/* Quick Highlights */}

            <div className="mt-12 grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Database className="h-6 w-6 text-cyan-600" />

                <div>
                  <p className="font-semibold text-slate-900">100+ Sources</p>
                  <p className="text-sm text-slate-500">
                    Databases & Warehouses
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <Cloud className="h-6 w-6 text-cyan-600" />

                <div>
                  <p className="font-semibold text-slate-900">Cloud Native</p>
                  <p className="text-sm text-slate-500">
                    Multi-Cloud Connectivity
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />

            {/* Image */}

            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src={Hero}
                alt="Seg Forge Integration Architecture"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsHero;
