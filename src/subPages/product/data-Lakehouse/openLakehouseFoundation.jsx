import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  GitBranch,
  Clock3,
  RefreshCw,
  Activity,
  Layers3,
} from "lucide-react";

const technologies = [
  {
    icon: Database,
    title: "Apache Iceberg",
    description:
      "Open table format designed for large-scale analytics and reliable data management.",
  },
  {
    icon: GitBranch,
    title: "Nessie Catalog",
    description:
      "Git-style branching and versioning for experimentation and safe collaboration.",
  },
  {
    icon: Activity,
    title: "Apache Kafka",
    description:
      "Stream events and data changes into the lakehouse in real time.",
  },
  {
    icon: Activity,
    title: "Apache Flink",
    description:
      "Power large-scale batch and streaming workloads from a unified platform.",
  },
  {
    icon: Clock3,
    title: "Time Travel",
    description:
      "Query historical versions of data and recover from mistakes instantly.",
  },
  {
    icon: RefreshCw,
    title: "Schema Evolution",
    description:
      "Adapt to changing business requirements without rebuilding datasets.",
  },
];

const OpenLakehouseFoundation = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto "
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            Open Lakehouse Foundation
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Built on open standards,
            <br />
            not proprietary lock-in.
          </h2>

          <p className="mt-6 text-md text-slate-600 leading-relaxed">
            Store data once and use it everywhere. SegForge combines Apache
            Iceberg, Nessie, and open ecosystem technologies to create a
            lakehouse that grows with your platform.
          </p>
        </motion.div>

        {/* Architecture */}

        <div className="mt-24 relative min-h-[700px]">
          {/* Center Core */}

          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="w-[300px] h-[300px] rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 flex flex-col items-center justify-center text-center shadow-[0_25px_80px_rgba(15,23,42,0.08)]"
            >
              <Layers3 className="w-14 h-14 text-cyan-600 mb-5" />

              <h3 className="text-3xl font-bold text-slate-900">SegForge</h3>

              <p className="mt-2 text-slate-600">Lakehouse Core</p>
            </motion.div>
          </div>

          {/* Orbiting Technologies */}

          <div className="grid lg:grid-cols-2 gap-y-20">
            <OrbitItem
              className="lg:absolute left-0 top-10"
              icon={Database}
              title="Apache Iceberg"
              description="Open table format for reliable analytics."
            />

            <OrbitItem
              className="lg:absolute right-0 top-10"
              icon={GitBranch}
              title="Nessie Catalog"
              description="Git-like versioning and branching."
            />

            <OrbitItem
              className="lg:absolute left-0 top-1/2 -translate-y-1/2"
              icon={Activity}
              title="Apache Kafka"
              description="Real-time streaming and CDC."
            />

            <OrbitItem
              className="lg:absolute right-0 top-1/2 -translate-y-1/2"
              icon={Activity}
              title="Apache Flink"
              description="Unified batch and stream processing."
            />

            <OrbitItem
              className="lg:absolute left-0 bottom-10"
              icon={Clock3}
              title="Time Travel"
              description="Access historical versions of data."
            />

            <OrbitItem
              className="lg:absolute right-0 bottom-10"
              icon={RefreshCw}
              title="Schema Evolution"
              description="Adapt schemas without disruption."
            />
          </div>

          {/* Connector Lines */}

          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 700"
          >
            <path
              d="M250 120 C450 180 500 250 600 350"
              stroke="#22d3ee"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 6"
            />

            <path
              d="M950 120 C750 180 700 250 600 350"
              stroke="#22d3ee"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 6"
            />

            <path
              d="M250 350 L450 350"
              stroke="#22d3ee"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 6"
            />

            <path
              d="M750 350 L950 350"
              stroke="#22d3ee"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 6"
            />

            <path
              d="M950 580 C750 520 700 450 600 350"
              stroke="#22d3ee"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 6"
            />
          </svg>
        </div>
      </div>
    </section>
  );
};

const OrbitItem = ({ icon: Icon, title, description, className }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className={`max-w-xs ${className}`}
    >
      <div className="flex gap-4">
        <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-cyan-600" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>

          <p className="mt-2 text-slate-600 leading-relaxed">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default OpenLakehouseFoundation;
