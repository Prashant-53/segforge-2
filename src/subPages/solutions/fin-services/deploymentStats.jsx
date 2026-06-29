import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import DeploymentImg from "../../../assets/Solutions/Finance/deploymentJourney.png";

const deploymentStats = [
  {
    value: "5 Min",
    label: "Quick Start",
  },
  {
    value: "K8s",
    label: "Production Ready",
  },
  {
    value: "Auto",
    label: "Scaling",
  },
  {
    value: "Cloud",
    label: "Managed Option",
  },
];

const businessOutcomes = [
  "Deploy Anywhere",
  "Enterprise Scale",
  "Operational Simplicity",
  "Infrastructure Flexibility",
];

const FinancialDeployment = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Rocket className="w-4 h-4" />
              Deployment & Operations
            </div>

            <h2 className="text-2xl lg:text-4xl font-bold text-slate-900 leading-[1.1]">
              Start in minutes. Scale to enterprise workloads.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Deploy SegForge locally using Docker Compose, run it on private
              Kubernetes infrastructure, or scale through managed cloud
              environments.
              <br />
              <br />
              Whether you're validating a proof of concept or supporting
              production-grade financial workloads, SegForge provides the
              flexibility to operate on your terms.
            </p>

            {/* Enterprise Stats Bar */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {deploymentStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl lg:text-3xl font-bold text-slate-900">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Outcomes */}

            {/* <div className="mt-10 grid grid-cols-2 gap-4">
              {businessOutcomes.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div> */}

            {/* CTA */}
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={DeploymentImg}
                alt="SegForge Deployment Architecture"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default FinancialDeployment;
