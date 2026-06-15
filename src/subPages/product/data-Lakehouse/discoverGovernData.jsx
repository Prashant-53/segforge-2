import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  ShieldCheck,
  GitBranch,
  Eye,
  BarChart3,
  CheckCircle2,
} from "lucide-react";

const features = [
  "Data Catalog",
  "Column Statistics",
  "Data Preview",
  "RBAC",
  "Workspace Isolation",
  "Lineage Tracking",
];

const DiscoverGovernData = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              Discover & Govern Data
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Know what data you have and who can access it.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Explore datasets, inspect metadata, track lineage, and manage
              permissions from a single governance layer.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />

                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Top Bar */}

              <div className="px-6 py-4 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">
                  Governance Workspace
                </h3>

                <ShieldCheck className="w-5 h-5 text-cyan-600" />
              </div>

              {/* Layout */}

              <div className="grid grid-cols-12 min-h-[520px]">
                {/* Catalog Tree */}

                <div className="col-span-4 border-r border-slate-200 bg-slate-50 p-5">
                  <h4 className="text-sm font-medium text-slate-500 uppercase tracking-wider mb-5">
                    Namespaces
                  </h4>

                  <div className="space-y-4 text-sm">
                    <div>
                      <p className="font-medium text-slate-800">raw</p>

                      <div className="ml-4 mt-2 space-y-2 text-slate-500">
                        <p>customer_events</p>
                        <p>transactions</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-slate-800">staged</p>

                      <div className="ml-4 mt-2 space-y-2 text-slate-500">
                        <p>sales_cleaned</p>
                        <p>customer_profiles</p>
                      </div>
                    </div>

                    <div>
                      <p className="font-medium text-cyan-600">curated</p>

                      <div className="ml-4 mt-2 space-y-2 text-slate-500">
                        <p>revenue_dashboard</p>
                        <p>forecast_data</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Main Content */}

                <div className="col-span-8 p-6">
                  {/* Dataset */}

                  <div className="flex items-center gap-2 mb-6">
                    <Database className="w-4 h-4 text-cyan-600" />

                    <span className="font-semibold text-slate-900">
                      revenue_dashboard
                    </span>
                  </div>

                  {/* Metadata */}

                  <div className="grid grid-cols-3 gap-4 mb-6">
                    <StatCard label="Rows" value="24.3M" />

                    <StatCard label="Columns" value="42" />

                    <StatCard label="Partitions" value="128" />
                  </div>

                  {/* Permissions */}

                  <div className="border border-slate-200 rounded-2xl p-5 mb-6">
                    <div className="flex items-center gap-2 mb-4">
                      <ShieldCheck className="w-4 h-4 text-cyan-600" />

                      <span className="font-medium text-slate-900">
                        Access Controls
                      </span>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <RoleTag label="Admin" />
                      <RoleTag label="Analyst" />
                      <RoleTag label="Data Engineer" />
                      <RoleTag label="Read Only" />
                    </div>
                  </div>

                  {/* Lineage */}

                  <div className="border border-slate-200 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <GitBranch className="w-4 h-4 text-cyan-600" />

                      <span className="font-medium text-slate-900">
                        Lineage Overview
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                      <div className="px-4 py-2 rounded-xl bg-slate-50">
                        Raw Events
                      </div>

                      <div className="text-cyan-500">→</div>

                      <div className="px-4 py-2 rounded-xl bg-slate-50">
                        Transform
                      </div>

                      <div className="text-cyan-500">→</div>

                      <div className="px-4 py-2 rounded-xl bg-cyan-50 text-cyan-700">
                        Revenue Dashboard
                      </div>
                    </div>
                  </div>

                  {/* Footer Stats */}

                  <div className="grid grid-cols-2 gap-4 mt-6">
                    <MiniMetric
                      icon={Eye}
                      title="Data Preview"
                      value="100 Rows"
                    />

                    <MiniMetric
                      icon={BarChart3}
                      title="Column Stats"
                      value="Available"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StatCard = ({ label, value }) => (
  <div className="rounded-2xl border border-slate-200 p-4">
    <p className="text-xs text-slate-500">{label}</p>

    <p className="mt-2 text-xl font-semibold text-slate-900">{value}</p>
  </div>
);

const RoleTag = ({ label }) => (
  <div className="px-3 py-2 rounded-lg bg-slate-50 border border-slate-200 text-sm text-slate-700">
    {label}
  </div>
);

const MiniMetric = ({ icon: Icon, title, value }) => (
  <div className="rounded-2xl border border-slate-200 p-4 flex items-center gap-3">
    <Icon className="w-5 h-5 text-cyan-600" />

    <div>
      <p className="text-sm text-slate-500">{title}</p>

      <p className="font-medium text-slate-900">{value}</p>
    </div>
  </div>
);

export default DiscoverGovernData;
