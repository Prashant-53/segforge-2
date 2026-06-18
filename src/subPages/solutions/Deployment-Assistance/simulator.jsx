import React, { useMemo, useState } from "react";
import { Network } from "lucide-react";

const cloudProviders = ["AWS", "Azure", "GCP", "Private Cloud"];

const workloadProfiles = [
  "Development",
  "Analytics",
  "Streaming",
  "Enterprise Production",
];

const dataVolumes = [
  "< 100 GB / Day",
  "100 GB - 1 TB / Day",
  "1 TB - 10 TB / Day",
  "10+ TB / Day",
];

const InfrastructureBlueprintConfigurator = () => {
  const [provider, setProvider] = useState("AWS");
  const [workload, setWorkload] = useState("Analytics");
  const [volume, setVolume] = useState("100 GB - 1 TB / Day");

  const blueprint = useMemo(() => {
    const largeDeployment =
      workload === "Enterprise Production" || volume === "10+ TB / Day";

    return {
      nodes: largeDeployment ? "12 Nodes" : "4 Nodes",
      storage: largeDeployment ? "Iceberg + S3 (50TB)" : "Iceberg + S3 (5TB)",
      scaling: largeDeployment
        ? "Auto Scaling Enabled"
        : "Horizontal Scaling Ready",
      cost: largeDeployment ? "$4k–8k / Month" : "$500–2k / Month",
    };
  }, [provider, workload, volume]);

  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            <Network className="w-4 h-4" />
            Infrastructure Blueprint Configurator
          </div>

          <h2 className="mt-6 text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
            Generate the right architecture
            <br />
            before you deploy.
          </h2>

          <p className="mt-6 text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Select your cloud provider, workload profile, and expected data
            volume to generate a recommended deployment blueprint.
          </p>
        </div>

        {/* Configurator */}

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* Inputs */}

          <div className="bg-white border border-slate-200 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">
              Deployment Inputs
            </h3>

            <div className="space-y-8">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Cloud Provider
                </label>

                <select
                  value={provider}
                  onChange={(e) => setProvider(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                >
                  {cloudProviders.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Workload Type
                </label>

                <select
                  value={workload}
                  onChange={(e) => setWorkload(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                >
                  {workloadProfiles.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700 mb-3">
                  Data Velocity
                </label>

                <select
                  value={volume}
                  onChange={(e) => setVolume(e.target.value)}
                  className="w-full rounded-xl border border-slate-300 px-4 py-3"
                >
                  {dataVolumes.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Results */}

          <div className="bg-white border border-slate-200 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">
              Infrastructure Blueprint
            </h3>

            <div className="space-y-5">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="text-sm text-slate-500">
                  Recommended Node Count
                </div>
                <div className="mt-1 text-2xl font-bold text-slate-900">
                  {blueprint.nodes}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="text-sm text-slate-500">
                  Storage Configuration
                </div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  {blueprint.storage}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="text-sm text-slate-500">
                  Scaling Recommendation
                </div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  {blueprint.scaling}
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="text-sm text-slate-500">
                  Estimated Monthly Cost
                </div>
                <div className="mt-1 text-lg font-semibold text-slate-900">
                  {blueprint.cost}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Outputs */}

        <div className="mt-16 border-y border-slate-200 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <div className="text-xl font-bold text-slate-900">Nodes</div>
              <div className="mt-2 text-sm text-slate-500">Sizing Plan</div>
            </div>

            <div>
              <div className="text-xl font-bold text-slate-900">Storage</div>
              <div className="mt-2 text-sm text-slate-500">Configuration</div>
            </div>

            <div>
              <div className="text-xl font-bold text-slate-900">Scaling</div>
              <div className="mt-2 text-sm text-slate-500">Strategy</div>
            </div>

            <div>
              <div className="text-xl font-bold text-slate-900">Cost</div>
              <div className="mt-2 text-sm text-slate-500">Estimate</div>
            </div>

            <div>
              <div className="text-xl font-bold text-slate-900">PDF</div>
              <div className="mt-2 text-sm text-slate-500">
                Architecture Export
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InfrastructureBlueprintConfigurator;
