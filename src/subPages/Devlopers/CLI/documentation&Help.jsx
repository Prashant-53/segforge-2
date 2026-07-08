import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  HelpCircle,
  Keyboard,
  Settings2,
  Code2,
  GitBranch,
} from "lucide-react";

const features = [
  {
    icon: HelpCircle,
    title: "Intelligent Help",
    description:
      "Every command exposes contextual documentation through the built-in help system.",
    command: "segforge pipeline --help",
  },
  {
    icon: Keyboard,
    title: "Shell Completion",
    description:
      "Generate shell auto-completion scripts for Bash, Zsh, Fish and PowerShell.",
    command: "segforge completion bash",
  },
  {
    icon: Settings2,
    title: "Configuration",
    description:
      "Manage authentication profiles, workspaces and CLI preferences from one place.",
    command: "segforge config",
  },
  {
    icon: Code2,
    title: "Version Information",
    description:
      "Inspect installed CLI versions and verify compatibility with your Seg Forge deployment.",
    command: "segforge version",
  },
];

const DocumentationHelp = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="absolute inset-0 opacity-[0.04]">
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
            Documentation & Help
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Built-in documentation that keeps you
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}
              productive.
            </span>
          </h2>

          <p className="mt-6 text-md leading-8 text-slate-600">
            The Seg Forge CLI includes self-documenting commands, shell
            completion, configuration management and version discovery, allowing
            developers to learn and automate without leaving the terminal.
          </p>
        </motion.div>

        {/* Layout */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Terminal */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-3xl border border-slate-200 shadow-xl"
          >
            <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950 px-6 py-4">
              <div className="flex items-center gap-3">
                <Terminal className="h-5 w-5 text-cyan-400" />

                <span className="text-sm text-slate-300">CLI Help System</span>
              </div>

              <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                Interactive
              </span>
            </div>

            <div className="bg-slate-950 p-8 font-mono text-sm leading-8">
              <p className="text-cyan-400">$ segforge --help</p>

              <div className="mt-8 text-slate-300">
                <p className="text-white">Usage:</p>

                <p className="mt-2 text-green-400">segforge [command]</p>

                <p className="mt-8 text-white">Available Commands</p>

                <div className="mt-5 space-y-2">
                  {[
                    "workspace",
                    "pipeline",
                    "cdc",
                    "catalog",
                    "compute",
                    "monitoring",
                    "users",
                    "config",
                    "completion",
                    "version",
                    "help",
                  ].map((cmd) => (
                    <div key={cmd} className="flex items-center gap-3">
                      <span className="text-slate-600">•</span>

                      <span className="text-cyan-300">{cmd}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Feature Cards */}

          <div className="grid gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="flex items-start gap-5">
                  <div className="rounded-2xl bg-cyan-50 p-4">
                    <feature.icon className="h-6 w-6 text-cyan-600" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-3 leading-7 text-slate-600">
                      {feature.description}
                    </p>

                    <div className="mt-5 overflow-hidden rounded-xl bg-slate-950">
                      <div className="flex items-center gap-2 border-b border-slate-800 px-4 py-3">
                        <GitBranch className="h-4 w-4 text-cyan-400" />

                        <span className="text-xs text-slate-400">Command</span>
                      </div>

                      <pre className="overflow-x-auto px-5 py-4 font-mono text-sm text-cyan-300">
                        <code>{feature.command}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Note */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl border border-cyan-200 bg-cyan-50 p-8"
        >
          <h3 className="text-xl font-semibold text-slate-900">
            Discover Every Command
          </h3>

          <p className="mt-4 max-w-4xl leading-8 text-slate-700">
            Every CLI resource supports contextual help through{" "}
            <span className="rounded-lg bg-white px-2 py-1 font-mono text-cyan-700">
              --help
            </span>
            , making it easy to explore commands, arguments, examples and
            workflows directly from your terminal without switching to external
            documentation.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default DocumentationHelp;
