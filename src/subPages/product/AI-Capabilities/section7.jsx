import React from "react";
import { motion } from "framer-motion";
import {
  Network,
  GitBranch,
  ShieldCheck,
  Database,
  Boxes,
  Workflow,
  CheckCircle2,
} from "lucide-react";

const engineeringLayers = [
  {
    icon: Network,
    title: "Enterprise Ontology",
    description:
      "Define business concepts, entities, relationships, and terminology so AI applications can understand your organization's domain consistently.",
  },
  {
    icon: GitBranch,
    title: "Knowledge Graph",
    description:
      "Connect entities and relationships across enterprise data to create a contextual layer that AI systems can use for discovery and reasoning.",
  },
  {
    icon: ShieldCheck,
    title: "AI Data Governance",
    description:
      "Apply policies, permissions, and governance controls so AI applications work with trusted enterprise data within defined boundaries.",
  },
];

const AIEngineeringToolsSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
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
              <Boxes className="h-4 w-4" />
              AI Engineering Tools
            </div>

            {/* Heading */}

            <h2 className="mt-7 text-3xl font-bold leading-none text-slate-900 sm:text-4xl lg:text-4xl">
              Give AI the
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                context to understand.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-5 text-slate-600 sm:text-md sm:leading-8">
              Build the semantic and governance foundation behind enterprise AI.
              Define how your organization understands its data, connect related
              information, and control how AI systems access trusted enterprise
              knowledge.
            </p>

            {/* Feature points */}

            <div className="mt-10 space-y-6">
              {engineeringLayers.map((item, index) => {
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

            {/* AI Engineering visualization */}

            <div className="relative rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-7">
              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                    <Boxes className="h-5 w-5 text-cyan-600" />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">
                      AI Engineering Layer
                    </p>

                    <p className="text-xs text-slate-500">
                      Context & governance
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                  Active
                </span>
              </div>

              {/* Engineering Flow */}

              <div className="mt-6 space-y-4">
                {/* Enterprise Data */}

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Database className="h-4 w-4 text-cyan-500" />
                    Enterprise Data
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Customer, product, transaction, and operational data across
                    enterprise systems.
                  </p>
                </div>

                {/* Connector */}

                <div className="flex justify-center">
                  <div className="h-8 w-px bg-gradient-to-b from-cyan-300 to-blue-400" />
                </div>

                {/* Ontology */}

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50/60 p-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-cyan-700">
                    <Network className="h-4 w-4" />
                    Enterprise Ontology
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    Defines the concepts and relationships that describe the
                    organization's business domain.
                  </p>

                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full bg-white px-3 py-1 text-[11px] text-cyan-700">
                      Customer
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-[11px] text-cyan-700">
                      Product
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-[11px] text-cyan-700">
                      Transaction
                    </span>

                    <span className="rounded-full bg-white px-3 py-1 text-[11px] text-cyan-700">
                      Relationship
                    </span>
                  </div>
                </div>

                {/* Connector */}

                <div className="flex justify-center">
                  <div className="h-8 w-px bg-gradient-to-b from-blue-400 to-cyan-300" />
                </div>

                {/* Knowledge Graph */}

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <GitBranch className="h-4 w-4 text-cyan-500" />
                    Knowledge Graph
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                      <div className="text-xs font-semibold text-slate-800">
                        Customer
                      </div>

                      <div className="mx-auto my-2 h-3 w-3 rounded-full bg-cyan-500" />

                      <div className="text-[10px] text-slate-500">owns</div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                      <div className="text-xs font-semibold text-slate-800">
                        Product
                      </div>

                      <div className="mx-auto my-2 h-3 w-3 rounded-full bg-blue-500" />

                      <div className="text-[10px] text-slate-500">
                        purchased
                      </div>
                    </div>

                    <div className="rounded-xl border border-slate-200 bg-slate-50 p-3 text-center">
                      <div className="text-xs font-semibold text-slate-800">
                        Transaction
                      </div>

                      <div className="mx-auto my-2 h-3 w-3 rounded-full bg-cyan-500" />

                      <div className="text-[10px] text-slate-500">contains</div>
                    </div>
                  </div>
                </div>

                {/* Connector */}

                <div className="flex justify-center">
                  <div className="h-8 w-px bg-gradient-to-b from-cyan-300 to-blue-400" />
                </div>

                {/* Governance */}

                <div className="rounded-2xl bg-slate-900 p-5 text-white">
                  <div className="flex items-center gap-3">
                    <ShieldCheck className="h-5 w-5 text-cyan-400" />

                    <span className="font-medium">AI Data Governance</span>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-slate-400">
                    Apply policies and access controls before enterprise context
                    is exposed to AI applications.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-white/5 p-3">
                      <div className="text-xs text-slate-400">Data Access</div>

                      <div className="mt-1 text-sm">Controlled</div>
                    </div>

                    <div className="rounded-lg bg-white/5 p-3">
                      <div className="text-xs text-slate-400">Policies</div>

                      <div className="mt-1 text-sm">Enforced</div>
                    </div>
                  </div>
                </div>

                {/* Final Result */}

                <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />

                    <span className="text-sm font-semibold text-slate-800">
                      Trusted AI Context
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    AI applications receive meaningful, connected, and governed
                    enterprise context.
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

export default AIEngineeringToolsSection;
