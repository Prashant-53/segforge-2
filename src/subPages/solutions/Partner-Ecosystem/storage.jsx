import React from "react";
import { motion } from "framer-motion";
import { Database } from "lucide-react";
import StorageImg from "../../../assets/Solutions/partner-Ecosystem/storage.png";

const storageStats = [
  {
    value: "AWS",
    label: "Compatible",
  },
  {
    value: "Azure",
    label: "Compatible",
  },
  {
    value: "GCP",
    label: "Compatible",
  },
  {
    value: "Self",
    label: "Hosted",
  },
];

const callouts = [
  "Apache Iceberg",
  "MinIO Support",
  "Data Sovereignty",
  "Portable Storage",
];

const StorageFreedom = () => {
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
                src={StorageImg}
                alt="Storage Freedom and Anti Lock In"
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
              <Database className="w-4 h-4" />
              Storage Freedom & Anti-Lock-In
            </div>

            <h2 className="text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
              Keep your data portable,
              <br />
              accessible, and under
              <br />
              your control.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Store data in open Iceberg formats across public cloud or private
              infrastructure while maintaining complete ownership of your
              assets.
              <br />
              <br />
              Avoid proprietary storage dependencies and preserve long-term
              architectural flexibility without sacrificing performance,
              governance, or interoperability.
            </p>

            {/* Enterprise Stats Bar */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {storageStats.map((stat) => (
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

            {/* Business Callouts */}

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

export default StorageFreedom;
