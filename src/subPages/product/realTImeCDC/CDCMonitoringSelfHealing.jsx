import React from "react";
import { motion } from "framer-motion";
import { Activity } from "lucide-react";

const CDCMonitoringSelfHealing = () => {
  const highlights = [
    "Live stream status and processed-event metrics",
    "Throughput, latency, and consumer-lag monitoring",
    "Visual CDC pipeline health view",
    "Connector restart and Flink job resubmission",
    "Recovery from committed checkpoints and Kafka offsets",
    "Pause controls that retain events in Kafka",
  ];

  return (
    <section className="relative overflow-hidden bg-slate-50/50 py-20 sm:py-24 lg:py-28">
      {/* Subtle Grid Background */}
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
        {/* Wider image column */}
        <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12 xl:gap-16">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-1 min-w-0"
          >
            {/* Eyebrow */}
            <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Activity className="h-4 w-4 text-cyan-700" />
              Operational Visibility &amp; Recovery
            </div>

            {/* Heading */}
            <h2 className="max-w-2xl text-4xl font-bold leading-tight tracking-tight text-slate-900">
              Keep streams observable and resilient.
            </h2>

            {/* Description */}
            <p className="mt-6 max-w-2xl text-base leading-7 text-slate-600">
              Monitor CDC stream health, throughput, end-to-end latency, and
              Kafka consumer lag through a dedicated workspace dashboard. The
              background CDC Watchdog detects failures and supports automated
              recovery of connectors and processing jobs.
            </p>

            {/* Technical Highlights */}
            <ul className="mt-8 space-y-4">
              {highlights.map((item, index) => (
                <motion.li
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.07,
                  }}
                  className="flex items-start gap-3 text-sm leading-6 text-slate-700 sm:text-base"
                >
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#1affe5] ring-4 ring-[#1affe5]/15" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Supporting Statement */}
            <div className="mt-8 border-l-2 border-[#1affe5] pl-5">
              <p className="text-sm font-semibold leading-6 text-slate-700 sm:text-base">
                See stream health clearly and recover processing when failures
                occur.
              </p>
            </div>
          </motion.div>

          {/* Larger Monitoring Visual */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
            className="order-2 min-w-0 w-full"
          >
            <div className="relative w-full">
              {/* Ambient Glow */}
              <div className="pointer-events-none absolute -inset-4 rounded-[2rem] bg-[#1affe5]/10 blur-2xl" />

              {/* Dashboard Frame */}
              <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_24px_80px_-28px_rgba(15,23,42,0.25)] sm:rounded-3xl">
                <img
                  src="/src/assets/Products/RealTimeCDC/4.webp"
                  alt="CDC monitoring dashboard displaying stream health, throughput, latency, consumer lag, and recovery actions"
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

export default CDCMonitoringSelfHealing;
