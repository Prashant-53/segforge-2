import React from "react";
import { motion } from "framer-motion";
import {
  User,
  Building2,
  Shield,
  Workflow,
  Database,
  NotebookTabs,
  Link2,
  Lock,
  Activity,
  BarChart3,
  HardDrive,
  Radio,
  Gauge,
  ShieldCheck,
  FolderTree,
  Boxes,
  Server,
} from "lucide-react";

const accountInfo = [
  {
    icon: User,
    title: "Name",
    description:
      "Basic account identity used for authentication and communication.",
  },
  {
    icon: Building2,
    title: "Company",
    description:
      "Organization details associated with your workspace and deployment.",
  },
  {
    icon: Shield,
    title: "Email Address",
    description:
      "Used for authentication, notifications, and support communication.",
  },
  {
    icon: Lock,
    title: "Authentication Metadata",
    description:
      "Login timestamps, authentication methods, and security events.",
  },
];

const workspaceInfo = [
  {
    icon: Workflow,
    title: "Workspace Names",
  },
  {
    icon: Workflow,
    title: "Pipeline Definitions",
  },
  {
    icon: NotebookTabs,
    title: "Notebook Metadata",
  },
  {
    icon: Link2,
    title: "Connection Names",
  },
];

const metrics = [
  {
    icon: BarChart3,
    title: "Pipeline Statistics",
    description:
      "Execution counts, runtime history, success rates, and scheduling metrics.",
  },
  {
    icon: Activity,
    title: "Flink Job Status",
    description:
      "Cluster health, task execution, job lifecycle, and runtime information.",
  },
  {
    icon: HardDrive,
    title: "Storage Metrics",
    description:
      "Table sizes, object storage usage, Iceberg metadata, and warehouse growth.",
  },
  {
    icon: Radio,
    title: "CDC Throughput",
    description:
      "Events processed, Kafka lag, replication status, and ingestion performance.",
  },
  {
    icon: Gauge,
    title: "Monitoring Metrics",
    description:
      "Platform health, API usage, freshness metrics, and operational telemetry.",
  },
];

const customerOwns = [
  {
    icon: Database,
    title: "Iceberg Tables",
  },
  {
    icon: Workflow,
    title: "Pipeline Definitions",
  },
  {
    icon: Boxes,
    title: "Iceberg Data Files",
  },
  {
    icon: Activity,
    title: "Kafka Events",
  },
  {
    icon: Server,
    title: "Object Storage",
  },
];

const InformationCollected = () => {
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

      <div className="absolute left-1/2 top-20 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Information We Collect
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Transparency Around Your Data
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Seg Forge collects only the information necessary to deliver,
            secure, and improve the platform. We minimize data collection and
            provide enterprise customers with complete visibility into what is
            processed.
          </p>
        </motion.div>

        {/* ===========================
            4.1 Account Information
        =========================== */}

        <div className="mt-20">
          <div className="flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-cyan-500" />

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                4.1 Account Information
              </h3>

              <p className="mt-2 text-slate-600">
                Information provided when creating or managing your Seg Forge
                account.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {accountInfo.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-cyan-300 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                  <item.icon className="h-7 w-7 text-cyan-600" />
                </div>

                <h4 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===========================
            4.2 Workspace Metadata
        =========================== */}

        <div className="mt-24">
          <div className="flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-cyan-500" />

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                4.2 Workspace Metadata
              </h3>

              <p className="mt-2 text-slate-600">
                Metadata required to organize and manage your workspaces,
                projects, and development resources.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {workspaceInfo.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-cyan-300 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                  <item.icon className="h-7 w-7 text-cyan-600" />
                </div>

                <h4 className="mt-5 text-lg font-semibold text-slate-900">
                  {item.title}
                </h4>
              </div>
            ))}
          </div>

          {/* Important Note */}

          <div className="mt-10 rounded-3xl border border-amber-200 bg-amber-50 p-8">
            <div className="flex items-start gap-5">
              <Lock className="mt-1 h-8 w-8 text-amber-600" />

              <div>
                <h4 className="text-xl font-bold text-slate-900">
                  Database Credentials
                </h4>

                <p className="mt-3 text-slate-700 leading-8">
                  Database passwords, access keys, tokens, and other secrets are
                  encrypted using industry-standard encryption and are
                  <strong> never stored in plain text.</strong> Sensitive
                  credentials are never exposed through APIs, logs, or user
                  interfaces.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ===========================
            4.3 Platform Usage Metrics
        =========================== */}

        <div className="mt-24">
          <div className="flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-cyan-500" />

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                4.3 Platform Usage Metrics
              </h3>

              <p className="mt-2 text-slate-600">
                Operational telemetry helps monitor platform health, diagnose
                issues, and improve reliability.
              </p>
            </div>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {metrics.map((item) => (
              <div
                key={item.title}
                className="rounded-3xl border border-slate-200 bg-white p-6 transition hover:border-cyan-300 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                  <item.icon className="h-7 w-7 text-cyan-600" />
                </div>

                <h4 className="mt-5 text-xl font-semibold text-slate-900">
                  {item.title}
                </h4>

                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ===========================
            4.4 Customer Ownership
        =========================== */}

        <div className="mt-24">
          <div className="flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-cyan-500" />

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                4.4 Information You Control
              </h3>

              <p className="mt-2 text-slate-600">
                Seg Forge provides the platform—but your organization always
                retains ownership of its data.
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-[32px] border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-white p-10">
            <div className="flex items-start gap-5">
              <ShieldCheck className="mt-1 h-10 w-10 text-cyan-600" />

              <div>
                <h4 className="text-2xl font-bold text-slate-900">
                  Customer Data Ownership
                </h4>

                <p className="mt-4 max-w-4xl text-lg leading-8 text-slate-700">
                  Seg Forge does not own, sell, analyze, or claim intellectual
                  property rights over customer data processed within the
                  platform. Your organization maintains complete ownership and
                  administrative control over all business data and analytical
                  assets.
                </p>
              </div>
            </div>

            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {customerOwns.map((item) => (
                <div
                  key={item.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm"
                >
                  <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                    <item.icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <h5 className="mt-5 font-semibold text-slate-900">
                    {item.title}
                  </h5>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InformationCollected;
