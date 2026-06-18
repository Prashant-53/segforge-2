import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import GovernanceImg from "../../../assets/Solutions/Analytics-Team/governance.png";

const governanceStats = [
  {
    value: "22",
    label: "Permission Areas",
  },
  {
    value: "Column-Level",
    label: "Lineage",
  },
  {
    value: "Workspace",
    label: "Isolation",
  },
  {
    value: "RBAC",
    label: "Controls",
  },
];

const callouts = [
  "Nessie Branches",
  "Impact Analysis",
  "RBAC Matrix",
  "Data Lineage",
];

const SelfServiceGovernance = () => {
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
                src={GovernanceImg}
                alt="Governed Self-Service Analytics"
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
              <ShieldCheck className="w-4 h-4" />
              Governed Self-Service Analytics
            </div>

            <h2 className="text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
              Enable freedom without
              <br />
              sacrificing control.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Provide analysts with direct access to trusted data while
              maintaining governance, lineage, and security requirements.
              <br />
              <br />
              Empower self-service analytics without introducing compliance risk
              or losing visibility into how data is used.
            </p>

            {/* Stats */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {governanceStats.map((stat) => (
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

            {/* Callouts */}

            <div className="mt-10 grid grid-cols-2 gap-4">
              {callouts.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SelfServiceGovernance;
