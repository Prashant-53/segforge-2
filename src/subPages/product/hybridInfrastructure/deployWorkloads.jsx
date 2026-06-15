import React from "react";
import { motion } from "framer-motion";
import {
  Server,
  CheckCircle2,
  Building2,
  Cloud,
  ShieldCheck,
  Layers,
} from "lucide-react";

const features = [
  "Docker Compose",
  "Kubernetes",
  "EKS / AKS / GKE",
  "Managed Cloud",
  "High Availability",
  "Auto Scaling",
];

const WorkloadDeploymentSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Server className="w-4 h-4" />
              Deployment Flexibility
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Run workloads in the environment
              <br />
              that makes the most sense.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Different workloads have different requirements.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Keep sensitive processing on-premises, run scalable analytics in
              the cloud, and use managed environments when operational
              simplicity matters most.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Choose the right infrastructure for every use case without
              changing platforms.
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
              <div className="grid md:grid-cols-3 gap-4">
                <EnvironmentCard
                  icon={Building2}
                  title="On-Prem"
                  description="Sensitive workloads & compliance"
                />

                <EnvironmentCard
                  icon={Cloud}
                  title="Cloud"
                  description="Elastic analytics & processing"
                />

                <EnvironmentCard
                  icon={ShieldCheck}
                  title="Managed"
                  description="Zero infrastructure operations"
                />
              </div>

              <div className="flex justify-center py-8">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              <div className="rounded-[28px] border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-10 text-center">
                <Layers className="w-10 h-10 text-cyan-600 mx-auto mb-4" />

                <h3 className="font-semibold text-slate-900 text-lg">
                  Shared SegForge Platform
                </h3>

                <p className="text-sm text-slate-500 mt-2">
                  Consistent experiences across every deployment model.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const EnvironmentCard = ({ icon: Icon, title, description }) => (
  <div className="border border-slate-200 rounded-2xl p-6 text-center bg-slate-50">
    <Icon className="w-7 h-7 text-cyan-600 mx-auto mb-3" />

    <h4 className="font-semibold text-slate-900">{title}</h4>

    <p className="text-sm text-slate-500 mt-2">{description}</p>
  </div>
);

export default WorkloadDeploymentSection;
