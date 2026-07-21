import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  Database,
  Activity,
  Workflow,
  Table2,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const features = [
  "End-to-End Lineage",
  "Dataset Tracking",
  "Pipeline Visibility",
  "CDC Stream Monitoring",
  "Historical Runs",
];

const FullJourneySection = () => {
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
              <Network className="w-4 h-4" />
              Visual Lineage
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              See the complete path
              <br />
              your data takes.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Track how information flows from source systems through pipelines,
              transformations, and analytics.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Whether data originates from a database, a streaming source, or a
              file upload, you always have a clear view of its journey.
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

              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <h3 className="font-medium text-slate-900">
                  Dataset Lineage Explorer
                </h3>

                <span className="text-sm text-green-600 font-medium">Live</span>
              </div>

              <div className="p-8">
                {/* DAG */}

                <div className="flex flex-col items-center">
                  <LineageNode
                    icon={Database}
                    title="PostgreSQL"
                    subtitle="Source System"
                  />

                  <Connector />

                  <LineageNode
                    icon={Activity}
                    title="CDC Stream"
                    subtitle="Real-Time Capture"
                    highlight
                  />

                  <Connector />

                  <LineageNode
                    icon={Workflow}
                    title="Pipeline"
                    subtitle="Transformation"
                  />

                  <Connector />

                  <LineageNode
                    icon={Table2}
                    title="Iceberg Table"
                    subtitle="Curated Dataset"
                  />

                  <Connector />

                  <LineageNode
                    icon={BarChart3}
                    title="Dashboard"
                    subtitle="Consumption Layer"
                    dark
                  />
                </div>

                {/* Footer Info */}

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <MiniStat value="12" label="Dependencies" />

                  <MiniStat value="4" label="Historical Runs" />

                  <MiniStat value="100%" label="Traceable" />
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
  <div className="flex justify-center py-3">
    <div className="w-px h-10 bg-cyan-300" />
  </div>
);

const LineageNode = ({ icon: Icon, title, subtitle, highlight, dark }) => (
  <div
    className={`w-full max-w-[320px] rounded-2xl border p-5 flex items-center gap-4
    ${
      dark
        ? "bg-slate-900 text-white border-slate-900"
        : highlight
          ? "bg-cyan-50 border-cyan-200"
          : "bg-white border-slate-200"
    }`}
  >
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center
      ${dark ? "bg-slate-800" : "bg-white border border-slate-200"}`}
    >
      <Icon className={`w-5 h-5 ${dark ? "text-white" : "text-cyan-600"}`} />
    </div>

    <div>
      <h4 className={`font-semibold ${dark ? "text-white" : "text-slate-900"}`}>
        {title}
      </h4>

      <p className={`text-sm ${dark ? "text-slate-400" : "text-slate-500"}`}>
        {subtitle}
      </p>
    </div>
  </div>
);

const MiniStat = ({ value, label }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-2xl font-bold text-slate-900">{value}</div>

    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default FullJourneySection;
