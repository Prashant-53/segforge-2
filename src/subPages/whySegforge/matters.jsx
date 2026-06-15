import React from "react";
import { motion } from "framer-motion";
import {
  Cloud,
  Shield,
  Zap,
  Server,
  GitBranch,
  Eye,
  ClipboardCheck,
  Workflow,
  Radio,
  BarChart3,
  Brain,
} from "lucide-react";

const pillars = [
  {
    title: "Deploy Anywhere",
    icon: Cloud,
    description:
      "Run SegForge wherever your business operates without sacrificing portability or control.",
    items: [
      { icon: Server, label: "Docker" },
      { icon: Cloud, label: "Kubernetes" },
      { icon: Cloud, label: "Multi-Cloud" },
      { icon: Cloud, label: "Hybrid Cloud" },
    ],
  },
  {
    title: "Govern Everything",
    icon: Shield,
    description:
      "Maintain visibility, security, and compliance across the entire data lifecycle.",
    items: [
      { icon: Shield, label: "RBAC" },
      { icon: GitBranch, label: "Lineage" },
      { icon: Eye, label: "Observability" },
      { icon: ClipboardCheck, label: "Auditability" },
    ],
  },
  {
    title: "Build Faster",
    icon: Zap,
    description:
      "Move from raw data to insights and machine learning without stitching together tools.",
    items: [
      { icon: Workflow, label: "ETL" },
      { icon: Radio, label: "CDC" },
      { icon: BarChart3, label: "Analytics" },
      { icon: Brain, label: "MLOps" },
    ],
  },
];

const WhyItMatters = () => {
  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            Why It Matters
          </div>

          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-tight">
            Run anywhere.
            <br />
            Own your data.
            <br />
            Scale with confidence.
          </h2>

          <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Modern data teams need more than individual tools. They need a
            platform that can adapt to changing infrastructure, support strong
            governance, and accelerate delivery across the entire data
            lifecycle.
          </p>
        </motion.div>

        {/* Three Columns */}

        <div className="mt-20 grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;

            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="rounded-[32px] bg-white border border-slate-200 p-8 shadow-sm"
              >
                {/* Header */}

                <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center mb-6">
                  <Icon className="w-7 h-7 text-cyan-600" />
                </div>

                <h3 className="text-2xl font-semibold text-slate-900">
                  {pillar.title}
                </h3>

                <p className="mt-4 text-slate-600 leading-relaxed">
                  {pillar.description}
                </p>

                {/* Items */}

                <div className="mt-8 space-y-4">
                  {pillar.items.map((item) => {
                    const ItemIcon = item.icon;

                    return (
                      <div
                        key={item.label}
                        className="flex items-center gap-4 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                      >
                        <ItemIcon className="w-5 h-5 text-cyan-600" />

                        <span className="font-medium text-slate-700">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom Statement */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="rounded-[36px] bg-slate-900 text-white p-10 text-center">
            <h3 className="text-2xl font-semibold">
              One platform for the entire data lifecycle.
            </h3>

            <p className="mt-4 text-slate-400 max-w-3xl mx-auto leading-relaxed">
              From deployment and governance to analytics and machine learning,
              SegForge provides the foundation data teams need to build faster,
              operate confidently, and remain in control of their data.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhyItMatters;
