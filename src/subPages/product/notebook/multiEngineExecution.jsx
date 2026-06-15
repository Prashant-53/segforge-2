import React from "react";
import { motion } from "framer-motion";
import { Play, Radio, Cpu, Database } from "lucide-react";

const MultiEngineExecution = () => {
  return (
    <section className="py-32 bg-gradient-to-b from-white to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="max-w-3xl mx-auto justify-center items-center">
          <div className="inline-flex  gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            Multi-Engine Execution
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Execute notebooks across the engines that power modern data
            platforms.
          </h2>

          <p className="mt-6 text-md text-slate-600 leading-relaxed">
            Develop once and execute across batch and streaming workloads using
            the engine best suited for the job.
          </p>
        </div>

        {/* Architecture Diagram */}

        <div className="mt-24">
          <div className="relative max-w-5xl mx-auto">
            {/* Notebook */}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex justify-center"
            >
              <div className="px-10 py-6 bg-white border border-slate-200 rounded-3xl shadow-lg">
                <div className="text-center">
                  <p className="text-sm uppercase tracking-widest text-cyan-600 mb-2">
                    Interface
                  </p>

                  <h3 className="text-2xl font-semibold text-slate-900">
                    SegForge Notebooks
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Line */}

            <div className="h-20 flex justify-center">
              <div className="w-px bg-gradient-to-b from-cyan-400 to-blue-500" />
            </div>

            {/* Execution Layer */}

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="px-12 py-6 rounded-3xl bg-gradient-to-r from-cyan-50 to-blue-50 border border-cyan-200">
                <h3 className="text-xl font-semibold text-slate-900 text-center">
                  Execution Layer
                </h3>
              </div>
            </motion.div>

            {/* Line */}

            <div className="h-20 flex justify-center">
              <div className="w-px bg-gradient-to-b from-cyan-400 to-blue-500" />
            </div>

            {/* Engines */}

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Flink SQL",
                  icon: Database,
                },
                {
                  title: "PyFlink",
                  icon: Cpu,
                },
                {
                  title: "Trino",
                  icon: Play,
                },
              ].map((engine) => {
                const Icon = engine.icon;

                return (
                  <motion.div
                    key={engine.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-white border border-slate-200 rounded-3xl p-8 text-center shadow-sm"
                  >
                    <div className="w-14 h-14 mx-auto rounded-2xl bg-cyan-50 flex items-center justify-center mb-4">
                      <Icon className="w-6 h-6 text-cyan-600" />
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900">
                      {engine.title}
                    </h3>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Runtime Capabilities */}

        <div className="mt-24 flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3">
            <Play className="w-5 h-5 text-cyan-600" />
            <span className="text-slate-700 font-medium">Batch Mode</span>
          </div>

          <div className="flex items-center gap-3">
            <Radio className="w-5 h-5 text-cyan-600" />
            <span className="text-slate-700 font-medium">Streaming Mode</span>
          </div>

          <div className="flex items-center gap-3">
            <Radio className="w-5 h-5 text-cyan-600" />
            <span className="text-slate-700 font-medium">
              Real-Time Streaming
            </span>
          </div>

          <div className="flex items-center gap-3">
            <Cpu className="w-5 h-5 text-cyan-600" />
            <span className="text-slate-700 font-medium">
              Distributed Execution
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MultiEngineExecution;
