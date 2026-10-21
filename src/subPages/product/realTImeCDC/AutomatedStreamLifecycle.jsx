import React from "react";
import { motion } from "framer-motion";
import { RefreshCw } from "lucide-react";

const AutomatedStreamLifecycle = () => {
  const highlights = [
    "Initial snapshot followed by continuous CDC",
    "Database-to-Iceberg type mapping",
    "DDL change detection through Debezium schema history",
    "Automatic target schema updates, including added columns",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Subtle grid background */}
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

      <div className="pointer-events-none absolute -left-40 top-1/3 h-96 w-96 rounded-full bg-[#1affe5]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
          {/* Text Content — first on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            {/* Eyebrow */}
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <RefreshCw className="h-4 w-4 text-cyan-700" />
              Snapshot &amp; Schema Management
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900 ">
              From initial snapshot to continuous synchronization.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base text-md leading-7 text-slate-600 ">
              Initialize CDC streams with a snapshot of existing source data,
              then transition into continuous change capture. Automatically map
              source database types to Iceberg-compatible types and propagate
              supported schema changes as source structures evolve.
            </p>

            {/* Technical highlights */}
            <ul className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
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

            {/* Supporting statement */}
            <div className="mt-8 border-l-2 border-[#1affe5] pl-5">
              <p className="text-sm font-semibold leading-6 text-slate-700 sm:text-base">
                Keep the initial data and ongoing changes aligned as source
                schemas evolve.
              </p>
            </div>
          </motion.div>

          {/* Lifecycle Visual — second on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              {/* Ambient glow */}
              <div className="absolute -inset-5 rounded-[2rem] bg-[#1affe5]/10 blur-2xl" />

              {/* Image frame */}
              <div className="relative overflow-hidden  border border-slate-200 bg-white shadow-[0_24px_80px_-28px_rgba(15,23,42,0.25)] sm:rounded-3xl">
                {/* Replace with your generated lifecycle visual */}
                <img
                  src="/src/assets/Products/RealTimeCDC/3.webp"
                  alt="CDC lifecycle from Pending to Initial Snapshot to Running CDC and Schema Evolution, synchronizing source and Iceberg tables"
                  className="h-auto w-full object-contain"
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

export default AutomatedStreamLifecycle;
