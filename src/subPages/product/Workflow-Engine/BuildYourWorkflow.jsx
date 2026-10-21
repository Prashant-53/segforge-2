import React from "react";
import { motion } from "framer-motion";

// import WorkflowTasksImage from "../../../assets/Products/Workflow/workflow-tasks.webp";

const BuildYourWorkflow = () => {
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
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 xl:gap-20">
          {/* =====================================================
              MOBILE / DESKTOP TEXT
              Comes FIRST in DOM so it appears first on mobile
          ====================================================== */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-1"
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Centralized Jobs Dashboard{" "}
            </div>

            {/* Heading */}
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-tight text-slate-900 lg:text-md lg:leading-[1.08]">
              Every run. One operational view.{" "}
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 text-md ">
              Track batch pipelines, CDC streams, and data imports from a
              centralized Jobs panel. Filter job history, inspect logs, monitor
              statuses and durations, cancel active runs, and retry failed
              tasks.{" "}
            </p>

            {/* Supporting Statement
            <div className="mt-8 border-l-2 border-[#18D0BB] pl-5">
              <p className="text-sm font-medium leading-6 text-slate-700 sm:text-base">
                Build dependencies once. Let the workflow handle the execution.
              </p>
            </div> */}
          </motion.div>

          {/* =====================================================
              IMAGE
              Comes SECOND in DOM so it appears after text on mobile
          ====================================================== */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
              scale: 0.98,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
              scale: 1,
            }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="relative order-2 min-w-0 lg:order-1"
          >
            {/* Screenshot Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[#18D0BB]/10 blur-3xl" />

            {/* Product Frame */}
            <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.14)] sm:rounded-[30px]">
              {/* Browser Header */}
              <div className="flex h-10 items-center border-b border-slate-200 bg-slate-50 px-4 sm:h-11">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                </div>

                <div className="mx-auto hidden h-5 w-1/3 rounded-md border border-slate-200 bg-white sm:block" />
              </div>

              {/* Screenshot */}
              <div className="w-full overflow-x-auto bg-white">
                {/* <img
                  src={WorkflowTasksImage}
                  alt="SegForge Workflow Engine Tasks view showing pipelines, CDC jobs, SQL queries, notebooks, and workflow dependencies"
                  className="block h-auto w-full min-w-[650px] object-contain"
                /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default BuildYourWorkflow;
