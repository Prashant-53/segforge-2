import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  GitBranch,
  ShieldCheck,
  RefreshCw,
  Cloud,
  Layers3,
} from "lucide-react";

const OpenCatalogFoundation = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="max-w-3xl mx-auto ">
          <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            Open Catalog Foundation
          </div>

          <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Built on open technologies, designed for long-term flexibility.
          </h2>

          <p className="mt-6 text-md text-slate-600 leading-relaxed">
            SegForge is powered by proven open standards, giving teams the
            freedom to scale, evolve, and integrate without vendor lock-in.
          </p>
        </div>

        {/* Architecture Canvas */}

        <div className="mt-24 relative">
          {/* Center Core */}

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative z-10 flex justify-center"
          >
            <div className="w-[340px] h-[340px] rounded-full bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 flex flex-col items-center justify-center text-center shadow-xl">
              <Layers3 className="w-12 h-12 text-cyan-600 mb-4" />

              <h3 className="text-2xl font-bold text-slate-900">SegForge</h3>

              <p className="text-slate-600 mt-2">Catalog Core</p>
            </div>
          </motion.div>

          {/* Features Around Core */}

          <div className="grid lg:grid-cols-3 gap-10 mt-16 lg:mt-0">
            {/* TOP ROW */}

            <div className="lg:absolute lg:left-0 lg:top-0 max-w-xs">
              <Feature
                icon={Database}
                title="Apache Iceberg"
                text="Store and manage data using an open table format built for modern lakehouses."
              />
            </div>

            <div className="lg:absolute lg:right-0 lg:top-0 max-w-xs ml-auto">
              <Feature
                icon={GitBranch}
                title="Nessie Catalog"
                text="Version datasets with branches, commits, and tags for safe experimentation."
              />
            </div>

            {/* MIDDLE */}

            <div className="lg:absolute lg:left-0 lg:top-1/2 lg:-translate-y-1/2 max-w-xs">
              <Feature
                icon={ShieldCheck}
                title="ACID Transactions"
                text="Maintain consistency and reliability even across large-scale workloads."
              />
            </div>

            <div className="lg:absolute lg:right-0 lg:top-1/2 lg:-translate-y-1/2 max-w-xs ml-auto">
              <Feature
                icon={RefreshCw}
                title="Schema Evolution"
                text="Adapt to changing business requirements without rebuilding tables."
              />
            </div>

            {/* BOTTOM */}

            <div className="lg:absolute lg:left-0 lg:bottom-0 max-w-xs">
              <Feature
                icon={Layers3}
                title="Open Standards"
                text="Built around open ecosystems that integrate with modern data tools."
              />
            </div>

            <div className="lg:absolute lg:right-0 lg:bottom-0 max-w-xs ml-auto">
              <Feature
                icon={Cloud}
                title="Multi-Cloud Storage"
                text="Run across AWS, Azure, Google Cloud, MinIO, and other storage platforms."
              />
            </div>
          </div>

          {/* Connector Lines */}

          <svg
            className="hidden lg:block absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 1200 600"
          >
            <path
              d="M250 100 C400 150 450 220 600 300"
              stroke="#06b6d4"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 6"
            />

            <path
              d="M950 100 C800 150 750 220 600 300"
              stroke="#06b6d4"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 6"
            />

            <path
              d="M250 300 C400 300 450 300 600 300"
              stroke="#06b6d4"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 6"
            />

            <path
              d="M950 300 C800 300 750 300 600 300"
              stroke="#06b6d4"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 6"
            />

            <path
              d="M250 500 C400 450 450 380 600 300"
              stroke="#06b6d4"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="6 6"
            />

            <path
              d="M950 500 C800 450 750 380 600 300"
              stroke="#06b6d4"
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

const Feature = ({ icon: Icon, title, text }) => {
  return (
    <div className="bg-white">
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-xl bg-cyan-50 border border-cyan-100 flex items-center justify-center flex-shrink-0">
          <Icon className="w-5 h-5 text-cyan-600" />
        </div>

        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>

          <p className="mt-2 text-slate-600 leading-relaxed">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default OpenCatalogFoundation;
