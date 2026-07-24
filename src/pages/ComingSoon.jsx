import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Construction, ArrowLeft, Clock3, Sparkles } from "lucide-react";

const ComingSoon = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white">
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
            linear-gradient(to right,#18D0BB 1px,transparent 1px),
            linear-gradient(to bottom,#18D0BB 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Background Glow */}

      <div className="absolute left-1/2 top-32 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto flex min-h-screen max-w-4xl items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full rounded-[32px] border border-slate-200 bg-white p-12 text-center shadow-[0_30px_80px_rgba(15,23,42,0.08)]"
        >
          {/* Icon */}

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-cyan-500 to-cyan-600 shadow-lg shadow-cyan-500/20">
            <Construction className="h-10 w-10 text-white" />
          </div>

          {/* Badge */}

          <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            <Sparkles className="h-4 w-4" />
            Feature In Development
          </div>

          {/* Heading */}

          <h1 className="mt-8 text-5xl font-bold text-slate-900">
            This Experience
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Is Coming Soon.
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-slate-600">
            We're actively building this section of the Seg Forge platform. It
            will showcase enterprise capabilities, architecture, documentation,
            and product experiences consistent with the rest of the platform.
          </p>

          {/* Info */}

          <div className="mt-10 rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="flex items-center justify-center gap-3">
              <Clock3 className="h-6 w-6 text-cyan-600" />

              <p className="text-lg font-semibold text-slate-900">
                Currently Under Development
              </p>
            </div>

            <p className="mt-4 text-slate-600">
              Our engineering team is working to deliver the same
              enterprise-grade experience available across the rest of the Seg
              Forge Site.
            </p>
          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-900 px-7 py-3 font-semibold text-slate-900 transition-colors duration-300 hover:text-white"
            >
              <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

              <span className="relative z-10 flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Back to Homepage
              </span>
            </Link>

            <Link
              to="/contact"
              className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-900 px-7 py-3 font-semibold text-slate-900 transition-colors duration-300 hover:text-white"
            >
              <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

              <span className="relative z-10">Contact Our Team</span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ComingSoon;
