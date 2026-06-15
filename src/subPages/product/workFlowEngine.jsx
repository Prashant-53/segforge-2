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
        <section className="pt-32 pb-24 px-6 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
                Workflow Engine
              </div>

              <h1 className="text-4xl/9 md:text-4xl xl:text-5xl font-bold text-slate-900 leading-tight mb-6">
                Enterprise Workflow
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Execution & Orchestration
                </span>
              </h1>

              <p className="text-md text-slate-600 max-w-3xl mx-auto leading-relaxed mb-4">
                Automate business processes, orchestrate pipelines, manage
                dependencies, and execute workflows reliably across your entire
                data ecosystem.
              </p>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <button className="px-8 py-4 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition flex items-center justify-center gap-2">
                  Explore Workflow Engine
                  <ArrowRight className="w-5 h-5" />
                </button>

                <button className="px-8 py-4 border-2 border-slate-900 text-slate-900 rounded-lg hover:bg-slate-50 transition">
                  Request Demo
                </button>
              </div>
            </motion.div>
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
