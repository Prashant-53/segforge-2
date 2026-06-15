import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HeartPulse } from "lucide-react";

import Patient360Img from "../../../assets/Solutions/HealthCare/case1.png";
import ResearchImg from "../../../assets/Solutions/HealthCare/case2.png";
import ClaimsFraudImg from "../../../assets/Solutions/HealthCare/case3.png";

const useCases = [
  {
    id: "patient360",
    label: "Patient 360",
    image: Patient360Img,

    outcome: "Deliver a complete patient view across care systems.",

    foundation:
      "Use Real-Time CDC to continuously synchronize EHR, laboratory, and operational systems into a unified patient record.",

    stats: [
      { value: "360°", label: "Patient View" },
      { value: "CDC", label: "Synchronization" },
      { value: "EHR", label: "Integration" },
      { value: "Live", label: "Updates" },
    ],
  },

  {
    id: "research",
    label: "Clinical Research",
    image: ResearchImg,

    outcome: "Accelerate clinical trials and biomedical research.",

    foundation:
      "Use Interactive Notebooks, Flink SQL, and PyFlink to explore large-scale healthcare and genomic datasets.",

    stats: [
      { value: "SQL", label: "Analytics" },
      { value: "PyFlink", label: "Processing" },
      { value: "Scale", label: "Research" },
      { value: "Fast", label: "Insights" },
    ],
  },

  {
    id: "fraud",
    label: "Claims & Fraud",
    image: ClaimsFraudImg,

    outcome: "Reduce fraudulent claims and operational costs.",

    foundation:
      "Combine streaming CDC, Flink analytics, and machine learning to detect anomalies in claims activity.",

    stats: [
      { value: "CDC", label: "Streaming" },
      { value: "Flink", label: "Analytics" },
      { value: "ML", label: "Detection" },
      { value: "Live", label: "Alerts" },
    ],
  },
];

const HealthcareUseCases = () => {
  const [activeTab, setActiveTab] = useState(useCases[0]);

  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            <HeartPulse className="w-4 h-4" />
            Healthcare Use Cases
          </div>

          <h2 className="mt-6 text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
            Built for the healthcare
            <br />
            workflows that matter most.
          </h2>

          <p className="mt-6 text-md text-slate-600 leading-relaxed">
            Accelerate patient care, clinical research, and fraud prevention
            using real-time healthcare data pipelines.
          </p>
        </div>
        <div className="mt-16 flex justify-center">
          <div className="inline-flex p-2 rounded-2xl bg-white border border-slate-200 shadow-sm">
            {useCases.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                  activeTab.id === tab.id
                    ? "bg-cyan-50 text-cyan-700"
                    : "text-slate-500 hover:text-slate-700"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>
        <div className="mt-20 grid lg:grid-cols-2 gap-20 items-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.35 }}
              className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
            >
              <img
                src={activeTab.image}
                alt={activeTab.label}
                className="w-full object-cover"
              />
            </motion.div>
          </AnimatePresence>
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
              {" "}
              <div className="inline-flex px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                Business Outcome
              </div>
              <h3 className="mt-6 text-3xl lg:text-4xl font-bold text-slate-900 leading-tight">
                {activeTab.outcome}
              </h3>
              <div className="mt-10">
                <h4 className="text-xs uppercase tracking-[0.2em] text-slate-500">
                  Technical Foundation
                </h4>

                <p className="mt-4 text-slate-600 leading-relaxed text-md">
                  {activeTab.foundation}
                </p>
              </div>
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

export default HealthcareUseCases;
