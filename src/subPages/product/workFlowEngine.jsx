import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  GitBranch,
  Zap,
  Activity,
  ShieldCheck,
  Clock,
  PlayCircle,
  Workflow,
  Layers3,
  Database,
  CheckCircle2,
} from "lucide-react";

import MainLayout from "../../layouts/mainLayout";

const WorkflowEngine = () => {
  const capabilities = [
    {
      title: "Workflow Orchestration",
      description:
        "Coordinate multi-step workflows across pipelines, applications, and cloud services.",
      icon: <Workflow className="w-7 h-7" />,
    },
    {
      title: "Dependency Management",
      description:
        "Automatically execute tasks in the correct order while respecting dependencies.",
      icon: <GitBranch className="w-7 h-7" />,
    },
    {
      title: "Event Driven Automation",
      description:
        "Trigger workflows from APIs, schedules, webhooks, and real-time events.",
      icon: <Zap className="w-7 h-7" />,
    },
  ];

  const steps = [
    {
      step: "01",
      title: "Design Workflow",
      description:
        "Create workflows visually or through code-based definitions.",
    },
    {
      step: "02",
      title: "Configure Dependencies",
      description:
        "Define task relationships, execution order, and workflow logic.",
    },
    {
      step: "03",
      title: "Execute & Monitor",
      description:
        "Run workflows with complete visibility into task execution.",
    },
    {
      step: "04",
      title: "Recover & Optimize",
      description:
        "Automatically retry failed tasks and improve workflow performance.",
    },
  ];

  const benefits = [
    {
      title: "Real-Time Monitoring",
      icon: <Activity className="w-6 h-6" />,
    },
    {
      title: "Automatic Recovery",
      icon: <ShieldCheck className="w-6 h-6" />,
    },
    {
      title: "Workflow Scheduling",
      icon: <Clock className="w-6 h-6" />,
    },
    {
      title: "Parallel Execution",
      icon: <Layers3 className="w-6 h-6" />,
    },
    {
      title: "Distributed Processing",
      icon: <Database className="w-6 h-6" />,
    },
    {
      title: "Enterprise Scalability",
      icon: <CheckCircle2 className="w-6 h-6" />,
    },
  ];

  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* HERO */}
        <section className="relative overflow-hidden pt-32 pb-24 bg-gradient-to-b from-gray-50 to-white">
          {/* Animated Grid */}

          <motion.div
            animate={{
              backgroundPosition: ["0px 0px", "120px 120px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
        linear-gradient(to right, #06b6d4 1px, transparent 1px),
        linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
      `,
              backgroundSize: "80px 80px",
            }}
          />

          {/* Glow */}

          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.15, 0.25, 0.15],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/2 top-[40%] -translate-x-1/2 w-[900px] h-[500px] bg-cyan-400 rounded-full blur-[170px]"
          />

          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-20 items-center">
              {/* Left */}

              <motion.div
                initial={{ opacity: 0, x: -25 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                  Workflow Engine
                </div>

                <h1 className="mt-8 text-5xl lg:text-6xl font-bold text-slate-900 leading-[1.05]">
                  Enterprise Workflow
                  <br />
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    Execution & Orchestration
                  </span>
                </h1>

                <p className="mt-8 max-w-xl text-md leading-6 text-slate-600">
                  Orchestrate data pipelines, automate complex workflows, manage
                  dependencies, and execute reliable distributed jobs across
                  your entire data platform.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  {/* Primary */}

                  <button className="group relative overflow-hidden rounded-md border px-6 py-3 font-semibold hover:border-none">
                    <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 group-hover:w-full" />

                    <span className="relative z-10 flex items-center gap-2">
                      Explore Workflow Engine
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>

                  {/* Secondary */}

                  <button className="rounded-md border border-slate-300 bg-white px-6 py-3 font-semibold text-slate-700 transition hover:border-slate-400">
                    Request Demo
                  </button>
                </div>
              </motion.div>

              {/* Right */}

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                  {/* Header */}

                  <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
                    <div className="flex gap-2">
                      <div className="h-3 w-3 rounded-full bg-red-400" />
                      <div className="h-3 w-3 rounded-full bg-yellow-400" />
                      <div className="h-3 w-3 rounded-full bg-green-400" />
                    </div>

                    <span className="text-sm font-medium text-slate-500">
                      Workflow Dashboard
                    </span>
                  </div>

                  {/* Workflow Preview */}

                  <div className="p-8">
                    <div className="space-y-6">
                      {/* Workflow */}

                      <div className="flex items-center justify-between rounded-xl border border-slate-200 p-4">
                        <div>
                          <p className="font-semibold text-slate-900">
                            Daily Orders ETL
                          </p>
                          <p className="mt-1 text-sm text-slate-500">
                            Scheduled • Every 2 Hours
                          </p>
                        </div>

                        <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
                          Running
                        </span>
                      </div>

                      {/* DAG */}

                      <div className="rounded-2xl border border-slate-200 bg-slate-50 p-8">
                        <div className="flex items-center justify-between">
                          <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-cyan-500" />
                            <span className="mt-2 text-sm text-slate-600">
                              Source
                            </span>
                          </div>

                          <div className="h-1 flex-1 mx-4 bg-cyan-300" />

                          <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-blue-500" />
                            <span className="mt-2 text-sm text-slate-600">
                              Transform
                            </span>
                          </div>

                          <div className="h-1 flex-1 mx-4 bg-cyan-300" />

                          <div className="flex flex-col items-center">
                            <div className="h-12 w-12 rounded-full bg-emerald-500" />
                            <span className="mt-2 text-sm text-slate-600">
                              Target
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Stats */}

                      <div className="grid grid-cols-3 gap-4">
                        <div className="rounded-xl bg-slate-50 p-4">
                          <p className="text-xs uppercase tracking-wide text-slate-500">
                            Active Jobs
                          </p>

                          <p className="mt-2 text-2xl font-bold text-slate-900">
                            24
                          </p>
                        </div>

                        <div className="rounded-xl bg-slate-50 p-4">
                          <p className="text-xs uppercase tracking-wide text-slate-500">
                            Success Rate
                          </p>

                          <p className="mt-2 text-2xl font-bold text-green-600">
                            99.8%
                          </p>
                        </div>

                        <div className="rounded-xl bg-slate-50 p-4">
                          <p className="text-xs uppercase tracking-wide text-slate-500">
                            Avg Runtime
                          </p>

                          <p className="mt-2 text-2xl font-bold text-cyan-600">
                            42s
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CORE CAPABILITY */}
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Core Capabilities
              </h2>

              <p className="text-md text-slate-600 max-w-3xl mx-auto">
                Everything required to orchestrate, execute, and monitor
                workflows at enterprise scale.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {capabilities.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -6 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition"
                >
                  <div className="w-14 h-14 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-6">
                    {item.icon}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="py-24 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                How It Works
              </h2>

              <p className="text-md text-slate-600">
                Build, execute, and monitor workflows in four simple steps.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-8">
              {steps.map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8"
                >
                  <div className="text-5xl font-bold text-cyan-500 mb-4">
                    {item.step}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>

                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ENTERPRISE BENEFITS */}
        <section className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-slate-900 mb-4">
                Built for Enterprise Scale
              </h2>

              <p className="text-md text-slate-600 max-w-3xl mx-auto">
                Reliability, observability, and performance designed for
                mission-critical workflows.
              </p>
            </div>

            <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="border border-gray-200 rounded-2xl p-6 text-center bg-white hover:shadow-lg transition"
                >
                  <div className="w-12 h-12 mx-auto rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center mb-4">
                    {benefit.icon}
                  </div>

                  <h4 className="font-semibold text-slate-900">
                    {benefit.title}
                  </h4>
                </motion.div>
              ))}
            </div>

            {/* Architecture Preview */}
            <div className="mt-20 bg-slate-900 rounded-3xl p-10 text-white">
              <div className="flex items-center gap-3 mb-8">
                <PlayCircle className="w-7 h-7 text-cyan-400" />
                <h3 className="text-2xl font-bold">
                  Workflow Execution Lifecycle
                </h3>
              </div>

              <div className="grid md:grid-cols-5 gap-6 text-center">
                {["Trigger", "Execute", "Monitor", "Recover", "Complete"].map(
                  (item) => (
                    <div key={item} className="bg-white/5 rounded-xl py-6 px-4">
                      {item}
                    </div>
                  ),
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="max-w-5xl mx-auto">
            <div className="bg-slate-900 rounded-3xl p-12 text-center text-white">
              <h2 className="text-4xl font-bold mb-6">
                Orchestrate Workflows Without Limits
              </h2>

              <p className="text-md text-slate-300 max-w-3xl mx-auto mb-8">
                Build resilient automation pipelines, coordinate enterprise
                processes, and execute mission-critical workflows with
                confidence.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-cyan-600 rounded-lg hover:bg-cyan-700 transition">
                  Start Building
                </button>

                <button className="px-8 py-4 border-2 border-white rounded-lg hover:bg-white/10 transition">
                  Schedule Demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </MainLayout>
  );
};

export default WorkflowEngine;
