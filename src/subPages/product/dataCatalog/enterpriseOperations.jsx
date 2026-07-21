import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  RefreshCw,
  ShieldCheck,
  History,
  Upload,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Database,
    title: "Automated Table Creation",
    description:
      "Pipelines, CDC streams, and ingestion jobs automatically create Apache Iceberg tables without manual intervention.",
  },
  {
    icon: RefreshCw,
    title: "Schema Evolution",
    description:
      "Safely add, rename, remove, or modify columns while preserving compatibility across downstream workloads.",
  },
  {
    icon: ShieldCheck,
    title: "ACID Transactions",
    description:
      "Guarantee reliable concurrent reads and writes using Apache Iceberg's transactional architecture.",
  },
  {
    icon: History,
    title: "Time Travel",
    description:
      "Query historical snapshots and recover previous table versions whenever required.",
  },
  {
    icon: Upload,
    title: "Direct File Upload",
    description:
      "Import CSV, JSON, and Parquet files with automatic schema detection and table creation.",
  },
];

const EnterpriseOperations = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-28">
      {/* Background */}

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

      <div className="absolute left-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src="/images/enterprise-table-management.webp"
                alt="Enterprise Table Management"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Enterprise Data Operations
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              From Data Ingestion
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                to Production Tables.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Automatically create, evolve, and manage enterprise lakehouse
              tables using Apache Iceberg while maintaining transactional
              consistency, open standards, and production-grade reliability.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-5">
              {features.map((feature) => (
                <motion.div
                  key={feature.title}
                  whileHover={{ x: 6 }}
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
                </motion.div>
              ))}
            </div>

            {/* Bottom Highlight */}

            <div className="mt-10 rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-white p-6">
              <div className="flex items-start gap-4">
                <CheckCircle2 className="mt-1 h-7 w-7 text-cyan-600" />

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Modern table management without operational complexity.
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Automatically ingest data, evolve schemas, guarantee ACID
                    consistency, and manage production-ready Apache Iceberg
                    tables without manual administration.
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

export default EnterpriseOperations;
