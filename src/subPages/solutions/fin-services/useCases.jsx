import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import CreditRiskImg from "../../../assets/Solutions/Finance/creditRisk.png";
import ReportingImg from "../../../assets/Solutions/Finance/regulatoryReporting.png";
import FraudImg from "../../../assets/Solutions/Finance/fraudDetection.png";

const useCases = [
  {
    id: "credit",
    label: "Credit Risk",
    image: CreditRiskImg,

    outcome: "Reduce credit default risk with real-time scoring.",

    foundation:
      "Use the Credit Risk (PD) template, real-time CDC, and Smart Router technology to continuously update risk models from transactional systems.",

    stats: [
      { value: "PD", label: "Model" },
      { value: "CDC", label: "Real-Time" },
      { value: "Smart", label: "Router" },
      { value: "24/7", label: "Scoring" },
    ],
  },

  {
    id: "reporting",
    label: "Reporting",
    image: ReportingImg,

    outcome: "Deliver trusted reports faster while reducing compliance risk.",

    foundation:
      "Use governed pipelines, lineage tracking, and time-travel capabilities to generate auditable regulatory reports.",

    stats: [
      { value: "100%", label: "Lineage" },
      { value: "Audit", label: "Ready" },
      { value: "Time", label: "Travel" },
      { value: "RBAC", label: "Controls" },
    ],
  },

  {
    id: "fraud",
    label: "Fraud Detection",
    image: FraudImg,

    outcome: "Identify suspicious activity as it happens.",

    foundation:
      "Combine streaming CDC, Flink analytics, and machine learning to detect anomalies in near real time.",

    stats: [
      { value: "CDC", label: "Streaming" },
      { value: "Flink", label: "Analytics" },
      { value: "ML", label: "Detection" },
      { value: "Live", label: "Alerts" },
    ],
  },
];

const FinancialUseCases = () => {
  const [activeTab, setActiveTab] = useState(useCases[0]);

  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            Financial Use Cases
          </div>

          <h2 className="mt-6 text-2xl lg:text-4xl font-bold text-slate-900 leading-tight">
            Built for the workflows
            <br />
            that matter most.
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Accelerate lending, compliance, and fraud detection with
            architectures designed specifically for modern financial
            institutions.
          </p>
        </div>

        <div className="mt-16 flex justify-center">
          <div className="inline-flex p-2 rounded-2xl bg-slate-100">
            {useCases.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab.id === tab.id
                    ? "bg-white text-slate-900 shadow-sm"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-20 grid lg:grid-cols-2 gap-16 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.35 }}
              className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
            >
              <img
                src={activeTab.image}
                alt={activeTab.label}
                className="w-full h-auto"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.35 }}
            >
              {" "}
              <div className="inline-flex px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                Business Outcome
              </div>
              <h3 className="mt-6 text-3xl font-bold text-slate-900 leading-tight">
                {activeTab.outcome}
              </h3>{" "}
              <div className="mt-10">
                <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Technical Foundation
                </h4>

                <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                  {activeTab.foundation}
                </p>
              </div>{" "}
              <div className="mt-12 border-y border-slate-200 py-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {activeTab.stats.map((stat) => (
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
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default FinancialUseCases;
