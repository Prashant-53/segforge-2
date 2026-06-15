import React from "react";
import { motion } from "framer-motion";
import {
  Layers,
  CheckCircle2,
  Cpu,
  Workflow,
  BarChart3,
  Server,
} from "lucide-react";

const features = [
  "EKS Infrastructure Manager",
  "EC2 Cluster Provisioning",
  "One-Click Deployment",
  "Auto Pause",
  "Auto Termination",
  "Resource Scaling",
];

const InfrastructureManagerSection = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Layers className="w-4 h-4" />
              Infrastructure Manager
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Provision and manage infrastructure
              <br />
              without leaving the platform.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Launch specialized compute environments, scale resources on
              demand, and optimize infrastructure utilization from a single
              control plane.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Reduce operational overhead while giving teams access to the
              resources they need.
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

          {/* RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Control Plane */}

              <div className="rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 p-8 text-center">
                <Layers className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                <h3 className="font-semibold text-slate-900 text-lg">
                  SegForge Control Plane
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  Provisioning, scaling, and lifecycle management
                </p>
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-10 bg-cyan-300" />
              </div>

              {/* Clusters */}

              <div className="grid md:grid-cols-3 gap-4">
                <ClusterCard icon={Workflow} title="ETL Cluster" />

                <ClusterCard icon={Cpu} title="ML Cluster" />

                <ClusterCard icon={BarChart3} title="Analytics Cluster" />
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-10 bg-cyan-300" />
              </div>

              {/* Result */}

              <div className="rounded-3xl bg-slate-900 text-white p-8 text-center">
                <Server className="w-10 h-10 mx-auto mb-4" />

                <h3 className="font-semibold text-lg">
                  Running Infrastructure
                </h3>

                <p className="text-slate-400 text-sm mt-2">
                  Optimized and managed automatically
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ClusterCard = ({ icon: Icon, title }) => (
  <div className="border border-slate-200 rounded-2xl p-5 text-center bg-slate-50">
    <Icon className="w-6 h-6 text-cyan-600 mx-auto mb-3" />

    <h4 className="font-medium text-slate-900">{title}</h4>
  </div>
);

export default InfrastructureManagerSection;
