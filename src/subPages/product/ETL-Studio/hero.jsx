import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import ETLHero from "../../../assets/Products/ETL/etlhero.jpg";

const ETLStudioHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white pt-36 pb-24">
      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 20,
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

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ================= LEFT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              ETL Studio
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-[1.05] text-slate-900 lg:text-5xl">
              Move from
              <br />
              Point-Solution Chaos
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                to Unified ETL Excellence.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-md leading-8 text-slate-600">
              Design, execute, monitor, and optimize production-grade data
              pipelines in a single visual workspace powered by Apache Flink and
              Apache Iceberg. Build once, deploy anywhere, and orchestrate
              enterprise-scale workflows with confidence.
            </p>

            {/* Highlights */}

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">
              {/* Primary */}

              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-cyan-500 px-7 py-3 font-semibold text-slate-900 transition-colors duration-300 hover:text-white"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

                <span className="relative z-10 flex items-center gap-2">
                  Build Your First Pipeline
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              {/* Secondary */}

              <button className="group inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600">
                <Play className="h-4 w-4 fill-current" />
                Watch Demo
              </button>
            </div>
          </motion.div>

          {/* ================= RIGHT ================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src={ETLHero}
                alt="Seg Forge ETL Studio"
                className="h-full w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ETLStudioHero;
