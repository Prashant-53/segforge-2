import React, { useMemo, useState } from "react";
import { Layers3 } from "lucide-react";

const technologies = [
  "Fivetran",
  "dbt",
  "Snowflake",
  "Airflow",
  "Tableau",
  "Looker",
  "Power BI",
  "Databricks",
];

const MigrationSimulator = () => {
  const [selected, setSelected] = useState([
    "Fivetran",
    "dbt",
    "Snowflake",
    "Airflow",
    "Tableau",
  ]);

  const toggleTech = (tech) => {
    setSelected((prev) =>
      prev.includes(tech)
        ? prev.filter((item) => item !== tech)
        : [...prev, tech],
    );
  };

  const metrics = useMemo(() => {
    const count = selected.length;

    return {
      reduction: `${Math.max(count - 1, 0)} Platform${
        count - 1 === 1 ? "" : "s"
      }`,
      governance: `${Math.min(count * 15, 95)}%`,
      simplification: `${Math.min(count * 12, 85)}%`,
      readiness: `${Math.min(count * 18, 100)}/100`,
    };
  }, [selected]);

  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            <Layers3 className="w-4 h-4" />
            Migration Blueprint Simulator
          </div>

          <h2 className="mt-6 text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
            See what your future data stack
            <br />
            could look like.
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Select the technologies you use today and visualize how they
            consolidate into a single SegForge workspace.
            <br />
            <br />
            Estimate operational savings, governance improvements, and
            infrastructure simplification before starting a migration.
          </p>
        </div>

        {/* Technology Selection */}

        <div className="mt-16">
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech) => (
              <button
                key={tech}
                onClick={() => toggleTech(tech)}
                className={`px-5 py-3 rounded-xl border transition-all duration-300 ${
                  selected.includes(tech)
                    ? "bg-cyan-50 border-cyan-200 text-cyan-700"
                    : "bg-white border-slate-200 text-slate-600 hover:border-slate-300"
                }`}
              >
                {tech}
              </button>
            ))}
          </div>
        </div>

        {/* Architecture Flow */}

        <div className="mt-20">
          <div className="grid lg:grid-cols-3 gap-8 items-center">
            {/* Source Stack */}

            <div className="bg-white border border-slate-200 rounded-[24px] p-8">
              <h3 className="font-semibold text-slate-900 mb-6">
                Current Stack
              </h3>

              <div className="space-y-3">
                {selected.map((item) => (
                  <div
                    key={item}
                    className="rounded-xl border border-slate-200 px-4 py-3 text-slate-700"
                  >
                    {item}
                  </div>
                ))}
              </div>
            </div>

            {/* SegForge */}

            <div className="flex justify-center">
              <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-[32px] px-12 py-12 text-center shadow-xl">
                <h3 className="text-2xl font-bold">
                  SegForge
                  <br />
                  Workspace
                </h3>
              </div>
            </div>

            {/* Outcomes */}

            <div className="bg-white border border-slate-200 rounded-[24px] p-8">
              <h3 className="font-semibold text-slate-900 mb-6">
                Migration Outcomes
              </h3>

              <div className="space-y-4">
                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {metrics.reduction}
                  </div>
                  <div className="text-sm text-slate-500">
                    Platform Reduction
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {metrics.governance}
                  </div>
                  <div className="text-sm text-slate-500">
                    Governance Consolidation
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {metrics.simplification}
                  </div>
                  <div className="text-sm text-slate-500">
                    Infrastructure Simplification
                  </div>
                </div>

                <div>
                  <div className="text-2xl font-bold text-slate-900">
                    {metrics.readiness}
                  </div>
                  <div className="text-sm text-slate-500">
                    Migration Readiness Score
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Enterprise Stats */}

        <div className="mt-16 border-y border-slate-200 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-slate-900">
                Fewer Tools
              </div>
              <div className="mt-2 text-sm text-slate-500">
                Platform Reduction
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-slate-900">Unified</div>
              <div className="mt-2 text-sm text-slate-500">Governance</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-slate-900">Lower</div>
              <div className="mt-2 text-sm text-slate-500">Complexity</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-slate-900">Faster</div>
              <div className="mt-2 text-sm text-slate-500">Modernization</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MigrationSimulator;
