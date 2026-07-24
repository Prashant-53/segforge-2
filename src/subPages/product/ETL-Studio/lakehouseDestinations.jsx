import React from "react";
import { motion } from "framer-motion";
import { Database, ShieldCheck, GitBranch, Clock3 } from "lucide-react";
import LakehouseDestination from "../../../assets/Products/ETL/lakehouse.webp";
const features = [
  {
    icon: Database,
    title: "Apache Iceberg",
    description:
      "Store analytical datasets in an open table format supporting ACID transactions, schema evolution, partition optimization, and high-performance analytics at enterprise scale.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Data Lineage",
    description:
      "Track every transformation from source systems through Apache Flink pipelines to governed Iceberg tables with end-to-end visibility and traceability.",
  },
  {
    icon: Clock3,
    title: "Time Travel & Schema Evolution",
    description:
      "Safely evolve schemas without breaking downstream workloads while querying historical versions of your data for auditing and recovery.",
  },
  {
    icon: GitBranch,
    title: "Nessie Version Control",
    description:
      "Manage your lakehouse using Git-like operations including branching, commits, merges, and rollbacks to safely develop and promote data changes.",
  },
];

const LakehouseDestinations = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
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

      <div className="absolute left-1/4 top-24 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-2xl">
              <img
                src={LakehouseDestination}
                alt="Apache Iceberg Lakehouse Architecture"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Open Lakehouse Architecture
            </div>
            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Open Table Foundation Built for Modern Analytics
            </h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              ETL Studio transforms raw enterprise data into governed Apache
              Iceberg tables through Apache Flink while Apache Nessie provides
              Git-style version control. The result is a modern open lakehouse
              that supports analytics, machine learning, and AI workloads
              without vendor lock-in.
            </p>
            <div className="mt-12 space-y-8">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                    <feature.icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            {/* Bottom Stats */}=
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LakehouseDestinations;
