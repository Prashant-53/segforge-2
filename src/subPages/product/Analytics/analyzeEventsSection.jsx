import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Radio,
  CheckCircle2,
  RefreshCw,
  BarChart3,
} from "lucide-react";

const features = [
  "Batch Analytics",
  "Streaming Analytics",
  "Live Result Updates",
  "Real-Time Monitoring",
  "Sub-Second Visibility",
];

const AnalyzeEventsSection = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              Streaming Analytics
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              See what's happening right now.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Switch between historical analysis and live streaming views
              instantly.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Monitor incoming events, track operational activity, and explore
              real-time trends as data arrives across your organization.
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
              {/* Header */}

              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                <h3 className="font-medium text-slate-900">Live Analytics</h3>

                <div className="flex items-center gap-2 text-green-600 text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Live
                </div>
              </div>

              <div className="p-6">
                {/* Mode Switch */}

                <div className="flex justify-center mb-8">
                  <div className="inline-flex items-center bg-slate-100 rounded-full p-1">
                    <button className="px-5 py-2 rounded-full bg-white shadow-sm text-slate-900 text-sm font-medium">
                      Batch Mode
                    </button>

                    <div className="px-3 text-slate-400">↔</div>

                    <button className="px-5 py-2 rounded-full text-cyan-600 text-sm font-medium">
                      Streaming Mode
                    </button>
                  </div>
                </div>

                {/* Metrics */}

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <MetricCard label="Events / Sec" value="48.2K" />

                  <MetricCard label="Latency" value="380ms" />

                  <MetricCard label="Streams" value="12" />
                </div>

                {/* Live Table */}

                <div className="rounded-2xl border border-slate-200 overflow-hidden">
                  <div className="px-4 py-3 bg-slate-50 border-b border-slate-200 flex items-center gap-2">
                    <Radio className="w-4 h-4 text-cyan-600" />

                    <span className="text-sm font-medium text-slate-900">
                      Incoming Events
                    </span>
                  </div>

                  <div className="divide-y divide-slate-100">
                    <LiveRow
                      event="Order Created"
                      source="Checkout"
                      status="Processed"
                    />

                    <LiveRow
                      event="Payment Approved"
                      source="Gateway"
                      status="Processed"
                    />

                    <LiveRow
                      event="Inventory Updated"
                      source="Warehouse"
                      status="Processed"
                    />

                    <LiveRow
                      event="Customer Signup"
                      source="Web App"
                      status="Processed"
                    />
                  </div>
                </div>

                {/* Footer */}

                <div className="mt-6 flex items-center justify-between text-sm">
                  <div className="flex items-center gap-2 text-slate-500">
                    <RefreshCw className="w-4 h-4" />
                    Updates every second
                  </div>

                  <div className="flex items-center gap-2 text-cyan-600">
                    <BarChart3 className="w-4 h-4" />
                    Streaming Active
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

const MetricCard = ({ label, value }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-xs text-slate-500">{label}</div>

    <div className="mt-2 text-2xl font-bold text-slate-900">{value}</div>
  </div>
);

const LiveRow = ({ event, source, status }) => (
  <div className="px-4 py-3 flex items-center justify-between text-sm">
    <div>
      <div className="font-medium text-slate-900">{event}</div>

      <div className="text-slate-500">{source}</div>
    </div>

    <span className="text-green-600 font-medium">{status}</span>
  </div>
);

export default AnalyzeEventsSection;
