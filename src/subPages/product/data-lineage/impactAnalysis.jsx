import React from "react";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  CheckCircle2,
  Database,
  BarChart3,
  FileText,
  Search,
} from "lucide-react";

const features = [
  "Impact Analysis",
  "Dependency Tracking",
  "Root Cause Discovery",
  "Schema Change Assessment",
  "Change Planning",
];

const ImpactAnalysisSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* VISUAL LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Header */}

              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <h3 className="font-medium text-slate-900">
                  Dependency Impact Explorer
                </h3>

                <div className="flex items-center gap-2 text-amber-600 text-sm font-medium">
                  <AlertTriangle className="w-4 h-4" />
                  Change Detected
                </div>
              </div>

              <div className="p-8">
                {/* Root Change */}

                <ImpactNode
                  icon={Database}
                  title="Revenue Column Updated"
                  subtitle="Source Change"
                  primary
                />

                <Connector />

                <ImpactNode
                  icon={Database}
                  title="4 Affected Tables"
                  subtitle="Curated Datasets"
                />

                <Connector />

                <ImpactNode
                  icon={BarChart3}
                  title="2 Dashboards"
                  subtitle="Business Metrics"
                />

                <Connector />

                <ImpactNode
                  icon={FileText}
                  title="7 Reports"
                  subtitle="Executive Reporting"
                  dark
                />

                {/* Summary */}

                <div className="mt-8 rounded-2xl border border-amber-200 bg-amber-50 p-5">
                  <div className="flex items-start gap-3">
                    <Search className="w-5 h-5 text-amber-600 mt-0.5" />

                    <div>
                      <h4 className="font-medium text-slate-900">
                        Impact Summary
                      </h4>

                      <p className="text-sm text-slate-600 mt-2">
                        This change affects 13 downstream assets across
                        analytics, reporting, and operations.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CONTENT RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              Impact Analysis
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Understand what changes
              <br />
              before you make them.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Before modifying a schema, removing a column, or updating a
              pipeline, see exactly which datasets, dashboards, and reports will
              be affected.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Reduce risk, avoid unexpected issues, and make changes with
              confidence.
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
        </div>
      </div>
    </section>
  );
};

const Connector = () => (
  <div className="flex justify-center py-3">
    <div className="w-px h-10 bg-cyan-300" />
  </div>
);

const ImpactNode = ({ icon: Icon, title, subtitle, primary, dark }) => (
  <div
    className={`rounded-2xl border p-5 flex items-center gap-4
      ${
        dark
          ? "bg-slate-900 border-slate-900 text-white"
          : primary
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

export default ImpactAnalysisSection;
