import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu } from "lucide-react";

import AIProductImg from "../../../assets/Solutions/Technology/aiProduct.png";
import AnalyticsImg from "../../../assets/Solutions/Technology/realtimeAnalytics.png";
import SaaSImg from "../../../assets/Solutions/Technology/multiTenant.png";

const useCases = [
  {
    id: "ai",
    label: "AI Product Development",
    image: AIProductImg,

    outcome: "Ship AI-powered features faster.",

    foundation:
      "Use the MLOps Hub, MLflow integration, and Nessie data branching to train, evaluate, and deploy models without leaving the platform.",

    stats: [
      { value: "MLflow", label: "Tracking" },
      { value: "Nessie", label: "Versioning" },
      { value: "MLOps", label: "Lifecycle" },
      { value: "AI", label: "Features" },
    ],
  },

  {
    id: "analytics",
    label: "Real-Time Product Analytics",
    image: AnalyticsImg,

    outcome: "Understand customer behavior as it happens.",

    foundation:
      "Combine CDC, Kafka, and Smart Router technology to continuously power analytics and operational dashboards.",

    stats: [
      { value: "Live", label: "Insights" },
      { value: "CDC", label: "Updates" },
      { value: "Kafka", label: "Streaming" },
      { value: "24/7", label: "Analytics" },
    ],
  },

  {
    id: "saas",
    label: "Multi-Tenant SaaS Operations",
    image: SaaSImg,

    outcome: "Scale securely across customers.",

    foundation:
      "Use isolated workspaces, RBAC, Azure AD SSO, and encrypted credentials to support thousands of tenants on a shared platform.",

    stats: [
      { value: "RBAC", label: "Security" },
      { value: "SSO", label: "Identity" },
      { value: "Isolated", label: "Workspaces" },
      { value: "Multi", label: "Tenant" },
    ],
  },
];

const TechnologyUseCases = () => {
  const [activeTab, setActiveTab] = useState(useCases[0]);

  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* HEADER */}

        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            <Cpu className="w-4 h-4" />
            Technology Use Cases
          </div>

          <h2 className="mt-6 text-2xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
            Built for the workflows
            <br />
            that power modern software products.
          </h2>

          <p className="mt-6 text-md text-slate-600 leading-relaxed">
            Build AI products, analyze customer behavior, and scale multi-tenant
            platforms from a single data operating system.
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

              <h3 className="mt-6 text-3xl lg:text-2xl font-bold text-slate-900 leading-tight">
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

export default TechnologyUseCases;
