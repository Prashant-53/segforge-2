import React from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  Radio,
  Database,
  GitBranch,
  ShieldCheck,
  Cloud,
  LockOpen,
  Server,
  Layers,
} from "lucide-react";
import ArchitectureImg from "../../assets/architecture.png";

const engines = [
  {
    title: "Apache Flink",
    description: "Batch, streaming, and interactive compute",
    icon: Workflow,
  },
  {
    title: "Apache Kafka",
    description: "Real-time event streaming backbone",
    icon: Radio,
  },
  {
    title: "Apache Iceberg",
    description: "Open lakehouse table format",
    icon: Database,
  },
  {
    title: "Nessie",
    description: "Git-style catalog and versioning",
    icon: GitBranch,
  },
];

const benefits = [
  {
    icon: Database,
    title: "Open Formats",
    description:
      "Data remains stored in Apache Iceberg and Parquet, accessible by the broader ecosystem.",
  },
  {
    icon: LockOpen,
    title: "No Vendor Lock-In",
    description:
      "Built on open engines so you're never tied to a proprietary storage or compute layer.",
  },
  {
    icon: Cloud,
    title: "Cloud Agnostic",
    description:
      "Deploy across AWS, Azure, Google Cloud, MinIO, or on-premises environments.",
  },
  {
    icon: ShieldCheck,
    title: "Data Sovereignty",
    description:
      "Run SegForge inside your own infrastructure with Docker or Kubernetes.",
  },
];

const OpenArchitectureSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center text-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              Open Architecture
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
              Built on technologies
              <br />
              you already trust.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed">
              Rather than proprietary formats and closed ecosystems, SegForge is
              built entirely on proven open-source technologies that power some
              of the largest data platforms in the world.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed">
              Your data remains portable, accessible, and future-proof while
              giving teams full control over where and how it is stored.
            </p>

            <div className="mt-10 rounded-3xl border border-cyan-100 bg-cyan-50 p-6">
              <h4 className="font-semibold text-slate-900 mb-3">
                Why this matters
              </h4>

              <p className="text-slate-600 leading-relaxed">
                SegForge isn't a proprietary black box. The platform
                orchestrates open technologies like Flink, Kafka, Iceberg, and
                Nessie through a unified experience while keeping your
                underlying data completely accessible.
              </p>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-full max-w-7xl mx-auto px-4"
          >
            <img
              src={ArchitectureImg}
              className="h-[6 50px] w-auto mx-auto object-contain"
              alt="Solution Image"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenArchitectureSection;
