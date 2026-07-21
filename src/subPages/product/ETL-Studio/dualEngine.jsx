import React from "react";
import { motion } from "framer-motion";
import { CalendarDays, Activity, CheckCircle2 } from "lucide-react";
import EtlWorkspace from "../../../assets/Products/ETL/Etl-Workspace.mp4";
const DualExecutionEngine = () => {
  return (
    <section className="relative overflow-hidden bg-white py-28">
      {/* Background Grid */}

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

      {/* Glow */}

      <div className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* ================= LEFT CONTENT ================= */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Execution Engine
            </div>

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              One Pipeline.
              <br />
              Two Execution Modes.
            </h2>

            <p className="mt-6 text-md leading-6 text-slate-600">
              Build your pipeline once and decide how it runs. Whether you're
              processing historical datasets on a schedule or consuming
              continuous event streams in real time, ETL Studio executes the
              same visual workflow through Apache Flink's unified execution
              engine.
            </p>

            {/* Comparison Cards */}

            <div className="mt-12 grid gap-6">
              {/* Batch */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                    <CalendarDays className="h-7 w-7 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Batch Mode
                    </h3>

                    <p className="mt-2 text-slate-600 leading-7">
                      Execute scheduled workloads designed for large-scale
                      historical processing and recurring ETL operations.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        "Daily ETL",
                        "Scheduled Jobs",
                        "Historical Backfills",
                        "Reporting",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Streaming */}

              <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-300 hover:shadow-lg">
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50">
                    <Activity className="h-7 w-7 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-slate-900">
                      Streaming Mode
                    </h3>

                    <p className="mt-2 text-slate-600 leading-7">
                      Continuously process events with low latency for
                      operational intelligence and real-time decision making.
                    </p>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {[
                        "CDC",
                        "Kafka",
                        "Event Streams",
                        "Real-Time Analytics",
                      ].map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm text-slate-700"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Highlight */}

            <div className="mt-10 rounded-3xl border border-cyan-200 bg-gradient-to-r from-cyan-50 to-white p-6">
              <div className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-cyan-600" />

                <h3 className="text-xl font-semibold text-slate-900">
                  One Visual Pipeline. Two Execution Modes.
                </h3>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                {[
                  "One Visual Pipeline",
                  "Apache Flink Runtime",
                  "Batch & Streaming Toggle",
                  "No Pipeline Duplication",
                ].map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-2 text-slate-700"
                  >
                    <CheckCircle2 className="h-4 w-4 text-cyan-500" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* ================= RIGHT IMAGE ================= */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="overflow-hidden  border border-slate-200 bg-white shadow-2xl">
              <video
                alt="Batch and Streaming Execution Engine"
                className="w-full h-auto"
                autoPlay
                muted
                loop
                playsInline
              >
                <source src={EtlWorkspace} type="video/mp4" />
              </video>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DualExecutionEngine;
