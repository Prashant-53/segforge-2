import React from "react";
import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import ProblemImg from "../../assets/why-segforge/problem.png";

const WhySegForgeSection = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
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
              <Layers className="w-4 h-4" />
              Why We Started Building SegForge
            </div>

            <h2 className="text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
              Data teams spend too much time managing tools.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Today's data platforms are often assembled from disconnected
              products for ingestion, transformation, storage, orchestration,
              analytics, and machine learning.
            </p>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              While each tool may solve a specific problem well, connecting them
              together creates operational overhead, governance gaps, and
              growing infrastructure complexity.
            </p>

            {/* Callouts */}

            <div className="mt-10 grid grid-cols-2 gap-4">
              {[
                "Vendor Sprawl",
                "Complex Integrations",
                "Governance Gaps",
                "Operational Overhead",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700"
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
                src={ProblemImg}
                alt="Fragmented Data Stack"
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhySegForgeSection;
