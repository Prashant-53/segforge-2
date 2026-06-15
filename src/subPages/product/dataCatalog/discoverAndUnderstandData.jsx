import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const DiscoverAndUnderstandData = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT - PRODUCT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

            {/* Screenshot */}

            <div className="relative rounded-[32px] overflow-hidden border border-slate-200 shadow-[0_30px_80px_rgba(15,23,42,0.08)] bg-white">
              <img
                src="/images/catalog-discovery-ui.png"
                alt="SegForge Catalog Discovery"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* RIGHT - CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              Discover & Understand Data
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Discover data faster and with more confidence.
            </h2>

            <p className="mt-6 text-md  text-slate-600 leading-relaxed">
              A single place to understand your data. Catalogs should do more
              than help people search. Explore datasets, inspect schemas,
              understand lineage, and validate quality without switching between
              tools.{" "}
            </p>

            {/* Optional CTA */}

            <div className="mt-10">
              <button className="inline-flex items-center gap-2 text-cyan-600 font-semibold hover:text-cyan-700 transition">
                Explore Catalog Experience
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverAndUnderstandData;
