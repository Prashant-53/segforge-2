import React from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  MessageSquare,
  Layers3,
  ShieldCheck,
  DollarSign,
  Workflow,
} from "lucide-react";

const PricingSection = () => {
  const highlights = [
    {
      icon: Layers3,
      title: "Built around your needs",
      description:
        "Discuss your data infrastructure, workflows, and AI requirements.",
    },
    {
      icon: Workflow,
      title: "A solution that fits",
      description:
        "Explore the SegForge capabilities that align with your team's goals.",
    },
    {
      icon: ShieldCheck,
      title: "Tailored pricing",
      description:
        "Connect with our team to understand pricing and deployment options.",
    },
  ];

  return (
    <section className="relative isolate overflow-hidden bg-[#FAF9F6] py-20 sm:py-24 lg:py-32">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(#1affe5 1px, transparent 1px), linear-gradient(90deg, #1affe5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)",
        }}
      />

      {/* Ambient glow */}
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-cyan-500/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.65 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 mt-4 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            <DollarSign className="h-4 w-4" />
            Segforge Pricing
          </div>

          <h2 className="text-4xl font-semibold leading-tight tracking-tight text-slate-800 sm:text-4xl lg:text-5xl">
            Powerful data and AI capabilities.{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Pricing built around you.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-md text-base leading-6 text-slate-600 ">
            Every team has different data, infrastructure, and business
            requirements. Connect with our team to explore SegForge, discuss
            your use case, and find a pricing approach that fits your needs.
          </p>
        </motion.div>

        {/* Main pricing card */}
        <motion.div
          initial={{ opacity: 0, y: 28, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, delay: 0.12 }}
          className="relative mx-auto mt-14 max-w-5xl"
        >
          <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-cyan-400/20 via-blue-500/10 to-cyan-400/20 blur-xl" />

          <div className="relative overflow-hidden rounded-3xl border border-slate-700/80 bg-[#0b1729]/95">
            <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
              {/* Left content */}
              <div className="p-7 sm:p-10 lg:p-12">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300">
                  <MessageSquare size={23} />
                </div>

                <p className="mt-7 text-sm font-semibold uppercase tracking-[0.15em] text-cyan-300">
                  Let's talk
                </p>

                <h3 className="mt-3 text-2xl font-semibold text-white sm:text-3xl">
                  Find the right fit for your team.
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-7 text-slate-400 sm:text-base">
                  Tell us what you're building and what your team needs. We'll
                  help you understand the available options and discuss pricing
                  for your requirements.
                </p>

                <a
                  href="/contact"
                  className="group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-xl bg-cyan-400 px-6 py-4 text-sm font-semibold text-[#061426] transition-all duration-300 hover:bg-cyan-300 hover:shadow-[0_0_35px_rgba(34,211,238,0.2)] sm:w-auto"
                >
                  Contact Us for Pricing
                  <ArrowUpRight
                    size={18}
                    className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </a>

                <p className="mt-4 text-xs text-slate-500">
                  Get in touch to discuss your requirements.
                </p>
              </div>

              {/* Right content */}
              <div className="border-t border-slate-700/70 bg-white/[0.02] p-7 sm:p-10 lg:border-l lg:border-t-0 lg:p-12">
                <p className="text-sm font-semibold text-white">
                  What we can discuss
                </p>

                <div className="mt-7 space-y-6">
                  {highlights.map((item, index) => {
                    const Icon = item.icon;

                    return (
                      <motion.div
                        key={item.title}
                        initial={{ opacity: 0, x: 14 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.45,
                          delay: 0.2 + index * 0.12,
                        }}
                        className="flex gap-4"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-slate-700 bg-slate-800/70 text-cyan-300">
                          <Icon size={19} />
                        </div>

                        <div>
                          <h4 className="font-medium text-slate-100">
                            {item.title}
                          </h4>
                          <p className="mt-1.5 text-sm leading-6 text-slate-400">
                            {item.description}
                          </p>
                        </div>
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom strip */}
            <div className="flex flex-col gap-3 border-t border-slate-700/70 bg-[#081323] px-7 py-5 sm:flex-row sm:items-center sm:justify-between sm:px-10">
              <div className="flex items-center gap-2 text-sm text-slate-300">
                <Check size={16} className="text-cyan-300" />
                Explore SegForge for your use case
              </div>

              <a
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-medium text-cyan-300 transition-colors hover:text-cyan-200"
              >
                Talk to our team
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PricingSection;
