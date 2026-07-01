// pages/api-reference/notebooks.js

const doc = {
  title: "Notebooks API",

  description:
    "Create, manage, and execute interactive notebooks programmatically using the Seg Forge REST API.",

  sections: [
    {
      heading: "Overview",
      content: `
The Notebooks API provides access to interactive SQL and Python notebooks.

Notebooks support:

• SQL cells (Flink SQL, Trino)
• Python cells (PyFlink)
• Markdown cells for documentation
• Batch and streaming execution modes
• Server-Sent Events (SSE) for real-time execution output
      `,
    },

    {
      heading: "Notebook Object",
      code: `{
  "id": "nb-uuid-1",
  "name": "Ad-hoc Queries",
  "cell_count": 5,
  "last_modified": "2026-04-29T09:30:00Z"
}`,
      language: "json",
    },

    {
      heading: "List Notebooks",
      content:
        "Returns all notebooks in the workspace.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/notebooks`,
      language: "http",
    },

    {
      heading: "Response",
      code: `[
  {
    "id": "nb-uuid-1",
    "name": "Ad-hoc Queries",
    "cell_count": 5,
    "last_modified": "2026-04-29T09:30:00Z"
  }
]`,
      language: "json",
    },

    {
      heading: "Create Notebook",
      content:
        "Creates a new notebook with one or more cells.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/notebooks`,
      language: "http",
    },

    {
      heading: "Request Body",
      code: `{
  "name": "New Notebook",
  "cells": [
    {
      "type": "sql",
      "content": "SELECT 1 AS hello;"
    }
  ]
}`,
      language: "json",
    },

    {
      heading: "Response",
      code: `{
  "id": "nb-uuid-1",
  "name": "New Notebook",
  "cell_count": 1,
  "created_at": "2026-04-29T10:15:00Z"
}`,
      language: "json",
    },

    {
      heading: "Execute Cell",
      content: `
Executes a notebook cell and streams results using Server-Sent Events (SSE).

Supported engines:

• flinksql
• pyflink
• trino

Supported modes:

• batch
• streaming
      `,
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/notebooks/{notebook_id}/execute`,
      language: "http",
    },

    {
      heading: "Request Body",
      code: `{
  "cell_index": 0,
  "engine": "flinksql",
  "mode": "batch"
}`,
      language: "json",
    },

    {
      heading: "SSE Response",
      code: `data: {"type":"status","message":"Executing..."}
data: {"type":"columns","columns":["hello"]}
data: {"type":"row","data":[1]}
data: {"type":"complete","row_count":1,"duration_ms":450}`,
      language: "text",
    },

    {
      heading: "SSE Event Types",
      code: `status
columns
row
error
complete`,
      language: "text",
    },

    {
      heading: "Save Notebook",
      content:
        "Updates notebook metadata and replaces notebook cells.",
    },

    {
      heading: "Endpoint",
      code: `PUT /api/workspaces/{workspace_id}/notebooks/{notebook_id}`,
      language: "http",
    },

    {
      heading: "Request Body",
      code: `{
  "name": "Updated Notebook",
  "cells": [
    {
      "type": "markdown",
      "content": "# Analysis"
    },
    {
      "type": "sql",
      "content": "SELECT * FROM orders LIMIT 10;"
    },
    {
      "type": "python",
      "content": "print('hello')"
    }
  ]
}`,
      language: "json",
    },

    {
      heading: "Response",
      code: `{
  "id": "nb-uuid-1",
  "name": "Updated Notebook",
  "cell_count": 3,
  "last_modified": "2026-04-29T10:20:00Z"
}`,
      language: "json",
    },

    {
      heading: "Delete Notebook",
      content:
        "Deletes the notebook and all associated cells.",
    },

    {
      heading: "Endpoint",
      code: `DELETE /api/workspaces/{workspace_id}/notebooks/{notebook_id}`,
      language: "http",
    },

    {
      heading: "Response",
      code: `204 No Content`,
      language: "text",
    },

    {
      heading: "Cell Types",
      code: `sql
python
markdown`,
      language: "text",
    },

    {
      heading: "Execution Engines",
      code: `flinksql
pyflink
trino`,
      language: "text",
    },

    {
      heading: "Execution Modes",
      code: `batch
streaming`,
      language: "text",
    },

    {
      heading: "HTTP Status Codes",
      code: `200  Success
201  Notebook Created
204  Notebook Deleted
400  Validation Error
401  Unauthorized
403  Forbidden
404  Notebook Not Found
409  Notebook Already Executing
500  Internal Server Error`,
      language: "text",
    },

    {
      heading: "Common Errors",
      code: `{
  "detail": "Cell index out of range"
}`,
      language: "json",
    },

    {
      heading: "SQL Execution Error",
      code: `{
  "detail": "SQL syntax error near 'FORM'"
}`,
      language: "json",
    },

    {
      heading: "Python Execution Error",
      code: `{
  "detail": "NameError: name 'orders' is not defined"
}`,
      language: "json",
    },

    {
      heading: "Best Practices",
      content: `
• Use SQL cells for querying and transformation.

• Use Python cells only when custom logic or UDFs are required.

• Use LIMIT during exploratory analysis.

• Organize notebooks with Markdown cells.

• Prefer batch mode for ad-hoc analysis and streaming mode for live dashboards.
      `,
    },
  ],
};

export default doc;