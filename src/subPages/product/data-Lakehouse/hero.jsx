import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Database,
  Brain,
  BarChart3,
  Server,
  FileText,
  Activity,
} from "lucide-react";

const LakehouseHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
      {/* Background */}

      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Database className="w-4 h-4" />
              Data Lakehouse
            </div>

            <h1 className="text-4xl  md:text-6xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              One platform for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                storing, processing, and analyzing enterprise data.
              </span>
            </h1>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Combine the flexibility of a data lake with the performance,
              governance, and reliability of a modern warehouse. Build once and
              support analytics, AI, and operational workloads from the same
              foundation.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center gap-2 font-medium">
                Explore Lakehouse
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="px-8 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                <Play className="w-4 h-4" />
                Book Demo
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <h4 className="font-semibold text-slate-900">Open Standards</h4>
                <p className="text-sm text-slate-500 mt-1">Iceberg & Nessie</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Unified Storage
                </h4>
                <p className="text-sm text-slate-500 mt-1">Batch & Streaming</p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Analytics Ready
                </h4>
                <p className="text-sm text-slate-500 mt-1">BI, AI & SQL</p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)] p-10">
              {/* Sources */}

              <div className="grid grid-cols-2 gap-4">
                <SourceNode icon={Database} label="PostgreSQL" />
                <SourceNode icon={Database} label="MySQL" />
                <SourceNode icon={Activity} label="Kafka" />
                <SourceNode icon={FileText} label="Files" />
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* Lakehouse Core */}

              <div className="flex justify-center">
                <div className="w-full max-w-xs rounded-3xl h-64 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 flex flex-col items-center justify-center text-center">
                  <Server className="w-12 h-12 text-cyan-600 mb-4" />

                  <h3 className="text-2xl font-bold text-slate-900">
                    SegForge
                  </h3>

                  <p className="text-slate-600">Lakehouse</p>
                </div>
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* Consumers */}

              <div className="grid grid-cols-3 gap-4">
                <ConsumerNode icon={BarChart3} label="Analytics" />

                <ConsumerNode icon={Brain} label="AI / ML" />

                <ConsumerNode icon={Database} label="BI" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SourceNode = ({ icon: Icon, label }) => {
  return (
    <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center gap-3">
      <Icon className="w-5 h-5 text-cyan-600" />
      <span className="font-medium text-slate-700">{label}</span>
    </div>
  );
};

const ConsumerNode = ({ icon: Icon, label }) => {
  return (
    <div className="p-4 rounded-2xl border border-slate-200 bg-white flex flex-col items-center text-center">
      <Icon className="w-5 h-5 text-cyan-600 mb-2" />
      <span className="text-sm font-medium text-slate-700">{label}</span>
    </div>
  );
};

export default LakehouseHero;
