import React from "react";
import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import ChallengeImg from "../../../assets/Solutions/Retail/challenge3.png";

const challengeStats = [
  {
    value: "10+",
    label: "Retail Systems",
  },
  {
    value: "Millions",
    label: "Customer Events",
  },
  {
    value: "24/7",
    label: "Inventory Changes",
  },
  {
    value: "Growing",
    label: "Operational Costs",
  },
];
const RetailChallenge = () => {
  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
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

            <h2 className="text-2xl lg:text-5xl font-bold text-slate-900 leading-[1.05]">
              Retail teams spend too much time connecting systems instead of
              serving customers.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Customer interactions, inventory updates, marketing campaigns, and
              order systems often operate in separate platforms.
              <br />
              <br />
              The result is delayed insights, operational complexity, and
              inconsistent customer experiences across channels.
            </p>
            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {challengeStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl lg:text-3xl font-bold text-slate-900">
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
                src={ChallengeImg}
                alt="Fragmented Retail Stack"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RetailChallenge;
