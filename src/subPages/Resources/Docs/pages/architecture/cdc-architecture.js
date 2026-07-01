// pages/architecture/cdc-architecture.js

const doc = {
  title: "CDC Architecture",

  description:
    "Understand how Seg Forge captures database changes and continuously synchronizes them into the lakehouse.",

  sections: [
    {
      heading: "Overview",
      content: `
Seg Forge's Change Data Capture (CDC) architecture continuously streams INSERT, UPDATE, and DELETE operations from source databases into Apache Iceberg tables.

The platform combines Debezium, Apache Kafka, Apache Flink, Apache Iceberg, and Nessie to provide reliable, scalable, and fault-tolerant real-time data synchronization.
      `,
    },

    {
      heading: "High-Level Architecture",
      code: `Source Database
       ↓
Debezium Connector
       ↓
Kafka Topics
       ↓
Flink / PyIceberg
       ↓
Apache Iceberg
       ↓
Nessie Catalog`,
      language: "text",
    },

    {
      heading: "Architecture Components",
      code: `Component         Port      Purpose
--------------------------------------------------
Source Database   5432*     Transaction log source
Debezium          8084      CDC connector management
Kafka             9092      Event streaming
Flink             8083      Distributed processing
Nessie            19120     Iceberg catalog
MinIO / S3        9000      Object storage`,
      language: "text",
    },

    {
      heading: "Stage 1: Database Change Capture",
      content: `
Debezium is responsible for connecting to source databases and reading their transaction logs.

Every database type has its own connector implementation.
      `,
    },

    {
      heading: "Supported Connectors",
      code: `Database        Connector                          Change Source
---------------------------------------------------------------------------
PostgreSQL     PostgresConnector                  WAL
MySQL          MySqlConnector                     Binary Log
SQL Server     SqlServerConnector                 CDC Tables
Oracle         OracleConnector                    LogMiner
DB2            Db2Connector                       ASN Capture`,
      language: "text",
    },

    {
      heading: "Connector Lifecycle",
      code: `Register Connector
        ↓
Initial Snapshot
        ↓
Begin Streaming
        ↓
Heartbeat Events
        ↓
Continuous Synchronization`,
      language: "text",
    },

    {
      heading: "Registering Connectors",
      content: `
Seg Forge automatically creates and manages Debezium connectors through the Debezium REST API.

Users never need to configure Kafka Connect directly.
      `,
    },

    {
      heading: "Snapshot Phase",
      content: `
When a stream is created, Debezium first reads all existing rows from the source table and publishes them as snapshot events.
      `,
    },

    {
      heading: "Streaming Phase",
      content: `
After the snapshot completes, Debezium begins continuously reading the transaction log and publishing change events.
      `,
    },

    {
      heading: "Stage 2: Kafka Event Streaming",
      content: `
All change events flow through Apache Kafka.

Kafka provides:

• Durability

• Replay capability

• Scalability

• Decoupling between producers and consumers
      `,
    },

    {
      heading: "Topic Structure",
      code: `cdc.{workspace}.{db_type}.{schema}.{table}
cdc_full_load.{stream_id}
cdc.landed.{stream_id}
dbhistory.{workspace}.{db_type}`,
      language: "text",
    },

    {
      heading: "Debezium Event Format",
      code: `{
  "payload": {
    "before": {},
    "after": {},
    "source": {},
    "op": "c",
    "ts_ms": 1714387200456
  }
}`,
      language: "json",
    },

    {
      heading: "Operation Types",
      code: `c → Insert
u → Update
d → Delete
r → Snapshot Record`,
      language: "text",
    },

    {
      heading: "Stage 3: Processing Layer",
      content: `
The Smart Router automatically selects the best execution engine for processing CDC streams.
      `,
    },

    {
      heading: "Processing Decision",
      code: `Small Dataset (<10 GB)
        ↓
      PyIceberg

Large Dataset (≥10 GB)
        ↓
      Apache Flink`,
      language: "text",
    },

    {
      heading: "Flink Processing Path",
      content: `
For large datasets, Flink performs distributed CDC processing.
      `,
    },

    {
      heading: "Flink CDC Workflow",
      code: `Kafka Topic
      ↓
Flink Source Table
      ↓
Streaming Processing
      ↓
Iceberg Sink Table
      ↓
Nessie Commit`,
      language: "text",
    },

    {
      heading: "Example Flink Source",
      code: `CREATE TABLE cdc_source (
  id INT,
  customer_name STRING,
  amount DECIMAL(10,2)
)
WITH (
  'connector'='kafka',
  'topic'='cdc.analytics.postgresql.public.orders',
  'format'='debezium-json'
);`,
      language: "sql",
    },

    {
      heading: "Example Flink Sink",
      code: `CREATE TABLE iceberg_target (
  id INT,
  customer_name STRING,
  amount DECIMAL(10,2)
)
WITH (
  'connector'='iceberg',
  'catalog-name'='nessie'
);`,
      language: "sql",
    },

    {
      heading: "CDC Synchronization",
      code: `INSERT INTO iceberg_target
SELECT *
FROM cdc_source;`,
      language: "sql",
    },

    {
      heading: "PyIceberg Processing Path",
      content: `
For smaller datasets, PyIceberg provides a lightweight execution path.
      `,
    },

    {
      heading: "PyIceberg Workflow",
      code: `Read Kafka Events
       ↓
Batch Records
       ↓
Generate Parquet Files
       ↓
Upload To S3 / MinIO
       ↓
Commit To Nessie`,
      language: "text",
    },

    {
      heading: "Stage 4: Iceberg Storage",
      content: `
The final output is stored as Iceberg tables on object storage.
      `,
    },

    {
      heading: "Iceberg Directory Layout",
      code: `warehouse/
└── analytics/
    └── raw/
        └── orders/
            ├── metadata/
            │   ├── v1.metadata.json
            │   ├── v2.metadata.json
            │   └── snapshot.avro
            └── data/
                ├── part-00001.parquet
                ├── part-00002.parquet
                └── part-00003.parquet`,
      language: "text",
    },

    {
      heading: "CDC Watchdog",
      content: `
The CDC Watchdog is a background monitoring process responsible for keeping CDC pipelines healthy.
      `,
    },

    {
      heading: "Watchdog Responsibilities",
      code: `Debezium Failure        → Restart Connector
Flink Failure           → Resume From Checkpoint
Kafka Failure           → Retry With Backoff
Large Replication Slot  → Raise Alert`,
      language: "text",
    },

    {
      heading: "Watchdog Interval",
      code: `Default Check Interval:
60 Seconds`,
      language: "text",
    },

    {
      heading: "Recovery Flow",
      code: `Failure Detected
        ↓
Determine Failure Type
        ↓
Attempt Recovery
        ↓
Validate Health
        ↓
Resume Processing`,
      language: "text",
    },

    {
      heading: "Schema Evolution",
      content: `
One of the major advantages of Iceberg is schema evolution.

Changes to source schemas automatically propagate to destination tables.
      `,
    },

    {
      heading: "Schema Evolution Flow",
      code: `Database Schema Change
          ↓
Debezium Detects Change
          ↓
Kafka Schema Event
          ↓
Flink / PyIceberg
          ↓
Iceberg Schema Update`,
      language: "text",
    },

    {
      heading: "Supported Schema Changes",
      code: `✓ Add Columns
✓ Rename Columns
✓ Reorder Columns
✓ Change Optional Fields
✓ Add Partitions`,
      language: "text",
    },

    {
      heading: "Performance Considerations",
      content: `
Several factors affect CDC performance and scalability.
      `,
    },

    {
      heading: "Optimization Recommendations",
      code: `Factor         Recommendation
--------------------------------------------------
Throughput     Increase Kafka partitions
Latency        Reduce checkpoint interval
Storage        Enable Iceberg compaction
Memory         Increase TaskManager memory
Scale          Increase Flink parallelism`,
      language: "text",
    },

    {
      heading: "Reliability Features",
      code: `✓ Automatic recovery
✓ Kafka replay capability
✓ Flink checkpoints
✓ Smart Router failover
✓ CDC Watchdog monitoring
✓ Schema evolution
✓ Exactly-once delivery`,
      language: "text",
    },

    {
      heading: "End-to-End Flow",
      code: `Source Database
        ↓
Debezium Connector
        ↓
Kafka Event
        ↓
Flink / PyIceberg
        ↓
Iceberg Table
        ↓
Analytics & ML`,
      language: "text",
    },

    {
      heading: "Summary",
      content: `
The CDC architecture combines industry-standard open technologies to deliver a reliable and scalable real-time synchronization platform.

The result is a continuously updated lakehouse with automatic recovery, schema evolution, and enterprise-grade operational visibility.
      `,
    },
  ],
};

export default doc;