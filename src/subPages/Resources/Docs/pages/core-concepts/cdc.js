const doc = {
  title: "CDC (Change Data Capture)",

  description:
    "Stream every INSERT, UPDATE, and DELETE from your source databases into Apache Iceberg tables in real time.",

  sections: [
    {
      heading: "Overview",
      content: `
Change Data Capture (CDC) continuously replicates database changes into your lakehouse.

Instead of repeatedly copying entire tables, CDC captures only the changes that occur:

• INSERT

• UPDATE

• DELETE

This enables near real-time analytics, operational reporting, and event-driven architectures.
      `,
    },

    {
      heading: "How CDC Works",
      code: `Source Database
      │
      ▼
Debezium Connector
      │
      ▼
Kafka Topic
      │
      ▼
Flink CDC Engine
      │
      ▼
Apache Iceberg Table`,
      language: "text",
    },

    {
      heading: "CDC Pipeline",
      content: `
1. Debezium reads the database transaction log.

2. Changes are written into Kafka topics.

3. Flink consumes the change events.

4. Changes are applied to Iceberg tables.

5. Analytics and pipelines immediately see updated data.
      `,
    },

    {
      heading: "Architecture",
      code: `┌──────────┐
│ Database │
└────┬─────┘
     │ WAL / Binlog
     ▼
┌──────────┐
│ Debezium │
└────┬─────┘
     │
     ▼
┌──────────┐
│  Kafka   │
└────┬─────┘
     │
     ▼
┌──────────┐
│  Flink   │
└────┬─────┘
     │
     ▼
┌──────────┐
│ Iceberg  │
└──────────┘`,
      language: "text",
    },

    {
      heading: "Supported Databases",
      content: `
SegForge supports CDC for multiple databases.
      `,
    },

    {
      heading: "Database Support",
      content: `
PostgreSQL
• Logical Decoding (WAL)
• Requires wal_level=logical

MySQL
• Binary Log
• Requires binlog_format=ROW

SQL Server
• CDC Tables
• Requires CDC enabled

Oracle
• LogMiner and Redo Logs
• Requires supplemental logging

IBM DB2
• InfoSphere CDC
• Requires ASN Capture
      `,
    },

    {
      heading: "The Smart Router",
      content: `
Not all datasets need distributed processing.

The Smart Router automatically selects the most efficient execution engine.
      `,
    },

    {
      heading: "Routing Rules",
      content: `
Less than 10 GB
→ PyIceberg

10 GB or larger
→ Apache Flink

The threshold is configurable.

Estimated size:

row_count × 200 bytes

If PyIceberg encounters a failure, SegForge automatically falls back to Flink execution.
      `,
    },

    {
      heading: "Creating a CDC Stream",
      content: `
1. Navigate to CDC Streams.

2. Click New Stream.

3. Select a source connection.

4. Choose tables to capture.

5. Select the Iceberg destination.

6. Create the stream.

SegForge automatically performs an initial snapshot before transitioning to real-time replication.
      `,
    },

    {
      heading: "CDC Lifecycle",
      content: `
Pending
The stream has been created.

Snapshot
A full copy of existing data is performed.

CDC
Only new changes are captured.

Running
The stream is healthy.

Stopped
The stream has been paused.

Error
An issue occurred during execution.
      `,
    },

    {
      heading: "CDC State Machine",
      code: `Pending
   │
   ▼
Snapshot
   │
   ▼
CDC
   │
   ▼
Running

Error ◄──────┐
             │
Stopped ─────┘`,
      language: "text",
    },

    {
      heading: "Change Event Format",
      content: `
Every change is represented as a structured event.
      `,
      code: `{
  "op": "UPDATE",
  "before": {
    "id": 42,
    "status": "pending",
    "amount": 99.00
  },
  "after": {
    "id": 42,
    "status": "shipped",
    "amount": 99.00
  },
  "timestamp": "2026-04-29T10:15:00Z",
  "source": {
    "table": "orders",
    "schema": "public"
  }
}`,
      language: "json",
    },

    {
      heading: "Event Fields",
      content: `
op
INSERT, UPDATE, or DELETE.

before
Values before the change.

after
Values after the change.

timestamp
Time when the change occurred.

source
Source schema and table information.
      `,
    },

    {
      heading: "Monitoring CDC Streams",
      content: `
The CDC dashboard exposes operational metrics:

• Events Processed

• Replication Latency

• Throughput

• Kafka Consumer Lag

• Stream Health

• Restart Count
      `,
    },

    {
      heading: "CDC Watchdog",
      content: `
SegForge includes an automatic recovery engine.

If a Debezium connector fails:

• Restart automatically.

If a Flink job fails:

• Resubmit automatically.

If Kafka becomes unavailable:

• Resume from the last committed offset.

This minimizes operational intervention and ensures reliable replication.
      `,
    },

    {
      heading: "Recovery Flow",
      code: `Failure
   │
   ▼
CDC Watchdog
   │
   ├── Restart Connector
   ├── Restart Flink Job
   └── Resume Offsets
   │
   ▼
Healthy Stream`,
      language: "text",
    },

    {
      heading: "Kafka Topic Naming",
      content: `
CDC topics follow a consistent naming convention.
      `,
      code: `cdc.{workspace}.{source_type}.{schema}.{table}`,
      language: "text",
    },

    {
      heading: "Example Topic",
      code: `cdc.analytics.postgresql.public.orders`,
      language: "text",
    },

    {
      heading: "Why CDC?",
      content: `
CDC enables:

• Real-time analytics.

• Event-driven architectures.

• Low-latency reporting.

• Incremental processing.

• Reduced database load.

• Near real-time lakehouse synchronization.

SegForge treats CDC as a first-class capability rather than an add-on feature, making real-time data pipelines simple to build and operate.
      `,
    },
  ],
};

export default doc;