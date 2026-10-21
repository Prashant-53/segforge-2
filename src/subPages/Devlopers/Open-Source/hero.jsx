import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { FaGithub } from "react-icons/fa";

import Hero from "../../../assets/Devlopers/Open-Source/hero.webp";

const OpenSourceHero = () => {
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

      {/* Background Glow */}

      <div className="absolute left-1/2 top-20 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <FaGithub className="h-4 w-4" />
              Open Source Foundation
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-4xl font-bold leading-none text-slate-900 lg:text-5xl">
              Open by Design.
              <br />
              Built on
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Industry Standards.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-md leading-6 text-slate-600">
              Seg Forge is built as an orchestration layer over proven
              open-source technologies including Apache Flink, Apache Iceberg,
              Apache Kafka, Project Nessie, and MLflow. Your data remains
              portable, transparent, and fully accessible without proprietary
              lock-in.
            </p>

            {/* CTA */}

            <div className="mt-12">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-cyan-500 px-7 py-3 font-semibold text-slate-900 transition-colors duration-300 hover:text-white"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

                <span className="relative z-10 flex items-center gap-2">
                  Deploy the Open Stack
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-cyan-400/10 blur-3xl" />

            <div className="relative overflow-hidden border border-slate-200 bg-white shadow-2xl">
              <img
                src={Hero}
                alt="Seg Forge Open Source Architecture"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default OpenSourceHero;
