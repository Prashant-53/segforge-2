import React, { useMemo, useState } from "react";
import { Calculator } from "lucide-react";

const tools = [
  { id: "fivetran", label: "Fivetran", cost: 2500 },
  { id: "dbt", label: "dbt", cost: 1200 },
  { id: "snowflake", label: "Snowflake", cost: 6500 },
  { id: "airflow", label: "Airflow", cost: 1800 },
  { id: "tableau", label: "Tableau", cost: 1500 },
  { id: "datahub", label: "DataHub", cost: 750 },
];

const FragmentationCostCalculator = () => {
  const [selected, setSelected] = useState([
    "fivetran",
    "dbt",
    "snowflake",
    "airflow",
    "tableau",
    "datahub",
  ]);

  const metrics = useMemo(() => {
    const currentSpend = tools
      .filter((tool) => selected.includes(tool.id))
      .reduce((sum, tool) => sum + tool.cost, 0);

    const vendors = selected.length;

    const integrations =
      vendors > 1 ? Math.round((vendors * (vendors - 1)) / 2) : 0;

    const owners = Math.max(1, Math.ceil(vendors * 1.2));

    const segForgeProjection = Math.round(currentSpend * 0.34);

    const savings = currentSpend - segForgeProjection;

    const reduction = Math.round((savings / currentSpend) * 100);

    return {
      currentSpend,
      vendors,
      integrations,
      owners,
      segForgeProjection,
      savings,
      reduction,
    };
  }, [selected]);

  const toggleTool = (toolId) => {
    setSelected((prev) =>
      prev.includes(toolId)
        ? prev.filter((id) => id !== toolId)
        : [...prev, toolId],
    );
  };

  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="max-w-4xl">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium mb-6">
            <Calculator className="w-4 h-4" />
            ROI Calculator
          </div>

          <h2 className="text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
            See what your current stack
            <br />
            is really costing you.
          </h2>

          <p className="mt-8 text-md text-slate-600 leading-relaxed max-w-3xl">
            Select the tools you currently operate and estimate the financial
            impact of consolidation.
          </p>
        </div>

        {/* Calculator */}

        <div className="mt-14 grid lg:grid-cols-2 gap-10">
          {/* Tool Selection */}

          <div className="bg-white border border-slate-200 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-slate-900">
              Tool Selection
            </h3>

            <div className="mt-8 space-y-4">
              {tools.map((tool) => (
                <label
                  key={tool.id}
                  className="flex items-center justify-between rounded-2xl border border-slate-200 bg-slate-50 px-5 py-4 cursor-pointer hover:border-cyan-200 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      checked={selected.includes(tool.id)}
                      onChange={() => toggleTool(tool.id)}
                      className="h-4 w-4 accent-cyan-600"
                    />

                    <span className="font-medium text-slate-800">
                      {tool.label}
                    </span>
                  </div>

                  <span className="text-sm text-slate-500">
                    ${tool.cost.toLocaleString()}/mo
                  </span>
                </label>
              ))}
            </div>

            {/* Current State */}

            <div className="mt-10 rounded-2xl bg-slate-50 border border-slate-200 p-6">
              <h4 className="font-semibold text-slate-900 mb-5">
                Current State
              </h4>

              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {metrics.vendors}
                  </div>
                  <div className="text-sm text-slate-500">Vendors</div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {metrics.integrations}
                  </div>
                  <div className="text-sm text-slate-500">Integrations</div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {metrics.owners}
                  </div>
                  <div className="text-sm text-slate-500">Owners</div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Results */}

          <div className="space-y-6">
            <div className="bg-white border border-slate-200 rounded-[32px] p-8">
              <div className="text-sm text-slate-500">
                Estimated Monthly Spend
              </div>

              <div className="mt-3 text-xl font-semibold text-slate-900">
                Point Solution Stack
              </div>

              <div className="mt-4 text-5xl font-bold text-slate-900">
                ${metrics.currentSpend.toLocaleString()}
              </div>

              <div className="mt-2 text-slate-500">/ Month</div>
            </div>

            <div className="bg-white border border-cyan-200 rounded-[32px] p-8">
              <div className="text-sm text-cyan-700">SegForge Projection</div>

              <div className="mt-3 text-xl font-semibold text-slate-900">
                Unified Platform
              </div>

              <div className="mt-4 text-5xl font-bold text-cyan-700">
                ${metrics.segForgeProjection.toLocaleString()}
              </div>

              <div className="mt-2 text-slate-500">/ Month</div>
            </div>

            <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 rounded-[32px] p-8 text-white">
              <div className="text-sm text-cyan-100">Estimated Savings</div>

              <div className="mt-4 text-5xl font-bold">
                ${metrics.savings.toLocaleString()}
              </div>

              <div className="mt-3 text-lg">{metrics.reduction}% Reduction</div>
            </div>
          </div>
        </div>

        {/* Outputs */}

        <div className="mt-14 border-y border-slate-200 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              "Cost Reduction Estimate",
              "Platform Consolidation Score",
              "Vendor Reduction Analysis",
              "Infrastructure Savings",
              "Governance Simplification",
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

export default FragmentationCostCalculator;
