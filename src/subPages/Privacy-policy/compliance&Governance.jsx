import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  BadgeCheck,
  FileCheck,
  Scale,
  Fingerprint,
  GitBranch,
  History,
  Workflow,
  Database,
  Users,
  Lock,
  Building2,
  CheckCircle2,
} from "lucide-react";

const complianceStandards = [
  {
    title: "ISO 27001",
    icon: BadgeCheck,
    description:
      "Security management practices aligned with internationally recognized information security principles.",
  },
  {
    title: "SOC 2",
    icon: ShieldCheck,
    description:
      "Operational controls designed to support enterprise security, availability, and confidentiality.",
  },
  {
    title: "PCI DSS",
    icon: Fingerprint,
    description:
      "Infrastructure designed to support organizations operating in regulated payment environments.",
  },
  {
    title: "GDPR",
    icon: Scale,
    description:
      "Privacy controls supporting data protection, transparency, and customer data rights.",
  },
  {
    title: "CCPA",
    icon: FileCheck,
    description:
      "Support for organizations managing personal information under California privacy regulations.",
  },
];

const auditFeatures = [
  {
    title: "Nessie Commits",
    icon: GitBranch,
    description:
      "Every metadata operation is versioned, providing a complete commit history similar to Git.",
  },
  {
    title: "Schema History",
    icon: Database,
    description:
      "Track schema evolution over time with complete historical visibility into structural changes.",
  },
  {
    title: "Pipeline History",
    icon: Workflow,
    description:
      "Monitor pipeline revisions, deployments, executions, and operational changes.",
  },
  {
    title: "Catalog History",
    icon: History,
    description:
      "Maintain a full audit trail of catalog objects, namespaces, and table operations.",
  },
];

const accessControls = [
  {
    title: "22-Section RBAC",
    icon: Users,
    description:
      "Granular role-based permissions across every major platform capability.",
  },
  {
    title: "Workspace Isolation",
    icon: Building2,
    description:
      "Projects, metadata, credentials, and workloads remain isolated between workspaces.",
  },
  {
    title: "Least Privilege",
    icon: Lock,
    description:
      "Users receive only the permissions required to perform their assigned responsibilities.",
  },
];

const ComplianceGovernance = () => {
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

      <div className="absolute right-0 top-20 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[180px]" />

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
            <ShieldCheck className="h-4 w-4" />
            Compliance & Governance
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Enterprise Governance
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Built Into The Platform
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Seg Forge combines enterprise-grade governance, comprehensive
            auditing, and granular access control with open lakehouse
            technologies, enabling organizations to build secure and compliant
            data platforms at scale.
          </p>
        </motion.div>

        {/* Compliance Standards */}

        <div className="mt-20">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-cyan-500" />

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Compliance Standards
              </h3>

              <p className="mt-2 text-slate-600">
                Security and privacy practices designed to support enterprise
                compliance initiatives.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-5">
            {complianceStandards.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-300 hover:shadow-xl"
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
              </motion.div>
            ))}
          </div>
        </div>

        {/* Auditability */}

        <div className="mt-24">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-cyan-500" />

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Complete Auditability
              </h3>

              <p className="mt-2 text-slate-600">
                Every important operation is versioned and traceable across the
                entire platform.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-2">
            <div className="grid gap-6 sm:grid-cols-2">
              {auditFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-cyan-300 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                    <feature.icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <h4 className="mt-5 text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>

            {/* Audit Flow */}

            <div className="rounded-[32px] bg-slate-900 p-10 text-white shadow-xl">
              <h3 className="text-2xl font-bold">
                End-to-End Audit Trail
              </h3>

              <p className="mt-4 text-slate-300 leading-8">
                Every platform change is recorded and can be traced throughout
                its lifecycle, providing transparency for governance,
                compliance, and operational reviews.
              </p>

              <div className="mt-10 space-y-4 font-mono text-sm">
                <div>Pipeline Updated</div>

                <div className="pl-6 text-cyan-400">↓</div>

                <div>Schema Version Created</div>

                <div className="pl-6 text-cyan-400">↓</div>

                <div>Nessie Commit Recorded</div>

                <div className="pl-6 text-cyan-400">↓</div>

                <div>Catalog Updated</div>

                <div className="pl-6 text-cyan-400">↓</div>

                <div>Complete Historical Record</div>
              </div>
            </div>
          </div>
        </div>

        {/* Access Control */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 overflow-hidden rounded-[32px] border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-white"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] p-10 lg:p-14">
            {/* Left */}

            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500">
                <Lock className="h-8 w-8 text-white" />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">
                Enterprise Access Control
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Seg Forge implements fine-grained authorization using
                workspace-based security boundaries and least-privilege
                principles to ensure every user only has access to the resources
                they need.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
                <div className="space-y-3 font-mono text-sm">
                  <div>User Authentication</div>

                  <div className="pl-5 text-cyan-400">↓</div>

                  <div>22-Section RBAC</div>

                  <div className="pl-5 text-cyan-400">↓</div>

                  <div>Workspace Isolation</div>

                  <div className="pl-5 text-cyan-400">↓</div>

                  <div>Least Privilege Access</div>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="space-y-6">
              {accessControls.map((item) => (
                <div
                  key={item.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-cyan-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-5">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                      <item.icon className="h-7 w-7 text-cyan-600" />
                    </div>

                    <div>
                      <h4 className="text-xl font-semibold text-slate-900">
                        {item.title}
                      </h4>

                      <p className="mt-3 leading-7 text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              <div className="rounded-3xl bg-gradient-to-r from-cyan-500 to-blue-600 p-8 text-white">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="h-7 w-7" />

                  <h3 className="text-2xl font-bold">
                    Governance by Design
                  </h3>
                </div>

                <p className="mt-5 leading-8 text-cyan-100">
                  From version-controlled metadata to enterprise-grade access
                  control, Seg Forge provides organizations with the governance
                  capabilities required to operate modern data platforms
                  confidently and at scale.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComplianceGovernance;