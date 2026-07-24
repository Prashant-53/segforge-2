import React from "react";
import { motion } from "framer-motion";
import {
  LayoutTemplate,
  Users,
  Landmark,
  TrendingUp,
  ShieldAlert,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

import Hero from "../../../assets/Products/AI/sixth.png";

const capabilityGroups = [
  {
    icon: LayoutTemplate,
    title: "Model Blueprints",
    items: [
      "Churn Prediction",
      "Credit Risk",
      "Demand Forecasting",
      "Anomaly Detection",
    ],
  },
  {
    icon: Rocket,
    title: "Production Ready",
    items: [
      "Feature Engineering",
      "Model Training",
      "Evaluation",
      "Deployment Pipeline",
    ],
  },
];

const templateFeatures = [
  {
    icon: Users,
    title: "Customer Churn Prediction",
    description:
      "Launch customer retention initiatives using a pre-built machine learning workflow that combines feature engineering, model training, evaluation, and deployment to identify customers most likely to leave.",
  },
  {
    icon: Landmark,
    title: "Credit Risk & Demand Forecasting",
    description:
      "Accelerate financial risk analysis and business planning with enterprise templates for probability of default scoring and time-series forecasting, built using production-ready machine learning pipelines.",
  },
  {
    icon: ShieldAlert,
    title: "Anomaly Detection Templates",
    description:
      "Identify fraudulent transactions, operational anomalies, equipment failures, and unusual system behavior through pre-configured anomaly detection workflows ready for enterprise deployment.",
  },
];

const Sixth = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28">
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

      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Sparkles className="h-4 w-4" />
              AI Templates
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Go from Zero to
              <br />
              Production AI in Hours.
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-8 text-slate-600">
              Accelerate machine learning development using enterprise-ready
              templates built for common business problems. Every blueprint
              includes feature engineering, model training, evaluation,
              deployment, and monitoring—helping teams deliver production AI
              without starting from scratch.
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
              {templateFeatures.map((feature) => (
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
                    <Rocket className="h-6 w-6 text-cyan-600" />
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      Enterprise AI Accelerators
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      Every template includes pre-configured feature
                      engineering, distributed training, model evaluation,
                      deployment, and monitoring workflows—allowing teams to
                      deliver production-ready AI solutions in hours instead of
                      months.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}

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
                alt="Pre-Built Machine Learning Templates"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sixth;
