import React from "react";
import { motion } from "framer-motion";
import { Database, Workflow, ArrowRight, MousePointer2 } from "lucide-react";
import ETLVisual from "../../../assets/Products/ETL/ETL-Visual.webp";
const VisualPipelineBuilder = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-32">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[160px]" />

      {/* Subtle grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `
            linear-gradient(to right, #0891b2 1px, transparent 1px),
            linear-gradient(to bottom, #0891b2 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            <Workflow className="h-4 w-4" />
            Visual Pipeline Builder
          </div>

          {/* Heading */}
          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            From idea to pipeline
            <br className="hidden sm:block" />
            <span className="text-cyan-600"> in one workspace.</span>
          </h2>

          {/* Description */}
          <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-md sm:leading-8">
            Connect data sources, compose transformations, configure
            destinations, and build complex workflows visually.
          </p>
        </motion.div>

        {/* Product screenshot */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="relative mx-auto mt-14 max-w-6xl sm:mt-16"
        >
          {/* Outer glow */}
          <div className="absolute -inset-4 rounded-[2rem] bg-cyan-400/10 blur-2xl" />

          {/* Screenshot frame */}
          <div className="relative overflow-hidden rounded-2xl border border-slate-300 bg-slate-950 shadow-2xl shadow-slate-900/15 sm:rounded-3xl">
            {/* Browser-like top bar */}
            <div className="flex h-10 items-center border-b border-slate-800 bg-slate-900 px-4">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
                <span className="h-2.5 w-2.5 rounded-full bg-slate-600" />
              </div>

              <div className="mx-auto hidden items-center gap-2 rounded-md bg-slate-800 px-4 py-1 text-[11px] text-slate-500 sm:flex">
                <Database className="h-3 w-3" />
                ETL Studio
              </div>
            </div>

            {/* Actual screenshot */}
            <div className="relative">
              <img
                src={ETLVisual}
                alt="SegForge ETL Studio visual pipeline builder"
                className="block h-auto w-full"
              />
            </div>
          </div>
        </motion.div>

        {/* Supporting points */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-8 flex max-w-4xl flex-col items-center justify-center gap-4 text-center sm:flex-row sm:gap-8"
        >
          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50">
              <Database className="h-3.5 w-3.5 text-cyan-600" />
            </span>
            Connect your data
          </div>

          <ArrowRight className="hidden h-4 w-4 text-slate-300 sm:block" />

          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50">
              <Workflow className="h-3.5 w-3.5 text-cyan-600" />
            </span>
            Compose workflows
          </div>

          <ArrowRight className="hidden h-4 w-4 text-slate-300 sm:block" />

          <div className="flex items-center gap-2 text-sm font-medium text-slate-600">
            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cyan-50">
              <MousePointer2 className="h-3.5 w-3.5 text-cyan-600" />
            </span>
            Configure visually
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VisualPipelineBuilder;
