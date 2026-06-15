import React from "react";
import { motion } from "framer-motion";
import {
  Workflow,
  Radio,
  Database,
  BarChart3,
  Brain,
  ShieldCheck,
  ArrowRight,
  Layers,
} from "lucide-react";
import ProblemImg from "../../assets/problem.png";

const fragmentedTools = [
  {
    title: "ETL Tool",
    icon: Workflow,
  },
  {
    title: "CDC Tool",
    icon: Radio,
  },
  {
    title: "Warehouse",
    icon: Database,
  },
  {
    title: "BI Tool",
    icon: BarChart3,
  },
  {
    title: "MLOps",
    icon: Brain,
  },
  {
    title: "Governance",
    icon: ShieldCheck,
  },
];

const WhySegForgeSection = () => {
  return (
    <section className="py-8 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            Why We Started Building SegForge
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Data teams spend too much
            <br />
            time managing tools.
          </h2>

          <p className="mt-8 text-md text-slate-600 leading-relaxed">
            Today's data platforms are often assembled from disconnected
            products for ingestion, transformation, storage, orchestration,
            analytics, and machine learning.
          </p>

          <p className="mt-4 text-md text-slate-600 leading-relaxed">
            While each tool may solve a specific problem well, connecting them
            together creates operational overhead, governance gaps, and growing
            infrastructure complexity.
          </p>
        </div>

        {/* CALLOUT */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="w-full max-w-4xl mx-auto px-4"
        >
          <img
            src={ProblemImg}
            className="w-full h-auto"
            alt="fragmented data stack"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhySegForgeSection;
