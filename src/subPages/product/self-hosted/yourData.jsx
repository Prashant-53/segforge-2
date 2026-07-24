import React from "react";
import { motion } from "framer-motion";
import {
  Container,
  Boxes,
  Server,
  Database,
  CheckCircle2,
  Scaling,
} from "lucide-react";
import Docker from "../../../assets/Products/Self-Hosted/dockercompose.webp";

const capabilityGroups = [
  {
    icon: Container,
    title: "Developer Deployment",
    items: [
      "Docker Compose",
      "One Command Startup",
      "Local Development",
      "Proof of Concept",
    ],
  },
  {
    icon: Boxes,
    title: "Platform Components",
    items: [
      "Apache Flink",
      "Apache Kafka",
      "PostgreSQL",
      "Apache Nessie",
      "MinIO",
    ],
  },
];

const dockerFeatures = [
  {
    icon: Scaling,
    title: "Manual Scaling",
    description:
      "Scale Apache Flink TaskManagers as workloads grow to support larger streaming pipelines, distributed batch execution, and enterprise-scale processing.",
  },
  {
    icon: Server,
    title: "Rapid Development",
    description:
      "Prototype ETL pipelines, CDC streams, notebooks, machine learning workflows, analytics dashboards, and governance features locally before deploying to production.",
  },
];

const DockerComposeSection = () => {
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
              Docker Compose Deployment
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              From Zero to a Modern
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Lakehouse in Five Minutes.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-6 text-slate-600">
              Launch the complete Seg Forge platform locally using Docker
              Compose. Deploy Apache Flink, Kafka, PostgreSQL, Nessie, MinIO,
              and every core platform service through a single command.
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
              {dockerFeatures.map((feature) => (
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
                <Database className="mt-1 h-7 w-7 text-cyan-600" />

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Everything You Need to Build a Production-Ready
                    Lakehouse—Running Locally in Minutes.
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Start developing immediately with a complete local
                    environment containing Apache Flink, Kafka, PostgreSQL,
                    Apache Nessie, MinIO, notebooks, analytics, governance, and
                    machine learning—all orchestrated through Docker Compose.
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

            {/* Product Screenshot */}

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src={Docker}
                alt="Docker Compose Deployment"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DockerComposeSection;
