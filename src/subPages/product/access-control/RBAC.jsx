import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Users,
  Eye,
  Pencil,
  Ban,
} from "lucide-react";

const features = [
  "Role-Based Access Control",
  "22 Permission Areas",
  "View / Edit / None Access",
  "Principle of Least Privilege",
  "Custom Team Roles",
];

const permissions = [
  {
    resource: "ETL Studio",
    view: true,
    edit: true,
    none: false,
  },
  {
    resource: "CDC Streams",
    view: false,
    edit: true,
    none: false,
  },
  {
    resource: "Cost Tracking",
    view: false,
    edit: false,
    none: true,
  },
  {
    resource: "Catalog",
    view: true,
    edit: false,
    none: false,
  },
  {
    resource: "Notebooks",
    view: false,
    edit: true,
    none: false,
  },
];

const RBACSection = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
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
              Access Management
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Grant access with surgical precision.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Not everyone needs access to everything.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Create roles tailored to each team and control exactly what users
              can view, modify, or manage across the platform.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Give analysts access to dashboards, engineers access to pipelines,
              and administrators complete control.
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
              {/* Header */}

              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-slate-900">
                      Analyst Role
                    </h3>

                    <p className="text-sm text-slate-500 mt-1">
                      Custom Team Permission Set
                    </p>
                  </div>

                  <div className="px-3 py-1 rounded-full bg-cyan-50 text-cyan-700 text-xs font-medium">
                    Least Privilege
                  </div>
                </div>
              </div>

              {/* Matrix */}

              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-slate-200">
                      <th className="text-left px-6 py-4 text-sm font-medium text-slate-500">
                        Resource
                      </th>

                      <th className="text-center px-4 py-4">
                        <div className="flex flex-col items-center gap-1">
                          <Eye className="w-4 h-4 text-cyan-600" />
                          <span className="text-xs text-slate-500">View</span>
                        </div>
                      </th>

                      <th className="text-center px-4 py-4">
                        <div className="flex flex-col items-center gap-1">
                          <Pencil className="w-4 h-4 text-amber-500" />
                          <span className="text-xs text-slate-500">Edit</span>
                        </div>
                      </th>

                      <th className="text-center px-4 py-4">
                        <div className="flex flex-col items-center gap-1">
                          <Ban className="w-4 h-4 text-red-500" />
                          <span className="text-xs text-slate-500">None</span>
                        </div>
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {permissions.map((row) => (
                      <tr
                        key={row.resource}
                        className="border-b border-slate-100"
                      >
                        <td className="px-6 py-5 text-slate-700 font-medium">
                          {row.resource}
                        </td>

                        <td className="text-center">
                          {row.view && (
                            <CheckCircle2 className="w-5 h-5 text-cyan-600 mx-auto" />
                          )}
                        </td>

                        <td className="text-center">
                          {row.edit && (
                            <CheckCircle2 className="w-5 h-5 text-amber-500 mx-auto" />
                          )}
                        </td>

                        <td className="text-center">
                          {row.none && (
                            <CheckCircle2 className="w-5 h-5 text-red-500 mx-auto" />
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Footer Stats */}

              <div className="grid grid-cols-3 border-t border-slate-200">
                <Stat value="22" label="Permission Areas" />

                <Stat value="∞" label="Custom Roles" />

                <Stat value="RBAC" label="Enforced" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Stat = ({ value, label }) => (
  <div className="text-center py-5">
    <div className="text-xl font-bold text-slate-900">{value}</div>

    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default RBACSection;
