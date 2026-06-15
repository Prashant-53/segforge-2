import React from "react";
import { motion } from "framer-motion";
import {
  Brain,
  BarChart3,
  PieChart,
  TrendingUp,
  CheckCircle2,
} from "lucide-react";

const features = [
  "SHAP Analysis",
  "Feature Importance",
  "Confusion Matrix",
  "ROC & AUC",
  "RMSE & F1",
];

const UnderstandTrustModels = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              Model Insights
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Know why your model made a prediction.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Go beyond accuracy scores. Understand feature impact, compare
              model performance, and confidently explain predictions to
              technical and business teams.
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

              <div className="px-8 py-5 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Prediction Insights
                  </h3>

                  <p className="text-sm text-slate-500">
                    Understand what drives model decisions
                  </p>
                </div>

                <Brain className="w-5 h-5 text-cyan-600" />
              </div>

              {/* SHAP Style Chart */}

              <div className="p-8">
                <div className="mb-8">
                  <div className="flex items-center gap-2 mb-5">
                    <BarChart3 className="w-4 h-4 text-cyan-600" />
                    <span className="font-medium text-slate-900">
                      Feature Importance
                    </span>
                  </div>

                  <div className="space-y-4">
                    {[
                      { label: "Customer Activity", value: 90 },
                      { label: "Purchase Frequency", value: 75 },
                      { label: "Account Age", value: 60 },
                      { label: "Region", value: 40 },
                      { label: "Support Tickets", value: 25 },
                    ].map((item) => (
                      <div key={item.label}>
                        <div className="flex justify-between text-sm mb-2">
                          <span className="text-slate-700">{item.label}</span>

                          <span className="text-slate-500">{item.value}%</span>
                        </div>

                        <div className="h-3 rounded-full bg-slate-100 overflow-hidden">
                          <div
                            className="h-full rounded-full bg-cyan-500"
                            style={{
                              width: `${item.value}%`,
                            }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Metrics */}

                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl border border-slate-200 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <PieChart className="w-4 h-4 text-cyan-600" />
                      <span className="text-sm font-medium text-slate-900">
                        ROC AUC
                      </span>
                    </div>

                    <div className="text-3xl font-bold text-slate-900">
                      0.97
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 p-5">
                    <div className="flex items-center gap-2 mb-3">
                      <TrendingUp className="w-4 h-4 text-cyan-600" />
                      <span className="text-sm font-medium text-slate-900">
                        F1 Score
                      </span>
                    </div>

                    <div className="text-3xl font-bold text-slate-900">94%</div>
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

export default UnderstandTrustModels;
