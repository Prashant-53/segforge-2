import React from "react";
import { motion } from "framer-motion";
import {
  FolderTree,
  Database,
  BarChart3,
  Eye,
  CheckCircle2,
} from "lucide-react";

const capabilityGroups = [
  {
    icon: FolderTree,
    title: "Namespace Explorer",
    items: ["Raw", "Staged", "Curated"],
  },
  {
    icon: Database,
    title: "Rich Metadata",
    items: [
      "Storage Size",
      "Row Count",
      "Files",
      "Partitions",
      "Update History",
    ],
  },
];

const catalogFeatures = [
  {
    icon: BarChart3,
    title: "Column Statistics",
    description:
      "Inspect minimum and maximum values, null counts, distinct values, distributions, and histograms for every column before running analytical workloads.",
  },
  {
    icon: Eye,
    title: "Instant Preview",
    description:
      "Preview the first 100 rows, inspect schemas, and generate queries instantly without leaving the catalog explorer.",
  },
];

const CatalogExplorerSection = () => {
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
              Catalog Explorer
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Understand Your Lakehouse
              <br />
              in Seconds.
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-6 text-slate-600">
              Browse namespaces, inspect metadata, preview data, and explore
              every managed Apache Iceberg table through a unified enterprise
              catalog interface.
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
              {catalogFeatures.map((feature) => (
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
                <CheckCircle2 className="mt-1 h-7 w-7 text-cyan-600" />

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Everything You Need Without Writing a Query.
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Discover datasets, inspect schemas, explore metadata,
                    preview records, and understand your entire lakehouse
                    through a unified enterprise catalog experience.
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
            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src="/images/catalog-explorer-dashboard.webp"
                alt="Catalog Explorer"
                className="w-full"
              />
            </div>

            {/* Floating Card */}

            <div className="absolute -left-6 top-8 hidden rounded-2xl border border-cyan-200 bg-white px-5 py-4 shadow-xl lg:block">
              <p className="text-sm font-semibold text-slate-900">
                1,284 Tables
              </p>

              <p className="mt-1 text-xs text-slate-500">
                Across 32 Namespaces
              </p>
            </div>

            {/* Floating Card */}

            <div className="absolute -right-6 bottom-8 hidden rounded-2xl border border-cyan-200 bg-white px-5 py-4 shadow-xl lg:block">
              <p className="text-sm font-semibold text-slate-900">
                Live Preview
              </p>

              <p className="mt-1 text-xs text-slate-500">
                First 100 Rows Loaded
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CatalogExplorerSection;
