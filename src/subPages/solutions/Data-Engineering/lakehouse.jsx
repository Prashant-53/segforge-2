import React from "react";
import { motion } from "framer-motion";
import { GitBranch } from "lucide-react";
import LakehouseImg from "../../../assets/Solutions/DataEngineering/lakehouse.png";

const lakehouseStats = [
  {
    value: "Git-Style",
    label: "Versioning",
  },
  {
    value: "Time",
    label: "Travel",
  },
  {
    value: "Schema",
    label: "Evolution",
  },
  {
    value: "ACID",
    label: "Transactions",
  },
];

const ModernLakehouse = () => {
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
              <GitBranch className="w-4 h-4" />
              Iceberg & Nessie
            </div>

            <h2 className="text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
              Operate a lakehouse with
              <br />
              the safety of source control.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Version data, isolate changes, and evolve schemas without
              disrupting production environments.
              <br />
              <br />
              Use branching, time travel, and merge workflows to safely manage
              analytical assets at scale while maintaining complete
              auditability.
            </p>

            {/* Enterprise Stats Bar */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {lakehouseStats.map((stat) => (
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

          {/* VISUAL RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={LakehouseImg}
                alt="Iceberg and Nessie Lakehouse Management"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ModernLakehouse;
