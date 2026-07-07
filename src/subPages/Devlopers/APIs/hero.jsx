import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Code2 } from "lucide-react";

const APIsHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-36 pb-28">
      {/* Grid */}

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
            linear-gradient(to right, #06b6d4 1px, transparent 1px),
            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
          `,
          backgroundSize: "90px 90px",
        }}
      />

      {/* Glows */}

      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[160px]" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[180px]" />

      {/* Floating Dots */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 rounded-full bg-cyan-400/30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-7">
              <Code2 className="w-4 h-4" />
              APIs
            </div>

            <h1 className="text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.05]">
              Programmatic control for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                your entire data platform.
              </span>
            </h1>

            <p className="mt-8 text-xl text-slate-600 leading-relaxed max-w-2xl">
              Integrate pipelines, CDC streams, catalogs, notebooks, and
              monitoring directly into your applications and workflows.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-5">
              {/* Primary Button */}

              <button className="group relative overflow-hidden rounded-2xl bg-slate-900 px-8 py-4 font-medium text-white">
                <span className="absolute inset-0 bg-cyan-500 translate-x-[-100%] group-hover:translate-x-0 transition-transform duration-500" />

                <span className="relative flex items-center gap-2">
                  Explore API Reference
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </button>

              {/* Secondary */}

              <button className="group relative overflow-hidden rounded-2xl border border-slate-300 bg-white px-8 py-4 font-medium text-slate-700 hover:border-cyan-300 transition">
                <span className="absolute inset-0 bg-cyan-50 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                <span className="relative">View SDKs</span>
              </button>
            </div>
          </motion.div>

          {/* Right Code Screenshot */}

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.2,
            }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 bg-cyan-500/10 blur-[120px]" />

            <div className="relative rounded-[32px] border border-slate-200 bg-white shadow-[0_30px_80px_rgba(0,0,0,0.08)] overflow-hidden">
              {/* Header */}

              <div className="flex items-center gap-2 px-6 py-5 border-b border-slate-100">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-yellow-400" />
                <div className="w-3 h-3 rounded-full bg-green-400" />

                <div className="ml-4 text-sm text-slate-500">
                  Seg Forge API Request
                </div>
              </div>

              {/* Code */}

              <div className="bg-slate-950 p-8">
                <pre className="overflow-x-auto text-[15px] leading-8">
                  <code className="text-slate-300">
                    <span className="text-cyan-400">POST</span>{" "}
                    <span className="text-white">
                      /api/workspaces/{"{id}"}/pipelines
                    </span>
                    {"\n\n"}
                    <span className="text-slate-500">{"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-cyan-300">"name"</span>:{" "}
                    <span className="text-green-400">"Daily Orders ETL"</span>,
                    {"\n"}
                    {"  "}
                    <span className="text-cyan-300">"mode"</span>:{" "}
                    <span className="text-amber-300">"batch"</span>
                    {"\n"}
                    <span className="text-slate-500">{"}"}</span>
                  </code>
                </pre>
              </div>

              {/* Footer */}

              <div className="px-6 py-5 border-t border-slate-100 bg-slate-50">
                <p className="text-sm text-slate-500">
                  Everything you can do in the UI can be automated through the
                  Seg Forge API.
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
