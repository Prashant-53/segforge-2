import React from "react";
import { motion } from "framer-motion";
import {
  Layers3,
  Radio,
  Database,
  ArrowRight,
  CalendarClock,
  Activity,
} from "lucide-react";

const BatchStreaming = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[900px] -translate-x-1/2 -translate-y-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Flexible Execution
          </div>

          <h2 className="mt-6 text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            One pipeline experience.
            <br />
            <span className="text-cyan-600">Batch or streaming.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-md">
            Build your workflow once and run it for the workload you need.
          </p>
        </motion.div>

        {/* Split visual */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto mt-14 max-w-6xl overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl shadow-slate-900/5"
        >
          <div className="grid md:grid-cols-2">
            {/* ================= BATCH ================= */}
            <div className="relative overflow-hidden border-b border-slate-200 p-7 sm:p-9 md:border-b-0 md:border-r lg:p-10">
              {/* Background glow */}
              <div className="pointer-events-none absolute -left-20 -top-20 h-56 w-56 rounded-full bg-cyan-400/10 blur-[90px]" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                      <Layers3 className="h-5 w-5 text-cyan-600" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Batch
                      </h3>

                      <p className="text-xs font-medium text-slate-500">
                        Process when you need it
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
                    On demand
                  </span>
                </div>

                {/* Pipeline visual */}
                <div className="mt-10">
                  <div className="flex items-center gap-2">
                    <PipelineNode label="Source" />

                    <PipelineLine />

                    <PipelineNode label="Transform" active />

                    <PipelineLine />

                    <PipelineNode label="Output" />
                  </div>

                  {/* Execution indicator */}
                  <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                    <CalendarClock className="h-3.5 w-3.5 text-cyan-600" />
                    Scheduled or on-demand execution
                  </div>
                </div>

                {/* Bottom copy */}
                <div className="mt-9">
                  <p className="text-sm leading-6 text-slate-600">
                    Ideal for scheduled ETL, historical processing, backfills,
                    and large-scale data operations.
                  </p>
                </div>
              </div>
            </div>

            {/* ================= STREAMING ================= */}
            <div className="relative overflow-hidden p-7 sm:p-9 lg:p-10">
              {/* Background glow */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-blue-400/10 blur-[90px]" />

              <div className="relative">
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50">
                      <Radio className="h-5 w-5 text-blue-600" />
                    </div>

                    <div>
                      <h3 className="text-xl font-bold text-slate-900">
                        Streaming
                      </h3>

                      <p className="text-xs font-medium text-slate-500">
                        Process as data arrives
                      </p>
                    </div>
                  </div>

                  <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-medium text-slate-500">
                    Continuous
                  </span>
                </div>

                {/* Pipeline visual */}
                <div className="mt-10">
                  <div className="flex items-center gap-2">
                    <PipelineNode label="Events" />

                    <StreamingLine />

                    <PipelineNode label="Transform" active />

                    <StreamingLine />

                    <PipelineNode label="Output" />
                  </div>

                  {/* Execution indicator */}
                  <div className="mt-5 flex items-center gap-2 text-xs text-slate-400">
                    <Activity className="h-3.5 w-3.5 text-blue-600" />
                    Continuous real-time processing
                  </div>
                </div>

                {/* Bottom copy */}
                <div className="mt-9">
                  <p className="text-sm leading-6 text-slate-600">
                    Ideal for real-time data, CDC, event processing, and
                    continuously updated workloads.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Center divider indicator */}
          <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:flex">
            <div className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 bg-white shadow-sm">
              <ArrowRight className="h-4 w-4 text-slate-400" />
            </div>
          </div>
        </motion.div>

        {/* Bottom statement */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="mt-7 text-center text-sm font-medium text-slate-500"
        >
          Same visual workflow. Different execution mode.
        </motion.p>
      </div>
    </section>
  );
};

/* =========================
   Pipeline Components
========================= */

const PipelineNode = ({ label, active = false }) => {
  return (
    <div
      className={`flex min-w-0 flex-1 flex-col items-center justify-center rounded-xl border px-2 py-3 ${
        active ? "border-cyan-200 bg-cyan-50" : "border-slate-200 bg-slate-50"
      }`}
    >
      <Database
        className={`h-4 w-4 ${active ? "text-cyan-600" : "text-slate-400"}`}
      />

      <span
        className={`mt-1 truncate text-[10px] font-medium ${
          active ? "text-cyan-700" : "text-slate-500"
        }`}
      >
        {label}
      </span>
    </div>
  );
};

const PipelineLine = () => {
  return <div className="h-px w-5 shrink-0 bg-slate-200 sm:w-8" />;
};

const StreamingLine = () => {
  return (
    <div className="relative h-px w-5 shrink-0 overflow-hidden bg-slate-200 sm:w-8">
      <motion.div
        animate={{ x: ["-100%", "300%"] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-y-0 w-1/2 bg-blue-500"
      />
    </div>
  );
};

export default BatchStreaming;
