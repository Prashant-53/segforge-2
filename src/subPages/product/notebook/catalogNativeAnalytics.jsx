import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Search,
  Wand2,
  Table2,
  BarChart3,
  Download,
  CheckCircle2,
} from "lucide-react";
import NotebookAssist from "../../../assets/Products/NoteBook/notebookassist.webp";

const HeroCatalogNativeAnalytics = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-28">
      {/* Background Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute right-0 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src={NotebookAssist}
                alt="Notebook Data Explorer"
                className="w-full"
              />
            </div>
          </motion.div>
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Data Exploration
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Understand Your Data
              <br />
              Before You Build.
            </h2>

            <p className="mt-4 text-md leading-6 text-slate-600">
              Browse schemas, inspect Iceberg tables, execute queries instantly,
              and visualize results without leaving the notebook. Everything you
              need for exploration lives in one collaborative workspace.
            </p>

            {/* Feature Cards */}

            <div className="mt-10 space-y-5">
              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Database className="h-6 w-6 text-cyan-600" />
                  <h3 className="text-lg font-semibold">Live Schema Browser</h3>
                </div>

                <p className="mt-3 text-slate-600 leading-7">
                  Explore namespaces, Iceberg catalogs, databases, tables,
                  columns, and data types through an integrated catalog browser.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Wand2 className="h-6 w-6 text-cyan-600" />
                  <h3 className="text-lg font-semibold">
                    Auto Query Generation
                  </h3>
                </div>

                <p className="mt-3 text-slate-600 leading-7">
                  Double-click any table to automatically generate a SELECT
                  statement and begin exploring immediately.
                </p>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <Search className="h-6 w-6 text-cyan-600" />
                  <h3 className="text-lg font-semibold">Interactive Results</h3>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  {[
                    "Sort Columns",
                    "Copy Cell Values",
                    "Query Statistics",
                    "CSV Export",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                      <span className="text-sm text-slate-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  <BarChart3 className="h-6 w-6 text-cyan-600" />
                  <h3 className="text-lg font-semibold">
                    Built-in Visualization
                  </h3>
                </div>

                <div className="mt-4 flex flex-wrap gap-3">
                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                    Tables
                  </span>

                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                    Charts
                  </span>

                  <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                    CSV Export
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroCatalogNativeAnalytics;
