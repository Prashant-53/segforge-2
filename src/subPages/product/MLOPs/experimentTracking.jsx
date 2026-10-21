import React from "react";
import { motion } from "framer-motion";
import ModelTrain from "../../../assets/Products/ML&OPs/ModelTrain.png";

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
              Train Smarter. Compare Faster. Deploy Better.
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-6 text-slate-600">
              Train across multiple compute nodes, configure and tune
              hyperparameters, and monitor key training metrics such as
              accuracy, precision, recall, loss, and performance. Compare
              experiments side-by-side to evaluate different approaches, while
              maintaining versioned execution history and stored configurations
              so successful training runs can be reproduced consistently—all
              within a unified enterprise MLOps platform.{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModelTrainingSection;
