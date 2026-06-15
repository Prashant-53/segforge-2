import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  RefreshCw,
  Activity,
  CheckCircle2,
  Wifi,
  Gauge,
  Database,
} from "lucide-react";

const features = [
  "Connector Recovery",
  "Kafka Reconnects",
  "Checkpoint Restoration",
  "Automatic Retries",
  "Health Monitoring",
];

const CDCWatchdogSection = () => {
  return (
    <section className="py-16 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <ShieldCheck className="w-4 h-4" />
              CDC Watchdog
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Keep data flowing,
              <br />
              even when systems fail.
            </h2>

            <p className="mt-6 text-md  text-slate-600 leading-relaxed max-w-xl">
              Streaming systems shouldn't require constant supervision.
            </p>

            <p className="mt-4 text-md  text-slate-600 leading-relaxed max-w-xl">
              The CDC Watchdog continuously monitors pipeline health and
              automatically recovers from common failures before they impact
              downstream consumers.
            </p>

            <p className="mt-4 text-md  text-slate-600 leading-relaxed max-w-xl">
              Your teams spend less time troubleshooting and more time building.
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

              <div className="px-8 py-5 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Pipeline Health
                  </h3>

                  <p className="text-sm text-slate-500">
                    Real-time operational monitoring
                  </p>
                </div>

                <div className="flex items-center gap-2 text-green-600 font-medium text-sm">
                  <span className="w-2 h-2 rounded-full bg-green-500" />
                  Healthy
                </div>
              </div>

              <div className="p-8">
                {/* Top Metrics */}

                <div className="grid grid-cols-2 gap-4">
                  <MetricCard
                    icon={Activity}
                    title="Events / Sec"
                    value="42.8K"
                  />

                  <MetricCard icon={Gauge} title="Latency" value="420ms" />

                  <MetricCard icon={Wifi} title="Kafka Lag" value="0" />

                  <MetricCard
                    icon={Database}
                    title="Connectors"
                    value="12 Active"
                  />
                </div>

                {/* Health Timeline */}

                <div className="mt-8 border border-slate-200 rounded-2xl p-5">
                  <h4 className="font-medium text-slate-900 mb-5">
                    Automated Recovery Events
                  </h4>

                  <div className="space-y-4">
                    <TimelineItem
                      title="Kafka Connection Restored"
                      time="2 mins ago"
                    />

                    <TimelineItem
                      title="Checkpoint Recovered"
                      time="12 mins ago"
                    />

                    <TimelineItem
                      title="Connector Restarted"
                      time="25 mins ago"
                    />
                  </div>
                </div>

                {/* Watchdog */}

                <div className="mt-8 rounded-2xl bg-cyan-50 border border-cyan-100 p-5">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center">
                      <RefreshCw className="w-5 h-5 text-cyan-600" />
                    </div>

                    <div>
                      <h4 className="font-semibold text-slate-900">
                        CDC Watchdog Active
                      </h4>

                      <p className="text-sm text-slate-600 mt-1">
                        Monitoring streams and recovering failures
                        automatically.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ icon: Icon, title, value }) => (
  <div className="border border-slate-200 rounded-2xl p-5">
    <div className="flex items-center gap-2 mb-3">
      <Icon className="w-4 h-4 text-cyan-600" />
      <span className="text-sm text-slate-500">{title}</span>
    </div>

    <div className="text-2xl font-bold text-slate-900">{value}</div>
  </div>
);

const TimelineItem = ({ title, time }) => (
  <div className="flex items-start gap-3">
    <div className="w-2 h-2 rounded-full bg-cyan-500 mt-2" />

    <div>
      <p className="font-medium text-slate-900">{title}</p>

      <p className="text-sm text-slate-500">{time}</p>
    </div>
  </div>
);

export default CDCWatchdogSection;
