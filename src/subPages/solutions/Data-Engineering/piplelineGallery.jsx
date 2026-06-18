import React, { useMemo, useState } from "react";
import { LayoutTemplate } from "lucide-react";

const blueprints = {
  "PostgreSQL Real-Time Mirror": {
    pipeline: ["PostgreSQL", "CDC", "Validation", "Iceberg Table"],

    sql: `INSERT INTO iceberg.customers
SELECT *
FROM postgres.customers;`,

    outputs: [
      "Pipeline Blueprint",
      "Generated SQL",
      "Infrastructure Requirements",
      "Recommended Configuration",
      "Estimated Deployment Time",
    ],
  },

  "S3 → Iceberg Batch Load": {
    pipeline: ["Amazon S3", "Transformation", "Partitioning", "Iceberg Table"],

    sql: `INSERT INTO iceberg.sales
SELECT *
FROM s3_raw.sales_data;`,

    outputs: [
      "Batch Architecture",
      "Generated SQL",
      "Storage Configuration",
      "Partition Strategy",
      "Deployment Guide",
    ],
  },

  "Anonymized PII Sync": {
    pipeline: ["Customer Data", "Masking", "Validation", "Target System"],

    sql: `INSERT INTO analytics.customers
SELECT
id,
MASK(email),
MASK(phone)
FROM crm.customers;`,

    outputs: [
      "PII Blueprint",
      "Generated SQL",
      "Compliance Controls",
      "Masking Strategy",
      "Governance Requirements",
    ],
  },

  "CDC Analytics Pipeline": {
    pipeline: ["Operational DB", "CDC", "Aggregation", "Analytics Table"],

    sql: `INSERT INTO analytics.orders
SELECT *
FROM cdc.orders_stream;`,

    outputs: [
      "Streaming Architecture",
      "Generated SQL",
      "Scaling Guidance",
      "Monitoring Setup",
      "Infrastructure Requirements",
    ],
  },

  "Data Quality Pipeline": {
    pipeline: ["Source Data", "Quality Rules", "Validation", "Trusted Dataset"],

    sql: `INSERT INTO trusted.customers
SELECT *
FROM staging.customers
WHERE quality_score > 95;`,

    outputs: [
      "Quality Blueprint",
      "Validation Rules",
      "Generated SQL",
      "Monitoring Controls",
      "Deployment Guide",
    ],
  },
};

const PipelineBlueprintGallery = () => {
  const [selected, setSelected] = useState("PostgreSQL Real-Time Mirror");

  const blueprint = useMemo(() => blueprints[selected], [selected]);

  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            <LayoutTemplate className="w-4 h-4" />
            Blueprint Gallery
          </div>

          <h2 className="mt-6 text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
            Start with proven patterns
            <br />
            instead of starting from scratch.
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Browse production-ready pipeline templates and instantly see how
            common engineering workloads are implemented inside SegForge.
            <br />
            <br />
            Preview transformation logic, generated Flink SQL, and architecture
            patterns before building your own.
          </p>
        </div>

        {/* Tabs */}

        <div className="mt-14 flex flex-wrap justify-center gap-3">
          {Object.keys(blueprints).map((name) => (
            <button
              key={name}
              onClick={() => setSelected(name)}
              className={`px-5 py-3 rounded-xl border text-sm font-medium transition-all duration-300 ${
                selected === name
                  ? "bg-cyan-50 border-cyan-200 text-cyan-700"
                  : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
              }`}
            >
              {name}
            </button>
          ))}
        </div>

        {/* Main Preview */}

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* Pipeline Blueprint */}

          <div className="bg-white border border-slate-200 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">
              {selected}
            </h3>

            <div className="flex flex-col gap-5">
              {blueprint.pipeline.map((step, index) => (
                <React.Fragment key={step}>
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 px-6 py-4 text-center font-medium text-slate-800">
                    {step}
                  </div>

                  {index < blueprint.pipeline.length - 1 && (
                    <div className="flex justify-center text-cyan-500 text-xl">
                      ↓
                    </div>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          {/* Generated SQL */}

          <div className="bg-white border border-slate-200 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-6">
              Generated Flink SQL
            </h3>

            <div className="rounded-2xl bg-slate-950 p-6 overflow-auto">
              <pre className="text-sm text-cyan-300 whitespace-pre-wrap">
                <code>{blueprint.sql}</code>
              </pre>
            </div>

            <div className="mt-8 rounded-2xl border border-cyan-100 bg-cyan-50 p-5">
              <div className="text-sm font-medium text-cyan-700">
                Engineering Outcome
              </div>

              <div className="mt-2 text-sm text-cyan-600">
                Visual development automatically generates production-ready
                Flink SQL that can be audited, exported, and optimized by
                engineering teams.
              </div>
            </div>
          </div>
        </div>

        {/* Outputs */}

        <div className="mt-14 border-y border-slate-200 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {blueprint.outputs.map((item) => (
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

export default PipelineBlueprintGallery;
