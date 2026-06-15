import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  RefreshCw,
  HeartPulse,
  Server,
  Activity,
} from "lucide-react";

const features = [
  "Service Monitoring",
  "CDC Watchdog",
  "Circuit Breakers",
  "Auto Recovery",
  "Infrastructure Health",
  "Production Observability",
];

const ProductionReliabilitySection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 ">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Production Reliability
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Operate confidently
              <br />
              in production environments.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Monitor critical services, recover automatically from failures,
              and maintain reliable operations across complex data workloads.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Built-in observability and self-healing mechanisms help keep
              systems healthy without requiring constant intervention from
              platform teams.
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
                  Automated Reliability Workflow
                </h3>
              </div>

              <div className="p-6 sm:p-8">
                {/* Issue */}

                <FlowNode
                  icon={AlertTriangle}
                  title="Issue Detected"
                  subtitle="Service degradation identified"
                  danger
                />

                <Connector />

                {/* Recovery */}

                <FlowNode
                  icon={RefreshCw}
                  title="Watchdog Recovery"
                  subtitle="Automatic corrective action"
                  highlight
                />

                <Connector />

                {/* Restored */}

                <FlowNode
                  icon={HeartPulse}
                  title="Health Restored"
                  subtitle="System recovered successfully"
                />

                <Connector />

                {/* Running */}

                <div className="rounded-3xl bg-slate-900 text-white p-8 text-center">
                  <Server className="w-10 h-10 mx-auto mb-4" />

                  <h3 className="font-semibold text-lg">Platform Running</h3>

                  <p className="text-slate-400 text-sm mt-2">
                    Services healthy and workloads operating normally
                  </p>
                </div>

                {/* Reliability Summary */}

                <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
                  <div className="flex items-start gap-3">
                    <Activity className="w-5 h-5 text-green-600 mt-0.5" />

                    <div>
                      <h4 className="font-medium text-slate-900">
                        Continuous Monitoring Active
                      </h4>

                      <p className="text-sm text-slate-600 mt-2">
                        Platform health, CDC streams, infrastructure services,
                        and workloads are continuously monitored and protected.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Metrics */}

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <MetricCard value="99.99%" label="Availability" />

                  <MetricCard value="24/7" label="Monitoring" />

                  <MetricCard value="Auto" label="Recovery" />
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

const FlowNode = ({ icon: Icon, title, subtitle, danger, highlight }) => (
  <div
    className={`rounded-2xl border p-5 flex items-center gap-4
      ${
        danger
          ? "border-red-200 bg-red-50"
          : highlight
            ? "border-cyan-200 bg-cyan-50"
            : "border-slate-200 bg-white"
      }`}
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

const MetricCard = ({ value, label }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-xl font-bold text-slate-900">{value}</div>

    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default ProductionReliabilitySection;
