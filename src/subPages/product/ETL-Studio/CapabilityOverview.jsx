import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Workflow,
  Server,
  BrainCircuit,
  Sparkles,
  Zap,
  ShieldCheck,
} from "lucide-react";

const capabilities = [
  {
    title: "Sources",
    icon: Database,
  },
  {
    title: "Transformations",
    icon: Workflow,
  },
  {
    title: "Destinations",
    icon: Server,
  },
  {
    title: "Machine Learning",
    icon: BrainCircuit,
  },
  {
    title: "AI Intelligence",
    icon: Sparkles,
  },
  {
    title: "Automation & Integrations",
    icon: Zap,
  },
  {
    title: "Data Governance",
    icon: ShieldCheck,
  },
];

const CapabilityCard = ({ capability, index }) => {
  const Icon = capability.icon;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      className="group flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-lg sm:px-5 sm:py-4"
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-50 transition-colors duration-300 group-hover:bg-cyan-100">
        <Icon className="h-4 w-4 text-cyan-600" />
      </div>

      <span className="whitespace-nowrap text-sm font-semibold text-slate-800">
        {capability.title}
      </span>
    </motion.div>
  );
};

const CapabilityOverview = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-20 sm:py-24 lg:py-28">
      {/* Background glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            ETL Studio Capabilities
          </div>

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-4xl">
            More than ETL.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-md sm:leading-8">
            One workspace to build, transform, enrich, automate, and govern your
            data workflows.
          </p>
        </motion.div>

        {/* Capability system */}
        <div className="relative mx-auto mt-16 max-w-6xl">
          {/* Desktop layout */}
          <div className="hidden lg:block">
            {/* Top capabilities */}
            <div className="flex items-center justify-center gap-5">
              <CapabilityCard capability={capabilities[0]} index={0} />

              <CapabilityCard capability={capabilities[1]} index={1} />

              <CapabilityCard capability={capabilities[2]} index={2} />
            </div>

            {/* Connecting line */}
            <div className="mx-auto h-12 w-px bg-gradient-to-b from-cyan-200 to-cyan-400" />

            {/* Main pipeline */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative mx-auto flex max-w-md items-center justify-center rounded-2xl border border-cyan-200 bg-white px-8 py-7 shadow-xl shadow-cyan-500/10"
            >
              {/* Glow */}
              <div className="absolute inset-0 -z-10 rounded-2xl bg-cyan-400/10 blur-xl" />

              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                  <Workflow className="h-6 w-6 text-cyan-600" />
                </div>

                <div>
                  <p className="text-xs font-medium uppercase tracking-wider text-cyan-600">
                    SegForge
                  </p>

                  <h3 className="mt-1 text-xl font-bold text-slate-900">
                    Intelligent Data Workflows
                  </h3>
                </div>
              </div>
            </motion.div>

            {/* Connecting line */}
            <div className="mx-auto h-12 w-px bg-gradient-to-b from-cyan-400 to-cyan-200" />

            {/* Bottom capabilities */}
            <div className="flex items-center justify-center gap-5">
              <CapabilityCard capability={capabilities[3]} index={3} />

              <CapabilityCard capability={capabilities[4]} index={4} />

              <CapabilityCard capability={capabilities[5]} index={5} />

              <CapabilityCard capability={capabilities[6]} index={6} />
            </div>
          </div>

          {/* Tablet layout */}
          <div className="hidden sm:block lg:hidden">
            <div className="grid grid-cols-2 gap-4">
              {capabilities.map((capability, index) => (
                <CapabilityCard
                  key={capability.title}
                  capability={capability}
                  index={index}
                />
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto mt-8 max-w-md rounded-2xl border border-cyan-200 bg-white p-6 text-center shadow-lg shadow-cyan-500/10"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                <Workflow className="h-6 w-6 text-cyan-600" />
              </div>

              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-cyan-600">
                SegForge
              </p>

              <h3 className="mt-1 text-lg font-bold text-slate-900">
                Intelligent Data Workflows
              </h3>
            </motion.div>
          </div>

          {/* Mobile layout */}
          <div className="sm:hidden">
            {/* Central concept */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mx-auto max-w-sm rounded-2xl border border-cyan-200 bg-white p-6 text-center shadow-lg shadow-cyan-500/10"
            >
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                <Workflow className="h-6 w-6 text-cyan-600" />
              </div>

              <p className="mt-3 text-xs font-medium uppercase tracking-wider text-cyan-600">
                SegForge
              </p>

              <h3 className="mt-1 text-lg font-bold text-slate-900">
                Intelligent Data Workflows
              </h3>
            </motion.div>

            {/* Connector */}
            <div className="mx-auto h-8 w-px bg-gradient-to-b from-cyan-400 to-cyan-200" />

            {/* Capability list */}
            <div className="grid grid-cols-1 gap-3">
              {capabilities.map((capability, index) => (
                <CapabilityCard
                  key={capability.title}
                  capability={capability}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CapabilityOverview;
