import React from "react";
import { motion } from "framer-motion";
import {
  SlidersHorizontal,
  Database,
  BrainCircuit,
  FlaskConical,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

const tuningSteps = [
  {
    icon: Database,
    title: "Prepare Data",
    description: "Select and prepare the governed datasets used for tuning.",
  },
  {
    icon: SlidersHorizontal,
    title: "Tune Model",
    description: "Configure tuning parameters for your specific workload.",
  },
  {
    icon: FlaskConical,
    title: "Evaluate",
    description: "Compare model performance against your evaluation criteria.",
  },
  {
    icon: CheckCircle2,
    title: "Promote",
    description: "Move validated models toward production workflows.",
  },
];

const ModelTuningSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24 sm:py-28 lg:py-32">
      {/* Background */}

      <div className="absolute right-0 top-1/4 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[160px]" />

      <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-400/5 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-24">
          {/* LEFT — MODEL WORKFLOW */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-2 lg:order-1"
          >
            <div className="relative rounded-[28px] border border-slate-200 bg-slate-50 p-5 shadow-[0_30px_80px_rgba(15,23,42,0.07)] sm:p-7">
              {/* Header */}

              <div className="flex items-center justify-between border-b border-slate-200 pb-5">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-50">
                    <SlidersHorizontal className="h-5 w-5 text-cyan-600" />
                  </div>

                  <div>
                    <p className="font-semibold text-slate-900">Model Tuning</p>

                    <p className="text-xs text-slate-500">Model lifecycle</p>
                  </div>
                </div>

                <span className="rounded-full bg-cyan-50 px-3 py-1 text-xs font-medium text-cyan-700">
                  Training
                </span>
              </div>

              {/* Pipeline */}

              <div className="mt-6 space-y-3">
                {tuningSteps.map((step, index) => {
                  const Icon = step.icon;

                  return (
                    <React.Fragment key={step.title}>
                      <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 0.4,
                          delay: index * 0.1,
                        }}
                        className="rounded-2xl border border-slate-200 bg-white p-4"
                      >
                        <div className="flex items-center gap-4">
                          <div
                            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${
                              index === 1
                                ? "bg-cyan-500 text-white"
                                : "bg-cyan-50 text-cyan-600"
                            }`}
                          >
                            <Icon className="h-5 w-5" />
                          </div>

                          <div className="min-w-0">
                            <div className="font-semibold text-slate-900">
                              {step.title}
                            </div>

                            <div className="mt-1 text-xs leading-5 text-slate-500">
                              {step.description}
                            </div>
                          </div>

                          {index === 1 && (
                            <span className="ml-auto shrink-0 rounded-full bg-cyan-50 px-2.5 py-1 text-[10px] font-medium text-cyan-700">
                              Active
                            </span>
                          )}
                        </div>
                      </motion.div>

                      {index < tuningSteps.length - 1 && (
                        <div className="ml-9 h-4 w-px bg-gradient-to-b from-cyan-300 to-blue-300" />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>

              {/* Model Metrics */}

              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
                <div className="rounded-xl bg-white p-4 border border-slate-200">
                  <div className="text-xs text-slate-500">Model</div>

                  <div className="mt-1 truncate text-sm font-semibold text-slate-900">
                    enterprise-v2
                  </div>
                </div>

                <div className="rounded-xl bg-white p-4 border border-slate-200">
                  <div className="text-xs text-slate-500">Dataset</div>

                  <div className="mt-1 text-sm font-semibold text-slate-900">
                    2.4M rows
                  </div>
                </div>

                <div className="rounded-xl bg-white p-4 border border-slate-200 col-span-2 sm:col-span-1">
                  <div className="text-xs text-slate-500">Evaluation</div>

                  <div className="mt-1 text-sm font-semibold text-green-600">
                    Passed
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* RIGHT — CONTENT */}

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="order-1 lg:order-2"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <SlidersHorizontal className="h-4 w-4" />
              Model Tuning
            </div>

            <h2 className="mt-7 text-3xl font-bold leading-none text-slate-900 sm:text-4xl lg:text-4xl">
              Adapt models to
              <br />
              your data and domain.
            </h2>

            <p className="mt-6 max-w-xl text-base leading-5 text-slate-600 sm:text-md sm:leading-8">
              Tune models against the data and requirements of your organization
              while keeping the workflow connected to the rest of your data
              platform.
            </p>

            {/* Benefits */}

            <div className="mt-10 space-y-5">
              <div className="flex gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Use governed enterprise data
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Build tuning workflows around datasets already managed
                    within your platform.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Evaluate before deployment
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Compare results and validate model behavior before promoting
                    a model into production workflows.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-cyan-100">
                  <CheckCircle2 className="h-4 w-4 text-cyan-600" />
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900">
                    Keep the lifecycle connected
                  </h3>

                  <p className="mt-1 text-sm leading-6 text-slate-600">
                    Move from data preparation to tuning, evaluation, and
                    production without creating disconnected workflows.
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

export default ModelTuningSection;
