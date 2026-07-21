import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Cloud,
  ShieldCheck,
  Database,
  Workflow,
  Boxes,
  Radio,
  GitBranch,
  ArrowDown,
} from "lucide-react";

const deploymentModels = [
  {
    title: "Self Hosted Deployments",
    icon: Server,
    description:
      "Deploy Seg Forge entirely within your own infrastructure. Your organization retains complete operational control over networking, storage, security, and compute resources.",
    bullets: [
      "Customer controls all infrastructure",
      "Data never leaves your environment",
      "Private networking & VPC support",
      "Complete administrative control",
      "Seg Forge has no access to customer deployments",
    ],
  },
  {
    title: "Cloud Deployments",
    icon: Cloud,
    description:
      "Managed cloud deployments provide operational convenience while maintaining strict logical isolation between customer workspaces and environments.",
    bullets: [
      "Metadata required for platform operation",
      "Workspace isolation by design",
      "Customer datasets remain isolated",
      "Encrypted storage and communications",
      "Enterprise authentication and RBAC",
    ],
  },
];

const standards = [
  {
    icon: Workflow,
    name: "Apache Flink",
    description: "Distributed stream & batch processing engine",
  },
  {
    icon: Database,
    name: "Apache Iceberg",
    description: "Open lakehouse table format",
  },
  {
    icon: Radio,
    name: "Apache Kafka",
    description: "Real-time event streaming platform",
  },
  {
    icon: GitBranch,
    name: "Apache Nessie",
    description: "Git-like catalog for lakehouse metadata",
  },
];

const DataSovereignty = () => {
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

      <div className="absolute left-1/2 top-24 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            <ShieldCheck className="h-4 w-4" />
            Data Sovereignty
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Your Data.
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Your Infrastructure.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Seg Forge is built around the principle of customer ownership.
            Whether deployed on-premises or in the cloud, your organization
            maintains control over its data, infrastructure, and operational
            boundaries.
          </p>
        </motion.div>

        {/* Deployment Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {deploymentModels.map((deployment, index) => (
            <motion.div
              key={deployment.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                <deployment.icon className="h-7 w-7 text-cyan-600" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {deployment.title}
              </h3>

              <p className="mt-5 leading-8 text-slate-600">
                {deployment.description}
              </p>

              <div className="mt-8 space-y-3">
                {deployment.bullets.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />

                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Open Standards */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-[32px] border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-white"
        >
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] p-10 lg:p-14">
            {/* Left */}

            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500">
                <Boxes className="h-8 w-8 text-white" />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">
                Built on Open Standards
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Seg Forge is powered entirely by open technologies that prevent
                vendor lock-in. Your data remains portable and accessible
                through industry-standard formats and APIs.
              </p>

              <div className="mt-10 rounded-3xl bg-slate-900 p-8 text-white">
                <div className="space-y-4 font-mono text-sm">
                  <div>Apache Flink</div>

                  <div className="pl-6 text-cyan-400">
                    <ArrowDown className="h-4 w-4" />
                  </div>

                  <div>Apache Kafka</div>

                  <div className="pl-6 text-cyan-400">
                    <ArrowDown className="h-4 w-4" />
                  </div>

                  <div>Apache Iceberg</div>

                  <div className="pl-6 text-cyan-400">
                    <ArrowDown className="h-4 w-4" />
                  </div>

                  <div>Apache Nessie</div>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="grid gap-6 sm:grid-cols-2">
              {standards.map((standard) => (
                <div
                  key={standard.name}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:border-cyan-300 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                    <standard.icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <h4 className="mt-5 text-xl font-semibold text-slate-900">
                    {standard.name}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600">
                    {standard.description}
                  </p>
                </div>
              ))}

              <div className="rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white sm:col-span-2">
                <h3 className="text-2xl font-bold">No Vendor Lock-in</h3>

                <p className="mt-5 leading-8 text-cyan-100">
                  Your data is stored using open formats and industry-standard
                  technologies. Pipelines, metadata, and datasets remain fully
                  portable, allowing you to integrate with the broader data
                  ecosystem without proprietary dependencies or platform
                  lock-in.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "Apache Flink",
                    "Apache Iceberg",
                    "Apache Kafka",
                    "Apache Nessie",
                    "Open APIs",
                    "Portable Data",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataSovereignty;
