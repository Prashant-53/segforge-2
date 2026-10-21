import React from "react";
import { motion } from "framer-motion";
import { Mail, ShieldCheck, LifeBuoy, ArrowRight } from "lucide-react";

const PrivacyContact = () => {
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

      <div className="absolute left-1/2 top-20 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            <Mail className="h-4 w-4" />
            Contact Us
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Questions About
            <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Privacy or Security?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Our team is here to help with privacy inquiries, security concerns,
            and enterprise support. Reach out to the appropriate team below and
            we'll respond as quickly as possible.
          </p>
        </motion.div>

        {/* Bottom CTA */}

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 rounded-[32px] border border-cyan-200 bg-gradient-to-r from-cyan-500 to-blue-600 p-10 text-center text-white"
        >
          <h3 className="text-3xl font-bold">We're Here to Help</h3>

          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-cyan-100">
            Whether you have questions about data privacy, enterprise security,
            compliance, or platform support, our specialists are ready to assist
            you. We strive to respond to all inquiries as quickly as possible.
          </p>

          <a
            href="/contact"
            className="group mt-10 inline-flex items-center justify-center overflow-hidden rounded-full border border-white/30 bg-white/10 px-8 py-4 font-semibold backdrop-blur-sm transition hover:border-white"
          >
            <span className="absolute inset-y-0 left-0 w-0 bg-white transition-all duration-300 group-hover:w-full" />

            <span className="relative z-10 flex items-center gap-2 text-white group-hover:text-cyan-700">
              Contact the Seg Forge Team
              <ArrowRight className="h-5 w-5" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default PrivacyContact;
