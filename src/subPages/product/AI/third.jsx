import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  BrainCircuit,
  FlaskConical,
  GitBranch,
  SlidersHorizontal,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import Hero from "../../../assets/Products/AI/third.png";

const capabilityGroups = [
  {
    icon: BrainCircuit,
    title: "Training Engine",
    items: [
      "XGBoost",
      "Random Forest",
      "Neural Networks",
      "Distributed Training",
    ],
  },
  {
    icon: FlaskConical,
    title: "Experiment Tracking",
    items: [
      "MLflow Integration",
      "Metrics Tracking",
      "Model Artifacts",
      "Run History",
    ],
  },
];

const features = [
  {
    icon: Cpu,
    title: "High-Performance Distributed Training",
    description:
      "Train enterprise-scale machine learning models using distributed compute powered by Apache Spark and scalable execution engines. Accelerate model development while supporting advanced algorithms including XGBoost, Random Forest, and deep neural networks.",
  },
  {
    icon: GitBranch,
    title: "Native MLflow Experiment Tracking",
    description:
      "Automatically capture every experiment with MLflow, including hyperparameters, training metrics, evaluation results, model artifacts, and execution history. Compare experiments and reproduce successful models with complete transparency.",
  },
  {
    icon: SlidersHorizontal,
    title: "Automated Hyperparameter Optimization",
    description:
      "Optimize model performance using built-in Grid Search and Random Search nodes that automatically evaluate multiple parameter combinations to identify the highest-performing configuration for production deployment.",
  },
];

const Third = () => {
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

      <div className="absolute left-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

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
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Sparkles className="h-4 w-4" />
              Distributed Training
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Train World-Class Models
              <br />
              with Total Transparency.
            </h2>

            <p className="mt-6 text-md leading-8 text-slate-600">
              Build, optimize, and track enterprise machine learning models
              through an integrated MLOps platform. Execute distributed training
              workloads, monitor every experiment with MLflow, and automatically
              discover the best-performing model configurations for production
              deployment.
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
              {features.map((feature) => (
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
                <p className="text-lg font-semibold text-slate-900">
                  Every experiment is tracked. Every model is reproducible.
                </p>

                <p className="mt-2 leading-7 text-slate-600">
                  Combine distributed training, automated optimization, and
                  native MLflow experiment tracking to confidently promote the
                  highest-performing models into production.
                </p>
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
                alt="Distributed Training & Experiment Tracking"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Third;
