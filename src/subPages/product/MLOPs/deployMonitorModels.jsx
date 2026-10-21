import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ModelEval from "../../../assets/Products/ML&OPs/ModelEval.png";

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
              Evaluate every model with production-grade metrics such as
              accuracy, precision, recall, F1 score, ROC-AUC, and RMSE. Compare
              model versions through visualizations like confusion matrices, ROC
              curves, precision-recall curves, and learning curves, while using
              SHAP values, feature importance, and prediction breakdowns to
              understand how individual features influence model behavior before
              deployment.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModelEvaluationSection;
