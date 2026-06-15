import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Database,
  Workflow,
  Activity,
  BarChart3,
  FileText,
} from "lucide-react";

const features = [
  "Role-Based Access Control",
  "Workspace Isolation",
  "Azure AD SSO",
  "Least Privilege Access",
  "Team-Based Permissions",
];

const GovernanceAccessSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Access Governance
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Ensure the right people have the right access.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Apply governance policies consistently across teams, projects, and
              workspaces.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Control who can view, modify, approve, or manage resources while
              keeping environments isolated and easy to administer.
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
              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-900">
                  Governance Permission Hierarchy
                </h3>
              </div>

              <div className="p-6 sm:p-8">
                {/* Admin */}

                <RoleCard
                  title="Administrator"
                  subtitle="Full Platform Control"
                  highlight
                  resources={[
                    {
                      icon: Workflow,
                      name: "ETL Studio",
                    },
                    {
                      icon: Database,
                      name: "Catalog",
                    },
                    {
                      icon: Activity,
                      name: "CDC Streams",
                    },
                  ]}
                />

                {/* Connector */}

                <HierarchyConnector />

                {/* Analyst */}

                <RoleCard
                  title="Analyst"
                  subtitle="Data Exploration"
                  resources={[
                    {
                      icon: Database,
                      name: "Catalog",
                    },
                    {
                      icon: BarChart3,
                      name: "Dashboards",
                    },
                  ]}
                />

                {/* Connector */}

                <HierarchyConnector />

                {/* Viewer */}

                <RoleCard
                  title="Viewer"
                  subtitle="Read Only Access"
                  resources={[
                    {
                      icon: FileText,
                      name: "Reports",
                    },
                  ]}
                />

                {/* Footer */}

                <div className="mt-8 rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
                  <div className="flex items-start gap-3">
                    <Users className="w-5 h-5 text-cyan-600 mt-0.5" />

                    <div>
                      <h4 className="font-medium text-slate-900">
                        Governance Policy Enforcement
                      </h4>

                      <p className="text-sm text-slate-600 mt-2">
                        Permissions are applied consistently across workspaces,
                        resources, and organizational teams.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stats */}

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <MetricCard value="RBAC" label="Enforced" />

                  <MetricCard value="SSO" label="Integrated" />

                  <MetricCard value="24/7" label="Governed" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HierarchyConnector = () => (
  <div className="flex justify-center py-4">
    <div className="w-px h-10 bg-cyan-300" />
  </div>
);

const RoleCard = ({ title, subtitle, resources, highlight }) => (
  <div
    className={`rounded-3xl border p-5
      ${
        highlight ? "border-cyan-200 bg-cyan-50" : "border-slate-200 bg-white"
      }`}
  >
    <div className="flex items-center gap-3 mb-4">
      <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
        <Users className="w-5 h-5 text-cyan-600" />
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>

        <p className="text-sm text-slate-500">{subtitle}</p>
      </div>
    </div>

    <div className="space-y-2">
      {resources.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.name}
            className="flex items-center gap-3 text-sm text-slate-700"
          >
            <Icon className="w-4 h-4 text-cyan-600" />

            {item.name}
          </div>
        );
      })}
    </div>
  </div>
);

const MetricCard = ({ value, label }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-xl font-bold text-slate-900">{value}</div>

    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default GovernanceAccessSection;
