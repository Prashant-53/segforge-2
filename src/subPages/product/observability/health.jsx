import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Database,
  Activity,
  Server,
  HardDrive,
  Network,
} from "lucide-react";

const features = [
  "Service Health Monitoring",
  "PostgreSQL",
  "Kafka",
  "Flink",
  "Redis",
  "MinIO",
  "Nessie",
];

const services = [
  { name: "PostgreSQL", status: "Healthy" },
  { name: "Kafka", status: "Healthy" },
  { name: "Flink", status: "Healthy" },
  { name: "Redis", status: "Healthy" },
  { name: "MinIO", status: "Healthy" },
  { name: "Nessie", status: "Healthy" },
];

const PlatformHealthSection = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 xl:gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <Activity className="w-4 h-4" />
              Infrastructure Monitoring
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Know the health of every critical service.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Track the systems powering your data platform in real time.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Monitor databases, streaming infrastructure, storage, and
              processing engines from a single operational view.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Identify bottlenecks before they impact pipelines and users.
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
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Header */}

              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Service Status Dashboard
                  </h3>

                  <p className="text-sm text-slate-500 mt-1">
                    Real-time platform monitoring
                  </p>
                </div>

                <div className="px-3 py-1 rounded-full bg-green-50 text-green-700 text-xs font-medium">
                  All Systems Operational
                </div>
              </div>

              {/* Services */}

              <div className="p-6 sm:p-8 space-y-4">
                {services.map((service) => (
                  <ServiceRow key={service.name} name={service.name} />
                ))}

                {/* Summary */}

                <div className="mt-8 grid grid-cols-3 gap-4">
                  <MetricCard value="99.99%" label="Uptime" />

                  <MetricCard value="6" label="Services" />

                  <MetricCard value="0" label="Incidents" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ServiceRow = ({ name }) => (
  <div className="flex items-center justify-between border border-slate-200 rounded-2xl px-5 py-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center">
        <Database className="w-5 h-5 text-cyan-600" />
      </div>

      <span className="font-medium text-slate-900">{name}</span>
    </div>

    <div className="flex items-center gap-2 text-green-700">
      <div className="w-2.5 h-2.5 rounded-full bg-green-500" />

      <span className="text-sm font-medium">Healthy</span>
    </div>
  </div>
);

const MetricCard = ({ value, label }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-xl font-bold text-slate-900">{value}</div>

    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default PlatformHealthSection;
