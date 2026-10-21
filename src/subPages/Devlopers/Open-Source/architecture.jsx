import React from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  ArrowRightLeft,
  GitBranch,
  Cpu,
  CheckCircle2,
  Route,
  Network,
} from "lucide-react";

import Hero from "../../../assets/Devlopers/Open-Source/fifth.webp";

const capabilityGroups = [
  {
    icon: Workflow,
    title: "Execution Blueprints",
    items: [
      "Visual ETL → Flink SQL",
      "CDC Pipeline",
      "Execution Orchestration",
      "Open Architecture",
    ],
  },
  {
    icon: Route,
    title: "Smart Execution",
    items: [
      "PyIceberg Engine",
      "Apache Flink Engine",
      "Automatic Routing",
      "Workload Optimization",
    ],
  },
];

const architectureFeatures = [
  {
    icon: Workflow,
    title: "Visual ETL Compiled to Flink SQL",
    description:
      "Every workflow designed through the visual ETL canvas is automatically translated into optimized Apache Flink SQL and execution plans, combining low-code development with enterprise-scale distributed processing.",
  },
  {
    icon: ArrowRightLeft,
    title: "Real-Time CDC Pipeline",
    description:
      "Change events flow seamlessly through Debezium, Apache Kafka, Apache Flink, and Apache Iceberg to deliver reliable, low-latency data synchronization while preserving transactional consistency.",
  },
  {
    icon: GitBranch,
    title: "Smart Router Execution Engine",
    description:
      "Seg Forge intelligently selects the optimal execution engine for every workload. Smaller datasets execute through PyIceberg for rapid operations, while larger distributed workloads are automatically routed to Apache Flink.",
  },
  {
    icon: Cpu,
    title: "Transparent Component Orchestration",
    description:
      "Every platform component works together through open standards. Execution plans, routing decisions, pipeline orchestration, and metadata remain fully transparent, enabling complete visibility into how your data platform operates.",
  },
];

const ArchitectureTransparency = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-28">
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
            linear-gradient(to right,#18D0BB 1px,transparent 1px),
            linear-gradient(to bottom,#18D0BB 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}

      <div className="absolute left-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Architecture Transparency
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Every Component.
              <br />
              Every Decision.
              <br />
              Fully Transparent.
            </h2>

            <p className="mt-6 text-md leading-6 text-slate-600">
              Seg Forge orchestrates proven open-source technologies through
              transparent execution blueprints. From visual ETL to real-time
              CDC, every workflow follows an observable execution path powered
              by intelligent routing and open standards.
            </p>

            {/* Capability Groups */}

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {capabilityGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <group.icon className="h-7 w-7 text-cyan-600" />

                    <h3 className="text-xl font-semibold text-slate-900">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-cyan-500" />

                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Supporting Features */}

            <div className="mt-10 space-y-5">
              {architectureFeatures.map((feature) => (
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

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src={Hero}
                alt="Seg Forge Architecture Transparency"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureTransparency;
