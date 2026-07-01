const doc = {
  title: "Data Catalog",

  description:
    "Browse, manage, and explore all data stored in your workspace lakehouse.",

  sections: [
    {
      heading: "Overview",
      content: `
The Catalogs page is your window into all the data stored in your workspace's lakehouse.

It provides a unified interface for browsing tables, viewing metadata, exploring schemas, previewing data, and managing Apache Iceberg datasets.
      `,
    },

    {
      heading: "Catalog Hierarchy",
      code: `workspace-catalog
├── raw/
│   ├── events (152K rows, 24 MB)
│   ├── sessions (89K rows, 12 MB)
│   └── users (15K rows, 2 MB)
├── staged/
│   └── events_cleaned (148K rows, 22 MB)
└── curated/
    ├── daily_metrics (365 rows, 45 KB)
    └── user_segments (5K rows, 1 MB)`,
      language: "text",
    },

    {
      heading: "Browsing Tables",
      content: `
The left panel displays the workspace catalog hierarchy.

Click any namespace or table to explore its details.

Each table displays:

• Row count

• Total storage size

• Number of data files

• Last update time

• Partition information
      `,
    },

    {
      heading: "Table Details",
      content: `
Selecting a table opens the metadata panel on the right side of the page.
      `,
    },

    {
      heading: "Metadata",
      code: `Format         : Apache Iceberg (Parquet)
Row Count      : 152,340
File Count     : 12
Total Size     : 24.3 MB
Partitioning   : date_key (day)
Last Updated   : 2026-04-29 10:15:00`,
      language: "text",
    },

    {
      heading: "Columns",
      code: `Column       Type         Nullable
-------------------------------------
id           LONG         No
event_type   STRING       No
user_id      LONG         Yes
payload      STRING       Yes
event_time   TIMESTAMP    No`,
      language: "text",
    },

    {
      heading: "Data Preview",
      content: `
Every table includes a preview pane that displays the first 100 rows.

The preview allows you to:

• Inspect records

• Verify pipeline outputs

• Validate schema changes

• Explore data without writing SQL
      `,
    },

    {
      heading: "Column Statistics",
      content: `
Per-column statistics are automatically generated.

Available statistics include:

• Minimum value

• Maximum value

• Null count

• Distinct count

• Distribution histograms
      `,
    },

    {
      heading: "Creating Tables",
      content: `
Tables can be created in multiple ways.
      `,
    },

    {
      heading: "Create Table Wizard",
      content: `
To manually create a table:

1. Click + Create Table.

2. Select or create a namespace.

3. Define columns.

4. Configure partitions.

5. Click Create.
      `,
    },

    {
      heading: "Supported Data Types",
      code: `INT
LONG
STRING
BOOLEAN
DECIMAL
FLOAT
DOUBLE
DATE
TIMESTAMP
BINARY`,
      language: "text",
    },

    {
      heading: "Creating Tables via Pipelines",
      content: `
When a pipeline writes to a table that does not already exist, SegForge automatically creates the table using the inferred schema from upstream nodes.
      `,
    },

    {
      heading: "Creating Tables via CDC",
      content: `
CDC Streams automatically create Iceberg tables by mapping source database types to Iceberg types.
      `,
    },

    {
      heading: "Uploading Data",
      content: `
The Upload feature allows files to be imported directly into the lakehouse.
      `,
    },

    {
      heading: "Supported Upload Formats",
      code: `Parquet
CSV
JSON`,
      language: "text",
    },

    {
      heading: "Upload Workflow",
      content: `
1. Click Upload.

2. Select a file.

3. Choose an existing table or create a new one.

4. Review the inferred schema.

5. Import the data.

The table immediately becomes available in the catalog.
      `,
    },

    {
      heading: "Namespaces",
      content: `
Namespaces organize tables into logical groups and help teams structure data according to processing stages.
      `,
    },

    {
      heading: "Common Namespace Patterns",
      code: `raw/       → Raw ingested data
staged/    → Cleaned and validated data
curated/   → Business-ready tables
features/  → Machine learning features`,
      language: "text",
    },

    {
      heading: "Creating Namespaces",
      content: `
Namespaces are created automatically when a new namespace name is entered during table creation.
      `,
    },

    {
      heading: "Nessie Versioning",
      content: `
SegForge uses Nessie as the metadata catalog.

Nessie adds Git-like versioning capabilities to your data lake.
      `,
    },

    {
      heading: "Versioning Capabilities",
      content: `
• Workspace branches

• Data commits

• Tags and snapshots

• Rollbacks

• Branch merges

• Auditable history
      `,
    },

    {
      heading: "How Versioning Works",
      code: `Workspace
    ↓
Nessie Branch
    ↓
Iceberg Tables
    ↓
Commits & Snapshots`,
      language: "text",
    },

    {
      heading: "Supported Table Formats",
      content: `
The catalog can display and manage several table and file formats.
      `,
    },

    {
      heading: "Format Support",
      code: `Format      Read     Write     Management
--------------------------------------------
Iceberg      ✅       ✅         Full
Parquet      ✅       ❌         Preview
CSV          ✅       ❌         Preview
JSON         ✅       ❌         Preview
Delta        ✅       ❌         Metadata`,
      language: "text",
    },

    {
      heading: "Storage Backends",
      content: `
Data files can reside on several storage systems.
      `,
    },

    {
      heading: "Supported Storage",
      code: `MinIO
AWS S3
Azure Blob Storage
Google Cloud Storage
HDFS`,
      language: "text",
    },

    {
      heading: "Search & Discovery",
      content: `
The catalog includes search capabilities for discovering data quickly.

Search by:

• Table name

• Column name

• Namespace

• Tags

• Description
      `,
    },

    {
      heading: "Schema Evolution",
      content: `
Apache Iceberg supports safe schema evolution.

Supported operations:

• Add columns

• Rename columns

• Drop columns

• Reorder columns

• Change nullable properties
      `,
    },

    {
      heading: "Time Travel",
      content: `
Iceberg tables support querying historical snapshots.

This enables:

• Data debugging

• Reproducible analytics

• Rollbacks

• Experimentation
      `,
    },

    {
      heading: "Best Practices",
      content: `
• Organize tables into namespaces.

• Partition large tables appropriately.

• Use curated namespaces for business reporting.

• Leverage Nessie branches for experimentation.

• Monitor table size and file counts.

• Use schema evolution instead of recreating tables.

• Prefer Iceberg tables over raw file formats whenever possible.
      `,
    },
  ],
};

export default doc;