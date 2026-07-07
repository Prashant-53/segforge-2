import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const code = `from segforge import SegForgeClient

client = SegForgeClient(
    api_key="sf_live_...",
    workspace_id="ws-123"
)

pipeline = client.pipelines.get(
    "etl-daily-sync"
)

run = pipeline.run(
    mode="batch"
)

result = run.wait_for_completion()

print(result.row_count)
`;

const Node = ({ label, active }) => (
  <motion.div
    whileHover={{ y: -4 }}
    className={`
      w-full max-w-xs rounded-2xl border px-8 py-4 text-center font-medium transition-all
      ${
        active
          ? "border-cyan-500 bg-cyan-500 text-white shadow-lg shadow-cyan-500/30"
          : "border-slate-200 bg-white text-slate-700"
      }
    `}
  >
    {label}
  </motion.div>
);

const Arrow = () => <ArrowRight className="w-5 h-5 text-cyan-500 rotate-90" />;

const ProgrammaticOrchestration = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-32">
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/3 h-[500px] w-[500px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute bottom-20 right-1/4 h-[400px] w-[400px] rounded-full bg-blue-500/10 blur-[160px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Programmatic Orchestration
          </div>

          <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            Automate pipelines entirely through code.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Create, execute, monitor, and manage pipelines, CDC streams,
            notebooks, and jobs using simple, composable SDK primitives.
          </p>
        </motion.div>

        {/* Main Layout */}

        <div className="mt-24 grid gap-12 lg:grid-cols-2">
          {/* Code Example */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="overflow-hidden rounded-[32px] border border-slate-200 bg-slate-950 shadow-2xl"
          >
            <div className="flex items-center justify-between border-b border-slate-800 px-6 py-5">
              <span className="text-sm font-medium text-slate-400">
                Python SDK Example
              </span>

              <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-xs font-medium text-cyan-300">
                Production Ready
              </span>
            </div>

            <pre className="overflow-x-auto p-8 text-sm leading-7 text-cyan-300">
              <code>{code}</code>
            </pre>
          </motion.div>

          {/* Workflow Diagram */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-[32px] border border-slate-200 bg-white p-10 shadow-lg"
          >
            <h3 className="text-2xl font-bold text-slate-900">
              Execution Flow
            </h3>

            <p className="mt-3 text-slate-600">
              Every SDK operation ultimately becomes an API request that
              executes on the Seg Forge platform.
            </p>

            <div className="mt-12 flex flex-col items-center gap-5">
              <Node label="Client" />
              <Arrow />

              <Node label="Pipeline Resource" />
              <Arrow />

              <Node label="Run" />
              <Arrow />

              <Node label="Jobs API" />
              <Arrow />

              <Node label="Apache Flink" />
              <Arrow />

              <Node label="Completion" active />
            </div>
          </motion.div>
        </div>

        {/* Features */}

        <div className="mt-24 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {[
            {
              title: "Resource Discovery",
              description:
                "Fetch pipelines, notebooks, CDC streams, and connections through typed resource controllers.",
            },
            {
              title: "Execution Management",
              description:
                "Execute pipelines synchronously or asynchronously and monitor their execution state.",
            },
            {
              title: "Automatic Polling",
              description:
                "Wait for completion with retries, timeout handling, and exponential backoff.",
            },
            {
              title: "Typed Results",
              description:
                "Access row counts, logs, job IDs, and metrics through strongly typed models.",
            },
          ].map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -8 }}
              className="rounded-[28px] border border-slate-200 bg-white p-7 shadow-sm transition-all"
            >
              <h4 className="text-lg font-semibold text-slate-900">
                {feature.title}
              </h4>

              <p className="mt-4 text-sm leading-7 text-slate-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Bottom Example */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-24 overflow-hidden rounded-[32px] border border-slate-800 bg-slate-950"
        >
          <div className="border-b border-slate-800 px-6 py-4 text-sm text-slate-400">
            Job Result Handling
          </div>

          <pre className="overflow-x-auto p-8 text-sm leading-7 text-cyan-300">
            <code>{`run = pipeline.run()

if run.succeeded:
    print(run.rows_written)
else:
    print(run.error)`}</code>
          </pre>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgrammaticOrchestration;
