import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Server,
  Cloud,
  Database,
  Brain,
  BarChart3,
} from "lucide-react";

const SelfHostedHero = () => {
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
              <Server className="w-4 h-4" />
              Self Hosted Deployment
            </div>

            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05]">
              Run SegForge on your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                infrastructure, on your terms.
              </span>
            </h1>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Keep data, workloads, and infrastructure entirely under your
              control.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Deploy SegForge in your own environment while maintaining the
              flexibility, scalability, and reliability expected from a modern
              data platform.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto px-6 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center gap-2 font-medium">
                Deploy SegForge
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="w-full sm:w-auto px-6 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                <Play className="w-4 h-4" />
                View Deployment Guide
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
              <div className="grid grid-cols-2 gap-4">
                <InfraCard title="AWS" />
                <InfraCard title="Azure" />
                <InfraCard title="GCP" />
                <InfraCard title="On-Prem" />
              </div>

              <Connector />

              <div className="flex justify-center">
                <div className="w-full max-w-[340px] rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 text-center">
                  <Cloud className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                  <h3 className="font-semibold text-slate-900 text-lg">
                    SegForge Platform
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Fully deployed inside your environment
                  </p>
                </div>
              </div>

              <Connector />

              <div className="grid grid-cols-3 gap-4">
                <OutcomeCard icon={Database} title="Data" />

                <OutcomeCard icon={BarChart3} title="Analytics" />

                <OutcomeCard icon={Brain} title="AI" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Connector = () => (
  <div className="flex justify-center py-6">
    <div className="w-px h-10 bg-cyan-300" />
  </div>
);

const InfraCard = ({ title }) => (
  <div className="border border-slate-200 rounded-2xl p-5 text-center bg-slate-50">
    <h4 className="font-medium text-slate-900">{title}</h4>
  </div>
);

const OutcomeCard = ({ icon: Icon, title }) => (
  <div className="border border-slate-200 rounded-2xl p-5 text-center bg-slate-50">
    <Icon className="w-6 h-6 text-cyan-600 mx-auto mb-3" />
    <h4 className="font-medium text-slate-900">{title}</h4>
  </div>
);

export default SelfHostedHero;
