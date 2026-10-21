import React from "react";
import { motion } from "framer-motion";
import {
  Bot,
  BrainCircuit,
  SlidersHorizontal,
  ArrowUpRight,
  Sparkles,
  Network,
  Layers3,
} from "lucide-react";

const features = [
  {
    number: "01",
    title: "AI Agents",
    description:
      "Create AI-powered experiences designed to support tasks, interact with information, and assist users across workflows.",
    icon: Bot,
    accent: "from-cyan-400 to-blue-500",
    glow: "group-hover:shadow-cyan-500/10",
  },
  {
    number: "02",
    title: "LLM Hub",
    description:
      "Bring language model access into your AI environment, providing a central place to work with the models that power your applications.",
    icon: BrainCircuit,
    accent: "from-blue-400 to-indigo-500",
    glow: "group-hover:shadow-blue-500/10",
  },
  {
    number: "03",
    title: "Model Tuning",
    description:
      "Adapt model configurations to your requirements and use cases, helping align AI behavior with your intended applications.",
    icon: SlidersHorizontal,
    accent: "from-indigo-400 to-violet-500",
    glow: "group-hover:shadow-indigo-500/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function AIAgentsSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-36 pb-12">
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(34,211,238,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.5) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
            maskImage:
              "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
          }}
        />

        <div className="absolute -left-40 top-20 h-96 w-96 rounded-full bg-cyan-500/10 blur-[130px]" />

        <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-blue-600/10 blur-[130px]" />
      </div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mx-auto mb-8 max-w-4xl text-center "
        >
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            <Sparkles size={15} />
            AI Agents · LLM Hub · Model Tuning
          </div>

          {/* Heading */}
          <h2 className="text-4xl mt-4 font-semibold leading-tight tracking-tight text-slate-900 ">
            Build intelligent AI experiences with models that fit your needs.
          </h2>

          {/* {/* Description*/}

          <p className="mx-auto mt-6 max-w-3xl text-base leading-7 text-slate-600 ">
            Bring AI agents, language models, and model configuration together
            in one platform. SegForge helps teams work with AI capabilities
            while shaping model behavior for their use cases.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:gap-6"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={feature.number}
                variants={itemVariants}
                className={`group relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.035] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/30 hover:bg-white/[0.055] hover:shadow-2xl sm:p-8 ${feature.glow}`}
              >
                {/* Card glow */}
                <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-cyan-400/[0.04] blur-3xl transition-all duration-500 group-hover:bg-cyan-400/[0.10]" />

                {/* Card header */}
                <div className="relative mb-10 flex items-center justify-between">
                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${feature.accent} shadow-lg shadow-black/20`}
                  >
                    <Icon size={27} className="text-white" strokeWidth={1.8} />
                  </div>
                </div>

                {/* Card content */}
                <div className="relative flex flex-1 flex-col">
                  <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                    {feature.title}
                  </h3>

                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
