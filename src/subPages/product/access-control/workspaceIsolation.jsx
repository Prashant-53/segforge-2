import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  FolderTree,
  Database,
  GitBranch,
  Lock,
} from "lucide-react";

const features = [
  "Workspace Isolation",
  "Dedicated Catalogs",
  "Independent Resources",
  "Nessie Branch Separation",
  "Iceberg Namespace Isolation",
];

const WorkspaceIsolationSection = () => {
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
              Workspace Isolation
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Give every team its own secure environment.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Every workspace operates as an isolated environment with its own
              resources, data boundaries, and governance controls.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Teams can work independently without worrying about accidental
              access to projects, pipelines, or datasets belonging to other
              groups.
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
            <div className="bg-white border border-slate-200 rounded-[32px] p-5 sm:p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Workspace Stack */}

              <div className="space-y-5">
                <WorkspaceCard
                  title="Engineering Workspace"
                  icon={FolderTree}
                  color="bg-cyan-50 border-cyan-200"
                />

                <div className="flex justify-center">
                  <div className="w-px h-8 bg-slate-300" />
                </div>

                <WorkspaceCard
                  title="Marketing Workspace"
                  icon={Database}
                  color="bg-slate-50 border-slate-200"
                />

                <div className="flex justify-center">
                  <div className="w-px h-8 bg-slate-300" />
                </div>

                <WorkspaceCard
                  title="Finance Workspace"
                  icon={GitBranch}
                  color="bg-slate-50 border-slate-200"
                />
              </div>

              {/* Isolation Layer */}

              <div className="mt-10 border border-cyan-200 bg-gradient-to-r from-cyan-50 to-blue-50 rounded-3xl p-6 text-center">
                <Lock className="w-8 h-8 text-cyan-600 mx-auto mb-3" />

                <h3 className="font-semibold text-slate-900">
                  Completely Isolated
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  Independent catalogs, namespaces, branches, permissions, and
                  resources.
                </p>
              </div>

              {/* Bottom Indicators */}

              <div className="grid grid-cols-3 gap-3 mt-8">
                <MiniTag text="Catalogs" />

                <MiniTag text="Branches" />

                <MiniTag text="Namespaces" />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WorkspaceCard = ({ title, icon: Icon, color }) => (
  <div className={`border rounded-3xl p-5 ${color}`}>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center">
        <Icon className="w-5 h-5 text-cyan-600" />
      </div>

      <div>
        <h4 className="font-semibold text-slate-900">{title}</h4>

        <p className="text-sm text-slate-500 mt-1">
          Dedicated resources and governance
        </p>
      </div>
    </div>
  </div>
);

const MiniTag = ({ text }) => (
  <div className="rounded-xl border border-slate-200 py-3 text-center text-sm text-slate-600 bg-slate-50">
    {text}
  </div>
);

export default WorkspaceIsolationSection;
