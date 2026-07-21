import React from "react";
import { motion } from "framer-motion";
import {
  Activity,
  Gauge,
  BarChart3,
  Workflow,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";

const monitoringGroups = [
  {
    icon: Gauge,
    title: "Latency & Throughput",
    items: [
      "End-to-End Delay",
      "Processing Time",
      "Commit Latency",
      "Events per Second",
      "Records Processed",
      "Total Changes",
    ],
  },
  {
    icon: BarChart3,
    title: "Kafka Health",
    items: [
      "Consumer Lag",
      "Topic Health",
      "Partition Status",
      "Broker Metrics",
    ],
  },
];

const monitoringFeatures = [
  {
    icon: Workflow,
    title: "Live Pipeline Monitoring",
    description:
      "Visualize every stage of your CDC pipeline in real time, monitor ingestion progress, identify bottlenecks, and verify successful data delivery across your entire architecture.",
  },
  {
    icon: Activity,
    title: "Operational Intelligence",
    description:
      "Receive instant alerts for failures, monitor synchronization health, detect abnormal latency, and proactively resolve issues before they impact downstream analytics.",
  },
];

const MonitoringSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-28">
      {/* Animated Grid */}

      <motion.div
        animate={{
          backgroundPosition: ["0px 0px", "120px 120px"],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Glow */}

      <div className="absolute right-0 top-32 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* LEFT IMAGE */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            {/* Glow */}

            <div className="absolute inset-0 rounded-[36px] bg-cyan-400/10 blur-3xl" />

            {/* Product Screenshot */}

            <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
              <img
                src="/images/cdc-monitoring-dashboard.webp"
                alt="CDC Monitoring Dashboard"
                className="w-full"
              />
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            {/* Badge */}

            <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Operational Intelligence
            </div>

            {/* Heading */}

            <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
              Monitor Every Stream.
              <br />
              Detect Every Issue.
            </h2>

            {/* Description */}

            <p className="mt-6 text-md leading-6 text-slate-600">
              Track synchronization health, latency, throughput, and processing
              performance through a unified real-time operations dashboard built
              for enterprise-scale CDC workloads.
            </p>

            {/* Monitoring Groups */}

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              {monitoringGroups.map((group) => (
                <div
                  key={group.title}
                  className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <group.icon className="h-7 w-7 text-cyan-600" />

                    <h3 className="text-xl font-semibold text-slate-900">
                      {group.title}
                    </h3>
                  </div>

                  <div className="mt-6 space-y-3">
                    {group.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <CheckCircle2 className="h-4 w-4 text-cyan-500" />

                        <span className="text-slate-700">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Monitoring Features */}

            <div className="mt-10 space-y-5">
              {monitoringFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-5 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-cyan-200 hover:shadow-lg"
                >
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                    <feature.icon className="h-7 w-7 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>

                    <p className="mt-2 leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Highlight */}

            <div className="mt-10 rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-white p-6">
              <div className="flex items-start gap-4">
                <ShieldCheck className="mt-1 h-7 w-7 text-cyan-600" />

                <div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    Complete Visibility from Database Transaction to
                    Analytics-Ready Data.
                  </h3>

                  <p className="mt-3 leading-7 text-slate-600">
                    Monitor every stage of your CDC pipelines with live
                    operational metrics, intelligent health monitoring,
                    throughput analytics, and automated alerts that ensure
                    reliable enterprise data synchronization.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MonitoringSection;
