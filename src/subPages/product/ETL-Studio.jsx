import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
  Pause,
  Move,
  CheckCircle,
  GitGraph,
  CalendarClock,
  Activity,
  Bug,
  Settings,
  Code,
  GitBranch,
  Database,
  Zap,
  AlertCircle,
  CheckCircle2,
  Clock,
} from "lucide-react";
import ETL from "../../assets/Products/ETL/ETL.png";
import { CTABanner } from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const ETLStudio = () => {
  return (
    <MainLayout>
      <div className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white pt-32 pb-24">
          {/* Animated Grid */}

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

          {/* Background Glow */}

          <motion.div
            animate={{
              x: [-40, 40, -40],
              y: [-20, 20, -20],
              scale: [1, 1.08, 1],
            }}
            transition={{
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute left-1/3 top-0 h-[500px] w-[500px] rounded-full bg-cyan-400/10 blur-[170px]"
          />

          <motion.div
            animate={{
              x: [40, -40, 40],
              y: [20, -20, 20],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-0 bottom-0 h-[600px] w-[600px] rounded-full bg-blue-400/10 blur-[180px]"
          />

          <div className="relative mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-8">
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
                ETL Studio
              </div>

              <h1 className="mt-8 text-4xl font-bold leading-[1.05] text-slate-900 lg:text-6xl">
                Build Visual Pipelines
                <br />
                <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
                  For Modern Data Teams
                </span>
              </h1>

              <p className="mt-8 max-w-xl text-md leading-8 text-slate-600">
                Design, test, and deploy production-grade data pipelines through
                a visual development experience powered by Apache Flink and
                Iceberg.
              </p>

              <div className="mt-10 flex flex-wrap gap-4">
                {/* Primary */}

                <button className="group relative overflow-hidden rounded-xl bg-slate-900 px-8 py-4 font-medium text-white">
                  <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

                  <span className="relative flex items-center gap-2">
                    Try Pipeline Studio
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </button>

                {/* Secondary */}

                <button className="group relative overflow-hidden rounded-xl border border-slate-300 bg-white px-8 py-4 font-medium text-slate-700">
                  <span className="absolute inset-0 origin-left scale-x-0 bg-cyan-500 transition-transform duration-500 group-hover:scale-x-100" />

                  <span className="relative transition-colors duration-300 group-hover:text-white">
                    Watch Demo
                  </span>
                </button>
              </div>
            </motion.div>

            {/* RIGHT */}

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-2xl">
                {/* Replace this with your ETL Studio screenshot */}

                <img src={ETL} alt="ETL Studio" className="w-full" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className=" mb-16"
            >
              <h2 className="text-3xl lg:text-4xl text-center font-bold text-slate-900 mb-6">
                Everything You Need to Build Pipelines
              </h2>
              <p className="text-md text-slate-600 text-center max-w-3xl mx-auto">
                From simple ETL to complex orchestration workflows, Pipeline
                Studio has you covered.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Drag & Drop Interface",
                  description:
                    "Build complex pipelines visually without writing any code. Just drag, drop, and connect.",
                  icon: <Move />,
                },
                {
                  title: "Real-time Validation",
                  description:
                    "Get instant feedback on configuration errors and schema mismatches as you build.",
                  icon: <CheckCircle />,
                },
                {
                  title: "Version Control",
                  description:
                    "Track all pipeline changes with built-in versioning and rollback capabilities.",
                  icon: <GitGraph />,
                },
                {
                  title: "Smart Scheduling",
                  description:
                    "Schedule pipelines with cron expressions, event triggers, or custom schedules.",
                  icon: <CalendarClock />,
                },
                {
                  title: "Live Monitoring",
                  description:
                    "Monitor pipeline execution in real-time with detailed logs and metrics.",
                  icon: <Activity />,
                },
                {
                  title: "Error Handling",
                  description:
                    "Automatic retries, dead letter queues, and custom error handling logic.",
                  icon: <Bug />,
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="text-4xl text-cyan-500 mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className=" mb-16 "
            >
              <h2 className="text-3xl lg:text-4xl text-center font-bold text-slate-900 mb-6">
                How Pipeline Studio Works
              </h2>
              <p className="text-md text-slate-600 text-center  mx-auto">
                Build production-ready data pipelines in four simple steps.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {[
                {
                  step: "01",
                  title: "Connect Sources",
                  description:
                    "Choose from 150+ pre-built connectors or create custom integrations.",
                },
                {
                  step: "02",
                  title: "Transform Data",
                  description:
                    "Apply transformations using SQL, Python, or visual builders.",
                },
                {
                  step: "03",
                  title: "Configure Targets",
                  description:
                    "Select destination and configure data format and partitioning.",
                },
                {
                  step: "04",
                  title: "Deploy & Monitor",
                  description:
                    "Deploy with one click and monitor performance in real-time.",
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
                  <div className="text-5xl font-bold text-cyan-500 mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {item.title}
                  </h3>
                  <p className="text-slate-600">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Code vs No-Code */}
        <section className="py-24 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-block px-4 py-2 bg-cyan-50 text-cyan-700 rounded-full text-sm font-medium mb-6">
                  Flexibility
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                  Visual or Code?
                  <br />
                  You Choose
                </h2>
                <p className="text-md text-slate-600 mb-8 leading-relaxed">
                  Start with the visual builder and switch to code when you need
                  more control. Or go code-first from the start.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Visual Builder
                      </div>
                      <div className="text-slate-600">
                        Perfect for analysts and business users
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Python SDK
                      </div>
                      <div className="text-slate-600">
                        Full programmatic control for engineers
                      </div>
                    </div>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Hybrid Approach
                      </div>
                      <div className="text-slate-600">
                        Mix visual and code components seamlessly
                      </div>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-slate-900 rounded-2xl p-8 text-white"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm text-slate-400">pipeline.py</span>
                  <Code className="w-5 h-5 text-slate-400" />
                </div>
                <pre className="text-sm font-mono overflow-x-auto">
                  <code className="text-cyan-400">
                    {`from segforge import Pipeline

pipeline = Pipeline("customer-etl")

# Source
source = pipeline.add_source(
    "postgres",
    database="prod_db",
    table="customers"
)

# Transform
transformed = source.transform(
    clean_nulls=True,
    normalize_emails=True
)

# Destination
transformed.to_delta_lake(
    path="/data/customers",
    mode="append"
)

pipeline.run()`}
                  </code>
                </pre>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Integrations */}
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                22+ Pre-built Connectors
              </h2>
              <p className="text-md text-slate-600 max-w-3xl mx-auto">
                Connect to databases, APIs, SaaS applications, and cloud storage
                services out of the box.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {[
                "PostgreSQL",
                "MySQL",
                "MongoDB",
                "Snowflake",
                "BigQuery",
                "Redshift",
                "Salesforce",
                "HubSpot",
                "Stripe",
                "AWS S3",
                "Azure",
                "GCP",
              ].map((integration, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-white border border-gray-200 rounded-xl p-6 text-center hover:shadow-lg transition-shadow"
                >
                  <div className="font-semibold text-slate-900">
                    {integration}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/platform"
                className="inline-flex items-center space-x-2 text-cyan-600 hover:text-cyan-700 font-medium"
              >
                <span>View All Integrations</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
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

export default ETLStudio;
