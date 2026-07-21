import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Lock,
  KeyRound,
  Database,
  Globe,
  Wifi,
  Fingerprint,
  Shield,
  Users,
  Server,
  FileText,
  Layers3,
} from "lucide-react";

const securitySections = [
  {
    title: "Encryption at Rest",
    icon: Lock,
    description:
      "Sensitive information stored by Seg Forge is encrypted using industry-standard encryption technologies to protect credentials and platform secrets.",
    items: ["Fernet Encryption", "Encrypted Credentials", "Secrets Management"],
  },
  {
    title: "Encryption in Transit",
    icon: Globe,
    description:
      "All communication between clients, APIs, and platform services is secured using encrypted network protocols.",
    items: ["HTTPS", "TLS Encryption", "SSL Certificates"],
  },
  {
    title: "Authentication",
    icon: Fingerprint,
    description:
      "Seg Forge supports modern enterprise authentication standards with secure identity management.",
    items: [
      "JWT Authentication",
      "Azure AD SSO",
      "OpenID Connect (OIDC)",
      "Role-Based Access Control (RBAC)",
    ],
  },
  {
    title: "Infrastructure Security",
    icon: Shield,
    description:
      "Enterprise-grade operational controls help secure every deployment regardless of cloud or self-hosted environments.",
    items: [
      "Workspace Isolation",
      "Audit Logs",
      "Secret Management",
      "Least-Privilege Access",
    ],
  },
];

const featureCards = [
  {
    icon: Database,
    title: "Encrypted Storage",
    description:
      "Credentials, API secrets, and sensitive configuration values are encrypted before being stored.",
  },
  {
    icon: Server,
    title: "Enterprise Infrastructure",
    description:
      "Security controls apply consistently across cloud, Docker, Kubernetes, and self-hosted deployments.",
  },
  {
    icon: Users,
    title: "Identity & Access",
    description:
      "Granular workspace permissions and enterprise authentication protect every API request.",
  },
  {
    icon: FileText,
    title: "Audit & Compliance",
    description:
      "Security events, authentication activity, and administrative operations are fully auditable.",
  },
];

const TechnicalSecurity = () => {
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

      <div className="absolute left-0 top-32 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[170px]" />

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
            Technical Security
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Enterprise Security by Design
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Security is integrated throughout the Seg Forge platform—from
            authentication and encrypted communications to workspace isolation,
            credential management, and infrastructure security controls.
          </p>
        </motion.div>

        {/* Security Sections */}

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {securitySections.map((section, index) => (
            <motion.div
              key={section.title}
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
                <section.icon className="h-7 w-7 text-cyan-600" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {section.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {section.description}
              </p>

              <div className="mt-8 space-y-3">
                {section.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:border-cyan-300"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />

                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Security Overview */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-[32px] border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-white"
        >
          <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] p-10 lg:p-14">
            {/* Left */}

            <div>
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500">
                <Layers3 className="h-8 w-8 text-white" />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">
                Layered Security Architecture
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                Seg Forge applies multiple layers of security controls across
                identity, networking, storage, infrastructure, and platform
                services to protect customer environments and sensitive
                information.
              </p>

              <div className="mt-8 rounded-2xl bg-slate-900 p-6 text-white">
                <div className="space-y-3 font-mono text-sm">
                  <div>Identity</div>
                  <div className="pl-5 text-cyan-400">↓</div>

                  <div>Authentication</div>
                  <div className="pl-5 text-cyan-400">↓</div>

                  <div>Authorization (RBAC)</div>
                  <div className="pl-5 text-cyan-400">↓</div>

                  <div>Encrypted Platform Services</div>
                  <div className="pl-5 text-cyan-400">↓</div>

                  <div>Secure Data Infrastructure</div>
                </div>
              </div>
            </div>

            {/* Right */}

            <div className="grid gap-6 sm:grid-cols-2">
              {featureCards.map((card) => (
                <div
                  key={card.title}
                  className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-cyan-300 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                    <card.icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <h4 className="mt-5 text-xl font-semibold text-slate-900">
                    {card.title}
                  </h4>

                  <p className="mt-3 leading-7 text-slate-600">
                    {card.description}
                  </p>
                </div>
              ))}

              <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-500 to-blue-600 p-8 text-white sm:col-span-2">
                <div className="flex items-center gap-3">
                  <Wifi className="h-7 w-7" />
                  <h3 className="text-2xl font-bold">Secure by Default</h3>
                </div>

                <p className="mt-5 leading-8 text-cyan-100">
                  Every Seg Forge deployment is designed around secure defaults,
                  including encrypted communications, protected credentials,
                  workspace isolation, enterprise authentication, and auditable
                  operational controls that help organizations meet modern
                  security and compliance requirements.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  {[
                    "HTTPS",
                    "TLS",
                    "JWT",
                    "Azure AD",
                    "OIDC",
                    "RBAC",
                    "Audit Logs",
                    "Workspace Isolation",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSecurity;
