const doc = {
  title: "Destination Nodes",

  description:
    "Destination nodes are the final step in your pipeline. They write processed data to a target system.",

  sections: [
    {
      heading: "Overview",
      content: `
Destination nodes are responsible for persisting the results of your pipelines.

Every pipeline must end with at least one destination node. Destinations can write data into lakehouse tables, streaming systems, object storage, or business intelligence platforms.

SegForge supports both batch and streaming writes and automatically generates the required Flink SQL behind the scenes.
      `,
    },

    {
      heading: "Supported Destinations",
      content: `
SegForge currently supports:

• Apache Iceberg Tables

• Apache Kafka Topics

• S3 / MinIO Object Storage

• Superset

• Power BI

• Tableau

• QlikSense
      `,
    },

    {
      heading: "Iceberg Table",
      content: `
The Iceberg Table destination is the primary destination for most pipelines.

Data is written into Apache Iceberg tables managed through the Nessie catalog.

Benefits:

• ACID Transactions

• Schema Evolution

• Time Travel

• Partition Evolution

• High-performance analytics
      `,
    },

    {
      heading: "Iceberg Configuration",
      content: `
Catalog
The target Nessie catalog.

Namespace
Target namespace such as raw, staged, or curated.

Table Name
The Iceberg table name.

Write Mode
Append, Overwrite, or Upsert.

Partition By
Optional partition columns.
      `,
    },

    {
      heading: "Iceberg Behavior",
      content: `
When writing to Iceberg:

• Missing tables are automatically created.

• Existing schemas are validated.

• New columns can be added automatically.

• Upsert mode merges records using primary keys.
      `,
    },

    {
      heading: "Generated SQL Example",
      code: `CREATE TABLE IF NOT EXISTS nessie.curated.daily_metrics (
  date_key DATE,
  total_orders BIGINT,
  total_revenue DECIMAL(12,2)
) WITH (
  'connector' = 'iceberg',
  'catalog-name' = 'nessie',
  'catalog-type' = 'nessie',
  'warehouse' = 's3://warehouse/data'
);

INSERT INTO nessie.curated.daily_metrics
SELECT *
FROM upstream_view;`,
      language: "sql",
    },

    {
      heading: "Write Modes",
      content: `
SegForge supports three write modes.
      `,
    },

    {
      heading: "Append",
      content: `
Append adds new rows to the existing table.

Existing rows are never modified.
      `,
    },

    {
      heading: "Overwrite",
      content: `
Overwrite replaces the entire contents of the target table.

This mode is commonly used for dimension tables and complete rebuilds.
      `,
    },

    {
      heading: "Upsert",
      content: `
Upsert merges incoming records into existing data.

Matching rows are updated.

New rows are inserted.

This mode is ideal for:

• CDC Streams

• Slowly Changing Dimensions

• Incremental synchronization pipelines
      `,
    },

    {
      heading: "Kafka Topic",
      content: `
Kafka destinations publish records to a Kafka topic.

This enables downstream consumers to process transformed data in real time.
      `,
    },

    {
      heading: "Kafka Configuration",
      content: `
Kafka Connection
Select a configured Kafka cluster.

Topic
Target topic name.

Format
JSON or Avro.

Key Column
Optional message key column.
      `,
    },

    {
      heading: "Kafka Use Cases",
      content: `
Kafka destinations are commonly used for:

• Event-driven architectures

• Real-time dashboards

• Microservices integration

• Streaming machine learning
      `,
    },

    {
      heading: "S3 / MinIO File",
      content: `
Write pipeline output directly to object storage.

Supported platforms:

• AWS S3

• MinIO

• Azure Blob Storage

• Google Cloud Storage
      `,
    },

    {
      heading: "File Configuration",
      content: `
Storage Connection
Select a configured storage backend.

Path
Target directory.

Format
Parquet, CSV, or JSON.

Partition By
Optional partition columns.
      `,
    },

    {
      heading: "Supported File Formats",
      content: `
Parquet
Columnar storage optimized for analytics.

CSV
Simple text-based format.

JSON
Semi-structured document format.
      `,
    },

    {
      heading: "Partitioning",
      content: `
Partitioning creates directory structures based on column values.

Example:

s3://warehouse/orders/year=2026/month=04/
      `,
      code: `s3://warehouse/orders/
├── year=2025/
├── year=2026/
└── year=2027/`,
      language: "text",
    },

    {
      heading: "Business Intelligence Destinations",
      content: `
SegForge can publish data directly to BI systems.

Supported platforms:

• Apache Superset

• Power BI

• Tableau

• QlikSense
      `,
    },

    {
      heading: "Superset Destination",
      content: `
Automatically create or update datasets inside Apache Superset.

Configuration:

• Dataset Name

• Target Database Connection
      `,
    },

    {
      heading: "Power BI / Tableau / QlikSense",
      content: `
Configuration:

Endpoint
Target system endpoint.

Dataset or Project
Target location.

Credentials
Authentication details.
      `,
    },

    {
      heading: "Destination Lifecycle",
      content: `
Most destinations follow this execution flow:

Data Validation
↓

Schema Validation
↓

Write Preparation
↓

Data Write
↓

Commit
↓

Success
      `,
      code: `Pipeline
    │
    ▼
Destination
    │
    ▼
Validation
    │
    ▼
Write
    │
    ▼
Commit`,
      language: "text",
    },

    {
      heading: "Schema Evolution",
      content: `
Iceberg destinations support schema evolution.

Examples:

• Add columns

• Rename columns

• Drop columns

• Change partition strategies

without rewriting existing data.
      `,
    },

    {
      heading: "Performance Considerations",
      content: `
Choose your destination carefully.

For analytics:

• Prefer Iceberg.

For streaming:

• Prefer Kafka.

For exports:

• Prefer Parquet on object storage.
      `,
    },

    {
      heading: "Best Practices",
      content: `
• Use Iceberg for most analytical workloads.

• Partition time-series data by date.

• Use Upsert mode for CDC pipelines.

• Prefer Parquet over CSV for large datasets.

• Avoid excessive partition cardinality.

• Validate schemas before deployment.

• Monitor destination write metrics.
      `,
    },

    {
      heading: "Recommendations",
      content: `
Recommended destination by workload:

Analytics
→ Iceberg

Real-time Applications
→ Kafka

File Exports
→ S3 / MinIO

Business Dashboards
→ Superset or Power BI
      `,
    },
  ],
};

export default doc;