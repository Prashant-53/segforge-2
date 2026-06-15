import React from "react";
import { motion } from "framer-motion";
import {
  History,
  CheckCircle2,
  GitCommit,
  Clock3,
  Database,
  Search,
} from "lucide-react";

const features = [
  "Immutable Audit Trail",
  "Data Versioning",
  "Historical Snapshots",
  "Time Travel Queries",
  "Change Tracking",
];

const AuditTrailSection = () => {
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
              <History className="w-4 h-4" />
              Audit Trail & Time Travel
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Never lose the history behind your data.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Every schema update, data modification, and table version is
              recorded automatically.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Review historical states, investigate incidents, and verify
              exactly what changed, when it changed, and who initiated it.
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
                  Data Version Timeline
                </h3>

                <div className="text-xs px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 font-medium">
                  Nessie Powered
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <CommitNode
                  version="Commit 1"
                  user="Sarah Chen"
                  change="Created customer analytics table"
                  time="12 days ago"
                />

                <TimelineConnector />

                <CommitNode
                  version="Commit 2"
                  user="Michael Ross"
                  change="Added customer_segment column"
                  time="8 days ago"
                />

                <TimelineConnector />

                <CommitNode
                  version="Commit 3"
                  user="Data Pipeline"
                  change="Updated partition strategy"
                  time="3 days ago"
                  highlight
                />

                <TimelineConnector />

                <div className="rounded-2xl bg-slate-900 text-white p-5">
                  <div className="flex items-center gap-3">
                    <Database className="w-6 h-6" />

                    <div>
                      <h4 className="font-semibold">Current State</h4>

                      <p className="text-sm text-slate-400 mt-1">
                        Latest production version
                      </p>
                    </div>
                  </div>
                </div>

                {/* Time Travel Box */}

                <div className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
                  <div className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-cyan-600 mt-0.5" />

                    <div>
                      <h4 className="font-medium text-slate-900">
                        Time Travel Query
                      </h4>

                      <p className="text-sm text-slate-600 mt-2">
                        View data exactly as it existed before Commit 3 was
                        applied.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Footer Metrics */}

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <MetricCard value="100%" label="Versioned" />

                  <MetricCard value="∞" label="History" />

                  <MetricCard value="24/7" label="Auditable" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const TimelineConnector = () => (
  <div className="flex justify-center py-3">
    <div className="w-px h-10 bg-cyan-300" />
  </div>
);

const CommitNode = ({ version, user, change, time, highlight }) => (
  <div
    className={`rounded-2xl border p-5
      ${
        highlight ? "border-cyan-200 bg-cyan-50" : "border-slate-200 bg-white"
      }`}
  >
    <div className="flex items-start gap-4">
      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
        <GitCommit className="w-4 h-4 text-cyan-600" />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h4 className="font-semibold text-slate-900">{version}</h4>

          <div className="flex items-center gap-1 text-xs text-slate-500">
            <Clock3 className="w-3 h-3" />

            {time}
          </div>
        </div>

        <p className="text-sm text-slate-600 mt-2">{change}</p>

        <p className="text-xs text-slate-500 mt-2">By {user}</p>
      </div>
    </div>
  </div>
);

const MetricCard = ({ value, label }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-xl font-bold text-slate-900">{value}</div>

    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default AuditTrailSection;
