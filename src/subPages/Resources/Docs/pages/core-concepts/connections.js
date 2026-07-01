const doc = {
  title: "Connections",

  description:
    "Connections provide secure access to databases, cloud storage systems, and streaming platforms used throughout SegForge.",

  sections: [
    {
      heading: "What is a Connection?",
      content: `
A connection stores the credentials and configuration required to communicate with an external system.

Connections are used by:

• Pipelines
• CDC Streams
• Notebooks
• Catalog Operations
• Data Imports and Exports

A connection can point to a database, cloud storage bucket, or streaming platform.
      `,
    },

    {
      heading: "Supported Database Connectors",
      content: `
SegForge supports both batch and real-time database integrations.

Supported databases:

• PostgreSQL
• MySQL
• SQL Server
• Oracle
• IBM DB2
• Snowflake
• MongoDB

Most relational databases support:

• JDBC Batch Reads
• Real-Time CDC
• Automatic Schema Detection
      `,
    },

    {
      heading: "Supported Cloud Storage Systems",
      content: `
SegForge can read and write data directly to cloud object storage systems.

Supported providers:

• Amazon S3
• MinIO
• Azure Blob Storage
• Azure Data Lake Storage
• Google Cloud Storage
• HDFS

All major object stores support Apache Iceberg table storage.
      `,
    },

    {
      heading: "Supported Streaming Platforms",
      content: `
Streaming integrations are available through:

• Apache Kafka
• Confluent Kafka

Kafka can be used as both:

• Source
• Sink
      `,
    },

    {
      heading: "Creating a Connection",
      content: `
Create a new connection by following these steps:

1. Open Connections from the sidebar.
2. Click New Connection.
3. Select a connector type.
4. Fill in the configuration form.
5. Test the connection.
6. Save the connection.
      `,
    },

    {
      heading: "Connection Configuration",
      content: `
Most connections require:

• Name
• Host or Endpoint
• Port
• Database or Bucket
• Username and Password
• Access Keys (if applicable)

SegForge validates the connection before saving it.
      `,
    },

    {
      heading: "Example PostgreSQL Connection",
      code: `Name: Production PostgreSQL
Host: postgres.company.internal
Port: 5432
Database: sales
Username: analytics
Password: ********`,
      language: "text",
    },

    {
      heading: "Connection Security",
      content: `
SegForge encrypts credentials using Fernet symmetric encryption.

Security guarantees:

• Credentials are encrypted at rest.
• Credentials are never logged.
• Credentials are never returned by APIs.
• Decryption occurs only at runtime.
• Encryption keys are derived from the instance SECRET_KEY.
      `,
    },

    {
      heading: "Schema Introspection",
      content: `
SegForge automatically discovers database schemas.

Schema introspection collects:

• Tables
• Columns
• Data Types
• Primary Keys
• Foreign Keys

This metadata powers:

• Pipeline Source Nodes
• CDC Configuration
• Notebook Schema Browser
• Catalog Metadata
      `,
    },

    {
      heading: "Database Metadata Queries",
      content: `
SegForge uses native metadata APIs for each database.

PostgreSQL
→ information_schema.columns

MySQL
→ information_schema.columns

SQL Server
→ INFORMATION_SCHEMA.COLUMNS

Oracle
→ ALL_TAB_COLUMNS
      `,
    },

    {
      heading: "Connection Health",
      content: `
Every connection displays a health indicator.

🟢 Active
The last connectivity check succeeded.

🟡 Warning
Intermittent failures or increased latency detected.

🔴 Error
The connection cannot be reached.

SegForge periodically tests all active connections and records latency metrics and availability information.
      `,
    },

    {
      heading: "Where Connections Are Used",
      content: `
Connections are foundational to almost every workflow in SegForge.

They are used by:

• ETL Pipelines
• CDC Streams
• Interactive Notebooks
• Catalog Operations
• Workflow Engine
• MLOps Training Jobs
• Data Exports
      `,
    },

    {
      heading: "Best Practices",
      content: `
• Use separate connections for development and production.

• Grant least-privilege database permissions.

• Rotate credentials regularly.

• Use cloud IAM roles when possible.

• Periodically test connection health.

• Avoid sharing production credentials across workspaces.
      `,
    },
  ],
};

export default doc;