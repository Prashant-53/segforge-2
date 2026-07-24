import React from "react";
import { motion } from "framer-motion";
import { GitBranch, Code2, FlaskConical, ShieldCheck } from "lucide-react";
import FetauresIMG from "../../../assets/Products/ETL/features.webp";
const features = [
  {
    icon: GitBranch,
    title: "Automatic Schema Propagation",
    description:
      "Columns, metadata, and schema changes automatically propagate through connected nodes, eliminating repetitive manual mapping while ensuring downstream consistency.",
  },
  {
    icon: Code2,
    title: "Visual + Code Duality",
    description:
      "Every visual pipeline is translated into optimized Apache Flink SQL, giving engineers the flexibility of drag-and-drop development with production-grade generated code.",
  },
  {
    icon: FlaskConical,
    title: "Per-Node Testing",
    description:
      "Instantly preview transformed records at any stage of the pipeline without executing the complete workflow, dramatically reducing debugging time.",
  },
  {
    icon: ShieldCheck,
    title: "Instant Validation",
    description:
      "Built-in validation continuously detects configuration issues, schema mismatches, missing connections, and runtime errors before deployment.",
  },
];

const IntelligentEngineering = () => {
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

      <div className="absolute right-1/4 top-24 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-2xl">
              <img
                src={FetauresIMG}
                alt="Intelligent Engineering Features"
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
            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Intelligent Engineering
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Automation That Eliminates Manual Data Engineering
            </h2>

            <p className="mt-6 text-md leading-6 text-slate-600">
              ETL Studio continuously automates repetitive engineering tasks,
              allowing teams to focus on building reliable data products instead
              of managing schemas, debugging pipelines, or writing boilerplate
              SQL.
            </p>

            <div className="mt-12 space-y-8">
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

export default IntelligentEngineering;
