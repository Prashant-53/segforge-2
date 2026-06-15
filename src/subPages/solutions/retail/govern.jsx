import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import GovernanceImg from "../../../assets/Solutions/Retail/governance.png";

const trustStats = [
  {
    value: "Git-Style",
    label: "Versioning",
  },
  {
    value: "100%",
    label: "Lineage Visibility",
  },
  {
    value: "PII",
    label: "Protection",
  },
  {
    value: "Audit",
    label: "Ready",
  },
];

const callouts = [
  "Pricing Experiments",
  "Customer Segmentation",
  "Column-Level Lineage",
  "Data Sovereignty",
];

const RetailGovernance = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* CONTENT LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Governance & Security
            </div>

            <h2 className="text-2xl lg:text-5xl font-bold text-slate-900 leading-[1.05]">
              Experiment freely while
              <br />
              protecting customer trust.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Run pricing experiments, customer segmentation analysis, and
              forecasting models without impacting production systems.
              <br />
              <br />
              Maintain visibility, compliance, and control through lineage
              tracking, data versioning, and secure governance.
            </p>

            {/* Enterprise Stats Bar */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {trustStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl lg:text-3xl font-bold text-slate-900">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Callouts */}

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

          {/* VISUAL RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={GovernanceImg}
                alt="Retail Governance Architecture"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RetailGovernance;
