import React from "react";
import { ArrowRight, FileCheck } from "lucide-react";

const deliverables = [
  "Deployment Blueprint",
  "Infrastructure Sizing Guide",
  "Security Configuration Review",
  "Operational Readiness Plan",
];

const DeploymentCTA = () => {
  return (
    <section className="bg-white py-24">
      <div className="max-w-6xl mx-auto px-6">
        <div className="relative overflow-hidden bg-[#f9f8f8] border border-slate-200 rounded-[32px] p-10 lg:p-16">
          {/* Background Glow */}

          <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-cyan-500/5 blur-[100px] rounded-full" />

          <div className="relative z-10">
            {/* Header */}

            <div className="text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100 text-cyan-700 text-sm font-medium mb-8">
                <FileCheck className="w-4 h-4" />
                Deployment Deliverables
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
                Launch production-ready infrastructure
                <br />
                with confidence.
              </h2>

              <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Receive architecture recommendations, deployment guidance,
                infrastructure hardening, and operational best practices
                tailored to your workload requirements.
              </p>
            </div>

            {/* Deliverables */}

            <div className="mt-14 grid md:grid-cols-2 gap-4 max-w-4xl mx-auto">
              {deliverables.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white border border-slate-200 px-6 py-5 text-slate-800 font-medium shadow-sm"
                >
                  {item}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-800 px-6 py-3 font-semibold text-black transition-colors duration-300 hover:text-white">
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full"></span>

                <span className="relative z-10 flex items-center gap-2">
                  Schedule Infrastructure Planning
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-slate-400">
                <span className="relative z-10">
                  Explore Deployment Options
                </span>
              </button>
            </div>

            {/* Trust Row */}

            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
                <span>Deployment Blueprint</span>
                <span>Security Hardening</span>
                <span>Infrastructure Sizing</span>
                <span>Operational Readiness</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentCTA;
