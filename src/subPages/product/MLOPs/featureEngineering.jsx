import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Shuffle,
  ScanSearch,
  Scale,
  SlidersHorizontal,
  Binary,
  CheckCircle2,
  BarChart3,
} from "lucide-react";
import FeatureEng from "../../../assets/Products/ML&OPs/featureEng.mp4";

const featureCards = [
  {
    icon: Database,
    title: "Data Preparation",
    items: [
      "Dataset Management",
      "Data Sampling",
      "Missing Value Handling",
      "Outlier Detection",
    ],
  },
  {
    icon: Scale,
    title: "Feature Engineering",
    items: [
      "Standard Scaler",
      "Min-Max Scaler",
      "Label Encoding",
      "One-Hot Encoding",
      "Feature Generation",
      "Feature Selection",
    ],
  },
  {
    icon: ScanSearch,
    title: "Data Validation",
    items: [
      "Null Checks",
      "Distribution Analysis",
      "Schema Validation",
      "Feature Statistics",
    ],
  },
];

const FeatureEngineering = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-28">
      {/* Animated Background */}

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

      <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Automated Feature Engineering
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-5xl">
            Transform Raw Data
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              into Intelligent Features.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-md leading-6 text-slate-600">
            Prepare enterprise datasets using visual feature engineering
            pipelines with automatic preprocessing, transformations, encoding,
            scaling, and data quality validation before model training.
          </p>
        </motion.div>

        {/* Large Screenshot */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="overflow-hidden  border border-slate-200 bg-white shadow-2xl">
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              className="block w-full h-auto object-cover"
            >
              <source src={FeatureEng} type="video/mp4" />
            </video>
          </div>
        </motion.div>

        {/* Feature Cards */}

        <div className="mt-16 grid gap-8 lg:grid-cols-3">
          {featureCards.map((card) => (
            <motion.div
              key={card.title}
              whileHover={{ y: -6 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-cyan-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                <card.icon className="h-7 w-7 text-cyan-600" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {card.title}
              </h3>

              <div className="mt-6 space-y-4">
                {card.items.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-cyan-500" />

                    <span className="text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureEngineering;
