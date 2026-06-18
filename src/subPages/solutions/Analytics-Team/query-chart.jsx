import React, { useMemo, useState } from "react";
import { ChartSpline } from "lucide-react";

const questions = {
  "Hourly Sales Spikes": {
    question: "Show me hourly sales spikes.",

    sql: `SELECT
  window_start,
  SUM(revenue) AS total_sales
FROM sales_stream
GROUP BY window_start;`,

    batch: "Static Time Series",
    streaming: "Live Updating Chart",
  },

  "Top Performing Products": {
    question: "What products generate the most revenue?",

    sql: `SELECT
  product_name,
  SUM(revenue) AS total_revenue
FROM sales
GROUP BY product_name
ORDER BY total_revenue DESC;`,

    batch: "Revenue Ranking",
    streaming: "Live Product Leaderboard",
  },

  "Customer Retention Trends": {
    question: "How is retention changing over time?",

    sql: `SELECT
  month,
  retention_rate
FROM customer_retention;`,

    batch: "Monthly Retention Report",
    streaming: "Live Retention Tracking",
  },

  "Operational Incident Monitoring": {
    question: "Where are operational incidents increasing?",

    sql: `SELECT
  timestamp,
  incident_count
FROM incidents_stream;`,

    batch: "Historical Incident Analysis",
    streaming: "Real-Time Incident Feed",
  },

  "Real-Time Revenue Tracking": {
    question: "What revenue is being generated right now?",

    sql: `SELECT
  window_start,
  SUM(revenue)
FROM revenue_stream
GROUP BY window_start;`,

    batch: "Revenue Summary",
    streaming: "Live Revenue Dashboard",
  },
};

const QueryToChartPrototyper = () => {
  const [selected, setSelected] = useState("Hourly Sales Spikes");

  const preview = useMemo(() => questions[selected], [selected]);

  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            <ChartSpline className="w-4 h-4" />
            Query-to-Chart Prototyper
          </div>

          <h2 className="mt-6 text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
            See how quickly a question
            <br />
            becomes a dashboard.
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Choose a business question and instantly generate the corresponding
            SQL query and chart visualization.
            <br />
            <br />
            Compare batch and streaming modes to understand how live analytics
            transforms decision making.
          </p>
        </div>

        {/* Question Selector */}

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {Object.keys(questions).map((question) => (
            <button
              key={question}
              onClick={() => setSelected(question)}
              className={`px-5 py-3 rounded-xl border text-sm font-medium transition-all ${
                selected === question
                  ? "bg-cyan-50 border-cyan-200 text-cyan-700"
                  : "bg-white border-slate-200 text-slate-600"
              }`}
            >
              {question}
            </button>
          ))}
        </div>

        {/* Preview */}

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* SQL */}

          <div className="bg-white border border-slate-200 rounded-[32px] p-8">
            <div className="text-sm text-slate-500 mb-3">Business Question</div>

            <div className="text-xl font-semibold text-slate-900">
              {preview.question}
            </div>

            <div className="mt-8 text-sm text-slate-500 mb-3">
              Generated Flink SQL
            </div>

            <div className="rounded-2xl bg-slate-950 p-6 overflow-auto">
              <pre className="text-sm text-cyan-300 whitespace-pre-wrap">
                {preview.sql}
              </pre>
            </div>
          </div>

          {/* Visualization */}

          <div className="bg-white border border-slate-200 rounded-[32px] p-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="rounded-2xl border border-slate-200 p-6">
                <div className="text-sm text-slate-500 mb-4">Batch Mode</div>

                <div className="h-40 rounded-xl bg-slate-50 border border-slate-200 flex items-center justify-center text-center font-medium text-slate-700">
                  {preview.batch}
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
                <div className="text-sm text-cyan-700 mb-4">Streaming Mode</div>

                <div className="h-40 rounded-xl bg-white border border-cyan-200 flex items-center justify-center text-center font-medium text-cyan-700">
                  {preview.streaming}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Outputs */}

        <div className="mt-14 border-y border-slate-200 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              "Generated SQL",
              "Chart Preview",
              "Dashboard Template",
              "Streaming Configuration",
              "Performance Recommendations",
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

export default QueryToChartPrototyper;
