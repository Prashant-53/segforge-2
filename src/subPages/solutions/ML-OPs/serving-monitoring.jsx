import React from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";
import ServingImg from "../../../assets/Solutions/MachineLearning/serving.png";

const servingStats = [
  {
    value: "Batch",
    label: "Inference",
  },
  {
    value: "Streaming",
    label: "Inference",
  },
  {
    value: "Drift",
    label: "Detection",
  },
  {
    value: "Model",
    label: "Lineage",
  },
];

const callouts = [
  "Predict Node",
  "Real-Time Scoring",
  "Drift Monitoring",
  "Model Lineage",
];

const ProductionServing = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* VISUAL LEFT */}

          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={ServingImg}
                alt="Production AI"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT RIGHT */}

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              Production AI
            </div>

            <h2 className="text-4xl font-bold text-slate-900 leading-[1.05]">
              Deploy, score, and monitor
              <br />
              models continuously.
            </h2>

            <p className="mt-8 text-slate-600 leading-relaxed max-w-xl">
              Apply models through batch or streaming inference while tracking
              performance, drift, and operational health across the entire
              serving lifecycle.
              <br />
              <br />
              Ensure AI systems remain accurate as data evolves.
            </p>

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {servingStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-slate-900">
                      {stat.value}
                    </div>
                    <div className="mt-2 text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4">
              {callouts.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductionServing;
