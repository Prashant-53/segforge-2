import { motion } from "framer-motion";
import {
  Network,
  DatabaseZap,
  PlugZap,
  ShieldCheck,
  Boxes,
  Route,
  SlidersHorizontal,
} from "lucide-react";

const capabilities = [
  {
    icon: Network,
    title: "AI Agent Orchestration",
    description:
      "Build, coordinate, and manage AI agents across enterprise workflows, tools, and data sources.",
  },
  {
    icon: DatabaseZap,
    title: "RAG Pipelines",
    description:
      "Build retrieval-augmented generation pipelines that connect AI applications to trusted enterprise data and knowledge.",
  },
  {
    icon: PlugZap,
    title: "MCP Connectors",
    description:
      "Connect AI agents to enterprise tools, systems, APIs, and data through flexible Model Context Protocol integrations.",
  },
  {
    icon: ShieldCheck,
    title: "AI Context & Governance",
    description:
      "Create a governed semantic layer using ontologies, knowledge graphs, and policies that give AI systems trusted enterprise context.",
  },
  {
    icon: Boxes,
    title: "LLM Hub",
    description:
      "Access and work with multiple language models through a centralized environment without locking your AI workloads to a single model.",
  },
  {
    icon: Route,
    title: "AI Gateways",
    description:
      "Control how applications and agents interact with AI models through centralized routing, access policies, and operational controls.",
  },
  {
    icon: SlidersHorizontal,
    title: "Model Tuning",
    description:
      "Adapt models to your organization's data, domain, and workload requirements while evaluating performance before deployment.",
  },
];

const Overview = () => {
  return (
    <section
      id="ai-capabilities-overview"
      className="relative block w-full overflow-hidden bg-white py-24 sm:py-28 lg:py-32"
    >
      {/* Background Glow */}

      <div className="absolute left-0 top-1/3 h-[450px] w-[450px] rounded-full bg-cyan-400/5 blur-[150px]" />

      <div className="absolute bottom-0 right-0 h-[450px] w-[450px] rounded-full bg-blue-500/5 blur-[160px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          {/* Badge */}

          <div className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            AI Capabilities
          </div>

          {/* Heading */}

          <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything you need to
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              build enterprise AI.
            </span>
          </h2>

          {/* Description */}

          <p className="mt-6 text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Seg Forge brings together the infrastructure, intelligence,
            connectivity, governance, and tooling required to build and operate
            AI applications on enterprise data.
          </p>
        </motion.div>

        {/* Capability Grid */}

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;

            return (
              <motion.div
                key={capability.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                className={`group relative rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl ${
                  index === 6 ? "lg:col-start-2" : ""
                }`}
              >
                {/* Icon */}

                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-50 transition-colors duration-300 group-hover:bg-cyan-100">
                  <Icon className="h-6 w-6 text-cyan-600" />
                </div>

                {/* Content */}

                <div className="mt-6">
                  <h3 className="text-xl font-semibold text-slate-900">
                    {capability.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                    {capability.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Overview;
