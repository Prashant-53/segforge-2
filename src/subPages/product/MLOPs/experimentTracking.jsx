import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Brain, BarChart3, Trophy } from "lucide-react";

const features = [
  "MLflow Integration",
  "XGBoost",
  "Random Forest",
  "Neural Networks",
  "Hyperparameter Tuning",
];

const ExperimentTracking = () => {
  return (
    <section className="py-32 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
              Experiment Tracking
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold text-slate-900 leading-tight">
              Keep every experiment organized and reproducible.
            </h2>

            <p className="mt-6 text-md text-slate-600 leading-relaxed max-w-xl">
              Track parameters, metrics, artifacts, and model versions from a
              single workspace. Compare runs, evaluate performance, and quickly
              identify your best model.
            </p>

            <div className="mt-10 space-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-cyan-500" />

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

              <div className="px-8 py-5 border-b border-slate-200 bg-slate-50 flex justify-between items-center">
                <div>
                  <h3 className="font-semibold text-slate-900">
                    Experiment Dashboard
                  </h3>

                  <p className="text-sm text-slate-500">
                    Compare runs in real time
                  </p>
                </div>

                <FlaskConical className="w-5 h-5 text-cyan-600" />
              </div>

              {/* Runs */}

              <div className="p-8 space-y-5">
                <ExperimentRun
                  name="Run #124"
                  model="Random Forest"
                  score="96.8%"
                />

                <ExperimentRun name="Run #125" model="XGBoost" score="95.4%" />

                <ExperimentRun
                  name="Run #126"
                  model="Neural Network"
                  score="97.3%"
                  winner
                />
              </div>

              {/* Metrics */}

              <div className="px-8 pb-8">
                <div className="border border-slate-200 rounded-2xl p-6">
                  <div className="flex items-center gap-2 mb-5">
                    <BarChart3 className="w-4 h-4 text-cyan-600" />

                    <span className="font-medium text-slate-900">
                      Performance Trend
                    </span>
                  </div>

                  <div className="flex items-end gap-3 h-32">
                    {[45, 70, 85, 60, 95, 80].map((h, i) => (
                      <div
                        key={i}
                        className="flex-1 bg-cyan-100 rounded-t-xl"
                        style={{ height: `${h}%` }}
                      />
                    ))}
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

const ExperimentRun = ({ name, model, score, winner }) => {
  return (
    <div
      className={`p-5 rounded-2xl border flex justify-between items-center ${
        winner ? "border-cyan-200 bg-cyan-50" : "border-slate-200"
      }`}
    >
      <div>
        <h4 className="font-semibold text-slate-900">{name}</h4>

        <p className="text-sm text-slate-500">{model}</p>
      </div>

      <div className="flex items-center gap-3">
        {winner && <Trophy className="w-4 h-4 text-cyan-600" />}

        <span className="font-semibold text-slate-900">{score}</span>
      </div>
    </div>
  );
};

export default ExperimentTracking;
