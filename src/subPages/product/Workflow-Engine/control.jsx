import React from "react";
import { motion } from "framer-motion";

// import AdvancedConfigurationImage from "../../../assets/Products/Workflow/advanced-configuration.webp";

const ExecutionControl = () => {
  const capabilities = [
    "Execution limits",
    "Retry policies",
    "Reconciliation",
    "Environment controls",
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
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
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Advanced Control
            </div>

            {/* Heading */}
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-slate-900 ">
              The controls you need.
              <br />
              Nothing you don't.
            </h2>

            {/* Supporting Copy */}
            <p className="mt-6 max-w-lg text-base leading-7 text-slate-600 text-md ">
              Set execution limits, retry behavior, environments, and
              operational policies without leaving the workflow.
            </p>

            {/* Capability List */}
            <div className="mt-8 flex flex-col gap-3">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability}
                  initial={{ opacity: 0, x: 15 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + index * 0.08,
                  }}
                  className="flex items-center gap-3"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#18D0BB]" />
                  <span className="text-sm font-medium text-slate-700 sm:text-base">
                    {capability}
                  </span>
                </motion.div>
              ))}
            </div>
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
              delay: 0.1,
            }}
            className="relative order-2 min-w-0 lg:order-1"
          >
            {/* Screenshot Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[#18D0BB]/10 blur-3xl" />

            {/* Product Frame */}
            <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:rounded-3xl">
              {/* <img
                src={AdvancedConfigurationImage}
                alt="SegForge Workflow Engine Advanced Configuration showing execution and operational controls"
                className="block h-auto w-full object-contain"
              /> */}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExecutionControl;
