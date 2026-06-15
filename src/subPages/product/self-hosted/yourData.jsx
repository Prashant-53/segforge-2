import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CheckCircle2,
  Database,
  KeyRound,
  Server,
  Layers,
  Lock,
} from "lucide-react";

const features = [
  "Data Sovereignty",
  "No Vendor Lock-In",
  "Open Standards",
  "Private Networking",
  "Full Infrastructure Ownership",
  "Open Ecosystem",
];

const DataSovereigntySection = () => {
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
              <ShieldCheck className="w-4 h-4" />
              Data Sovereignty
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Keep complete control
              <br />
              over your data and infrastructure.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Your data never leaves your environment unless you decide it
              should.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Run SegForge inside your own cloud, private network, or
              on-premises infrastructure while maintaining full ownership of
              data, metadata, credentials, and workloads.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Built on open technologies, SegForge gives teams flexibility
              without vendor lock-in.
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
              <div className="px-6 py-5 border-b border-slate-200 bg-slate-50">
                <h3 className="font-semibold text-slate-900">
                  Ownership & Control
                </h3>
              </div>

              <div className="p-6 sm:p-8">
                {/* Environment */}

                <div className="rounded-3xl border border-cyan-200 bg-gradient-to-br from-cyan-50 to-blue-50 p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <Server className="w-6 h-6 text-cyan-600" />

                    <h3 className="font-semibold text-slate-900">
                      Your Environment
                    </h3>
                  </div>

                  <div className="space-y-4">
                    <OwnershipItem icon={Database} label="Data" />

                    <OwnershipItem icon={Layers} label="Metadata" />

                    <OwnershipItem icon={KeyRound} label="Credentials" />

                    <OwnershipItem icon={Server} label="Workloads" />
                  </div>
                </div>

                <div className="flex justify-center py-6">
                  <div className="w-px h-10 bg-cyan-300" />
                </div>

                {/* Control */}

                <div className="rounded-3xl bg-slate-900 text-white p-8 text-center">
                  <Lock className="w-10 h-10 mx-auto mb-4" />

                  <h3 className="font-semibold text-lg">Fully Controlled</h3>

                  <p className="text-slate-400 text-sm mt-2">
                    Infrastructure, access, networking, and governance remain
                    under your control.
                  </p>
                </div>

                <div className="grid grid-cols-3 gap-4 mt-8">
                  <MetricCard value="100%" label="Ownership" />

                  <MetricCard value="0" label="Vendor Lock-In" />

                  <MetricCard value="Private" label="Environment" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const OwnershipItem = ({ icon: Icon, label }) => (
  <div className="flex items-center gap-3 bg-white border border-slate-200 rounded-2xl p-4">
    <Icon className="w-5 h-5 text-cyan-600" />
    <span className="font-medium text-slate-900">{label}</span>
  </div>
);

const MetricCard = ({ value, label }) => (
  <div className="border border-slate-200 rounded-2xl p-4 text-center">
    <div className="text-xl font-bold text-slate-900">{value}</div>
    <div className="text-sm text-slate-500 mt-1">{label}</div>
  </div>
);

export default DataSovereigntySection;
