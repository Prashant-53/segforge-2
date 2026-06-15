import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Mail,
  Activity,
  Workflow,
  Database,
  BarChart3,
} from "lucide-react";

const features = [
  "Column-Level Lineage",
  "PII Tracking",
  "OpenLineage Events",
  "Impact Analysis",
  "Automated Documentation",
];

const SensitiveDataTrackingSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Sensitive Data Tracking
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Know exactly where sensitive data travels.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Track how data moves through pipelines, catalogs, notebooks,
              dashboards, and analytics workflows.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              When sensitive information is involved, you can quickly identify
              every system, dataset, and transformation that touches it.
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

              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">
                  Sensitive Data Lineage
                </h3>

                <div className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium">
                  PII Detected
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <LineageNode
                  icon={Mail}
                  title="Customer Email"
                  subtitle="Sensitive Field"
                  highlight
                />

                <Connector />

                <LineageNode
                  icon={Activity}
                  title="CDC Stream"
                  subtitle="Real-Time Capture"
                />

                <Connector />

                <LineageNode
                  icon={Workflow}
                  title="Pipeline"
                  subtitle="Transformation Layer"
                />

                <Connector />

                <LineageNode
                  icon={Database}
                  title="Analytics Table"
                  subtitle="Curated Dataset"
                />

                <Connector />

                <LineageNode
                  icon={BarChart3}
                  title="Dashboard"
                  subtitle="Business Reporting"
                  dark
                />

                {/* Alert Box */}

                <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-red-500 mt-0.5" />

                    <div>
                      <h4 className="font-medium text-slate-900">
                        Sensitive Data Exposure Path
                      </h4>

                      <p className="text-sm text-slate-600 mt-2">
                        Customer Email appears in 5 downstream assets across
                        analytics and reporting environments.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Stats */}

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <MetricCard value="5" label="Assets Tracked" />

                  <MetricCard value="100%" label="Traceable" />

                  <MetricCard value="PII" label="Protected" />
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
    <div className="w-px h-10 bg-red-300" />
  </div>
);

const LineageNode = ({ icon: Icon, title, subtitle, highlight, dark }) => (
  <div
    className={`rounded-2xl border p-5 flex items-center gap-4
      ${
        dark
          ? "bg-slate-900 border-slate-900 text-white"
          : highlight
            ? "bg-red-50 border-red-200"
            : "bg-white border-slate-200"
      }`}
  >
    <div
      className={`w-12 h-12 rounded-xl flex items-center justify-center
        ${dark ? "bg-slate-800" : "bg-white border border-slate-200"}`}
    >
      <Icon
        className={`w-5 h-5 ${
          highlight ? "text-red-500" : dark ? "text-white" : "text-cyan-600"
        }`}
      />
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

const MetricCard = ({ value, label }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-xl font-bold text-slate-900">{value}</div>

    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default SensitiveDataTrackingSection;
