import React from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  CheckCircle2,
  TrendingUp,
  Users,
  Globe,
  BarChart3,
} from "lucide-react";

const features = [
  "Apache Superset",
  "Drag-and-Drop Charts",
  "Team Dashboards",
  "Scheduled Reports",
  "Workspace Sharing",
];

const AnalyticsDashboardsSection = () => {
  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <LayoutDashboard className="w-4 h-4" />
              Dashboards & Reporting
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Share insights with the people who need them.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Transform analysis into dashboards, reports, and visualizations
              that teams can access and understand instantly.
            </p>

            <p className="mt-4 text-md text-slate-600 leading-relaxed max-w-xl">
              Create charts without code and keep everyone aligned around the
              same metrics, goals, and business outcomes.
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
              {/* Dashboard Header */}

              <div className="px-6 py-4 border-b border-slate-200 bg-slate-50 flex items-center justify-between">
                <h3 className="font-medium text-slate-900">
                  Executive Dashboard
                </h3>

                <span className="text-sm text-slate-500">
                  Updated 2 mins ago
                </span>
              </div>

              <div className="p-6">
                {/* KPI Row */}

                <div className="grid grid-cols-2 gap-4 mb-4">
                  <KPI icon={TrendingUp} label="Revenue" value="$8.4M" />

                  <KPI icon={Users} label="Active Customers" value="124K" />
                </div>

                {/* Main Chart */}

                <div className="border border-slate-200 rounded-2xl p-5 mb-4">
                  <div className="flex justify-between mb-6">
                    <span className="font-medium text-slate-900">
                      Revenue Trend
                    </span>

                    <span className="text-sm text-green-600">+18%</span>
                  </div>

                  <div className="flex items-end gap-2 h-36">
                    {[35, 55, 48, 75, 60, 85, 95].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 rounded-t-xl bg-cyan-200"
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

                {/* Bottom Grid */}

                <div className="grid grid-cols-2 gap-4">
                  {/* Map */}

                  <div className="border border-slate-200 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <Globe className="w-4 h-4 text-cyan-600" />

                      <span className="font-medium text-slate-900">
                        Regional Activity
                      </span>
                    </div>

                    <div className="h-32 rounded-xl bg-slate-100 flex items-center justify-center text-slate-400 text-sm">
                      World Map
                    </div>
                  </div>

                  {/* Heatmap */}

                  <div className="border border-slate-200 rounded-2xl p-5">
                    <div className="flex items-center gap-2 mb-4">
                      <BarChart3 className="w-4 h-4 text-cyan-600" />

                      <span className="font-medium text-slate-900">
                        Engagement Heatmap
                      </span>
                    </div>

                    <div className="grid grid-cols-5 gap-1">
                      {[...Array(25)].map((_, i) => (
                        <div
                          key={i}
                          className={`aspect-square rounded ${
                            i % 4 === 0
                              ? "bg-cyan-500"
                              : i % 3 === 0
                                ? "bg-cyan-300"
                                : "bg-cyan-100"
                          }`}
                        />
                      ))}
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

const KPI = ({ icon: Icon, label, value }) => (
  <div className="border border-slate-200 rounded-2xl p-5">
    <div className="flex items-center gap-2 text-slate-500 mb-3">
      <Icon className="w-4 h-4 text-cyan-600" />
      {label}
    </div>

    <div className="text-2xl font-bold text-slate-900">{value}</div>
  </div>
);

export default AnalyticsDashboardsSection;
