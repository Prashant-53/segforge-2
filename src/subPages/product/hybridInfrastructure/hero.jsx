import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  Cloud,
  Server,
  Zap,
  Cpu,
  Sparkles,
} from "lucide-react";
import { Link } from "react-router-dom";
import Hero from "../../../assets/Products/Hybrid-Infra/hero.webp";

const HybridInfrastructureHero = () => {
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

      {/* Glow */}

      <div className="absolute left-1/2 top-20 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[180px]" />

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
              Hybrid Infrastructure
            </div>

            {/* Heading */}

            <h1 className="mt-8 text-4xl font-bold leading-none text-slate-900 lg:text-5xl">
              On-Demand Power
              <br />
              <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                for Burstable Workloads.
              </span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-2xl text-md leading-6 text-slate-600">
              Bridge the gap between local control and cloud-scale compute.
              Maintain your primary Seg Forge environment while launching
              on-demand EC2 Composable Clusters for large ETL pipelines,
              streaming workloads, analytics, and machine learning. Gain the
              elasticity of the cloud without managing permanent infrastructure,
              and pay only for the compute you use when you need it.
            </p>

            {/* Buttons */}

            <div className="mt-12 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-cyan-500 px-7 py-3 font-semibold text-slate-900 transition-colors duration-300 hover:text-white"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

                <span className="relative z-10 flex items-center gap-2">
                  Launch Infrastructure Manager
                  <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Glow */}
            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />
            {/* Product Screenshot */}
            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img src={Hero} alt="Hybrid Infrastructure" className="w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HybridInfrastructureHero;
