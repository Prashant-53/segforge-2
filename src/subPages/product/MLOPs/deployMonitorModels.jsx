import React from "react";
import { motion } from "framer-motion";
import { Rocket, Activity, RefreshCw, Radar, CheckCircle2 } from "lucide-react";

const features = [
  "Batch Scoring",
  "Real-Time Predictions",
  "Drift Detection",
  "Auto Retraining",
  "Model Monitoring",
];

const DeployMonitorModels = () => {
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
            <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              Production Serving
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Move models into production with confidence.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Deploy models into operational workflows, monitor performance over
              time, and automatically respond when model quality begins to
              drift.
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
            <div className="relative bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Header */}

              <div className="px-8 py-5 border-b border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-900">
                  Model Operations Center
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Production lifecycle monitoring
                </p>
              </div>

              {/* Lifecycle */}

              <div className="p-10">
                <div className="grid grid-cols-2 gap-6">
                  {/* Deploy */}

                  <LifecycleCard
                    icon={Rocket}
                    title="Production"
                    subtitle="Model deployed"
                  />

                  {/* Monitor */}

                  <LifecycleCard
                    icon={Activity}
                    title="Monitoring"
                    subtitle="Performance tracking"
                  />

                  {/* Drift */}

                  <LifecycleCard
                    icon={Radar}
                    title="Drift Detection"
                    subtitle="Data quality checks"
                  />

                  {/* Retrain */}

                  <LifecycleCard
                    icon={RefreshCw}
                    title="Retraining"
                    subtitle="Automatic refresh"
                  />
                </div>

                {/* Status Line */}

                <div className="mt-10 border-t border-slate-200 pt-8">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-slate-500">Model Health</span>

                    <span className="font-semibold text-green-600">
                      Healthy
                    </span>
                  </div>

                  <div className="mt-3 h-3 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full w-[92%] bg-green-500 rounded-full" />
                  </div>

                  <div className="mt-3 text-sm text-slate-500">
                    Last retrained 2 days ago • Drift score stable
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

const LifecycleCard = ({ icon: Icon, title, subtitle }) => {
  return (
    <div className="p-5 rounded-2xl border border-slate-200">
      <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5 text-cyan-600" />
      </div>

      <h4 className="font-semibold text-slate-900">{title}</h4>

      <p className="text-sm text-slate-500 mt-2">{subtitle}</p>
    </div>
  );
};

export default DeployMonitorModels;
