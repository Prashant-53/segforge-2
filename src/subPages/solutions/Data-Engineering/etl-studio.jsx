import React from "react";
import { motion } from "framer-motion";
import { Workflow } from "lucide-react";
import EtlStudioImg from "../../../assets/Solutions/DataEngineering/etl-studio.png";

const etlStats = [
  {
    value: "90+",
    label: "Transformation Nodes",
  },
  {
    value: "Real-Time",
    label: "SQL Generation",
  },
  {
    value: "Automatic",
    label: "Schema Propagation",
  },
  {
    value: "Visual",
    label: "Development",
  },
];

const callouts = [
  "Data Quality Validation",
  "SQL Transparency",
  "Schema Detection",
  "Reusable Components",
];

const ETLStudio = () => {
  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* CONTENT LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Workflow className="w-4 h-4" />
              Visual Data Engineering
            </div>

            <h2 className="text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
              Build complex pipelines visually
              <br />
              without sacrificing control.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Create production-grade transformations using a visual workflow
              builder backed by generated Flink SQL.
              <br />
              <br />
              Move faster with schema-aware development, reusable components,
              and a library of more than ninety transformation nodes.
            </p>

            {/* Enterprise Stats Bar */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {etlStats.map((stat) => (
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

            {/* Callouts */}

            <div className="mt-10 grid grid-cols-2 gap-4">
              {callouts.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-white border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>

          {/* VISUAL RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={EtlStudioImg}
                alt="ETL Studio Visual Pipeline Builder"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ETLStudio;
