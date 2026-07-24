import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  Workflow,
  RefreshCw,
  CheckCircle2,
  ArrowRightLeft,
} from "lucide-react";
import SmartRouter from "../../../assets/Products/RealTimeCDC/smartRoute.webp";
const executionModes = [
  {
    icon: Zap,
    title: "PyIceberg Path",
    items: [
      "Tables under 10 GB",
      "Lightweight Execution",
      "Minimal Infrastructure",
      "Fast Startup",
    ],
  },
  {
    icon: Cpu,
    title: "Apache Flink Path",
    items: [
      "Tables over 10 GB",
      "Distributed Execution",
      "Parallel Processing",
      "Enterprise Scale",
    ],
  },
];

const intelligentFeatures = [
  {
    icon: RefreshCw,
    title: "Automatic Failover",
    description:
      "If lightweight execution encounters limitations, Seg Forge automatically retries the workload using Apache Flink without requiring manual intervention.",
  },
  {
    icon: ArrowRightLeft,
    title: "Adaptive Routing",
    description:
      "Continuously analyze workload size, execution characteristics, and processing requirements to automatically select the fastest and most cost-efficient execution engine.",
  },
];

const SmartRouterSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-28">
      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}

      <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />

            {/* Product Screenshot */}

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src={SmartRouter}
                alt="Seg Forge Smart Router"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Smart Router
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Automatically Choose the
              <br />
              Fastest Execution Path.
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-6 text-slate-600">
              Seg Forge intelligently selects the optimal processing engine
              based on workload size, ensuring maximum performance while
              minimizing infrastructure costs and operational complexity.
            </p>

            {/* Execution Modes */}

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {executionModes.map((mode) => (
                <div
                  key={mode.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <mode.icon className="h-7 w-7 text-cyan-600" />

                    <h3 className="text-xl font-semibold text-slate-900">
                      {mode.title}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-3">
                    {mode.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-cyan-500" />

                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Intelligent Features */}

            <div className="mt-10 space-y-5">
              {intelligentFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                    <feature.icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SmartRouterSection;
