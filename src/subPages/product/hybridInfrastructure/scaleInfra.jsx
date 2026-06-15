import React from "react";
import { motion } from "framer-motion";
import {
  Settings2,
  CheckCircle2,
  Server,
  Database,
  Brain,
  BarChart3,
  Layers,
} from "lucide-react";

const features = [
  "Infrastructure Manager",
  "EKS Node Groups",
  "EC2 Clusters",
  "Auto Pause",
  "Auto Termination",
  "Cost Optimization",
];

const InfrastructureManagementSection = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Settings2 className="w-4 h-4" />
              Infrastructure Management
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Provision and manage compute
              <br />
              from a single control plane.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Launch ETL, CDC, analytics, and machine learning infrastructure
              directly from SegForge.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Automatically scale resources, provision specialized clusters, and
              optimize infrastructure usage without managing every component
              manually.
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

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] p-8 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Control Plane */}

              <div className="rounded-[28px] border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 text-center">
                <Layers className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                <h3 className="font-semibold text-slate-900 text-lg">
                  SegForge Control Plane
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  Centralized provisioning and infrastructure management.
                </p>
              </div>

              <div className="flex justify-center py-8">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* Clusters */}

              <div className="grid grid-cols-2 gap-4">
                <ClusterCard icon={Server} title="ETL Cluster" />

                <ClusterCard icon={Database} title="CDC Cluster" />

                <ClusterCard icon={Brain} title="ML Cluster" />

                <ClusterCard icon={BarChart3} title="Analytics Cluster" />
              </div>

              {/* Footer */}

              <div className="mt-8 rounded-2xl bg-slate-900 text-white p-6 text-center">
                <h4 className="font-semibold">
                  Auto Scaling & Cost Optimization
                </h4>

                <p className="text-sm text-slate-400 mt-2">
                  Scale resources automatically while reducing idle spend.
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

export default InfrastructureManagementSection;
