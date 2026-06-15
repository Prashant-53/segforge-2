import React from "react";
import { motion } from "framer-motion";
import {
  History,
  Activity,
  RefreshCw,
  Database,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const features = [
  "Initial Snapshot",
  "Real-Time Streaming",
  "Schema Evolution",
  "Iceberg Upserts",
  "Zero-Downtime Updates",
];

const SchemaEvolutionSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <RefreshCw className="w-4 h-4" />
              Schema Evolution
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Handle growth and change without breaking pipelines.
            </h2>

            <p className="mt-6 text-md  text-slate-600 leading-relaxed max-w-xl">
              Every stream starts with a complete historical load before
              automatically transitioning into real-time updates.
            </p>

            <p className="mt-4 text-md  text-slate-600 leading-relaxed max-w-xl">
              When source schemas evolve, SegForge detects changes and updates
              downstream tables automatically, helping teams adapt without
              costly pipeline rewrites.
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
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Header */}

              <div className="px-8 py-5 border-b border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-900">
                  Stream Lifecycle
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  From initial load to continuous synchronization
                </p>
              </div>

              <div className="p-10">
                {/* Timeline */}

                <div className="flex flex-col gap-8">
                  <TimelineStep
                    icon={History}
                    title="Historical Snapshot"
                    description="Initial full table load"
                  />

                  <TimelineArrow />

                  <TimelineStep
                    icon={Activity}
                    title="Real-Time CDC"
                    description="Continuous change capture"
                  />

                  <TimelineArrow />

                  <TimelineStep
                    icon={RefreshCw}
                    title="Schema Change Detected"
                    description="New columns and updates discovered"
                  />

                  <TimelineArrow />

                  <TimelineStep
                    icon={RefreshCw}
                    title="Automatic Update"
                    description="Target tables updated automatically"
                  />

                  <TimelineArrow />

                  <TimelineStep
                    icon={Database}
                    title="Lakehouse Table"
                    description="Always current and query-ready"
                    highlight
                  />
                </div>

                {/* Bottom Status */}

                <div className="mt-10 rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        Schema Sync Status
                      </h4>

                      <p className="text-sm text-slate-600 mt-1">
                        All downstream tables are up to date.
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-green-600 font-medium">
                      <CheckCircle2 className="w-5 h-5" />
                      Synced
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

const TimelineArrow = () => (
  <div className="flex justify-center">
    <ArrowRight className="w-5 h-5 text-cyan-400 rotate-90" />
  </div>
);

const TimelineStep = ({ icon: Icon, title, description, highlight }) => (
  <div
    className={`flex items-center gap-4 p-4 rounded-2xl border ${
      highlight ? "bg-cyan-50 border-cyan-200" : "border-slate-200"
    }`}
  >
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center ${
        highlight ? "bg-white" : "bg-slate-50"
      }`}
    >
      <Icon className="w-5 h-5 text-cyan-600" />
    </div>

    <div>
      <h4 className="font-semibold text-slate-900">{title}</h4>

      <p className="text-sm text-slate-500 mt-1">{description}</p>
    </div>
  </div>
);

export default SchemaEvolutionSection;
