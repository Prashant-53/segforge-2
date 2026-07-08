import React from "react";
import { motion } from "framer-motion";
import {
  Shield,
  RefreshCw,
  Clock3,
  AlertTriangle,
  Braces,
  Code2,
} from "lucide-react";

const pollingCode = `run = pipeline.run()

result = run.wait_for_completion(
    timeout=300
)

print(result.row_count)`;

const exceptionCode = `try:
    pipeline.run()
except AuthenticationError:
    ...
except RateLimitExceeded:
    ...
except PipelineFailed:
    ...`;

const Features = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">
      {/* Background */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-24 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute right-1/4 bottom-10 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[160px]" />
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
            Advanced Engineering Features
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Built for production-grade engineering teams.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-md leading-8 text-slate-600">
            The Seg Forge SDKs are designed with type safety, resilient
            networking, automatic authentication, and intelligent orchestration
            primitives to simplify large-scale automation.
          </p>
        </motion.div>

        {/* Feature Grid */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Type Safe Models */}

          <motion.div
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg"
          >
            <div className="border-b border-slate-200 px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
                  <Code2 className="h-6 w-6 text-cyan-600" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  Type-Safe Resource Models
                </h3>
              </div>
            </div>

            <div className="bg-slate-950 p-8">
              <pre className="text-cyan-300">
                {`pipeline.name
pipeline.status
pipeline.graph.nodes`}
              </pre>
            </div>

            <div className="p-8">
              <p className="leading-8 text-slate-600">
                Pydantic-backed resource models provide IDE autocomplete,
                runtime validation, and fully typed responses for every API
                resource.
              </p>
            </div>
          </motion.div>

          {/* Authentication Lifecycle */}

          <motion.div
            whileHover={{ y: -6 }}
            className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-lg"
          >
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
                <Shield className="h-6 w-6 text-cyan-600" />
              </div>

              <h3 className="text-xl font-semibold text-slate-900">
                Authentication Lifecycle
              </h3>
            </div>

            <div className="mt-10 flex flex-col items-center gap-5">
              {[
                "API Key",
                "JWT Acquisition",
                "Token Refresh",
                "Bearer Injection",
              ].map((item, index) => (
                <React.Fragment key={item}>
                  <div className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center font-medium text-slate-700">
                    {item}
                  </div>

                  {index !== 3 && (
                    <RefreshCw className="h-5 w-5 text-cyan-500" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </motion.div>

          {/* Async Job Polling */}

          <motion.div
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg"
          >
            <div className="border-b border-slate-200 px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
                  <Clock3 className="h-6 w-6 text-cyan-600" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  Async Job Polling
                </h3>
              </div>
            </div>

            <div className="bg-slate-950 p-8">
              <pre className="overflow-x-auto text-sm leading-7 text-cyan-300">
                <code>{pollingCode}</code>
              </pre>
            </div>

            <div className="grid gap-4 p-8 md:grid-cols-2">
              {[
                "Exponential Backoff",
                "Timeout Handling",
                "Terminal State Detection",
                "Automatic Retries",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700"
                >
                  ✓ {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Exception Mapping */}

          <motion.div
            whileHover={{ y: -6 }}
            className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-lg"
          >
            <div className="border-b border-slate-200 px-8 py-6">
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
                  <AlertTriangle className="h-6 w-6 text-cyan-600" />
                </div>

                <h3 className="text-xl font-semibold text-slate-900">
                  Exception Mapping
                </h3>
              </div>
            </div>

            <div className="bg-slate-950 p-8">
              <pre className="overflow-x-auto text-sm leading-7 text-cyan-300">
                <code>{exceptionCode}</code>
              </pre>
            </div>

            <div className="p-8">
              <p className="leading-8 text-slate-600">
                HTTP and platform errors are automatically translated into
                strongly typed exceptions, making failures predictable and easy
                to handle.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Serialization Engine */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[36px] border border-slate-200 bg-white p-10 shadow-xl"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50">
              <Braces className="h-6 w-6 text-cyan-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">
              Serialization Engine
            </h3>
          </div>

          <div className="mt-12 flex flex-col items-center justify-center gap-5 md:flex-row">
            {["Pipeline", "Pydantic", "JSON", "REST API"].map((item, index) => (
              <React.Fragment key={item}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-8 py-5 text-center font-semibold text-slate-700">
                  {item}
                </div>

                {index !== 3 && (
                  <RefreshCw className="h-5 w-5 rotate-90 text-cyan-500 md:rotate-0" />
                )}
              </React.Fragment>
            ))}
          </div>

          <p className="mx-auto mt-10 max-w-4xl text-center leading-8 text-slate-600">
            Resource objects are automatically serialized into API payloads and
            deserialized back into strongly typed models, eliminating manual
            JSON handling and reducing boilerplate code.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
