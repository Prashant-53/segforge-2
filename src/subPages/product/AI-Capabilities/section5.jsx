import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Search,
  FileText,
  Sparkles,
  BrainCircuit,
  CheckCircle2,
  Workflow,
} from "lucide-react";

const ragLayers = [
  {
    icon: Database,
    title: "Connect Enterprise Data",
    description:
      "Bring documents, databases, knowledge sources, and governed platform data into your retrieval workflows.",
  },
  {
    icon: Search,
    title: "Retrieve Relevant Context",
    description:
      "Find the most relevant information for each request so models can work with the context that actually matters.",
  },
  {
    icon: BrainCircuit,
    title: "Generate Grounded Responses",
    description:
      "Provide retrieved context to your models so responses are grounded in your organization's data and knowledge.",
  },
];

const RAGPipelineSection = () => {
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
              <Search className="h-4 w-4" />
              RAG Pipeline
            </div>

            {/* Heading */}

            <h2 className="mt-7 text-3xl font-bold leading-none text-slate-900 sm:text-4xl lg:text-4xl">
              Ground AI responses
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                in your enterprise data.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-5 text-slate-600 sm:text-md sm:leading-8">
              Build retrieval-augmented generation pipelines that connect
              language models with the information your organization already
              owns. Retrieve relevant context and use it to produce more
              informed, data-aware AI responses.
            </p>

            {/* Feature points */}

            <div className="mt-10 space-y-6">
              {ragLayers.map((item, index) => {
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

            {/* RAG visualization */}

            <div className="relative rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-7">
              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                    <Workflow className="h-5 w-5 text-cyan-600" />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">RAG Pipeline</p>

                    <p className="text-xs text-slate-500">
                      Retrieval & generation
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                  Active
                </span>
              </div>

              {/* Pipeline */}

              <div className="mt-6 space-y-4">
                {/* User Query */}

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <Sparkles className="h-4 w-4 text-cyan-500" />
                    User Query
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-700">
                    What were our highest-performing customer segments last
                    quarter?
                  </p>
                </div>

                {/* Connector */}

                <div className="flex justify-center">
                  <div className="h-7 w-px bg-gradient-to-b from-cyan-300 to-blue-400" />
                </div>

                {/* Retrieval */}

                <div className="rounded-2xl border border-cyan-200 bg-cyan-50/60 p-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-cyan-700">
                    <Search className="h-4 w-4" />
                    Retrieve Relevant Context
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="rounded-lg bg-white px-3 py-3">
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-cyan-500" />

                        <span className="text-xs font-medium text-slate-700">
                          Customer Analytics
                        </span>
                      </div>

                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        Relevant customer performance data
                      </p>
                    </div>

                    <div className="rounded-lg bg-white px-3 py-3">
                      <div className="flex items-center gap-2">
                        <Database className="h-4 w-4 text-cyan-500" />

                        <span className="text-xs font-medium text-slate-700">
                          Enterprise Dataset
                        </span>
                      </div>

                      <p className="mt-1 text-[11px] leading-4 text-slate-500">
                        Governed business metrics
                      </p>
                    </div>
                  </div>
                </div>

                {/* Connector */}

                <div className="flex justify-center">
                  <div className="h-7 w-px bg-gradient-to-b from-blue-400 to-cyan-300" />
                </div>

                {/* Context */}

                <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <BrainCircuit className="h-4 w-4 text-cyan-500" />
                    Retrieved Context
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-[11px] text-cyan-700">
                      Customer metrics
                    </span>

                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-[11px] text-cyan-700">
                      Revenue data
                    </span>

                    <span className="rounded-full bg-cyan-50 px-3 py-1 text-[11px] text-cyan-700">
                      Segment data
                    </span>
                  </div>
                </div>

                {/* Connector */}

                <div className="flex justify-center">
                  <div className="h-7 w-px bg-gradient-to-b from-cyan-300 to-blue-400" />
                </div>

                {/* LLM */}

                <div className="rounded-2xl bg-slate-900 p-5 text-white">
                  <div className="flex items-center gap-3">
                    <BrainCircuit className="h-5 w-5 text-cyan-400" />

                    <span className="font-medium">AI Model</span>
                  </div>

                  <p className="mt-3 text-xs leading-5 text-slate-400">
                    Generates a response using the retrieved enterprise context.
                  </p>

                  <div className="mt-4 grid grid-cols-2 gap-3">
                    <div className="rounded-lg bg-white/5 p-3">
                      <div className="text-xs text-slate-400">Context</div>

                      <div className="mt-1 text-sm">Grounded</div>
                    </div>

                    <div className="rounded-lg bg-white/5 p-3">
                      <div className="text-xs text-slate-400">Source</div>

                      <div className="mt-1 text-sm">Enterprise</div>
                    </div>
                  </div>
                </div>

                {/* Result */}

                <div className="flex justify-center">
                  <div className="h-7 w-px bg-gradient-to-b from-blue-400 to-cyan-300" />
                </div>

                <div className="rounded-2xl border border-green-200 bg-green-50 p-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-green-600" />

                    <span className="text-sm font-semibold text-slate-800">
                      Grounded Response
                    </span>
                  </div>

                  <p className="mt-2 text-xs leading-5 text-slate-600">
                    Response generated using relevant enterprise data and
                    retrieved context.
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

export default RAGPipelineSection;
