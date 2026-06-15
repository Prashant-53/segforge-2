import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  CheckCircle2,
  Workflow,
  Radio,
  Clock3,
  Database,
  TrendingUp,
} from "lucide-react";

const features = [
  "Pipeline Health",
  "CDC Monitoring",
  "Events Per Second",
  "Latency Tracking",
  "Kafka Lag Monitoring",
  "Data Freshness",
];

const PipelineObservabilitySection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              Pipeline Observability
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              See every pipeline and stream in motion.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Monitor execution health, throughput, latency, and freshness
              across batch and real-time workloads.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Quickly identify failed runs, long-running jobs, and CDC streams
              that require attention.
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
              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-900">
                  Real-Time Operations Dashboard
                </h3>
              </div>

              <div className="p-6 sm:p-8">
                {/* Pipeline Metrics */}

                <MetricPanel
                  title="Pipeline Runs"
                  icon={Workflow}
                  metrics={[
                    ["Success Rate", "99.7%"],
                    ["Avg Duration", "2m 18s"],
                  ]}
                />

                <Connector />

                {/* CDC Metrics */}

                <MetricPanel
                  title="CDC Streams"
                  icon={Radio}
                  metrics={[
                    ["Events/sec", "12.4K"],
                    ["Latency", "230ms"],
                    ["Kafka Lag", "0"],
                  ]}
                />

                <Connector />

                {/* Freshness */}

                <div className="rounded-3xl bg-slate-900 text-white p-8 text-center">
                  <Database className="w-10 h-10 mx-auto mb-4" />

                  <h3 className="font-semibold text-lg">Fresh Data</h3>

                  <p className="text-slate-400 text-sm mt-2">
                    Updated 12 seconds ago
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Connector = () => (
  <div className="flex justify-center py-4">
    <div className="w-px h-10 bg-cyan-300" />
  </div>
);

const MetricPanel = ({ title, icon: Icon, metrics }) => (
  <div className="rounded-3xl border border-slate-200 p-5">
    <div className="flex items-center gap-3 mb-5">
      <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center">
        <Icon className="w-5 h-5 text-cyan-600" />
      </div>

      <h4 className="font-semibold text-slate-900">{title}</h4>
    </div>

    <div className="space-y-3">
      {metrics.map(([label, value]) => (
        <div key={label} className="flex justify-between text-sm">
          <span className="text-slate-500">{label}</span>
          <span className="font-medium text-slate-900">{value}</span>
        </div>
      ))}
    </div>
  </div>
);

export default PipelineObservabilitySection;
