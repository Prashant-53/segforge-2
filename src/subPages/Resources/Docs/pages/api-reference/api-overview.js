
const doc = {
  title: "API Overview",

  description:
    "Learn how to authenticate, structure requests, and interact with the Seg Forge REST API.",

  sections: [
    {
      heading: "Overview",
      content: `
The Seg Forge API is a RESTful HTTP API powered by FastAPI.

All endpoints:

• Return JSON responses

• Use standard HTTP methods

• Follow consistent naming conventions

• Support authentication and workspace scoping
      `,
    },

    {
      heading: "Base URL",
      code: `Development
http://localhost:8000/api

Production
https://your-domain.com/api`,
      language: "text",
    },

    {
      heading: "Authentication",
      content: `
Most endpoints require a JWT access token.

Pass the token in the Authorization header of every request.
      `,
    },

    {
      heading: "Authorization Header",
      code: `Authorization: Bearer <token>`,
      language: "bash",
    },

    {
      heading: "Login",
      content: `
Authenticate using your email and password to obtain an access token.
      `,
    },

    {
      heading: "Login Request",
      code: `curl -X POST http://localhost:8000/api/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"user@company.com",
    "password":"password"
  }'`,
      language: "bash",
    },

    {
      heading: "Login Response",
      code: `{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "bearer"
}`,
      language: "json",
    },

    {
      heading: "Request Flow",
      code: `Login
   ↓
Receive JWT Token
   ↓
Store Token
   ↓
Include In Authorization Header
   ↓
Call Protected Endpoints`,
      language: "text",
    },

    {
      heading: "HTTP Methods",
      code: `GET     Retrieve resources
POST    Create resources
PUT     Replace resources
PATCH   Update resources
DELETE  Remove resources`,
      language: "text",
    },

    {
      heading: "Response Formats",
      content: `
The API uses consistent response patterns across all endpoints.
      `,
    },

    {
      heading: "Success Response",
      code: `{
  "id": "uuid-string",
  "name": "resource-name",
  "created_at": "2026-04-29T10:15:00Z"
}`,
      language: "json",
    },

    {
      heading: "List Response",
      code: `[
  {
    "id": "uuid-1",
    "name": "resource-1"
  },
  {
    "id": "uuid-2",
    "name": "resource-2"
  }
]`,
      language: "json",
    },

    {
      heading: "Error Response",
      code: `{
  "detail": "Error message describing what went wrong"
}`,
      language: "json",
    },

    {
      heading: "HTTP Status Codes",
      code: `200  Success
201  Created
400  Bad Request
401  Unauthorized
403  Forbidden
404  Not Found
500  Internal Server Error`,
      language: "text",
    },

    {
      heading: "Workspace Scoping",
      content: `
Most resources in Seg Forge belong to a workspace.

Endpoints typically include the workspace identifier in the URL.
      `,
    },

    {
      heading: "Examples",
      code: `/api/workspaces/{workspace_id}/connections
/api/workspaces/{workspace_id}/pipelines
/api/workspaces/{workspace_id}/catalogs
/api/workspaces/{workspace_id}/jobs`,
      language: "text",
    },

    {
      heading: "Request Lifecycle",
      code: `Request
   ↓
JWT Validation
   ↓
Workspace Scope Check
   ↓
Permission Check
   ↓
Route Handler
   ↓
JSON Response`,
      language: "text",
    },

    {
      heading: "Pagination",
      content: `
Endpoints returning large collections support pagination using skip and limit parameters.
      `,
    },

    {
      heading: "Pagination Example",
      code: `GET /api/workspaces/{id}/pipelines?skip=0&limit=50`,
      language: "http",
    },

    {
      heading: "Pagination Parameters",
      code: `skip   Default: 0
limit  Default: 50`,
      language: "text",
    },

    {
      heading: "Paginated Request",
      code: `curl -X GET \
"http://localhost:8000/api/workspaces/123/pipelines?skip=0&limit=20" \
-H "Authorization: Bearer <token>"`,
      language: "bash",
    },

    {
      heading: "Content Types",
      content: `
All request and response bodies use JSON unless otherwise specified.
      `,
    },

    {
      heading: "Supported Content Types",
      code: `application/json
multipart/form-data
application/octet-stream`,
      language: "text",
    },

    {
      heading: "Headers",
      content: `
The following headers are commonly used when interacting with the API.
      `,
    },

    {
      heading: "Common Headers",
      code: `Authorization: Bearer <token>
Content-Type: application/json
Accept: application/json`,
      language: "text",
    },

    {
      heading: "OpenAPI Documentation",
      content: `
The FastAPI backend automatically generates interactive API documentation.
      `,
    },

    {
      heading: "Documentation URLs",
      code: `Swagger UI
http://localhost:8000/docs

ReDoc
http://localhost:8000/redoc`,
      language: "text",
    },

    {
      heading: "Benefits",
      code: `✓ Interactive API explorer
✓ Request testing
✓ Schema documentation
✓ Example payloads
✓ Always in sync with backend code`,
      language: "text",
    },

    {
      heading: "Rate Limits",
      content: `
Self-hosted deployments have no rate limits by default.

Cloud-managed deployments enforce API limits per API key.
      `,
    },

    {
      heading: "Cloud Limits",
      code: `1,000 requests per minute
per API key`,
      language: "text",
    },

    {
      heading: "API Conventions",
      code: `✓ JSON responses
✓ UUID identifiers
✓ ISO-8601 timestamps
✓ Consistent error handling
✓ RESTful URLs
✓ Workspace scoping`,
      language: "text",
    },

    {
      heading: "Example Request",
      code: `curl -X GET \
http://localhost:8000/api/workspaces \
-H "Authorization: Bearer <token>"`,
      language: "bash",
    },

    {
      heading: "Summary",
      content: `
The Seg Forge API provides a secure, consistent, and fully documented interface for interacting with every platform capability—from workspaces and pipelines to CDC streams and monitoring.

The following sections document every endpoint in detail.
      `,
    },
  ],
};

export default doc;