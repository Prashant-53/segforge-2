import React from "react";
import { motion } from "framer-motion";
import {
  Terminal,
  ShieldCheck,
  Globe,
  KeyRound,
  FolderGit2,
  RefreshCw,
  Copy,
  CheckCircle2,
} from "lucide-react";

const InstallationAuthentication = () => {
  const installTabs = ["macOS", "Linux", "Windows", "Docker"];

  const features = [
    {
      icon: Globe,
      title: "OAuth Login",
      desc: "Authenticate securely through your browser.",
    },
    {
      icon: KeyRound,
      title: "API Tokens",
      desc: "Perfect for automation and CI/CD workflows.",
    },
    {
      icon: RefreshCw,
      title: "Environment Variables",
      desc: "Inject credentials securely into deployments.",
    },
    {
      icon: FolderGit2,
      title: "Multiple Profiles",
      desc: "Switch between workspaces instantly.",
    },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-28">
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
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Installation & Authentication
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            Go from installation to authenticated in{" "}
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              under 30 seconds.
            </span>
          </h2>

          <p className="mt-6 text-md leading-8 text-slate-600">
            Install the Seg Forge CLI using your preferred package manager,
            authenticate once, and immediately begin automating pipelines,
            compute, CDC streams and deployments.
          </p>
        </motion.div>

        {/* Main Grid */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* INSTALL */}

          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="border-b border-slate-200 p-8">
              <div className="flex items-center gap-3">
                <Terminal className="h-6 w-6 text-cyan-600" />

                <h3 className="text-2xl font-bold text-slate-900">Install</h3>
              </div>

              <p className="mt-3 text-slate-600">
                Available through package managers or one-line installers.
              </p>
            </div>

            {/* Tabs */}

            <div className="flex flex-wrap gap-3 px-8 pt-8">
              {installTabs.map((tab, index) => (
                <button
                  key={tab}
                  className={`rounded-xl px-4 py-2 text-sm font-medium transition ${
                    index === 0
                      ? "bg-cyan-500 text-white"
                      : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Code */}

            <div className="p-8">
              <div className="overflow-hidden rounded-2xl bg-slate-950">
                <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
                  <span className="text-sm text-slate-400">Terminal</span>

                  <Copy className="h-4 w-4 text-slate-500" />
                </div>

                <div className="space-y-6 p-6 font-mono text-sm">
                  <div>
                    <p className="text-cyan-400">$</p>

                    <p className="mt-2 text-green-400">
                      curl -fsSL https://cli.segforge.dev/install.sh
                      {" | "}bash
                    </p>
                  </div>

                  <div className="border-t border-slate-800 pt-5">
                    <p className="text-slate-500">or</p>

                    <p className="mt-3 text-cyan-300">brew install segforge</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* AUTH */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-slate-200 bg-white shadow-sm"
          >
            <div className="border-b border-slate-200 p-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="h-6 w-6 text-cyan-600" />

                <h3 className="text-2xl font-bold text-slate-900">
                  Authentication
                </h3>
              </div>

              <p className="mt-3 text-slate-600">
                Secure browser-based authentication with support for automation
                tokens and workspace profiles.
              </p>
            </div>

            {/* Terminal */}

            <div className="p-8">
              <div className="overflow-hidden rounded-2xl bg-slate-950">
                <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
                  <span className="text-sm text-slate-400">
                    Authentication Flow
                  </span>

                  <CheckCircle2 className="h-4 w-4 text-green-400" />
                </div>

                <div className="space-y-5 p-6 font-mono text-sm">
                  <div>
                    <span className="text-cyan-400">$</span>{" "}
                    <span className="text-white">segforge login</span>
                  </div>

                  <p className="text-green-400">✔ Browser opened</p>

                  <p className="text-green-400">✔ Authentication successful</p>

                  <div className="rounded-xl border border-slate-800 bg-slate-900 p-4">
                    <div className="flex justify-between text-slate-400">
                      <span>Workspace</span>

                      <span className="text-cyan-300">analytics-prod</span>
                    </div>
                  </div>

                  <div className="border-t border-slate-800 pt-5">
                    <p className="text-slate-500">CI/CD Authentication</p>

                    <p className="mt-3 text-cyan-300">
                      export SEGFORGE_TOKEN=sf_live_xxxxxxxxx
                    </p>

                    <p className="mt-4 text-white">
                      segforge pipeline run orders
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Feature Cards */}

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              whileHover={{ y: -6 }}
              className="rounded-2xl border border-slate-200 bg-white p-6 transition hover:border-cyan-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                <feature.icon className="h-6 w-6 text-cyan-600" />
              </div>

              <h4 className="mt-5 text-lg font-semibold text-slate-900">
                {feature.title}
              </h4>

              <p className="mt-2 text-sm leading-7 text-slate-600">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstallationAuthentication;
