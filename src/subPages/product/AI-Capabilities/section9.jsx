import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Route,
  Activity,
  LockKeyhole,
  Zap,
  CheckCircle2,
  Server,
} from "lucide-react";

const gatewayCapabilities = [
  {
    icon: Route,
    title: "Intelligent Model Routing",
    description:
      "Route AI requests to the appropriate model based on workload requirements, performance, availability, or configured policies.",
  },
  {
    icon: ShieldCheck,
    title: "Policy Enforcement",
    description:
      "Apply centralized policies and access controls before requests reach your models and AI services.",
  },
  {
    icon: Activity,
    title: "AI Observability",
    description:
      "Monitor AI traffic, model usage, latency, and request activity from a centralized gateway layer.",
  },
];

const AIGatewaysSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* Background */}

      <div className="absolute left-0 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/5 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
          {/* LEFT — CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <ShieldCheck className="h-4 w-4" />
              AI Gateways
            </div>

            {/* Heading */}

            <h2 className="mt-7 text-3xl font-bold leading-none text-slate-900 sm:text-4xl lg:text-4xl">
              Control every
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                AI request.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 max-w-xl text-base leading-5 text-slate-600 sm:text-md sm:leading-8">
              Put a centralized control layer between your applications and AI
              models. Route requests, enforce policies, and gain visibility into
              AI traffic without managing model integrations independently
              across every application.
            </p>

            {/* Features */}

            <div className="mt-10 space-y-6">
              {gatewayCapabilities.map((item, index) => {
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
                  One gateway for your AI workloads.
                </p>

                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Centralize model access and keep AI traffic governed,
                  observable, and easier to manage.
                </p>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — GATEWAY VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-10 rounded-full bg-cyan-400/10 blur-[100px]" />

            <div className="relative rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_30px_80px_rgba(15,23,42,0.08)] sm:p-7">
              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-100 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                    <ShieldCheck className="h-5 w-5 text-cyan-600" />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">AI Gateway</p>

                    <p className="text-xs text-slate-500">
                      Centralized AI traffic control
                    </p>
                  </div>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-medium text-green-600">
                  Active
                </span>
              </div>

              {/* Incoming Request */}

              <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <Zap className="h-4 w-4 text-cyan-500" />
                  Incoming AI Request
                </div>

                <div className="mt-3 rounded-xl bg-white p-3">
                  <p className="text-xs leading-5 text-slate-600">
                    Generate an analysis of the latest customer activity.
                  </p>
                </div>
              </div>

              {/* Flow */}

              <div className="flex justify-center py-4">
                <div className="h-8 w-px bg-gradient-to-b from-cyan-300 to-blue-400" />
              </div>

              {/* Gateway */}

              <div className="rounded-2xl border border-cyan-200 bg-cyan-50/60 p-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white">
                    <ShieldCheck className="h-5 w-5 text-cyan-600" />
                  </div>

                  <div>
                    <p className="text-sm font-semibold text-slate-900">
                      Gateway Policies
                    </p>

                    <p className="text-xs text-slate-500">Request evaluated</p>
                  </div>
                </div>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl bg-white p-3">
                    <div className="text-[10px] text-slate-400">Access</div>

                    <div className="mt-1 text-sm font-semibold text-green-600">
                      Allowed
                    </div>
                  </div>

                  <div className="rounded-xl bg-white p-3">
                    <div className="text-[10px] text-slate-400">Policy</div>

                    <div className="mt-1 text-sm font-semibold text-slate-900">
                      Compliant
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow */}

              <div className="flex justify-center py-4">
                <div className="h-8 w-px bg-gradient-to-b from-blue-400 to-cyan-300" />
              </div>

              {/* Routing */}

              <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                  <Route className="h-4 w-4 text-cyan-500" />
                  Model Routing
                </div>

                <div className="mt-4 space-y-2">
                  <div className="flex items-center justify-between rounded-xl bg-cyan-50 px-3 py-3">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-cyan-600" />

                      <span className="text-xs font-medium text-slate-800">
                        Enterprise LLM
                      </span>
                    </div>

                    <span className="text-[10px] font-medium text-cyan-700">
                      Selected
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-slate-400" />

                      <span className="text-xs text-slate-600">
                        Reasoning Model
                      </span>
                    </div>

                    <span className="text-[10px] text-slate-400">
                      Available
                    </span>
                  </div>

                  <div className="flex items-center justify-between rounded-xl bg-slate-50 px-3 py-3">
                    <div className="flex items-center gap-2">
                      <Server className="h-4 w-4 text-slate-400" />

                      <span className="text-xs text-slate-600">
                        Fast Inference
                      </span>
                    </div>

                    <span className="text-[10px] text-slate-400">
                      Available
                    </span>
                  </div>
                </div>
              </div>

              {/* Flow */}

              <div className="flex justify-center py-4">
                <div className="h-8 w-px bg-gradient-to-b from-cyan-300 to-blue-400" />
              </div>

              {/* Observability */}

              <div className="rounded-2xl bg-slate-900 p-5 text-white">
                <div className="flex items-center gap-3">
                  <Activity className="h-5 w-5 text-cyan-400" />

                  <span className="font-medium">AI Traffic</span>
                </div>

                <div className="mt-4 grid grid-cols-3 gap-3">
                  <div className="rounded-lg bg-white/5 p-3">
                    <div className="text-[10px] text-slate-400">Requests</div>

                    <div className="mt-1 text-sm font-semibold">1,248</div>
                  </div>

                  <div className="rounded-lg bg-white/5 p-3">
                    <div className="text-[10px] text-slate-400">Latency</div>

                    <div className="mt-1 text-sm font-semibold">240ms</div>
                  </div>

                  <div className="rounded-lg bg-white/5 p-3">
                    <div className="text-[10px] text-slate-400">Success</div>

                    <div className="mt-1 text-sm font-semibold text-green-400">
                      99.8%
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AIGatewaysSection;
