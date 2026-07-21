import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  Cpu,
  Layers,
  Shield,
  GitBranch,
  Container,
  Zap,
  Terminal,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Factory,
  Laptop2,
  RadioTower,
  Braces,
  Rocket,
  Code2,
  CheckCircle2,
  ShieldCheck,
  Cloud,
  LockOpen,
} from "lucide-react";

import { Workflow, Layers3, BrainCircuit } from "lucide-react";
import { Boxes, DatabaseZap, Route } from "lucide-react";

import { Link } from "react-router-dom";
import { trustedCompanies } from "../mock";
import { CTABanner } from "../components/BottomCTA";
import MainLayout from "../layouts/mainLayout";

const HomePage = () => {
  const trustedCompanies = [
    "Fortune 500",
    "Global Telecom",
    "Financial Services",
    "Manufacturing",
    "Healthcare",
    "Retail",
    "Logistics",
    "Energy",
  ];
  const workflowSteps = [
    {
      icon: Database,
      title: "Enterprise Sources",
      description:
        "Connect databases, cloud storage, Kafka streams, APIs, and enterprise applications through native connectors.",
    },
    {
      icon: Workflow,
      title: "Visual ETL",
      description:
        "Design production-grade pipelines using an intuitive drag-and-drop workspace with 90+ transformation nodes.",
    },
    {
      icon: Cpu,
      title: "Apache Flink",
      description:
        "Execute high-performance batch and streaming workloads using a unified distributed processing engine.",
    },
    {
      icon: Layers3,
      title: "Apache Iceberg",
      description:
        "Store governed datasets with ACID transactions, schema evolution, and open table formats.",
    },
    {
      icon: BrainCircuit,
      title: "Analytics & AI",
      description:
        "Power dashboards, machine learning, notebooks, and enterprise AI directly from governed lakehouse data.",
    },
  ];

  const highlights = [
    "Enterprise Connectivity",
    "Visual Pipeline Design",
    "Real-Time Processing",
    "Lakehouse Storage",
    "AI & BI Consumption",
  ];
  const capabilities = [
    {
      icon: Boxes,
      title: "90+ Transformation Nodes",
      description:
        "Design production-grade data pipelines visually using a rich library of enterprise transformation components.",
    },
    {
      icon: DatabaseZap,
      title: "Real-Time CDC",
      description:
        "Continuously synchronize operational databases with sub-second latency using intelligent Change Data Capture.",
    },
    {
      icon: Route,
      title: "Smart Routing Engine",
      description:
        "Automatically choose the optimal execution engine for every workload based on data size and processing requirements.",
    },
    {
      icon: GitBranch,
      title: "Git-like Data Versioning",
      description:
        "Branch, merge, rollback, and manage datasets using Apache Nessie with complete lineage and governance.",
    },
    {
      icon: Workflow,
      title: "Workflow Automation",
      description:
        "Schedule, recover, retry, and orchestrate complex pipelines through a resilient visual workflow engine.",
    },
    {
      icon: Code2,
      title: "Open APIs & SDKs",
      description:
        "Automate every platform operation using REST APIs, SDKs, and CLI built for modern engineering teams.",
    },
  ];

  const industries = [
    {
      icon: Landmark,
      title: "Financial Services",
      solutions: [
        "Real-time Fraud Detection",
        "Regulatory Reporting",
        "Customer Risk Analytics",
      ],
    },
    {
      icon: HeartPulse,
      title: "Healthcare",
      solutions: [
        "Unified Patient Records",
        "Clinical Analytics",
        "Predictive Healthcare",
      ],
    },
    {
      icon: ShoppingCart,
      title: "Retail & E-Commerce",
      solutions: ["Customer 360", "Demand Forecasting", "Dynamic Pricing"],
    },
    {
      icon: Factory,
      title: "Manufacturing",
      solutions: [
        "IoT Analytics",
        "Predictive Maintenance",
        "Supply Chain Optimization",
      ],
    },
    {
      icon: Laptop2,
      title: "Technology",
      solutions: [
        "SaaS Analytics",
        "Product Telemetry",
        "Operational Intelligence",
      ],
    },
    {
      icon: RadioTower,
      title: "Telecommunications",
      solutions: [
        "Network Monitoring",
        "Subscriber Analytics",
        "Usage Optimization",
      ],
    },
  ];

  const developerFeatures = [
    {
      icon: Container,
      title: "Docker Deployment",
      description:
        "Deploy the complete Seg Forge platform locally in minutes using Docker Compose.",
    },
    {
      icon: Braces,
      title: "REST APIs",
      description:
        "Integrate every platform capability into your applications through secure REST APIs.",
    },
    {
      icon: Code2,
      title: "Python & TypeScript SDKs",
      description:
        "Automate workflows using fully featured SDKs with type-safe models and modern developer tooling.",
    },
    {
      icon: Terminal,
      title: "Powerful CLI",
      description:
        "Provision infrastructure, deploy pipelines, manage CDC streams, and automate every workflow from the terminal.",
    },
    {
      icon: GitBranch,
      title: "CI/CD Automation",
      description:
        "Deploy and validate data pipelines automatically using GitHub Actions and modern DevOps workflows.",
    },
    {
      icon: Workflow,
      title: "Infrastructure as Code",
      description:
        "Version, review, and deploy complete data platforms using Git-based infrastructure workflows.",
    },
  ];

  const features = [
    {
      icon: Container,
      title: "Docker Deployment",
      description:
        "Spin up the complete Seg Forge platform locally in minutes using Docker Compose.",
    },
    {
      icon: Braces,
      title: "REST APIs",
      description:
        "Integrate every platform capability through secure REST APIs built for automation.",
    },
    {
      icon: Code2,
      title: "Python & TypeScript SDKs",
      description:
        "Develop faster using modern SDKs with type-safe models and IDE autocomplete.",
    },
    {
      icon: Terminal,
      title: "CLI Automation",
      description:
        "Deploy pipelines, manage workflows, and operate your platform directly from the terminal.",
    },
    {
      icon: Workflow,
      title: "CI/CD Ready",
      description:
        "Automate deployments using GitHub Actions and enterprise DevOps pipelines.",
    },
    {
      icon: GitBranch,
      title: "Infrastructure as Code",
      description:
        "Version, review, and deploy your complete data platform using Git workflows.",
    },
  ];

  const technologies = [
    {
      icon: Workflow,
      title: "Apache Flink",
      subtitle: "Distributed Stream & Batch Processing",
    },
    {
      icon: Layers3,
      title: "Apache Iceberg",
      subtitle: "Open Lakehouse Table Format",
    },
    {
      icon: GitBranch,
      title: "Apache Nessie",
      subtitle: "Git-like Data Version Control",
    },
    {
      icon: Database,
      title: "Apache Kafka",
      subtitle: "Event Streaming Platform",
    },
  ];

  const benefits = [
    "Open Table Formats",
    "Cloud Agnostic Deployment",
    "No Proprietary Storage",
    "Customer-Owned Infrastructure",
    "Git-like Data Versioning",
    "Enterprise Governance",
    "Standards-Based Architecture",
  ];
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#24DEC9] mt-6 overflow-hidden pt-20 pb-16 sm:pt-24 lg:pt-32 lg:pb-24">
          {" "}
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
              {" "}
              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="text-center lg:text-left order-1"
              >
                <div className="inline-flex mb-3 max-w-full items-center rounded-full bg-white/30 px-4 py-2 text-xs sm:text-sm font-medium text-slate-900 backdrop-blur-sm">
                  Trusted by enterprise data teams
                </div>

                <h1 className="text-4xl sm:text-5xl  lg:text-7xl font-bold text-white leading-[0.95]">
                  The Unified Data
                  <br />
                  Intelligence Platform
                </h1>

                <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-slate-800 sm:text-lg lg:mx-0">
                  Build, orchestrate, and scale data pipelines with
                  enterprise-grade ETL, AI/ML capabilities, and an open
                  lakehouse architecture.
                </p>

                <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
                  {" "}
                  <button className="group w-full sm:w-auto relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-900 px-6 py-3 font-semibold text-black hover:text-white">
                    <span className="absolute inset-y-0 left-0 w-0 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>

                    <span className="relative z-10 flex items-center gap-2">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </button>
                  <button className="px-6 py-3 rounded-md border border-slate-900 text-slate-900 font-semibold bg-white/30 backdrop-blur-sm">
                    View Documentation
                  </button>
                </div>
              </motion.div>
              {/* RIGHT VISUAL */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 flex h-[260px] items-center justify-center sm:h-[380px] lg:h-[500px]"
              >
                {/* Glow */}

                <div
                  className="absolute w-[220px] h-[220px]
sm:w-[320px] sm:h-[320px]
lg:w-[450px] lg:h-[450px] bg-white/10 rounded-full blur-3xl"
                />

                {/* Orbit Ring */}

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-[220px] h-[220px] sm:w-[320px] sm:h-[320px]lg:w-[420px] lg:h-[420px] rounded-full border border-white/20"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
                  <div className="absolute bottom-10 left-10 w-2 h-2 bg-white/80 rounded-full" />
                  <div className="absolute top-1/3 right-8 w-2 h-2 bg-white/80 rounded-full" />
                </motion.div>

                {/* Crystal */}

                <motion.svg
                  className="w-40 sm:w-60 lg:w-80 h-auto"
                  viewBox="0 0 340 340"
                  animate={{
                    y: [0, -12, 0],
                    rotate: [-2, 2, -2],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  {/* Top */}

                  <polygon
                    points="170,40 250,150 90,150"
                    fill="white"
                    fillOpacity="0.95"
                  />

                  {/* Left */}

                  <polygon
                    points="90,150 170,150 130,250 50,250"
                    fill="white"
                    fillOpacity="0.7"
                  />

                  {/* Right */}

                  <polygon
                    points="170,150 250,150 290,250 210,250"
                    fill="white"
                    fillOpacity="0.7"
                  />

                  {/* Bottom */}

                  <polygon
                    points="130,250 210,250 170,300"
                    fill="white"
                    fillOpacity="0.95"
                  />

                  {/* Outline */}

                  <polygon
                    points="170,40 250,150 290,250 210,250 170,300 130,250 50,250 90,150"
                    fill="none"
                    stroke="rgba(255,255,255,0.35)"
                    strokeWidth="2"
                  />
                </motion.svg>

                {/* Floating Particles */}

                {[...Array(8)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      y: [0, -20, 0],
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 3 + i,
                      repeat: Infinity,
                    }}
                    className="absolute w-2 h-2 rounded-full bg-white"
                    style={{
                      left: `${15 + i * 10}%`,
                      top: `${20 + (i % 4) * 15}%`,
                    }}
                  />
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-16 bg-white border-y border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase mb-10">
              Trusted By Enterprise Data Teams
            </p>
          </div>

          <div className="relative overflow-hidden">
            <motion.div
              animate={{
                x: ["0%", "-50%"],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="flex whitespace-nowrap"
            >
              {[...trustedCompanies, ...trustedCompanies].map(
                (company, index) => (
                  <div
                    key={index}
                    className="mx-12 text-xl font-semibold text-slate-400 hover:text-slate-700 transition-colors"
                  >
                    {company}
                  </div>
                ),
              )}
            </motion.div>

            {/* Left Fade */}

            <div className="absolute left-0 top-0 h-full w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />

            {/* Right Fade */}

            <div className="absolute right-0 top-0 h-full w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          </div>
        </section>
        {/* Platform Overview */}
        <section className="relative overflow-hidden bg-white py-28">
          {/* Background Grid */}

          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
              linear-gradient(to right,#06b6d4 1px,transparent 1px),
              linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
            `,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          {/* Glow */}

          <div className="absolute right-0 top-24 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              {/* LEFT CONTENT */}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                  Unified Platform
                </div>

                <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                  One Workspace.
                  <br />
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    Every Data Workflow.
                  </span>
                </h2>

                <p className="mt-6 text-md leading-6 text-slate-600">
                  Move from raw enterprise data to production-ready analytics
                  without switching between disconnected tools. Design,
                  orchestrate, transform, govern, and monitor every workflow
                  inside one intelligent platform built for modern data
                  engineering.
                </p>

                {/* Workflow */}

                <div className="mt-12 space-y-6">
                  {workflowSteps.map((step, index) => (
                    <div key={step.title}>
                      <div className="flex items-start gap-5">
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                          <step.icon className="h-7 w-7 text-cyan-600" />
                        </div>

                        <div>
                          <h3 className="text-xl font-semibold text-slate-900">
                            {step.title}
                          </h3>

                          <p className="mt-2 leading-7 text-slate-600">
                            {step.description}
                          </p>
                        </div>
                      </div>

                      {index !== workflowSteps.length - 1 && (
                        <div className="ml-7 my-4 flex">
                          <ArrowRight className="h-5 w-5 rotate-90 text-cyan-400" />
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Highlights */}

                <div className="mt-12 rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Platform Highlights
                  </h3>

                  <div className="mt-5 flex flex-wrap gap-3">
                    {highlights.map((item) => (
                      <span
                        key={item}
                        className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 shadow-sm"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* RIGHT IMAGE */}

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
                  <img
                    src="/images/unified-platform.webp"
                    alt="Unified Platform Architecture"
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workflow Orchestration */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-28">
          {/* Background */}

          <div className="absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
              linear-gradient(to right,#06b6d4 1px,transparent 1px),
              linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
            `,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="absolute left-0 top-1/3 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[160px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              {/* LEFT IMAGE */}

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
                  <img
                    src="/images/platform-capabilities.webp"
                    alt="Seg Forge Platform Capabilities"
                    className="w-full"
                  />
                </div>
              </motion.div>

              {/* RIGHT CONTENT */}

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                  Platform Capabilities
                </div>

                <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                  Everything Required to
                  <br />
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    Build Modern Data Platforms
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Seg Forge combines powerful data engineering capabilities into
                  a single enterprise platform. Replace fragmented tooling with
                  one intelligent workspace that accelerates development,
                  governance, automation, and analytics at scale.
                </p>

                <div className="mt-10 space-y-6">
                  {capabilities.map((feature) => (
                    <div key={feature.title} className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                        <feature.icon className="h-7 w-7 text-cyan-600" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {feature.title}
                        </h3>

                        <p className="mt-2 leading-7 text-slate-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Open Lakehouse */}
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
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="absolute right-0 top-32 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              {/* LEFT CONTENT */}

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                  Industry Solutions
                </div>

                <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                  Built for Every
                  <br />
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    Data-Driven Industry
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Whether you're modernizing financial platforms, enabling
                  real-time healthcare insights, or building AI-powered customer
                  experiences, Seg Forge provides a unified platform that adapts
                  to every industry while maintaining enterprise reliability and
                  governance.
                </p>

                <div className="mt-12 grid gap-5 sm:grid-cols-2">
                  {industries.map((industry) => (
                    <div
                      key={industry.title}
                      className="rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl"
                    >
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-50">
                        <industry.icon className="h-6 w-6 text-cyan-600" />
                      </div>

                      <h3 className="text-lg font-semibold text-slate-900">
                        {industry.title}
                      </h3>

                      <ul className="mt-4 space-y-2">
                        {industry.solutions.map((item) => (
                          <li key={item} className="text-sm text-slate-600">
                            • {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* RIGHT IMAGE */}

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
                  <img
                    src="/images/industry-solutions.webp"
                    alt="Industry Solutions"
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI & ML Section */}
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
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          <div className="absolute left-1/3 top-32 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              {/* LEFT CONTENT */}

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                  Developer Experience
                </div>

                <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                  Built for Developers.
                  <br />
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    Ready for Enterprise.
                  </span>
                </h2>

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  From local development to enterprise deployment, Seg Forge
                  provides everything engineering teams need to automate,
                  integrate, and operate modern data platforms with confidence.
                </p>

                {/* Features */}

                <div className="mt-10 grid gap-6">
                  {developerFeatures.map((feature) => (
                    <div key={feature.title} className="flex items-start gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                        <feature.icon className="h-7 w-7 text-cyan-600" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {feature.title}
                        </h3>

                        <p className="mt-2 leading-7 text-slate-600">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Terminal Preview */}

                <div className="mt-12 overflow-hidden rounded-2xl border border-slate-200 bg-slate-950 shadow-xl">
                  <div className="flex items-center gap-2 border-b border-slate-800 px-5 py-3">
                    <div className="h-3 w-3 rounded-full bg-red-500" />
                    <div className="h-3 w-3 rounded-full bg-yellow-500" />
                    <div className="h-3 w-3 rounded-full bg-green-500" />
                  </div>

                  <div className="space-y-4 p-6 font-mono text-sm">
                    <div>
                      <span className="text-cyan-400">$</span>{" "}
                      <span className="text-white">docker compose up -d</span>
                    </div>

                    <div className="text-green-400">
                      ✔ Seg Forge Platform Running
                    </div>

                    <div className="text-cyan-300">
                      ✔ Start Building Pipelines
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* RIGHT IMAGE */}

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
                  <img
                    src="/images/developer-experience.webp"
                    alt="Developer Experience"
                    className="w-full"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white py-28">
          {/* Background */}

          <motion.div
            animate={{
              backgroundPosition: ["0px 0px", "120px 120px"],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: `
            linear-gradient(to right,#06b6d4 1px,transparent 1px),
            linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
          `,
              backgroundSize: "80px 80px",
            }}
          />

          <div className="absolute left-0 top-1/3 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[180px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid items-center gap-20 lg:grid-cols-2">
              {/* LEFT IMAGE */}

              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
                  <img
                    src="/images/open-standards.webp"
                    alt="Open Standards Architecture"
                    className="w-full"
                  />
                </div>
              </motion.div>

              {/* RIGHT CONTENT */}

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                {/* Badge */}

                <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                  Open Standards
                </div>

                {/* Heading */}

                <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
                  Built on Open Standards.
                  <br />
                  <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                    Free from Vendor Lock-In.
                  </span>
                </h2>

                {/* Description */}

                <p className="mt-6 text-lg leading-8 text-slate-600">
                  Your infrastructure. Your data. Your ownership.
                </p>

                <p className="mt-4 leading-8 text-slate-600">
                  Seg Forge is built on the industry's most trusted open-source
                  technologies, allowing you to deploy anywhere while keeping
                  complete control over your data. Your tables remain in your
                  own Amazon S3 or MinIO storage, your metadata stays under your
                  control, and your pipelines are built on open formats that
                  evolve with your business—not your vendor.
                </p>

                {/* Technology Cards */}

                <div className="mt-10 grid gap-4">
                  {technologies.map((tech) => (
                    <motion.div
                      key={tech.title}
                      whileHover={{ y: -3 }}
                      className="flex items-center gap-5 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:border-cyan-200 hover:shadow-lg"
                    >
                      <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-cyan-50">
                        <tech.icon className="h-7 w-7 text-cyan-600" />
                      </div>

                      <div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {tech.title}
                        </h3>

                        <p className="mt-1 text-sm text-slate-600">
                          {tech.subtitle}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                {/* Platform Benefits */}

                <div className="mt-10 rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-50 to-white p-6">
                  <h3 className="text-lg font-semibold text-slate-900">
                    Platform Benefits
                  </h3>

                  <div className="mt-6 grid gap-4 sm:grid-cols-2">
                    {benefits.map((benefit) => (
                      <div key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="h-5 w-5 shrink-0 text-cyan-500" />

                        <span className="text-sm font-medium text-slate-700">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Trust Statement */}

                <div className="mt-10 overflow-hidden rounded-3xl border border-cyan-100 bg-gradient-to-r from-cyan-500 to-blue-600 p-[1px] shadow-xl">
                  <div className="rounded-[22px] bg-white p-8">
                    <div className="flex items-start gap-4">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                        <ShieldCheck className="h-7 w-7 text-cyan-600" />
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-slate-900">
                          Your Infrastructure. Your Data.
                        </h3>

                        <p className="mt-4 leading-8 text-slate-600">
                          Your tables live in your own Amazon S3 or MinIO
                          buckets using open formats. You retain complete
                          ownership of your infrastructure, metadata, and data
                          while Seg Forge provides the intelligence to build,
                          orchestrate, and operate your modern data platform.
                        </p>
                      </div>
                    </div>

                    {/* Trust Badges */}

                    <div className="mt-8 grid gap-4 sm:grid-cols-3">
                      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                        <Cloud className="h-6 w-6 text-cyan-600" />

                        <div>
                          <p className="font-semibold text-slate-900">
                            Cloud Agnostic
                          </p>

                          <p className="text-sm text-slate-500">
                            Deploy Anywhere
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                        <LockOpen className="h-6 w-6 text-cyan-600" />

                        <div>
                          <p className="font-semibold text-slate-900">
                            No Vendor Lock-In
                          </p>

                          <p className="text-sm text-slate-500">
                            Open Standards
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-3 rounded-2xl border border-slate-200 p-4">
                        <Database className="h-6 w-6 text-cyan-600" />

                        <div>
                          <p className="font-semibold text-slate-900">
                            Customer Owned
                          </p>

                          <p className="text-sm text-slate-500">
                            Data & Infrastructure
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white-900">
          <CTABanner />
        </section>
      </div>
    </MainLayout>
  );
};

export default HomePage;
