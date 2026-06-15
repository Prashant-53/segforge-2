import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Workflow,
  Radio,
  Database,
  BarChart3,
  Brain,
  Layers,
} from "lucide-react";

const WhySegForgeHero = () => {
  const capabilities = [
    {
      title: "ETL",
      icon: Workflow,
    },
    {
      title: "CDC",
      icon: Radio,
    },
    {
      title: "Lakehouse",
      icon: Database,
    },
    {
      title: "Analytics",
      icon: BarChart3,
    },
    {
      title: "MLOps",
      icon: Brain,
    },
  ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
      {/* Background */}

      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* CONTENT */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            Why SegForge
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.05]">
            The modern data platform,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              RE Imagined.
            </span>
          </h1>

          <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-3xl mx-auto">
            SegForge brings data integration, real-time pipelines, lakehouse
            analytics, governance, and machine learning into a single open
            platform.
          </p>

          {/* <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Built on open standards and designed for modern data teams, SegForge
            removes the complexity of fragmented tools so organizations can
            focus on turning data into value.
          </p> */}

          <div className="mt-5 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center justify-center gap-2 font-medium">
              Join Early Access
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="px-8 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center justify-center gap-2 font-medium">
              <Play className="w-4 h-4" />
              View Architecture
            </button>
          </div>
        </motion.div>

        {/* VISUAL */}
      </div>
    </section>
  );
};

export default WhySegForgeHero;
