import React from "react";
import { motion } from "framer-motion";
import { GitBranch, ShieldCheck, Clock3, FileSearch, Eye } from "lucide-react";

const GOVERNANCE_FEATURES = [
  {
    icon: GitBranch,
    title: "Data Lineage",
  },
  {
    icon: GitBranch,
    title: "Version Control",
  },
  {
    icon: FileSearch,
    title: "Auditability",
  },
  {
    icon: ShieldCheck,
    title: "Access Governance",
  },
  {
    icon: Clock3,
    title: "Time Travel",
  },
];

const LakehouseGovernance = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto "
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            Lakehouse Governance
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Trust every dataset from ingestion to analytics.
          </h2>

          <p className="mt-6 text-md text-slate-600 leading-relaxed">
            Understand where data comes from, how it changes, and who has access
            to it. SegForge brings governance, lineage, and versioning directly
            into your lakehouse.
          </p>
        </motion.div>

        {/* Architecture Flow */}

        <div className="mt-24">
          <div className="max-w-xl mx-auto">
            {/* Raw */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="inline-flex px-10 py-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="font-semibold text-slate-900">Raw</span>
              </div>
            </motion.div>

            {/* Arrow */}

            <div className="flex justify-center py-5">
              <div className="w-px h-12 bg-cyan-300" />
            </div>

            {/* Staged */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="inline-flex px-10 py-5 rounded-2xl bg-white border border-slate-200 shadow-sm">
                <span className="font-semibold text-slate-900">Staged</span>
              </div>
            </motion.div>

            {/* Arrow */}

            <div className="flex justify-center py-5">
              <div className="w-px h-12 bg-cyan-300" />
            </div>

            {/* Curated */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="inline-flex px-10 py-5 rounded-2xl bg-cyan-50 border border-cyan-200">
                <span className="font-semibold text-cyan-700">Curated</span>
              </div>
            </motion.div>

            {/* Arrow */}

            <div className="flex justify-center py-5">
              <div className="w-px h-12 bg-cyan-300" />
            </div>

            {/* Analytics */}

            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="inline-flex px-10 py-5 rounded-2xl bg-slate-900">
                <span className="font-semibold text-white">Analytics & AI</span>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Governance Features */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-24 flex flex-wrap justify-center gap-x-10 gap-y-6"
        >
          {GOVERNANCE_FEATURES.map((feature) => {
            const Icon = feature.icon;

            return (
              <div key={feature.title} className="flex items-center gap-3">
                <Icon className="w-5 h-5 text-cyan-600" />

                <span className="text-slate-700 font-medium">
                  {feature.title}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default LakehouseGovernance;
