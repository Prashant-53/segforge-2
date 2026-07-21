import React from "react";
import { motion } from "framer-motion";
import {
  PlayCircle,
  Code2,
  Workflow,
  Radio,
  ArrowRight,
  BookOpen,
  Terminal,
} from "lucide-react";
import { Link } from "react-router-dom";

const features = [
  {
    icon: PlayCircle,
    title: "Programmatic Execution",
    description:
      "Execute notebook cells securely through REST APIs and integrate notebooks into your existing applications.",
  },
  {
    icon: Code2,
    title: "SDK Integration",
    description:
      "Use Python and TypeScript SDKs to build automation, analytics, and custom integrations.",
  },
  {
    icon: Workflow,
    title: "Workflow Automation",
    description:
      "Trigger notebooks directly from pipelines, schedules, and event-driven workflows.",
  },
  {
    icon: Radio,
    title: "Server-Sent Events",
    description:
      "Receive live execution progress, logs, and notebook results inside your applications.",
  },
];

const NotebookAutomation = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-28">
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
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Notebook Automation
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Prototype Interactively.
              <br />
              Automate at Scale.
            </h2>

            <p className="mt-2 text-md leading-6 text-slate-600">
              Move seamlessly from exploratory analysis to enterprise automation
              using the Seg Forge Notebooks API, SDKs, CLI, and Workflow Engine.
              Build once, automate forever.
            </p>

            {/* Feature Cards */}

            <div className="mt-10 space-y-6">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                    <feature.icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">
              <Link
                to="/documentation/notebooks-api"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-cyan-500 px-7 py-3 font-semibold text-slate-900 hover:text-white"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 group-hover:w-full" />

                <span className="relative z-10 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Explore Notebook API
                </span>
              </Link>

              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600"
              >
                <span className="flex items-center gap-2">
                  <Terminal className="h-4 w-4" />
                  Create Your First Notebook
                </span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Architecture */}

            <div className="mt-8 rounded-3xl border border-slate-200 bg-white p-8 shadow-lg">
              <div className="flex flex-col items-center gap-4 text-center">
                <div className="rounded-xl bg-cyan-50 px-6 py-3 font-semibold text-cyan-700">
                  Notebook
                </div>

                <ArrowRight className="rotate-90 text-cyan-500" />

                <div className="rounded-xl bg-cyan-50 px-6 py-3 font-semibold text-cyan-700">
                  REST API
                </div>

                <ArrowRight className="rotate-90 text-cyan-500" />

                <div className="rounded-xl bg-cyan-50 px-6 py-3 font-semibold text-cyan-700">
                  Workflow Engine
                </div>

                <ArrowRight className="rotate-90 text-cyan-500" />

                <div className="rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 px-6 py-3 font-semibold text-white">
                  Production Pipeline
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NotebookAutomation;
