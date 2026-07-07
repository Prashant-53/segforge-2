import React from "react";
import { motion } from "framer-motion";
import { Shield, KeyRound, Lock, Building2, CheckCircle2 } from "lucide-react";

const securityFeatures = [
  "JWT Authentication",
  "Azure AD SSO",
  "Workspace Isolation",
  "RBAC Authorization",
  "Encrypted Credentials",
  "HTTPS Support",
];

const AuthenticationSecurity = () => {
  return (
    <section className="py-32 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="max-w-3xl">
          <span className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            Authentication & Security
          </span>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Secure every API request.
          </h2>

          <p className="mt-6 text-xl text-slate-600 leading-relaxed">
            Seg Forge uses JWT authentication, enterprise SSO, API keys,
            workspace isolation, and RBAC authorization to secure every
            interaction with your data platform.
          </p>
        </div>

        {/* Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          {/* JWT */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center">
                <Lock className="w-6 h-6 text-cyan-600" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                JWT Authentication
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Obtain a JWT token via the authentication endpoint and send it
                in the Authorization header for all subsequent requests.
              </p>
            </div>

            <div className="bg-slate-950 p-6 text-sm overflow-x-auto">
              <pre>
                <code className="text-slate-300">
                  {`POST /api/auth/login

{
  "email": "user@company.com",
  "password": "********"
}

Authorization:
Bearer <jwt-token>
`}
                </code>
              </pre>
            </div>
          </motion.div>

          {/* Azure */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white shadow-sm p-8"
          >
            <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center">
              <Building2 className="w-6 h-6 text-cyan-600" />
            </div>

            <h3 className="mt-6 text-2xl font-semibold text-slate-900">
              Azure AD SSO
            </h3>

            <p className="mt-4 text-slate-600 leading-7">
              Enterprise single sign-on using the OAuth2 Authorization Code
              flow.
            </p>

            <div className="mt-8 space-y-4">
              {[
                "OAuth2 Authorization Code Flow",
                "Azure AD Authentication",
                "JWT Issuance",
                "Authenticated API Access",
              ].map((step, index) => (
                <div key={step} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full bg-cyan-50 text-cyan-600 flex items-center justify-center text-sm font-semibold">
                    {index + 1}
                  </div>

                  <div className="text-slate-700">{step}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* API Keys */}

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white shadow-sm overflow-hidden"
          >
            <div className="p-8">
              <div className="w-12 h-12 rounded-2xl bg-cyan-50 flex items-center justify-center">
                <KeyRound className="w-6 h-6 text-cyan-600" />
              </div>

              <h3 className="mt-6 text-2xl font-semibold text-slate-900">
                API Keys
              </h3>

              <p className="mt-4 text-slate-600 leading-7">
                Workspace-scoped credentials designed for service-to-service
                communication and automation workloads.
              </p>

              <ul className="mt-8 space-y-3 text-slate-700">
                <li>• Workspace-scoped access</li>
                <li>• Revocable at any time</li>
                <li>• Service-to-service authentication</li>
                <li>• Compatible with CI/CD pipelines</li>
              </ul>
            </div>

            <div className="bg-slate-950 p-6 text-sm overflow-x-auto">
              <pre>
                <code className="text-slate-300">
                  {`Authorization:
Bearer sgf_api_xxxxxxxxxxxxxx`}
                </code>
              </pre>
            </div>
          </motion.div>
        </div>

        {/* Security Features */}

        <div className="mt-24">
          <h3 className="text-3xl font-bold text-slate-900 mb-10">
            Security Features
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {securityFeatures.map((feature) => (
              <div
                key={feature}
                className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 hover:border-cyan-200 transition"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />

                <span className="font-medium text-slate-700">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Architecture */}

        <div className="mt-24 rounded-[32px] bg-slate-950 p-10 overflow-hidden">
          <h3 className="text-2xl font-semibold text-white mb-8">
            Request Authorization Flow
          </h3>

          <pre className="text-slate-300 leading-8 overflow-x-auto">
            {`Client Request
      │
      ▼
JWT Validation
      │
      ▼
User Lookup
      │
      ▼
Workspace Scope Check
      │
      ▼
RBAC Permission Check
      │
      ▼
Route Handler
`}
          </pre>
        </div>
      </div>
    </section>
  );
};

export default AuthenticationSecurity;
