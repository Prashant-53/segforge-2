import React from "react";
import { motion } from "framer-motion";
import { GitBranch, CheckCircle2, Database, Sparkles } from "lucide-react";

const features = [
  "Column-Level Lineage",
  "Transformation Mapping",
  "Source-to-Target Tracking",
  "Metadata Visibility",
  "Field-Level Relationships",
];

const ColumnLineageSection = () => {
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
              <GitBranch className="w-4 h-4" />
              Column Lineage
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Know exactly how
              <br />
              every metric is created.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Go beyond table-level visibility.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              See which source fields contribute to every downstream column and
              understand how transformations shape the final result.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              No more guessing how important metrics are calculated.
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
                  Column Mapping Explorer
                </h3>
              </div>

              <div className="p-8">
                <div className="grid grid-cols-3 gap-8 items-center">
                  {/* SOURCE */}

                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <Database className="w-4 h-4 text-cyan-600" />

                      <span className="font-medium text-slate-900">
                        Source Fields
                      </span>
                    </div>

                    <div className="space-y-4">
                      <FieldCard title="customer_id" />

                      <FieldCard title="revenue" />

                      <FieldCard title="region" />
                    </div>
                  </div>

                  {/* TRANSFORMATION */}

                  <div className="flex justify-center">
                    <div className="w-40 h-40 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 flex flex-col items-center justify-center">
                      <Sparkles className="w-8 h-8 text-cyan-600 mb-3" />

                      <span className="font-medium text-slate-900 text-center">
                        Transformations
                      </span>
                    </div>
                  </div>

                  {/* TARGET */}

                  <div>
                    <div className="flex items-center gap-2 mb-5">
                      <GitBranch className="w-4 h-4 text-cyan-600" />

                      <span className="font-medium text-slate-900">
                        Output Fields
                      </span>
                    </div>

                    <div className="space-y-4">
                      <FieldCard title="customer_score" highlight />

                      <FieldCard title="revenue_total" highlight />

                      <FieldCard title="region_group" highlight />
                    </div>
                  </div>
                </div>

                {/* Connection Area */}

                <div className="relative mt-10 h-24">
                  <svg
                    className="absolute inset-0 w-full h-full"
                    viewBox="0 0 700 100"
                  >
                    <path
                      d="M150 20 C280 20 280 50 350 50"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      fill="none"
                    />

                    <path
                      d="M150 50 C280 50 280 50 350 50"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      fill="none"
                    />

                    <path
                      d="M150 80 C280 80 280 50 350 50"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      fill="none"
                    />

                    <path
                      d="M350 50 C430 50 430 20 550 20"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      fill="none"
                    />

                    <path
                      d="M350 50 C430 50 430 50 550 50"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      fill="none"
                    />

                    <path
                      d="M350 50 C430 50 430 80 550 80"
                      stroke="#06b6d4"
                      strokeWidth="2"
                      fill="none"
                    />
                  </svg>
                </div>

                {/* Metadata */}

                <div className="grid grid-cols-3 gap-4 mt-6">
                  <MetaCard value="14" label="Mapped Fields" />

                  <MetaCard value="6" label="Transformations" />

                  <MetaCard value="100%" label="Traceable" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const FieldCard = ({ title, highlight }) => (
  <div
    className={`rounded-xl border px-4 py-3 text-sm font-medium ${
      highlight
        ? "border-cyan-200 bg-cyan-50 text-cyan-700"
        : "border-slate-200 bg-white text-slate-700"
    }`}
  >
    {title}
  </div>
);

const MetaCard = ({ value, label }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-xl font-bold text-slate-900">{value}</div>

    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default ColumnLineageSection;
