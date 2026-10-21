import React from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  BrainCircuit,
  Zap,
  ArrowDown,
  GitBranch,
  Sparkles,
  Boxes,
  PlugZap,
} from "lucide-react";

const workflowCapabilities = [
  {
    number: "01",
    title: "Transform",
    description:
      "Compose powerful data transformations with 90+ capabilities built for complex data workflows.",
    icon: Workflow,
    accent: "cyan",
    items: ["Filter & Join", "Aggregate", "Window & Sort"],
  },
  {
    number: "02",
    title: "Enrich",
    description:
      "Bring machine learning and AI directly into your data workflows to enrich and analyze data.",
    icon: BrainCircuit,
    accent: "blue",
    items: ["Machine Learning", "AI Intelligence", "Data Enrichment"],
  },
  {
    number: "03",
    title: "Automate",
    description:
      "Connect systems and automate workflows with integrations built directly into the pipeline.",
    icon: Zap,
    accent: "violet",
    items: ["Integrations", "Workflow Automation", "Scheduled Jobs"],
  },
];

const IntelligentDataWorkflows = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-32">
      {/* Background glows */}
      <div className="pointer-events-none absolute -left-40 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-400/5 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Sparkles className="h-4 w-4" />
              Intelligent Workflows
            </div>

            {/* Heading */}
            <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-4xl">
              Transform. Enrich. Automate.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 sm:text-md sm:leading-8">
              Go beyond traditional ETL. Build workflows that transform data,
              apply AI and machine learning, and connect your systems — all
              within the same visual pipeline.
            </p>

            {/* Small supporting statement */}
            <div className="mt-8 flex items-start gap-3 border-l-2 border-cyan-400 pl-4">
              <GitBranch className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />

              <p className="text-sm leading-6 text-slate-600">
                One pipeline can combine data engineering, intelligence, and
                automation without moving between tools.
              </p>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}
          <div className="relative">
            {/* Vertical connection line */}
            <div className="absolute left-7 top-10 bottom-10 hidden w-px bg-gradient-to-b from-cyan-300 via-blue-300 to-violet-300 sm:block" />

            <div className="space-y-4 sm:space-y-5">
              {workflowCapabilities.map((capability, index) => {
                const Icon = capability.icon;

                return (
                  <motion.div
                    key={capability.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.12,
                    }}
                    className="group relative"
                  >
                    {/* Card */}
                    <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-slate-50 p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:bg-white hover:shadow-xl sm:ml-[4.5rem] sm:p-7">
                      {/* Card glow */}
                      <div className="pointer-events-none absolute -right-16 -top-16 h-32 w-32 rounded-full bg-cyan-400/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="relative">
                        {/* Mobile icon */}
                        <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50 sm:hidden">
                          <Icon className="h-5 w-5 text-cyan-600" />
                        </div>

                        {/* Header */}
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <div className="flex items-center gap-3">
                              <span className="font-mono text-xs font-medium text-cyan-600">
                                {capability.number}
                              </span>

                              <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
                                {capability.title}
                              </h3>
                            </div>

                            <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-base">
                              {capability.description}
                            </p>
                          </div>

                          {/* Desktop icon */}
                          <div className="hidden h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white shadow-sm sm:flex">
                            <Icon className="h-5 w-5 text-cyan-600" />
                          </div>
                        </div>

                        {/* Supporting capabilities */}
                        <div className="mt-5 flex flex-wrap gap-2">
                          {capability.items.map((item) => (
                            <span
                              key={item}
                              className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-medium text-slate-600"
                            >
                              {item}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentDataWorkflows;
