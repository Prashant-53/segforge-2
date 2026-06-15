import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Building2,
  KeyRound,
  Users,
  AppWindow,
  Server,
} from "lucide-react";

const features = [
  "Azure AD SSO",
  "JWT Authentication",
  "API Keys",
  "Token Revocation",
  "Secure Service Access",
];

const IdentityAuthenticationSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Identity & Authentication
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Authenticate users through trusted identity providers.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Allow employees to access SegForge using their existing corporate
              credentials.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Centralized identity management reduces administrative overhead
              while ensuring secure authentication across teams, applications,
              and services.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />

                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Header */}

              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-900">
                  Enterprise Identity Flow
                </h3>
              </div>

              <div className="p-6 sm:p-8">
                {/* Azure AD */}

                <div className="flex justify-center">
                  <div className="w-full max-w-[280px] rounded-3xl border border-slate-200 bg-slate-50 p-6 text-center">
                    <Building2 className="w-8 h-8 text-cyan-600 mx-auto mb-3" />

                    <h4 className="font-semibold text-slate-900">Azure AD</h4>

                    <p className="text-sm text-slate-500 mt-2">
                      Enterprise Identity Provider
                    </p>
                  </div>
                </div>

                {/* Connector */}

                <div className="flex justify-center py-5">
                  <div className="w-px h-10 bg-cyan-300" />
                </div>

                {/* Identity Layer */}

                <div className="flex justify-center">
                  <div className="w-full max-w-[340px] rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 text-center">
                    <KeyRound className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                    <h4 className="font-semibold text-slate-900 text-lg">
                      Identity Layer
                    </h4>

                    <p className="text-sm text-slate-500 mt-2">
                      SSO • JWT • API Keys • Access Tokens
                    </p>
                  </div>
                </div>

                {/* Connector */}

                <div className="flex justify-center py-5">
                  <div className="w-px h-10 bg-cyan-300" />
                </div>

                {/* Consumers */}

                <div className="grid grid-cols-3 gap-4">
                  <ConsumerCard icon={Users} title="Users" />

                  <ConsumerCard icon={AppWindow} title="Applications" />

                  <ConsumerCard icon={Server} title="Services" />
                </div>

                {/* Status */}

                <div className="mt-8 flex justify-center">
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 text-green-700 text-sm font-medium">
                    <ShieldCheck className="w-4 h-4" />
                    Authenticated & Authorized
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ConsumerCard = ({ icon: Icon, title }) => (
  <div className="border border-slate-200 rounded-2xl p-5 text-center bg-white">
    <Icon className="w-6 h-6 text-cyan-600 mx-auto mb-3" />

    <h4 className="font-medium text-slate-900">{title}</h4>
  </div>
);

export default IdentityAuthenticationSection;
