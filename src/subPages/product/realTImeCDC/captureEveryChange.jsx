import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  Plus,
  Pencil,
  Trash2,
  CheckCircle2,
  FileText,
} from "lucide-react";

const features = [
  "PostgreSQL",
  "MySQL",
  "SQL Server",
  "Oracle",
  "IBM DB2",
  "Log-Based Capture",
];

const CaptureEveryChange = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 ">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              Change Capture
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Capture changes
              <br />
              where they happen.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Instead of repeatedly querying production databases, SegForge
              reads directly from transaction logs. Every insert, update, and
              delete is captured with minimal impact on operational systems,
              keeping data moving without affecting application performance.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600" />

                  <span className="text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Header */}

              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <h3 className="font-semibold text-slate-900">
                  Live Transaction Stream
                </h3>

                <Database className="w-5 h-5 text-cyan-600" />
              </div>

              <div className="p-8">
                {/* Database */}

                <div className="rounded-2xl border border-slate-200 p-5">
                  <div className="flex items-center gap-3 mb-5">
                    <Database className="w-5 h-5 text-cyan-600" />

                    <span className="font-medium text-slate-900">
                      Production Database
                    </span>
                  </div>

                  <div className="space-y-3">
                    <LogEvent
                      icon={Plus}
                      color="text-green-600"
                      text="INSERT INTO customers"
                    />

                    <LogEvent
                      icon={Pencil}
                      color="text-blue-600"
                      text="UPDATE orders"
                    />

                    <LogEvent
                      icon={Trash2}
                      color="text-red-600"
                      text="DELETE products"
                    />
                  </div>
                </div>

                {/* Arrow */}

                <div className="flex justify-center py-6">
                  <div className="w-px h-12 bg-cyan-300" />
                </div>

                {/* Transaction Log */}

                <div className="rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                  <div className="flex items-center gap-3">
                    <FileText className="w-5 h-5 text-cyan-600" />

                    <span className="font-medium text-slate-900">
                      WAL / Binlog
                    </span>
                  </div>

                  <p className="mt-3 text-slate-600">
                    SegForge continuously reads transaction logs to capture
                    every change.
                  </p>
                </div>

                {/* Arrow */}

                <div className="flex justify-center py-6">
                  <div className="w-px h-12 bg-cyan-300" />
                </div>

                {/* Output */}

                <div className="rounded-2xl bg-slate-900 text-white p-5">
                  <h4 className="font-medium">Captured Events</h4>

                  <p className="mt-2 text-slate-300">
                    Real-time change events streamed directly into downstream
                    systems.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const LogEvent = ({ icon: Icon, text, color }) => {
  return (
    <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-slate-50 border border-slate-200">
      <Icon className={`w-4 h-4 ${color}`} />

      <span className="text-sm text-slate-700">{text}</span>
    </div>
  );
};

export default CaptureEveryChange;
