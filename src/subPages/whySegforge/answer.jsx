import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Workflow,
  Radio,
  Search,
  BarChart3,
  Brain,
  Shield,
  Eye,
  Layers,
} from "lucide-react";

import SolutionImg from "../../assets/why-segforge/solution.png";

const UnifiedAnswer = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* CONTENT LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              The Unified Answer
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.05]">
              One platform.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                Total control.
              </span>
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Instead of stitching together disconnected tools, SegForge brings
              data movement, storage, analytics, governance, and machine
              learning into a single workspace.
            </p>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Connections, pipelines, CDC, notebooks, and models all operate
              within the same environment with shared authentication,
              governance, and observability.
            </p>

            {/* Enterprise Stats */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-2xl font-bold text-slate-900">1</div>
                  <div className="mt-2 text-sm text-slate-500">
                    Unified Platform
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    Shared
                  </div>
                  <div className="mt-2 text-sm text-slate-500">Governance</div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    Real-Time
                  </div>
                  <div className="mt-2 text-sm text-slate-500">Operations</div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">Open</div>
                  <div className="mt-2 text-sm text-slate-500">
                    Architecture
                  </div>
                </div>
              </div>
            </div>

            {/* Shared Controls */}
          </motion.div>

          {/* VISUAL RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={SolutionImg}
                alt="SegForge Unified Platform"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default UnifiedAnswer;
