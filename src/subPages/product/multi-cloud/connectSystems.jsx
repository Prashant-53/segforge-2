import React from "react";
import { motion } from "framer-motion";
import {
  CloudCog,
  Network,
  Workflow,
  Scaling,
  CheckCircle2,
  ServerCog,
} from "lucide-react";
import Orchestration from "../../../assets/Products/Multi-Cloud/multiorchestration.webp";

const capabilityGroups = [
  {
    icon: Scaling,
    title: "Auto-Scaling Compute",
    items: [
      "Apache Flink",
      "Apache Kafka",
      "Dynamic Scaling",
      "Cloud Independent",
    ],
  },
  {
    icon: Workflow,
    title: "Unified Operations",
    items: [
      "Single Pane of Glass",
      "Cross-Cloud Pipelines",
      "Unified Connections",
      "Provider-Agnostic DAGs",
    ],
  },
];

const orchestrationFeatures = [
  {
    icon: CloudCog,
    title: "Seamless Multi-Cloud Management",
    description:
      "Manage clusters, pipelines, storage connections, and workloads across AWS, Microsoft Azure, and Google Cloud from one unified control plane without switching consoles.",
  },
  {
    icon: Network,
    title: "Provider-Agnostic Data Pipelines",
    description:
      "Design a pipeline once using the visual workflow builder and execute it anywhere. Whether data moves from Amazon RDS to Google Cloud Storage or Azure SQL to Amazon S3, the workflow remains identical.",
  },
];

const MultiCloudOrchestrationSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-28">
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

      <div className="absolute left-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Multi-Cloud Orchestration
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              One Control Plane.
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Every Cloud.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-6 text-slate-600">
              Automatically orchestrate compute resources, streaming clusters,
              and data pipelines across AWS, Microsoft Azure, and Google Cloud
              through one unified platform. Build once and execute anywhere
              without cloud-specific workflows.
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
              {orchestrationFeatures.map((feature) => (
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

            {/* Bottom Highlight */}

            <div className="mt-10 rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-white p-6">
              <div className="flex items-start gap-4">
                <ServerCog className="mt-1 h-7 w-7 text-cyan-600" />

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Build Once. Deploy Across Every Cloud.
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Autoscale Apache Flink and Kafka clusters, orchestrate
                    provider-agnostic pipelines, and manage every cloud
                    deployment from a single enterprise control plane without
                    changing your workflows.
                  </p>
                </div>
              </div>
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
            {/* Glow */}

            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />

            {/* Screenshot */}

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src={Orchestration}
                alt="Intelligent Multi-Cloud Resource Orchestration"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MultiCloudOrchestrationSection;
