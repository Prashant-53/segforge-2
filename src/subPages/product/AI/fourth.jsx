import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  Activity,
  Radar,
  CheckCircle2,
  Sparkles,
  Gauge,
} from "lucide-react";

import Hero from "../../../assets/Products/AI/fouth.png";

const capabilityGroups = [
  {
    icon: Zap,
    title: "Real-Time Inference",
    items: [
      "Neural Inference Engine",
      "Low-Latency APIs",
      "Edge Deployment",
      "P99 < 45 ms",
    ],
  },
  {
    icon: Cpu,
    title: "Batch Scoring",
    items: [
      "Predict Node",
      "Score Node",
      "Pipeline Integration",
      "Bulk Predictions",
    ],
  },
];

const servingFeatures = [
  {
    icon: Gauge,
    title: "High-Performance Neural Inference Engine",
    description:
      "Serve production machine learning models through a low-latency inference gateway engineered for enterprise workloads. Deliver real-time predictions at scale with optimized model execution, intelligent request routing, and P99 latency targets below 45 milliseconds.",
  },
  {
    icon: Cpu,
    title: "Batch Scoring Inside ETL Pipelines",
    description:
      "Apply trained models directly within visual ETL workflows using Predict and Score nodes. Enrich incoming datasets with machine learning predictions without exporting data to external inference platforms.",
  },
  {
    icon: Activity,
    title: "Continuous Drift Detection",
    description:
      "Monitor prediction quality, feature drift, and model performance continuously. Receive automated alerts when model accuracy degrades or data distributions change, enabling proactive retraining before business impact occurs.",
  },
];

const Fourth = () => {
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

      <div className="absolute right-0 top-24 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

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
              Model Serving
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Deploy with Confidence
              <br />
              at Any Scale.
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-8 text-slate-600">
              Move machine learning models from experimentation to production
              through a unified deployment platform. Deliver low-latency
              predictions, execute large-scale batch scoring, and continuously
              monitor production models from a single operational workspace.
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
              {servingFeatures.map((feature) => (
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
                    <Radar className="h-6 w-6 text-cyan-600" />
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      Production AI with Continuous Intelligence
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      Deploy real-time inference, execute large-scale batch
                      scoring, and continuously monitor prediction drift to keep
                      every production model accurate, reliable, and
                      enterprise-ready.
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
                alt="Real-Time Inference & Batch Scoring"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Fourth;
