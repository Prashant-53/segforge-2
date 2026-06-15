import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  BookOpen,
  BarChart3,
  Brain,
  Terminal,
  Clock3,
  CheckCircle2,
} from "lucide-react";

const features = [
  "Time Travel Queries",
  "Apache Superset",
  "Interactive Notebooks",
  "Flink SQL",
  "Batch & Streaming Analytics",
];

const AnalyticsWithoutCopies = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              Analytics Without Copies
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Analyze data where it lives.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Run analytics, build dashboards, explore historical versions of
              data, and power AI workloads directly from your lakehouse—without
              creating duplicate datasets or moving data between systems.
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
            <div className="relative h-[600px] bg-white border border-slate-200 rounded-[32px] shadow-[0_30px_80px_rgba(15,23,42,0.08)] overflow-hidden">
              {/* Lakehouse Core */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                <div className="w-56 h-56 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 flex flex-col items-center justify-center shadow-lg">
                  <Database className="w-12 h-12 text-cyan-600 mb-4" />

                  <h3 className="text-2xl font-bold text-slate-900">
                    Lakehouse
                  </h3>

                  <p className="text-slate-500 mt-2">Single Source of Truth</p>
                </div>
              </div>

              {/* Consumer Nodes */}

              <ConsumerNode
                icon={BookOpen}
                label="Notebooks"
                className="top-12 left-1/2 -translate-x-1/2"
              />

              <ConsumerNode
                icon={BarChart3}
                label="Superset"
                className="left-12 top-1/2 -translate-y-1/2"
              />

              <ConsumerNode
                icon={Terminal}
                label="Flink SQL"
                className="right-12 top-1/2 -translate-y-1/2"
              />

              <ConsumerNode
                icon={Brain}
                label="AI / ML"
                className="bottom-12 left-1/2 -translate-x-1/2"
              />

              <ConsumerNode
                icon={Clock3}
                label="Time Travel"
                className="right-20 top-20"
              />

              {/* Connections */}

              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 800 600"
              >
                {/* Top */}

                <line
                  x1="400"
                  y1="160"
                  x2="400"
                  y2="245"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Left */}

                <line
                  x1="220"
                  y1="300"
                  x2="315"
                  y2="300"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Right */}

                <line
                  x1="485"
                  y1="300"
                  x2="580"
                  y2="300"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Bottom */}

                <line
                  x1="400"
                  y1="355"
                  x2="400"
                  y2="450"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />

                {/* Time Travel */}

                <line
                  x1="485"
                  y1="235"
                  x2="620"
                  y2="140"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ConsumerNode = ({ icon: Icon, label, className }) => {
  return (
    <div className={`absolute ${className}`}>
      <div className="w-32 h-32 rounded-2xl bg-white border border-slate-200 flex flex-col items-center justify-center shadow-sm">
        <Icon className="w-6 h-6 text-cyan-600 mb-3" />

        <span className="text-sm font-medium text-slate-700">{label}</span>
      </div>
    </div>
  );
};

export default AnalyticsWithoutCopies;
