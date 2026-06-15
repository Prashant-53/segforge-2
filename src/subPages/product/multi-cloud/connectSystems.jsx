import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  CheckCircle2,
  Database,
  Workflow,
  Layers,
} from "lucide-react";

const features = [
  "Snowflake",
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "Oracle",
  "Kafka",
  "Cross-Cloud Pipelines",
];

const CrossCloudConnectivitySection = () => {
  return (
    <section className="py-32 bg-slate-50  overflow-x-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-col-1 gap-16 xl:gap-20 items-center">
          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Network className="w-4 h-4" />
              Unified Connectivity
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 ">
              Break down cloud silos without moving everything.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Build pipelines that span clouds, regions, and environments from a
              single workspace.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Connect databases, streaming platforms, and analytics systems
              regardless of where they are hosted.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Create a unified data platform without forcing every workload into
              a single cloud provider.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />
                  <span className="text-slate-700">{feature}</span>
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
              {/* Source */}

              <div className="flex justify-start">
                <div className="w-full max-w-xs rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <Database className="w-7 h-7 text-cyan-600 mb-3" />

                  <h3 className="font-semibold text-slate-900">
                    AWS PostgreSQL
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Production operational database
                  </p>
                </div>
              </div>

              {/* Pipeline */}

              <div className="flex justify-center py-8">
                <div className="w-full max-w-sm  rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 text-center">
                  <Workflow className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                  <h3 className="font-semibold text-slate-900 text-lg">
                    Cross-Cloud Pipeline
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Move and transform data across environments.
                  </p>
                </div>
              </div>

              {/* Target */}

              <div className="flex justify-end">
                <div className="w-full max-w-sm  rounded-3xl border border-slate-200 bg-slate-50 p-6">
                  <Layers className="w-7 h-7 text-cyan-600 mb-3" />

                  <h3 className="font-semibold text-slate-900">
                    Azure Iceberg
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Curated analytics lakehouse
                  </p>
                </div>
              </div>

              {/* Connector */}

              <div className="flex justify-center py-8">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* Unified Workspace */}

              <div className="rounded-3xl bg-slate-900 text-white p-8 text-center">
                <Network className="w-8 h-8 mx-auto mb-3" />

                <h3 className="font-semibold text-lg">Unified Workspace</h3>

                <p className="text-slate-400 text-sm mt-2">
                  Manage cross-cloud operations from one platform.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CrossCloudConnectivitySection;
