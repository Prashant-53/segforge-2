import React from "react";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";

// import WorkflowConceptImage from "../../../assets/Products/Workflow/workflow-concept.webp";

const WorkflowConcept = () => {
  return (
    <section className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-22">
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
      <div className="pointer-events-none absolute left-[45%] top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-[#18D0BB]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 xl:gap-15">
          {/* LEFT — CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              {/* <GitBranch className="h-4 w-4" /> */}
              Cron-Based Pipeline Scheduling{" "}
            </div>

            {/* Heading */}
            <h2 className="mt-6 max-w-xl text-4xl font-bold tracking-tight text-slate-900 sm:text-md lg:leading-[1.08]">
              Schedule pipelines on your terms.{" "}
            </h2>

            {/* Technical Description */}
            <p className="mt-6 max-w-xl text-base leading-6 text-slate-600 sm:text-md sm:leading-6">
              Configure recurring pipeline runs directly from the visual canvas
              using flexible cron expressions. Pause, resume, edit, or delete
              schedules independently of the pipeline definition..
            </p>

            {/* Supporting Statement
            <div className="mt-8 border-l-2 border-[#18D0BB] pl-5">
              <p className="text-sm font-medium leading-6 text-slate-700 sm:text-base">
                Define the workflow once. SegForge manages the execution path.
              </p>
            </div> */}
          </motion.div>

          {/* RIGHT — IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{
              duration: 0.7,
              ease: "easeOut",
            }}
            className="relative"
          >
            {/* Image Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[#18D0BB]/10 blur-3xl" />

            {/* Image Container */}
            <div className="relative overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_20px_60px_rgba(15,23,42,0.10)]">
              {/* <img
                src={WorkflowConceptImage}
                alt="SegForge workflow orchestration DAG showing pipelines, CDC jobs, SQL, notebooks, and destination dependencies"
                className="block h-auto w-full"
              /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WorkflowConcept;
