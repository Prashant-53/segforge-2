import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Workflow,
  GitBranch,
  FileCheck,
  Database,
  Fingerprint,
} from "lucide-react";

const features = [
  "OpenLineage Support",
  "PII Tracking",
  "Auditability",
  "DataHub Integration",
  "OpenMetadata Integration",
  "Compliance Reporting",
];

const GovernanceComplianceSection = () => {
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Governance & Compliance
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Maintain trust, governance, and compliance.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Every data movement and transformation can be documented, audited,
              and shared across governance systems.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Track sensitive data usage, support compliance initiatives, and
              maintain a complete history of how information flows throughout
              the organization.
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

              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50">
                <h3 className="font-medium text-slate-900">
                  Governance Ecosystem
                </h3>
              </div>

              <div className="p-8">
                {/* Pipeline */}

                <Node
                  icon={Workflow}
                  title="Pipeline"
                  subtitle="Data Processing"
                />

                <Connector />

                {/* OpenLineage */}

                <Node
                  icon={GitBranch}
                  title="OpenLineage Events"
                  subtitle="Metadata & Lineage"
                  highlight
                />

                <Connector />

                {/* Ecosystem */}

                <div className="grid grid-cols-3 gap-4">
                  <IntegrationCard title="DataHub" />

                  <IntegrationCard title="Marquez" />

                  <IntegrationCard title="OpenMetadata" />
                </div>

                <Connector />

                {/* Compliance */}

                <Node
                  icon={FileCheck}
                  title="Compliance Reports"
                  subtitle="Audit & Governance"
                  dark
                />

                {/* Governance Metrics */}

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <MetricCard value="100%" label="Traceable" />

                  <MetricCard value="24/7" label="Auditable" />

                  <MetricCard value="PII" label="Protected" />
                </div>

                {/* Compliance Tags */}

                <div className="flex flex-wrap gap-3 mt-8">
                  <Tag icon={Fingerprint} text="PII Tracking" />

                  <Tag icon={Database} text="Audit Logs" />

                  <Tag icon={ShieldCheck} text="Governance Ready" />
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

const Node = ({ icon: Icon, title, subtitle, highlight, dark }) => (
  <div
    className={`rounded-2xl border p-5 flex items-center gap-4
      ${
        dark
          ? "bg-slate-900 border-slate-900 text-white"
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

const IntegrationCard = ({ title }) => (
  <div className="border border-slate-200 rounded-2xl p-5 text-center bg-slate-50">
    <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mx-auto mb-3">
      <Database className="w-4 h-4 text-cyan-600" />
    </div>

    <h4 className="font-medium text-slate-900">{title}</h4>
  </div>
);

const MetricCard = ({ value, label }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-xl font-bold text-slate-900">{value}</div>

    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

const Tag = ({ icon: Icon, text }) => (
  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm">
    <Icon className="w-4 h-4" />
    {text}
  </div>
);

export default GovernanceComplianceSection;
