import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Shuffle,
  ShieldCheck,
  BrainCircuit,
  ArrowRight,
} from "lucide-react";
import TransformationIMG from "../../../assets/Products/ETL/transformation.png";

const categories = [
  {
    icon: Database,
    title: "Inbound Sources",
    description:
      "Connect to PostgreSQL, MySQL, SQL Server, Oracle, IBM DB2, Kafka, REST APIs, Amazon S3, MinIO, and real-time CDC streams.",
  },
  {
    icon: Shuffle,
    title: "Transformations",
    description:
      "Build complex workflows using filters, joins, unions, aggregates, pivots, window functions, sorting, and derived columns.",
  },
  {
    icon: ShieldCheck,
    title: "Data Quality",
    description:
      "Validate incoming datasets with deduplication, null removal, type conversion, schema validation, and outlier detection.",
  },
  {
    icon: BrainCircuit,
    title: "ML Feature Engineering",
    description:
      "Prepare production-ready datasets with encoding, normalization, scaling, imputation, and automated feature generation.",
  },
];

const TransformationEngine = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Grid */}

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

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex rounded-full bg-cyan-50 border border-cyan-200 px-4 py-2 text-sm font-medium text-cyan-700">
              Transformation Engine
            </div>

            <h2 className="mt-6 text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
              90+ Production-Ready
              <span className="block bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                Transformation Nodes
              </span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-600">
              Accelerate data engineering with an extensive library of
              production-ready components. Connect virtually any source,
              transform data visually, enforce quality standards, and prepare
              machine learning features—all without writing repetitive ETL code.
            </p>

            <div className="mt-12 space-y-8">
              {categories.map((item) => (
                <div key={item.title} className="flex gap-5">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                    <item.icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden  border border-slate-200 bg-white shadow-2xl">
              <img
                src={TransformationIMG}
                alt="Transformation Node Library"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TransformationEngine;
