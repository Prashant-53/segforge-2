import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  HardDrive,
  Cloud,
  Server,
  CheckCircle2,
  FolderTree,
  ShieldCheck,
} from "lucide-react";

import Hero from "../../../assets/Devlopers/Open-Source/third.webp";

const capabilityGroups = [
  {
    icon: Database,
    title: "Open Storage Format",
    items: [
      "Apache Parquet",
      "Apache Iceberg",
      "Columnar Storage",
      "ACID Transactions",
    ],
  },
  {
    icon: Cloud,
    title: "Storage Backends",
    items: ["AWS S3", "MinIO", "Azure Blob", "Google Cloud Storage"],
  },
];

const storageFeatures = [
  {
    icon: FolderTree,
    title: "Data Portability",
    description:
      "Every dataset is stored using open Apache Parquet files and Apache Iceberg metadata, allowing your data to remain fully portable across platforms without proprietary formats.",
  },
  {
    icon: HardDrive,
    title: "S3-Compatible Storage",
    description:
      "Deploy on Amazon S3, MinIO, Azure Blob Storage, or Google Cloud Storage using a unified storage abstraction that eliminates provider-specific implementations.",
  },
  {
    icon: ShieldCheck,
    title: "Vendor Independence",
    description:
      "Maintain complete ownership of your storage and metadata while preserving the freedom to migrate between cloud providers without rewriting applications or pipelines.",
  },
  {
    icon: Server,
    title: "Universal Interoperability",
    description:
      "Your data remains accessible through open standards and can be queried directly by engines like Trino, Spark, DuckDB, and other Apache Iceberg-compatible tools.",
  },
];

const DataPortability = () => {
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
              Data Portability
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Your Data.
              <br />
              Always Open.
              <br />
              Never Locked In.
            </h2>

            <p className="mt-6 text-md leading-6 text-slate-600">
              Seg Forge stores every dataset using open industry standards,
              allowing you to move freely between cloud providers while keeping
              complete ownership of your storage, metadata, and infrastructure.
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
              {storageFeatures.map((feature) => (
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

          {/* RIGHT */}

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
                alt="Open Storage Architecture"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataPortability;
