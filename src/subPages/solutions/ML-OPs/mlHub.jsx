import React from "react";
import { motion } from "framer-motion";
import { Boxes } from "lucide-react";
import MLOpsHubImg from "../../../assets/Solutions/MachineLearning/mlops-hub.png";

const mlopsStats = [
  { value: "MLflow", label: "Integrated" },
  { value: "ETL Studio", label: "Features" },
  { value: "XGBoost", label: "Ready" },
  { value: "Unified", label: "Lifecycle" },
];

const callouts = [
  "Feature Engineering",
  "MLflow Tracking",
  "Experiment Registry",
  "Model Deployment",
];

const MLOpsHub = () => {
  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Boxes className="w-4 h-4" />
              Unified MLOps
            </div>

            <h2 className="text-4xl font-bold text-slate-900 leading-[1.05]">
              Bridge the gap between
              <br />
              research and production.
            </h2>

            <p className="mt-8 text-slate-600 leading-relaxed max-w-xl">
              Engineer features, train models, track experiments, and deploy
              production workloads from a single operational environment.
              <br />
              <br />
              Reduce handoffs between data engineering, data science, and
              operations teams.
            </p>

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {mlopsStats.map((stat) => (
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
                  className="rounded-2xl bg-white border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={MLOpsHubImg}
                alt="Unified MLOps"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MLOpsHub;
