import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Database,
  Brain,
  Rocket,
  Activity,
} from "lucide-react";

const MLOpsHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-16 pb-24">
      {/* Background Effects */}

      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="-mt-[30px]"
          >
            {/* Label */}

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Brain className="w-4 h-4" />
              MLOps Platform
            </div>

            {/* Heading */}

            <h1 className="text-[2.375rem] lg:text-6xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              Build, train,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                deploy, and monitor machine learning from one platform.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Move from raw data to production-ready models without stitching
              together tools. SegForge brings feature engineering,
              experimentation, deployment, and monitoring into one workflow.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center gap-2 font-medium">
                Launch MLOps Hub
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="px-8 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                <Play className="w-4 h-4" />
                Explore Templates
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

            {/* Workflow Visual */}

            <div className="relative bg-white border border-slate-200 rounded-[32px] p-2 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Data */}

              <div className="flex justify-center">
                <Node
                  icon={Database}
                  title="Data"
                  color="bg-blue-50 text-blue-600"
                />
              </div>

              <Arrow />

              {/* Features */}

              <div className="flex justify-center">
                <Node
                  icon={Brain}
                  title="Features"
                  color="bg-cyan-50 text-cyan-600"
                />
              </div>

              <Arrow />

              {/* Training */}

              <div className="flex justify-center">
                <Node
                  icon={Brain}
                  title="Training"
                  color="bg-purple-50 text-purple-600"
                />
              </div>

              <Arrow />

              {/* Deployment */}

              <div className="flex justify-center">
                <Node
                  icon={Rocket}
                  title="Deployment"
                  color="bg-green-50 text-green-600"
                />
              </div>

              <Arrow />

              {/* Monitoring */}

              <div className="flex justify-center">
                <Node
                  icon={Activity}
                  title="Monitoring"
                  color="bg-orange-50 text-orange-600"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Arrow = () => (
  <div className="flex justify-center py-4">
    <div className="w-px h-10 bg-cyan-300" />
  </div>
);

const Node = ({ icon: Icon, title, color }) => {
  return (
    <div className="w-full max-w-[260px] px-6 py-5 rounded-2xl border border-slate-200 bg-white flex items-center gap-4 shadow-sm">
      <div
        className={`w-12 h-12 rounded-xl flex items-center justify-center ${color}`}
      >
        <Icon className="w-5 h-5" />
      </div>

      <span className="font-semibold text-slate-900">{title}</span>
    </div>
  );
};

export default MLOpsHero;
