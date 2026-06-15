import React from "react";
import { motion } from "framer-motion";
import { Database } from "lucide-react";
import SovereigntyImg from "../../../assets/Solutions/HealthCare/sovereignty.png";

const sovereigntyStats = [
  {
    value: "Self",
    label: "Hosted",
  },
  {
    value: "Git-Style",
    label: "Versioning",
  },
  {
    value: "Time",
    label: "Travel",
  },
  {
    value: "Data",
    label: "Sovereignty",
  },
];
const HealthcareSovereignty = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Database className="w-4 h-4" />
              Data Sovereignty
            </div>

            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
              Keep healthcare data
              <br />
              under your control.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Deploy SegForge within your own environment while enabling
              researchers and compliance teams to safely reproduce analyses,
              investigate historical states, and validate outcomes.
              <br />
              <br />
              Built on Apache Iceberg and Nessie, SegForge provides Git-style
              versioning, reproducible research workflows, and complete control
              over sensitive healthcare data.
            </p>
            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {sovereigntyStats.map((stat) => (
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
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={SovereigntyImg}
                alt="Healthcare Data Sovereignty"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
      {/* <div className="mt-10 flex flex-row items-center justify-center gap-4">
        <div className="rounded-2xl hover:scale-105 bg-slate-50 border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700">
          Reproducible Research
        </div>

        <div className="rounded-2xl hover:scale-105 bg-slate-50 border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700">
          Historical Validation
        </div>

        <div className="rounded-2xl hover:scale-105 bg-slate-50 border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700">
          Safe Experimentation
        </div>

        <div className="rounded-2xl hover:scale-105 bg-slate-50 border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700">
          Controlled Data Access
        </div>
      </div> */}
    </section>
  );
};

export default HealthcareSovereignty;
