import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

const PrivacyPolicyHeader = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-36 pb-24">
      {/* Background Grid */}

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

      {/* Glow */}

      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[160px]" />

      <div className="relative mx-auto max-w-5xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center"
        >
          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            <ShieldCheck className="h-4 w-4" />
            Legal Documentation
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-bold tracking-tight text-slate-900 sm:text-6xl lg:text-7xl">
            Seg Forge
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Privacy Policy
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-slate-600">
            Your privacy matters to us. This Privacy Policy explains how Seg
            Forge collects, uses, stores, and protects your information when you
            use our products, services, website, and documentation.
          </p>

          {/* Metadata */}

          <div className="mx-auto mt-12 flex flex-col items-center justify-center gap-4 rounded-2xl border border-slate-200 bg-white px-8 py-6 shadow-sm sm:flex-row sm:gap-12">
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Last Updated
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-900">
                July 2026
              </p>
            </div>

            <div className="hidden h-10 w-px bg-slate-200 sm:block" />

            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Effective Date
              </p>
              <p className="mt-1 text-lg font-semibold text-slate-900">
                July 13, 2026
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyPolicyHeader;
