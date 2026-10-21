import React from "react";
import { motion } from "framer-motion";

// import WorkflowReliabilityImage from "../../../assets/Products/Workflow/workflow-reliability.webp";

const WorkflowReliability = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-20 sm:py-24 lg:py-28">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #18D0BB 1px, transparent 1px),
              linear-gradient(to bottom, #18D0BB 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-[15%] top-1/2 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-[#18D0BB]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 xl:gap-20">
          {/* =====================================================
              TEXT
              Mobile  → first
              Desktop → left
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Step-Level Recovery{" "}
            </div>

            {/* Heading */}
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-slate-900 ">
              Recover from failures without starting over.{" "}
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 text-md ">
              Trigger workflows manually with Run Now or through schedules.
              Track lifecycle states and retry individual failed steps, allowing
              successful upstream tasks to remain completed.{" "}
            </p>

            {/* Supporting Statement
            <div className="mt-8 border-l-2 border-[#18D0BB] pl-5">
              <p className="text-sm font-medium leading-6 text-slate-700 sm:text-base">
                Recover automatically. Know what happened.
              </p>
            </div> */}
          </motion.div>

          {/* =====================================================
              VISUAL
              Mobile  → after text
              Desktop → right
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="relative order-2 min-w-0 lg:order-1"
          >
            {/* Visual Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[#18D0BB]/10 blur-3xl" />

            {/* Image Frame */}
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:rounded-[30px]">
              {/* <img
                src={WorkflowReliabilityImage}
                alt="SegForge workflow reliability process showing failure recovery through retry, backoff, reconciliation, and notification"
                className="block h-auto w-full object-contain"
              /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowReliability;
