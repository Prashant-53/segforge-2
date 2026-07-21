import React from "react";
import { motion } from "framer-motion";
import {
  Archive,
  Database,
  UserX,
  FileClock,
  ShieldCheck,
  HardDrive,
  CalendarClock,
  History,
  Trash2,
  Clock3,
} from "lucide-react";

const retentionPolicies = [
  {
    title: "Metadata Retention",
    icon: Database,
    description:
      "Workspace metadata, pipeline definitions, notebook metadata, connection names, and catalog information are retained only for as long as necessary to provide and operate Seg Forge services or until removed by the customer.",
  },
  {
    title: "Account Deletion",
    icon: UserX,
    description:
      "When an account is permanently deleted, associated account information and metadata are scheduled for secure removal according to operational retention policies, except where retention is legally required.",
  },
  {
    title: "Operational Logs",
    icon: FileClock,
    description:
      "Platform logs are retained for operational monitoring, troubleshooting, security investigations, and service reliability before being securely deleted or anonymized.",
  },
  {
    title: "Audit Records",
    icon: ShieldCheck,
    description:
      "Audit records, including authentication events, administrative actions, and governance history, may be retained for compliance, security, and regulatory requirements.",
  },
  {
    title: "Backups",
    icon: HardDrive,
    description:
      "Encrypted backups are maintained for disaster recovery and business continuity. Backup retention schedules vary depending on deployment configuration and customer requirements.",
  },
];

const DataRetention = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      {/* Background */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right,#06b6d4 1px,transparent 1px),
              linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            <Archive className="h-4 w-4" />
            Data Retention
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Data Lifecycle &
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Retention Policies
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Seg Forge retains information only for as long as necessary to
            operate the platform, maintain security, satisfy legal obligations,
            and provide reliable disaster recovery. Customers remain in control
            of their business data throughout its lifecycle.
          </p>
        </motion.div>

        {/* Retention Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {retentionPolicies.map((policy, index) => (
            <motion.div
              key={policy.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                <policy.icon className="h-7 w-7 text-cyan-600" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {policy.title}
              </h3>

              <p className="mt-4 leading-8 text-slate-600">
                {policy.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Lifecycle Diagram */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-[32px] border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-white"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] p-10 lg:p-14">
            {/* Left */}

            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500">
                <CalendarClock className="h-8 w-8 text-white" />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">
                Information Lifecycle
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Information progresses through a managed lifecycle—from
                collection and operational use to archival and secure deletion.
                Retention periods depend on operational requirements, customer
                settings, and applicable legal obligations.
              </p>

              <div className="mt-8 rounded-3xl bg-slate-900 p-8 text-white">
                <div className="space-y-4 font-mono text-sm">
                  <div>Collection</div>

                  <div className="pl-6 text-cyan-400">↓</div>

                  <div>Active Platform Usage</div>

                  <div className="pl-6 text-cyan-400">↓</div>

                  <div>Retention Period</div>

                  <div className="pl-6 text-cyan-400">↓</div>

                  <div>Archive / Backup</div>

                  <div className="pl-6 text-cyan-400">↓</div>

                  <div>Secure Deletion</div>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="space-y-6">
              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-start gap-5">
                  <History className="mt-1 h-8 w-8 text-cyan-600" />

                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">
                      Operational History
                    </h4>

                    <p className="mt-3 leading-8 text-slate-600">
                      Metadata, audit records, and operational logs may be
                      retained for platform reliability, troubleshooting,
                      security investigations, and compliance purposes.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <div className="flex items-start gap-5">
                  <Clock3 className="mt-1 h-8 w-8 text-cyan-600" />

                  <div>
                    <h4 className="text-xl font-semibold text-slate-900">
                      Configurable Retention
                    </h4>

                    <p className="mt-3 leading-8 text-slate-600">
                      Self-hosted deployments allow organizations to configure
                      backup schedules, log retention periods, and archival
                      policies according to internal governance requirements.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white">
                <div className="flex items-center gap-3">
                  <Trash2 className="h-7 w-7" />

                  <h3 className="text-2xl font-bold">Secure Deletion</h3>
                </div>

                <p className="mt-5 leading-8 text-cyan-100">
                  Upon account deletion or customer-requested removal, Seg Forge
                  securely deletes applicable account metadata while preserving
                  only information required for legal, security, compliance, or
                  disaster recovery obligations. Customer-owned data remains
                  under the customer's administrative control at all times.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DataRetention;
