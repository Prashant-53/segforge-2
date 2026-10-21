import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const MLOpsFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question:
        "What is the MLOps Platform in SegForge, and what stages of the ML lifecycle does it cover?",
      answer: (
        <>
          <p>
            SegForge provides a complete MLOps platform built directly into the
            workspace, bringing the machine learning lifecycle together from
            feature engineering through model serving and monitoring.
          </p>

          <ul className="mt-4 space-y-2 text-slate-500">
            <li>
              <strong className="text-slate-700">Feature Engineering:</strong>{" "}
              Clean, normalize, and transform datasets using visual pipeline
              transformation nodes.
            </li>
            <li>
              <strong className="text-slate-700">
                Model Training &amp; Tuning:
              </strong>{" "}
              Train models using built-in algorithms or launch automated
              hyperparameter tuning.
            </li>
            <li>
              <strong className="text-slate-700">Experiment Tracking:</strong>{" "}
              Track training parameters, metrics, and model artifacts through
              the integrated MLflow tracking server and registry.
            </li>
            <li>
              <strong className="text-slate-700">
                Batch Scoring &amp; Real-Time Inference:
              </strong>{" "}
              Apply trained models to batch datasets or serve predictions
              through real-time inference.
            </li>
            <li>
              <strong className="text-slate-700">
                Monitoring &amp; Retraining:
              </strong>{" "}
              Track prediction drift and trigger alerts or retraining when model
              performance degrades.
            </li>
          </ul>
        </>
      ),
    },

    {
      question:
        "Which algorithms and pre-built templates are available for model training?",
      answer: (
        <>
          <p>
            SegForge supports four primary supervised learning algorithms across
            classification and regression tasks:
          </p>

          <ul className="mt-4 space-y-2 text-slate-500">
            <li>
              <strong className="text-slate-700">XGBoost:</strong> Gradient
              boosting for tabular datasets.
            </li>
            <li>
              <strong className="text-slate-700">Random Forest:</strong>{" "}
              Ensemble learning for classification and regression.
            </li>
            <li>
              <strong className="text-slate-700">Logistic Regression:</strong>{" "}
              Binary outcome modeling.
            </li>
            <li>
              <strong className="text-slate-700">Neural Networks:</strong> Deep
              learning models for complex data patterns.
            </li>
          </ul>

          <p className="mt-5">
            The platform also includes pre-built model templates for common use
            cases such as:
          </p>

          <ul className="mt-4 space-y-2 text-slate-500">
            <li>Churn Prediction</li>
            <li>Credit Risk (PD)</li>
            <li>Demand Forecasting</li>
            <li>Anomaly Detection</li>
          </ul>
        </>
      ),
    },

    {
      question: "How does feature engineering work inside SegForge?",
      answer: (
        <>
          <p>
            Feature engineering can be performed visually inside ETL Studio
            using dedicated ML Feature Engineering nodes.
          </p>

          <ul className="mt-4 space-y-2 text-slate-500">
            <li>
              <strong className="text-slate-700">Scaler:</strong> Normalizes
              numeric features using standard, min-max, or robust scaling.
            </li>
            <li>
              <strong className="text-slate-700">Encoder:</strong> Converts
              categorical variables using one-hot, label, or ordinal encoding.
            </li>
            <li>
              <strong className="text-slate-700">Imputer:</strong> Fills missing
              values using mean, median, mode, or custom defaults.
            </li>
            <li>
              <strong className="text-slate-700">Feature Cross:</strong>{" "}
              Generates interaction features from multiple input columns.
            </li>
            <li>
              <strong className="text-slate-700">
                Feature Selector &amp; Binning:
              </strong>{" "}
              Filters features and discretizes continuous variables.
            </li>
            <li>
              <strong className="text-slate-700">Train/Test Split:</strong>{" "}
              Separates incoming data into training and evaluation subsets.
            </li>
          </ul>
        </>
      ),
    },

    {
      question:
        "How does experiment tracking and model management work with MLflow?",
      answer: (
        <>
          <p>
            SegForge integrates with MLflow to manage experiments, training
            runs, and model releases.
          </p>

          <ul className="mt-4 space-y-2 text-slate-500">
            <li>
              <strong className="text-slate-700">Experiments:</strong> Organize
              related training executions into collections.
            </li>
            <li>
              <strong className="text-slate-700">Runs:</strong> Record
              hyperparameters, execution metrics, confusion matrices, and model
              artifacts for each training job.
            </li>
            <li>
              <strong className="text-slate-700">Model Registry:</strong>{" "}
              Maintain versioned storage of trained models and support promotion
              from staging to active production environments.
            </li>
          </ul>

          <p className="mt-5">
            Tracked metrics can include Accuracy, Precision, Recall, F1, AUC,
            and RMSE.
          </p>
        </>
      ),
    },

    {
      question:
        "How do batch scoring, real-time inference, and drift monitoring operate?",
      answer: (
        <>
          <p>
            SegForge supports both batch and real-time model inference while
            providing continuous visibility into model behavior.
          </p>

          <ul className="mt-4 space-y-2 text-slate-500">
            <li>
              <strong className="text-slate-700">Batch Scoring:</strong> Attach
              a trained model to a Predict/Score pipeline node to generate
              predictions and write scored results to an Apache Iceberg target
              table.
            </li>
            <li>
              <strong className="text-slate-700">Real-Time Inference:</strong>{" "}
              Deploy validated neural models through the Neural Inference Engine
              for real-time predictions.
            </li>
            <li>
              <strong className="text-slate-700">
                Drift &amp; Performance Monitoring:
              </strong>{" "}
              Track prediction drift over time and raise alerts when prediction
              distributions or model performance move beyond defined thresholds.
            </li>
          </ul>

          <p className="mt-5">
            Automated retraining pipelines can be triggered when model
            performance degrades according to the configured monitoring
            conditions.
          </p>
        </>
      ),
    },

    {
      question:
        "What hyperparameter tuning and model explainability features are included?",
      answer: (
        <>
          <p>
            SegForge provides automated hyperparameter optimization and
            explainability capabilities to help teams evaluate and understand
            their models.
          </p>

          <ul className="mt-4 space-y-2 text-slate-500">
            <li>
              <strong className="text-slate-700">Hyperparameter Tuning:</strong>{" "}
              Optimize model parameters using Grid Search or Random Search
              across defined hyperparameter ranges.
            </li>
            <li>
              <strong className="text-slate-700">Model Explainability:</strong>{" "}
              Evaluate feature importance and generate SHAP values to help
              understand model decisions.
            </li>
          </ul>
        </>
      ),
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Cyan grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 80%, transparent)",
        }}
      />

      {/* Cyan glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-300/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
        >
          <div className="mb-5 inline-flex items-center gap-2 text-sm font-semibold tracking-[0.14em] text-cyan-500">
            <HelpCircle size={17} />
            MLOPS FAQ
          </div>

          <h2 className="text-4xl font-semibold tracking-tight text-slate-900 ">
            Frequently asked questions about{" "}
            <span className="text-cyan-700">MLOps.</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-500 text-md">
            Learn how SegForge supports model development, experimentation,
            deployment, monitoring, and explainability across the machine
            learning lifecycle.
          </p>
        </motion.div>

        {/* FAQ */}
        <div className="mx-auto mt-14 max-w-4xl divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="group flex w-full items-center gap-4 py-6 text-left"
                >
                  {/* Number */}
                  <span
                    className={`hidden w-8 shrink-0 text-sm font-semibold sm:block ${
                      isOpen ? "text-cyan-700" : "text-slate-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  {/* Question */}
                  <span
                    className={`flex-1 text-base font-semibold transition-colors sm:text-lg ${
                      isOpen
                        ? "text-cyan-700"
                        : "text-slate-800 group-hover:text-cyan-700"
                    }`}
                  >
                    {faq.question}
                  </span>

                  {/* Chevron */}
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${
                      isOpen
                        ? "border-cyan-600 bg-cyan-50 text-cyan-700"
                        : "border-slate-200 text-slate-500"
                    }`}
                  >
                    <ChevronDown
                      size={18}
                      className={`transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="max-w-3xl pb-6 pl-0 pr-2 text-sm leading-7 text-slate-500 sm:pl-10 sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default MLOpsFAQ;
