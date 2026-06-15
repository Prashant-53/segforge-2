import React from "react";
import { motion } from "framer-motion";
import { Rocket, Users, MessagesSquare, ArrowRight } from "lucide-react";

const WhySegForgeCTA = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[40px] bg-slate-900 text-white p-10 md:p-16"
        >
          {/* Heading */}

          <div className="text-center max-w-4xl mx-auto">
            <h2 className="text-4xl lg:text-6xl font-bold leading-[1.1]">
              Ready to see what a unified
              <br />
              data platform looks like?
            </h2>

            <p className="mt-8 text-md text-slate-400 leading-relaxed max-w-3xl mx-auto">
              Deploy SegForge locally in minutes, explore the platform through
              early access, or connect with our team to discuss your
              architecture and data strategy.
            </p>
          </div>

          {/* CTA Cards */}

          <div className="mt-16 grid lg:grid-cols-3 gap-6">
            {/* Quick Start */}

            <div className="rounded-[28px] border border-slate-700 bg-slate-800/50 p-8">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Rocket className="w-7 h-7 text-cyan-400" />
              </div>

              <h3 className="text-2xl font-semibold">5-Minute Quick Start</h3>

              <p className="mt-4 text-slate-400 leading-relaxed">
                Run SegForge locally with Docker and explore the platform in
                minutes.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition">
                Start Now
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Early Access */}

            <div className="rounded-[28px] border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 p-8">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <Users className="w-7 h-7 text-cyan-400" />
              </div>

              <h3 className="text-2xl font-semibold">Join Early Access</h3>

              <p className="mt-4 text-slate-300 leading-relaxed">
                Get access to upcoming releases, roadmap previews, and new
                platform capabilities before public launch.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-cyan-500 text-white hover:bg-cyan-600 transition">
                Join Beta
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Architecture Review */}

            <div className="rounded-[28px] border border-slate-700 bg-slate-800/50 p-8">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 flex items-center justify-center mb-6">
                <MessagesSquare className="w-7 h-7 text-cyan-400" />
              </div>

              <h3 className="text-2xl font-semibold">Architecture Review</h3>

              <p className="mt-4 text-slate-400 leading-relaxed">
                Discuss deployment strategies, lakehouse architecture, and
                platform design with our team.
              </p>

              <button className="mt-8 inline-flex items-center gap-2 text-cyan-400 font-medium hover:text-cyan-300 transition">
                Book Session
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Bottom Trust Layer */}

          <div className="mt-16 pt-10 border-t border-slate-700">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              {["Apache Flink", "Apache Kafka", "Apache Iceberg", "Nessie"].map(
                (item) => (
                  <div
                    key={item}
                    className="px-4 py-2 rounded-full bg-slate-800 text-slate-300"
                  >
                    {item}
                  </div>
                ),
              )}
            </div>

            <div className="mt-6 flex flex-wrap justify-center gap-6 text-slate-500 text-sm">
              <span>Open Standards</span>
              <span>Portable Data</span>
              <span>No Vendor Lock-In</span>
              <span>Cloud Agnostic</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySegForgeCTA;
