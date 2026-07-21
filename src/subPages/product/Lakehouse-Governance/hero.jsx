import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Database,
  Workflow,
  Network,
  BarChart3,
} from "lucide-react";

const DataLineageHero = () => {
  return (
    <>
      <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
        {/* Background */}

        <div className="absolute inset-0 bg-grid opacity-[0.03]" />

        <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 ">
            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
                <Network className="w-4 h-4" />
                Data Lineage
              </div>

              <h1 className="text-[2.375rem] lg:text-6xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                See how data moves
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  across your business.
                </span>
              </h1>

              <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
                Follow every dataset from source to destination with complete
                visibility.
              </p>

              <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
                Understand where data came from, how it changed, and where it is
                used—all from a single interactive lineage view.
              </p>

              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                {" "}
                <button className="w-full sm:w-auto px-6 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center gap-2 font-medium">
                  View Lineage Graph
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button className="w-full sm:w-auto px-6 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                  <Play className="w-4 h-4" />
                  Book Demo
                </button>
              </div>
            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white border border-slate-200 rounded-[32px] p-5 sm:p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                {/* Source Systems */}

                <div className="flex justify-center">
                  <div className="w-full max-w-[224px] h-28 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 flex flex-col items-center justify-center">
                    <Database className="w-8 h-8 text-cyan-600 mb-2" />

                    <h3 className="font-semibold text-slate-900">
                      Source Systems
                    </h3>
                  </div>
                </div>

                {/* Connector */}

                <div className="flex justify-center py-5">
                  <div className="w-px h-10 bg-cyan-300" />
                </div>

                {/* Pipelines */}

                <div className="flex justify-center">
                  <div className="w-full max-w-[256px] h-28 rounded-3xl border border-slate-200 bg-slate-50 flex flex-col items-center justify-center">
                    <Workflow className="w-8 h-8 text-cyan-600 mb-2" />

                    <h3 className="font-semibold text-slate-900">Pipelines</h3>
                  </div>
                </div>

                {/* Connector */}

                <div className="flex justify-center py-5">
                  <div className="w-px h-10 bg-cyan-300" />
                </div>

                {/* Lakehouse */}

                <div className="flex justify-center">
                  <div className="w-full max-w-[256px] h-28 rounded-3xl border border-slate-200 bg-white flex flex-col items-center justify-center">
                    <Database className="w-8 h-8 text-cyan-600 mb-2" />

                    <h3 className="font-semibold text-slate-900">Lakehouse</h3>
                  </div>
                </div>

                {/* Connector */}

                <div className="flex justify-center py-5">
                  <div className="w-px h-10 bg-cyan-300" />
                </div>

                {/* Dashboards */}

                <div className="flex justify-center">
                  <div className="w-full max-w-[256px] h-28 rounded-3xl bg-slate-900 text-white flex flex-col items-center justify-center">
                    <BarChart3 className="w-8 h-8 mb-2" />

                    <h3 className="font-semibold">Dashboards</h3>
                  </div>
                </div>

                {/* Lineage Connections */}

                <div className="mt-8 flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
                    <Network className="w-4 h-4" />
                    Interactive Lineage Graph
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DataLineageHero;
