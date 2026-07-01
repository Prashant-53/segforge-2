// pages/api-reference/catalogs.js

const doc = {
  title: "Catalogs API",

  description:
    "Browse, manage, and query namespaces and Iceberg tables in the Seg Forge catalog.",

  sections: [
    {
      heading: "Overview",
      content: `
The Catalogs API provides access to your workspace's data lakehouse.

Use these endpoints to:

• Browse namespaces and tables  
• View table metadata and schema  
• Preview data  
• Create new Iceberg tables  
• Delete tables from the catalog
      `,
    },

    {
      heading: "List Namespaces",
      content:
        "Returns all namespaces available in the current workspace catalog.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/catalogs/namespaces`,
      language: "http",
    },

    {
      heading: "Response",
      code: `[
  {
    "name": "raw",
    "table_count": 5
  },
  {
    "name": "staged",
    "table_count": 3
  },
  {
    "name": "curated",
    "table_count": 8
  }
]`,
      language: "json",
    },

    {
      heading: "List Tables",
      content:
        "Returns all tables within a namespace.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/catalogs/namespaces/{namespace}/tables`,
      language: "http",
    },

    {
      heading: "Response",
      code: `[
  {
    "name": "orders",
    "format": "iceberg",
    "row_count": 152340,
    "size_bytes": 24300000,
    "last_updated": "2026-04-29T10:15:00Z",
    "partition_columns": [
      "order_date"
    ]
  }
]`,
      language: "json",
    },

    {
      heading: "Get Table Details",
      content:
        "Returns metadata, schema, partition information, and table properties.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/catalogs/namespaces/{namespace}/tables/{table}`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "name": "orders",
  "namespace": "curated",
  "format": "iceberg",
  "row_count": 152340,
  "file_count": 12,
  "size_bytes": 24300000,
  "columns": [
    {
      "name": "id",
      "type": "long",
      "nullable": false
    },
    {
      "name": "customer_id",
      "type": "long",
      "nullable": true
    },
    {
      "name": "amount",
      "type": "decimal(10,2)",
      "nullable": true
    },
    {
      "name": "order_date",
      "type": "date",
      "nullable": false
    }
  ],
  "partition_spec": [
    {
      "column": "order_date",
      "transform": "day"
    }
  ],
  "properties": {
    "write.format.default": "parquet",
    "commit.manifest.target-size-bytes": "8388608"
  },
  "last_updated": "2026-04-29T10:15:00Z"
}`,
      language: "json",
    },

    {
      heading: "Preview Table Data",
      content:
        "Returns a sample of table rows without scanning the full dataset.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/catalogs/namespaces/{namespace}/tables/{table}/preview?limit=100`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "columns": [
    "id",
    "customer_id",
    "amount",
    "order_date"
  ],
  "rows": [
    [1, 42, 150.00, "2026-04-29"]
  ],
  "total_rows": 152340,
  "preview_rows": 100
}`,
      language: "json",
    },

    {
      heading: "Create Table",
      content:
        "Creates a new Iceberg table inside the specified namespace.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/catalogs/namespaces/{namespace}/tables`,
      language: "http",
    },

    {
      heading: "Request Body",
      code: `{
  "name": "new_table",
  "columns": [
    {
      "name": "id",
      "type": "long",
      "nullable": false
    },
    {
      "name": "name",
      "type": "string",
      "nullable": true
    },
    {
      "name": "created_at",
      "type": "timestamp",
      "nullable": false
    }
  ],
  "partition_columns": [
    "created_at"
  ]
}`,
      language: "json",
    },

    {
      heading: "Response",
      code: `{
  "name": "new_table",
  "namespace": "curated",
  "format": "iceberg",
  "created_at": "2026-04-29T10:15:00Z"
}`,
      language: "json",
    },

    {
      heading: "Drop Table",
      content:
        "Deletes a table from the catalog.",
    },

    {
      heading: "Endpoint",
      code: `DELETE /api/workspaces/{workspace_id}/catalogs/namespaces/{namespace}/tables/{table}`,
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
        title: "Table Deletion",
        content:
          "Dropping a table removes its metadata from Nessie. Data files stored on S3 or MinIO may be retained depending on your retention configuration.",
      },
    },

    {
      heading: "Supported Table Formats",
      code: `iceberg
parquet
csv
json
avro
orc`,
      language: "text",
    },

    {
      heading: "HTTP Status Codes",
      code: `200  Success
201  Table Created
204  Table Deleted
400  Validation Error
401  Unauthorized
403  Forbidden
404  Namespace or Table Not Found
409  Table Already Exists
500  Internal Server Error`,
      language: "text",
    },

    {
      heading: "Common Errors",
      code: `{
  "detail": "Table not found"
}`,
      language: "json",
    },

    {
      heading: "Namespace Not Found",
      code: `{
  "detail": "Namespace does not exist"
}`,
      language: "json",
    },

    {
      heading: "Best Practices",
      content: `
• Organize tables into namespaces such as raw, staged, and curated.

• Partition large tables by date or other frequently filtered columns.

• Use preview endpoints instead of querying entire tables.

• Avoid deleting production tables without backups.

• Enable Iceberg snapshot retention and cleanup policies.
      `,
    },
  ],
};

export default doc;