import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  ArrowUpRight,
  Database,
  GitBranch,
  Container,
  Terminal,
  Landmark,
  HeartPulse,
  ShoppingCart,
  Factory,
  RadioTower,
  Braces,
  Code2,
  Network,
  Cloud,
  Workflow,
  BrainCircuit,
  Boxes,
  DatabaseZap,
  Route,
  Sparkles,
} from "lucide-react";

import { Link } from "react-router-dom";
import { CTABanner } from "../components/BottomCTA";
import MainLayout from "../layouts/mainLayout";
import UnifiedPlatform from "../assets/homepage/UnifiedPlatform.webp";
import PlatformCapabalities from "../assets/homepage/platformCapabilities.webp";
import DevExperience from "../assets/homepage/devexp.webp";
import HeroVideo from "../assets/Hero.mp4";
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
      title: "Financial Services",
      path: "/solutions/financial-services",
      icon: Landmark,
      solutions: [
        "Real-time transaction processing",
        "Risk analytics and reporting",
        "Governed financial data",
      ],
    },
    {
      title: "Healthcare",
      path: "/solutions/healthcare",
      icon: HeartPulse,
      solutions: [
        "Connected healthcare data",
        "Real-time operational insights",
        "Analytics-ready datasets",
      ],
    },
    {
      title: "Retail & E-commerce",
      path: "/solutions/retail",
      icon: ShoppingCart,
      solutions: [
        "Customer and sales analytics",
        "Real-time inventory insights",
        "Unified data pipelines",
      ],
    },
    {
      title: "Manufacturing",
      path: "/solutions/manufacturing",
      icon: Factory,
      solutions: [
        "Operational data integration",
        "Production monitoring",
        "Predictive analytics foundations",
      ],
    },
    {
      title: "Telecommunications",
      path: "/solutions/telecommunications",
      icon: RadioTower,
      solutions: [
        "Streaming network data",
        "Usage and performance analytics",
        "Scalable data processing",
      ],
    },
    {
      title: "Technology & SaaS",
      path: "/solutions/technology",
      icon: Cloud,
      solutions: [
        "Product usage analytics",
        "Connected application data",
        "Scalable data infrastructure",
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

  const technology = [
    { name: "Apache Flink", logo: "/logos/flink.svg", row: 1 },
    { name: "Apache Iceberg", logo: "/logos/iceberg.svg", row: 1 },
    { name: "Apache Kafka", logo: "/logos/kafka.svg", row: 1 },
    { name: "Debezium", logo: "/logos/debezium.svg", row: 1 },

    { name: "Trino", logo: "/logos/trino.svg", row: 2 },
    // { name: "Project Nessie", logo: "/logos/nessie.svg", row: 2 },
    { name: "PostgreSQL", logo: "/logos/postgresql.svg", row: 2 },
    { name: "Redis", logo: "/logos/redis.svg", row: 2 },
    { name: "MLflow", logo: "/logos/MLflow.svg", row: 2 },

    { name: "Apache Superset", logo: "/logos/superset.svg", row: 3 },
    { name: "MinIO", logo: "/logos/minio.svg", row: 3 },
    // { name: "FastAPI", logo: "/logos/fastapi.svg", row: 3 },
    // { name: "Apache Parquet", logo: "/logos/parquet.svg", row: 3 },
  ];
  const aiCapabilities = [
    {
      icon: BrainCircuit,
      title: "Machine Learning & MLOps",
      description:
        "Build data-driven ML workflows with experiment tracking, model evaluation, and batch scoring integrated into your data platform.",
      tag: "ML WORKFLOWS",
    },
    {
      icon: Sparkles,
      title: "AI Agents & LLMs",
      description:
        "Bring AI-powered experiences into your platform with capabilities for working with language models and AI-driven tasks.",
      tag: "AI INTELLIGENCE",
    },
    {
      icon: Database,
      title: "RAG & Lakehouse Context",
      description:
        "Connect AI workflows with enterprise data to support context-aware retrieval and more relevant information access.",
      tag: "DATA + AI",
    },
    {
      icon: Workflow,
      title: "AI Workflow Automation",
      description:
        "Connect data processing and AI tasks within coordinated workflows, bringing data preparation and downstream operations together.",
      tag: "ORCHESTRATION",
    },
    {
      icon: Code2,
      title: "AI Developer Tools",
      description:
        "Bring AI-assisted development capabilities closer to the data engineering workflows where teams build and manage their solutions.",
      tag: "DEVELOPER EXPERIENCE",
    },
    {
      icon: Network,
      title: "Semantic Intelligence",
      description:
        "Organize business terminology and shared context to make enterprise data assets easier to discover and understand.",
      tag: "DATA CONTEXT",
    },
  ];

  const rows = [
    technology.filter((item) => item.row === 1),
    technology.filter((item) => item.row === 2),
    technology.filter((item) => item.row === 3),
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
                  <Link
                    to="/contact"
                    className="group w-full sm:w-auto relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-900 px-6 py-3 font-semibold text-black hover:text-white"
                  >
                    <span className="absolute inset-y-0 left-0 w-0 bg-slate-900 transition-all duration-300 group-hover:w-full"></span>

                    <span className="relative z-10 flex items-center gap-2">
                      Start Free Trial
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  </Link>
                  <a
                    href="/docs/getting-started/what-is-segforge"
                    className="px-6 py-3 rounded-md border border-slate-900 text-slate-900 font-semibold bg-white/30 backdrop-blur-sm"
                  >
                    View Documentation
                  </a>
                </div>
              </motion.div>
              {/* RIGHT VISUAL */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.95 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.8 }}
                className="relative order-2 flex w-full items-center justify-center"
              >
                {/* Glow behind video */}
                <div className="absolute h-[260px] w-[260px] sm:h-[380px] sm:w-[380px] lg:h-[500px] lg:w-[500px] rounded-full bg-white/10 blur-3xl" />

                {/* Video container */}
                <div className="relative z-10 w-full max-w-[620px] overflow-hidden rounded-2xl border border-white/30 bg-black/10 shadow-2xl backdrop-blur-sm">
                  <video
                    className="block aspect-video h-auto w-full object-cover"
                    src={HeroVideo}
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="metadata"
                  >
                    Your browser does not support the video tag.
                  </video>

                  {/* Subtle glass overlay/border */}
                  <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/20" />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Trusted By */}
        <section className="py-16 bg-white border-y border-slate-200 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <p className="text-center text-sm font-semibold tracking-[0.2em] text-slate-500 uppercase mb-10">
              Trusted By Enterprise Data Teams in
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

        <section className="relative overflow-hidden bg-white py-20 ">
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
            {/* Main Content: Paragraph + Image */}
            <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
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

                <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 ">
                  One Workspace.
                  <br />
                  Every Data Workflow.
                </h2>

                <p className="mt-6 text-base leading-7 text-slate-600">
                  SegForge brings the entire data lifecycle into one
                  workspace—from connecting data sources and building visual
                  pipelines to managing and automating workflows. It helps teams
                  prepare reliable data, maintain governance, monitor
                  operations, and deliver analytics, dashboards, notebooks, and
                  machine learning from a shared platform, reducing the need for
                  disconnected tools.
                </p>
              </motion.div>

              {/* RIGHT IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="overflow-hidden  border border-slate-200 bg-white shadow-xl shadow-slate-900/10">
                  <img
                    src={UnifiedPlatform}
                    alt="SegForge unified data platform architecture"
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            </div>

            {/* Platform Highlights: Below Paragraph + Image */}
            <div className="mt-20 grid grid-cols-1 gap-12 border-t border-slate-200 pt-12 sm:grid-cols-2 lg:mt-24 lg:grid-cols-3 lg:gap-12">
              {[
                {
                  label: "UNIFIED",
                  title: "Every workflow in one workspace",
                  description:
                    "Connect enterprise sources, build visual ETL pipelines, and orchestrate data workloads without switching between disconnected tools.",
                  icon: (
                    <svg
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-12 w-12"
                    >
                      <rect x="5" y="7" width="15" height="12" rx="2" />
                      <rect x="28" y="7" width="15" height="12" rx="2" />
                      <rect x="16" y="30" width="16" height="12" rx="2" />
                      <path d="M20 13h8M24 13v11M12 19v5h24v-5M24 24v6" />
                    </svg>
                  ),
                },
                {
                  label: "CONNECTED",
                  title: "Real-time data, open lakehouse",
                  description:
                    "Combine CDC, Apache Flink processing, and Apache Iceberg storage to move data from operational systems into analytics-ready datasets.",
                  icon: (
                    <svg
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      className="h-12 w-12"
                    >
                      <circle cx="24" cy="24" r="6" />
                      <circle cx="24" cy="6" r="3" />
                      <circle cx="40" cy="15" r="3" />
                      <circle cx="40" cy="33" r="3" />
                      <circle cx="24" cy="42" r="3" />
                      <circle cx="8" cy="33" r="3" />
                      <circle cx="8" cy="15" r="3" />
                      <path d="M24 9v9M37 16l-8 5M37 32l-8-5M24 39v-9M11 32l8-5M11 16l8 5" />
                    </svg>
                  ),
                },
                {
                  label: "CONTROLLED",
                  title: "Reliable, observable operations",
                  description:
                    "Manage workspace access, monitor job health, inspect execution logs, and recover workflows with visibility into data operations.",
                  icon: (
                    <svg
                      viewBox="0 0 48 48"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.7"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-12 w-12"
                    >
                      <path d="M24 4 39 10v12c0 10-6 17-15 22C15 39 9 32 9 22V10L24 4Z" />
                      <path d="m17 24 5 5 10-11" />
                    </svg>
                  ),
                },
              ].map((item, index) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: index * 0.12 }}
                  className="group"
                >
                  <div className="mb-7 text-[#26DEC9] transition-transform duration-300 group-hover:-translate-y-1">
                    {item.icon}
                  </div>

                  <p className="mb-3 text-sm font-medium uppercase tracking-wide text-[#26DEC9]">
                    {item.label}
                  </p>

                  <h3 className="mb-4 text-xl font-semibold leading-snug text-slate-950">
                    {item.title}
                  </h3>

                  <p className="text-base leading-7 text-slate-600">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Capabilities */}
        <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-6">
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
                className="lg:order-1 order-2"
              >
                <div className="overflow-hidden rounded-[32px] border border-slate-200 bg-white shadow-2xl">
                  <img
                    src={PlatformCapabalities}
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
                className="lg:order-2 order-1"
              >
                <div className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                  Platform Capabilities
                </div>

                <h2 className="mt-6 text-4xl font-bold leading-none text-slate-900 lg:text-4xl">
                  Everything Required to
                  <br />
                  Build Modern Data Platforms
                </h2>

                <p className="mt-6 text-md leading-8 text-slate-600">
                  Seg Forge combines powerful data engineering capabilities into
                  a single enterprise platform. Replace fragmented tooling with
                  one intelligent workspace that accelerates development,
                  governance, automation, and analytics at scale.
                </p>

                <div className="mt-10 space-y-6">
                  {capabilities.map((feature) => (
                    <div key={feature.title} className="flex gap-5">
                      <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-cyan-50">
                        <feature.icon className="h-7 w-7 text-[#26DEC9]" />
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

        <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
          {/* Background Grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
              linear-gradient(to right, #1affe5 1px, transparent 1px),
              linear-gradient(to bottom, #1affe5 1px, transparent 1px)
            `,
                backgroundSize: "80px 80px",
              }}
            />
          </div>

          {/* Ambient Glow */}
          <div className="pointer-events-none absolute right-[5%] top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-[#1affe5]/10 blur-[150px]" />

          <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
            <div className="grid min-w-0 items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
              {/* LEFT CONTENT */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="order-1 min-w-0"
              >
                {/* Eyebrow */}
                <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                  <BrainCircuit className="h-4 w-4" />
                  AI &amp; Machine Learning
                </div>

                {/* Heading */}
                <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-slate-900">
                  From trusted data
                  <br />
                  to intelligent outcomes.
                </h2>

                {/* Description */}
                <p className="mt-6 max-w-xl text-base leading-7 text-slate-600">
                  Bring analytics, machine learning, and AI-powered workflows
                  closer to your data. SegForge provides a unified environment
                  to explore datasets, develop models, build context-aware AI
                  applications, and turn data into actionable insights.
                </p>
              </motion.div>

              {/* RIGHT VISUAL */}
              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.98 }}
                whileInView={{ opacity: 1, x: 0, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: 0.1,
                }}
                className="relative order-2 min-w-0 w-full"
              >
                <div className="pointer-events-none absolute -inset-5 rounded-[32px] bg-[#1affe5]/10 blur-3xl" />

                <div className="relative w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:rounded-3xl">
                  <img
                    src="/src/assets/Products/AI/ai-platform.webp"
                    alt="AI and machine learning capabilities connected to a shared data platform"
                    className="block h-auto w-full object-contain"
                    loading="lazy"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        {/* Industry Solutions */}
        <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
          {/* Background Grid */}
          <div className="pointer-events-none absolute inset-0 opacity-[0.04]">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
          linear-gradient(to right,#06b6d4 1px,transparent 1px),
          linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
        `,
                backgroundSize: "64px 64px",
              }}
            />
          </div>

          {/* Background Glow */}
          <div className="pointer-events-none absolute left-1/2 top-20 h-[400px] w-[700px] -translate-x-1/2 rounded-full bg-cyan-400/10 blur-[150px]" />

          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            {/* Centered Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-3xl text-center"
            >
              <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                Industry Solutions
              </div>

              <h2 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                Built for Every
                <br className="hidden sm:block" />{" "}
                <span className="text-cyan-600">Data-Driven Industry</span>
              </h2>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
                From financial services to healthcare and retail, SegForge helps
                teams connect data, orchestrate workloads, and turn complex
                information into actionable insights.
              </p>
            </motion.div>

            {/* Industry Cards */}
            <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:mt-16 lg:grid-cols-3">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.45, delay: index * 0.08 }}
                >
                  <Link
                    to={industry.path}
                    className="group relative flex h-full min-h-[250px] flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-cyan-300 hover:shadow-xl hover:shadow-cyan-950/[0.07] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 focus-visible:ring-offset-4"
                  >
                    {/* Hover Accent */}
                    <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-gradient-to-r from-cyan-400 to-sky-500 transition-transform duration-300 group-hover:scale-x-100" />

                    <div className="flex items-start justify-between">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-cyan-100 bg-cyan-50 transition-colors duration-300 group-hover:bg-cyan-100">
                        <industry.icon className="h-7 w-7 text-cyan-600" />
                      </div>

                      <ArrowUpRight className="h-5 w-5 text-slate-400 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-cyan-600" />
                    </div>

                    <h3 className="mt-7 text-xl font-semibold tracking-tight text-slate-900 transition-colors group-hover:text-cyan-700">
                      {industry.title}
                    </h3>

                    <ul className="mt-4 space-y-2">
                      {industry.solutions.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan-500" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto flex items-center gap-2 pt-6 text-sm font-semibold text-cyan-700">
                      Explore solution
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="relative overflow-hidden bg-[#faf8f7] px-5 py-20 sm:py-24">
          {/* Subtle background glow */}
          <div className="pointer-events-none absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200/20 blur-[120px]" />

          <div className="relative mx-auto max-w-6xl">
            <div className="mb-12 text-center">
              <p className="inline-flex rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                Open-source foundations
              </p>

              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Powered by proven technologies
              </h2>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-slate-600">
                SegForge brings together trusted open-source technologies to
                power data engineering, real-time processing, and lakehouse
                analytics.
              </p>
            </div>

            {/* Three centered rows: 4 / 5 / 4 */}
            <div className="flex flex-col items-center gap-3 sm:gap-4">
              {rows.map((row, rowIndex) => (
                <div
                  key={rowIndex}
                  className="flex w-full flex-wrap items-center justify-center gap-3 sm:gap-4"
                >
                  {row.map((tech) => (
                    <div
                      key={tech.name}
                      title={tech.name}
                      className="flex h-[88px] w-[calc(50%-0.375rem)] items-center justify-center rounded-2xl border border-slate-200 bg-white/90 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg hover:shadow-cyan-900/5 sm:h-24 sm:w-[150px] lg:w-[170px]"
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        loading="lazy"
                        className="max-h-12 max-w-full object-contain"
                      />
                    </div>
                  ))}
                </div>
              ))}
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
