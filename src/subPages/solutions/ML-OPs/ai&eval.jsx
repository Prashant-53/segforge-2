import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import ExplainabilityImg from "../../../assets/Solutions/MachineLearning/explainability.png";

const trustStats = [
  { value: "SHAP", label: "Explainability" },
  { value: "AUC", label: "Tracking" },
  { value: "F1", label: "Scoring" },
  { value: "Automated", label: "Evaluation" },
];

const callouts = [
  "SHAP Values",
  "Confusion Matrix",
  "Feature Importance",
  "Hyperparameter Search",
];

const ExplainableAI = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual Left */}

          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={ExplainabilityImg}
                alt="Model Evaluation"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* Content Right */}

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Model Trust
            </div>

            <h2 className="text-4xl font-bold text-slate-900 leading-[1.05]">
              Understand why your models
              <br />
              make decisions.
            </h2>

            <p className="mt-8 text-slate-600 leading-relaxed max-w-xl">
              Validate model quality using comprehensive evaluation metrics and
              explainability tooling before promoting models into production.
              <br />
              <br />
              Build trust with stakeholders while meeting governance and
              compliance requirements.
            </p>

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {trustStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {callouts.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExplainableAI;
