import React from "react";
import { motion } from "framer-motion";
import {
  Bell,
  CheckCircle2,
  AlertTriangle,
  ShieldCheck,
  RefreshCw,
  HeartPulse,
} from "lucide-react";

const features = [
  "Real-Time Alerts",
  "Circuit Breakers",
  "Health Checks",
  "Automatic Recovery",
  "Structured Logging",
  "Operational Safeguards",
];

const IncidentResponseSection = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Bell className="w-4 h-4" />
              Reliability & Alerting
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Catch problems early and recover automatically.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Receive alerts when services degrade, pipelines fail, storage
              approaches limits, or CDC lag increases.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Built-in safeguards help keep systems healthy through automatic
              recovery, health checks, and failure protection mechanisms.
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

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-900">
                  Automated Incident Response
                </h3>
              </div>

              <div className="p-6 sm:p-8">
                <FlowNode
                  icon={AlertTriangle}
                  title="Issue Detected"
                  subtitle="Pipeline latency spike"
                  danger
                />

                <Connector />

                <FlowNode
                  icon={Bell}
                  title="Alert Triggered"
                  subtitle="Operations notified"
                />

                <Connector />

                <FlowNode
                  icon={RefreshCw}
                  title="Auto Recovery"
                  subtitle="Restarting service"
                  highlight
                />

                <Connector />

                <div className="rounded-3xl bg-slate-900 text-white p-8 text-center">
                  <HeartPulse className="w-10 h-10 mx-auto mb-4" />

                  <h3 className="font-semibold text-lg">Healthy System</h3>

                  <p className="text-slate-400 text-sm mt-2">
                    Service restored automatically
                  </p>
                </div>

                <div className="mt-8 rounded-2xl border border-green-200 bg-green-50 p-5">
                  <div className="flex items-start gap-3">
                    <ShieldCheck className="w-5 h-5 text-green-600 mt-0.5" />

                    <div>
                      <h4 className="font-medium text-slate-900">
                        Recovery Successful
                      </h4>

                      <p className="text-sm text-slate-600 mt-2">
                        Automatic safeguards resolved the issue before
                        downstream users were impacted.
                      </p>
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

export default IncidentResponseSection;
