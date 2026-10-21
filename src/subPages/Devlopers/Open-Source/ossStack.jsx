import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Database,
  GitBranch,
  Radio,
  BrainCircuit,
  CheckCircle2,
  Layers3,
  Workflow,
} from "lucide-react";

import Hero from "../../../assets/Devlopers/Open-Source/second.webp";

const capabilityGroups = [
  {
    icon: Layers3,
    title: "Core Technologies",
    items: [
      "Apache Flink",
      "Apache Iceberg",
      "Apache Nessie",
      "Apache Kafka",
      "MLflow",
    ],
  },
  {
    icon: Workflow,
    title: "Platform Capabilities",
    items: [
      "Distributed Compute",
      "Open Lakehouse",
      "Streaming Platform",
      "ML Lifecycle",
      "Versioned Metadata",
    ],
  },
];

const stackFeatures = [
  {
    icon: Cpu,
    title: "Apache Flink",
    description:
      "Executes high-performance ETL pipelines, stream processing, orchestration workflows, and large-scale distributed data transformations.",
  },
  {
    icon: Database,
    title: "Apache Iceberg",
    description:
      "Provides an open lakehouse table format with ACID transactions, schema evolution, partition management, and time-travel capabilities.",
  },
  {
    icon: GitBranch,
    title: "Apache Nessie",
    description:
      "Delivers Git-like catalog versioning with branches, commits, tags, and isolated data experimentation across enterprise lakehouse environments.",
  },
  {
    icon: Radio,
    title: "Apache Kafka",
    description:
      "Streams real-time events and CDC changes across distributed systems while enabling scalable event-driven data pipelines.",
  },
  {
    icon: BrainCircuit,
    title: "MLflow",
    description:
      "Tracks machine learning experiments, model versions, metrics, artifacts, and deployments throughout the complete AI lifecycle.",
  },
];

const OSSStack = () => {
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
              Integrated OSS Stack
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Every Layer Built
              <br />
              on Proven Open Technologies.
            </h2>

            <p className="mt-6 text-md leading-6 text-slate-600">
              Seg Forge orchestrates the industry's leading open-source
              technologies into one unified platform. Every component has a
              clearly defined responsibility while working together to deliver a
              modern lakehouse for streaming, analytics, governance, and AI.
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
              {stackFeatures.map((feature) => (
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
                alt="Integrated Open Source Stack"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OSSStack;
