import React from "react";
import { motion } from "framer-motion";
import { ServerCog } from "lucide-react";
import DeploymentImg from "../../../assets/Solutions/Retail/challenge3.png";

const deploymentStats = [
  {
    value: "Docker",
    label: "Quick Start",
  },
  {
    value: "Kubernetes",
    label: "Ready",
  },
  {
    value: "Cloud",
    label: "Managed",
  },
  {
    value: "Auto",
    label: "Scaling",
  },
];

const RetailDeployment = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* VISUAL LEFT */}

          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={DeploymentImg}
                alt="Retail Deployment Architecture"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <ServerCog className="w-4 h-4" />
              Deployment & Infrastructure
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.05]">
              Deploy retail intelligence
              <br />
              wherever your business
              <br />
              operates.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Run SegForge locally, deploy on Kubernetes, or scale through
              managed cloud environments while keeping complete control over
              customer data.
              <br />
              <br />
              Support everything from rapid proof-of-concepts to
              enterprise-scale retail operations using a single platform and
              deployment model.
            </p>

            {/* Enterprise Stats Bar */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {deploymentStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl lg:text-3xl font-bold text-slate-900">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RetailDeployment;
