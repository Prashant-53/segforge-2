import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingBag } from "lucide-react";

import Customer360Img from "../../../assets/Solutions/Retail/usecaseR1.png";
import InventoryImg from "../../../assets/Solutions/Retail/usecaseR2.png";
import PredictiveImg from "../../../assets/Solutions/Retail/usecaseR3.png";

const useCases = [
  {
    id: "customer360",
    label: "Customer 360",
    image: Customer360Img,

    outcome: "Create a complete real-time view of every customer.",

    foundation:
      "Combine transactional systems, web activity, and marketing interactions into a unified customer profile using CDC, Kafka ingestion, and identity resolution.",

    stats: [
      { value: "360°", label: "Customer View" },
      { value: "CDC", label: "Streaming" },
      { value: "Kafka", label: "Ingestion" },
      { value: "Live", label: "Profiles" },
    ],
  },

  {
    id: "inventory",
    label: "Inventory Visibility",
    image: InventoryImg,

    outcome: "Prevent stockouts and improve fulfillment accuracy.",

    foundation:
      "Use Real-Time CDC and Smart Router technology to continuously synchronize inventory changes across warehouses, stores, and fulfillment systems.",

    stats: [
      { value: "24/7", label: "Sync" },
      { value: "Live", label: "Inventory" },
      { value: "CDC", label: "Updates" },
      { value: "Fast", label: "Routing" },
    ],
  },

  {
    id: "predictive",
    label: "Predictive Retail",
    image: PredictiveImg,

    outcome: "Improve retention and optimize procurement decisions.",

    foundation:
      "Deploy Demand Forecasting and Churn Prediction templates powered by Flink, MLflow, and automated scoring pipelines.",

    stats: [
      { value: "ML", label: "Forecasting" },
      { value: "Flink", label: "Processing" },
      { value: "Auto", label: "Scoring" },
      { value: "AI", label: "Insights" },
    ],
  },
];

const RetailUseCases = () => {
  const [activeTab, setActiveTab] = useState(useCases[0]);

  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* SECTION HEADER */}

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            <ShoppingBag className="w-4 h-4" />
            Retail Use Cases
          </div>

          <h2 className="mt-6 text-2xl lg:text-5xl font-bold text-slate-900 leading-[1.05]">
            Built for the retail workflows
            <br />
            that drive growth.
          </h2>

          <p className="mt-6 text-lg text-slate-600 leading-relaxed">
            Accelerate customer intelligence, inventory visibility, and
            predictive retail operations from a single platform.
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

export default RetailUseCases;
