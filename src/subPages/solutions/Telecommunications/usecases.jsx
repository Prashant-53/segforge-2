import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { RadioTower } from "lucide-react";

import NetworkImg from "../../../assets/Solutions/Telecom/networkObservability.png";
import ChurnImg from "../../../assets/Solutions/Telecom/churnReduction.png";
import ModernizationImg from "../../../assets/Solutions/Telecom/ossbssModernization.png";

const useCases = [
  {
    id: "network",
    label: "Network Observability",
    image: NetworkImg,

    outcome: "Detect issues faster and improve network performance.",

    foundation:
      "Use CDC, Kafka ingestion, Smart Router optimization, and Flink streaming to process network telemetry and call detail records in real time.",

    stats: [
      { value: "Live", label: "Telemetry" },
      { value: "CDC", label: "Updates" },
      { value: "Kafka", label: "Streaming" },
      { value: "24/7", label: "Monitoring" },
    ],
  },

  {
    id: "churn",
    label: "Customer Experience",
    image: ChurnImg,

    outcome: "Reduce subscriber churn and improve retention.",

    foundation:
      "Deploy churn prediction templates and machine learning models using MLflow, XGBoost, and unified subscriber profiles.",

    stats: [
      { value: "AI", label: "Predictions" },
      { value: "MLflow", label: "Tracking" },
      { value: "360°", label: "Profiles" },
      { value: "Higher", label: "Retention" },
    ],
  },

  {
    id: "modernization",
    label: "OSS/BSS Modernization",
    image: ModernizationImg,

    outcome: "Modernize legacy telecom infrastructure.",

    foundation:
      "Use Debezium CDC, Kafka, and visual pipelines to continuously synchronize Oracle, DB2, and SQL Server systems into a modern lakehouse.",

    stats: [
      { value: "CDC", label: "Migration" },
      { value: "Oracle", label: "Modernized" },
      { value: "DB2", label: "Connected" },
      { value: "Real-Time", label: "Analytics" },
    ],
  },
];

const TelecomUseCases = () => {
  const [activeTab, setActiveTab] = useState(useCases[0]);

  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            <RadioTower className="w-4 h-4" />
            Telecom Use Cases
          </div>

          <h2 className="mt-6 text-2xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
            Built for the workflows
            <br />
            that keep networks running.
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Monitor networks in real time, improve subscriber retention, and
            modernize legacy OSS/BSS environments from a single platform.
          </p>
        </div>

        {/* TABS */}

        <div className="mt-16 flex justify-center">
          <div className="inline-flex p-2 rounded-2xl bg-white border border-slate-200 shadow-sm flex-wrap">
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

        {/* CONTENT */}

        <div className="mt-20 grid lg:grid-cols-2 gap-20 items-center">
          {/* VISUAL LEFT */}

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

          {/* CONTENT RIGHT */}

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab.id}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.35 }}
            >
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

                <p className="mt-4 text-slate-600 leading-relaxed text-lg">
                  {activeTab.foundation}
                </p>
              </div>

              {/* Stats */}

              <div className="mt-12 border-y border-slate-200 py-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {activeTab.stats.map((stat) => (
                    <div key={stat.label}>
                      <div className="text-2xl lg:text-2xl font-bold text-slate-900">
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

export default TelecomUseCases;
