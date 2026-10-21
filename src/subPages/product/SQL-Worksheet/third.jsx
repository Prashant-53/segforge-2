import React from "react";
import { motion } from "framer-motion";
import { Database } from "lucide-react";

import Second from "../../../assets/Products/Notebooks/2.webp";

const WorkAcrossDataObjects = () => {
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
        <div className="grid items-center gap-12 lg:grid-cols-[0.75fr_1.25fr] lg:gap-16 xl:gap-20">
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
            className="order-1 lg:order-1"
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Database className="h-4 w-4" />
              Work Across Your Data Objects{" "}
            </div>

            {/* Heading */}
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-slate-900 ">
              One worksheet. <br />
              Your entire data workspace.
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-lg text-base leading-7 text-slate-600 text-md">
              Work with connections, tables, streams, pipelines, notebooks,
              tasks, and other supported objects from a unified workspace. Move
              between data ingestion, processing, and analytics while keeping
              your work connected.{" "}
            </p>
          </motion.div>

          {/* =====================================================
              PRODUCT SCREENSHOT
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
            className="relative order-2 min-w-0 lg:order-2"
          >
            {/* Screenshot Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[#1affe5]/10 blur-3xl" />

            {/* Product Frame */}
            <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:rounded-[30px]">
              {/* Screenshot */}
              <div className="w-full overflow-x-auto bg-white">
                <img
                  src={Second}
                  alt="SegForge Notebooks showing the integrated schema browser, workspace namespaces, table columns, and an inserted SQL query"
                  className="block h-auto w-full object-contain"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkAcrossDataObjects;
