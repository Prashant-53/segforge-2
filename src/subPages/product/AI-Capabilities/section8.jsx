import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Layers3,
  Zap,
  Settings2,
  CheckCircle2,
  Server,
} from "lucide-react";

const llmCapabilities = [
  {
    icon: Layers3,
    title: "Unified Model Access",
    description:
      "Work with multiple foundation models through a single interface instead of maintaining separate integrations for every model provider.",
  },
  {
    icon: Settings2,
    title: "Model Configuration",
    description:
      "Configure model parameters, deployment options, and workload requirements from a centralized environment.",
  },
  {
    icon: Zap,
    title: "Compare & Select",
    description:
      "Evaluate models against your workload requirements and select the right model for each application or workflow.",
  },
];

const LLMHubSection = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-24 sm:py-28 lg:py-32">
      {/* Background */}

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/5 blur-[150px]" />

      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — LLM HUB VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            {/* Glow */}

            <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-7">
              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                    <BrainCircuit className="h-5 w-5 text-cyan-600" />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">LLM Hub</p>

                    <p className="text-xs text-slate-500">Model workspace</p>
                  </div>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                  Connected
                </span>
              </div>

              {/* Model Selector */}

              <div className="mt-6">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium uppercase tracking-wider text-slate-500">
                    Available Models
                  </span>

                  <span className="text-xs text-cyan-600">8 models</span>
                </div>

                <div className="mt-4 space-y-3">
                  {/* Model 1 */}

                  <div className="rounded-2xl border border-cyan-200 bg-cyan-50/60 p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white">
                          <BrainCircuit className="h-4 w-4 text-cyan-600" />
                        </div>

                        <div>
                          <p className="text-sm font-semibold text-slate-900">
                            Enterprise LLM
                          </p>

                          <p className="text-xs text-slate-500">
                            General purpose
                          </p>
                        </div>
                      </div>

                      <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-[10px] font-medium text-cyan-700">
                        Selected
                      </span>
                    </div>
                  </div>

                  {/* Model 2 */}

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50">
                        <Server className="h-4 w-4 text-slate-500" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Reasoning Model
                        </p>

                        <p className="text-xs text-slate-500">
                          Complex workloads
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Model 3 */}

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-slate-50">
                        <Zap className="h-4 w-4 text-slate-500" />
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-slate-900">
                          Fast Inference Model
                        </p>

                        <p className="text-xs text-slate-500">
                          Low-latency workloads
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Configuration */}

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2">
                  <Settings2 className="h-4 w-4 text-cyan-600" />

                  <span className="text-xs font-medium text-slate-700">
                    Model Configuration
                  </span>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-3">
                    <div className="text-[10px] text-slate-400">
                      Temperature
                    </div>

                    <div className="mt-1 text-sm font-semibold text-slate-900">
                      0.4
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-3">
                    <div className="text-[10px] text-slate-400">Context</div>

                    <div className="mt-1 text-sm font-semibold text-slate-900">
                      128K
                    </div>
                  </div>
                </div>
              </div>

              {/* Status */}

              <div className="mt-5 flex items-center gap-3 rounded-2xl border border-green-200 bg-green-50 p-4">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-green-600" />

                <div>
                  <p className="text-sm font-semibold text-slate-800">
                    Model ready
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Configured and available for AI workloads.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <BrainCircuit className="h-4 w-4" />
              LLM Hub
            </div>

            {/* Heading */}

            <h2 className="mt-7 text-3xl font-bold leading-none text-slate-900 sm:text-4xl lg:text-4xl">
              One place to
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                work with your models.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-5 text-slate-600 sm:text-md sm:leading-8">
              Bring your organization's AI models into a unified workspace.
              Discover models, configure them for different workloads, and make
              the right model available to your applications and workflows.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-6">
              {llmCapabilities.map((item, index) => {
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
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white shadow-sm">
                      <Icon className="h-5 w-5 text-cyan-600" />
                    </div>

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

            {/* Bottom Highlight */}

            <div className="mt-10 flex items-start gap-3 rounded-2xl border border-cyan-100 bg-cyan-50/60 p-5">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-cyan-600" />

              <div>
                <p className="text-sm font-semibold text-slate-900">
                  A unified model layer for enterprise AI.
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Keep model access, configuration, and AI workloads connected
                  within the same platform.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LLMHubSection;
