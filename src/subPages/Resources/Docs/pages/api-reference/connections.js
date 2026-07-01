// pages/api-reference/connections.js

const doc = {
  title: "Connections API",

  description:
    "Manage database, storage, and streaming connections within a workspace. Connection credentials are encrypted at rest and never returned in API responses.",

  sections: [
    {
      heading: "Overview",
      content: `
All connection endpoints are scoped to a workspace.

Connections store the credentials and configuration needed to communicate with external systems such as databases, object storage, and messaging platforms.
      `,
    },

    {
      heading: "Supported Connection Types",
      code: `postgresql
mysql
sqlserver
oracle
db2
snowflake
mongodb
s3
minio
azure_blob
gcs
kafka
confluent_kafka`,
      language: "text",
    },

    {
      heading: "List Connections",
      content:
        "Returns all connections that belong to the specified workspace.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/connections`,
      language: "http",
    },

    {
      heading: "Example Request",
      code: `curl -H "Authorization: Bearer <token>" \
http://localhost:8000/api/workspaces/ws-uuid/connections`,
      language: "bash",
    },

    {
      heading: "Response",
      code: `[
  {
    "id": "conn-uuid-1",
    "name": "Production Postgres",
    "type": "postgresql",
    "host": "db.company.com",
    "port": 5432,
    "database": "production",
    "status": "active",
    "created_at": "2026-04-15T08:00:00Z"
  }
]`,
      language: "json",
    },

    {
      heading: "Security Note",
      callout: {
        type: "info",
        title: "Credentials Protected",
        content:
          "Passwords, access keys, and secrets are never included in API responses.",
      },
    },

    {
      heading: "Create Connection",
      content:
        "Creates a new database, storage, or streaming connection within a workspace.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/connections`,
      language: "http",
    },

    {
      heading: "PostgreSQL Example",
      code: `{
  "name": "Production Postgres",
  "type": "postgresql",
  "host": "db.company.com",
  "port": 5432,
  "database": "production",
  "username": "etl_user",
  "password": "secure-password",
  "ssl": true
}`,
      language: "json",
    },

    {
      heading: "S3 Example",
      code: `{
  "name": "Data Lake S3",
  "type": "s3",
  "bucket": "company-data-lake",
  "region": "us-east-1",
  "access_key_id": "AKIA...",
  "secret_access_key": "..."
}`,
      language: "json",
    },

    {
      heading: "Kafka Example",
      code: `{
  "name": "Event Kafka",
  "type": "kafka",
  "bootstrap_servers": "kafka-1:9092,kafka-2:9092",
  "security_protocol": "SASL_SSL",
  "sasl_mechanism": "PLAIN",
  "sasl_username": "user",
  "sasl_password": "password"
}`,
      language: "json",
    },

    {
      heading: "Response",
      code: `{
  "id": "conn-uuid-1",
  "name": "Production Postgres",
  "type": "postgresql",
  "status": "active",
  "created_at": "2026-04-15T08:00:00Z"
}`,
      language: "json",
    },

    {
      heading: "Test Connection",
      content:
        "Verifies connectivity to the target system and returns latency information.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/connections/{connection_id}/test`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "status": "connected",
  "latency_ms": 45,
  "message": "Successfully connected to PostgreSQL"
}`,
      language: "json",
    },

    {
      heading: "Possible Status Values",
      code: `connected
warning
failed`,
      language: "text",
    },

    {
      heading: "Get Connection Schema",
      content:
        "Introspects the source database and returns schemas, tables, and columns.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/connections/{connection_id}/schema`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "schemas": [
    {
      "name": "public",
      "tables": [
        {
          "name": "orders",
          "columns": [
            {
              "name": "id",
              "type": "integer",
              "nullable": false,
              "primary_key": true
            },
            {
              "name": "amount",
              "type": "numeric(10,2)",
              "nullable": true
            },
            {
              "name": "created_at",
              "type": "timestamp",
              "nullable": false
            }
          ]
        }
      ]
    }
  ]
}`,
      language: "json",
    },

    {
      heading: "Update Connection",
      content:
        "Updates connection configuration or credentials. Existing pipelines continue using the updated connection automatically.",
    },

    {
      heading: "Endpoint",
      code: `PATCH /api/workspaces/{workspace_id}/connections/{connection_id}`,
      language: "http",
    },

    {
      heading: "Example Request",
      code: `{
  "host": "new-db.company.com",
  "port": 5432,
  "ssl": true
}`,
      language: "json",
    },

    {
      heading: "Delete Connection",
      content:
        "Deletes a connection from the workspace.",
    },

    {
      heading: "Endpoint",
      code: `DELETE /api/workspaces/{workspace_id}/connections/{connection_id}`,
      language: "http",
    },

    {
      heading: "Response",
      code: `204 No Content`,
      language: "text",
    },

    {
      heading: "Warning",
      callout: {
        type: "warning",
        title: "Pipeline Impact",
        content:
          "Deleting a connection does not delete pipelines, but any pipeline using that connection will fail until another connection is configured.",
      },
    },

    {
      heading: "HTTP Status Codes",
      code: `200  Success
201  Connection Created
204  Connection Deleted
400  Validation Error
401  Unauthorized
403  Forbidden
404  Connection Not Found
409  Connection Name Already Exists
500  Internal Server Error`,
      language: "text",
    },

    {
      heading: "Common Errors",
      code: `{
  "detail": "Unable to connect to database"
}`,
      language: "json",
    },

    {
      heading: "Best Practices",
      content: `
• Use descriptive names such as "Production Postgres" or "Analytics S3".

• Test every connection before saving.

• Create separate connections for development and production systems.

• Rotate credentials regularly.

• Grant database users the minimum permissions necessary.
      `,
    },
  ],
};

export default doc;