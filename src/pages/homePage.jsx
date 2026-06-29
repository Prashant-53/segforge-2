import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Database,
  Cpu,
  Layers,
  Shield,
  GitBranch,
  Zap,
} from "lucide-react";
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
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="bg-[#24DEC9] pt-32 pb-24 overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* LEFT CONTENT */}

              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/30 backdrop-blur-sm text-slate-900 text-sm font-medium mb-8">
                  Trusted by enterprise data teams worldwide
                </div>

                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[0.95]">
                  The Unified Data
                  <br />
                  Intelligence Platform
                </h1>

                <p className="mt-8 text-lg text-slate-800 max-w-xl leading-relaxed">
                  Build, orchestrate, and scale data pipelines with
                  enterprise-grade ETL, AI/ML capabilities, and open lakehouse
                  architecture.
                </p>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button className="group relative inline-flex items-center justify-center overflow-hidden rounded-md border border-slate-900 px-6 py-3 font-semibold text-black hover:text-white">
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
                className="relative h-[500px] flex items-center justify-center"
              >
                {/* Glow */}

                <div className="absolute w-[450px] h-[450px] bg-white/10 rounded-full blur-3xl" />

                {/* Orbit Ring */}

                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 45,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  className="absolute w-[420px] h-[420px] rounded-full border border-white/20"
                >
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white rounded-full" />
                  <div className="absolute bottom-10 left-10 w-2 h-2 bg-white/80 rounded-full" />
                  <div className="absolute top-1/3 right-8 w-2 h-2 bg-white/80 rounded-full" />
                </motion.div>

                {/* Crystal */}

                <motion.svg
                  width="340"
                  height="340"
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
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className=" mb-8"
            >
              <h2 className="text-[2.375rem]/9 md:text-5xl font-bold text-slate-900 mb-6">
                Enterprise-Grade Data Platform
              </h2>
              <p className="text-md text-slate-600 max-w-3xl mx-auto">
                Everything you need to build, deploy, and scale modern data
                applications with confidence.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-6">
                  <Database className="w-6 h-6 text-cyan-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Data Engineering
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Build, orchestrate, and monitor data pipelines at scale with
                  enterprise-grade reliability and observability.
                </p>
                <Link
                  to="/platform"
                  className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center space-x-2"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <Cpu className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  AI & ML
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Deploy machine learning models with integrated MLOps,
                  real-time inference, and automated model versioning.
                </p>
                <Link
                  to="/platform"
                  className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center space-x-2"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Layers className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Open Lakehouse
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Unified data storage with Delta Lake, Apache Iceberg, and open
                  table formats for maximum flexibility.
                </p>
                <Link
                  to="/platform"
                  className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center space-x-2"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
              >
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">
                  Governance
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Complete data lineage, RBAC, compliance, and observability
                  across your entire data platform.
                </p>
                <Link
                  to="/platform"
                  className="text-cyan-600 hover:text-cyan-700 font-medium flex items-center space-x-2"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Workflow Orchestration */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium mb-6">
                  Workflow Orchestration
                </div>
                <h2 className="text-[2.375rem]/9 md:text-5xl font-bold text-slate-900 mb-6">
                  Build Pipelines
                  <br />
                  Visually
                </h2>
                <p className="text-md text-slate-600 mb-8 leading-relaxed">
                  Drag-and-drop pipeline builder with real-time validation,
                  automatic dependency resolution, and built-in error handling.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Visual Pipeline Designer
                      </div>
                      <div className="text-slate-600">
                        Build complex data workflows without writing code
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Smart Scheduling
                      </div>
                      <div className="text-slate-600">
                        Cron-based, event-driven, or custom triggers
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Real-time Monitoring
                      </div>
                      <div className="text-slate-600">
                        Track pipeline health and performance metrics
                      </div>
                    </div>
                  </li>
                </ul>
                <Link
                  to="/platform/pipeline-studio"
                  className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 font-medium"
                >
                  <span>Explore Pipeline Studio</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8"
              >
                <div className="space-y-4">
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-cyan-500 rounded-lg flex items-center justify-center">
                      <Database className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">
                        Data Ingestion
                      </div>
                      <div className="text-sm text-slate-600">
                        Source: PostgreSQL
                      </div>
                    </div>
                    <div className="text-xs font-mono text-green-600 bg-green-50 px-2 py-1 rounded">
                      Running
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gray-300"></div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                      <GitBranch className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">
                        Transform
                      </div>
                      <div className="text-sm text-slate-600">
                        Clean & Normalize
                      </div>
                    </div>
                    <div className="text-xs font-mono text-blue-600 bg-blue-50 px-2 py-1 rounded">
                      Processing
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="w-px h-8 bg-gray-300"></div>
                  </div>
                  <div className="flex items-center space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="font-medium text-slate-900">
                        Load to Lakehouse
                      </div>
                      <div className="text-sm text-slate-600">
                        Delta Lake Format
                      </div>
                    </div>
                    <div className="text-xs font-mono text-gray-600 bg-gray-200 px-2 py-1 rounded">
                      Queued
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Open Lakehouse */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-2 lg:order-1"
              >
                <div className="bg-white rounded-2xl shadow-xl border border-gray-200 p-8">
                  <div className="space-y-6">
                    <div className="border-l-4 border-cyan-500 pl-4">
                      <div className="text-sm font-mono text-slate-600 mb-2">
                        Storage Layer
                      </div>
                      <div className="font-semibold text-slate-900">
                        Delta Lake / Iceberg
                      </div>
                    </div>
                    <div className="border-l-4 border-blue-500 pl-4">
                      <div className="text-sm font-mono text-slate-600 mb-2">
                        Query Engine
                      </div>
                      <div className="font-semibold text-slate-900">
                        Spark / Presto / Trino
                      </div>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <div className="text-sm font-mono text-slate-600 mb-2">
                        Catalog
                      </div>
                      <div className="font-semibold text-slate-900">
                        Unified Metadata Store
                      </div>
                    </div>
                    <div className="border-l-4 border-green-500 pl-4">
                      <div className="text-sm font-mono text-slate-600 mb-2">
                        Governance
                      </div>
                      <div className="font-semibold text-slate-900">
                        RBAC + Data Lineage
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="order-1 lg:order-2"
              >
                <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6">
                  Open Lakehouse Architecture
                </div>
                <h2 className="text-[2.375rem]/9 md:text-5xl font-bold text-slate-900 mb-6">
                  One Platform,
                  <br />
                  All Your Data
                </h2>
                <p className="text-md text-slate-600 mb-8 leading-relaxed">
                  Built on open standards with Delta Lake and Apache Iceberg. No
                  vendor lock-in, maximum flexibility.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        ACID Transactions
                      </div>
                      <div className="text-slate-600">
                        Guaranteed data consistency and reliability
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Time Travel
                      </div>
                      <div className="text-slate-600">
                        Query historical data versions instantly
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-purple-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Schema Evolution
                      </div>
                      <div className="text-slate-600">
                        Adapt to changing data structures seamlessly
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI & ML Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className=" mb-8"
            >
              <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                AI & Machine Learning
              </div>
              <h2 className="text-[2.375rem]/9 md:text-5xl font-bold text-slate-900 mb-6">
                Production-Ready ML Platform
              </h2>
              <p className="text-md text-slate-600 max-w-3xl mx-auto">
                Train, deploy, and monitor machine learning models with
                integrated MLOps capabilities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <div className="text-4xl font-bold text-cyan-500 mb-2">01</div>

                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Model Training
                </h3>
                <p className="text-slate-600">
                  Distributed training with GPU acceleration and automatic
                  hyperparameter tuning.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <div className="text-4xl font-bold text-cyan-500 mb-2">02</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Model Registry
                </h3>
                <p className="text-slate-600">
                  Version control, lineage tracking, and model governance in a
                  centralized registry.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-xl p-8 border border-gray-200"
              >
                <div className="text-4xl font-bold text-cyan-500 mb-2">03</div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Model Serving
                </h3>
                <p className="text-slate-600">
                  Real-time and batch inference with auto-scaling and A/B
                  testing capabilities.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Infrastructure Section */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className=" mb-16"
            >
              <div className="inline-block px-4 py-2 bg-green-50 text-green-700 rounded-full text-sm font-medium mb-6">
                Enterprise Infrastructure
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Deploy Anywhere
              </h2>
              <p className="text-md text-slate-600 max-w-3xl mx-auto">
                Kubernetes-native platform with multi-cloud and hybrid
                deployment options.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Kubernetes", desc: "Cloud-native orchestration" },
                { title: "Multi-Cloud", desc: "AWS, Azure, GCP support" },
                { title: "Hybrid", desc: "On-premise + cloud" },
                { title: "99.99% SLA", desc: "High availability" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center"
                >
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </motion.div>
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
