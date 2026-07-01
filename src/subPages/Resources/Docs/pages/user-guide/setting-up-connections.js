const doc = {
  title: "Setting Up Connections",

  description:
    "Create secure connections to databases, cloud storage, and streaming platforms that power your data pipelines.",

  sections: [
    {
      heading: "Overview",
      content: `
Connections tell SegForge how to reach external systems such as databases, object storage, and streaming platforms.

Every pipeline, CDC stream, notebook, and catalog operation begins with a connection.

Connections store:

• Endpoint information

• Credentials

• Authentication settings

• SSL configuration

• Connection metadata
      `,
    },

    {
      heading: "Connection Wizard",
      content: `
Creating a connection takes only a few steps.

1. Open Connections from the sidebar.

2. Click New Connection.

3. Select a connector type.

4. Configure connection details.

5. Test the connection.

6. Save the connection.
      `,
    },

    {
      heading: "Supported Connection Types",
      content: `
SegForge supports three categories of connectors:

• Databases

• Cloud Storage

• Streaming Platforms
      `,
    },

    {
      heading: "Database Connections",
      content: `
Supported databases include:

• PostgreSQL

• MySQL

• SQL Server

• Oracle

• Snowflake

• IBM DB2

• MongoDB
      `,
    },

    {
      heading: "PostgreSQL",
      content: `
Required fields:

• Host

• Port (5432)

• Database

• Username

• Password

• SSL Configuration

For CDC support:

• User requires REPLICATION privilege.

• wal_level must be set to logical.
      `,
      code: `Host: db.company.com
Port: 5432
Database: production
Username: readonly_user
SSL: Enabled`,
      language: "text",
    },

    {
      heading: "MySQL",
      content: `
Required fields:

• Host

• Port (3306)

• Database

• Username

• Password

CDC requirements:

• binlog_format=ROW

• REPLICATION SLAVE privilege

• REPLICATION CLIENT privilege
      `,
      code: `Host: mysql.company.com
Port: 3306
Database: analytics
Username: etl_user`,
      language: "text",
    },

    {
      heading: "SQL Server",
      content: `
Required fields:

• Host

• Port (1433)

• Database

• Username

• Password

CDC requirements:

• Enable database CDC.

• Enable table CDC.
      `,
      code: `EXEC sys.sp_cdc_enable_db;

EXEC sys.sp_cdc_enable_table
  @source_schema='dbo',
  @source_name='orders',
  @role_name=NULL;`,
      language: "sql",
    },

    {
      heading: "Oracle",
      content: `
Required fields:

• Host

• Port (1521)

• Service Name

• Username

• Password

CDC requires supplemental logging and LogMiner access.
      `,
      code: `Host: oracle.company.com
Port: 1521
Service: ORCL`,
      language: "text",
    },

    {
      heading: "Snowflake",
      content: `
Required fields:

• Account Identifier

• Database

• Warehouse

• Username

• Password
      `,
      code: `Account: xy12345.us-east-1
Database: ANALYTICS
Warehouse: ETL_WH`,
      language: "text",
    },

    {
      heading: "Cloud Storage Connections",
      content: `
SegForge supports multiple object storage providers for Iceberg and file-based pipelines.
      `,
    },

    {
      heading: "Amazon S3",
      content: `
Configuration fields:

• Bucket

• Region

• Access Key ID

• Secret Access Key

• Optional Path Prefix
      `,
      code: `Bucket: analytics-lake
Region: us-east-1`,
      language: "text",
    },

    {
      heading: "MinIO",
      content: `
Configuration fields:

• Endpoint

• Bucket

• Access Key

• Secret Key
      `,
      code: `Endpoint: http://minio:9000
Bucket: warehouse`,
      language: "text",
    },

    {
      heading: "Azure Blob Storage",
      content: `
Configuration fields:

• Storage Account Name

• Container

• Account Key
      `,
    },

    {
      heading: "Google Cloud Storage",
      content: `
Configuration fields:

• Bucket

• Project ID

• Service Account JSON
      `,
    },

    {
      heading: "Streaming Connections",
      content: `
Streaming connectors allow SegForge to read and write event data.
      `,
    },

    {
      heading: "Apache Kafka",
      content: `
Configuration fields:

• Bootstrap Servers

• Security Protocol

• SASL Mechanism

• Username

• Password
      `,
      code: `Bootstrap Servers: kafka:9092
Security Protocol: PLAINTEXT`,
      language: "text",
    },

    {
      heading: "Connection Testing",
      content: `
Always test a connection before saving it.

The test performs a lightweight operation against the target system.

Examples:

• SELECT 1 for databases

• Bucket listing for object storage

• Metadata request for Kafka
      `,
    },

    {
      heading: "Connection Test Results",
      content: `
✅ Success
The connection is valid and can be saved.

❌ Failed
Verify:

• Credentials

• Network connectivity

• Firewall rules

• SSL configuration

• Permissions
      `,
    },

    {
      heading: "Connection Security",
      content: `
All credentials are encrypted at rest using Fernet encryption.

Security guarantees:

• Credentials never appear in logs.

• API responses never expose secrets.

• Decryption occurs only at runtime.

• Encryption keys are derived from your instance configuration.
      `,
    },

    {
      heading: "Schema Discovery",
      content: `
Database connections support automatic schema discovery.

SegForge can retrieve:

• Schemas

• Tables

• Columns

• Data types

• Primary keys

• Foreign keys
      `,
    },

    {
      heading: "Connection Health",
      content: `
Every connection continuously reports its health status.

🟢 Healthy
Connection working normally.

🟡 Warning
Intermittent issues detected.

🔴 Error
Connection unavailable.
      `,
    },

    {
      heading: "Latency Metrics",
      content: `
SegForge periodically checks:

• Connectivity

• Response time

• Availability

• Authentication health

These metrics appear directly on the Connections page.
      `,
    },

    {
      heading: "Managing Existing Connections",
      content: `
From the Connections page you can:

• Edit

• Duplicate

• Delete

• Test

• View health metrics
      `,
    },

    {
      heading: "Editing Connections",
      content: `
Editing allows you to:

• Rotate credentials

• Change endpoints

• Update SSL settings

• Modify authentication methods
      `,
    },

    {
      heading: "Duplicating Connections",
      content: `
Duplicate an existing connection when:

• Creating staging environments

• Creating development environments

• Connecting to similar systems
      `,
    },

    {
      heading: "Deleting Connections",
      content: `
Deleting a connection removes it from the workspace.

Pipelines that depend on the connection will display warnings until another connection is configured.
      `,
    },

    {
      heading: "Best Practices",
      content: `
• Use dedicated service accounts.

• Enable SSL whenever possible.

• Grant least-privilege permissions.

• Test connections before production use.

• Monitor connection health regularly.

• Rotate credentials periodically.
      `,
    },

    {
      heading: "Next Steps",
      content: `
Once your connections are configured, you can:

• Build Pipelines

• Configure CDC Streams

• Create Notebooks

• Browse the Catalog

• Schedule Workflows
      `,
    },
  ],
};

export default doc;