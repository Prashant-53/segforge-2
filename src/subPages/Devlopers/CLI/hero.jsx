import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Download, Terminal, ChevronRight } from "lucide-react";

const CLIHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-36 pb-28">
      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Background Glow */}

      <div className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[180px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">
        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, x: -25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            <Terminal className="h-4 w-4" />
            Seg Forge CLI
          </div>

          <h1 className="mt-8 text-5xl font-bold  text-slate-900 lg:text-6xl">
            Automate your
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              entire data platform
            </span>
            <br />
            from the terminal.
          </h1>

          <p className="mt-4 max-w-xl text-md leading-8 text-slate-600">
            Deploy pipelines, provision compute, manage CDC streams, monitor
            jobs, and integrate Seg Forge into CI/CD workflows through a fast,
            developer-first command-line interface.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            {/* Install */}

            <button className="group relative overflow-hidden rounded-xl bg-slate-900 px-8 py-4 font-semibold text-white transition">
              <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

              <span className="relative flex items-center gap-2">
                <Download className="h-5 w-5" />
                Install CLI
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>

            {/* Commands */}

            <button className="group relative overflow-hidden rounded-xl border border-slate-300 bg-white px-8 py-4 font-semibold text-slate-700 transition">
              <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

              <span className="relative flex items-center gap-2 transition-colors duration-300 group-hover:text-white">
                View Commands
                <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
            {/* Terminal Header */}

            <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
              <div className="flex gap-2">
                <div className="h-3 w-3 rounded-full bg-red-500" />
                <div className="h-3 w-3 rounded-full bg-yellow-500" />
                <div className="h-3 w-3 rounded-full bg-green-500" />
              </div>

              <p className="font-mono text-sm text-slate-500">terminal</p>
            </div>

            {/* Terminal */}

            <div className="space-y-7 p-8 font-mono text-sm text-slate-800">
              <div>
                <span className="text-cyan-500">$</span>{" "}
                <span>segforge login</span>
                <p className="mt-3 text-green-600">
                  ✔ Authentication successful
                </p>
              </div>

              <div>
                <span className="text-cyan-500">$</span>{" "}
                <span>segforge pipeline run daily-orders</span>
                <p className="mt-3 text-green-600">✔ Pipeline Started</p>
                <div className="mt-4 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex justify-between text-slate-600">
                    <span>Run ID</span>

                    <span className="font-medium text-cyan-600">
                      run_7f21ac...
                    </span>
                  </div>

                  <div className="mt-3 flex justify-between text-slate-600">
                    <span>Status</span>

                    <span className="font-medium text-amber-600">Running</span>
                  </div>
                </div>
              </div>

              <div>
                <span className="text-cyan-500">$</span>{" "}
                <span>segforge runs watch run_7f21ac...</span>
                <div className="mt-5">
                  <div className="h-2 overflow-hidden rounded-full bg-slate-200">
                    <motion.div
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                      }}
                      className="h-full rounded-full bg-gradient-to-r from-cyan-500 to-blue-600"
                    />
                  </div>
                </div>
                <div className="mt-5 rounded-xl border border-slate-200 bg-slate-50 p-4">
                  <p className="text-green-600">✔ Completed</p>

                  <div className="mt-3 flex justify-between text-slate-600">
                    <span>Rows Written</span>

                    <span className="font-semibold text-slate-900">
                      152,431
                    </span>
                  </div>
                </div>
              </div>

              {/* Animated Cursor */}

              <motion.span
                animate={{
                  opacity: [0, 1, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 1,
                }}
                className="inline-block h-5 w-2 bg-cyan-500"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CLIHero;
