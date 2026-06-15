import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Search,
  Database,
  FileText,
  GitBranch,
} from "lucide-react";

const DataCatalogHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
      {/* Background */}
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20  items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Label */}

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Database className="w-4 h-4" />
              Data Catalog
            </div>

            {/* Heading */}

            <h1 className="text-[2.375rem] lg:text-6xl md:text-5xl font-bold  text-slate-900 leading-[1.05]">
              Find, understand,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                and govern enterprise data at scale.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              One place to discover datasets, track lineage, manage metadata,
              and collaborate across teams across your entire lakehouse
              ecosystem.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center gap-2 font-medium">
                Explore Catalog
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="px-8 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                <Play className="w-4 h-4" />
                Book Demo
              </button>
            </div>

            {/* Quick Highlights */}

            <div className="mt-12 flex flex-wrap gap-6">
              <div>
                <h4 className="font-semibold text-slate-900">Data Discovery</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Search & explore datasets
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">Metadata</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Unified catalog management
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">Governance</h4>
                <p className="text-sm text-slate-500 mt-1">
                  Lineage & version tracking
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Top Bar */}

              <div className="border-b border-slate-200 bg-slate-50 px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-400 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-400 rounded-full" />
                  <div className="w-3 h-3 bg-green-400 rounded-full" />
                </div>

                <div className="text-sm text-slate-500">
                  SegForge Data Catalog
                </div>
              </div>

              {/* Catalog UI */}

              <div className="grid grid-cols-12 min-h-[520px]">
                {/* Sidebar */}

                <div className="col-span-4 border-r border-slate-200 bg-slate-50 p-5">
                  <div className="flex items-center gap-2 text-slate-500 mb-5">
                    <Search className="w-4 h-4" />
                    <span className="text-sm">Search datasets</span>
                  </div>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium text-slate-800">raw</p>

                      <div className="ml-4 mt-2 space-y-2 text-slate-500">
                        <p>customer_events</p>
                        <p>transactions</p>
                        <p>orders</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-slate-800">staged</p>

                      <div className="ml-4 mt-2 space-y-2 text-slate-500">
                        <p>sales_cleaned</p>
                        <p>customer_profiles</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-cyan-600">curated</p>

                      <div className="ml-4 mt-2 space-y-2 text-slate-500">
                        <p>revenue_dashboard</p>
                        <p>forecast_data</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Panel */}

                <div className="col-span-8 p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <FileText className="w-4 h-4 text-cyan-600" />
                    <span className="font-semibold text-slate-900">
                      revenue_dashboard
                    </span>
                  </div>

                  {/* Metadata */}

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs text-slate-500">Rows</p>
                      <p className="font-semibold text-slate-900 mt-1">24.3M</p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs text-slate-500">Format</p>
                      <p className="font-semibold text-slate-900 mt-1">
                        Iceberg
                      </p>
                    </div>

                    <div className="bg-slate-50 rounded-xl p-4">
                      <p className="text-xs text-slate-500">Storage</p>
                      <p className="font-semibold text-slate-900 mt-1">S3</p>
                    </div>
                  </div>

                  {/* Schema */}

                  <div className="border border-slate-200 rounded-xl overflow-hidden">
                    <div className="bg-slate-50 px-4 py-3 border-b border-slate-200 font-medium text-slate-900">
                      Schema Preview
                    </div>

                    <div className="p-4 space-y-3 text-sm">
                      <div className="flex justify-between">
                        <span>customer_id</span>
                        <span className="text-slate-500">bigint</span>
                      </div>

                      <div className="flex justify-between">
                        <span>region</span>
                        <span className="text-slate-500">string</span>
                      </div>

                      <div className="flex justify-between">
                        <span>revenue</span>
                        <span className="text-slate-500">decimal</span>
                      </div>

                      <div className="flex justify-between">
                        <span>created_at</span>
                        <span className="text-slate-500">timestamp</span>
                      </div>
                    </div>
                  </div>

                  {/* Lineage */}

                  <div className="mt-6 flex items-center gap-2 text-cyan-600 text-sm font-medium">
                    <GitBranch className="w-4 h-4" />
                    Lineage & Version History Available
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

export default DataCatalogHero;
