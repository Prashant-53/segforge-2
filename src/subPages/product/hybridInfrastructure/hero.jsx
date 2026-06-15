import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Building2,
  Cloud,
  Network,
  Database,
} from "lucide-react";

const HybridCloudHero = () => {
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
              <Network className="w-4 h-4" />
              Hybrid Cloud
            </div>

            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05]">
              Connect on-premises and
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                cloud environments.
              </span>
            </h1>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Unify infrastructure, data, and workloads across private data
              centers and cloud providers without rebuilding existing systems.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Operate from a single control plane while keeping data exactly
              where it belongs.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="px-6 py-4 bg-slate-900 text-white rounded-xl flex items-center justify-center gap-2">
                Explore Hybrid Infrastructure
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="px-6 py-4 border border-slate-300 rounded-xl text-slate-700 flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                Schedule Architecture Review
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="relative h-[420px] flex items-center justify-center">
                {/* SegForge */}

                <div className="absolute w-48 h-48 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 flex flex-col items-center justify-center z-10">
                  <Database className="w-10 h-10 text-cyan-600 mb-3" />

                  <h3 className="font-semibold text-slate-900">SegForge</h3>
                </div>

                {/* On Prem */}

                <div className="absolute top-0 left-1/2 -translate-x-1/2">
                  <div className="w-56 rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center">
                    <Building2 className="w-7 h-7 text-cyan-600 mx-auto mb-3" />

                    <h4 className="font-medium text-slate-900">
                      On-Prem Data Center
                    </h4>
                  </div>
                </div>

                {/* Clouds */}

                <div className="absolute bottom-0 left-0">
                  <CloudNode title="AWS" />
                </div>

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2">
                  <CloudNode title="Azure" />
                </div>

                <div className="absolute bottom-0 right-0">
                  <CloudNode title="GCP" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CloudNode = ({ title }) => (
  <div className="w-28 rounded-2xl border border-slate-200 bg-white p-4 text-center shadow-sm">
    <Cloud className="w-5 h-5 text-cyan-600 mx-auto mb-2" />
    <span className="text-sm font-medium text-slate-900">{title}</span>
  </div>
);

export default HybridCloudHero;
