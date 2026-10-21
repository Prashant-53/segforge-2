import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  Database,
  FileJson,
  Route,
  AlertCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";

const principles = [
  {
    icon: Server,
    title: "Stateless Requests",
    description:
      "Every request contains all required authentication and context information.",
  },
  {
    icon: FileJson,
    title: "JSON Payloads",
    description: "All request and response bodies use application/json.",
  },
  {
    icon: Route,
    title: "Resource-Based URLs",
    description:
      "Endpoints are organized around resources and workspace scoping.",
  },
  {
    icon: CheckCircle2,
    title: "Consistent Status Codes",
    description: "Standard HTTP status codes communicate request outcomes.",
  },
  {
    icon: AlertCircle,
    title: "Predictable Errors",
    description:
      "Error responses follow a single structure across all endpoints.",
  },
];

const statuses = [
  ["200", "OK"],
  ["201", "Created"],
  ["400", "Bad Request"],
  ["401", "Unauthorized"],
  ["403", "Forbidden"],
  ["404", "Not Found"],
  ["500", "Internal Server Error"],
];

const APIDesignPrinciples = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      {/* Background Glow */}

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="max-w-3xl">
          <span className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            API Design Principles
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Consistent and predictable by design.
          </h2>

          <p className="mt-2 text-md text-slate-600 leading-relaxed">
            The Seg Forge API follows a small set of conventions that make it
            easy to integrate, automate, and reason about at scale.
          </p>
        </div>

        {/* Principles + Responses */}

        <div className="grid lg:grid-cols-2 gap-14 mt-20">
          {/* Principles */}

          <div className="space-y-5">
            {principles.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.08 }}
                  viewport={{ once: true }}
                  className="group rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                >
                  <div className="flex gap-5">
                    <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6 text-cyan-600" />
                    </div>

                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>

                      <p className="mt-3 text-slate-600 leading-7">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Response Examples */}

          <div className="space-y-8">
            {/* Success */}
            <div className="overflow-hidden rounded-[28px] border border-slate-200 shadow-lg">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-6 py-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-4 text-sm font-medium text-slate-600">
                  Standard Response
                </span>
              </div>

              <div className="bg-slate-950 p-8">
                {" "}
                <code className="text-slate-300">
                  {`{
  "id": "uuid",
  "name": "resource",
  "created_at": "timestamp"
}`}
                </code>
              </div>
            </div>

            {/* Error */}

            <div className="overflow-hidden rounded-[28px] border border-slate-200 shadow-lg">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-6 py-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-4 text-sm font-medium text-red-600">
                  Error Response
                </span>
              </div>

              <div className="bg-slate-950 p-8">
                {" "}
                <code className="text-slate-300">
                  {`{
  "detail": "error message"
}`}
                </code>
              </div>
            </div>

            {/* Pagination */}
            <div className="overflow-hidden rounded-[28px] border border-slate-200 shadow-lg">
              <div className="flex items-center gap-2 border-b border-slate-200 bg-slate-100 px-6 py-4">
                <div className="h-3 w-3 rounded-full bg-red-400" />
                <div className="h-3 w-3 rounded-full bg-yellow-400" />
                <div className="h-3 w-3 rounded-full bg-green-400" />

                <span className="ml-4 text-sm font-medium text-cyan-600">
                  Pagination{" "}
                </span>
              </div>

              <div className="bg-slate-950  p-8">
                {" "}
                <code className="text-slate-300 ">
                  {`GET /api/workspaces/{id}/pipelines?skip=0&limit=50`}
                </code>
              </div>
            </div>
          </div>
        </div>

        {/* Status Codes */}

        <div className="mt-28">
          <h3 className="text-2xl  lg:text-3xl font-bold text-slate-900 mb-10">
            HTTP Status Codes
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {statuses.map(([code, label]) => (
              <div
                key={code}
                className="rounded-2xl bg-white border border-slate-200 p-6"
              >
                <div className="text-3xl font-bold text-cyan-600">{code}</div>

                <div className="mt-2 text-slate-700 font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Rate Limits */}

        <div className="mt-24 rounded-[32px] bg-slate-900 p-10 text-white overflow-hidden relative">
          <div className="absolute right-0 top-0 w-[300px] h-[300px] bg-cyan-500/10 rounded-full blur-[120px]" />

          <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            <div>
              <div className="flex items-center gap-3">
                <Clock className="w-6 h-6 text-cyan-400" />

                <h3 className=" text-2xl lg:text-3xl font-bold">Rate Limits</h3>
              </div>

              <p className="mt-4 text-slate-300 text-md">
                Cloud managed deployments apply request limits per API key to
                ensure platform stability and fair resource allocation.
              </p>
            </div>

            <div className="rounded-3xl bg-white/5 border border-white/10 px-10 py-8">
              <div className="text-3xl font-bold text-cyan-400">1,000</div>

              <div className="mt-2 text-slate-300">
                requests / minute / API key
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default APIDesignPrinciples;
