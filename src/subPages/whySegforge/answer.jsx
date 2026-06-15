import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Workflow,
  Radio,
  Search,
  BarChart3,
  Brain,
  Shield,
  Eye,
  Layers,
} from "lucide-react";
import SolutionImg from "../../assets/solution.png";

const platformServices = [
  { title: "Connections", icon: Database },
  { title: "Pipelines", icon: Workflow },
  { title: "CDC", icon: Radio },
  { title: "Catalog", icon: Search },
  { title: "Analytics", icon: BarChart3 },
  { title: "MLOps", icon: Brain },
];

const platformControls = [
  {
    title: "Shared Authentication",
    icon: Shield,
  },
  {
    title: "Shared Governance",
    icon: Layers,
  },
  {
    title: "Shared Observability",
    icon: Eye,
  },
];

const UnifiedAnswer = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            The Unified Answer
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            One platform.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              Total control.
            </span>
          </h2>

          <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Instead of stitching together disconnected tools, SegForge brings
            data movement, storage, analytics, governance, and machine learning
            into a single workspace.
          </p>

          <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Connections, pipelines, CDC, notebooks, and models all operate
            within the same environment with shared authentication, governance,
            and observability.
          </p>
        </motion.div>

        {/* Architecture */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto px-4"
        >
          <img
            src={SolutionImg}
            className="w-full h-auto"
            alt="Solution Image"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default UnifiedAnswer;
