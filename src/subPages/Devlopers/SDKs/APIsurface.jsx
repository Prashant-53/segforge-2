import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  FolderKanban,
  Workflow,
  Activity,
  BookOpen,
  Monitor,
  Layers,
} from "lucide-react";

const resources = [
  {
    title: "Workspace Resource",
    property: "client.workspaces",
    icon: FolderKanban,
    description:
      "Create and manage isolated workspaces, members, and settings.",
  },
  {
    title: "Connections Resource",
    property: "client.connections",
    icon: Database,
    description:
      "Manage database, storage, and messaging connections programmatically.",
  },
  {
    title: "Pipelines Resource",
    property: "client.pipelines",
    icon: Workflow,
    description: "Build, execute, monitor, and orchestrate ETL pipelines.",
  },
  {
    title: "CDC Resource",
    property: "client.cdc",
    icon: Activity,
    description: "Create and manage real-time change data capture streams.",
  },
  {
    title: "Catalog Resource",
    property: "client.catalogs",
    icon: Layers,
    description: "Browse Iceberg namespaces, tables, and metadata.",
  },
  {
    title: "Notebook Resource",
    property: "client.notebooks",
    icon: BookOpen,
    description: "Execute SQL and Python notebooks directly from code.",
  },
  {
    title: "Monitoring Resource",
    property: "client.monitoring",
    icon: Monitor,
    description: "Access infrastructure metrics, alerts, and system health.",
  },
];

const tree = `SegForgeClient
├── workspaces
├── connections
├── pipelines
├── cdc
├── catalogs
├── notebooks
└── monitoring`;

const ResourceApiSurface = () => {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-40 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="absolute right-1/4 bottom-20 h-[300px] w-[300px] rounded-full bg-blue-500/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Resource API Surface
          </div>

          <h2 className="mt-6 text-xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Everything in Seg Forge is exposed as a resource.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-md leading-8 text-slate-600">
            The SDK organizes every platform capability into intuitive,
            discoverable resource controllers that mirror the Seg Forge
            architecture.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="mt-24 grid gap-14 lg:grid-cols-2">
          {/* Resource Cards */}

          <div className="grid gap-5 sm:grid-cols-2">
            {resources.map((resource) => {
              const Icon = resource.icon;

              return (
                <motion.div
                  key={resource.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -6 }}
                  viewport={{ once: true }}
                  className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>

                  <h3 className="mt-5 text-lg font-semibold text-slate-900">
                    {resource.title}
                  </h3>

                  <div className="mt-3 inline-flex rounded-lg bg-slate-100 px-3 py-2 font-mono text-sm text-cyan-700">
                    {resource.property}
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {resource.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Client Tree */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 shadow-2xl"
          >
            <div className="border-b border-slate-800 px-6 py-5">
              <span className="text-sm font-medium text-slate-400">
                SDK Resource Hierarchy
              </span>
            </div>

            <pre className="overflow-x-auto p-10 text-sm leading-8 text-cyan-300">
              <code>{tree}</code>
            </pre>

            <div className="border-t border-slate-800 bg-slate-900/60 px-8 py-6">
              <h4 className="text-lg font-semibold text-white">
                Unified Developer Experience
              </h4>

              <p className="mt-3 leading-7 text-slate-400">
                Every resource follows a consistent controller pattern, exposing
                methods such as <span className="text-cyan-300">list()</span>,{" "}
                <span className="text-cyan-300">get()</span>,{" "}
                <span className="text-cyan-300">create()</span>,{" "}
                <span className="text-cyan-300">update()</span>, and{" "}
                <span className="text-cyan-300">delete()</span> across the
                entire platform.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResourceApiSurface;
