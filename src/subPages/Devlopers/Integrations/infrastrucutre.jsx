import React from "react";
import { motion } from "framer-motion";
import {
  Database,
  HardDrive,
  Cloud,
  Server,
  Boxes,
  Cpu,
  ArrowRight,
} from "lucide-react";

const storagePlatforms = [
  {
    name: "AWS S3",
    description: "Primary object storage for Apache Iceberg tables.",
    logo: "/logos/aws.svg",
  },
  {
    name: "MinIO",
    description: "S3-compatible storage for local and private deployments.",
    logo: "/logos/minio.svg",
  },
  {
    name: "Azure Blob Storage",
    description: "Enterprise object storage for Microsoft Azure.",
    logo: "/logos/azure.svg",
  },
  {
    name: "Google Cloud Storage",
    description: "Cloud-native storage for GCP deployments.",
    logo: "/logos/gcp.svg",
  },
];

const computePlatforms = [
  {
    name: "Docker Compose",
    description: "Developer and single-node deployments.",
    icon: Boxes,
  },
  {
    name: "Kubernetes",
    description: "Production orchestration and autoscaling.",
    icon: Server,
  },
  {
    name: "Amazon EKS",
    description: "Managed Kubernetes clusters on AWS.",
    icon: Cloud,
  },
  {
    name: "K3s",
    description: "Lightweight Kubernetes for edge environments.",
    icon: Boxes,
  },
  {
    name: "EC2 Clusters",
    description: "Composable compute clusters provisioned on demand.",
    icon: Cpu,
  },
  {
    name: "Apache Flink",
    description: "Distributed execution engine for ETL and streaming.",
    icon: Cpu,
  },
  {
    name: "Apache Kafka",
    description: "Real-time event streaming and CDC transport.",
    icon: Database,
  },
];

const LakehouseInfrastructure = () => {
  return (
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
            backgroundSize: "72px 72px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            Lakehouse Infrastructure
          </span>

          <h2 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
            Enterprise infrastructure
            <span className="bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              {" "}
              built for scale.
            </span>
          </h2>

          <p className="mt-6 text-md leading-8 text-slate-600">
            Seg Forge separates storage from compute, allowing you to run
            distributed pipelines while storing data in open Apache Iceberg
            tables across any cloud or on-premises environment.
          </p>
        </motion.div>

        {/* Architecture */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 to-slate-950 p-10 overflow-hidden"
        >
          <div className="grid lg:grid-cols-5 gap-8 items-center text-center">
            {[
              "Data Sources",
              "Seg Forge",
              "Flink / Kafka",
              "Iceberg",
              "Object Storage",
            ].map((item, index) => (
              <React.Fragment key={item}>
                <div>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-2xl bg-white/10 backdrop-blur">
                    <Database className="h-10 w-10 text-cyan-400" />
                  </div>

                  <h3 className="mt-5 font-semibold text-white">{item}</h3>
                </div>

                {index < 4 && (
                  <ArrowRight className="hidden lg:block mx-auto h-8 w-8 text-cyan-500" />
                )}
              </React.Fragment>
            ))}
          </div>
        </motion.div>

        {/* Infrastructure Cards */}

        <div className="mt-20 grid gap-10 lg:grid-cols-2">
          {/* Storage */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="flex items-center gap-3">
              <HardDrive className="h-6 w-6 text-cyan-600" />

              <h3 className="text-2xl font-bold text-slate-900">
                Object Storage
              </h3>
            </div>

            <p className="mt-4 text-slate-600 leading-7">
              Open Apache Iceberg tables can be stored on any S3-compatible
              object storage platform.
            </p>

            <div className="mt-8 space-y-5">
              {storagePlatforms.map((item) => (
                <div
                  key={item.name}
                  className="rounded-2xl bg-white border border-slate-200 p-5 hover:border-cyan-300 transition"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.name}
                      </h4>

                      <p className="mt-1 text-sm text-slate-500">
                        {item.description}
                      </p>
                    </div>

                    <Database className="h-6 w-6 text-cyan-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compute */}

          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8">
            <div className="flex items-center gap-3">
              <Cpu className="h-6 w-6 text-cyan-600" />

              <h3 className="text-2xl font-bold text-slate-900">
                Compute Infrastructure
              </h3>
            </div>

            <p className="mt-4 text-slate-600 leading-7">
              Deploy Seg Forge on your preferred infrastructure with distributed
              execution powered by Apache Flink.
            </p>

            <div className="mt-8 grid gap-5">
              {computePlatforms.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.name}
                    className="rounded-2xl bg-white border border-slate-200 p-5 hover:border-cyan-300 transition"
                  >
                    <div className="flex items-start gap-4">
                      <div className="rounded-xl bg-cyan-50 p-3">
                        <Icon className="h-5 w-5 text-cyan-600" />
                      </div>

                      <div>
                        <h4 className="font-semibold text-slate-900">
                          {item.name}
                        </h4>

                        <p className="mt-1 text-sm text-slate-500">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LakehouseInfrastructure;
