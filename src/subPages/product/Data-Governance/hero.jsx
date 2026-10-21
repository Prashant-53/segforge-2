import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BrainCircuit, CheckCircle2, Shield } from "lucide-react";

import Hero from "../../../assets/Products/AI/aihero.webp";

const DataGovernanceHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-36 pb-24">
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

      {/* Glow */}

      <div className="absolute left-1/2 top-20 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* Left */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Shield className="h-4 w-4" />
              Data Governance
            </div>

            <h1 className="mt-8 text-4xl font-bold leading-none text--900 lg:text-5xl">
              Turn your data into a trusted foundation for
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                AI and analytics.{" "}
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-md leading-6 text-slate-600">
              Bring data context, relationships, definitions, and governance
              into one place. SegForge helps teams understand their data,
              establish trusted relationships, and give AI agents the context
              they need to work with the right data.{" "}
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-cyan-500 px-7 py-3 font-semibold text-slate-900 transition-colors duration-300 hover:text-white"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

                <span className="relative z-10 flex items-center gap-2">
                  Bring Governance to your Data{" "}
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0   bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden  border border-slate-200 bg-white shadow-2xl">
              <img
                src={Hero}
                alt="Seg Forge MLOps Platform"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DataGovernanceHero;
