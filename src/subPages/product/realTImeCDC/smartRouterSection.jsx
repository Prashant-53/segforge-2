import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Zap, Boxes, CheckCircle2, ArrowRight } from "lucide-react";

const features = [
  "Smart Router",
  "Automatic Optimization",
  "PyIceberg Fast Path",
  "Apache Flink Scale Path",
  "Zero Manual Tuning",
];

const SmartRouterSection = () => {
  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 ">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <GitBranch className="w-4 h-4" />
              Smart Router
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Use the right engine
              <br />
              for every workload.
            </h2>

            <p className="mt-6 text-md  text-slate-600 leading-relaxed max-w-xl">
              Not every table needs the same processing path. SegForge
              automatically chooses the most efficient execution strategy based
              on table size, throughput requirements, and workload
              characteristics.
            </p>

            <p className="mt-4 text-md  text-slate-600 leading-relaxed max-w-xl">
              Smaller datasets move quickly with lightweight processing, while
              larger workloads scale seamlessly across distributed
              infrastructure.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />

                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="relative bg-white border border-slate-200 rounded-[32px] p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Source Table */}

              <div className="flex justify-center">
                <div className="w-full max-w-xs rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                  <h3 className="font-semibold text-slate-900">Source Table</h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Incoming CDC workload
                  </p>
                </div>
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* Smart Router */}

              <div className="flex justify-center">
                <div className="w-full max-w-sm rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 p-8 text-center">
                  <GitBranch className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                  <h3 className="text-xl font-bold text-slate-900">
                    Smart Router
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Selects the optimal execution path
                  </p>
                </div>
              </div>

              {/* Branches */}

              <div className="relative mt-12">
                <div className="absolute top-0 left-1/2 w-px h-10 bg-cyan-300 -translate-x-1/2" />

                <svg
                  className="absolute top-0 left-0 w-full h-24"
                  viewBox="0 0 500 100"
                >
                  <path
                    d="M250 0 C250 30 180 40 120 80"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6 6"
                  />

                  <path
                    d="M250 0 C250 30 320 40 380 80"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    fill="none"
                    strokeDasharray="6 6"
                  />
                </svg>

                <div className="grid grid-cols-2 gap-8 pt-16">
                  {/* Fast Path */}

                  <div className="border border-slate-200 rounded-3xl p-6 bg-slate-50">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                      <Zap className="w-5 h-5 text-cyan-700" />
                    </div>

                    <h4 className="font-semibold text-slate-900">Fast Path</h4>

                    <p className="text-sm text-slate-500 mt-2">PyIceberg</p>

                    <div className="mt-4 inline-flex items-center gap-2 text-cyan-700 text-sm">
                      Small Tables
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Scale Path */}

                  <div className="border border-slate-200 rounded-3xl p-6 bg-slate-50">
                    <div className="w-12 h-12 rounded-xl bg-cyan-100 flex items-center justify-center mb-4">
                      <Boxes className="w-5 h-5 text-cyan-700" />
                    </div>

                    <h4 className="font-semibold text-slate-900">Scale Path</h4>

                    <p className="text-sm text-slate-500 mt-2">Apache Flink</p>

                    <div className="mt-4 inline-flex items-center gap-2 text-cyan-700 text-sm">
                      Large Tables
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartRouterSection;
