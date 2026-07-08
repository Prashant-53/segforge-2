import React from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  Code2,
  Terminal,
  Boxes,
  Webhook,
  ArrowRight,
  Globe,
  Layers3,
} from "lucide-react";

const integrationMethods = [
  {
    title: "REST APIs",
    description:
      "Integrate every Seg Forge resource through a secure REST interface with JSON-based endpoints.",
    icon: Globe,
    status: "Available",
  },
  {
    title: "SDKs",
    description:
      "Use native Python and TypeScript SDKs with typed resource models and async support.",
    icon: Code2,
    status: "Available",
  },
  {
    title: "CLI",
    description:
      "Automate deployments, pipeline execution, monitoring, and CI/CD directly from the terminal.",
    icon: Terminal,
    status: "Available",
  },
  {
    title: "Webhooks",
    description:
      "Receive real-time events for pipeline runs, CDC streams, alerts, and workspace activity.",
    icon: Webhook,
    status: "Coming Soon",
  },
  {
    title: "Custom Connectors",
    description:
      "Extend Seg Forge with your own connectors for proprietary systems and internal platforms.",
    icon: Boxes,
    status: "Available",
  },
];

const BuildCustomIntegrations = () => {
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
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Build Custom Integrations
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Extend Seg Forge using
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}
              open developer interfaces.
            </span>
          </h2>

          <p className="mt-6 text-md leading-8 text-slate-600">
            Build custom applications, automate workflows, integrate internal
            systems, and extend the Seg Forge platform using REST APIs, language
            SDKs, the command-line interface, and custom connector frameworks.
          </p>
        </motion.div>

        {/* Architecture */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-950 p-14"
        >
          <div className="flex flex-col items-center text-center">
            {/* Application */}

            <div className="rounded-2xl bg-cyan-500/20 p-5">
              <Workflow className="h-10 w-10 text-cyan-400" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-white">
              Custom Application
            </h3>

            <ArrowRight className="my-7 h-7 w-7 rotate-90 text-cyan-500" />

            {/* APIs */}

            <div className="grid gap-4 md:grid-cols-3 w-full max-w-4xl">
              {[
                {
                  icon: Globe,
                  title: "REST API",
                },
                {
                  icon: Code2,
                  title: "SDKs",
                },
                {
                  icon: Terminal,
                  title: "CLI",
                },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur"
                  >
                    <Icon className="mx-auto h-8 w-8 text-cyan-400" />

                    <h4 className="mt-4 font-semibold text-white">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>

            <ArrowRight className="my-7 h-7 w-7 rotate-90 text-cyan-500" />

            {/* Seg Forge */}

            <div className="rounded-2xl bg-cyan-500/20 p-5">
              <Layers3 className="h-10 w-10 text-cyan-400" />
            </div>

            <h3 className="mt-5 text-xl font-semibold text-white">
              Seg Forge Platform
            </h3>

            <ArrowRight className="my-7 h-7 w-7 rotate-90 text-cyan-500" />

            <div className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6">
              <h4 className="text-lg font-semibold text-white">
                Platform Services
              </h4>

              <p className="mt-2 text-slate-400">
                Pipelines • CDC • Catalog • Compute • Monitoring • Security
              </p>
            </div>
          </div>
        </motion.div>

        {/* Integration Cards */}

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {integrationMethods.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.08 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-2xl bg-cyan-50 p-4">
                    <Icon className="h-6 w-6 text-cyan-600" />
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      item.status === "Available"
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-amber-100 text-amber-700"
                    }`}
                  >
                    {item.status}
                  </span>
                </div>

                <h3 className="mt-6 text-xl font-bold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* CTA */}

        <div className="mt-20 rounded-3xl border border-slate-200 bg-slate-50 p-10">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Ready to build on Seg Forge?
              </h3>

              <p className="mt-4 max-w-2xl text-lg text-slate-600">
                Explore the complete developer platform and start integrating
                Seg Forge into your applications, automation pipelines, and
                enterprise workflows.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <button className="group relative overflow-hidden rounded-xl bg-slate-900 px-7 py-4 font-medium text-white transition">
                <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

                <span className="relative flex items-center gap-2">
                  View APIs
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>

              <button className="group relative overflow-hidden rounded-xl bg-slate-900 px-7 py-4 font-medium text-white transition">
                <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

                <span className="relative flex items-center gap-2">
                  View SDKs
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>

              <button className="group relative overflow-hidden rounded-xl bg-slate-900 px-7 py-4 font-medium text-white transition">
                <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

                <span className="relative flex items-center gap-2">
                  CLI Documentation
                  <ArrowRight className="h-4 w-4" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BuildCustomIntegrations;
