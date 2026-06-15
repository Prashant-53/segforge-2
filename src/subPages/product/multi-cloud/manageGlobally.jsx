import React from "react";
import { motion } from "framer-motion";
import {
  Globe,
  CheckCircle2,
  Cloud,
  MapPin,
  ShieldCheck,
  Rocket,
} from "lucide-react";

const features = [
  "Managed Cloud",
  "Multi-Region Deployments",
  "Automatic Scaling",
  "Backups",
  "Global Availability",
  "Zero-Ops Operations",
];

const ManagedGlobalCloudSection = () => {
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
              <Globe className="w-4 h-4" />
              Managed Global Service
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Scale globally without
              <br />
              managing infrastructure.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Launch managed environments in multiple regions while maintaining
              a consistent operating experience.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Teams can expand internationally, support regional requirements,
              and reduce operational complexity without sacrificing portability.
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
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Header */}

              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-900">
                  Global Managed Cloud
                </h3>
              </div>

              <div className="p-6 sm:p-8">
                {/* Regions */}

                <div className="grid grid-cols-3 gap-4">
                  <RegionCard region="US-East" location="North America" />

                  <RegionCard region="EU-West" location="Europe" />

                  <RegionCard region="AP-Southeast" location="Asia Pacific" />
                </div>

                {/* Connector */}

                <div className="flex justify-center py-8">
                  <div className="w-px h-12 bg-cyan-300" />
                </div>

                {/* Managed Cloud */}

                <div className="relative">
                  <div className="absolute inset-0 bg-cyan-500/10 blur-3xl rounded-full" />

                  <div className="relative rounded-[28px] border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8 text-center">
                    <Cloud className="w-12 h-12 text-cyan-600 mx-auto mb-4" />

                    <h3 className="text-xl font-semibold text-slate-900">
                      Managed SegForge Cloud
                    </h3>

                    <p className="text-sm text-slate-500 mt-2">
                      Provisioning • Scaling • Backups • Operations
                    </p>

                    <div className="grid grid-cols-3 gap-3 mt-6">
                      <CloudTag text="Auto Scale" />
                      <CloudTag text="HA" />
                      <CloudTag text="Backups" />
                    </div>
                  </div>
                </div>

                {/* Connector */}

                <div className="flex justify-center py-8">
                  <div className="w-px h-12 bg-cyan-300" />
                </div>

                {/* Global Availability */}

                <div className="rounded-3xl bg-slate-900 text-white p-8 text-center">
                  <Rocket className="w-10 h-10 mx-auto mb-4" />

                  <h3 className="text-lg font-semibold">Global Availability</h3>

                  <p className="text-sm text-slate-400 mt-2">
                    Deliver consistent experiences across regions.
                  </p>
                </div>

                {/* Bottom Stats */}

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <MetricCard value="24/7" label="Operations" />

                  <MetricCard value="∞" label="Scale" />

                  <MetricCard value="Global" label="Reach" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const RegionCard = ({ region, location }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center bg-slate-50">
    <MapPin className="w-5 h-5 text-cyan-600 mx-auto mb-2" />

    <h4 className="font-medium text-slate-900">{region}</h4>

    <p className="text-xs text-slate-500 mt-1">{location}</p>
  </div>
);

const CloudTag = ({ text }) => (
  <div className="bg-white border border-slate-200 rounded-xl py-2 text-sm font-medium text-slate-700">
    {text}
  </div>
);

const MetricCard = ({ value, label }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-xl font-bold text-slate-900">{value}</div>

    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default ManagedGlobalCloudSection;
