import React from "react";
import { motion } from "framer-motion";
import {
  Cpu,
  Zap,
  Activity,
  Radar,
  CheckCircle2,
  Sparkles,
  Gauge,
} from "lucide-react";

import RAG from "../../../assets/Products/AI/RAG-Pipeline.webp";

const Fourth = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 to-white py-28">
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
            linear-gradient(to right,#18D0BB 1px,transparent 1px),
            linear-gradient(to bottom,#18D0BB 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}

      <div className="absolute right-0 top-24 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <Sparkles className="h-4 w-4" />
              RAG Pipeline
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Give AI the context it needs to deliver relevant answers.
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-8 text-slate-600">
              SegForge’s RAG Pipeline helps teams turn workspace data into
              searchable context for AI applications. Configure data sources,
              chunking strategies, embedding models, and hybrid retrieval to
              help AI agents find relevant information and respond with greater
              context.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative order-2 lg:order-1"
          >
            <div className="absolute inset-0   bg-cyan-400/10 blur-3xl" />

            <div className="overflow-hidden  border border-slate-200 bg-white shadow-2xl">
              <img
                src={RAG}
                alt="Real-Time Inference & Batch Scoring"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Fourth;
