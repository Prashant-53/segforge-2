import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, PlugZap, Database, Cloud, Workflow } from "lucide-react";

const IntegrationsHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-36 pb-28">
      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}

      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          x: [-40, 40, -40],
          y: [-20, 20, -20],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/4 top-0 h-[550px] w-[550px] rounded-full bg-cyan-400/10 blur-[160px]"
      />

      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          x: [40, -40, 40],
          y: [20, -20, 20],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-1/4 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-500/10 blur-[170px]"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-5 py-2 text-sm font-medium text-cyan-700">
            <PlugZap className="h-4 w-4" />
            Integrations
          </div>

          <h1 className="mt-8 text-5xl font-bold leading-tight text-slate-900 lg:text-6xl">
            Connect your
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              entire data ecosystem.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-md  text-slate-600">
            Seg Forge acts as the central integration hub for your modern data
            platform—connecting operational databases, cloud storage, streaming
            systems, analytics engines, orchestration platforms, and machine
            learning workflows through a single unified interface.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <button className="group relative overflow-hidden rounded-xl bg-slate-900 px-8 py-4 font-medium text-white transition">
              <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

              <span className="relative flex items-center gap-2">
                Explore Integrations
                <ArrowRight className="h-4 w-4" />
              </span>
            </button>

            <button className="group relative overflow-hidden rounded-xl border border-slate-300 bg-white px-8 py-4 font-medium text-slate-700 transition hover:border-cyan-400">
              <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-50 transition-transform duration-500 group-hover:scale-x-100" />

              <span className="relative">Request Integration</span>
            </button>
          </div>
        </motion.div>

        {/* Right Architecture */}

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-2xl">
            {/* Center */}

            <div className="flex justify-center">
              <div className="rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 px-8 py-6 text-center text-white shadow-lg">
                <Workflow className="mx-auto mb-3 h-10 w-10" />

                <h3 className="text-xl font-bold">Seg Forge</h3>

                <p className="mt-1 text-sm text-cyan-100">Integration Hub</p>
              </div>
            </div>

            {/* Top */}

            <div className="mt-10 grid grid-cols-3 gap-6">
              {["PostgreSQL", "MySQL", "SQL Server"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center"
                >
                  <Database className="mx-auto mb-3 h-7 w-7 text-cyan-600" />

                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            {/* Center Connector */}

            <div className="my-10 flex justify-center">
              <div className="h-14 w-px bg-gradient-to-b from-cyan-300 to-blue-500" />
            </div>

            {/* Bottom */}

            <div className="grid grid-cols-3 gap-6">
              {["Kafka", "Iceberg", "AWS / Azure"].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl border border-slate-200 bg-slate-50 p-5 text-center"
                >
                  <Cloud className="mx-auto mb-3 h-7 w-7 text-blue-600" />

                  <p className="font-medium text-slate-700">{item}</p>
                </div>
              ))}
            </div>

            {/* Connecting Lines */}

            <svg
              className="pointer-events-none absolute inset-0"
              viewBox="0 0 700 600"
            >
              <path
                d="M350 170 L350 290"
                stroke="#06b6d4"
                strokeWidth="2"
                strokeDasharray="8 8"
                fill="none"
              />

              <path
                d="M160 110 L350 170"
                stroke="#06b6d4"
                strokeWidth="2"
                opacity=".5"
              />

              <path
                d="M350 170 L540 110"
                stroke="#06b6d4"
                strokeWidth="2"
                opacity=".5"
              />

              <path
                d="M160 430 L350 340"
                stroke="#06b6d4"
                strokeWidth="2"
                opacity=".5"
              />

              <path
                d="M540 430 L350 340"
                stroke="#06b6d4"
                strokeWidth="2"
                opacity=".5"
              />
            </svg>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default IntegrationsHero;
