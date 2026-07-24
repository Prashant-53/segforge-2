import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Database,
  GitBranch,
  ShieldCheck,
  Cloud,
  Layers3,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../../../assets/Products/DataLakehouse/lakeHero.png";

const LakehouseHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white pt-36 pb-24">
      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Sparkles className="h-4 w-4" />
              Data Lakehouse
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-4xl font-bold leading-none text-slate-900 lg:text-5xl">
              The Open Lakehouse
              <br />
              Foundation.
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Built on Standards, Not Silos.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-md leading-6 text-slate-600">
              Unify enterprise storage, governance, and analytics using Apache
              Iceberg and Apache Nessie. Deploy an open lakehouse on your own
              infrastructure while retaining complete ownership of your data,
              metadata, and compute.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-cyan-500 px-7 py-3 font-semibold text-slate-900 transition-colors duration-300 hover:text-white"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

                <span className="relative z-10 flex items-center gap-2">
                  Deploy Your Lakehouse
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>

              {/* <Link
                to="/documentation"
                className="group inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-7 py-3 font-semibold text-slate-700 transition hover:border-cyan-400 hover:text-cyan-600"
              >
                <BookOpen className="h-4 w-4" />
                View Documentation
              </Link> */}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Product Screenshot */}

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white ">
              <img
                src={Hero}
                alt="Seg Forge Data Lakehouse"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LakehouseHero;
