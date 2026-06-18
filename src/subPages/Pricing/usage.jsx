import React from "react";
import { Coins } from "lucide-react";

const pricingStats = [
  {
    value: "Compute",
    label: "Usage-Based",
  },
  {
    value: "Storage",
    label: "Usage-Based",
  },
  {
    value: "Streaming",
    label: "Usage-Based",
  },
  {
    value: "Orchestration",
    label: "Usage-Based",
  },
];

const pricingDimensions = [
  {
    title: "Compute",
    description:
      "Run analytical workloads, notebooks, and streaming jobs with elastic compute resources.",
    pricing: "Charged per TaskManager Slot-Hour",
    items: ["Flink SQL", "Notebooks", "Streaming Jobs"],
  },
  {
    title: "Storage",
    description:
      "Store analytical datasets, Iceberg tables, and lakehouse assets.",
    pricing: "Charged per GB-Month",
    items: ["Iceberg Tables", "Parquet Files"],
  },
  {
    title: "Streaming",
    description:
      "Continuously process CDC events, Kafka streams, and real-time workloads.",
    pricing: "Charged per Million Events",
    items: ["CDC", "Kafka Events", "Real-Time Processing"],
  },
  {
    title: "Orchestration",
    description:
      "Manage pipelines, schedules, and workflow automation across teams.",
    pricing: "Charged per Active Workflow",
    items: ["Pipelines", "Schedules", "DAGs"],
  },
];

const UsageBasedPricing = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            <Coins className="w-4 h-4" />
            Pay For What You Use
          </div>

          <h2 className="text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
            Transparent pricing across
            <br />
            four usage dimensions.
          </h2>

          <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-3xl">
            Only pay for the resources your workloads consume.
            <br />
            <br />
            Scale up or down without being locked into oversized infrastructure
            commitments.
          </p>
        </div>

        {/* Enterprise Stats Bar */}

        <div className="mt-12 border-y border-slate-200 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {pricingStats.map((stat) => (
              <div key={stat.value}>
                <div className="text-2xl lg:text-2xl font-bold text-slate-900">
                  {stat.value}
                </div>

                <div className="mt-2 text-sm text-slate-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Dimensions */}

        <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {pricingDimensions.map((dimension) => (
            <div
              key={dimension.title}
              className="rounded-[28px] bg-slate-50 border border-slate-200 p-6"
            >
              <h3 className="text-xl font-semibold text-slate-900">
                {dimension.title}
              </h3>

              <p className="mt-3 text-sm text-slate-600 leading-relaxed">
                {dimension.description}
              </p>

              <div className="mt-6 space-y-3">
                {dimension.items.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl bg-white border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>

              <div className="mt-6 rounded-xl bg-cyan-50 border border-cyan-100 px-4 py-3">
                <div className="text-sm font-medium text-cyan-700">
                  {dimension.pricing}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UsageBasedPricing;
