import React from "react";
import { motion } from "framer-motion";
import { Server, CheckCircle2, Box, Cloud, Cpu } from "lucide-react";

const features = [
  "Docker Compose",
  "Kubernetes",
  "Amazon EKS",
  "EC2 Clusters",
  "High Availability",
  "Auto Scaling",
];

const DeploymentModelsSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className=" max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            <Server className="w-4 h-4" />
            Deployment Models
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
            Choose the deployment model
            <br />
            that fits your team.
          </h2>

          <p className="mt-6 text-md text-slate-600 leading-relaxed">
            Start locally, scale to production, or provision dedicated compute
            environments as your workloads grow.
          </p>

          <p className="mt-4 text-md text-slate-600 leading-relaxed">
            Whether you're a small engineering team or a large enterprise,
            SegForge adapts to your infrastructure strategy.
          </p>
        </div>

        {/* Deployment Cards */}

        <div className="grid lg:grid-cols-3 gap-8 mt-20">
          <DeploymentCard
            icon={Box}
            title="Development"
            subtitle="Docker Compose"
            description="Run SegForge locally for development, testing, and team experimentation."
          />

          <DeploymentCard
            featured
            icon={Cloud}
            title="Production"
            subtitle="Kubernetes / EKS"
            description="Deploy resilient, highly available environments built for production workloads."
          />

          <DeploymentCard
            icon={Cpu}
            title="Elastic Compute"
            subtitle="EC2 Clusters"
            description="Provision dedicated compute resources for large-scale ETL, AI, and analytics."
          />
        </div>

        {/* Features */}

        <div className="grid md:grid-cols-3 gap-4 mt-16">
          {features.map((feature) => (
            <div
              key={feature}
              className="flex items-center gap-3 border border-slate-200 rounded-2xl p-4"
            >
              <CheckCircle2 className="w-5 h-5 text-cyan-600" />

              <span className="text-slate-700">{feature}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const DeploymentCard = ({
  icon: Icon,
  title,
  subtitle,
  description,
  featured,
}) => (
  <div
    className={`rounded-[28px] border p-8 transition-all
      ${
        featured
          ? "border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 shadow-lg"
          : "border-slate-200 bg-white"
      }`}
  >
    <div className="w-14 h-14 rounded-2xl bg-white border border-slate-200 flex items-center justify-center mb-6">
      <Icon className="w-7 h-7 text-cyan-600" />
    </div>

    <h3 className="text-xl font-semibold text-slate-900">{title}</h3>

    <p className="text-cyan-700 font-medium mt-2">{subtitle}</p>

    <p className="text-slate-600 mt-5 leading-relaxed">{description}</p>
  </div>
);

export default DeploymentModelsSection;
