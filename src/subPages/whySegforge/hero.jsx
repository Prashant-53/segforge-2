import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Sparkles, Database, Zap } from "lucide-react";
import { Link } from "react-router-dom";

const WhySegForgeHero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-28 md:pt-36 pb-28">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,#67e8f920,transparent_60%)]" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#0f172a 1px,transparent 1px),
            linear-gradient(to bottom,#0f172a 1px,transparent 1px)
          `,
          backgroundSize: "72px 72px",
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 mb-4"
          >
            <Sparkles className="w-4 h-4 text-cyan-600" />
            <span className="text-sm font-medium text-cyan-700">
              The Open Data Operating System
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-4xl md:text-4xl lg:text-5xl font-bold tracking-tight text-slate-950 "
          >
            Build data pipelines,
            <br />
            stream changes,
            <br />
            <span className="bg-gradient-to-r from-cyan-500 via-sky-500 to-blue-600 bg-clip-text text-transparent">
              and ship analytics faster.
            </span>
          </motion.h1>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-md text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            One open platform for ETL, CDC, lakehouse analytics, orchestration,
            notebooks, governance, and MLOps.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            className="mt-2 flex flex-col sm:flex-row justify-center gap-2"
          >
            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-800 px-6 py-3 font-semibold text-black transition-colors duration-300 hover:text-white"
            >
              <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full"></span>

              <span className="relative z-10 flex items-center gap-2">
                Start Building
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>

            <Link
              to="/docs/getting-started/what-is-segforge"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-800 px-6 py-3 font-semibold text-black transition-colors duration-300 hover:text-white"
            >
              <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full"></span>

              <span className="relative z-10 flex items-center gap-2">
                Get Product Tour
                <ArrowRight className="w-4 h-4" />
              </span>
            </Link>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.45 }}
            className="mt-8 sm:mt-6 grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-4xl mx-auto"
          >
            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <Database className="w-6 h-6 text-cyan-600 mb-4" />
              <h3 className="text-3xl font-bold text-slate-900">22+</h3>
              <p className="mt-2 text-slate-600">Visual transformation nodes</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <Zap className="w-6 h-6 text-cyan-600 mb-4" />
              <h3 className="text-3xl font-bold text-slate-900">&lt;1s</h3>
              <p className="mt-2 text-slate-600">Real-time CDC latency</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 text-left shadow-sm">
              <Sparkles className="w-6 h-6 text-cyan-600 mb-4" />
              <h3 className="text-3xl font-bold text-slate-900">Open</h3>
              <p className="mt-2 text-slate-600">
                Built on Flink, Iceberg & Nessie
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySegForgeHero;
