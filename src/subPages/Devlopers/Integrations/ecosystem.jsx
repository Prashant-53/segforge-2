import React from "react";
import { motion } from "framer-motion";
import {
  BrainCircuit,
  Activity,
  ShieldCheck,
  FlaskConical,
  GitBranch,
  Boxes,
  BarChart3,
  Network,
  ScrollText,
  Lock,
  KeyRound,
  BadgeCheck,
} from "lucide-react";

const groups = [
  {
    title: "Machine Learning",
    icon: BrainCircuit,
    description:
      "Manage the complete machine learning lifecycle from experimentation to production deployment.",
    color: "cyan",
    items: [
      {
        name: "MLflow",
        description: "Experiment tracking and artifact management.",
        icon: FlaskConical,
      },
      {
        name: "Model Registry",
        description: "Versioned model storage and lifecycle management.",
        icon: Boxes,
      },
      {
        name: "Experiment Tracking",
        description: "Metrics, parameters and reproducible training runs.",
        icon: GitBranch,
      },
    ],
  },
  {
    title: "Observability",
    icon: Activity,
    description:
      "Gain complete visibility into infrastructure, pipelines, lineage and operational health.",
    color: "emerald",
    items: [
      {
        name: "Prometheus",
        description: "Infrastructure metrics and alerting.",
        icon: BarChart3,
      },
      {
        name: "OpenLineage",
        description: "Track dataset lineage across workflows.",
        icon: Network,
      },
      {
        name: "Marquez",
        description: "Centralized metadata and lineage catalog.",
        icon: ScrollText,
      },
      {
        name: "Loki",
        description: "Distributed log aggregation and search.",
        icon: Activity,
      },
    ],
  },
  {
    title: "Identity & Security",
    icon: ShieldCheck,
    description:
      "Enterprise authentication, authorization and secure access management.",
    color: "blue",
    items: [
      {
        name: "Azure AD",
        description: "Enterprise single sign-on.",
        icon: BadgeCheck,
      },
      {
        name: "OIDC",
        description: "OpenID Connect authentication.",
        icon: Lock,
      },
      {
        name: "JWT",
        description: "Token-based API authentication.",
        icon: KeyRound,
      },
      {
        name: "RBAC",
        description: "Workspace-scoped role-based access control.",
        icon: ShieldCheck,
      },
    ],
  },
];

const EnterpriseEcosystem = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
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
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Enterprise Ecosystem
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Integrates with the
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}
              modern enterprise stack.
            </span>
          </h2>

          <p className="mt-6 text-md leading-8 text-slate-600">
            Seg Forge connects seamlessly with enterprise tooling across machine
            learning, observability, governance, authentication, and security,
            enabling organizations to build production-ready data platforms
            without vendor lock-in.
          </p>
        </motion.div>

        {/* Groups */}

        <div className="mt-20 grid gap-8 xl:grid-cols-3">
          {groups.map((group, index) => {
            const GroupIcon = group.icon;

            return (
              <motion.div
                key={group.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition hover:border-cyan-300 hover:shadow-xl"
              >
                {/* Header */}

                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-50 p-4">
                    <GroupIcon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {group.title}
                    </h3>

                    <p className="mt-1 text-sm text-slate-500">
                      {group.items.length} Integrations
                    </p>
                  </div>
                </div>

                <p className="mt-6 text-slate-600 leading-7">
                  {group.description}
                </p>

                <div className="my-8 border-t border-slate-200" />

                {/* Items */}

                <div className="space-y-4">
                  {group.items.map((item) => {
                    const Icon = item.icon;

                    return (
                      <div
                        key={item.name}
                        className="rounded-2xl border border-slate-200 bg-slate-50 p-5 transition hover:border-cyan-300 hover:bg-white"
                      >
                        <div className="flex items-start gap-4">
                          <div className="rounded-xl bg-white p-3 shadow-sm">
                            <Icon className="h-5 w-5 text-cyan-600" />
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900">
                              {item.name}
                            </h4>

                            <p className="mt-1 text-sm leading-6 text-slate-500">
                              {item.description}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default EnterpriseEcosystem;
