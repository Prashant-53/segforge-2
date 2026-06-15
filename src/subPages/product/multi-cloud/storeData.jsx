import React from "react";
import { motion } from "framer-motion";
import { Database, CheckCircle2, HardDrive, Brain } from "lucide-react";

const storageOptions = [
  "Amazon S3",
  "Azure Data Lake",
  "Google Cloud Storage",
  "MinIO",
  "HDFS",
  "Apache Iceberg Portability",
];

const StoragePortabilitySection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Database className="w-4 h-4" />
              Lakehouse Portability
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Keep data close to the workloads that need it.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Choose the storage platform that best fits your performance,
              compliance, and cost requirements.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Move workloads without rebuilding data architectures and maintain
              a consistent lakehouse experience regardless of where data is
              stored.
            </p>

            <div className="mt-10 space-y-4">
              {storageOptions.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Storage Nodes */}

              <div className="grid grid-cols-2 gap-4">
                <StorageNode title="Amazon S3" />
                <StorageNode title="Azure Data Lake" />
                <StorageNode title="Google Cloud Storage" />
                <StorageNode title="MinIO" />
              </div>

              {/* Connector */}

              <div className="flex justify-center py-8">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* Lakehouse */}

              <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 text-center">
                <HardDrive className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                <h3 className="font-semibold text-slate-900 text-lg">
                  Unified Lakehouse
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  One open data layer across every storage backend.
                </p>
              </div>

              {/* Connector */}

              <div className="flex justify-center py-8">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* Analytics */}

              <div className="rounded-3xl bg-slate-900 text-white p-8 text-center">
                <Brain className="w-8 h-8 mx-auto mb-3" />

                <h3 className="font-semibold text-lg">Analytics & AI</h3>

                <p className="text-slate-400 text-sm mt-2">
                  Consistent access regardless of storage location.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StorageNode = ({ title }) => (
  <div className="border border-slate-200 rounded-2xl p-5 text-center bg-slate-50">
    <Database className="w-6 h-6 text-cyan-600 mx-auto mb-3" />
    <h4 className="font-medium text-slate-900">{title}</h4>
  </div>
);

export default StoragePortabilitySection;
