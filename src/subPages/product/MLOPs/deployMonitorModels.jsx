import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  PieChart,
  BrainCircuit,
  CheckCircle2,
  Activity,
} from "lucide-react";
import ModelEval from "../../../assets/Products/ML&OPs/ModelEval.png";

const evaluationCategories = [
  {
    icon: BarChart3,
    title: "Model Metrics",
    items: ["Accuracy", "Precision", "Recall", "F1 Score", "ROC-AUC", "RMSE"],
  },
  {
    icon: PieChart,
    title: "Visualization",
    items: [
      "Confusion Matrix",
      "ROC Curves",
      "Precision Recall",
      "Learning Curves",
    ],
  },
];

const explainabilityFeatures = [
  {
    icon: BrainCircuit,
    title: "SHAP Values",
    description:
      "Understand how every feature contributes to model predictions through industry-standard explainability techniques.",
  },
  {
    icon: Activity,
    title: "Feature Importance",
    description:
      "Identify the variables driving model performance and prioritize impactful business features.",
  },
  {
    icon: PieChart,
    title: "Prediction Breakdown",
    description:
      "Visualize individual predictions with detailed contribution analysis for every input feature.",
  },
  {
    icon: CheckCircle2,
    title: "Model Interpretability",
    description:
      "Increase trust in machine learning decisions through transparent, explainable AI workflows.",
  },
];

const ModelEvaluationSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-28">
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
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0  bg-cyan-400/10 blur-3xl" />

            <div className="overflow-hidden  border border-slate-200 bg-white shadow-2xl">
              <img
                src={ModelEval}
                alt="Model Evaluation Dashboard"
                className="w-full"
              />
            </div>
          </motion.div>
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Model Evaluation
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Know Why Your Models
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Perform.
              </span>
            </h2>

            <p className="mt-6 text-md leading-6 text-slate-600">
              Evaluate every model with production-grade metrics, compare
              multiple versions, and understand prediction behavior through
              explainable AI before deploying models into production.
            </p>

            {/* Evaluation Categories */}

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {evaluationCategories.map((category) => (
                <div
                  key={category.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <category.icon className="h-7 w-7 text-cyan-600" />

                    <h3 className="text-xl font-semibold text-slate-900">
                      {category.title}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-3">
                    {category.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-cyan-500" />

                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Explainability */}

            <div className="mt-10 space-y-5">
              {explainabilityFeatures.map((feature) => (
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModelEvaluationSection;
