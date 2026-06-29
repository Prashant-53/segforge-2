import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GitBranch,
  Database,
  BarChart3,
  Brain,
  Clock3,
  RefreshCcw,
  Activity,
  Bot,
} from "lucide-react";

const WorkflowHero = () => {
  return (
    <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white">
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

      {/* Cyan Glow */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-[35%] -translate-x-1/2 w-[900px] h-[500px] bg-cyan-400 rounded-full blur-[160px]"
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Hero Content */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-5xl mx-auto"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            Workflow Engine
          </div>

          <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.05]">
            Automate complex data operations
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              with confidence.
            </span>
          </h1>

          <p className="mt-8 text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Orchestrate pipelines, CDC streams, notebook workflows, and
            lakehouse operations through a unified workflow engine designed for
            enterprise reliability.
          </p>

          <p className="mt-4 text-lg text-slate-600 max-w-4xl mx-auto leading-relaxed">
            Meet critical data SLAs, reduce manual intervention, and ensure
            every workflow executes exactly when and how it should.
          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-800 px-6 py-3 font-semibold">
              <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 group-hover:w-full"></span>

              <span className="relative z-10 flex items-center gap-2">
                Build Your First Workflow
                <ArrowRight className="w-4 h-4" />
              </span>
            </button>

            <button className="rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 hover:border-slate-400 transition">
              Request a Reliability Audit
            </button>
          </div>
        </motion.div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
            <img
              src={AnalyticsHeroImg}
              alt="Analytics Teams"
              className="w-full aspect-[16/10] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WorkflowHero;
