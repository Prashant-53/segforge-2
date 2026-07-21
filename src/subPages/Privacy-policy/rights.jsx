import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  ShieldCheck,
  Database,
  Radio,
  Workflow,
  Boxes,
  HardDrive,
  GitBranch,
  UserCheck,
  Pencil,
  Trash2,
  Download,
  Lock,
} from "lucide-react";

const thirdPartyServices = [
  {
    service: "Azure AD",
    purpose: "Enterprise Authentication & Single Sign-On",
    icon: ShieldCheck,
  },
  {
    service: "PostgreSQL",
    purpose: "Platform Metadata Database",
    icon: Database,
  },
  {
    service: "Apache Kafka",
    purpose: "Real-Time Event Streaming",
    icon: Radio,
  },
  {
    service: "Apache Flink",
    purpose: "Distributed Compute Engine",
    icon: Workflow,
  },
  {
    service: "Apache Iceberg",
    purpose: "Open Lakehouse Storage",
    icon: Boxes,
  },
  {
    service: "Apache Nessie",
    purpose: "Versioned Catalog",
    icon: GitBranch,
  },
  {
    service: "MinIO / Amazon S3",
    purpose: "Object Storage",
    icon: HardDrive,
  },
];

const rights = [
  {
    title: "Access",
    icon: UserCheck,
    description:
      "You may request access to the personal information associated with your Seg Forge account, subject to applicable laws and verification requirements.",
  },
  {
    title: "Correction",
    icon: Pencil,
    description:
      "You may update or correct inaccurate account information directly within the platform or by contacting our support team.",
  },
  {
    title: "Deletion",
    icon: Trash2,
    description:
      "You may request deletion of your account and associated metadata. Customer-owned data remains under your administrative control.",
  },
  {
    title: "Export",
    icon: Download,
    description:
      "Workspace metadata and account information can be exported where supported, enabling portability and compliance with applicable regulations.",
  },
  {
    title: "Restrict Processing",
    icon: Lock,
    description:
      "Where applicable, you may request restrictions on how certain personal information is processed in accordance with regional privacy laws.",
  },
];

const PrivacyRights = () => {
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

      <div className="absolute right-0 top-24 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* ==============================
            Header
        ============================== */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            <ShieldCheck className="h-4 w-4" />
            Privacy & Data Rights
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Third-Party Services &
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Your Privacy Rights
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Seg Forge integrates with trusted open technologies and enterprise
            services while providing customers with transparency and control
            over their personal information.
          </p>
        </motion.div>

        {/* ==============================
            Third Party Services
        ============================== */}

        <div className="mt-20">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-cyan-500" />

            <div>
              <h3 className="text-3xl font-bold text-slate-900">
                Third-Party Services
              </h3>

              <p className="mt-2 text-slate-600">
                Seg Forge relies on the following technologies to deliver core
                platform capabilities.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full">
              <thead className="bg-slate-50">
                <tr>
                  <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wide text-slate-600">
                    Service
                  </th>

                  <th className="px-8 py-5 text-left text-sm font-semibold uppercase tracking-wide text-slate-600">
                    Purpose
                  </th>
                </tr>
              </thead>

              <tbody>
                {thirdPartyServices.map((service) => (
                  <tr
                    key={service.service}
                    className="border-t border-slate-200 transition hover:bg-cyan-50/40"
                  >
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                          <service.icon className="h-6 w-6 text-cyan-600" />
                        </div>

                        <span className="font-semibold text-slate-900">
                          {service.service}
                        </span>
                      </div>
                    </td>

                    <td className="px-8 py-6 text-slate-600">
                      {service.purpose}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ==============================
            Your Rights
        ============================== */}

        <div className="mt-24">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-12 w-1 rounded-full bg-cyan-500" />

            <div>
              <h3 className="text-3xl font-bold text-slate-900">Your Rights</h3>

              <p className="mt-2 text-slate-600">
                Depending on your jurisdiction, you may have the following
                privacy rights regarding your personal information.
              </p>
            </div>
          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {rights.map((right, index) => (
              <motion.div
                key={right.title}
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
                  <right.icon className="h-7 w-7 text-cyan-600" />
                </div>

                <h4 className="mt-6 text-2xl font-bold text-slate-900">
                  {right.title}
                </h4>

                <p className="mt-4 leading-8 text-slate-600">
                  {right.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Rights Callout */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 rounded-[32px] border border-cyan-200 bg-gradient-to-r from-cyan-500 to-blue-600 p-10 text-white"
          >
            <div className="flex items-start gap-5">
              <ShieldCheck className="mt-1 h-10 w-10 shrink-0" />

              <div>
                <h3 className="text-3xl font-bold">Exercising Your Rights</h3>

                <p className="mt-5 max-w-4xl text-lg leading-8 text-cyan-100">
                  Requests related to access, correction, deletion, export, or
                  restriction of processing can be submitted through your Seg
                  Forge account or by contacting our privacy team. We will
                  review and respond to verified requests in accordance with
                  applicable privacy regulations, including GDPR, CCPA, and
                  other regional data protection laws.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyRights;
