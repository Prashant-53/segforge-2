import React from "react";
import { ArrowRight, Network } from "lucide-react";

const deliverables = [
  "Integration Guides",
  "Connector Documentation",
  "Architecture Blueprints",
  "Open API Access",
];

const IntegrationsCTA = () => {
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
                <Network className="w-4 h-4" />
                Open Ecosystem Value
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-slate-900 leading-tight max-w-4xl mx-auto">
                Build your architecture
                <br />
                on your terms.
              </h2>

              <p className="mt-6 text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                Adopt an open platform that integrates with the tools you trust
                today while preserving the flexibility to evolve tomorrow.
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

            {/* Strategic Value Row */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
                <div>
                  <div className="text-2xl font-bold text-slate-900">Open</div>
                  <div className="mt-2 text-sm text-slate-500">Standards</div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    No Vendor
                  </div>
                  <div className="mt-2 text-sm text-slate-500">Lock-In</div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">Data</div>
                  <div className="mt-2 text-sm text-slate-500">Portability</div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    Future
                  </div>
                  <div className="mt-2 text-sm text-slate-500">Flexibility</div>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}

            <div className="mt-12 flex flex-wrap justify-center gap-4">
              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-800 px-6 py-3 font-semibold text-black transition-colors duration-300 hover:text-white">
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full"></span>

                <span className="relative z-10 flex items-center gap-2">
                  Download the Integration Guide
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition-all duration-300 hover:border-slate-400">
                <span className="relative z-10">
                  Browse Supported Connectors
                </span>
              </button>
            </div>

            {/* Bottom Trust Row */}

            <div className="mt-12 pt-8 border-t border-slate-200">
              <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
                <span>Open APIs</span>
                <span>Connector Ecosystem</span>
                <span>Portable Architecture</span>
                <span>Strategic Freedom</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationsCTA;
