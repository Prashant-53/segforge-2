import React from "react";
import { motion } from "framer-motion";
import { History } from "lucide-react";
import ForensicsImg from "../../../assets/Solutions/Analytics-Team/forensics.png";

const forensicStats = [
  {
    value: "Time",
    label: "Travel",
  },
  {
    value: "Nessie",
    label: "Tags",
  },
  {
    value: "ACID",
    label: "Reliability",
  },
  {
    value: "Historical",
    label: "Analysis",
  },
];

const HistoricalForensics = () => {
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
              <History className="w-4 h-4" />
              Iceberg Time Travel
            </div>

            <h2 className="text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
              Understand exactly what
              <br />
              happened and when.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Analyze historical snapshots, compare business performance across
              periods, and reproduce reports with confidence using Iceberg and
              Nessie.
              <br />
              <br />
              Maintain consistency even as operational pipelines continue
              updating live datasets.
            </p>

            {/* Stats */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {forensicStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl font-bold text-slate-900">
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
                src={ForensicsImg}
                alt="Iceberg Time Travel"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HistoricalForensics;
