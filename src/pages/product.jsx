import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Database,
  Cpu,
  Layers,
  Shield,
  GitBranch,
  Zap,
  Server,
  Lock,
  TrendingUp,
  Users,
} from "lucide-react";
import { CTABanner } from "../components/BottomCTA";

import MainLayout from "../layouts/mainLayout";

const product = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-4xl mx-auto"
            >
              <div className="inline-block px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium mb-6">
                product Overview
              </div>
              <h1 className="text-[2.375rem]/9 md:text-6xl font-bold text-slate-900 mb-6 ">
                Everything You Need for
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                  Modern Data Engineering
                </span>
              </h1>
              <p className="text-md text-slate-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                A unified product for ETL, orchestration, AI/ML, and open
                lakehouse architecture built for enterprise scale.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="py-14 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-4xl/9 md:text-5xl font-bold text-slate-900 mb-6">
                Core Capabilities
              </h2>
              <p className="text-md text-slate-600 max-w-3xl mx-auto">
                Built on open standards with enterprise-grade security,
                scalability, and reliability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: Database,
                  title: "Data Ingestion",
                  description:
                    "Connect to 150+ data sources with pre-built connectors and custom API integrations.",
                  color: "cyan",
                },
                {
                  icon: GitBranch,
                  title: "Pipeline Orchestration",
                  description:
                    "Build complex workflows with visual designer or code-first approach using Python.",
                  color: "blue",
                },
                {
                  icon: Zap,
                  title: "Real-time Processing",
                  description:
                    "Stream processing with Apache Kafka, Flink, and real-time analytics.",
                  color: "purple",
                },
                {
                  icon: Layers,
                  title: "Data Transformation",
                  description:
                    "SQL, Python, Spark, and dbt integrations for powerful data transformations.",
                  color: "green",
                },
                {
                  icon: Cpu,
                  title: "ML Operations",
                  description:
                    "End-to-end MLOps from training to deployment with model versioning.",
                  color: "orange",
                },
                {
                  icon: Shield,
                  title: "Security & Governance",
                  description:
                    "RBAC, data lineage, audit logs, and compliance with SOC 2, GDPR, HIPAA.",
                  color: "red",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div
                    className={`w-12 h-12 bg-${item.color}-100 rounded-xl flex items-center justify-center mb-6`}
                  >
                    <item.icon className={`w-6 h-6 text-${item.color}-600`} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Data Engineering Section */}
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
                  Data Engineering
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                  Build Reliable
                  <br />
                  Data Pipelines
                </h2>
                <p className="text-md text-slate-600 mb-8 leading-relaxed">
                  Design, deploy, and monitor data pipelines with
                  enterprise-grade reliability and observability.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        150+ Pre-built Connectors
                      </div>
                      <div className="text-slate-600">
                        Databases, APIs, SaaS apps, and cloud storage
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Auto-scaling & Fault Tolerance
                      </div>
                      <div className="text-slate-600">
                        Automatic retries and error handling
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
                        Pipeline health, metrics, and alerting
                      </div>
                    </div>
                  </li>
                </ul>
                <Link
                  to="/product/pipeline-studio"
                  className="inline-flex items-center space-x-2 px-6 py-3 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors"
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
                <div className="space-y-6">
                  <div className="p-4 bg-cyan-50 border border-cyan-200 rounded-lg">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-semibold text-slate-900">
                        ETL Pipeline
                      </div>
                      <div className="text-xs font-mono text-green-600 bg-green-50 px-2 py-1 rounded">
                        Active
                      </div>
                    </div>
                    <div className="text-sm text-slate-600">
                      Last run: 2 minutes ago
                    </div>
                    <div className="mt-3 h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-cyan-500"
                        style={{ width: "85%" }}
                      ></div>
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">
                        847
                      </div>
                      <div className="text-sm text-slate-600">Records/sec</div>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="text-2xl font-bold text-slate-900">
                        99.8%
                      </div>
                      <div className="text-sm text-slate-600">Success Rate</div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="text-sm font-medium text-slate-900">
                      Pipeline Steps
                    </div>
                    <div className="space-y-2">
                      {[
                        { step: "Extract", status: "complete" },
                        { step: "Transform", status: "complete" },
                        { step: "Validate", status: "running" },
                        { step: "Load", status: "pending" },
                      ].map((item, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between p-2 bg-gray-50 rounded"
                        >
                          <span className="text-sm text-slate-700">
                            {item.step}
                          </span>
                          <span
                            className={`text-xs px-2 py-1 rounded ${
                              item.status === "complete"
                                ? "bg-green-100 text-green-700"
                                : item.status === "running"
                                  ? "bg-blue-100 text-blue-700"
                                  : "bg-gray-200 text-gray-600"
                            }`}
                          >
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* AI & ML Section */}
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
                    <div className="flex items-center justify-between pb-4 border-b border-gray-200">
                      <h4 className="font-semibold text-slate-900">
                        Model Performance
                      </h4>
                      <select className="text-sm border border-gray-300 rounded px-3 py-1">
                        <option>Last 7 days</option>
                        <option>Last 30 days</option>
                      </select>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="p-4 bg-blue-50 rounded-lg">
                        <div className="text-sm text-slate-600 mb-1">
                          Accuracy
                        </div>
                        <div className="text-2xl font-bold text-slate-900">
                          94.7%
                        </div>
                        <div className="text-xs text-green-600 mt-1">
                          ↑ 2.3%
                        </div>
                      </div>
                      <div className="p-4 bg-purple-50 rounded-lg">
                        <div className="text-sm text-slate-600 mb-1">
                          Latency
                        </div>
                        <div className="text-2xl font-bold text-slate-900">
                          45ms
                        </div>
                        <div className="text-xs text-green-600 mt-1">
                          ↓ 12ms
                        </div>
                      </div>
                    </div>

                    <div className="p-4 bg-gray-50 rounded-lg">
                      <div className="flex items-center justify-between mb-3">
                        <div className="text-sm font-medium text-slate-900">
                          Active Models
                        </div>
                        <div className="text-lg font-bold text-slate-900">
                          12
                        </div>
                      </div>
                      <div className="space-y-2">
                        {[
                          { name: "fraud-detection-v2", version: "v2.1.4" },
                          { name: "recommendation-engine", version: "v1.8.2" },
                          { name: "sentiment-analysis", version: "v3.0.1" },
                        ].map((model, i) => (
                          <div
                            key={i}
                            className="flex items-center justify-between p-2 bg-white rounded text-sm"
                          >
                            <span className="text-slate-700 font-mono text-xs">
                              {model.name}
                            </span>
                            <span className="text-slate-500 text-xs">
                              {model.version}
                            </span>
                          </div>
                        ))}
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
                <div className="inline-block px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm font-medium mb-6">
                  AI & Machine Learning
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                  Train & Deploy
                  <br />
                  ML Models
                </h2>
                <p className="text-md text-slate-600 mb-8 leading-relaxed">
                  Complete MLOps product with model training, versioning,
                  deployment, and monitoring.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Distributed Training
                      </div>
                      <div className="text-slate-600">
                        Scale across GPUs and clusters automatically
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Model Registry
                      </div>
                      <div className="text-slate-600">
                        Centralized version control and lineage
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Real-time Inference
                      </div>
                      <div className="text-slate-600">
                        Low-latency serving with auto-scaling
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Open Lakehouse Deep Dive */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className=" mb-16"
            >
              <div className="inline-block px-4 py-2 bg-purple-50 text-purple-700 rounded-full text-sm font-medium mb-6">
                Open Lakehouse
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Built on Open Standards
              </h2>
              <p className="text-md text-slate-600 max-w-3xl mx-auto">
                No vendor lock-in. Use Delta Lake, Apache Iceberg, and open
                table formats with full ACID compliance.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {[
                {
                  title: "ACID Transactions",
                  description:
                    "Full transactional guarantees with snapshot isolation and time travel capabilities.",
                  features: [
                    "Atomic operations",
                    "Consistent reads",
                    "Isolated writes",
                    "Durable storage",
                  ],
                },
                {
                  title: "Schema Evolution",
                  description:
                    "Adapt to changing data structures without breaking existing queries or pipelines.",
                  features: [
                    "Add columns",
                    "Modify types",
                    "Nested structures",
                    "Backward compatible",
                  ],
                },
                {
                  title: "Time Travel",
                  description:
                    "Query historical versions of your data for auditing, debugging, and analysis.",
                  features: [
                    "Version history",
                    "Rollback changes",
                    "Audit trails",
                    "Point-in-time recovery",
                  ],
                },
                {
                  title: "Multi-Format Support",
                  description:
                    "Work with Parquet, ORC, Avro, and JSON with automatic optimization.",
                  features: [
                    "Format conversion",
                    "Compression",
                    "Partitioning",
                    "Indexing",
                  ],
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-8 border border-gray-200"
                >
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature, i) => (
                      <li
                        key={i}
                        className="flex items-center space-x-2 text-sm text-slate-600"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Governance Section */}
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
                Governance & Security
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                Enterprise-Grade Security
              </h2>
              <p className="text-md text-slate-600 max-w-3xl mx-auto">
                Complete data governance with lineage, RBAC, compliance, and
                observability.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  icon: Shield,
                  title: "Data Lineage",
                  desc: "Track data flow end-to-end",
                },
                {
                  icon: Lock,
                  title: "RBAC",
                  desc: "Fine-grained access control",
                },
                {
                  icon: Server,
                  title: "Audit Logs",
                  desc: "Complete activity tracking",
                },
                {
                  icon: TrendingUp,
                  title: "Observability",
                  desc: "Real-time monitoring",
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-600 text-sm">{item.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 bg-slate-900 rounded-2xl p-8 text-center"
            >
              <div className="max-w-3xl mx-auto">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Compliance Ready
                </h3>
                <p className="text-slate-300 mb-6">
                  SOC 2 Type II, GDPR, HIPAA, and ISO 27001 certified
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  {["SOC 2", "GDPR", "HIPAA", "ISO 27001", "CCPA"].map(
                    (cert, i) => (
                      <div
                        key={i}
                        className="px-4 py-2 bg-white/10 rounded-lg text-white text-sm font-medium"
                      >
                        {cert}
                      </div>
                    ),
                  )}
                </div>
              </div>
            </motion.div>
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

export default product;
