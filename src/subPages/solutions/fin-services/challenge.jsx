import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import CostImg from "../../../assets/Solutions/Finance/costFragment.png";

const FragmentationChallenge = () => {
  const stats = [
    {
      value: "5–10",
      label: "Separate Platforms",
    },
    {
      value: "40%",
      label: "Operational Overhead",
    },
    {
      value: "12+",
      label: "Critical Integrations",
    },
    {
      value: "3x",
      label: "Higher Risk Exposure",
    },
  ];

  return (
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
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-6">
              <AlertTriangle className="w-4 h-4" />
              The Challenge
            </div>

            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 leading-[1.1]">
              Financial institutions spend too much time managing systems
              instead of risk.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Critical data is often spread across legacy databases, reporting
              tools, analytics platforms, governance systems, and machine
              learning environments.
              <br />
              Every additional platform increases operational overhead,
              compliance complexity, and integration risk while making trusted
              reporting harder to achieve.
            </p>

            {/* Enterprise Stats Bar */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl lg:text-4xl font-bold text-red-500">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-sm text-blaxk leading-relaxed">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
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
                src={CostImg}
                alt="Fragmented Financial Data Stack"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FragmentationChallenge;
