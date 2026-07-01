// pages/architecture/system-overview.js

const doc = {
  title: "System Architecture",

  description:
    "Understand how Seg Forge is built and how its components work together to deliver a unified data platform.",

  sections: [
    {
      heading: "Overview",
      content: `
Seg Forge is composed of a React frontend, a FastAPI backend, Apache Flink for compute, Apache Kafka for streaming, and Apache Iceberg on S3-compatible object storage for the data lakehouse.

The platform is designed around modular services that can run locally with Docker Compose or scale to production on Kubernetes and cloud infrastructure.
      `,
    },

    {
      heading: "High-Level Architecture",
      code: `Frontend (React)
        ↓
     REST API
        ↓
Backend (FastAPI)
        ↓
 ┌───────────────┬───────────────┬───────────────┐
 │               │               │               │
Flink          Kafka          PostgreSQL       Redis
 │               │
 └───────┬───────┘
         ↓
     Apache Iceberg
         ↓
      S3 / MinIO
         ↓
       Nessie`,
      language: "text",
    },

    {
      heading: "Frontend",
      content: `
The frontend is built with React and TypeScript and provides all user interactions.

Features include:

• Workspace management

• Pipeline Builder

• ETL Studio

• Notebook editor

• Catalog browser

• CDC management

• Monitoring dashboards

• BI reporting

• Administration and governance
      `,
    },

    {
      heading: "Frontend Details",
      code: `Technology      React + TypeScript
Port            8080
Communication   REST API
State            Redux Toolkit
Charts           Recharts
Pipeline Canvas  React Flow (xyflow)`,
      language: "text",
    },

    {
      heading: "Backend",
      content: `
The backend is implemented using FastAPI and Python.

It provides:

• Authentication

• Resource management APIs

• Pipeline orchestration

• CDC lifecycle management

• Notebook execution

• Monitoring APIs

• Compute orchestration
      `,
    },

    {
      heading: "Backend Architecture",
      code: `Route Layer
      ↓
Service Layer
      ↓
Integration Layer
      ↓
External Systems`,
      language: "text",
    },

    {
      heading: "Backend Details",
      code: `Technology      FastAPI + Python
Port            8000
Authentication  JWT + Azure AD SSO
Encryption      Fernet
Communication   REST APIs`,
      language: "text",
    },

    {
      heading: "PostgreSQL",
      content: `
PostgreSQL stores all platform metadata.

This is the application database and should not be confused with the analytical data warehouse.
      `,
    },

    {
      heading: "Metadata Stored",
      code: `Workspaces
Users
Connections
Pipelines
Jobs
Run History
CDC Streams
Notebook Metadata
Permissions
Quotas`,
      language: "text",
    },

    {
      heading: "PostgreSQL Details",
      code: `Port   5432
Role   Metadata Database`,
      language: "text",
    },

    {
      heading: "Redis",
      content: `
Redis is used for caching and background task execution.

It acts as both a message broker and a result backend for asynchronous operations.
      `,
    },

    {
      heading: "Redis Details",
      code: `Port   6379
Role   Cache + Task Broker`,
      language: "text",
    },

    {
      heading: "Apache Flink",
      content: `
Apache Flink is the primary compute engine powering all data processing workloads.

Seg Forge uses Flink for:

• Batch ETL

• Streaming pipelines

• CDC processing

• Notebook queries

• Iceberg operations
      `,
    },

    {
      heading: "Flink Components",
      code: `SQL Gateway   :8083
JobManager    :8081
TaskManagers  Worker Nodes`,
      language: "text",
    },

    {
      heading: "Apache Kafka",
      content: `
Kafka is the event streaming backbone of the CDC platform.

Debezium publishes change events to Kafka and Flink consumes them for processing.
      `,
    },

    {
      heading: "Kafka Details",
      code: `Port      9092
Role      Event Streaming
Topics    CDC + Schema History + Control`,
      language: "text",
    },

    {
      heading: "Debezium Connect",
      content: `
Debezium connectors capture changes from source databases and publish them into Kafka topics.
      `,
    },

    {
      heading: "Debezium Details",
      code: `Port   8084
Role   Database Change Capture`,
      language: "text",
    },

    {
      heading: "Apache Iceberg",
      content: `
Apache Iceberg is the storage layer for all analytical data.

Iceberg provides:

• ACID transactions

• Schema evolution

• Time travel

• Partition evolution

• Open table format
      `,
    },

    {
      heading: "Nessie Catalog",
      content: `
Nessie acts as a Git-like metadata catalog for Iceberg.

It enables:

• Branching

• Tagging

• Commits

• Rollbacks

• Workspace isolation
      `,
    },

    {
      heading: "Nessie Details",
      code: `Port   19120
Role   Iceberg Catalog`,
      language: "text",
    },

    {
      heading: "Object Storage",
      content: `
The actual data files are stored on S3-compatible object storage.

Supported backends:

• MinIO

• AWS S3

• Azure Blob Storage

• Google Cloud Storage
      `,
    },

    {
      heading: "Storage Details",
      code: `MinIO API       :9000
MinIO Console   :9001`,
      language: "text",
    },

    {
      heading: "Batch Pipeline Flow",
      code: `User Designs Pipeline
          ↓
Backend Generates Flink SQL
          ↓
SQL Gateway Executes
          ↓
Flink Reads Sources
          ↓
Transformations
          ↓
Write To Iceberg
          ↓
Pipeline Complete`,
      language: "text",
    },

    {
      heading: "Streaming CDC Flow",
      code: `Source Database
          ↓
Debezium Connector
          ↓
Kafka Topic
          ↓
Flink CDC Job
          ↓
Iceberg Table
          ↓
Continuous Updates`,
      language: "text",
    },

    {
      heading: "Notebook Execution Flow",
      code: `Notebook Query
       ↓
Backend API
       ↓
SQL Gateway
       ↓
Flink Execution
       ↓
Results Returned
       ↓
Notebook Cell`,
      language: "text",
    },

    {
      heading: "Production Hardening",
      content: `
Seg Forge includes several production-grade reliability mechanisms.
      `,
    },

    {
      heading: "Reliability Features",
      code: `Feature                     Implementation
-------------------------------------------------------
Structured Logging           JSON logging with context
Circuit Breaker              Opens after 3 failures
Health Checks                /health and /health/detailed
Credential Encryption        Fernet encryption
Connection Pooling           SQLAlchemy pools
Graceful Shutdown            Signal handling and cleanup`,
      language: "text",
    },

    {
      heading: "Health Endpoints",
      code: `GET /health
GET /health/detailed`,
      language: "bash",
    },

    {
      heading: "Deployment Models",
      code: `Docker Compose
Kubernetes / EKS
Managed Cloud`,
      language: "text",
    },

    {
      heading: "Architecture Principles",
      content: `
Seg Forge is designed around several core principles:

• Open standards over proprietary technologies.

• Visual experiences with full code transparency.

• Real-time processing as a first-class capability.

• Workspace isolation and governance.

• Cloud-native and self-hosted deployment flexibility.

• Unified data engineering, analytics, and machine learning experiences.
      `,
    },
  ],
};

export default doc;