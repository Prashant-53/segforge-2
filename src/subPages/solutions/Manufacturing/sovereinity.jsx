import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import SovereigntyImg from "../../../assets/Solutions/Manufacturing/sovereignty.png";

const sovereigntyStats = [
  {
    value: "Self",
    label: "Hosted",
  },
  {
    value: "22",
    label: "Permission Areas",
  },
  {
    value: "Encrypted",
    label: "Credentials",
  },
  {
    value: "Private",
    label: "Infrastructure",
  },
];

const callouts = [
  "Protect Industrial IP",
  "Least Privilege Access",
  "Private Cloud Ready",
  "On-Prem Deployment",
];

const ManufacturingSovereignty = () => {
  return (
    <section className="py-12 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* VISUAL LEFT */}

          <motion.div
            className="order-2 lg:order-1"
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              <img
                src={SovereigntyImg}
                alt="Industrial Data Sovereignty"
                className="w-full object-cover"
              />
            </div>
          </motion.div>

          {/* CONTENT RIGHT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              Industrial Data Sovereignty
            </div>

            <h2 className="text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
              Keep manufacturing intelligence
              <br />
              under your control.
            </h2>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Protect proprietary manufacturing processes, product designs, and
              operational data by deploying SegForge within your own
              infrastructure.
              <br />
              <br />
              Maintain complete control over industrial intellectual property
              while enabling secure collaboration across teams, facilities, and
              production environments.
            </p>

            {/* Enterprise Stats Bar */}

            <div className="mt-12 border-y border-slate-200 py-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {sovereigntyStats.map((stat) => (
                  <div key={stat.label}>
                    <div className="text-2xl lg:text-2xl font-bold text-slate-900">
                      {stat.value}
                    </div>

                    <div className="mt-2 text-sm text-slate-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Business Callouts */}

            <div className="mt-10 grid grid-cols-2 gap-4">
              {callouts.map((item) => (
                <div
                  key={item}
                  className="rounded-2xl bg-slate-50 border border-slate-200 px-5 py-4 text-sm font-medium text-slate-700"
                >
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ManufacturingSovereignty;
