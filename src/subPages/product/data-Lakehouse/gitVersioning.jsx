import React from "react";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

const GitVersioning = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
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

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-[15%] top-1/2 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-[#1affe5]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          {/* TEXT — order unchanged */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 min-w-0 lg:order-1"
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <GitBranch className="h-4 w-4" />
              Git-Style Data Versioning
            </div>

            {/* Heading */}
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-slate-900">
              Experiment freely.
              <br />
              Keep production isolated.
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-lg text-base leading-7 text-slate-600 text-md">
              With the Nessie catalog, each workspace operates on its own
              branch. Track data and schema changes through immutable commits,
              create tags for key snapshots, and roll back to previous commits
              when needed.
            </p>
          </motion.div>

          {/* IMAGE — order unchanged */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="relative order-2 min-w-0 w-full lg:order-2"
          >
            {/* Screenshot Glow */}
            <div className="pointer-events-none absolute -inset-4 rounded-[40px] bg-[#1affe5]/10 blur-3xl" />

            {/* Product Frame */}
            <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:rounded-[30px]">
              <img
                src="/src/assets/Products/DataLakehouse/2.webp"
                alt="SegForge data versioning and workspace interface"
                className="block h-auto w-full object-contain"
                loading="lazy"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitVersioning;
