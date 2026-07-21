import React from "react";
import { motion } from "framer-motion";
import {
  HardDrive,
  Server,
  Globe,
  Lock,
  CheckCircle2,
  ShieldCheck,
  Cloud,
} from "lucide-react";

const capabilityGroups = [
  {
    icon: HardDrive,
    title: "Supported Storage",
    items: [
      "Amazon S3",
      "MinIO",
      "Azure Blob Storage",
      "Google Cloud Storage",
      "On-Prem Object Storage",
    ],
  },
  {
    icon: Server,
    title: "Deployment Options",
    items: [
      "Kubernetes",
      "Amazon EC2",
      "Virtual Machines",
      "Bare Metal",
      "Private Cloud",
    ],
  },
];

const platformBenefits = [
  {
    icon: Globe,
    title: "Cloud Agnostic",
    description:
      "Deploy Seg Forge on any cloud provider or your own infrastructure without changing how your data platform operates.",
  },
  {
    icon: ShieldCheck,
    title: "Customer Ownership",
    description:
      "Your storage, metadata, and compute remain entirely under your control with no proprietary dependencies.",
  },
  {
    icon: Lock,
    title: "Open Standards",
    description:
      "Built on Apache Iceberg, Apache Nessie, Parquet, and open APIs to eliminate vendor lock-in and future-proof your platform.",
  },
];

const DataSovereigntySection = () => {
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

      <div className="absolute left-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

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
            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src="/images/data-sovereignty-dashboard.webp"
                alt="Storage & Data Sovereignty"
                className="w-full"
              />
            </div>

            <div className="absolute -left-6 top-8 hidden rounded-2xl border border-cyan-200 bg-white px-5 py-4 shadow-xl lg:block">
              <p className="text-sm font-semibold text-slate-900">
                Customer Storage
              </p>

              <p className="mt-1 text-xs text-slate-500">Amazon S3 • MinIO</p>
            </div>

            <div className="absolute -right-6 bottom-8 hidden rounded-2xl border border-cyan-200 bg-white px-5 py-4 shadow-xl lg:block">
              <p className="text-sm font-semibold text-slate-900">
                Open Standards
              </p>

              <p className="mt-1 text-xs text-slate-500">No Vendor Lock-In</p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Storage & Data Sovereignty
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Your Infrastructure.
              <br />
              Your Data. Your Rules.
            </h2>

            <p className="mt-6 text-md leading-6 text-slate-600">
              Deploy anywhere while maintaining complete ownership of your
              storage, compute, and metadata. Build an open lakehouse without
              surrendering control of your infrastructure.
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

            {/* Benefits */}

            <div className="mt-10 space-y-5">
              {platformBenefits.map((feature) => (
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

            {/* Trust Statement */}

            <div className="mt-10 rounded-3xl border border-cyan-200 bg-cyan-50 p-6">
              <p className="text-lg font-semibold text-slate-900">
                Your tables remain in your infrastructure—not ours.
              </p>

              <p className="mt-3 leading-7 text-slate-600">
                Seg Forge manages your data platform while your datasets, object
                storage, metadata, and compute stay entirely within your
                environment.
              </p>
            </div>

            {/* Bottom Highlight */}

            <div className="mt-8 rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-white p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-7 w-7 text-cyan-600" />

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Enterprise Freedom Without Proprietary Lock-In.
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Own your infrastructure, choose your cloud, keep your data,
                    and build on open standards that evolve with your business.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataSovereigntySection;
