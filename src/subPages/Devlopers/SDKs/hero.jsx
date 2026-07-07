import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronRight } from "lucide-react";

const SDKHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-36 pb-32">
      {/* Background Grid */}

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}

      <div className="absolute top-20 left-1/3 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px]" />

      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[160px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              SDKs
            </div>

            <h1 className="mt-8 text-5xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              Native client libraries for
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                building on Seg Forge.
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-slate-600">
              Programmatically manage pipelines, CDC streams, catalogs,
              notebooks, and monitoring through type-safe, language-native SDKs.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="group relative overflow-hidden rounded-2xl bg-slate-900 px-7 py-4 text-white font-medium">
                <span className="absolute inset-0 bg-cyan-500 origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100" />

                <span className="relative flex items-center gap-2">
                  View Documentation
                  <ArrowRight className="w-4 h-4" />
                </span>
              </button>

              <button className="group rounded-2xl border border-slate-300 px-7 py-4 font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50">
                <span className="flex items-center gap-2">
                  <Download className="w-4 h-4" />
                  Install SDK
                </span>
              </button>
            </div>

            {/* Languages */}

            <div className="mt-10 flex flex-wrap gap-3">
              {["Python", "TypeScript", "Java", "Go", ".NET"].map((lang) => (
                <div
                  key={lang}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
                >
                  {lang}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-[32px] border border-slate-800 bg-slate-950 shadow-2xl">
              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <div className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  Python SDK
                </div>
              </div>

              {/* Code */}

              <pre className="overflow-x-auto p-8 text-sm leading-8 text-slate-300">
                <code>{`from segforge import SegForgeClient

client = SegForgeClient(
    api_key="sf_live_...",
    workspace_id="ws-123"
)

pipeline = client.pipelines.get(
    "daily-sync"
)

pipeline.run()`}</code>
              </pre>
            </div>

            {/* Floating card */}

            <div className="absolute -bottom-6 -left-6 rounded-2xl border border-slate-200 bg-white p-5 shadow-xl">
              <div className="text-sm text-slate-500">Supported SDKs</div>

              <div className="mt-2 text-2xl font-bold text-slate-900">
                5 Languages
              </div>

              <div className="mt-2 flex items-center gap-1 text-cyan-600 text-sm font-medium">
                Type-safe APIs
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SDKHero;
