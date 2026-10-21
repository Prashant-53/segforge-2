import React from "react";
import { motion } from "framer-motion";
import { Database, ShieldCheck, GitBranch, Clock3 } from "lucide-react";
import LakehouseDestination from "../../../assets/Products/ETL/openlakehouse-architecture.webp";

const LakehouseDestinations = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right,#06b6d4 1px,transparent 1px),
              linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="absolute left-1/4 top-24 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-18 lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full"
          >
            <div className="w-full overflow-hidden rounded-[30px] border border-slate-200 bg-white shadow-xl">
              <img
                src={LakehouseDestination}
                alt="Apache Iceberg Lakehouse Architecture"
                className="block  h-auto w-full"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Open Lakehouse Architecture
            </div>
            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Open Table Foundation Built for Modern Analytics
            </h2>
            <p className="mt-6 text-md leading-8 text-slate-600">
              An open, scalable, and AI-ready data architecture built on open
              standards—giving organizations complete freedom to choose their
              storage, compute, analytics, and AI technologies. The concept of
              an open lakehouse emphasizes open data formats, interchangeable
              compute engines, independent storage, and reduced vendor lock-in.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LakehouseDestinations;
