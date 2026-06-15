import React from "react";
import { motion } from "framer-motion";
import { Database, Code2, BarChart3, Sparkles } from "lucide-react";

const FEATURES = [
  {
    icon: Database,
    title: "Jupyter-style experience",
    description:
      "Work in a familiar notebook environment designed for modern data teams and enterprise workflows.",
  },
  {
    icon: BarChart3,
    title: "Rich visualizations",
    description:
      "Generate charts, dashboards, and interactive insights directly from notebook outputs.",
  },
  {
    icon: Code2,
    title: "SQL + Python workflows",
    description:
      "Combine SQL, Python, and Spark within a single notebook to build end-to-end analytical workflows.",
  },
  {
    icon: Sparkles,
    title: "AI-assisted analytics",
    description:
      "Accelerate exploration with AI-powered recommendations, summaries, and intelligent code assistance.",
  },
];

const InteractiveDevelopment = () => {
  return (
    <section className="py-28 px-4 pb-0 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Background Glow */}

            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

            {/* Screenshot Container */}

            <div className="relative bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_25px_80px_rgba(15,23,42,0.08)]">
              <img
                src="/images/notebook-workspace.png"
                alt="SegForge Notebook Workspace"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              Interactive Development
            </span>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Develop, analyze,
              <br />
              and experiment in one place.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              SegForge Notebooks provide a collaborative environment for data
              engineering, analytics, and machine learning. Write code,
              visualize results, and move from exploration to production without
              switching tools.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-8">
              {FEATURES.map((feature, index) => {
                const Icon = feature.icon;

                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="flex gap-5"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                      <Icon className="w-5 h-5 text-cyan-600" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDevelopment;
