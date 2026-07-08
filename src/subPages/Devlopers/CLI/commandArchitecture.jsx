import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  FolderKanban,
  Database,
  GitBranch,
  BookOpen,
  Activity,
  Cpu,
  Users,
  Settings2,
  MonitorSmartphone,
  ChevronRight,
} from "lucide-react";

const commandGroups = [
  {
    title: "Workspace",
    icon: FolderKanban,
    color: "from-cyan-500 to-blue-600",
    description: "Manage workspaces and isolated environments.",
    commands: [
      "segforge workspace create",
      "segforge workspace list",
      "segforge workspace delete",
    ],
  },
  {
    title: "Pipeline",
    icon: GitBranch,
    color: "from-violet-500 to-indigo-600",
    description: "Build, execute and monitor ETL pipelines.",
    commands: [
      "segforge pipeline create",
      "segforge pipeline run",
      "segforge pipeline logs",
      "segforge pipeline watch",
    ],
  },
  {
    title: "CDC",
    icon: Activity,
    color: "from-emerald-500 to-green-600",
    description: "Manage real-time CDC streams.",
    commands: [
      "segforge cdc create",
      "segforge cdc start",
      "segforge cdc stop",
    ],
  },
  {
    title: "Compute",
    icon: Cpu,
    color: "from-orange-500 to-red-500",
    description: "Provision and scale compute clusters.",
    commands: [
      "segforge compute create",
      "segforge compute scale",
      "segforge compute terminate",
    ],
  },
  {
    title: "Monitoring",
    icon: MonitorSmartphone,
    color: "from-pink-500 to-rose-600",
    description: "Monitor infrastructure and pipeline health.",
    commands: ["segforge monitoring status", "segforge monitoring alerts"],
  },
];

const architecture = [
  "workspace",
  "connection",
  "pipeline",
  "notebook",
  "cdc",
  "catalog",
  "monitoring",
  "compute",
  "users",
  "config",
];

const CommandArchitecture = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background */}

      <div className="absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right,#06b6d4 1px,transparent 1px),
              linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Command Architecture
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            A consistent command hierarchy for every
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}
              Seg Forge resource.
            </span>
          </h2>

          <p className="mt-6 text-md leading-8 text-slate-600">
            The CLI follows a predictable resource-oriented architecture. Every
            service exposes a dedicated command group with a consistent syntax,
            making automation intuitive across pipelines, CDC, monitoring,
            compute, and administration.
          </p>
        </motion.div>

        {/* Architecture */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-3xl border border-slate-200 bg-slate-950 shadow-2xl"
        >
          {/* Terminal Header */}

          <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
            <div className="flex items-center gap-3">
              <Terminal className="h-5 w-5 text-cyan-400" />

              <span className="text-sm text-slate-300">CLI Command Tree</span>
            </div>

            <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
              Resource-Based Architecture
            </span>
          </div>

          {/* Tree */}

          <div className="p-8 font-mono text-sm leading-9">
            <div className="text-cyan-400">segforge</div>

            {architecture.map((item) => (
              <div
                key={item}
                className="flex items-center gap-2 text-slate-300"
              >
                <span className="text-slate-600">├──</span>

                <span className="text-green-400">{item}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Cards */}

        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {commandGroups.map((group) => (
            <motion.div
              key={group.title}
              whileHover={{ y: -8 }}
              transition={{ duration: 0.25 }}
              className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all hover:border-cyan-300 hover:shadow-xl"
            >
              {/* Icon */}

              <div
                className={`inline-flex rounded-2xl bg-gradient-to-r ${group.color} p-4 text-white`}
              >
                <group.icon className="h-6 w-6" />
              </div>

              {/* Title */}

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {group.title}
              </h3>

              <p className="mt-3 leading-7 text-slate-600">
                {group.description}
              </p>

              {/* Commands */}

              <div className="mt-8 space-y-3">
                {group.commands.map((command) => (
                  <motion.div
                    key={command}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition group-hover:border-slate-300"
                  >
                    <ChevronRight className="h-4 w-4 text-cyan-500" />

                    <code className="text-sm text-slate-700">{command}</code>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Note */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-cyan-200 bg-cyan-50 p-8"
        >
          <div className="flex items-start gap-4">
            <Settings2 className="mt-1 h-6 w-6 text-cyan-600" />

            <div>
              <h3 className="text-lg font-semibold text-slate-900">
                Predictable by Design
              </h3>

              <p className="mt-2 max-w-4xl leading-8 text-slate-700">
                Every command follows the same structure:
                <span className="mx-2 rounded-lg bg-white px-2 py-1 font-mono text-cyan-700">
                  segforge &lt;resource&gt; &lt;action&gt;
                </span>
                making the CLI easy to learn, script, and integrate into CI/CD
                pipelines without memorizing different syntaxes for different
                services.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CommandArchitecture;
