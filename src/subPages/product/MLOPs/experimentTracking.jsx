import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Cpu,
  History,
  SlidersHorizontal,
  BarChart3,
  GitCompare,
  CheckCircle2,
} from "lucide-react";
import ModelTrain from "../../../assets/Products/ML&OPs/ModelTrain.png";

const trainingFeatures = [
  {
    icon: Cpu,
    title: "Distributed Training",
    description:
      "Scale training across multiple compute nodes for faster model development.",
  },
  {
    icon: SlidersHorizontal,
    title: "Hyperparameter Configuration",
    description:
      "Configure and tune model parameters through an intuitive enterprise interface.",
  },
  {
    icon: History,
    title: "Experiment History",
    description:
      "Every training run is automatically versioned with complete execution history.",
  },
  {
    icon: BarChart3,
    title: "Metrics Tracking",
    description:
      "Monitor accuracy, precision, recall, loss curves, and training performance in real time.",
  },
  {
    icon: GitCompare,
    title: "Model Comparison",
    description:
      "Compare multiple experiments side-by-side to identify the highest-performing model.",
  },
  {
    icon: BrainCircuit,
    title: "Reproducible Runs",
    description:
      "Recreate any experiment instantly using stored configurations, datasets, and parameters.",
  },
];

const ModelTrainingSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20">
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

      <div className="absolute left-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden border border-slate-200 bg-white shadow-2xl">
              <img
                src={ModelTrain}
                alt="Model Training Dashboard"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Model Training
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Train Smarter.
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Compare Faster. Deploy Better.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-6 text-slate-600">
              Launch distributed training jobs, configure hyperparameters,
              compare experiments, and reproduce every model with complete
              execution history from a single enterprise MLOps platform.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-5">
              {trainingFeatures.map((feature) => (
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

export default ModelTrainingSection;
