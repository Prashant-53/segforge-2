import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  GitBranch,
  AlertTriangle,
  CheckCircle2,
} from "lucide-react";

const compatibility = [
  {
    sdk: "v1.4.x",
    api: "v1.4.0",
    features: "Full CDC, Smart Router, Monitoring APIs",
    status: "Recommended",
  },
  {
    sdk: "v1.3.x",
    api: "v1.2.0",
    features: "ETL Pipelines, Catalogs, Notebooks",
    status: "Supported",
  },
  {
    sdk: "v1.2.x",
    api: "v1.0.0",
    features: "Core CRUD Operations",
    status: "Maintenance",
  },
];

const principles = [
  {
    icon: GitBranch,
    title: "Semantic Versioning",
    description:
      "SDKs and APIs follow MAJOR.MINOR.PATCH versioning. Breaking changes only occur in major releases.",
  },
  {
    icon: ShieldCheck,
    title: "Backward Compatibility",
    description:
      "Minor and patch releases remain backward compatible and support previous resource contracts whenever possible.",
  },
  {
    icon: AlertTriangle,
    title: "Deprecation Policy",
    description:
      "Deprecated APIs remain supported for at least two minor releases before removal and emit warnings in SDKs.",
  },
];

const CompatibilityMatrix = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-32">
      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute left-1/4 top-32 h-[450px] w-[450px] rounded-full bg-cyan-500/10 blur-[150px]" />

        <div className="absolute right-1/4 bottom-10 h-[350px] w-[350px] rounded-full bg-blue-500/10 blur-[150px]" />
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
            SDK Compatibility Matrix
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 sm:text-5xl">
            Stable versioning with predictable upgrades.
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-md leading-8 text-slate-600">
            Seg Forge follows strict compatibility guarantees between SDKs and
            platform APIs, ensuring long-term stability for production
            integrations.
          </p>
        </motion.div>

        {/* Compatibility Table */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-xl"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="border-b border-slate-200 bg-slate-50">
                <tr>
                  <th className="px-8 py-6 text-left text-sm font-semibold text-slate-600">
                    SDK Version
                  </th>

                  <th className="px-8 py-6 text-left text-sm font-semibold text-slate-600">
                    API Version
                  </th>

                  <th className="px-8 py-6 text-left text-sm font-semibold text-slate-600">
                    Features
                  </th>

                  <th className="px-8 py-6 text-left text-sm font-semibold text-slate-600">
                    Support Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {compatibility.map((item, index) => (
                  <tr
                    key={item.sdk}
                    className={`${
                      index !== compatibility.length - 1
                        ? "border-b border-slate-100"
                        : ""
                    }`}
                  >
                    <td className="px-8 py-6 font-mono text-cyan-700">
                      {item.sdk}
                    </td>

                    <td className="px-8 py-6 font-mono text-slate-700">
                      {item.api}
                    </td>

                    <td className="px-8 py-6 text-slate-600">
                      {item.features}
                    </td>

                    <td className="px-8 py-6">
                      <span
                        className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
                          item.status === "Recommended"
                            ? "bg-emerald-100 text-emerald-700"
                            : item.status === "Supported"
                              ? "bg-cyan-100 text-cyan-700"
                              : "bg-amber-100 text-amber-700"
                        }`}
                      >
                        {item.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

        {/* Versioning Principles */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {principles.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -8 }}
                viewport={{ once: true }}
                className="rounded-[28px] border border-slate-200 bg-white p-8 shadow-sm"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                  <Icon className="h-7 w-7 text-cyan-600" />
                </div>

                <h3 className="mt-6 text-xl font-semibold text-slate-900">
                  {item.title}
                </h3>

                <p className="mt-4 leading-7 text-slate-600">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Compatibility Guarantee */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-24 rounded-[32px] border border-cyan-100 bg-gradient-to-r from-cyan-50 to-blue-50 p-10"
        >
          <div className="flex items-start gap-5">
            <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-500 text-white">
              <CheckCircle2 className="h-7 w-7" />
            </div>

            <div>
              <h3 className="text-2xl font-bold text-slate-900">
                Compatibility Guarantee
              </h3>

              <p className="mt-4 max-w-4xl leading-8 text-slate-600">
                Production integrations should target the latest minor release
                of an SDK. Upgrading between patch and minor versions should
                never require code changes. Breaking API changes are introduced
                only through major version releases and are announced well in
                advance with migration guides and deprecation notices.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CompatibilityMatrix;
