import React from "react";
import { motion } from "framer-motion";
import {
  Box,
  Boxes,
  Cloud,
  Server,
  FileText,
  CheckCircle2,
  Rocket,
} from "lucide-react";

import Hero from "../../../assets/Devlopers/Open-Source/sixth.webp";
const capabilityGroups = [
  {
    icon: Box,
    title: "Deployment Options",
    items: ["Docker Compose", "Kubernetes", "Amazon EKS", "Azure AKS"],
  },
  {
    icon: Cloud,
    title: "Cloud Platforms",
    items: [
      "Google GKE",
      "High Availability",
      "Scalable Clusters",
      "Self-Managed",
    ],
  },
];

const deploymentFeatures = [
  {
    icon: Box,
    title: "Docker Compose",
    description:
      "Launch the complete Seg Forge platform locally using Docker Compose. Deploy Apache Flink, Kafka, Iceberg, Nessie, PostgreSQL, and supporting services with a simple developer-friendly installation.",
  },
  {
    icon: Boxes,
    title: "Production Kubernetes",
    description:
      "Deploy highly available Seg Forge environments on Kubernetes with support for rolling upgrades, scalable compute, resilient streaming, and enterprise-grade operational management.",
  },
  {
    icon: Server,
    title: "Multi-Cloud Kubernetes",
    description:
      "Run the same deployment across Amazon EKS, Azure AKS, or Google Kubernetes Engine without changing application architecture, ensuring consistent operations across every cloud provider.",
  },
  {
    icon: FileText,
    title: "Installation Documentation",
    description:
      "Comprehensive deployment guides cover prerequisites, infrastructure planning, Docker Compose, Kubernetes manifests, Helm charts, production best practices, and operational configuration.",
  },
];

const DeploymentEntryPoints = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28">
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

      <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

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
              Self-Managed Deployment
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Deploy Anywhere.
              <br />
              Scale Everywhere.
            </h2>

            <p className="mt-6 text-md leading-6 text-slate-600">
              Deploy the complete Seg Forge platform on your own infrastructure
              using Docker Compose for local development or Kubernetes for
              enterprise production. Every deployment follows the same
              architecture while remaining completely self-managed.
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
              {deploymentFeatures.map((feature) => (
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

            <div className="mt-10 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px] shadow-lg">
              <div className="rounded-[22px] bg-white px-8 py-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                    <Rocket className="h-6 w-6 text-cyan-600" />
                  </div>

                  <div>
                    <p className="text-lg font-semibold text-slate-900">
                      Deploy the Open Stack
                    </p>

                    <p className="mt-2 leading-7 text-slate-600">
                      Follow our installation documentation to deploy Seg Forge
                      using Docker Compose, Kubernetes, Amazon EKS, Azure AKS,
                      or Google Kubernetes Engine while maintaining complete
                      ownership of your infrastructure.
                    </p>
                  </div>
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
            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src={Hero}
                alt="Self Managed Deployment"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DeploymentEntryPoints;
