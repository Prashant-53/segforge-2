import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";
import Hero from "../../../assets/Products/WorkflowEngine/etlhero.jpg";
const highlights = [
  "Visual DAG Orchestration",
  "Enterprise Scheduling",
  "Automatic Recovery",
  "Batch & Streaming",
  "Real-Time Monitoring",
];

const WorkflowHero = () => {
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

      {/* Glow */}

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
              Workflow Engine
            </div>

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] text-slate-900 lg:text-7xl">
              Eliminate Manual
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Pipeline Operations
              </span>
              <br />
              with Intelligent Orchestration.
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-slate-600">
              Design resilient data workflows, automate execution, recover from
              failures automatically, and meet enterprise SLAs through a visual
              orchestration engine powered by Apache Flink. Coordinate complex
              dependencies with confidence while maintaining complete
              operational visibility.
            </p>

            {/* Highlights */}

            <div className="mt-10 flex flex-wrap gap-3">
              {highlights.map((item) => (
                <div
                  key={item}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 shadow-sm"
                >
                  <CheckCircle2 className="h-4 w-4 text-cyan-500" />

                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-cyan-500 px-7 py-3 font-semibold text-slate-900 transition-colors duration-300 hover:text-white"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

                <span className="relative z-10 flex items-center gap-2">
                  Build Your First Workflow
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <button className="group inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600">
                <Play className="h-4 w-4 fill-current" />
                Watch Workflow Demo
              </button>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
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
                alt="Workflow Engine Dashboard"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Floating Badge */}

            <div className="absolute -left-6 top-10 hidden rounded-2xl border border-cyan-200 bg-white px-5 py-4 shadow-xl lg:block">
              <p className="text-sm font-semibold text-slate-900">Visual DAG</p>
              <p className="mt-1 text-xs text-slate-500">
                Intelligent Orchestration
              </p>
            </div>

            {/* Floating Badge */}

            <div className="absolute -right-6 bottom-10 hidden rounded-2xl border border-cyan-200 bg-white px-5 py-4 shadow-xl lg:block">
              <p className="text-sm font-semibold text-slate-900">
                Apache Flink
              </p>
              <p className="mt-1 text-xs text-slate-500">
                Enterprise Workflow Engine
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowHero;
