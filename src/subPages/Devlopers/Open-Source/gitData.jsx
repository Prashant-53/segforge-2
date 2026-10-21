import React from "react";
import { motion } from "framer-motion";
import {
  GitBranch,
  GitCommitHorizontal,
  Tag,
  GitMerge,
  History,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

import Hero from "../../../assets/Devlopers/Open-Source/fourth.webp";

const capabilityGroups = [
  {
    icon: GitBranch,
    title: "Version Control",
    items: ["Branches", "Commits", "Tags", "Merge Workflows"],
  },
  {
    icon: History,
    title: "Catalog Governance",
    items: [
      "Complete Catalog History",
      "Audit Trail",
      "Change Tracking",
      "Apache Nessie",
    ],
  },
];

const gitFeatures = [
  {
    icon: GitBranch,
    title: "Branch Your Lakehouse",
    description:
      "Create isolated branches of your data catalog to safely experiment with schema evolution, feature engineering, and data transformations without impacting production datasets.",
  },
  {
    icon: GitCommitHorizontal,
    title: "Every Change Becomes a Commit",
    description:
      "Track every table creation, schema modification, metadata update, and data operation as an immutable catalog commit, providing complete visibility into the evolution of your lakehouse.",
  },
  {
    icon: Tag,
    title: "Release with Tags & Merge Workflows",
    description:
      "Mark trusted production states using tags and promote validated changes through controlled merge workflows, bringing software engineering best practices to enterprise data management.",
  },
  {
    icon: ShieldCheck,
    title: "Complete Auditability with Apache Nessie",
    description:
      "Apache Nessie maintains a permanent history of every catalog operation, enabling compliance, governance, rollback, and forensic analysis through a fully auditable Git-like metadata timeline.",
  },
];

const GitForData = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28">
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

      {/* Glow */}

      <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

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
              Git-for-Data
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Version Your
              <br />
              Lakehouse Like
              <br />
              Source Code.
            </h2>

            <p className="mt-6 text-md leading-6 text-slate-600">
              Seg Forge leverages Apache Nessie to bring Git-inspired version
              control to enterprise data. Every catalog operation is tracked,
              enabling safe experimentation, controlled promotion, and complete
              auditability across your lakehouse.
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
              {gitFeatures.map((feature) => (
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
                alt="Git for Data with Apache Nessie"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default GitForData;
