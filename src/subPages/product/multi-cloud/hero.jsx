import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Cloud,
  Database,
  Globe,
  Network,
} from "lucide-react";

const MultiCloudHero = () => {
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
              <Globe className="w-4 h-4" />
              Multi-Cloud Platform
            </div>

            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05]">
              Run your data platform
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                across every cloud.
              </span>
            </h1>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Deploy workloads, store data, and connect systems across cloud
              providers and on-premises environments from a single platform.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Build once, operate anywhere, and keep the flexibility to evolve
              your infrastructure strategy over time.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto px-6 py-4 bg-slate-900 text-white rounded-xl flex items-center justify-center gap-2">
                Explore Multi-Cloud
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="w-full sm:w-auto px-6 py-4 border border-slate-300 rounded-xl text-slate-700 flex items-center justify-center gap-2">
                <Play className="w-4 h-4" />
                View Deployment Options
              </button>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] p-5 sm:p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="relative flex justify-center items-center h-[420px]">
                {/* Center */}

                <div className="absolute w-44 h-44 rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 flex flex-col items-center justify-center z-10">
                  <Database className="w-10 h-10 text-cyan-600 mb-3" />
                  <span className="font-semibold text-slate-900">SegForge</span>
                </div>

                {/* Top Clouds */}

                <CloudNode title="AWS" top="0" left="15%" />
                <CloudNode title="Azure" top="0" right="15%" />
                <CloudNode title="GCP" top="120px" right="0" />

                {/* Bottom */}

                <CloudNode title="On-Prem" bottom="40px" left="35%" />

                {/* Unified Data */}

                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 rounded-2xl bg-slate-900 text-white p-5 text-center">
                  <Network className="w-6 h-6 mx-auto mb-2" />
                  Unified Data
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const CloudNode = ({ title, ...position }) => (
  <div className="absolute" style={position}>
    <div className="w-28 h-28 rounded-2xl border border-slate-200 bg-white flex items-center justify-center font-medium text-slate-700 shadow-sm">
      {title}
    </div>
  </div>
);

export default MultiCloudHero;
