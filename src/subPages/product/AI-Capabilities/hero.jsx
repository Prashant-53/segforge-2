import { motion } from "framer-motion";
import { ArrowRight, BrainCircuit, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

const AICapabilitiesHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-white pt-36 pb-28">
      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 25,
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

      {/* Background Glows */}

      <div className="absolute left-1/2 top-10 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[160px]" />

      <div className="absolute bottom-0 left-1/2 h-[400px] w-[600px] -translate-x-1/2 rounded-full bg-blue-500/10 blur-[180px]" />

      {/* Content */}

      <div className="relative mx-auto max-w-5xl px-6 text-center lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          {/* Badge */}

          <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-5 py-2 text-sm font-medium text-cyan-700">
            <BrainCircuit className="h-4 w-4" />
            Seg Forge AI
          </div>

          {/* Heading */}

          <h1 className="mx-auto mt-8 max-w-4xl text-4xl font-bold leading-none tracking-tight text-slate-900 sm:text-5xl lg:text-5xl">
            Enterprise AI,
            <br />
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              built into your data platform.
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-2xl text-base leading-4 text-slate-600 sm:text-md sm:leading-8">
            Build intelligent applications, tune models, run AI workloads, and
            empower developers with AI capabilities directly across your data
            platform.
          </p>

          {/* CTA */}

          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/contact"
              className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-md border border-cyan-500 px-7 py-3 font-semibold text-slate-900 transition-colors duration-300 hover:text-white sm:w-auto"
            >
              <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

              <span className="relative z-10 flex items-center gap-2">
                Build with Seg Forge AI
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </span>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AICapabilitiesHero;
