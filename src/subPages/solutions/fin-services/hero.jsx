import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play, Landmark } from "lucide-react";
import FinHero from "../../../assets/Solutions/Finance/fin-hero.png";

const FinancialServicesHero = () => {
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
              <Landmark className="w-4 h-4" />
              Financial Services
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05]">
              Modernize risk,
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                compliance, and
                <br />
                financial intelligence.
              </span>
            </h1>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Transform fragmented financial data into trusted, real-time
              insights for lending, risk management, regulatory reporting, and
              customer analytics.
            </p>

            <div className="mt-10 flex  flex-row flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center gap-2 font-medium">
                Explore Financial Solutions
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="px-8 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                <Play className="w-4 h-4" />
                Request Architecture Review
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <img src={FinHero} className="w-full h-auto" alt="Financial Hero" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const SourceCard = ({ icon: Icon, title }) => (
  <div className="border border-slate-200 rounded-2xl p-5 text-center bg-slate-50">
    <Icon className="w-6 h-6 text-cyan-600 mx-auto mb-3" />
    <h4 className="font-medium text-slate-900">{title}</h4>
  </div>
);

const OutcomeCard = ({ icon: Icon, title }) => (
  <div className="rounded-2xl bg-slate-900 text-white p-4 text-center">
    <Icon className="w-5 h-5 mx-auto mb-2" />
    <div className="text-sm font-medium">{title}</div>
  </div>
);

export default FinancialServicesHero;
