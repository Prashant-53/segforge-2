import React from "react";
import { motion } from "framer-motion";
import { Layers3 } from "lucide-react";
import FrameworkImg from "../../../assets/Services/TrainingEnablement/framework.png";

const frameworkStats = [
  {
    value: "Development",
    label: "Workflows",
  },
  {
    value: "Real-Time",
    label: "Analytics",
  },
  {
    value: "MLOps",
    label: "Operations",
  },
  {
    value: "Governance",
    label: "Controls",
  },
];

const TrainingFramework = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* VISUAL LEFT */}

          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={FrameworkImg}
                alt="Unified Learning Framework"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT RIGHT */}

          <motion.div
            className="order-1 lg:order-2"
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Layers3 className="w-4 h-4" />
              Unified Learning Framework
            </div>

            <h2 className="text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
              One learning path across
              <br />
              the entire data lifecycle.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Master ingestion, transformation, analytics, governance, and
              machine learning through a unified platform built on Apache Flink,
              Iceberg, and Nessie.
              <br />
              <br />
              Develop practical skills that span the entire data lifecycle while
              reducing dependence on fragmented tools and specialized teams.
            </p>

            {/* Enterprise Stats Bar */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {frameworkStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl lg:text-2xl font-bold text-slate-900">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TrainingFramework;
