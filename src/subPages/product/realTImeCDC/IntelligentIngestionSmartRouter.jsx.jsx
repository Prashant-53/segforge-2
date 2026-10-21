import React from "react";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

const IntelligentIngestionSmartRouter = () => {
  const highlights = [
    "Table-size estimation for automated routing",
    "PyIceberg for smaller ingestion workloads",
    "Apache Flink for distributed stream processing",
    "Automatic fallback to Flink when PyIceberg encounters errors",
    <>
      API-level engine override with{" "}
      <code className="rounded bg-slate-100 px-1.5 py-0.5 text-sm text-cyan-800">
        force_method
      </code>
    </>,
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-20 sm:py-24 lg:py-28">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1affe5 1px, transparent 1px),
              linear-gradient(to bottom, #1affe5 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Background Glow */}
      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-[#1affe5]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Increased image column width */}
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
          {/* LEFT: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-1 min-w-0"
          >
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <GitBranch className="h-4 w-4 text-cyan-700" />
              Automated Engine Selection
            </div>

            <h2 className="mt-4 max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900">
              Route each stream through the right processing engine.
            </h2>

            <p className="mt-6 text-base leading-7 text-slate-600">
              SegForge Smart Router estimates source table size and selects an
              ingestion path based on workload scale. Smaller datasets can use
              lightweight PyIceberg processing, while larger workloads are
              routed to distributed Apache Flink execution.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.08,
                  }}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1affe5] ring-4 ring-[#1affe5]/15" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            <div className="mt-8 border-l-2 border-[#1affe5] pl-5">
              <p className="text-sm font-semibold leading-6 text-slate-700 sm:text-base">
                One ingestion flow, with processing selected to match the
                workload.
              </p>
            </div>
          </motion.div>

          {/* RIGHT: Larger Pipeline Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-2 min-w-0 w-full"
          >
            <div className="relative w-full">
              {/* Image Glow */}
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[#1affe5]/10 blur-2xl" />

              {/* Image Container */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_-28px_rgba(15,23,42,0.25)] sm:rounded-3xl">
                <img
                  src="/src/assets/Products/RealTimeCDC/2.webp"
                  alt="SegForge Smart Router directing workloads to the appropriate processing path and lakehouse storage"
                  className="block h-auto w-full object-contain"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default IntelligentIngestionSmartRouter;
