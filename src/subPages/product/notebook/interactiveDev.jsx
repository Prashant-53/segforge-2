import React from "react";
import { motion } from "framer-motion";
import { Code2, Database, PlayCircle, CheckCircle2 } from "lucide-react";
import NoteBookVid from "../../../assets/Products/NoteBook/notebook.mp4";
const InteractiveDevelopment = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-28">
      {/* Background */}

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

      <div className="absolute left-1/2 top-40 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Interactive Notebook
          </div>

          <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-5xl">
            Write Once.
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Execute Anywhere.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-md leading-6 text-slate-600">
            Switch seamlessly between Flink SQL, PyFlink, and Trino while
            choosing between historical batch execution or continuously updating
            streaming queries—all inside the same notebook.
          </p>
        </motion.div>

        {/* Large Screenshot */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto mt-16 max-w-6xl"
        >
          <div className="overflow-hidden  border border-slate-200 bg-white shadow-2xl">
            <video
              src={NoteBookVid}
              className="w-full h-auto"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        </motion.div>

        {/* Feature Cards */}

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {/* Languages */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Code2 className="h-7 w-7 text-cyan-600" />
              <h3 className="text-xl font-semibold text-slate-900">
                Languages
              </h3>
            </div>

            <div className="space-y-4">
              {["Flink SQL", "Python (PyFlink)", "Markdown"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Engines */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <Database className="h-7 w-7 text-cyan-600" />
              <h3 className="text-xl font-semibold text-slate-900">
                Execution Engines
              </h3>
            </div>

            <div className="space-y-4">
              {["Apache Flink SQL", "PyFlink", "Trino"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Modes */}

          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
            <div className="mb-5 flex items-center gap-3">
              <PlayCircle className="h-7 w-7 text-cyan-600" />
              <h3 className="text-xl font-semibold text-slate-900">
                Execution Modes
              </h3>
            </div>

            <div className="space-y-4">
              {["Batch Processing", "Streaming Analytics"].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-cyan-500" />
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Banner */}

        <div className="mt-16 rounded-[32px] bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px] shadow-xl">
          <div className="rounded-[31px] bg-white px-10 py-12 text-center">
            <h3 className="text-3xl font-bold text-slate-900">
              One Notebook.
              <br />
              Multiple Languages. Multiple Engines.
            </h3>

            <p className="mx-auto mt-6 max-w-3xl text-md leading-6 text-slate-600">
              From ad-hoc exploration to production-ready pipelines, work with
              the language and execution engine that best fits your workload—all
              inside one collaborative notebook experience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveDevelopment;
