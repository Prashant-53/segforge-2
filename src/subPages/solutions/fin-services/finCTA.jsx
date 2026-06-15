import React from "react";
import { ArrowRight } from "lucide-react";

const FinancialCTA = () => {
  return (
    <section className="py-32 bg-[#fbfafa] overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        <h2 className="text-4xl lg:text-4xl font-bold text-black leading-tight">
          Modernize financial operations
          <br />
          without adding complexity.
        </h2>

        <p className="mt-8 text-md text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Unify data movement, governance, analytics, and machine learning on a
          platform built for modern finance.
        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <button class="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-800 px-6 py-3 font-semibold text-black transition-colors duration-300 hover:text-white">
            <span class="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full"></span>

            <span class="relative z-10"> Explore the Platform</span>
          </button>

          <button class="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-800 px-6 py-3 font-semibold text-black transition-colors duration-300 hover:text-white">
            <span class="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full"></span>

            <span class="relative z-10"> Request Architecture Review</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default FinancialCTA;
