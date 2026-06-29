import React from "react";
import { motion } from "framer-motion";
import { Layers3, Wrench, ShieldAlert, ServerCrash } from "lucide-react";

import CostImg from "../../assets/why-segforge/cost.png";

const problems = [
  {
    icon: Layers3,
    title: "Operational Complexity",
  },
  {
    icon: Wrench,
    title: "Engineering Tax",
  },
  {
    icon: ShieldAlert,
    title: "Governance Blind Spots",
  },
  {
    icon: ServerCrash,
    title: "Infrastructure Sprawl",
  },
];

const CostOfFragmentation = () => {
  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* VISUAL LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={CostImg}
                alt="The Cost of Fragmentation"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-red-50 text-red-700 text-sm font-medium mb-6">
              The Cost of Fragmentation
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.05]">
              The real cost isn't
              <br />
              the software.
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
                {" "}
                It's the glue.
              </span>
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Most organizations don't struggle because they lack tools.
            </p>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              They struggle because every tool introduces another integration,
              another dependency, and another operational responsibility.
            </p>

            {/* Stats Bar */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                <div>
                  <div className="text-2xl font-bold text-slate-900">10+</div>

                  <div className="mt-2 text-sm text-slate-500">Vendors</div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">20+</div>

                  <div className="mt-2 text-sm text-slate-500">
                    Integrations
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    Growing
                  </div>

                  <div className="mt-2 text-sm text-slate-500">Complexity</div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    Higher
                  </div>

                  <div className="mt-2 text-sm text-slate-500">Costs</div>
                </div>
              </div>
            </div>

            {/* Problem Cards */}

            <div className="mt-10 grid grid-cols-2 gap-4">
              {problems.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className="rounded-2xl bg-white border border-slate-200 px-5 py-4"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-red-500" />

                      <span className="text-sm font-medium text-slate-700">
                        {item.title}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CostOfFragmentation;
