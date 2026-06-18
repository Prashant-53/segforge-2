import React from "react";
import { motion } from "framer-motion";
import { DollarSign, ArrowRight } from "lucide-react";
import PricingHeroImg from "../../../assets/Pricing/pricing-hero.png";

const PricingHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
      <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <DollarSign className="w-4 h-4" />
              Simple, Transparent Pricing
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05]">
              Modern lakehouse economics
              <br />
              without vendor lock-in.
            </h1>

            <p className="mt-8 text-slate-600 leading-relaxed max-w-xl">
              Consolidate ingestion, transformation, analytics, governance, and
              machine learning into a single platform designed to reduce
              infrastructure complexity and operational costs.
              <br />
              <br />
              Whether you choose self-hosted sovereignty or fully managed cloud
              simplicity, SegForge scales with your data—not your vendor count.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-800 px-6 py-3 font-semibold">
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 group-hover:w-full"></span>

                <span className="relative z-10 flex items-center gap-2">
                  Start Free with $400 Cloud Credits
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <button className="rounded-md border border-slate-300 px-6 py-3 font-semibold">
                Deploy the Open Source Docker Image
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={PricingHeroImg}
                alt="SegForge Pricing"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
