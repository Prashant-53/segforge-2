import React from "react";
import { motion } from "framer-motion";
import {
  Search,
  CheckCircle2,
  Database,
  Activity,
  Workflow,
  BarChart3,
  AlertTriangle,
} from "lucide-react";

const features = [
  "Interactive Lineage Graph",
  "Column-Level Lineage",
  "Root Cause Analysis",
  "OpenLineage Events",
  "DataHub Integration",
];

const RootCauseAnalysisSection = () => {
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
              <Search className="w-4 h-4" />
              Root Cause Analysis
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Understand where issues start and how they spread.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Follow data through pipelines, notebooks, CDC streams, and
              analytics workloads.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Drill into column-level lineage to understand how metrics are
              created and quickly identify the source of incorrect data.
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
              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">
                  Issue Propagation View
                </h3>

                <div className="px-3 py-1 rounded-full bg-red-50 text-red-600 text-xs font-medium">
                  Issue Detected
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <IssueNode icon={Database} title="Source Table" alert />

                <Flow />

                <IssueNode icon={Activity} title="CDC Stream" />

                <Flow />

                <IssueNode icon={Workflow} title="Pipeline" />

                <Flow />

                <IssueNode icon={Database} title="Analytics Table" />

                <Flow />

                <IssueNode icon={BarChart3} title="Dashboard" dark />

                <div className="mt-8 rounded-2xl border border-red-200 bg-red-50 p-5">
                  <div className="flex gap-3">
                    <AlertTriangle className="w-5 h-5 text-red-500 mt-0.5" />

                    <div>
                      <h4 className="font-medium text-slate-900">
                        Root Cause Identified
                      </h4>

                      <p className="text-sm text-slate-600 mt-2">
                        Incorrect source data propagated through 4 downstream
                        assets.
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

const Flow = () => (
  <div className="flex justify-center py-3">
    <div className="w-px h-10 bg-red-300" />
  </div>
);

const IssueNode = ({ icon: Icon, title, alert, dark }) => (
  <div
    className={`rounded-2xl border p-5 flex items-center gap-4
      ${
        dark
          ? "bg-slate-900 border-slate-900 text-white"
          : alert
            ? "bg-red-50 border-red-200"
            : "bg-white border-slate-200"
      }`}
  >
    <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
      <Icon className={`w-5 h-5 ${alert ? "text-red-500" : "text-cyan-600"}`} />
    </div>

    <h4 className={`font-medium ${dark ? "text-white" : "text-slate-900"}`}>
      {title}
    </h4>
  </div>
);

export default RootCauseAnalysisSection;
