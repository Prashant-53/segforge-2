import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  DollarSign,
  Network,
  Users,
  CheckCircle2,
  BadgeCheck,
} from "lucide-react";
import CrossCloudGov from "../../../assets/Products/Multi-Cloud/crossgov.webp";

const capabilityGroups = [
  {
    icon: ShieldCheck,
    title: "Multi-Cloud Security",
    items: [
      "22-Permission Matrix",
      "Azure AD SSO",
      "Enterprise RBAC",
      "Unified Identity",
    ],
  },
  {
    icon: DollarSign,
    title: "Cross-Cloud Visibility",
    items: [
      "Compute Costs",
      "Storage Costs",
      "Streaming Costs",
      "Provider Comparison",
    ],
  },
];

const governanceFeatures = [
  {
    icon: Network,
    title: "Global Data Lineage",
    description:
      "Track datasets as they move between cloud providers, storage platforms, streaming pipelines, and analytics workloads with complete end-to-end visibility across your entire multi-cloud environment.",
  },
  {
    icon: Users,
    title: "Unified Governance",
    description:
      "Apply consistent access policies, authentication, and governance controls across AWS, Microsoft Azure, and Google Cloud without managing separate security configurations.",
  },
];

const CrossCloudGovernanceSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-28">
      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}

      <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src={CrossCloudGov}
                alt="Unified Cross Cloud Governance"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Cross-Cloud Governance
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Govern Every Cloud.
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Manage Everything from One Platform.
              </span>
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-6 text-slate-600">
              Secure identities, monitor infrastructure costs, and trace data
              movement across every cloud provider through a unified governance
              platform. Maintain complete visibility and operational control
              without sacrificing flexibility.
            </p>

            {/* Capability Groups */}

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {capabilityGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <group.icon className="h-7 w-7 text-cyan-600" />

                    <h3 className="text-xl font-semibold text-slate-900">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-cyan-500" />

                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Supporting Features */}

            <div className="mt-10 space-y-5">
              {governanceFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                    <feature.icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Highlight */}

            <div className="mt-10 rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-white p-6">
              <div className="flex items-start gap-4">
                <BadgeCheck className="mt-1 h-7 w-7 text-cyan-600" />

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    One Governance Layer Across Every Cloud.
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Apply enterprise RBAC, Azure AD authentication, global
                    lineage, and cross-cloud cost visibility through a single
                    governance platform that spans AWS, Microsoft Azure, Google
                    Cloud, and hybrid infrastructure.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CrossCloudGovernanceSection;
