import React from "react";
import { motion } from "framer-motion";
import {
  PanelTop,
  Workflow,
  SlidersHorizontal,
  TerminalSquare,
  CheckCircle2,
} from "lucide-react";
import Pipeline from "../../../assets/Products/ETL/pipeline.png";
const features = [
  {
    icon: PanelTop,
    title: "Toolbar",
    description:
      "Manage every stage of pipeline development with one-click Save, Run, Schedule, Batch & Streaming execution modes, and an integrated SQL View for generated queries.",
  },
  {
    icon: Workflow,
    title: "Visual Canvas",
    description:
      "Build complex Directed Acyclic Graphs (DAGs) using drag-and-drop nodes. Connect sources, transformations, joins, filters, validations, and destinations while visualizing complete pipeline relationships.",
  },
  {
    icon: SlidersHorizontal,
    title: "Inspector Panel",
    description:
      "Configure every node through an intelligent property panel including column mapping, expressions, filters, runtime settings, validation rules, partitioning, and execution parameters.",
  },
  {
    icon: TerminalSquare,
    title: "Bottom Panel",
    description:
      "Monitor execution logs, inspect generated SQL, preview transformed data, analyze runtime statistics, review execution status, and troubleshoot errors in real time.",
  },
];

const ETLWorkspace = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right,#06b6d4 1px,transparent 1px),
              linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="absolute left-1/3 top-24 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden border border-slate-200 bg-white shadow-2xl">
              <img
                src={Pipeline}
                alt="Seg Forge ETL Studio"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Visual Workspace
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
              One Workspace.
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Every Pipeline.
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              ETL Studio provides a unified development environment where
              engineers can visually build, configure, test, execute, and
              monitor enterprise data pipelines. From drag-and-drop
              orchestration to generated SQL and execution monitoring,
              everything lives inside one collaborative workspace.
            </p>

            <div className="mt-12 space-y-7">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                    <feature.icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ETLWorkspace;
