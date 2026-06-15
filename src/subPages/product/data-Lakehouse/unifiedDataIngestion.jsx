import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  FileText,
  Activity,
  GitBranch,
  ArrowRight,
  Layers3,
} from "lucide-react";

const features = [
  "CDC from PostgreSQL & MySQL",
  "Kafka Streaming",
  "Smart Router",
  "Parquet / CSV / JSON Uploads",
  "Automatic Schema Detection",
];

const UnifiedDataIngestion = () => {
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
              Unified Data Ingestion
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Bring data in,
              <br />
              however it arrives.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Whether data arrives through real-time streams, database changes,
              or file uploads, SegForge automatically routes workloads through
              the most efficient ingestion path.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />

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
            <div className="relative h-[600px] rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)] overflow-hidden">
              {/* Source Nodes */}

              <SourceNode
                icon={Database}
                label="PostgreSQL"
                className="top-12 left-12"
              />

              <SourceNode
                icon={Database}
                label="MySQL"
                className="top-12 right-12"
              />

              <SourceNode
                icon={Activity}
                label="Kafka"
                className="bottom-48 left-12"
              />

              <SourceNode
                icon={FileText}
                label="Files"
                className="bottom-48 right-12"
              />

              {/* Smart Router */}

              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="w-44 h-44 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 flex flex-col items-center justify-center shadow-lg">
                  <GitBranch className="w-8 h-8 text-cyan-600 mb-3" />

                  <h3 className="font-semibold text-slate-900">Smart Router</h3>

                  <p className="text-xs text-slate-500 mt-1 text-center px-4">
                    Selects the optimal ingestion path
                  </p>
                </div>
              </div>

              {/* Iceberg Tables */}

              <div className="absolute left-1/2 bottom-10 -translate-x-1/2">
                <div className="px-8 py-5 rounded-2xl bg-slate-900 text-white flex items-center gap-3 shadow-lg">
                  <Layers3 className="w-5 h-5" />

                  <span className="font-medium">Iceberg Tables</span>
                </div>
              </div>

              {/* Connector Lines */}

              <svg
                className="absolute inset-0 w-full h-full pointer-events-none"
                viewBox="0 0 800 600"
              >
                {/* PostgreSQL */}

                <path
                  d="M150 120 C250 180 300 220 400 300"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 6"
                />

                {/* MySQL */}

                <path
                  d="M650 120 C550 180 500 220 400 300"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 6"
                />

                {/* Kafka */}

                <path
                  d="M150 420 C250 380 300 340 400 300"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 6"
                />

                {/* Files */}

                <path
                  d="M650 420 C550 380 500 340 400 300"
                  stroke="#06b6d4"
                  strokeWidth="2"
                  fill="none"
                  strokeDasharray="6 6"
                />

                {/* Router → Iceberg */}

                <path
                  d="M400 390 L400 520"
                  stroke="#06b6d4"
                  strokeWidth="2.5"
                  fill="none"
                />
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SourceNode = ({ icon: Icon, label, className }) => {
  return (
    <div className={`absolute ${className}`}>
      <div className="w-32 h-32 rounded-2xl border border-slate-200 bg-white flex flex-col items-center justify-center">
        <Icon className="w-6 h-6 text-cyan-600 mb-3" />

        <span className="text-sm font-medium text-slate-700">{label}</span>
      </div>
    </div>
  );
};

export default UnifiedDataIngestion;
