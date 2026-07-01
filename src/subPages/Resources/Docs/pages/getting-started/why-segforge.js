const doc = {
  title: "Why SegForge?",

  description:
    "Understand why modern data teams choose SegForge over fragmented point-solution stacks.",

  sections: [
    {
      heading: "Overview",
      content: `
Modern data teams typically stitch together five to ten separate tools for ingestion, transformation, storage, analytics, and machine learning.

SegForge replaces that fragmented stack with a single, unified platform that combines ETL, CDC, lakehouse management, analytics, governance, and MLOps in one deployable workspace.
      `,
    },

    {
      heading: "The Problem with Point Solutions",
      content: `
A typical modern data stack often looks like this:

• Ingestion — Fivetran or Airbyte
• Transformation — dbt Cloud
• Warehouse — Snowflake or BigQuery
• Orchestration — Airflow or Dagster
• Business Intelligence — Looker or Tableau
• Machine Learning — SageMaker or Vertex AI
• CDC — Debezium
• Data Lineage — Atlan or DataHub

Organizations frequently spend between $8,000 and $90,000 per month across multiple vendors, contracts, infrastructure, and integration points.
      `,
    },

    {
      heading: "How SegForge Is Different",
      content: `
SegForge consolidates the modern data stack into one deployable platform.

Fivetran / Airbyte
→ CDC Streams and Connection Wizard

dbt Cloud
→ Visual Pipeline Builder with 90+ transformations

Snowflake
→ Apache Iceberg Tables on S3 or MinIO

Airflow
→ Built-in Workflow Orchestration and Scheduling

Looker / Tableau
→ Apache Superset Integration

SageMaker
→ Integrated MLOps Platform

Debezium
→ Managed CDC and Smart Router

Atlan / DataHub
→ Built-in Data Lineage
      `,
    },

    {
      heading: "Feature Comparison",
      content: `
SegForge provides:

• Visual Pipeline Builder with 90+ nodes
• Native Real-Time CDC
• Apache Iceberg and Nessie versioning
• Interactive notebooks with Flink SQL, PyFlink, and Trino
• Built-in MLOps platform
• Self-hosted deployment options
• Column-level lineage
• Embedded BI dashboards
• Cost tracking and governance
• Git-like data versioning
• Smart workload routing

Unlike many alternatives, SegForge is built on open standards and remains portable across infrastructure providers.
      `,
    },

    {
      heading: "One Platform, Not a Stack",
      content: `
Connections, pipelines, CDC, notebooks, catalogs, lineage, BI, and machine learning all operate inside one interface with shared authentication, workspaces, and governance.

Instead of managing integrations between products, teams focus on building data products.
      `,
    },

    {
      heading: "Your Infrastructure, Your Data",
      content: `
Deploy SegForge on:

• Docker Compose
• Kubernetes
• Managed Cloud

Your data remains under your control and does not leave your environment unless you choose to move it.
      `,
    },

    {
      heading: "Open Standards",
      content: `
SegForge is built on:

• Apache Flink
• Apache Iceberg
• Apache Kafka
• Apache Nessie

No proprietary storage formats and no vendor lock-in.

Your data always remains portable.
      `,
    },

    {
      heading: "Visual and Code Experiences",
      content: `
Teams that prefer visual development can build pipelines using the drag-and-drop canvas.

Engineers that prefer code can use notebooks powered by Flink SQL, PyFlink, and Trino.

Both experiences ultimately generate the same optimized Flink execution plans.
      `,
    },

    {
      heading: "Real-Time First",
      content: `
Real-time data processing is a first-class capability.

SegForge provides:

• Change Data Capture
• Streaming pipelines
• Live monitoring
• Automatic workload optimization through the Smart Router

Real-time processing is built into the platform rather than added as an afterthought.
      `,
    },

    {
      heading: "When to Choose SegForge",
      content: `
SegForge is a good fit for:

• Teams consolidating their data stack
• Organizations with data sovereignty requirements
• Teams building real-time CDC pipelines
• Companies adopting Iceberg and lakehouse architectures
• Organizations needing ETL, analytics, and ML in one platform

Consider alternatives if:

• You are already heavily invested in Databricks and do not plan to migrate.
• You only require simple extract-load workflows.
• You need large-scale GPU-intensive deep learning workloads.
      `,
    },

    {
      heading: "What's Next?",
      content: `
Continue your journey with:

• Quick Start — Run SegForge locally in five minutes.
• Installation — Production deployment guides for Docker, Kubernetes, and Cloud.
      `,
    },
  ],
};

export default doc;