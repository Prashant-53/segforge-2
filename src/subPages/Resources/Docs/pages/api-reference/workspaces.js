// pages/api-reference/workspaces.js

const doc = {
  title: "Workspaces API",

  description:
    "Manage workspaces programmatically using the Seg Forge REST API. Workspaces are the top-level organizational unit that contain connections, pipelines, notebooks, catalogs, and jobs.",

  sections: [
    {
      heading: "Overview",
      content: `
The Workspaces API allows you to create, retrieve, update, and delete workspaces.

Every user can have access to one or more workspaces, and all resources in Seg Forge are scoped to a workspace.
      `,
    },

    {
      heading: "Workspace Object",
      code: `{
  "id": "ws-uuid-1",
  "name": "Analytics Team",
  "description": "Production analytics workspace",
  "created_at": "2026-04-01T00:00:00Z",
  "pipeline_count": 12,
  "connection_count": 5
}`,
      language: "json",
    },

    {
      heading: "List Workspaces",
      content: `
Returns all workspaces the authenticated user can access.
      `,
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces`,
      language: "http",
    },

    {
      heading: "Example Request",
      code: `curl -H "Authorization: Bearer <token>" \
http://localhost:8000/api/workspaces`,
      language: "bash",
    },

    {
      heading: "Response",
      code: `[
  {
    "id": "ws-uuid-1",
    "name": "Analytics Team",
    "description": "Production analytics workspace",
    "created_at": "2026-04-01T00:00:00Z",
    "pipeline_count": 12,
    "connection_count": 5
  }
]`,
      language: "json",
    },

    {
      heading: "Create Workspace",
      content: `
Creates a new workspace and automatically provisions:

• A dedicated Nessie branch  
• A default Iceberg namespace  
• Workspace settings and metadata  
• Resource tracking and quotas
      `,
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces`,
      language: "http",
    },

    {
      heading: "Request Body",
      code: `{
  "name": "New Workspace",
  "description": "Optional description"
}`,
      language: "json",
    },

    {
      heading: "Example Request",
      code: `curl -X POST http://localhost:8000/api/workspaces \
-H "Authorization: Bearer <token>" \
-H "Content-Type: application/json" \
-d '{
  "name":"New Workspace",
  "description":"Optional description"
}'`,
      language: "bash",
    },

    {
      heading: "Response",
      code: `{
  "id": "ws-uuid-new",
  "name": "New Workspace",
  "description": "Optional description",
  "created_at": "2026-04-29T10:15:00Z"
}`,
      language: "json",
    },

    {
      heading: "Get Workspace",
      content: `
Returns details for a single workspace.
      `,
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}`,
      language: "http",
    },

    {
      heading: "Example Request",
      code: `curl -H "Authorization: Bearer <token>" \
http://localhost:8000/api/workspaces/ws-uuid-1`,
      language: "bash",
    },

    {
      heading: "Response",
      code: `{
  "id": "ws-uuid-1",
  "name": "Analytics Team",
  "description": "Production analytics workspace",
  "created_at": "2026-04-01T00:00:00Z",
  "pipeline_count": 12,
  "connection_count": 5
}`,
      language: "json",
    },

    {
      heading: "Update Workspace",
      content: `
Updates workspace metadata such as the name or description.
      `,
    },

    {
      heading: "Endpoint",
      code: `PATCH /api/workspaces/{workspace_id}`,
      language: "http",
    },

    {
      heading: "Request Body",
      code: `{
  "name": "Updated Name",
  "description": "Updated description"
}`,
      language: "json",
    },

    {
      heading: "Example Request",
      code: `curl -X PATCH http://localhost:8000/api/workspaces/ws-uuid-1 \
-H "Authorization: Bearer <token>" \
-H "Content-Type: application/json" \
-d '{
  "name":"Updated Name",
  "description":"Updated description"
}'`,
      language: "bash",
    },

    {
      heading: "Delete Workspace",
      content: `
Deletes a workspace and all resources associated with it.
      `,
    },

    {
      heading: "Endpoint",
      code: `DELETE /api/workspaces/{workspace_id}`,
      language: "http",
    },

    {
      heading: "Example Request",
      code: `curl -X DELETE \
-H "Authorization: Bearer <token>" \
http://localhost:8000/api/workspaces/ws-uuid-1`,
      language: "bash",
    },

    {
      heading: "Response",
      code: `204 No Content`,
      language: "text",
    },

    {
      heading: "Cascade Deletion",
      code: `Workspace
├── Connections
├── Pipelines
├── Notebooks
├── Jobs
├── CDC Streams
├── Catalog Metadata
└── Iceberg Tables`,
      language: "text",
    },

    {
      heading: "Caution",
      content: `
Deleting a workspace removes all associated connections, pipelines, notebooks, jobs, and catalog data.

This action cannot be undone.
      `,
      callout: {
        type: "warning",
        title: "Permanent Deletion",
        content:
          "Deleting a workspace permanently removes all resources and data associated with it.",
      },
    },

    {
      heading: "HTTP Status Codes",
      code: `200  Success
201  Workspace Created
204  Workspace Deleted
400  Validation Error
401  Unauthorized
403  Insufficient Permissions
404  Workspace Not Found
409  Workspace Name Already Exists
500  Internal Server Error`,
      language: "text",
    },

    {
      heading: "Common Errors",
      code: `{
  "detail": "Workspace not found"
}`,
      language: "json",
    },

    {
      heading: "Permission Denied",
      code: `{
  "detail": "You do not have permission to access this workspace"
}`,
      language: "json",
    },

    {
      heading: "Best Practices",
      content: `
• Create separate workspaces for development, staging, and production.

• Use descriptive workspace names.

• Restrict workspace deletion permissions to administrators.

• Archive unused workspaces before deleting them permanently.
      `,
    },
  ],
};

export default doc;