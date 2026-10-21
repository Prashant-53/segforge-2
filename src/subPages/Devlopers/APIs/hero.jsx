import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";
import { Link } from "react-router-dom";

const APIsHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-32 pb-24">
      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Background Glow */}

      <div className="absolute top-0 right-0 h-[500px] w-[700px] rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Code2 className="h-4 w-4" />
              APIs
            </div>

            <h1 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
              Programmatically control
              <br />
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                your entire
              </span>
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                data platform.
              </span>
            </h1>

            <p className="mt-6 max-w-xl text-md leading-relaxed text-slate-600">
              Integrate pipelines, CDC streams, catalogs, notebooks, workflow
              automation, and monitoring directly into your applications using
              secure enterprise APIs.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/docs/api-reference/api-overview"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-cyan-500 px-7 py-3 font-semibold text-slate-900 transition-colors duration-300 hover:text-white"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

                <span className="relative z-10 flex items-center gap-2">
                  Explore API Reference
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              <Link
                to="/developers/sdks"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600"
              >
                <Code2 className="h-4 w-4" />
                View SDKs
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Window Header */}

              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-50 px-6 py-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-4 text-sm font-medium text-slate-500">
                  Seg Forge REST API
                </span>
              </div>

              {/* Code */}

              <div className="bg-slate-950 p-8">
                <pre className="overflow-x-auto text-sm leading-8 lg:text-[15px]">
                  <code className="text-slate-300">
                    <span className="text-cyan-400">POST</span>{" "}
                    <span className="text-white">
                      /api/workspaces/{"{id}"}/pipelines
                    </span>
                    {"\n\n"}
                    <span className="text-slate-500">{"{"}</span>
                    {"\n  "}
                    <span className="text-cyan-300">"name"</span>:{" "}
                    <span className="text-green-400">"Daily Orders ETL"</span>,
                    {"\n  "}
                    <span className="text-cyan-300">"mode"</span>:{" "}
                    <span className="text-amber-300">"batch"</span>,{"\n  "}
                    <span className="text-cyan-300">"schedule"</span>:{" "}
                    <span className="text-green-400">"0 2 * * *"</span>
                    {"\n"}
                    <span className="text-slate-500">{"}"}</span>
                  </code>
                </pre>
              </div>

              {/* Footer */}

              <div className="border-t border-slate-200 bg-slate-50 px-6 py-5">
                <p className="text-sm text-slate-500">
                  Everything available through the Seg Forge interface can also
                  be automated using secure REST APIs and SDKs.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default APIsHero;
