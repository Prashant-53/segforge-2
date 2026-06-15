import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  UserRound,
  Lock,
  Database,
  ArrowDown,
  Sparkles,
} from "lucide-react";

const features = [
  "PII Masking",
  "Hashing & Encryption",
  "Secure Credentials",
  "Fernet Encryption",
  "Runtime Protection",
];

const DataProtectionSection = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
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
              Data Protection
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Protect sensitive information before it reaches downstream
              systems.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Apply masking, hashing, and encryption policies directly within
              pipelines.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Sensitive data can be protected automatically before it reaches
              storage, analytics platforms, or external systems, reducing risk
              across the entire data lifecycle.
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

              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-900">
                  Data Protection Pipeline
                </h3>
              </div>

              <div className="p-6 sm:p-8">
                {/* Customer Data */}

                <FlowCard
                  icon={UserRound}
                  title="Customer Data"
                  subtitle="PII & Sensitive Information"
                  danger
                />

                <FlowConnector />

                {/* Masking Layer */}

                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

                  <div className="relative border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-[28px] p-8 text-center">
                    <div className="w-20 h-20 rounded-full bg-white border border-cyan-200 flex items-center justify-center mx-auto mb-5">
                      <ShieldCheck className="w-10 h-10 text-cyan-600" />
                    </div>

                    <h3 className="text-xl font-semibold text-slate-900">
                      Masking Rules
                    </h3>

                    <p className="text-sm text-slate-500 mt-2">
                      Hashing • Encryption • PII Protection
                    </p>

                    <div className="grid grid-cols-3 gap-3 mt-6">
                      <SecurityTag text="Mask" />

                      <SecurityTag text="Hash" />

                      <SecurityTag text="Encrypt" />
                    </div>
                  </div>
                </div>

                <FlowConnector />

                {/* Protected Dataset */}

                <FlowCard
                  icon={Database}
                  title="Protected Dataset"
                  subtitle="Governed & Secured"
                />

                <FlowConnector />

                {/* Analytics */}

                <div className="rounded-3xl bg-slate-900 text-white p-8 text-center">
                  <Sparkles className="w-10 h-10 mx-auto mb-4" />

                  <h3 className="text-lg font-semibold">Analytics Ready</h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Safe for reporting and downstream usage
                  </p>
                </div>

                {/* Summary */}

                <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
                  <div className="flex items-start gap-3">
                    <Lock className="w-5 h-5 text-green-600 mt-0.5" />

                    <div>
                      <h4 className="font-medium text-slate-900">
                        Protection Applied
                      </h4>

                      <p className="text-sm text-slate-600 mt-2">
                        Sensitive fields are secured before entering storage,
                        analytics, and reporting systems.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <MetricCard value="PII" label="Masked" />

                  <MetricCard value="AES" label="Encrypted" />

                  <MetricCard value="100%" label="Protected" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FlowConnector = () => (
  <div className="flex justify-center py-4">
    <ArrowDown className="w-5 h-5 text-cyan-400" />
  </div>
);

const FlowCard = ({ icon: Icon, title, subtitle, danger }) => (
  <div
    className={`border rounded-2xl p-5 flex items-center gap-4
      ${danger ? "border-red-200 bg-red-50" : "border-slate-200 bg-white"}`}
  >
    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
      <Icon
        className={`w-5 h-5 ${danger ? "text-red-500" : "text-cyan-600"}`}
      />
    </div>

    <div>
      <h4 className="font-semibold text-slate-900">{title}</h4>

      <p className="text-sm text-slate-500 mt-1">{subtitle}</p>
    </div>
  </div>
);

const SecurityTag = ({ text }) => (
  <div className="bg-white border border-slate-200 rounded-xl py-2 text-sm font-medium text-slate-700">
    {text}
  </div>
);

const MetricCard = ({ value, label }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-xl font-bold text-slate-900">{value}</div>

    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default DataProtectionSection;
