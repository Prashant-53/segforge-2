import React from "react";
import { motion } from "framer-motion";
import {
  Layers3,
  Wrench,
  ShieldAlert,
  ServerCrash,
  Workflow,
  Database,
  BarChart3,
  ArrowDown,
} from "lucide-react";
import CostImg from "../../assets/cost.png";
const problems = [
  {
    icon: Layers3,
    title: "Operational Complexity",
    description:
      "Multiple interfaces, contracts, authentication systems, and deployment models create unnecessary overhead for data teams.",
  },
  {
    icon: Wrench,
    title: "Engineering Tax",
    description:
      "Teams spend valuable time maintaining integrations and infrastructure instead of building data products and analytics.",
  },
  {
    icon: ShieldAlert,
    title: "Governance Blind Spots",
    description:
      "Lineage, permissions, and compliance often stop at tool boundaries, making end-to-end visibility difficult.",
  },
  {
    icon: ServerCrash,
    title: "Infrastructure Sprawl",
    description:
      "Organizations end up operating platforms, services, and integrations rather than focusing on business outcomes.",
  },
];

const CostOfFragmentation = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-6">
            The Cost of Fragmentation
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            The real cost isn't
            <br />
            the software.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              {" "}
              It's the glue.
            </span>
          </h2>

          <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Most organizations don't struggle because they lack tools. They
            struggle because every tool introduces another integration, another
            dependency, and another operational responsibility.
          </p>
        </motion.div>

        {/* Pain Points */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto px-4"
        >
          {" "}
          <img
            src={CostImg}
            alt="The Cost of Fragmentation"
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default CostOfFragmentation;
