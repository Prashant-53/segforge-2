import React from "react";
import { motion } from "framer-motion";
import {
  SlidersHorizontal,
  Binary,
  Sparkles,
  SplitSquareVertical,
  CheckCircle2,
} from "lucide-react";

const steps = [
  {
    icon: SlidersHorizontal,
    title: "Scaling & normalization",
  },
  {
    icon: Binary,
    title: "Categorical encoding",
  },
  {
    icon: Sparkles,
    title: "Missing value handling",
  },
  {
    icon: Sparkles,
    title: "Feature crossing",
  },
  {
    icon: SplitSquareVertical,
    title: "Train / test splitting",
  },
];

const FeatureEngineering = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              Feature Engineering
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Turn raw data into training-ready features.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Prepare datasets visually using feature engineering tools built
              directly into SegForge workflows. Clean, transform, and prepare
              data without switching between notebooks and pipelines.
            </p>

            {/* Capabilities */}

            <div className="mt-10 space-y-5">
              {steps.map((step) => {
                const Icon = step.icon;

                return (
                  <div key={step.title} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-lg bg-cyan-50 border border-cyan-100 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-cyan-600" />
                    </div>

                    <span className="text-slate-700 text-lg">{step.title}</span>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Header */}

              <div className="px-8 py-5 border-b border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-900">
                  Feature Engineering Workspace
                </h3>
              </div>

              {/* Canvas */}

              <div className="p-8">
                <div className="grid grid-cols-2 gap-10">
                  {/* Raw Dataset */}

                  <div>
                    <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
                      Raw Dataset
                    </h4>

                    <div className="space-y-3">
                      {[
                        "customer_id",
                        "revenue",
                        "region",
                        "last_purchase",
                      ].map((item) => (
                        <div
                          key={item}
                          className="px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 text-slate-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Feature Store */}

                  <div>
                    <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-4">
                      Model Features
                    </h4>

                    <div className="space-y-3">
                      {[
                        "customer_score",
                        "revenue_scaled",
                        "region_encoded",
                        "engagement_index",
                      ].map((item) => (
                        <div
                          key={item}
                          className="px-4 py-3 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-700"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Transformations */}

                <div className="mt-10 pt-8 border-t border-slate-200">
                  <div className="flex flex-wrap justify-center gap-3">
                    {[
                      "Normalize",
                      "Encode",
                      "Impute",
                      "Feature Cross",
                      "Train/Test Split",
                    ].map((item) => (
                      <div
                        key={item}
                        className="px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 text-sm"
                      >
                        {item}
                      </div>
                    ))}
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

const FlowLine = () => (
  <div className="flex justify-center py-4">
    <div className="w-px h-10 bg-cyan-300" />
  </div>
);

const WorkflowNode = ({ title, color }) => {
  return (
    <div className="flex justify-center">
      <div
        className={`w-full max-w-[320px] px-6 py-5 rounded-2xl border border-slate-200 flex items-center justify-center font-medium ${color}`}
      >
        {title}
      </div>
    </div>
  );
};

export default FeatureEngineering;
