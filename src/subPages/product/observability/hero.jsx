import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Activity,
  Server,
  Workflow,
  Database,
  ShieldCheck,
  Bell,
} from "lucide-react";

const ObservabilityHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              Observability Platform
            </div>

            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05]">
              See what's happening
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                across your data platform.
              </span>
            </h1>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Monitor infrastructure, pipelines, data freshness, and operational
              health from a single observability workspace.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Identify issues faster, understand their impact, and keep critical
              data products running reliably.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto px-6 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center gap-2 font-medium">
                Open Monitoring Dashboard
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="w-full sm:w-auto px-6 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                <Play className="w-4 h-4" />
                View Platform Health
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] p-5 sm:p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Sources */}

              <div className="grid grid-cols-3 gap-4">
                <VisualCard icon={Server} title="Infrastructure" />

                <VisualCard icon={Workflow} title="Pipelines" />

                <VisualCard icon={Database} title="Data" />
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-10 bg-cyan-300" />
              </div>

              {/* Hub */}

              <div className="flex justify-center">
                <div className="w-full max-w-[340px] rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 p-8 text-center">
                  <Activity className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                  <h3 className="font-semibold text-slate-900 text-lg">
                    Observability Hub
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Unified monitoring and diagnostics
                  </p>
                </div>
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-10 bg-cyan-300" />
              </div>

              {/* Outcomes */}

              <div className="grid grid-cols-3 gap-4">
                <VisualCard icon={ShieldCheck} title="Health" />

                <VisualCard icon={Activity} title="Performance" />

                <VisualCard icon={Bell} title="Alerts" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const VisualCard = ({ icon: Icon, title }) => (
  <div className="border border-slate-200 rounded-2xl p-5 text-center bg-slate-50">
    <Icon className="w-6 h-6 text-cyan-600 mx-auto mb-3" />
    <h4 className="font-medium text-slate-900">{title}</h4>
  </div>
);

export default ObservabilityHero;
