import React from "react";
import { motion } from "framer-motion";
import { Globe, CheckCircle2, Cloud, Server, Boxes } from "lucide-react";

const features = [
  "AWS",
  "Azure",
  "Google Cloud",
  "On-Premises",
  "Kubernetes",
  "Docker Compose",
  "Open Architecture",
];

const DeployAnywhereSection = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Cloud-Agnostic Architecture
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Choose the infrastructure
              <br />
              that works for your business.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Run SegForge wherever your teams operate.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Deploy in public clouds, private environments, or hybrid
              architectures while maintaining a consistent platform experience.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Avoid vendor lock-in and retain the flexibility to move as your
              requirements evolve.
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

          {/* VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] p-6 sm:p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <div className="grid grid-cols-2 gap-4">
                <DeployCard icon={Cloud} title="Cloud A" />
                <DeployCard icon={Cloud} title="Cloud B" />
                <DeployCard icon={Cloud} title="Cloud C" />
                <DeployCard icon={Server} title="On-Prem" />
              </div>

              <div className="flex justify-center py-6">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 text-center">
                <Boxes className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                <h3 className="font-semibold text-slate-900 text-lg">
                  SegForge Platform
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  Consistent deployment and operations across every environment.
                </p>
              </div>

              <div className="flex justify-center py-6">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              <div className="rounded-3xl bg-slate-900 text-white p-8 text-center">
                <Globe className="w-8 h-8 mx-auto mb-3" />

                <h3 className="font-semibold text-lg">Unified Operations</h3>

                <p className="text-sm text-slate-400 mt-2">
                  One platform. Any infrastructure.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const DeployCard = ({ icon: Icon, title }) => (
  <div className="border border-slate-200 rounded-2xl p-5 text-center bg-slate-50">
    <Icon className="w-6 h-6 text-cyan-600 mx-auto mb-3" />
    <h4 className="font-medium text-slate-900">{title}</h4>
  </div>
);

export default DeployAnywhereSection;
