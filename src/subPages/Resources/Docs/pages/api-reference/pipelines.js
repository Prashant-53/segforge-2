// pages/api-reference/pipelines.js

const doc = {
  title: "Pipelines API",

  description:
    "Create, manage, execute, and monitor visual ETL pipelines programmatically using the Seg Forge REST API.",

  sections: [
    {
      heading: "Overview",
      content: `
Pipelines are workspace-scoped DAGs (Directed Acyclic Graphs) composed of source, transformation, and destination nodes.

The Pipelines API allows you to:

• Create and update pipeline definitions  
• Execute pipelines on demand  
• Stop running jobs  
• Preview individual nodes  
• Retrieve generated Flink SQL  
• Delete pipelines and manage their lifecycle
      `,
    },

    {
      heading: "Pipeline Object",
      code: `{
  "id": "pipe-uuid-1",
  "name": "Daily Orders ETL",
  "status": "succeeded",
  "mode": "batch",
  "node_count": 5,
  "last_run": "2026-04-29T02:00:00Z",
  "schedule": "0 2 * * *",
  "created_at": "2026-04-01T00:00:00Z"
}`,
      language: "json",
    },

    {
      heading: "List Pipelines",
      content:
        "Returns all pipelines in the specified workspace.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/pipelines`,
      language: "http",
    },

    {
      heading: "Response",
      code: `[
  {
    "id": "pipe-uuid-1",
    "name": "Daily Orders ETL",
    "status": "succeeded",
    "mode": "batch",
    "node_count": 5,
    "last_run": "2026-04-29T02:00:00Z",
    "schedule": "0 2 * * *",
    "created_at": "2026-04-01T00:00:00Z"
  }
]`,
      language: "json",
    },

    {
      heading: "Create Pipeline",
      content:
        "Creates a new visual pipeline by storing its graph definition.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/pipelines`,
      language: "http",
    },

    {
      heading: "Request Body",
      code: `{
  "name": "Daily Orders ETL",
  "description": "Aggregate daily order metrics",
  "mode": "batch",
  "graph": {
    "nodes": [
      {
        "id": "source-1",
        "type": "database_source",
        "config": {
          "connection_id": "conn-uuid-1",
          "schema": "public",
          "table": "orders"
        },
        "position": {
          "x": 100,
          "y": 200
        }
      },
      {
        "id": "filter-1",
        "type": "filter",
        "config": {
          "condition": "amount > 100"
        },
        "position": {
          "x": 350,
          "y": 200
        }
      },
      {
        "id": "target-1",
        "type": "iceberg_target",
        "config": {
          "namespace": "curated",
          "table_name": "daily_orders",
          "write_mode": "overwrite"
        },
        "position": {
          "x": 600,
          "y": 200
        }
      }
    ],
    "edges": [
      {
        "source": "source-1",
        "target": "filter-1"
      },
      {
        "source": "filter-1",
        "target": "target-1"
      }
    ]
  }
}`,
      language: "json",
    },

    {
      heading: "Response",
      code: `{
  "id": "pipe-uuid-1",
  "name": "Daily Orders ETL",
  "status": "draft",
  "mode": "batch",
  "created_at": "2026-04-29T10:15:00Z"
}`,
      language: "json",
    },

    {
      heading: "Run Pipeline",
      content:
        "Executes a pipeline immediately and submits the generated Flink SQL to the SQL Gateway.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/pipelines/{pipeline_id}/run`,
      language: "http",
    },

    {
      heading: "Optional Request Body",
      code: `{
  "mode": "batch"
}`,
      language: "json",
    },

    {
      heading: "Response",
      code: `{
  "run_id": "run-uuid-1",
  "status": "running",
  "started_at": "2026-04-29T10:15:00Z"
}`,
      language: "json",
    },

    {
      heading: "Stop Pipeline",
      content:
        "Stops a currently running batch job or terminates a streaming job.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/pipelines/{pipeline_id}/stop`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "status": "stopped"
}`,
      language: "json",
    },

    {
      heading: "Preview Node",
      content:
        "Runs only the selected node and returns a sample result set without executing the entire pipeline.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/pipelines/{pipeline_id}/nodes/{node_id}/preview`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "columns": [
    "id",
    "amount",
    "status"
  ],
  "rows": [
    [1, 150.00, "shipped"],
    [2, 200.00, "pending"]
  ],
  "row_count": 100
}`,
      language: "json",
    },

    {
      heading: "Generate SQL",
      content:
        "Returns the Flink SQL generated from the visual pipeline graph.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/pipelines/{pipeline_id}/sql`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "sql": "CREATE TABLE source_orders ...\\nCREATE TEMPORARY VIEW ...\\nINSERT INTO ..."
}`,
      language: "json",
    },

    {
      heading: "Update Pipeline",
      content:
        "Updates pipeline metadata or replaces the graph definition.",
    },

    {
      heading: "Endpoint",
      code: `PATCH /api/workspaces/{workspace_id}/pipelines/{pipeline_id}`,
      language: "http",
    },

    {
      heading: "Example Request",
      code: `{
  "name": "Daily Orders ETL v2",
  "description": "Updated pipeline description"
}`,
      language: "json",
    },

    {
      heading: "Delete Pipeline",
      content:
        "Deletes the pipeline definition and its run history.",
    },

    {
      heading: "Endpoint",
      code: `DELETE /api/workspaces/{workspace_id}/pipelines/{pipeline_id}`,
      language: "http",
    },

    {
      heading: "Response",
      code: `204 No Content`,
      language: "text",
    },

    {
      heading: "Pipeline Status Values",
      code: `draft
running
succeeded
failed
streaming
scheduled
stopped`,
      language: "text",
    },

    {
      heading: "Pipeline Modes",
      code: `batch
streaming`,
      language: "text",
    },

    {
      heading: "Common Errors",
      code: `{
  "detail": "Pipeline validation failed"
}`,
      language: "json",
    },

    {
      heading: "Example Validation Error",
      code: `{
  "detail": {
    "node_id": "filter-1",
    "message": "Column 'amount' does not exist"
  }
}`,
      language: "json",
    },

    {
      heading: "HTTP Status Codes",
      code: `200  Success
201  Pipeline Created
204  Pipeline Deleted
400  Validation Error
401  Unauthorized
403  Forbidden
404  Pipeline Not Found
409  Pipeline Already Running
500  Internal Server Error`,
      language: "text",
    },

    {
      heading: "Best Practices",
      content: `
• Validate and preview nodes before execution.

• Use generated SQL for debugging complex transformations.

• Schedule long-running batch pipelines during off-peak hours.

• Keep pipelines modular and reusable.

• Use streaming mode only for real-time workloads.
      `,
    },
  ],
};

export default doc;