import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Server,
  Cloud,
  Lock,
  Database,
  FileCheck,
} from "lucide-react";

const PrivacyNotice = () => {
  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background Glow */}

      <div className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-white shadow-sm"
        >
          <div className="grid lg:grid-cols-[1.2fr_0.8fr]">
            {/* Left Content */}

            <div className="p-10 lg:p-14">
              <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-white px-4 py-2 text-sm font-medium text-cyan-700">
                <ShieldCheck className="h-4 w-4" />
                Important Notice
              </div>

              <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
                Privacy Policy Updates
              </h2>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
                We've recently updated our Privacy Policy to better reflect how
                Seg Forge protects customer data across enterprise deployments,
                cloud environments, APIs, and modern data infrastructure. These
                updates improve transparency around how information is
                collected, processed, secured, and governed throughout the
                platform.
              </p>

              <div className="mt-10 grid gap-4 sm:grid-cols-2">
                {[
                  {
                    icon: Lock,
                    title: "Security Improvements",
                    description:
                      "Enhanced encryption, credential protection, and infrastructure hardening.",
                  },
                  {
                    icon: Server,
                    title: "Enterprise Deployments",
                    description:
                      "Updated guidance for self-hosted, Kubernetes, and private cloud environments.",
                  },
                  {
                    icon: Cloud,
                    title: "Cloud & Self-Hosted",
                    description:
                      "Clarified how data is handled across managed cloud and on-premise installations.",
                  },
                  {
                    icon: Database,
                    title: "API Usage",
                    description:
                      "Expanded details on authentication, logging, API keys, and developer integrations.",
                  },
                  {
                    icon: FileCheck,
                    title: "Compliance",
                    description:
                      "Updated information covering privacy practices, security controls, and regulatory readiness.",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-white p-5 transition-all duration-300 hover:border-cyan-300 hover:shadow-md"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-50">
                      <item.icon className="h-5 w-5 text-cyan-600" />
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Visual */}

            <div className="relative flex items-center justify-center border-t border-slate-200 bg-gradient-to-br from-slate-50 to-cyan-50 p-10 lg:border-l lg:border-t-0">
              <div className="relative w-full max-w-sm rounded-3xl border border-slate-200 bg-white p-8 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-100">
                    <ShieldCheck className="h-7 w-7 text-cyan-600" />
                  </div>

                  <div>
                    <p className="text-sm font-medium text-slate-500">
                      Privacy Status
                    </p>

                    <h3 className="text-xl font-bold text-slate-900">
                      Updated
                    </h3>
                  </div>
                </div>

                <div className="mt-8 space-y-4">
                  {[
                    "Security Enhancements",
                    "Enterprise Deployment Policies",
                    "Cloud & Self-Hosted Privacy",
                    "Developer API Practices",
                    "Compliance & Governance",
                  ].map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3"
                    >
                      <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />

                      <span className="text-sm font-medium text-slate-700">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mt-8 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 p-5 text-white">
                  <p className="text-xs uppercase tracking-widest text-cyan-100">
                    Policy Version
                  </p>

                  <p className="mt-2 text-3xl font-bold">v2.0</p>

                  <p className="mt-2 text-sm text-cyan-100">
                    Effective July 13, 2026
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyNotice;
