const doc = {
  title: "What is SegForge?",

  description:
    "SegForge is an open data platform that unifies ETL, CDC, lakehouse management, analytics, and machine learning into a single workspace.",

  sections: [
    {
      heading: "Overview",
      content: `
SegForge is an open data platform that unifies ETL pipeline building, real-time change data capture, data lakehouse management, interactive analytics, and ML operations into a single workspace-based application.

Think of it as a self-hosted, open alternative to Databricks, built on Apache Flink, Apache Iceberg, and Nessie. Organizations can deploy SegForge locally using Docker, on Kubernetes, or consume it as a managed cloud service.
      `,
    },

    {
      heading: "Who Is It For?",
      content: `
SegForge is designed for modern data teams:

• Data Engineers – Visual pipeline builder, CDC automation, and workflow scheduling.

• Analytics Engineers – Interactive notebooks, Flink SQL, and Iceberg time-travel queries.

• Data Scientists – Built-in MLOps for training, evaluating, and serving models.

• Platform & DevOps Teams – Docker and Kubernetes deployment, monitoring dashboards, and cost tracking.

• Data Leaders – Unified platform replacing multiple point solutions with governance, RBAC, and cost visibility.
      `,
    },

    {
      heading: "Visual Pipeline Builder",
      content: `
Design ETL pipelines by dragging nodes onto a canvas and connecting them visually.

Configure each node through graphical panels including:

• Column selectors
• Filter builders
• Join configurators
• Aggregation editors

SegForge automatically generates optimized Apache Flink SQL and executes it on your Flink cluster.
      `,
    },

    {
      heading: "Real-Time CDC",
      content: `
Stream every change from PostgreSQL, MySQL, SQL Server, Oracle, and DB2 directly into Apache Iceberg tables.

The Smart Router automatically selects the optimal execution path:

• PyIceberg for smaller workloads
• Apache Flink for distributed processing at scale
      `,
    },

    {
      heading: "Data Lakehouse",
      content: `
All data is stored in Apache Iceberg tables on S3-compatible object storage such as:

• MinIO
• AWS S3
• Azure Blob Storage
• Google Cloud Storage

Nessie adds Git-like versioning capabilities, allowing teams to branch data, perform experiments, and merge changes safely.
      `,
    },

    {
      heading: "Interactive Notebooks",
      content: `
Execute Flink SQL, PyFlink, and Trino queries inside a notebook environment.

Features include:

• Schema browser
• Batch and streaming execution
• Saved queries
• Collaborative analytics workflows
      `,
    },

    {
      heading: "MLOps Platform",
      content: `
Train, evaluate, and deploy machine learning models directly inside SegForge.

Supported capabilities include:

• XGBoost
• Random Forest
• Logistic Regression
• Neural Networks
• MLflow experiment tracking
• Hyperparameter tuning
• SHAP explainability
• Batch model scoring
      `,
    },

    {
      heading: "Enterprise Governance",
      content: `
SegForge provides enterprise-grade governance capabilities:

• Multi-workspace isolation
• 22-section RBAC permission model
• Azure AD Single Sign-On
• Fernet-encrypted credentials
• Pipeline cost tracking
• Resource quotas
• Audit trails
      `,
    },

    {
      heading: "Architecture at a Glance",
      content: `
SegForge is built on an open, modular architecture designed for scale and portability.

Frontend:
React + TypeScript powering the pipeline canvas, notebooks, catalog, and monitoring experiences.

API Server:
FastAPI handling authentication, resource management, orchestration, and CDC lifecycle management.

Compute:
Apache Flink SQL Gateway, JobManagers, and TaskManagers executing both batch and streaming workloads.

Storage:
Apache Iceberg tables stored on S3-compatible object storage and versioned using Nessie.

Streaming:
Apache Kafka and Debezium enabling reliable change data capture pipelines.
      `,
    },

    {
      heading: "Core Platform Components",
      content: `
Frontend:
React + TypeScript

API:
FastAPI + Python

Compute:
Apache Flink SQL Gateway
Apache Flink JobManager
Apache Flink TaskManager

Storage:
Apache Iceberg
Apache Nessie
S3 / MinIO

Streaming:
Apache Kafka
Debezium
PostgreSQL
Redis
      `,
    },
  ],
};

export default doc;