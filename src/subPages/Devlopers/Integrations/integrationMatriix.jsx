import React, { useMemo, useState } from "react";
import {
  Search,
  Database,
  HardDrive,
  BarChart3,
  BrainCircuit,
  ShieldCheck,
  Activity,
  Network,
  CheckCircle2,
} from "lucide-react";

const integrations = [
  {
    category: "Database",
    name: "PostgreSQL",
    support: "JDBC + CDC",
    status: "GA",
    icon: Database,
  },
  {
    category: "Database",
    name: "MySQL",
    support: "JDBC + CDC",
    status: "GA",
    icon: Database,
  },
  {
    category: "Database",
    name: "SQL Server",
    support: "JDBC + CDC",
    status: "GA",
    icon: Database,
  },
  {
    category: "Database",
    name: "Oracle",
    support: "JDBC + CDC",
    status: "GA",
    icon: Database,
  },
  {
    category: "Database",
    name: "IBM DB2",
    support: "JDBC + CDC",
    status: "Beta",
    icon: Database,
  },
  {
    category: "Storage",
    name: "AWS S3",
    support: "Native",
    status: "GA",
    icon: HardDrive,
  },
  {
    category: "Storage",
    name: "MinIO",
    support: "Native",
    status: "GA",
    icon: HardDrive,
  },
  {
    category: "Storage",
    name: "Azure Blob",
    support: "Native",
    status: "GA",
    icon: HardDrive,
  },
  {
    category: "Storage",
    name: "Google Cloud Storage",
    support: "Native",
    status: "GA",
    icon: HardDrive,
  },
  {
    category: "BI",
    name: "Apache Superset",
    support: "Native",
    status: "GA",
    icon: BarChart3,
  },
  {
    category: "BI",
    name: "Power BI",
    support: "Connector",
    status: "GA",
    icon: BarChart3,
  },
  {
    category: "BI",
    name: "Tableau",
    support: "Connector",
    status: "GA",
    icon: BarChart3,
  },
  {
    category: "BI",
    name: "Qlik Sense",
    support: "Connector",
    status: "GA",
    icon: BarChart3,
  },
  {
    category: "Query",
    name: "Trino",
    support: "Native",
    status: "GA",
    icon: Database,
  },
  {
    category: "ML",
    name: "MLflow",
    support: "Native",
    status: "GA",
    icon: BrainCircuit,
  },
  {
    category: "Monitoring",
    name: "Prometheus",
    support: "Native",
    status: "GA",
    icon: Activity,
  },
  {
    category: "Lineage",
    name: "OpenLineage",
    support: "Native",
    status: "GA",
    icon: Network,
  },
  {
    category: "Logging",
    name: "Loki",
    support: "Native",
    status: "GA",
    icon: Activity,
  },
  {
    category: "Identity",
    name: "Azure AD",
    support: "Native",
    status: "GA",
    icon: ShieldCheck,
  },
];

const categories = [
  "All",
  "Database",
  "Storage",
  "BI",
  "Query",
  "ML",
  "Monitoring",
  "Lineage",
  "Logging",
  "Identity",
];

const IntegrationMatrix = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = useMemo(() => {
    return integrations.filter((item) => {
      const matchesCategory = category === "All" || item.category === category;

      const matchesSearch =
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.category.toLowerCase().includes(search.toLowerCase()) ||
        item.support.toLowerCase().includes(search.toLowerCase());

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
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
        {/* Header */}

        <div className="max-w-3xl">
          <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Integration Matrix
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Complete compatibility
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}
              reference.
            </span>
          </h2>

          <p className="mt-6 text-md leading-8 text-slate-600">
            Browse every officially supported integration across databases,
            storage platforms, analytics, machine learning, observability, and
            identity providers.
          </p>
        </div>

        {/* Toolbar */}

        <div className="mt-16 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-md">
            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search integrations..."
              className="w-full rounded-2xl border border-slate-200 bg-white py-4 pl-12 pr-4 outline-none transition focus:border-cyan-400"
            />
          </div>

          <div className="flex flex-wrap gap-3">
            {categories.map((item) => (
              <button
                key={item}
                onClick={() => setCategory(item)}
                className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                  category === item
                    ? "bg-cyan-500 text-white"
                    : "border border-slate-200 bg-white text-slate-600 hover:border-cyan-300"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Table */}

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
          <div className="overflow-x-auto">
            <table className="min-w-full">
              <thead className="bg-slate-900 text-left text-sm uppercase tracking-wide text-slate-300">
                <tr>
                  <th className="px-8 py-5">Category</th>
                  <th className="px-8 py-5">Integration</th>
                  <th className="px-8 py-5">Support</th>
                  <th className="px-8 py-5">Status</th>
                </tr>
              </thead>

              <tbody>
                {filtered.map((item, index) => {
                  const Icon = item.icon;

                  return (
                    <tr
                      key={item.name}
                      className={`transition hover:bg-cyan-50 ${
                        index !== filtered.length - 1
                          ? "border-b border-slate-100"
                          : ""
                      }`}
                    >
                      <td className="px-8 py-6">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
                          {item.category}
                        </span>
                      </td>

                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="rounded-xl bg-cyan-50 p-3">
                            <Icon className="h-5 w-5 text-cyan-600" />
                          </div>

                          <span className="font-semibold text-slate-900">
                            {item.name}
                          </span>
                        </div>
                      </td>

                      <td className="px-8 py-6">
                        <span className="rounded-full bg-slate-100 px-3 py-1 text-sm text-slate-700">
                          {item.support}
                        </span>
                      </td>

                      <td className="px-8 py-6">
                        <span
                          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
                            item.status === "GA"
                              ? "bg-emerald-100 text-emerald-700"
                              : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          <CheckCircle2 className="h-4 w-4" />
                          {item.status}
                        </span>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer */}

        <div className="mt-8 flex items-center justify-between rounded-2xl border border-slate-200 bg-white px-8 py-5">
          <div className="text-slate-600">
            Showing{" "}
            <span className="font-semibold text-slate-900">
              {filtered.length}
            </span>{" "}
            supported integrations.
          </div>

          <div className="text-sm text-slate-500">
            GA = General Availability • Beta = Preview
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntegrationMatrix;
