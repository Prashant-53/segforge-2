import React from "react";
import { Code2, Globe, Server, Database, ArrowDown, Check } from "lucide-react";

const layers = [
  {
    title: "Native SDKs",
    description: "Python • TypeScript • Java • Go • .NET",
    icon: Code2,
  },
  {
    title: "HTTP Client Layer",
    description: "Authentication, retries, serialization, connection pooling",
    icon: Globe,
  },
  {
    title: "REST API",
    description: "Workspace-scoped FastAPI endpoints and resource controllers",
    icon: Server,
  },
  {
    title: "Seg Forge Services",
    description: "Pipelines, CDC, Catalogs, Notebooks, Monitoring",
    icon: Database,
  },
];

const features = [
  "Resource-Controller Pattern",
  "Thread-safe HTTP Sessions",
  "Typed Resource Models",
  "Automatic Serialization",
  "Sync & Async Support",
  "Workspace Context Management",
];

const NativeClientArchitecture = () => {
  return (
    <section className="py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Native Client Architecture
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Thin SDKs.
            <br />
            Powerful platform.
          </h2>

          <p className="mt-6 text-md leading-relaxed text-slate-600">
            Seg Forge SDKs are lightweight, type-safe abstractions over the REST
            API, designed for predictable behavior, high performance, and native
            developer ergonomics.
          </p>
        </div>

        {/* Content */}

        <div className="mt-20 grid lg:grid-cols-2 gap-20 items-center">
          {/* Architecture */}

          <div className="rounded-[36px] border border-slate-200 bg-white p-12 shadow-sm">
            <div className="mx-auto max-w-md">
              {layers.map((layer, index) => {
                const Icon = layer.icon;

                return (
                  <React.Fragment key={layer.title}>
                    <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                      <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
                        <Icon className="h-7 w-7" />
                      </div>

                      <h3 className="mt-4 text-lg font-semibold text-slate-900">
                        {layer.title}
                      </h3>

                      <p className="mt-2 text-sm leading-6 text-slate-500">
                        {layer.description}
                      </p>
                    </div>

                    {index !== layers.length - 1 && (
                      <div className="flex justify-center py-4">
                        <ArrowDown className="h-5 w-5 text-slate-300" />
                      </div>
                    )}
                  </React.Fragment>
                );
              })}

              <div className="mt-6 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-5 text-center text-white">
                <div className="text-sm uppercase tracking-wider opacity-80">
                  Compute & Storage Layer
                </div>

                <div className="mt-2 text-lg font-semibold">
                  Flink • Kafka • Iceberg • Nessie
                </div>
              </div>
            </div>
          </div>

          {/* Technical Highlights */}

          <div>
            <h3 className="text-3xl font-bold text-slate-900">
              Technical Highlights
            </h3>

            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Designed for production environments with native developer
              experience, predictable APIs, and high-performance networking.
            </p>

            <div className="mt-10 grid gap-4">
              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-50">
                    <Check className="h-5 w-5 text-cyan-600" />
                  </div>

                  <div>
                    <div className="font-semibold text-slate-900">
                      {feature}
                    </div>

                    <div className="mt-1 text-sm text-slate-500">
                      {feature === "Resource-Controller Pattern" &&
                        "Dedicated clients for pipelines, CDC, catalogs, notebooks, and monitoring."}

                      {feature === "Thread-safe HTTP Sessions" &&
                        "Shared sessions with connection pooling and efficient request reuse."}

                      {feature === "Typed Resource Models" &&
                        "Strongly typed request and response objects with IDE autocompletion."}

                      {feature === "Automatic Serialization" &&
                        "Automatic conversion between JSON payloads and native language objects."}

                      {feature === "Sync & Async Support" &&
                        "Choose synchronous or asynchronous APIs depending on workload requirements."}

                      {feature === "Workspace Context Management" &&
                        "Automatic workspace scoping and authentication header management."}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NativeClientArchitecture;
