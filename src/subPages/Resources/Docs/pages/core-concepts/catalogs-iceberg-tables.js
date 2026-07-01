const doc = {
  title: "Catalogs & Iceberg Tables",

  description:
    "Understand how SegForge uses Apache Iceberg and Nessie to provide a modern lakehouse with versioning, schema evolution, and ACID transactions.",

  sections: [
    {
      heading: "Overview",
      content: `
SegForge uses Apache Iceberg as its table format and Apache Nessie as its catalog.

Together, they provide a modern data lakehouse that supports:

• ACID transactions

• Schema evolution

• Time travel

• Git-like data versioning

• Object storage portability

• Large-scale analytical workloads
      `,
    },

    {
      heading: "What is Apache Iceberg?",
      content: `
Apache Iceberg is an open table format designed for large analytic datasets.

Key capabilities include:

• ACID transactions

• Schema evolution

• Time travel

• Partition evolution

• Hidden partitioning

• Object storage compatibility

Data is stored as Parquet files on object storage systems such as Amazon S3, MinIO, Azure Blob Storage, and Google Cloud Storage.
      `,
    },

    {
      heading: "Iceberg Capabilities",
      content: `
ACID Transactions
Safe concurrent reads and writes.

Schema Evolution
Add, rename, or remove columns without rewriting data.

Time Travel
Query data exactly as it existed in the past.

Partition Evolution
Change partition strategies without rewriting existing files.

Open Storage Format
Store data as Parquet files in object storage.
      `,
    },

    {
      heading: "What is Nessie?",
      content: `
Nessie is a Git-like catalog for Apache Iceberg tables.

Instead of versioning source code, Nessie versions your data and table metadata.

It introduces familiar concepts such as:

• Branches

• Tags

• Commits

• Merges

This enables safe experimentation and powerful governance workflows.
      `,
    },

    {
      heading: "Nessie Concepts",
      content: `
Branches
Independent versions of your catalog.

Tags
Immutable snapshots of a branch.

Commits
Every schema change and data modification becomes a commit.

Merge
Combine changes from one branch into another.
      `,
    },

    {
      heading: "Why Use Nessie?",
      content: `
Nessie enables:

• Safe experimentation.

• Data versioning.

• Rollbacks.

• Auditability.

• Environment isolation.

• Development workflows similar to Git.
      `,
    },

    {
      heading: "Catalog Structure",
      code: `Nessie Catalog
├── main
│   └── default/
│       ├── customers
│       └── orders
├── workspace-analytics
│   └── analytics/
│       ├── raw/
│       │   ├── events
│       │   └── sessions
│       ├── staged/
│       │   └── events_cleaned
│       └── curated/
│           └── daily_metrics
└── workspace-ml-team
    └── ml/
        ├── training_data
        └── feature_store`,
      language: "text",
    },

    {
      heading: "Workspace Isolation",
      content: `
Each workspace automatically receives:

• A dedicated Nessie branch.

• Its own namespace.

• Independent table organization.

A common organization pattern is:

raw/
staged/
curated/

This allows teams to isolate environments and organize data by processing stage.
      `,
    },

    {
      heading: "Browsing the Catalog",
      content: `
The Catalog page provides:

• Tree view navigation.

• Table metadata.

• Column information.

• Schema details.

• Data previews.

• Storage statistics.

• Partition information.
      `,
    },

    {
      heading: "Table Metadata",
      content: `
For every table, SegForge displays:

• Row count

• File count

• Total size

• Partition information

• Table format

• Last updated timestamp

• Column statistics
      `,
    },

    {
      heading: "Creating Tables",
      content: `
Tables can be created in three different ways:

1. Pipeline Destinations

2. CDC Streams

3. Manual Creation Wizard
      `,
    },

    {
      heading: "Pipeline Destinations",
      content: `
When a pipeline writes to an Iceberg target, SegForge automatically creates the table using the inferred schema.
      `,
    },

    {
      heading: "CDC Streams",
      content: `
CDC pipelines automatically map source database schemas to Iceberg data types and create destination tables.
      `,
    },

    {
      heading: "Manual Table Creation",
      content: `
To manually create a table:

1. Open Catalogs.

2. Click Create Table.

3. Select a namespace.

4. Define columns.

5. Configure partitions.

6. Click Create.
      `,
    },

    {
      heading: "Supported File Formats",
      content: `
SegForge supports multiple file formats.

Parquet
• Read
• Write
• Source
• Sink

CSV
• Read
• Write
• Source

JSON
• Read
• Write
• Source

Avro
• Read
• Write
• Source
• Sink

ORC
• Read
• Write
• Source
• Sink

Parquet is the default storage format for Iceberg tables.
      `,
    },

    {
      heading: "Data Upload",
      content: `
Files can be uploaded directly into the catalog.

Supported uploads:

• Parquet

• CSV

• JSON

SegForge automatically:

• Infers schemas.

• Creates tables.

• Loads data into Iceberg.
      `,
    },

    {
      heading: "Storage Backends",
      content: `
The actual data files are stored on object storage.

Supported backends:

• MinIO

• Amazon S3

• Azure Blob Storage

• Azure Data Lake Storage

• Google Cloud Storage

• HDFS
      `,
    },

    {
      heading: "Recommended Storage Usage",
      content: `
MinIO
Recommended for local development.

Amazon S3
Recommended for production deployments on AWS.

Azure Blob Storage
Recommended for Azure environments.

Google Cloud Storage
Recommended for GCP deployments.

HDFS
Recommended for on-premise Hadoop clusters.
      `,
    },

    {
      heading: "Storage Configuration",
      content: `
Storage backends can be configured from:

Settings → Storage Configuration

SegForge automatically provisions and manages Iceberg table locations after configuration.
      `,
    },

    {
      heading: "Time Travel",
      content: `
Iceberg tables support querying historical versions of data.

This enables:

• Auditing.

• Reproducible analytics.

• Rollbacks.

• Historical reporting.

• Experimentation without affecting production.
      `,
    },

    {
      heading: "Why Iceberg + Nessie?",
      content: `
The combination of Apache Iceberg and Nessie provides:

• Open standards.

• No vendor lock-in.

• Git-like workflows.

• ACID guarantees.

• Scalable metadata management.

• Complete data versioning.

This foundation powers the entire SegForge lakehouse architecture.
      `,
    },
  ],
};

export default doc;