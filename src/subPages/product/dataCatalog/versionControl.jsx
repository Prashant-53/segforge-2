import React from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  GitCommitHorizontal,
  GitMerge,
  RotateCcw,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: GitBranch,
    title: "Branches",
    description:
      "Create isolated workspaces for experimentation without affecting production data.",
  },
  {
    icon: GitCommitHorizontal,
    title: "Commits",
    description:
      "Track every schema update, table creation, and data modification with a complete history.",
  },
  {
    icon: GitMerge,
    title: "Tags & Merges",
    description:
      "Promote validated datasets across development, staging, and production environments.",
  },
  {
    icon: RotateCcw,
    title: "Rollbacks",
    description:
      "Instantly restore previous versions whenever changes don't go as planned.",
  },
];

const VersionControlSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-28">
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
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Apache Nessie Version Control
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
            Version Your Data
            <br />
            Like You Version Code.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-md leading-6 text-slate-600">
            Experiment safely, collaborate confidently, and recover instantly
            with Git-inspired version control built for your entire lakehouse.
          </p>
        </motion.div>

        {/* Features */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-cyan-200 hover:shadow-xl"
            >
              <div className="flex flex-row gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                  <feature.icon className="h-7 w-7 text-cyan-600" />
                </div>
                <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                  {feature.title}
                </h3>
              </div>
              <p className="mt-4 leading-6 text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}

        <div className="mt-16 rounded-[32px] bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px] shadow-xl">
          <div className="rounded-[31px] bg-white px-10 py-12 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-cyan-600" />

            <h3 className="mt-6 text-3xl font-bold text-slate-900">
              Every change is tracked.
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Every dataset is recoverable.
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              From experimentation to production, Apache Nessie gives your
              lakehouse the same confidence developers have enjoyed with Git for
              years.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VersionControlSection;
