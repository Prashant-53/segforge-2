import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SDKHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-28 pb-5 lg:pt-36 lg:pb-32">
      {/* Grid */}

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

      <div className="absolute left-1/3 top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[140px]" />
      <div className="absolute bottom-0 right-1/4 h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              SDKs
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-5xl">
              Native client libraries for
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                building on Seg Forge.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600 lg:text-md">
              Programmatically manage pipelines, CDC streams, catalogs,
              notebooks, and monitoring through type-safe, language-native SDKs.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/docs/getting-started/what-is-segforge"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-xl bg-slate-900 px-7 py-4 font-medium text-white"
              >
                <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

                <span className="relative flex items-center gap-2">
                  View Documentation
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              {/* <Link
                to="/developers/sdk-installation"
                className="inline-flex items-center justify-center rounded-xl border border-slate-300 px-7 py-4 font-medium text-slate-700 transition hover:border-cyan-300 hover:bg-cyan-50"
              >
                <Download className="mr-2 h-4 w-4" />
                Install SDK
              </Link> */}
            </div>

            {/* Languages */}

            <div className="mt-8 flex flex-wrap gap-3">
              {["Python", "TypeScript", "Java", "Go", ".NET"].map((lang) => (
                <div
                  key={lang}
                  className="rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm"
                >
                  {lang}
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="overflow-hidden rounded-3xl border border-slate-800 bg-slate-950 shadow-2xl">
              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-800 px-4 py-4 sm:px-6">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500" />
                  <span className="h-3 w-3 rounded-full bg-yellow-500" />
                  <span className="h-3 w-3 rounded-full bg-green-500" />
                </div>

                <div className="rounded-full bg-slate-800 px-3 py-1 text-xs text-slate-400">
                  Python SDK
                </div>
              </div>

              {/* Code */}

              <pre className="overflow-x-auto p-5 text-xs leading-7 text-slate-300 sm:p-8 sm:text-sm sm:leading-8">
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
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SDKHero;
