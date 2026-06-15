import React from "react";
import { motion } from "framer-motion";
import { Network, CheckCircle2, Database, Cloud, Layers } from "lucide-react";

const features = [
  "Oracle",
  "IBM DB2",
  "SQL Server",
  "PostgreSQL",
  "MySQL",
  "CDC Connectivity",
  "Unified Workspaces",
];

const HybridConnectivitySection = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Network className="w-4 h-4" />
              Hybrid Connectivity
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Connect systems across cloud and on-prem environments.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Modern cloud services and legacy enterprise systems rarely live in
              the same place.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              SegForge creates a unified operating layer that connects
              databases, applications, and storage platforms regardless of where
              they are hosted.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Manage everything from a single workspace while keeping
              infrastructure distributed.
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

          {/* VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Sources */}

              <div className="grid grid-cols-2 gap-4">
                <SourceCard title="Oracle" />
                <SourceCard title="SQL Server" />
                <SourceCard title="IBM DB2" />
                <SourceCard title="PostgreSQL" />
              </div>

              {/* Connector */}

              <div className="flex justify-center py-8">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* Connectivity Layer */}

              <div className="rounded-[28px] border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 text-center">
                <Layers className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                <h3 className="font-semibold text-slate-900 text-lg">
                  Hybrid Connectivity Layer
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  Connect cloud and on-prem systems through a unified operating
                  layer.
                </p>
              </div>

              {/* Connector */}

              <div className="flex justify-center py-8">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* Cloud Analytics */}

              <div className="rounded-3xl bg-slate-900 text-white p-8 text-center">
                <Cloud className="w-8 h-8 mx-auto mb-3" />

                <h3 className="font-semibold text-lg">Cloud Analytics</h3>

                <p className="text-slate-400 text-sm mt-2">
                  Unified insights across distributed systems.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SourceCard = ({ title }) => (
  <div className="border border-slate-200 rounded-2xl p-5 text-center bg-slate-50">
    <Database className="w-6 h-6 text-cyan-600 mx-auto mb-3" />
    <h4 className="font-medium text-slate-900">{title}</h4>
  </div>
);

export default HybridConnectivitySection;
