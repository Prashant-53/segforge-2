import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  GitBranch,
  Layers3,
  ShieldCheck,
  FolderTree,
} from "lucide-react";

const FEATURES = [
  {
    icon: Database,
    title: "Apache Iceberg",
    description:
      "Analyze data directly on open Iceberg tables without proprietary lock-in.",
  },
  {
    icon: GitBranch,
    title: "Nessie Catalog",
    description:
      "Branch, version, and manage enterprise data with Git-like operations.",
  },
  {
    icon: Layers3,
    title: "Unified Metadata",
    description:
      "Discover datasets, schemas, ownership, and lineage from a single catalog.",
  },
  {
    icon: ShieldCheck,
    title: "Versioned Data Access",
    description:
      "Reproduce experiments and queries using historical table versions.",
  },
  {
    icon: FolderTree,
    title: "Open Table Formats",
    description:
      "Work with Iceberg and open ecosystem standards across the platform.",
  },
];

const CatalogNativeAnalytics = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              Catalog-Native Analytics
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Work directly on governed enterprise data.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed">
              SegForge Notebooks connect natively with your catalog and
              lakehouse architecture, providing trusted access to governed
              datasets, metadata, lineage, and versioned data assets.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-8">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;

                return (
                  <div key={feature.title} className="flex gap-4">
                    <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-5 h-5 text-cyan-600" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {feature.title}
                      </h3>

                      <p className="mt-2 text-slate-600 leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

            <div className="relative bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src="/images/iceberg-catalog.png"
                alt="Apache Iceberg Catalog"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CatalogNativeAnalytics;
