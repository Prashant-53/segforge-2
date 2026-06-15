import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Database,
  GitBranch,
  Lock,
} from "lucide-react";

const GovernanceHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
      {/* Background */}

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
              <ShieldCheck className="w-4 h-4" />
              Data Governance
            </div>

            <h1 className="text-4xl sm:text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05]">
              Govern data with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                confidence and clarity.
              </span>
            </h1>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Understand how data moves, who can access it, and how it is
              protected.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              From lineage tracking and audit trails to access controls and
              sensitive data protection, SegForge helps organizations stay
              compliant without slowing down innovation.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto px-6 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center gap-2 font-medium">
                Audit My Workspace
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="w-full sm:w-auto px-6 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                <Play className="w-4 h-4" />
                Download Security Whitepaper
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
              {/* Data Sources */}

              <div className="flex justify-center">
                <div className="w-full max-w-[280px] rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                  <Database className="w-8 h-8 text-cyan-600 mx-auto mb-3" />

                  <h3 className="font-semibold text-slate-900">Data Sources</h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Databases, Streams, Files
                  </p>
                </div>
              </div>

              <Connector />

              {/* Lineage */}

              <div className="flex justify-center">
                <div className="w-full max-w-[320px] rounded-3xl border border-cyan-200 bg-cyan-50 p-6 text-center">
                  <GitBranch className="w-8 h-8 text-cyan-600 mx-auto mb-3" />

                  <h3 className="font-semibold text-slate-900">Lineage</h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Track every transformation
                  </p>
                </div>
              </div>

              <Connector />

              {/* Governance */}

              <div className="flex justify-center">
                <div className="w-full max-w-[360px] rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 p-8 text-center">
                  <ShieldCheck className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                  <h3 className="font-semibold text-slate-900 text-lg">
                    Governance
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Policies • Auditing • Access Controls
                  </p>
                </div>
              </div>

              <Connector />

              {/* Protected Analytics */}

              <div className="flex justify-center">
                <div className="w-full max-w-[300px] rounded-3xl bg-slate-900 text-white p-8 text-center">
                  <Lock className="w-8 h-8 mx-auto mb-3" />

                  <h3 className="font-semibold text-lg">Protected Analytics</h3>

                  <p className="text-slate-400 text-sm mt-2">
                    Trusted insights with governance built in
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Connector = () => (
  <div className="flex justify-center py-5">
    <div className="w-px h-10 bg-cyan-300" />
  </div>
);

export default GovernanceHero;
