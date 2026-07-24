import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BarChart3,
  ScanSearch,
  GitBranch,
  CheckCircle2,
  Sparkles,
  Brain,
} from "lucide-react";

import Hero from "../../../assets/Products/AI/fifth.png";

const capabilityGroups = [
  {
    icon: Brain,
    title: "Explainability",
    items: [
      "SHAP Values",
      "Feature Importance",
      "Prediction Insights",
      "Model Transparency",
    ],
  },
  {
    icon: BarChart3,
    title: "Evaluation Hub",
    items: ["Accuracy", "AUC", "F1 Score", "Confusion Matrix"],
  },
];

const governanceFeatures = [
  {
    icon: ScanSearch,
    title: "Understand Every Prediction",
    description:
      "Open the machine learning black box using SHAP value analysis and feature importance visualizations. Understand exactly which variables influence predictions, helping engineers, analysts, and business stakeholders trust AI-driven decisions.",
  },
  {
    icon: BarChart3,
    title: "Comprehensive Model Evaluation",
    description:
      "Evaluate every experiment through a centralized metrics dashboard covering Accuracy, Precision, Recall, F1 Score, ROC-AUC, Confusion Matrices, and additional performance indicators before promoting models into production.",
  },
  {
    icon: GitBranch,
    title: "Complete AI Auditability",
    description:
      "Every prediction is fully traceable through Seg Forge Data Lineage. Connect production models back to the exact Apache Iceberg dataset, feature engineering workflow, training pipeline, experiment, and model version used to generate each prediction.",
  },
];

const Fifth = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-28">
      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#18D0BB 1px,transparent 1px),
            linear-gradient(to bottom,#18D0BB 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}

      <div className="absolute left-0 top-24 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Sparkles className="h-4 w-4" />
              AI Governance
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Trust Every Prediction.
              <br />
              Explain Every Decision.
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-8 text-slate-600">
              Build enterprise AI systems with complete transparency. Understand
              how every prediction is generated, evaluate model performance
              through comprehensive metrics, and trace production decisions back
              to the exact training data, feature engineering workflow, and
              model version.
            </p>

            {/* Capability Groups */}

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {capabilityGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <group.icon className="h-7 w-7 text-cyan-600" />

                    <h3 className="text-xl font-semibold text-slate-900">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-cyan-500" />

                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Supporting Features */}

            <div className="mt-10 space-y-5">
              {governanceFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                    <feature.icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Highlight */}

            <div className="mt-10 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px] shadow-lg">
              <div className="rounded-[22px] bg-white px-8 py-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                    <ShieldCheck className="h-6 w-6 text-cyan-600" />
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      Enterprise AI You Can Trust
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      Explain every prediction, validate every model, and trace
                      every production decision back to governed Apache Iceberg
                      data through integrated model evaluation, explainability,
                      and end-to-end data lineage.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0   bg-cyan-400/10 blur-3xl" />

            <div className="overflow-hidden  border border-slate-200 bg-white shadow-2xl">
              <img
                src={Hero}
                alt="AI Explainability & Governance"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Fifth;
