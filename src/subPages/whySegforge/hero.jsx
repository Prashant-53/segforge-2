import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";

const WhySegForgeHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
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
            linear-gradient(to right, #06b6d4 1px, transparent 1px),
            linear-gradient(to bottom, #06b6d4 1px, transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow 1 */}

      <motion.div
        animate={{
          x: [-40, 40, -40],
          y: [-20, 30, -20],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[140px]"
      />

      {/* Glow 2 */}

      <motion.div
        animate={{
          x: [40, -40, 40],
          y: [20, -30, 20],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-blue-400/10 rounded-full blur-[160px]"
      />

      {/* Floating Nodes */}

      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(18)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-cyan-400/30"
            style={{
              width: 6,
              height: 6,
              left: `${5 + Math.random() * 90}%`,
              top: `${5 + Math.random() * 90}%`,
            }}
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* CONTENT */}

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            Why SegForge
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-slate-900 leading-[1.05]">
            The modern data platform,
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
              RE Imagined.
            </span>
          </h1>

          <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-3xl mx-auto">
            SegForge brings data integration, real-time pipelines, lakehouse
            analytics, governance, and machine learning into a single open
            platform.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <button className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center justify-center gap-2 font-medium">
              Join Early Access
              <ArrowRight className="w-4 h-4" />
            </button>

            <button className="px-8 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center justify-center gap-2 font-medium">
              <Play className="w-4 h-4" />
              View Architecture
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySegForgeHero;
