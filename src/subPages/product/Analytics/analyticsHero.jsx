import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Play,
  Database,
  BookOpen,
  BarChart3,
  Brain,
  TrendingUp,
} from "lucide-react";

const AnalyticsHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
      {/* Background */}

      <div className="absolute inset-0 bg-grid opacity-[0.03]" />

      <div className="absolute top-0 right-0 w-[700px] h-[500px] bg-cyan-500/10 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              <BarChart3 className="w-4 h-4" />
              Analytics Platform
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 leading-[1.05]">
              From raw data
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                to business insight.
              </span>
            </h1>

            <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-xl">
              Explore datasets, build dashboards, and uncover trends from a
              single analytics platform. Whether you're an analyst, engineer, or
              business user, SegForge helps you move from questions to answers
              faster.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-slate-900 text-white rounded-xl hover:bg-slate-800 transition flex items-center gap-2 font-medium">
                Launch Analytics Hub
                <ArrowRight className="w-4 h-4" />
              </button>

              <button className="px-8 py-4 border border-slate-300 text-slate-700 rounded-xl hover:bg-slate-50 transition flex items-center gap-2 font-medium">
                <Play className="w-4 h-4" />
                Explore Dashboards
              </button>
            </div>
          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white border border-slate-200 rounded-[32px] p-10 shadow-[0_30px_80px_rgba(15,23,42,0.08)]">
              {/* Lakehouse */}

              <div className="flex justify-center">
                <div className="w-56 h-32 rounded-3xl bg-gradient-to-br from-cyan-50 to-blue-50 border border-cyan-200 flex flex-col items-center justify-center">
                  <Database className="w-8 h-8 text-cyan-600 mb-2" />

                  <h3 className="font-semibold text-slate-900">Lakehouse</h3>
                </div>
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* Tools */}

              <div className="grid grid-cols-3 gap-4">
                <ToolCard icon={BookOpen} title="Notebooks" />

                <ToolCard icon={BarChart3} title="Analytics" />

                <ToolCard icon={TrendingUp} title="Dashboards" />
              </div>

              {/* Connector */}

              <div className="flex justify-center py-6">
                <div className="w-px h-12 bg-cyan-300" />
              </div>

              {/* Insights */}

              <div className="flex justify-center">
                <div className="w-64 rounded-3xl bg-slate-900 text-white p-8 text-center">
                  <Brain className="w-8 h-8 mx-auto mb-3" />

                  <h3 className="font-semibold text-lg">Business Insights</h3>

                  <p className="text-slate-400 text-sm mt-2">
                    Discover trends, opportunities, and performance drivers.
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

const ToolCard = ({ icon: Icon, title }) => {
  return (
    <div className="border border-slate-200 rounded-2xl p-5 text-center bg-slate-50">
      <Icon className="w-6 h-6 text-cyan-600 mx-auto mb-3" />

      <h4 className="font-medium text-slate-900">{title}</h4>
    </div>
  );
};

export default AnalyticsHero;
