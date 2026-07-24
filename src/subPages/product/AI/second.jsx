import React from "react";
import { motion } from "framer-motion";
import {
  Blocks,
  SlidersHorizontal,
  Binary,
  Sparkles,
  CheckCircle2,
  ShieldCheck,
  Wand2,
} from "lucide-react";

import Hero from "../../../assets/Products/AI/second.png";

const capabilityGroups = [
  {
    icon: SlidersHorizontal,
    title: "Preprocessing",
    items: ["Scaler", "Encoder", "Imputer", "Normalization"],
  },
  {
    icon: Binary,
    title: "Feature Engineering",
    items: [
      "Feature Selection",
      "Feature Cross",
      "Derived Features",
      "ML Transformations",
    ],
  },
];

const features = [
  {
    icon: Blocks,
    title: "90+ Visual ML Transformation Nodes",
    description:
      "Prepare production-ready datasets using an extensive library of drag-and-drop transformation nodes purpose-built for feature engineering. Clean, reshape, encode, normalize, and enrich data without writing complex preprocessing code.",
  },
  {
    icon: ShieldCheck,
    title: "Built-In Data Validation",
    description:
      "Validate every dataset before training using profiling, assertions, schema validation, and quality rules that act as an intelligent circuit breaker, ensuring only trusted data reaches machine learning pipelines.",
  },
  {
    icon: Wand2,
    title: "Advanced Feature Engineering",
    description:
      "Create interaction features, identify high-impact variables, remove noisy attributes, and automatically prepare optimized feature sets for downstream model training and experimentation.",
  },
];

const Second = () => {
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

      <div className="absolute left-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Sparkles className="h-4 w-4" />
              Visual Feature Engineering
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Build Your Foundation
              <br />
              for Production AI.
            </h2>

            <p className="mt-6 text-md leading-8 text-slate-600">
              Prepare high-quality machine learning datasets through an
              intuitive visual interface. Apply preprocessing, engineer
              meaningful features, and validate data quality using more than 90
              enterprise-ready transformation nodes designed specifically for ML
              workloads.
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
                  Every great model starts with trustworthy features.
                </p>

                <p className="mt-2 leading-7 text-slate-600">
                  Prepare, validate, and engineer production-ready datasets
                  through a visual workflow before a single model is trained.
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
                alt="Visual Feature Engineering"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Second;
