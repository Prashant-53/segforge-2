import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Workflow,
  Database,
  Wrench,
  GitBranch,
  ArrowRight,
} from "lucide-react";

const orchestrationLayers = [
  {
    icon: BrainCircuit,
    title: "Agent Coordination",
    description:
      "Coordinate multiple specialized agents so each agent can focus on a specific task while contributing to a larger workflow.",
  },
  {
    icon: Wrench,
    title: "Tools & Data Access",
    description:
      "Connect agents with enterprise tools, APIs, databases, and platform resources through controlled access.",
  },
  {
    icon: GitBranch,
    title: "Workflow Execution",
    description:
      "Define how agents collaborate, make decisions, invoke tools, and move tasks through complex AI workflows.",
  },
];

const AgentOrchestrationSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32">
      {/* Background */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/5 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Workflow className="h-4 w-4" />
              AI Agent Orchestration
            </div>

            {/* Heading */}

            <h2 className="mt-7 text-3xl font-bold leading-none text-slate-900 sm:text-4xl lg:text-4xl">
              Coordinate agents
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                across complex workflows.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-5 text-slate-600 sm:text-md sm:leading-8">
              Build AI workflows where specialized agents can collaborate,
              access enterprise tools and data, and execute multi-step tasks
              through a controlled orchestration layer.
            </p>

            {/* Feature points */}

            <div className="mt-10 space-y-6">
              {orchestrationLayers.map((item, index) => {
                const Icon = item.icon;

                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.1,
                    }}
                    className="flex gap-4"
                  >
                    {/* Icon */}

                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                      <Icon className="h-5 w-5 text-cyan-600" />
                    </div>

                    {/* Content */}

                    <div>
                      <h3 className="font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-1 text-sm leading-6 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[100px]" />

            {/* Orchestration visualization */}

            <div className="relative rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-7">
              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                    <Workflow className="h-5 w-5 text-cyan-600" />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      Agent Orchestration
                    </p>

                    <p className="text-xs text-slate-500">
                      Multi-agent workflow
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                  Running
                </span>
              </div>

              {/* Workflow */}

              <div className="mt-6 space-y-4">
                {/* User Request */}

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <BrainCircuit className="h-4 w-4 text-cyan-500" />
                    Incoming Task
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Analyze the latest customer data and generate an executive
                    performance report.
                  </p>
                </div>

                {/* Connector */}

                <div className="flex justify-center">
                  <div className="h-8 w-px bg-gradient-to-b from-cyan-300 to-blue-400" />
                </div>

                {/* Orchestrator */}

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50/60 p-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-cyan-700">
                    <Workflow className="h-4 w-4" />
                    Orchestrator
                  </div>

                  <p className="mt-2 text-sm font-medium text-slate-800">
                    Breaking task into specialized agent actions
                  </p>

                  {/* Agents */}

                  <div className="mt-4 grid gap-3 sm:grid-cols-3">
                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <BrainCircuit className="h-4 w-4 text-cyan-600" />

                      <p className="mt-2 text-xs font-semibold text-slate-800">
                        Analysis Agent
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        Analyzes metrics
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <Database className="h-4 w-4 text-cyan-600" />

                      <p className="mt-2 text-xs font-semibold text-slate-800">
                        Data Agent
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        Retrieves data
                      </p>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-white p-3">
                      <Wrench className="h-4 w-4 text-cyan-600" />

                      <p className="mt-2 text-xs font-semibold text-slate-800">
                        Report Agent
                      </p>

                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        Creates report
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector */}

                <div className="flex justify-center">
                  <div className="h-8 w-px bg-gradient-to-b from-blue-400 to-cyan-300" />
                </div>

                {/* Tools & Data */}

                <div className="rounded-2xl bg-slate-900 p-5 text-white">
                  <div className="flex items-center gap-3">
                    <Database className="h-5 w-5 text-cyan-400" />

                    <span className="font-medium">Enterprise Tools & Data</span>
                  </div>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-white/5 p-3">
                      <div className="text-xs text-slate-400">Data Sources</div>

                      <div className="mt-1 text-sm">Connected</div>
                    </div>

                    <div className="rounded-lg bg-white/5 p-3">
                      <div className="text-xs text-slate-400">Tool Access</div>

                      <div className="mt-1 text-sm">Governed</div>
                    </div>
                  </div>
                </div>

                {/* Result */}

                <div className="flex justify-center">
                  <div className="h-8 w-px bg-gradient-to-b from-cyan-300 to-blue-400" />
                </div>

                <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-green-600" />

                      <span className="text-sm font-semibold text-slate-800">
                        Workflow Complete
                      </span>
                    </div>

                    <span className="text-xs font-medium text-green-600">
                      Ready
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Specialized agents completed their tasks and combined their
                    results into a single response.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AgentOrchestrationSection;
