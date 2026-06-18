import React, { useMemo, useState } from "react";
import { BrainCircuit } from "lucide-react";

const useCases = {
  "Real-Time Fraud Detection": {
    workflow: [
      "CDC Source",
      "Feature Engineering",
      "Model Training",
      "MLflow Registry",
      "Streaming Inference",
      "Drift Monitoring",
    ],
  },

  "Customer Churn Prediction": {
    workflow: [
      "Customer Data",
      "Feature Engineering",
      "Training",
      "Registry",
      "Batch Scoring",
      "Monitoring",
    ],
  },

  "Demand Forecasting": {
    workflow: [
      "Sales Data",
      "Feature Engineering",
      "Forecast Model",
      "Registry",
      "Predictions",
      "Monitoring",
    ],
  },

  "Credit Risk Scoring": {
    workflow: [
      "Loan Data",
      "Feature Engineering",
      "Risk Model",
      "Registry",
      "Scoring",
      "Monitoring",
    ],
  },

  "Predictive Maintenance": {
    workflow: [
      "Sensor Data",
      "Feature Engineering",
      "Training",
      "Registry",
      "Inference",
      "Monitoring",
    ],
  },
};

const datasetSizes = ["10M Rows", "100M Rows", "1B Rows"];

const MLROISimulator = () => {
  const [useCase, setUseCase] = useState("Real-Time Fraud Detection");

  const [datasetSize, setDatasetSize] = useState("100M Rows");

  const workflow = useMemo(() => useCases[useCase], [useCase]);

  return (
    <section className="py-12 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            <BrainCircuit className="w-4 h-4" />
            AI ROI Simulator
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            See how quickly your models
            <br />
            reach production.
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto">
            Select your use case and dataset size to visualize the
            infrastructure, workflows, and operational steps required to move
            from training to production.
          </p>
        </div>

        {/* Controls */}

        <div className="mt-12 grid lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <div className="text-sm font-medium text-slate-500 mb-4">
              Use Cases
            </div>

            <div className="flex flex-wrap gap-3">
              {Object.keys(useCases).map((item) => (
                <button
                  key={item}
                  onClick={() => setUseCase(item)}
                  className={`px-4 py-2 rounded-xl border text-sm ${
                    useCase === item
                      ? "bg-cyan-50 border-cyan-200 text-cyan-700"
                      : "bg-white border-slate-200"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-6">
            <div className="text-sm font-medium text-slate-500 mb-4">
              Dataset Size
            </div>

            <div className="flex gap-3">
              {datasetSizes.map((size) => (
                <button
                  key={size}
                  onClick={() => setDatasetSize(size)}
                  className={`px-4 py-2 rounded-xl border text-sm ${
                    datasetSize === size
                      ? "bg-cyan-50 border-cyan-200 text-cyan-700"
                      : "bg-white border-slate-200"
                  }`}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Simulator */}

        <div className="mt-10 grid lg:grid-cols-2 gap-10">
          <div className="bg-white rounded-[32px] border border-slate-200 p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">
              Generated Workflow
            </h3>

            {workflow.workflow.map((step, index) => (
              <React.Fragment key={step}>
                <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center">
                  {step}
                </div>

                {index < workflow.workflow.length - 1 && (
                  <div className="py-3 text-center text-cyan-500">↓</div>
                )}
              </React.Fragment>
            ))}
          </div>

          <div className="bg-white rounded-[32px] border border-slate-200 p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">
              Estimated Time-to-Production
            </h3>

            <div className="space-y-6">
              <div className="rounded-2xl bg-cyan-50 border border-cyan-200 p-6">
                <div className="text-sm text-cyan-700">
                  SegForge Unified Platform
                </div>

                <div className="mt-2 text-3xl font-bold text-cyan-800">
                  2–5 Days
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 p-6">
                <div className="text-sm text-slate-500">
                  Traditional Point Solution Stack
                </div>

                <div className="mt-2 text-3xl font-bold text-slate-900">
                  4–12 Weeks
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outputs */}

        <div className="mt-14 border-y border-slate-200 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              "MLOps Architecture Blueprint",
              "Infrastructure Requirements",
              "Deployment Workflow",
              "Estimated Time-to-Production",
              "ROI Projection",
            ].map((item) => (
              <div key={item}>
                <div className="text-lg font-semibold text-slate-900">
                  {item}
                </div>
                <div className="mt-2 text-sm text-slate-500">Included</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MLROISimulator;
