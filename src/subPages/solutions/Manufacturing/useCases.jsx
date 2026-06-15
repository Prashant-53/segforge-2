import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Factory } from "lucide-react";

import IoTImg from "../../../assets/Solutions/Manufacturing/industrialiot.png";
import MaintenanceImg from "../../../assets/Solutions/Manufacturing/predictiveMaintainance.png";
import SupplyChainImg from "../../../assets/Solutions/Manufacturing/supplychain.png";

const useCases = [
  {
    id: "iot",
    label: "Industrial IoT",
    image: IoTImg,

    outcome: "Connect factory systems and sensor streams in real time.",

    foundation:
      "Combine Real-Time CDC from Oracle, SQL Server, and DB2 with Kafka-based telemetry ingestion to create a unified operational data platform.",

    stats: [
      { value: "CDC", label: "Industrial Data" },
      { value: "Kafka", label: "Streaming" },
      { value: "Live", label: "Operations" },
      { value: "24/7", label: "Telemetry" },
    ],
  },

  {
    id: "maintenance",
    label: "Predictive Maintenance",
    image: MaintenanceImg,

    outcome: "Reduce downtime and improve production quality.",

    foundation:
      "Use anomaly detection, machine learning, and data quality validation to identify equipment failures before they occur and improve manufacturing yields.",

    stats: [
      { value: "ML", label: "Detection" },
      { value: "Early", label: "Warnings" },
      { value: "Less", label: "Downtime" },
      { value: "Higher", label: "Quality" },
    ],
  },

  {
    id: "supply",
    label: "Supply Chain",
    image: SupplyChainImg,

    outcome: "Align production with real-world demand.",

    foundation:
      "Use demand forecasting templates, Iceberg upserts, and real-time supplier data to maintain accurate inventory and production planning.",

    stats: [
      { value: "AI", label: "Forecasting" },
      { value: "Live", label: "Inventory" },
      { value: "Smart", label: "Planning" },
      { value: "Sync", label: "Supply Chain" },
    ],
  },
];

const ManufacturingUseCases = () => {
  const [activeTab, setActiveTab] = useState(useCases[0]);

  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            <Factory className="w-4 h-4" />
            Manufacturing Use Cases
          </div>

          <h2 className="mt-6 text-2xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
            Built for the workflows
            <br />
            that keep production moving.
          </h2>

          <p className="mt-6 text-md text-slate-600 leading-relaxed">
            Connect factory operations, optimize maintenance, and synchronize
            production planning from a single platform.
          </p>
        </div>

        {/* TABS */}

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

export default ManufacturingUseCases;
