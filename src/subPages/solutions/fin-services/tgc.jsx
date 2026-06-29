import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import GovernanceImg from "../../../assets/Solutions/Finance/governanceArchitecture.png";

const trustStats = [
  {
    value: "Git-Style",
    label: "Data Versioning",
  },
  {
    value: "22",
    label: "Permission Areas",
  },
  {
    value: "100%",
    label: "Lineage Visibility",
  },
  {
    value: "Audit",
    label: "Ready",
  },
];

const businessCallouts = [
  "Zero-Risk Experimentation",
  "Data Sovereignty",
  "Least Privilege Access",
  "Audit-Ready Operations",
];

const FinancialGovernance = () => {
  return (
    <>
      <section className="py-12 bg-slate-50 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            {/* LEFT CONTENT */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
                <ShieldCheck className="w-4 h-4" />
                Governance & Compliance
              </div>

              <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 leading-[1.1]">
                Trust every dataset,
                <br />
                model, and decision.
              </h2>

              <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
                Financial institutions require complete confidence in how data
                is stored, transformed, accessed, and audited.
                <br />
                <br />
                SegForge combines Git-style data versioning, column-level
                lineage, granular permissions, and complete audit visibility
                into a single governance framework.
                <br />
                <br />
                Experiment safely, maintain regulatory compliance, and
                understand exactly how sensitive information moves across your
                organization.
              </p>

              {/* Enterprise Stats Bar */}

              <div className="mt-12 border-y border-slate-200 py-8">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                  {trustStats.map((stat) => (
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

              {/* Business Outcomes */}
            </motion.div>

            {/* RIGHT VISUAL */}

            <motion.div
              initial={{ opacity: 0, x: 25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
                <img
                  src={GovernanceImg}
                  alt="SegForge Governance Architecture"
                  className="w-full h-auto object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
      {/* <div className="mt-5 mb-5 justify-center items-center flex flex-row gap-4 overflow-x-auto">
        {businessCallouts.map((item) => (
          <div
            key={item}
            className="rounded-2xl bg-white border border-slate-200 px-5 py-4 text-sm whitespace-nowrap font-medium text-slate-700"
          >
            {item}
          </div>
        ))}
      </div> */}
    </>
  );
};

export default FinancialGovernance;
