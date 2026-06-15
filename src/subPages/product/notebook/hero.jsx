import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const Hero = () => {
  return (
    <section className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16  md:text-justify text-center items-center">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium mb-6">
              SegForge Notebooks
            </div>

            <h1 className="text-[2.375rem] lg:text-6xl md:text-5xl font-bold  text-slate-900 leading-[1.05]">
              From exploration
              <br />
              <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                to production in one workspace.
              </span>
            </h1>

            <p className="text-md text-slate-600 py-2 leading-relaxed mb-8 max-w-xl">
              Build data pipelines, analyze datasets, run machine learning
              experiments, and collaborate with your team from a unified
              notebook environment.
            </p>

            <div className="flex flex-col items-center r sm:flex-row gap-4 mb-10">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors font-medium flex items-center justify-center gap-2">
                Try Notebooks
                <ArrowRight className="w-5 h-5" />
              </button>

              <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-50 transition-colors font-medium flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Watch Demo
              </button>
            </div>

            {/* Benefits */}

            {/* <div className="space-y-4 flex flex-row">
              {[
                "SQL, Python & Spark support",
                "Collaborative notebook sessions",
                "Built-in visualizations",
                "AI-assisted analysis",
              ].map((item) => (
                <div key={item} className="flex items-center text-center gap-3">
                  <CheckCircle2 className="w-8 h-6 text-cyan-600" />

                  <span className="text-[14px] text-slate-700">{item}</span>
                </div>
              ))}
            </div> */}
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

            {/* Notebook Window */}

            <div className="relative bg-white border border-gray-200 rounded-3xl shadow-2xl overflow-hidden">
              {/* Top Bar */}

              <div className="bg-gray-50 border-b border-gray-200 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>

                <span className="text-sm text-slate-600">
                  customer-insights.ipynb
                </span>
              </div>

              {/* Notebook Content */}

              <div className="p-6">
                {/* SQL Cell */}

                <div className="border border-gray-200 rounded-xl mb-4 overflow-hidden">
                  <div className="bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                    SQL
                  </div>

                  <div className="p-4 font-mono text-sm text-slate-700">
                    SELECT region, SUM(revenue) FROM sales GROUP BY region;
                  </div>
                </div>

                {/* Python Cell */}

                <div className="border border-gray-200 rounded-xl mb-6 overflow-hidden">
                  <div className="bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                    Python
                  </div>

                  <div className="p-4 font-mono text-sm text-slate-700">
                    df.groupby("region") .sum() .plot()
                  </div>
                </div>

                {/* Output */}

                <div className="h-52 rounded-2xl bg-gradient-to-br from-cyan-50 to-blue-50 flex items-center justify-center">
                  <img
                    src="/images/notebook-chart.png"
                    alt="Notebook Output"
                    className="max-h-40 object-contain"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
