// pages/help/faq.js

const doc = {
  title: "Frequently Asked Questions",

  description:
    "Answers to the most common questions about Seg Forge, including deployment, pipelines, CDC, storage, security, and scaling.",

  sections: [
    {
      heading: "General",
      content:
        "Common questions about Seg Forge and its capabilities.",
    },

    {
      heading: "What is Seg Forge?",
      content: `
Seg Forge is an open data platform that combines:

• Visual ETL pipeline building
• Real-time Change Data Capture (CDC)
• A modern lakehouse powered by Apache Iceberg and Nessie
• Interactive notebooks
• MLOps capabilities
• Business intelligence and reporting

Think of it as a self-hosted alternative to Databricks built around Apache Flink.
      `,
    },

    {
      heading: "Is Seg Forge open source?",
      content:
        "Yes. Seg Forge is open source and can be self-hosted using Docker Compose or Kubernetes.",
    },

    {
      heading: "What databases does Seg Forge support?",
      content: `
CDC Support:
• PostgreSQL
• MySQL
• SQL Server
• Oracle
• IBM DB2

Batch (JDBC) Support:
• All CDC databases
• Snowflake
• MongoDB
• Any JDBC-compatible database
      `,
    },

    {
      heading: "What's the difference between Seg Forge and Databricks?",
      content: `
Seg Forge differs from Databricks in several ways:

• Self-hosted or cloud-managed deployment
• Apache Flink instead of Apache Spark
• Apache Iceberg instead of Delta Lake
• Built-in visual pipelines and CDC
• Workspace-based architecture
• Integrated notebooks, MLOps, and BI
      `,
    },

    {
      heading: "Deployment",
      content:
        "Questions about installation and infrastructure requirements.",
    },

    {
      heading: "What are the minimum system requirements?",
      content: `
Minimum:
• 4 CPU cores
• 8 GB RAM
• 20 GB storage

Recommended:
• 8 CPU cores
• 16 GB RAM
• 50 GB SSD storage
      `,
    },

    {
      heading: "Can I run Seg Forge on Windows?",
      content:
        "Yes. Seg Forge runs on Windows using Docker Desktop with WSL2 enabled.",
    },

    {
      heading: "How do I upgrade Seg Forge?",
      code: `# Docker Compose
git pull
docker compose pull
docker compose up -d

# Kubernetes
helm repo update
helm upgrade seg-forge seg-forge/seg-forge`,
      language: "bash",
    },

    {
      heading: "Can I use my own PostgreSQL database?",
      content:
        "Yes. Set the DATABASE_URL environment variable to point to your external PostgreSQL instance.",
    },

    {
      heading: "Can I use AWS S3 instead of MinIO?",
      content:
        "Yes. Configure S3 in Settings → Storage Configuration and provide your bucket, region, and credentials.",
    },

    {
      heading: "Pipelines",
      content:
        "Questions related to visual pipelines and execution.",
    },

    {
      heading: "How many transformation nodes are available?",
      content:
        "Seg Forge includes more than 90 transformation nodes across row operations, column operations, joins, aggregations, data quality, advanced processing, and machine learning categories.",
    },

    {
      heading: "Can I write SQL instead of using the visual builder?",
      content:
        "Yes. Use Notebooks to write Flink SQL directly, or inspect the generated SQL from any visual pipeline using the SQL tab.",
    },

    {
      heading: "What's the difference between batch and streaming mode?",
      content: `
Batch:
Processes all available data and then finishes.

Streaming:
Runs continuously and processes new data as it arrives.
      `,
    },

    {
      heading: "Can I schedule a pipeline?",
      content:
        "Yes. Click the Schedule icon in the pipeline toolbar and provide a cron expression such as 0 2 * * * for daily execution at 2 AM.",
    },

    {
      heading: "How do I debug a failed pipeline?",
      content: `
1. Open the pipeline.
2. Review the Logs tab.
3. Identify the error message.
4. Test individual nodes using the Inspector Panel.
      `,
    },

    {
      heading: "CDC",
      content:
        "Questions about Change Data Capture and real-time synchronization.",
    },

    {
      heading: "What databases support CDC?",
      content: `
• PostgreSQL (WAL)
• MySQL (binlog)
• SQL Server (CDC tables)
• Oracle (LogMiner)
• IBM DB2 (ASN capture)
      `,
    },

    {
      heading: "What is the Smart Router?",
      content:
        "The Smart Router automatically selects PyIceberg for tables smaller than 10 GB and Flink for larger tables.",
    },

    {
      heading: "How much CDC latency should I expect?",
      content:
        "Most deployments achieve end-to-end CDC latency below one second, depending on cluster size and network conditions.",
    },

    {
      heading: "Can I CDC multiple tables at once?",
      content:
        "Yes. A single CDC stream can capture multiple tables from the same database. Each table receives its own Kafka topic and Iceberg table.",
    },

    {
      heading: "Data & Storage",
      content:
        "Questions about Iceberg, Nessie, and storage.",
    },

    {
      heading: "What is Apache Iceberg?",
      content: `
Apache Iceberg is an open table format that provides:

• ACID transactions
• Schema evolution
• Time travel
• Partition evolution
• Open storage formats using Parquet files
      `,
    },

    {
      heading: "What is Nessie?",
      content: `
Nessie is a Git-like catalog for data that provides:

• Branches
• Tags
• Commits
• Merges
• Versioned data management
      `,
    },

    {
      heading: "Can I query Iceberg tables outside Seg Forge?",
      content:
        "Yes. Any engine that supports Iceberg and Nessie, including Spark, Trino, and Flink, can query the data directly.",
    },

    {
      heading: "How do I back up my data?",
      content: `
Metadata:
Use PostgreSQL backups with pg_dump.

Data:
Use standard S3 or MinIO bucket replication and backups.

Catalog:
Use Nessie export and import functionality.
      `,
    },

    {
      heading: "Security",
      content:
        "Questions about authentication, encryption, and permissions.",
    },

    {
      heading: "How are credentials stored?",
      content:
        "Connection credentials are encrypted at rest using Fernet symmetric encryption and are never logged or returned in API responses.",
    },

    {
      heading: "Does Seg Forge support SSO?",
      content:
        "Yes. Azure Active Directory single sign-on is fully supported.",
    },

    {
      heading: "What access control does Seg Forge provide?",
      content:
        "Seg Forge includes a 22-section permission matrix with View, Edit, and None permissions for every workspace member.",
    },

    {
      heading: "Performance",
      content:
        "Questions about scaling and large workloads.",
    },

    {
      heading: "How do I scale Seg Forge?",
      code: `# Add more Flink workers
docker compose up -d --scale flink-taskmanager=4

# Scale backend services
docker compose up -d --scale backend=2`,
      language: "bash",
    },

    {
      heading: "Additional Scaling Recommendations",
      content: `
• Increase FLINK_TM_HEAP for larger workloads.
• Use Kubernetes HPA for automatic scaling.
• Add additional TaskManagers to increase parallelism.
• Scale storage independently using S3 or object storage.
      `,
    },

    {
      heading: "What's the maximum data size Seg Forge can handle?",
      content:
        "There is no hard limit. Apache Flink is distributed and can scale horizontally by adding additional TaskManagers. Deployments commonly process hundreds of gigabytes to multiple terabytes of data.",
    },
  ],
};

export default doc;