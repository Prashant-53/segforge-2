import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  Cloud,
  Server,
  Box,
  Boxes,
  Code2,
  Braces,
  Terminal,
  ShieldCheck,
} from "lucide-react";

const platforms = [
  {
    title: "Website",
    icon: Globe,
    description:
      "Public website, documentation, marketing pages, and support resources.",
  },
  {
    title: "Cloud Platform",
    icon: Cloud,
    description: "Managed Seg Forge cloud services and hosted workspaces.",
  },
  {
    title: "Self Hosted",
    icon: Server,
    description:
      "Customer-managed deployments running within private infrastructure.",
  },
  {
    title: "Docker Deployments",
    icon: Box,
    description:
      "Containerized deployments using Docker Compose and related tooling.",
  },
  {
    title: "Kubernetes",
    icon: Boxes,
    description:
      "Enterprise deployments on Kubernetes and cloud-native environments.",
  },
  {
    title: "REST APIs",
    icon: Code2,
    description:
      "Programmatic access through authenticated REST API endpoints.",
  },
  {
    title: "SDKs",
    icon: Braces,
    description:
      "Official language SDKs including Python and TypeScript clients.",
  },
  {
    title: "CLI",
    icon: Terminal,
    description:
      "Seg Forge Command Line Interface for automation and DevOps workflows.",
  },
];

const PrivacyScope = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right,#06b6d4 1px,transparent 1px),
              linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="absolute right-0 top-20 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Introduction & Scope
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
            Where This Privacy Policy Applies
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            This Privacy Policy explains how Seg Forge collects, processes,
            stores, and protects information across our products, services, and
            developer tooling. Whether you're evaluating the platform, deploying
            it within your own infrastructure, or integrating through APIs and
            SDKs, the same privacy principles apply.
          </p>
        </motion.div>

        {/* Platform Cards */}

        <div className="mt-16 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {platforms.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: index * 0.05,
              }}
              className="group rounded-3xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 transition group-hover:bg-cyan-100">
                <item.icon className="h-7 w-7 text-cyan-600" />
              </div>

              <h3 className="mt-6 text-xl font-semibold text-slate-900">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Important Callout */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-50 via-white to-cyan-50"
        >
          <div className="flex flex-col gap-8 p-8 md:flex-row md:items-start md:p-10">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-cyan-500">
              <ShieldCheck className="h-8 w-8 text-white" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Important Notice
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-700">
                This Privacy Policy applies only to information processed by
                <strong> Seg Forge</strong> while providing our products,
                services, APIs, documentation, SDKs, and deployment tooling.
              </p>

              <div className="mt-6 rounded-2xl border border-cyan-200 bg-white p-6">
                <p className="text-base leading-8 text-slate-700">
                  <strong>Customer data ownership never changes.</strong> Data
                  stored within your Seg Forge deployments—including cloud,
                  self-hosted, Docker, or Kubernetes environments—remains under
                  the ownership and control of your organization. Seg Forge does
                  not claim ownership of customer datasets, pipelines, metadata,
                  or analytics workloads processed within your environment.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyScope;
