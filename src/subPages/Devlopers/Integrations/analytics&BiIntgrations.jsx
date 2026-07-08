import React from "react";
import { motion } from "framer-motion";
import {
  BarChart3,
  Database,
  ArrowDown,
  PieChart,
  LineChart,
  LayoutDashboard,
  Layers3,
} from "lucide-react";

const analyticsTools = [
  {
    name: "Apache Superset",
    description:
      "Embedded dashboards, SQL Lab, scheduled reports, and interactive analytics.",
    status: "Native",
    icon: LayoutDashboard,
  },
  {
    name: "Power BI",
    description: "Enterprise business intelligence through Trino connectivity.",
    status: "Supported",
    icon: BarChart3,
  },
  {
    name: "Tableau",
    description:
      "Create rich dashboards and visual analytics directly on Iceberg data.",
    status: "Supported",
    icon: PieChart,
  },
  {
    name: "Qlik Sense",
    description:
      "Self-service analytics powered by open lakehouse architecture.",
    status: "Supported",
    icon: LineChart,
  },
  {
    name: "Trino",
    description:
      "Distributed SQL query engine providing a unified analytics layer.",
    status: "Core Engine",
    icon: Database,
  },
];

const AnalyticsIntegrations = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Grid Background */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right,#06b6d4 1px,transparent 1px),
              linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Analytics & BI
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Connect your lakehouse to
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}
              every analytics platform.
            </span>
          </h2>

          <p className="mt-6 text-md leading-8 text-slate-600">
            Seg Forge stores data in Apache Iceberg while Trino provides a
            high-performance SQL layer, allowing business intelligence tools to
            query data without proprietary connectors or duplicated datasets.
          </p>
        </motion.div>

        {/* Architecture */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 p-14"
        >
          <div className="flex flex-col items-center">
            <div className="rounded-2xl bg-cyan-500/20 p-5">
              <Database className="h-10 w-10 text-cyan-400" />
            </div>

            <h3 className="mt-4 text-xl font-semibold text-white">
              Apache Iceberg
            </h3>

            <ArrowDown className="my-6 h-7 w-7 text-cyan-500" />

            <div className="rounded-2xl bg-cyan-500/20 p-5">
              <Layers3 className="h-10 w-10 text-cyan-400" />
            </div>

            <h3 className="mt-4 text-xl font-semibold text-white">
              Trino SQL Engine
            </h3>

            <ArrowDown className="my-8 h-7 w-7 text-cyan-500" />

            <div className="grid gap-6 md:grid-cols-4 w-full">
              {["Apache Superset", "Power BI", "Tableau", "Qlik Sense"].map(
                (tool) => (
                  <div
                    key={tool}
                    className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur p-6 text-center"
                  >
                    <BarChart3 className="mx-auto h-8 w-8 text-cyan-400" />

                    <h4 className="mt-4 font-semibold text-white">{tool}</h4>

                    <p className="mt-2 text-sm text-slate-400">
                      Dashboards & Reports
                    </p>
                  </div>
                ),
              )}
            </div>
          </div>
        </motion.div>

        {/* Integration Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {analyticsTools.map((tool) => {
            const Icon = tool.icon;

            return (
              <motion.div
                key={tool.name}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-xl bg-cyan-50 p-3">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>

                  <span className="rounded-full bg-cyan-100 px-3 py-1 text-xs font-semibold text-cyan-700">
                    {tool.status}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {tool.name}
                </h3>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {tool.description}
                </p>

                <button className="group mt-8 flex items-center gap-2 text-cyan-600 font-semibold">
                  Learn More
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default AnalyticsIntegrations;
