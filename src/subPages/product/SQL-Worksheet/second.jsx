import React from "react";
import { motion } from "framer-motion";
import { Layers3 } from "lucide-react";

import First from "../../../assets/Products/NoteBooks/1.webp";

const SQLConnectivity = () => {
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

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-[15%] top-1/2 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-[#1affe5]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 xl:gap-20">
          {/* =====================================================
              TEXT
              Mobile  → first
              Desktop → right
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            {/* Eyebrow */}
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Layers3 className="h-4 w-4" />
              Create & Manage with SQL
            </div>

            {/* Heading */}
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-slate-900 ">
              Turn SQL queries into platform actions.
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-lg text-md text-base leading-7 text-slate-600 ">
              Create connections, CDC streams, and other data objects directly
              through SQL. Manage your data platform through a familiar
              query-driven workflow, without relying only on the visual
              interface.{" "}
            </p>
          </motion.div>

          {/* =====================================================
              VISUAL
              Mobile  → after text
              Desktop → left
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="relative order-2 min-w-0 lg:order-1"
          >
            {/* Image Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[#1affe5]/10 blur-3xl" />

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
              <img
                src={First}
                alt="SegForge Notebooks connecting one notebook to Flink SQL, PyFlink, and Trino, with batch and streaming execution modes"
                className="block h-auto w-full object-contain"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SQLConnectivity;
