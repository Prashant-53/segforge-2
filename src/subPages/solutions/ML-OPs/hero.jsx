import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit } from "lucide-react";
import MLHeroImg from "../../../assets/Solutions/MachineLearning/hero.png";

const MachineLearningHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
      <div className="absolute inset-0 bg-grid opacity-[0.03]" />
      <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <BrainCircuit className="w-4 h-4" />
              Machine Learning Teams
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05]">
              Turn experiments into
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                production AI faster.
              </span>
            </h1>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Train, evaluate, deploy, and monitor machine learning models on
              the same platform where your data already lives.
              <br />
              <br />
              Eliminate tool fragmentation, accelerate time-to-production, and
              maintain complete control over your data, models, and
              infrastructure.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-800 px-6 py-3 font-semibold">
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 group-hover:w-full"></span>

                <span className="relative z-10 flex items-center gap-2">
                  Launch the MLOps Quick Start
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-800 px-6 py-3 font-semibold">
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 group-hover:w-full"></span>

                <span className="relative z-10">
                  Request an ML Stack Consolidation Audit
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={MLHeroImg}
                alt="Machine Learning Platform"
                className="w-full aspect-[16/10] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MachineLearningHero;
