import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  ArrowRight,
  Play,
  Activity,
  Brain,
  BarChart3,
  Server,
} from "lucide-react";

const RealTimeCDCHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
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
              <Activity className="w-4 h-4" />
              Real-Time CDC
            </div>

            <h1 className="text-4xl lg:text-5xl xl:text-7xl font-bold text-slate-900 leading-[1.05]">
              Keep your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                lakehouse continuously up to date.
              </span>
            </h1>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Capture inserts, updates, and deletes from production databases in
              real time without impacting application performance.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center gap-2 font-medium">
                Start Your First Stream
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="px-8 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                <Play className="w-4 h-4" />
                View CDC Architecture
              </button>
            </div>

            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <h4 className="font-semibold text-slate-900">
                  Sub-Second Latency
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  Real-time synchronization
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Log-Based Capture
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  Minimal source impact
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-slate-900">
                  Automated Recovery
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  Self-healing streams
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative bg-white border border-slate-200 rounded-[32px] p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Sources */}

              <div className="grid grid-cols-2 gap-4">
                <SourceNode label="PostgreSQL" />
                <SourceNode label="MySQL" />
                <SourceNode label="Oracle" />
                <SourceNode label="SQL Server" />
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* CDC Engine */}

              <div className="flex justify-center">
                <div className="w-64 h-40 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 flex flex-col items-center justify-center">
                  <Activity className="w-10 h-10 text-cyan-600 mb-3" />

                  <h3 className="font-bold text-slate-900 text-xl">
                    SegForge CDC
                  </h3>

                  <p className="text-slate-500 text-sm mt-1">
                    Real-Time Change Capture
                  </p>
                </div>
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* Consumers */}

              <div className="grid grid-cols-3 gap-4">
                <ConsumerNode icon={Server} label="Lakehouse" />

                <ConsumerNode icon={BarChart3} label="Analytics" />

                <ConsumerNode icon={Brain} label="AI" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SourceNode = ({ label }) => (
  <div className="p-4 rounded-2xl border border-slate-200 bg-slate-50 flex items-center gap-3">
    <Database className="w-5 h-5 text-cyan-600" />

    <span className="font-medium text-slate-700">{label}</span>
  </div>
);

const ConsumerNode = ({ icon: Icon, label }) => (
  <div className="p-4 rounded-2xl border border-slate-200 bg-white flex flex-col items-center text-center">
    <Icon className="w-5 h-5 text-cyan-600 mb-2" />

    <span className="text-sm font-medium text-slate-700">{label}</span>
  </div>
);

export default RealTimeCDCHero;
