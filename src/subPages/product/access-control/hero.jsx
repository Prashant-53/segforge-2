import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  ShieldCheck,
  Lock,
  Users,
  Database,
} from "lucide-react";

const SecurityHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
      {/* Background */}

      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Security & Access Control
            </div>

            <h1 className="text-[2.375rem] lg:text-6xl md:text-5xl font-bold tracking-tight text-slate-900 leading-[1.05]">
              Enterprise security
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                without slowing teams down.
              </span>
            </h1>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Give every team a secure environment to build, analyze, and
              collaborate.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              From workspace isolation and role-based permissions to enterprise
              authentication and encrypted credentials, SegForge keeps your data
              protected at every layer.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <button className="w-full sm:w-auto px-6 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center gap-2 font-medium">
                Manage Permissions
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="w-full sm:w-auto px-6 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                <Play className="w-4 h-4" />
                Read Security Overview
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] p-5 sm:p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Workspaces */}

              <div className="grid grid-cols-3 gap-4">
                <WorkspaceCard title="Workspace A" />

                <WorkspaceCard title="Workspace B" />

                <WorkspaceCard title="Workspace C" />
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-10 bg-cyan-300" />
              </div>

              {/* Security Layer */}

              <div className="flex justify-center">
                <div className="w-full max-w-[340px] rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 p-8 text-center">
                  <ShieldCheck className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                  <h3 className="font-semibold text-slate-900 text-lg">
                    Access Control Layer
                  </h3>

                  <p className="text-sm text-slate-500 mt-2">
                    Authentication, RBAC, Workspace Isolation
                  </p>
                </div>
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-10 bg-cyan-300" />
              </div>

              {/* Resources */}

              <div className="grid grid-cols-3 gap-4">
                <ResourceCard icon={Database} title="Data" />

                <ResourceCard icon={Users} title="Projects" />

                <ResourceCard icon={Lock} title="Secrets" />
              </div>

              {/* Status */}

              <div className="mt-8 flex justify-center">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                  <ShieldCheck className="w-4 h-4" />
                  Protected Resources
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const WorkspaceCard = ({ title }) => (
  <div className="border border-slate-200 rounded-2xl p-4 bg-slate-50 text-center">
    <Users className="w-5 h-5 text-cyan-600 mx-auto mb-2" />

    <h4 className="text-sm font-medium text-slate-900">{title}</h4>
  </div>
);

const ResourceCard = ({ icon: Icon, title }) => (
  <div className="border border-slate-200 rounded-2xl p-5 text-center bg-white">
    <Icon className="w-6 h-6 text-cyan-600 mx-auto mb-3" />

    <h4 className="font-medium text-slate-900">{title}</h4>
  </div>
);

export default SecurityHero;
