import React from "react";
import { motion } from "framer-motion";
import {
  FolderTree,
  Database,
  Table2,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: FolderTree,
    title: "Namespace Explorer",
    description:
      "Browse organized data domains, namespaces, catalogs, and Apache Iceberg tables through an intuitive hierarchy.",
  },
  {
    icon: Database,
    title: "Rich Metadata",
    description:
      "View storage size, row counts, partitions, files, owners, update history, and governance metadata instantly.",
  },
  {
    icon: Table2,
    title: "Data Preview",
    description:
      "Preview records immediately before writing queries to better understand datasets and validate contents.",
  },
  {
    icon: BarChart3,
    title: "Column Statistics",
    description:
      "Analyze distributions, null counts, distinct values, data types, and schema evolution automatically.",
  },
];

const CatalogExploration = () => {
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

      <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Intelligent Catalog
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 lg:text-6xl">
            Find the Right Data
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              in Seconds.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Navigate namespaces, inspect metadata, preview datasets, and
            understand your lakehouse through a powerful interactive catalog
            explorer built for modern data teams.
          </p>
        </motion.div>

        {/* Product Screenshot */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
            <img
              src="/images/catalog-explorer.webp"
              alt="Catalog Explorer"
              className="w-full"
            />
          </div>
        </motion.div>

        {/* Features */}

        <div className="mt-16 grid gap-6 md:grid-cols-2">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -4 }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all hover:border-cyan-200 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                <feature.icon className="h-7 w-7 text-cyan-600" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                {feature.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Highlight */}

        <div className="mt-16 rounded-[32px] bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px] shadow-xl">
          <div className="rounded-[31px] bg-white px-10 py-12 text-center">
            <CheckCircle2 className="mx-auto h-10 w-10 text-cyan-600" />

            <h3 className="mt-6 text-3xl font-bold text-slate-900">
              Everything you need to understand your data
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                without writing a query.
              </span>
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
              Explore schemas, inspect metadata, preview records, and analyze
              table statistics from one intelligent catalog experience designed
              for enterprise-scale lakehouses.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CatalogExploration;
