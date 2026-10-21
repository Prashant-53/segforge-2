import React from "react";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import ModelDeploy from "../../../assets/Products/ML&OPs/deployment.png";

const MLInferenceSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-20">
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

      {/* Glow */}

      <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Model Deployment
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Deploy Models Wherever Decisions Happen.
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-6 text-slate-600">
              Serve predictions through low-latency REST APIs for real-time
              applications or process large datasets with scheduled batch
              inference—all from the same validated model. SegForge provides
              stable runtime versions, endpoint management, Model Registry
              integration, and complete deployment history to help teams deploy,
              monitor, and reproduce models consistently.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />

            <div className="overflow-hidden  border border-slate-200 bg-white shadow-2xl">
              <img
                src={ModelDeploy}
                alt="Real-Time & Batch Inference"
                className="w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MLInferenceSection;
