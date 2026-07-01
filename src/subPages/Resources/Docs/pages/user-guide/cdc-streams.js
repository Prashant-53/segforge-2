const doc = {
  title: "CDC Streams",

  description:
    "Create, monitor, and manage real-time data synchronization from source databases to your lakehouse.",

  sections: [
    {
      heading: "Overview",
      content: `
CDC Streams allow SegForge to continuously capture database changes and synchronize them into Apache Iceberg tables in real time.

Every INSERT, UPDATE, and DELETE is captured from the source database transaction log and propagated through Kafka and Flink into your lakehouse.
      `,
    },

    {
      heading: "CDC Architecture",
      code: `Source Database         SegForge CDC Pipeline             Lakehouse
┌──────────┐     ┌──────────┐     ┌────────┐     ┌────────┐     ┌──────────┐
│PostgreSQL│ ──► │Debezium  │ ──► │ Kafka  │ ──► │ Flink  │ ──► │ Iceberg  │
│  MySQL   │     │Connector │     │ Topic  │     │  CDC   │     │  Table   │
└──────────┘     └──────────┘     └────────┘     └────────┘     └──────────┘`,
      language: "text",
    },

    {
      heading: "Creating a CDC Stream",
      content: `
To create a CDC stream:

1. Navigate to CDC Streams in the sidebar.

2. Click + New Stream.

3. Select a source database connection.

4. Select one or more tables.

5. Configure the target Iceberg namespace.

6. Review and click Create.
      `,
    },

    {
      heading: "CDC Wizard",
      content: `
The wizard walks you through:

• Source Selection

• Table Selection

• Schema Preview

• Target Configuration

• Review & Create
      `,
    },

    {
      heading: "Stream Configuration Options",
      content: `
Snapshot Mode
Determines how existing data is loaded.

Slot Name
PostgreSQL replication slot.

Topic Prefix
Kafka topic naming prefix.

Table Whitelist
Tables included in the stream.
      `,
    },

    {
      heading: "Default Configuration",
      code: `Snapshot Mode : initial
Topic Prefix : cdc.{workspace}
Slot Name    : auto-generated`,
      language: "text",
    },

    {
      heading: "Stream Dashboard",
      content: `
The CDC Streams page contains four major tabs:

• Streams

• Statistics

• Flow

• Iceberg Builder
      `,
    },

    {
      heading: "Streams Tab",
      content: `
The Streams tab displays all configured streams.

Information shown:

• Stream Name

• Source Database

• Current Status

• Events Processed

• Available Actions
      `,
    },

    {
      heading: "Stream Statuses",
      code: `Pending
Snapshot
CDC
Running
Stopped
Error`,
      language: "text",
    },

    {
      heading: "Statistics Tab",
      content: `
The Statistics tab shows real-time metrics for every stream.

Metrics include:

• Events per second

• Total events processed

• End-to-end latency

• Kafka lag
      `,
    },

    {
      heading: "Flow Tab",
      content: `
The Flow tab provides a visual representation of the CDC pipeline.
      `,
      code: `PostgreSQL
     │
     ▼
Debezium
     │
     ▼
Kafka
     │
     ▼
Flink
     │
     ▼
Iceberg`,
      language: "text",
    },

    {
      heading: "Health Indicators",
      content: `
Each stage displays its health:

🟢 Healthy

🟡 Warning

🔴 Error
      `,
    },

    {
      heading: "Iceberg Builder",
      content: `
The Iceberg Builder creates Iceberg tables directly from CDC streams.

Steps:

1. Select a stream.

2. Click Create Iceberg Table.

3. Smart Router estimates data size.

4. PyIceberg or Flink is selected automatically.

5. Table is created with the mapped schema.
      `,
    },

    {
      heading: "Smart Router",
      content: `
The Smart Router automatically chooses the execution engine.
      `,
    },

    {
      heading: "Routing Rules",
      code: `Table Size < 10 GB  → PyIceberg
Table Size ≥ 10 GB → Flink`,
      language: "text",
    },

    {
      heading: "Managing Streams",
      content: `
Streams can be managed directly from the CDC page.
      `,
    },

    {
      heading: "Start Stream",
      content: `
Start resumes processing from the last committed Kafka offset.

No data is lost.
      `,
    },

    {
      heading: "Stop Stream",
      content: `
Stop pauses the stream.

Kafka continues retaining events while the stream is stopped.
      `,
    },

    {
      heading: "Monitoring a Stream",
      content: `
Click any stream to view detailed metrics:

• Event timeline

• Throughput graph

• Error logs

• Last processed event timestamp

• Kafka consumer lag

• Table synchronization status
      `,
    },

    {
      heading: "Deleting a Stream",
      content: `
To delete a stream:

1. Stop the stream.

2. Click Delete.

3. Choose what should also be removed.
      `,
    },

    {
      heading: "Optional Cleanup",
      content: `
You may also delete:

• Kafka Topics

• Debezium Connectors

• Iceberg Tables
      `,
    },

    {
      heading: "Schema Mapping",
      content: `
When CDC creates Iceberg tables, database types are automatically mapped.
      `,
    },

    {
      heading: "Type Mapping",
      code: `PostgreSQL    MySQL        SQL Server      Iceberg
---------------------------------------------------------
integer       int          int             INT
bigint        bigint       bigint          LONG
varchar       varchar      nvarchar        STRING
numeric       decimal      decimal         DECIMAL
timestamp     datetime     datetime2       TIMESTAMP
boolean       tinyint(1)   bit             BOOLEAN
jsonb         json         -               STRING`,
      language: "text",
    },

    {
      heading: "Change Event Format",
      content: `
Every change event contains metadata and row state.
      `,
      code: `{
  "op": "UPDATE",
  "before": {
    "id": 42,
    "status": "pending"
  },
  "after": {
    "id": 42,
    "status": "shipped"
  },
  "timestamp": "2026-04-29T10:15:00Z"
}`,
      language: "json",
    },

    {
      heading: "Event Types",
      content: `
Supported operations:

• INSERT

• UPDATE

• DELETE
      `,
    },

    {
      heading: "Kafka Topic Naming",
      content: `
CDC topics follow a predictable naming convention.
      `,
      code: `cdc.{workspace}.{database}.{schema}.{table}`,
      language: "text",
    },

    {
      heading: "Example Topic",
      code: `cdc.analytics.postgresql.public.orders`,
      language: "text",
    },

    {
      heading: "Troubleshooting CDC",
      content: `
Most CDC issues fall into a few common categories.
      `,
    },

    {
      heading: "Common Problems",
      code: `Problem                         Cause
----------------------------------------------------------
Snapshot never finishes         Large table
Replication slot growing        Consumer lag
Missed events                   Dropped slot
Connection refused              Network issue
High latency                    Insufficient resources`,
      language: "text",
    },

    {
      heading: "Replication Slot Growth",
      content: `
Usually caused by Kafka consumers falling behind.

Possible fixes:

• Increase Flink parallelism.

• Scale Kafka.

• Check consumer health.
      `,
    },

    {
      heading: "Missed Events",
      content: `
If a replication slot is lost, restart the stream using a new snapshot.
      `,
    },

    {
      heading: "Connection Issues",
      content: `
Verify:

• Firewall rules

• Database accessibility

• Network routes

• Database credentials
      `,
    },

    {
      heading: "Best Practices",
      content: `
• Use CDC for continuously changing datasets.

• Monitor Kafka lag.

• Use Upsert mode on Iceberg destinations.

• Keep replication slots healthy.

• Monitor throughput and latency.

• Partition large target tables.

• Use the Smart Router defaults unless you have special requirements.
      `,
    },
  ],
};

export default doc;