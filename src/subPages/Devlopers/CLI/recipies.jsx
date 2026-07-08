import React from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Download,
  ShieldCheck,
  CalendarClock,
  Cpu,
  Terminal,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

const recipes = [
  {
    icon: Rocket,
    title: "Deploy Pipeline",
    description:
      "Deploy a version-controlled pipeline directly into a workspace from your repository.",
    code: `segforge pipeline deploy \\
  ./pipelines/orders.yaml`,
  },
  {
    icon: Download,
    title: "Export Configuration",
    description:
      "Export pipelines, connections, schedules, and workspace metadata into a portable configuration.",
    code: `segforge workspace export prod \\
  --output workspace.yaml`,
  },
  {
    icon: ShieldCheck,
    title: "Run CI/CD Validation",
    description:
      "Validate pipeline configuration and generated Flink SQL before merging into production.",
    code: `segforge pipeline test \\
  daily-orders`,
  },
  {
    icon: CalendarClock,
    title: "Historical Backfill",
    description:
      "Execute historical processing across a custom time range without modifying the pipeline.",
    code: `segforge pipeline run \\
daily-orders \\
--from 2026-01-01 \\
--to 2026-01-31`,
  },
  {
    icon: Cpu,
    title: "Scale Compute",
    description:
      "Increase worker capacity dynamically for large ETL, CDC, or ML workloads.",
    code: `segforge compute scale \\
analytics-cluster \\
--workers 12`,
  },
];

const githubAction = `jobs:

  deploy:

    runs-on: ubuntu-latest

    steps:

      - uses: actions/checkout@v4

      - run: |
          segforge login \\
            --token \${{ secrets.SEGFORGE_TOKEN }}

          segforge pipeline deploy \\
            ./pipelines`;

const DevOpsRecipes = () => {
  return (
    <section className="relative overflow-hidden bg-slate-50 py-28">
      {/* Background */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right,#06b6d4 1px,transparent 1px),
              linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
            `,
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            DevOps Recipes
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Real automation workflows for
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}
              production engineering.
            </span>
          </h2>

          <p className="mt-6 text-md leading-8 text-slate-600">
            Beyond individual commands, the Seg Forge CLI is designed for
            deployment automation, infrastructure management, CI/CD pipelines,
            validation, and operational workflows.
          </p>
        </motion.div>

        {/* Layout */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Left Column */}

          <div className="space-y-8">
            {recipes.map((recipe) => (
              <motion.div
                key={recipe.title}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm transition hover:border-cyan-300 hover:shadow-xl"
              >
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-cyan-50 p-4">
                    <recipe.icon className="h-6 w-6 text-cyan-600" />
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {recipe.title}
                    </h3>

                    <p className="mt-1 text-slate-600">{recipe.description}</p>
                  </div>
                </div>

                <div className="mt-6 overflow-hidden rounded-2xl bg-slate-950">
                  <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-3">
                    <Terminal className="h-4 w-4 text-cyan-400" />

                    <span className="text-xs text-slate-400">Terminal</span>
                  </div>

                  <pre className="overflow-x-auto p-6 text-sm text-cyan-300">
                    <code>{recipe.code}</code>
                  </pre>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Column */}

          <div>
            <motion.div
              whileHover={{ y: -6 }}
              className="sticky top-28 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm"
            >
              <div className="border-b border-slate-200 p-8">
                <div className="flex items-center gap-4">
                  <div className="rounded-2xl bg-slate-900 p-4">
                    <FaGithub className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">
                      GitHub Actions
                    </h3>

                    <p className="mt-2 text-slate-600">
                      Deploy pipelines automatically from your CI/CD workflow
                      using the Seg Forge CLI.
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-hidden bg-slate-950">
                <div className="flex items-center justify-between border-b border-slate-800 px-6 py-4">
                  <span className="text-sm text-slate-400">
                    .github/workflows/deploy.yml
                  </span>

                  <span className="rounded-full bg-cyan-500/10 px-3 py-1 text-xs font-medium text-cyan-400">
                    YAML
                  </span>
                </div>

                <pre className="overflow-x-auto p-8 text-sm leading-7 text-cyan-300">
                  <code>{githubAction}</code>
                </pre>
              </div>

              <div className="border-t border-slate-200 bg-slate-50 px-8 py-6">
                <h4 className="font-semibold text-slate-900">
                  CI/CD Integration
                </h4>

                <p className="mt-3 leading-7 text-slate-600">
                  Authenticate using a workspace API token stored as a GitHub
                  Secret, validate pipeline definitions during pull requests,
                  and deploy approved changes automatically after every merge.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevOpsRecipes;
