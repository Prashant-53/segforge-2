import React from "react";
import { motion } from "framer-motion";
import { RotateCcw, ShieldCheck, RefreshCw, GitBranch } from "lucide-react";

import RecoveryVisual from "../../assets/workflow/recovery.png";

const stats = [
  {
    value: "Smart",
    label: "Retries",
  },
  {
    value: "CDC",
    label: "Watchdog",
  },
  {
    value: "Automatic",
    label: "Recovery",
  },
  {
    value: "Atomic",
    label: "Commits",
  },
];

const callouts = [
  {
    title: "Step-Level Retry",
    icon: RotateCcw,
  },
  {
    title: "CDC Watchdog",
    icon: ShieldCheck,
  },
  {
    title: "Job Recovery",
    icon: RefreshCw,
  },
  {
    title: "Nessie Versioning",
    icon: GitBranch,
  },
];

const ResilienceRecovery = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      {" "}
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {" "}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              Operational Reliability
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.05]">
              Keep workflows healthy
              <br />
              without constant intervention.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Automatically recover from failures, restart critical services,
              and resume workflows from the exact point of interruption.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Reduce operational burden while maintaining reliable data delivery
              across every workflow.
            </p>

            {/* Stats */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-bold text-slate-900">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Callouts */}

            <div className="mt-10 grid grid-cols-2 gap-4">
              {callouts.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-cyan-600" />

                      <span className="text-sm font-medium text-slate-700">
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

          {/* Visual */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={RecoveryVisual}
                alt="Workflow Recovery"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ResilienceRecovery;
