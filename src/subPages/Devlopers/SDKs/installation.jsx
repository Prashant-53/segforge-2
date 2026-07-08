import React from "react";
import { motion } from "framer-motion";
import { Terminal, ArrowRight } from "lucide-react";

const pythonCode = `pip install segforge-python-sdk`;

const typescriptCode = `npm install @segforge/sdk`;

const configCode = `from segforge import SegForgeClient

client = SegForgeClient(
    api_key="sf_live_...",
    workspace_id="ws-123"
)`;

const Installation = () => {
  return (
    <section className="relative overflow-hidden bg-white py-32">
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-24 left-1/4 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute bottom-10 right-1/4 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Installation
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Get started in less than a minute.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-md leading-8 text-slate-600">
            Install an official SDK, authenticate with your API key, and begin
            managing pipelines, CDC streams, catalogs, and notebooks directly
            from code.
          </p>
        </motion.div>

        {/* Install Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Python */}

          <motion.div
            whileHover={{ y: -8 }}
            className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg"
          >
            <div className="border-b border-slate-200 px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
                  <Terminal className="h-6 w-6 text-cyan-600" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Python SDK
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    Python 3.9+ • HTTPX • Pydantic • AsyncIO
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-8">
              <pre className="overflow-x-auto text-sm text-cyan-300">
                <code>{pythonCode}</code>
              </pre>
            </div>
          </motion.div>

          {/* TypeScript */}

          <motion.div
            whileHover={{ y: -8 }}
            className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg"
          >
            <div className="border-b border-slate-200 px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
                  <Terminal className="h-6 w-6 text-cyan-600" />
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    TypeScript SDK
                  </h3>

                  <p className="mt-1 text-sm text-slate-500">
                    TypeScript • Fetch API • Axios Adapter • ES Modules
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-slate-950 p-8">
              <pre className="overflow-x-auto text-sm text-cyan-300">
                <code>{typescriptCode}</code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Configure */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl"
        >
          <div className="border-b border-slate-200 px-8 py-6">
            <h3 className="text-2xl font-bold text-slate-900">
              Configure Your Client
            </h3>

            <p className="mt-2 text-slate-600">
              Authenticate using an API key and a workspace ID.
            </p>
          </div>

          <div className="bg-slate-950 p-8">
            <pre className="overflow-x-auto text-sm leading-7 text-cyan-300">
              <code>{configCode}</code>
            </pre>
          </div>
        </motion.div>

        {/* Next Steps */}

        <div className="mt-20 grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Generate an API Key",
              description:
                "Create a workspace-scoped API key from Users & Access.",
            },
            {
              title: "Select a Workspace",
              description:
                "Every SDK operation is scoped to a specific workspace.",
            },
            {
              title: "Start Building",
              description:
                "Manage pipelines, CDC streams, notebooks, and monitoring through code.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -6 }}
              className="rounded-[28px] border border-slate-200 bg-slate-50 p-7"
            >
              <h4 className="text-lg font-semibold text-slate-900">
                {item.title}
              </h4>

              <p className="mt-4 leading-7 text-slate-600">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* CTA */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[36px] bg-gradient-to-r from-slate-900 to-slate-800 px-10 py-16 text-center"
        >
          <h3 className="text-3xl font-bold text-white">
            Ready to build on Seg Forge?
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-300">
            Install an SDK and begin automating your entire data platform in
            minutes.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <button className="group relative overflow-hidden rounded-xl bg-cyan-500 px-8 py-4 font-medium text-white">
              <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-400 transition-transform duration-500 group-hover:scale-x-100" />

              <span className="relative flex items-center justify-center gap-2">
                View Documentation
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>

            <button className="rounded-xl border border-slate-700 px-8 py-4 font-medium text-white transition hover:bg-slate-800">
              Explore Examples
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Installation;
