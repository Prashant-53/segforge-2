import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Check,
  ArrowUpRight,
  Braces,
  Terminal,
  Sparkles,
} from "lucide-react";

import Hero from "../../../assets/Products/AI/fifth.webp";

const codeLines = [
  { number: "01", text: "function analyzeData(records) {" },
  { number: "02", text: "  const results = records.filter(" },
  { number: "03", text: "    (record) => record.active" },
  { number: "04", text: "  );" },
  { number: "05", text: "  return results;" },
  { number: "06", text: "}" },
];
const Fifth = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(#1affe5 1px, transparent 1px), linear-gradient(90deg, #1affe5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-blue-500/10 blur-[110px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65 }}
          >
            {/* Eyebrow */}
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/[0.06] px-4 py-2 text-xs font-semibold tracking-[0.16em] text-cyan-600">
              <Code2 size={15} />
              Code Assist
            </div>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-slate-900 ">
              Bring AI assistance into the developer workflow.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-6 text-slate-600 text-md">
              Support development with AI-powered code assistance. SegForge Code
              Assist brings AI into the coding experience, helping developers
              work with code as part of their broader data and AI environment.
            </p>
          </motion.div>

          {/* Developer code visual */}
          <motion.div
            initial={{ opacity: 0, y: 28, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.75, delay: 0.15 }}
            className="relative"
          >
            {/* Outer glow */}
            <div className="absolute -inset-5 rounded-3xl bg-cyan-400/[0.06] blur-2xl" />

            <div className="relative overflow-hidden rounded-2xl border border-slate-700/80 bg-[#090f1d] shadow-2xl shadow-black/30">
              {/* Window header */}
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-4">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-300/80" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
                </div>

                <div className="flex items-center gap-2 text-xs text-slate-400">
                  <Braces size={14} />
                  data-analysis.js
                </div>

                <Terminal size={16} className="text-slate-500" />
              </div>

              {/* Code editor */}
              <div className="p-5 sm:p-7">
                <div className="mb-6 flex items-center gap-2 text-xs text-slate-500">
                  <span className="text-cyan-300">src</span>
                  <span>/</span>
                  <span>data-analysis.js</span>
                </div>

                <div className="space-y-3 overflow-x-auto font-mono text-xs sm:text-sm">
                  {codeLines.map((line, index) => (
                    <motion.div
                      key={line.number}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.35,
                        delay: 0.25 + index * 0.08,
                      }}
                      className="flex min-w-max gap-5"
                    >
                      <span className="w-5 select-none text-right text-slate-600">
                        {line.number}
                      </span>
                      <span
                        className={
                          index === 0 || index === 5
                            ? "text-blue-300"
                            : index === 2
                              ? "text-cyan-200"
                              : "text-slate-300"
                        }
                      >
                        {line.text}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* AI assistance card */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  className="mt-8 rounded-xl border border-cyan-400/20 bg-cyan-400/[0.06] p-4 sm:p-5"
                >
                  <div className="flex items-center gap-2 text-sm font-medium text-cyan-200">
                    <Sparkles size={16} />
                    Code Assist
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    AI assistance for your code-related tasks, right within your
                    development workflow.
                  </p>

                  <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-300" />
                    AI-powered developer assistance
                  </div>
                </motion.div>
              </div>

              {/* Bottom status bar */}
              <div className="flex items-center justify-between border-t border-slate-800 px-5 py-3 text-[11px] text-slate-500">
                <span className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                  SegForge Developer Workspace
                </span>
                <span>Code Assist</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Fifth;
