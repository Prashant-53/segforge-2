import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, CheckCircle2 } from "lucide-react";
import ReportImg from "../../../assets/Solutions/Finance/report.png";

const RegulatoryReporting = () => {
  const features = [
    "Governed Data Pipelines",
    "End-to-End Lineage",
    "Time Travel Queries",
    "Audit-Ready Reporting",
    "Compliance Monitoring",
  ];

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
              <ShieldCheck className="w-4 h-4" />
              Regulatory Reporting
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 leading-[1.1]">
              Deliver trusted reports
              <br />
              faster while reducing
              <br />
              compliance risk.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Generate audit-ready regulatory reports using governed data
              pipelines, complete lineage visibility, and historical time-travel
              capabilities.
              <br />
              <br />
              Give compliance teams confidence in every report while reducing
              manual effort and accelerating reporting cycles.
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
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={ReportImg}
                alt="Regulatory Reporting Architecture"
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RegulatoryReporting;
