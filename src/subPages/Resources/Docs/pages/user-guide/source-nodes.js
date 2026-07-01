const doc = {
  title: "Source Nodes",

  description:
    "Source nodes are the starting point of every pipeline. They read data from external systems and feed it into the transformation graph.",

  sections: [
    {
      heading: "Overview",
      content: `
Source nodes are responsible for bringing data into a pipeline.

Every pipeline begins with one or more source nodes that read data from databases, files, streaming systems, APIs, or generated datasets.

SegForge supports both batch and streaming sources and automatically generates the appropriate Flink SQL definitions behind the scenes.
      `,
    },

    {
      heading: "Supported Source Types",
      content: `
SegForge currently supports:

• Database Table Source

• File Source

• Kafka Source

• CDC Stream Source

• DataGen Source

• API Source
      `,
    },

    {
      heading: "Database Table Source",
      content: `
The Database Table Source reads rows from relational databases using JDBC.

Supported databases include:

• PostgreSQL

• MySQL

• SQL Server

• Oracle

• IBM DB2

• Snowflake

The source can operate in both batch and incremental modes depending on the connector.
      `,
    },

    {
      heading: "Database Configuration",
      content: `
Configuration options:

Connection
Select a saved database connection.

Schema
Database schema (for example: public).

Table
Database table to read.

Columns
Select all columns or only the required columns.

Filter
Optional WHERE clause that is pushed down to the source database.
      `,
    },

    {
      heading: "Generated SQL Example",
      code: `CREATE TABLE source_orders (
  id INT,
  customer_id INT,
  amount DECIMAL(10,2),
  created_at TIMESTAMP(3)
) WITH (
  'connector' = 'jdbc',
  'url' = 'jdbc:postgresql://host:5432/db',
  'table-name' = 'public.orders'
);`,
      language: "sql",
    },

    {
      heading: "File Source",
      content: `
The File Source reads data stored on object storage or distributed filesystems.

Supported storage platforms:

• AWS S3

• MinIO

• Azure Blob Storage

• Google Cloud Storage

• HDFS
      `,
    },

    {
      heading: "Supported File Formats",
      content: `
SegForge supports:

• CSV

• JSON

• Parquet

• ORC

• Avro
      `,
    },

    {
      heading: "File Source Configuration",
      content: `
Storage Connection
Select a configured storage connection.

Path
File or directory path.

Format
CSV, JSON, Parquet, ORC, or Avro.

Schema
Automatically detected or manually defined.

CSV Options
Delimiter, header row, quote character, and escape character.
      `,
    },

    {
      heading: "Example File Path",
      code: `s3://warehouse/raw/events/2026/04/`,
      language: "text",
    },

    {
      heading: "Kafka Source",
      content: `
Kafka Sources are used for real-time streaming pipelines.

The source continuously reads events from Kafka topics and feeds them into downstream transformations.

Kafka Sources support:

• JSON

• Avro

• Raw messages

• Event-time processing

• Watermarks
      `,
    },

    {
      heading: "Kafka Configuration",
      content: `
Kafka Connection
Select a configured Kafka cluster.

Topic
Kafka topic to consume.

Format
JSON, Avro, or Raw.

Starting Offset
earliest, latest, or specific offsets.

Schema
Define event columns and data types.
      `,
    },

    {
      heading: "Generated Kafka SQL",
      code: `CREATE TABLE kafka_events (
  event_id STRING,
  event_type STRING,
  payload STRING,
  event_time TIMESTAMP(3),
  WATERMARK FOR event_time AS event_time - INTERVAL '5' SECOND
) WITH (
  'connector' = 'kafka',
  'topic' = 'user-events',
  'properties.bootstrap.servers' = 'kafka:9092',
  'format' = 'json',
  'scan.startup.mode' = 'latest-offset'
);`,
      language: "sql",
    },

    {
      heading: "CDC Stream Source",
      content: `
The CDC Stream Source consumes change events from previously configured CDC streams.

This source produces a continuous stream of:

• INSERT events

• UPDATE events

• DELETE events

CDC Sources are ideal for:

• Real-time analytics

• Synchronization pipelines

• Event-driven architectures

• Incremental lakehouse ingestion
      `,
    },

    {
      heading: "CDC Configuration",
      content: `
CDC Stream
Select an existing CDC stream.

Table
Choose the source table from the stream.
      `,
    },

    {
      heading: "DataGen Source",
      content: `
The DataGen Source generates synthetic datasets for testing and development.

It allows teams to prototype pipelines without requiring access to production systems.
      `,
    },

    {
      heading: "DataGen Configuration",
      content: `
Rows per Second
Data generation speed.

Columns
Define generated columns and generation strategies.

Supported generators include:

• Sequential numbers

• Random values

• Strings

• Dates

• UUIDs

• Custom ranges
      `,
    },

    {
      heading: "API Source",
      content: `
The API Source reads data directly from REST APIs.

This is useful when ingesting data from SaaS platforms and third-party systems.
      `,
    },

    {
      heading: "API Configuration",
      content: `
URL
REST endpoint.

Method
GET or POST.

Headers
Custom request headers.

Schema
Expected response schema.

Pagination
Cursor-based or offset-based pagination.
      `,
    },

    {
      heading: "Source Lifecycle",
      content: `
A source typically follows this lifecycle:

Connection Validation
↓

Schema Discovery
↓

Data Preview
↓

Pipeline Execution
↓

Continuous Monitoring
      `,
    },

    {
      heading: "Schema Detection",
      content: `
Most source types support automatic schema detection.

SegForge can automatically discover:

• Tables

• Columns

• Data types

• Primary keys

• Nested structures

The detected schema becomes available to downstream nodes immediately through schema propagation.
      `,
    },

    {
      heading: "Source Preview",
      content: `
Before running a pipeline, source nodes can preview data.

The preview panel displays:

• Sample rows

• Column types

• Null percentages

• Basic statistics

This helps validate configuration before execution.
      `,
    },

    {
      heading: "Performance Tips",
      content: `
Use column selection whenever possible.

Only read the columns required by downstream transformations.

Push filters down to the source system.

Avoid scanning unnecessary partitions or files.

For large datasets:

• Use partition pruning.

• Enable parallel reads.

• Prefer Parquet over CSV.

• Use Kafka for real-time workloads.
      `,
    },

    {
      heading: "Best Practices",
      content: `
• Give source nodes descriptive names.

• Validate schemas before running pipelines.

• Use CDC streams for continuously changing data.

• Keep credentials inside Connections rather than hardcoding values.

• Test sources using the Preview feature before deploying pipelines.
      `,
    },
  ],
};

export default doc;