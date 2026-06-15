import React from "react";
import { motion } from "framer-motion";
import {
  BookOpen,
  Database,
  Terminal,
  CheckCircle2,
  ChevronRight,
  Play,
} from "lucide-react";

const features = [
  "Interactive Notebooks",
  "Flink SQL",
  "PyFlink",
  "Trino",
  "Built-in Schema Browser",
];

const ExploreDataFreely = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <BookOpen className="w-4 h-4" />
              Interactive Analytics
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Explore data using the tools you already know.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Query data, test ideas, and build transformations from an
              interactive notebook environment.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Move seamlessly between SQL, Python, and distributed analytics
              engines without switching tools or workflows.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />

                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Top Bar */}

              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <BookOpen className="w-4 h-4 text-cyan-600" />

                  <span className="font-medium text-slate-900">
                    customer-analysis.ipynb
                  </span>
                </div>

                <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-600 text-white text-sm">
                  <Play className="w-3 h-3" />
                  Run
                </button>
              </div>

              <div className="grid grid-cols-12 min-h-[520px]">
                {/* Schema Browser */}

                <div className="col-span-4 border-r border-slate-200 bg-slate-50 p-5">
                  <h4 className="text-xs uppercase tracking-wider text-slate-500 mb-4">
                    Schema Browser
                  </h4>

                  <div className="space-y-3">
                    {[
                      "customers",
                      "orders",
                      "products",
                      "revenue",
                      "transactions",
                    ].map((table) => (
                      <div
                        key={table}
                        className="flex items-center gap-2 text-sm text-slate-700"
                      >
                        <Database className="w-4 h-4 text-cyan-600" />
                        {table}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Notebook */}

                <div className="col-span-8 p-5">
                  {/* Engine Selector */}

                  <div className="flex gap-2 mb-6">
                    <EngineTag active>Trino</EngineTag>

                    <EngineTag>Flink SQL</EngineTag>

                    <EngineTag>PyFlink</EngineTag>
                  </div>

                  {/* Notebook Cell */}

                  <div className="rounded-2xl border border-slate-200 overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 text-sm text-slate-500">
                      SQL Cell
                    </div>

                    <div className="p-5 font-mono text-sm text-slate-700">
                      {`SELECT customer_segment,
       SUM(revenue) AS total_revenue
FROM sales
GROUP BY customer_segment
ORDER BY total_revenue DESC;`}
                    </div>
                  </div>

                  {/* Result */}

                  <div className="mt-6 rounded-2xl border border-slate-200 overflow-hidden">
                    <div className="px-4 py-3 border-b border-slate-200 bg-slate-50 text-sm text-slate-500">
                      Results
                    </div>

                    <div className="p-5">
                      <div className="space-y-3">
                        <ResultRow segment="Enterprise" value="$1.2M" />

                        <ResultRow segment="Mid-Market" value="$820K" />

                        <ResultRow segment="SMB" value="$390K" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const EngineTag = ({ children, active }) => (
  <div
    className={`px-4 py-2 rounded-xl text-sm font-medium ${
      active ? "bg-cyan-600 text-white" : "bg-slate-100 text-slate-600"
    }`}
  >
    {children}
  </div>
);

const ResultRow = ({ segment, value }) => (
  <div className="flex items-center justify-between py-2 border-b border-slate-100">
    <div className="flex items-center gap-2">
      <ChevronRight className="w-4 h-4 text-cyan-600" />
      <span className="text-slate-700">{segment}</span>
    </div>

    <span className="font-medium text-slate-900">{value}</span>
  </div>
);

export default ExploreDataFreely;
