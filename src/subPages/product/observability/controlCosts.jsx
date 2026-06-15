import React from "react";
import { motion } from "framer-motion";
import {
  DollarSign,
  CheckCircle2,
  TrendingUp,
  Database,
  Cpu,
  Radio,
  PieChart,
} from "lucide-react";

const features = [
  "Cost Tracking",
  "Monthly Forecasting",
  "Storage Usage",
  "Compute Usage",
  "Resource Quotas",
  "Usage Trends",
];

const CostObservabilitySection = () => {
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
              <DollarSign className="w-4 h-4" />
              Cost Observability
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Understand where resources are being consumed.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Track compute, storage, and streaming costs across teams,
              projects, and pipelines.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Forecast future spend, monitor quotas, and identify workloads
              driving unexpected usage.
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
                <h3 className="font-semibold text-slate-900">Cost Dashboard</h3>
              </div>

              <div className="p-6 sm:p-8">
                <div className="grid grid-cols-3 gap-4">
                  <CostCard icon={Cpu} title="Compute" value="$4,280" />

                  <CostCard icon={Database} title="Storage" value="$1,940" />

                  <CostCard icon={Radio} title="Streaming" value="$860" />
                </div>

                <div className="flex justify-center py-6">
                  <div className="w-px h-10 bg-cyan-300" />
                </div>

                <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 text-center">
                  <PieChart className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                  <h3 className="font-semibold text-slate-900 text-lg">
                    Cost Dashboard
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Usage trends and resource allocation
                  </p>
                </div>

                <div className="flex justify-center py-6">
                  <div className="w-px h-10 bg-cyan-300" />
                </div>

                <div className="rounded-3xl bg-slate-900 text-white p-8 text-center">
                  <TrendingUp className="w-10 h-10 mx-auto mb-4" />

                  <h3 className="font-semibold text-lg">Forecasted Spend</h3>

                  <p className="text-slate-400 text-sm mt-2">
                    $8,420 projected this month
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <MetricCard value="$7.1K" label="Current Spend" />

                  <MetricCard value="+18%" label="Growth" />

                  <MetricCard value="84%" label="Quota Used" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CostCard = ({ icon: Icon, title, value }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center bg-slate-50">
    <Icon className="w-6 h-6 text-cyan-600 mx-auto mb-3" />
    <h4 className="font-medium text-slate-900">{title}</h4>
    <p className="text-sm text-slate-500 mt-1">{value}</p>
  </div>
);

const MetricCard = ({ value, label }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-xl font-bold text-slate-900">{value}</div>
    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default CostObservabilitySection;
