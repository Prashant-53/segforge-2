import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  CheckCircle2,
  ArrowRight,
  Activity,
  Layers3,
  HardDrive,
} from "lucide-react";

const integrations = [
  {
    name: "PostgreSQL",
    logo: "/logos/postgresql.svg",
    connector: "JDBC + Debezium",
    jdbc: true,
    cdc: true,
    snapshot: true,
    streaming: true,
    status: "GA",
  },
  {
    name: "MySQL",
    logo: "/logos/mysql.svg",
    connector: "JDBC + Debezium",
    jdbc: true,
    cdc: true,
    snapshot: true,
    streaming: true,
    status: "GA",
  },
  {
    name: "SQL Server",
    logo: "/logos/sqlserver.svg",
    connector: "JDBC + Debezium",
    jdbc: true,
    cdc: true,
    snapshot: true,
    streaming: true,
    status: "GA",
  },
  {
    name: "Oracle",
    logo: "/logos/oracle.svg",
    connector: "JDBC + Debezium",
    jdbc: true,
    cdc: true,
    snapshot: true,
    streaming: true,
    status: "GA",
  },
  {
    name: "IBM DB2",
    logo: "/logos/db2.svg",
    connector: "JDBC + Debezium",
    jdbc: true,
    cdc: true,
    snapshot: true,
    streaming: true,
    status: "Beta",
  },
];

const Feature = ({ icon: Icon, label, enabled }) => (
  <div
    className={`flex items-center gap-2 rounded-lg px-3 py-2 ${
      enabled ? "bg-emerald-50 text-emerald-700" : "bg-slate-100 text-slate-400"
    }`}
  >
    <Icon className="h-4 w-4" />

    <span className="text-sm font-medium">{label}</span>
  </div>
);

const InboundDataSources = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right,#06b6d4 1px,transparent 1px),
              linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Inbound Data Sources
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Connect enterprise databases
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}
              in minutes.
            </span>
          </h2>

          <p className="mt-6 text-md leading-8 text-slate-600">
            Seg Forge provides production-ready connectors for operational
            databases with support for batch ingestion, real-time CDC,
            snapshots, and streaming pipelines using a unified connector
            framework.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2 xl:grid-cols-3">
          {integrations.map((db, index) => (
            <motion.div
              key={db.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-cyan-300 hover:shadow-xl"
            >
              {/* Header */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  {/* Replace with image if available */}

                  <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-100">
                    <Database className="h-8 w-8 text-cyan-600" />

                    {/* <img
                      src={db.logo}
                      alt={db.name}
                      className="h-10 object-contain"
                    /> */}
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {db.name}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {db.connector}
                    </p>
                  </div>
                </div>

                <span
                  className={`rounded-full px-3 py-1 text-xs font-semibold ${
                    db.status === "GA"
                      ? "bg-emerald-100 text-emerald-700"
                      : "bg-amber-100 text-amber-700"
                  }`}
                >
                  {db.status}
                </span>
              </div>

              {/* Capability Grid */}

              <div className="mt-8 grid grid-cols-2 gap-3">
                <Feature icon={Database} label="JDBC" enabled={db.jdbc} />

                <Feature icon={Activity} label="CDC" enabled={db.cdc} />

                <Feature
                  icon={HardDrive}
                  label="Snapshot"
                  enabled={db.snapshot}
                />

                <Feature
                  icon={Layers3}
                  label="Streaming"
                  enabled={db.streaming}
                />
              </div>

              {/* Divider */}

              <div className="my-8 border-t border-slate-200" />

              {/* Footer */}

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-emerald-600">
                  <CheckCircle2 className="h-4 w-4" />
                  Production Ready
                </div>

                <button className="group/button flex items-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-cyan-500">
                  View Setup
                  <ArrowRight className="h-4 w-4 transition-transform group-hover/button:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InboundDataSources;
