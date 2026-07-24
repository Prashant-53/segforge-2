import React from "react";
import { motion } from "framer-motion";
import {
  CloudCog,
  Boxes,
  ServerCog,
  CheckCircle2,
  Cpu,
  Rocket,
} from "lucide-react";
import ClusterProvision from "../../../assets/Products/Hybrid-Infra/clusterprovision.webp";

const capabilityGroups = [
  {
    icon: CloudCog,
    title: "Cluster Configuration",
    items: [
      "EC2 Instance Types",
      "Worker Count",
      "Availability Zones",
      "Storage Configuration",
    ],
  },
  {
    icon: Boxes,
    title: "Automatic Provisioning",
    items: [
      "AWS API Integration",
      "Docker Deployment",
      "Cluster Validation",
      "Health Monitoring",
    ],
  },
];

const provisioningFeatures = [
  {
    icon: Rocket,
    title: "One-Click Provisioning",
    description:
      "Launch production-ready infrastructure directly from the Seg Forge UI. Select your compute profile, configure cluster size, and let the platform provision everything automatically—without writing Terraform, CloudFormation, or shell scripts.",
  },
  {
    icon: ServerCog,
    title: "Infrastructure Automation",
    description:
      "Seg Forge provisions EC2 instances through the AWS API, installs Docker, deploys every required platform service, validates cluster health, and prepares the environment for production workloads in approximately 10 minutes.",
  },
];

const ClusterProvisioningSection = () => {
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
              Cluster Provisioning
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Provision Production
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Clusters in Minutes.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-6 text-slate-600">
              Provision production-grade EC2 clusters directly from the Seg
              Forge UI. Select instance types, configure worker nodes, and let
              Seg Forge automatically deploy Apache Flink, Kafka, PostgreSQL,
              MinIO, Nessie, and supporting services using the AWS API and
              Docker—all without writing infrastructure code.
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
              {provisioningFeatures.map((feature) => (
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
                <Cpu className="mt-1 h-7 w-7 text-cyan-600" />

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Enterprise Infrastructure in Minutes—Not Days.
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    From selecting EC2 instance types to deploying Apache Flink,
                    Kafka, PostgreSQL, Nessie, MinIO, and every platform
                    service, Seg Forge automates the entire provisioning
                    workflow and delivers a production-ready cluster in
                    approximately 10 minutes.
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
                src={ClusterProvision}
                alt="Cluster Provisioning"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClusterProvisioningSection;
