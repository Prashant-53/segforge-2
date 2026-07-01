// pages/api-reference/authentication.js

const doc = {
  title: "Authentication API",

  description:
    "Endpoints for user registration, authentication, Azure AD sign-in, and service health checks.",

  sections: [
    {
      heading: "Overview",
      content: `
The Authentication API handles user registration, login, single sign-on, and health monitoring.

Authentication is based on JWT tokens that are passed in the Authorization header of API requests.
      `,
    },

    {
      heading: "Authentication Flow",
      code: `Register User
      ↓
Login
      ↓
Receive JWT Token
      ↓
Include Token In Requests
      ↓
Access Protected APIs`,
      language: "text",
    },

    {
      heading: "Register User",
      content: `
Create a new Seg Forge user account.
      `,
    },

    {
      heading: "Endpoint",
      code: `POST /api/auth/register`,
      language: "http",
    },

    {
      heading: "Request Body",
      code: `{
  "email": "user@company.com",
  "password": "secure-password",
  "name": "Jane Smith"
}`,
      language: "json",
    },

    {
      heading: "Response",
      code: `{
  "id": "a1b2c3d4-e5f6-7890-abcd-ef1234567890",
  "email": "user@company.com",
  "name": "Jane Smith",
  "created_at": "2026-04-29T10:15:00Z"
}`,
      language: "json",
    },

    {
      heading: "Example Request",
      code: `curl -X POST http://localhost:8000/api/auth/register \
-H "Content-Type: application/json" \
-d '{
  "email":"user@company.com",
  "password":"secure-password",
  "name":"Jane Smith"
}'`,
      language: "bash",
    },

    {
      heading: "Validation Rules",
      code: `✓ Email must be unique
✓ Password is required
✓ Name is required
✓ Email must be valid`,
      language: "text",
    },

    {
      heading: "Login",
      content: `
Authenticate an existing user and receive a JWT access token.
      `,
    },

    {
      heading: "Endpoint",
      code: `POST /api/auth/login`,
      language: "http",
    },

    {
      heading: "Request Body",
      code: `{
  "email": "user@company.com",
  "password": "secure-password"
}`,
      language: "json",
    },

    {
      heading: "Response",
      code: `{
  "access_token": "eyJhbGciOiJIUzI1NiIs...",
  "token_type": "bearer"
}`,
      language: "json",
    },

    {
      heading: "Example Request",
      code: `curl -X POST http://localhost:8000/api/auth/login \
-H "Content-Type: application/json" \
-d '{
  "email":"user@company.com",
  "password":"secure-password"
}'`,
      language: "bash",
    },

    {
      heading: "Using the Access Token",
      content: `
Include the JWT token in the Authorization header when calling protected endpoints.
      `,
    },

    {
      heading: "Example",
      code: `curl -H "Authorization: Bearer eyJhbGciOiJIUzI1NiIs..." \
http://localhost:8000/api/workspaces`,
      language: "bash",
    },

    {
      heading: "Authentication Header",
      code: `Authorization: Bearer <access_token>`,
      language: "text",
    },

    {
      heading: "Azure AD Authentication",
      content: `
Enterprise deployments can authenticate users using Microsoft Azure Active Directory.
      `,
    },

    {
      heading: "OAuth Flow",
      code: `User Login
      ↓
Azure AD
      ↓
Authorization Code
      ↓
Seg Forge Backend
      ↓
JWT Token`,
      language: "text",
    },

    {
      heading: "Callback Endpoint",
      code: `GET /api/auth/azure/callback?code={authorization_code}`,
      language: "http",
    },

    {
      heading: "Response",
      content: `
After successfully exchanging the authorization code, Seg Forge returns a JWT token and establishes an authenticated session.
      `,
    },

    {
      heading: "Health Checks",
      content: `
The backend exposes health endpoints that can be used by monitoring systems, load balancers, and Kubernetes probes.
      `,
    },

    {
      heading: "Basic Health Check",
      code: `GET /health`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "status": "healthy"
}`,
      language: "json",
    },

    {
      heading: "Detailed Health Check",
      code: `GET /health/detailed`,
      language: "http",
    },

    {
      heading: "Detailed Response",
      code: `{
  "status": "healthy",
  "services": {
    "postgres": "healthy",
    "redis": "healthy",
    "flink": "healthy",
    "kafka": "healthy",
    "minio": "healthy",
    "nessie": "healthy"
  }
}`,
      language: "json",
    },

    {
      heading: "Service Health Status",
      code: `✓ PostgreSQL
✓ Redis
✓ Flink
✓ Kafka
✓ MinIO
✓ Nessie`,
      language: "text",
    },

    {
      heading: "HTTP Status Codes",
      code: `200  Success
201  Resource Created
400  Validation Error
401  Invalid Credentials
403  Access Denied
409  User Already Exists
500  Internal Server Error`,
      language: "text",
    },

    {
      heading: "Authentication Errors",
      code: `{
  "detail": "Invalid email or password"
}`,
      language: "json",
    },

    {
      heading: "User Already Exists",
      code: `{
  "detail": "User with this email already exists"
}`,
      language: "json",
    },

    {
      heading: "Summary",
      content: `
The Authentication API provides all endpoints required to register users, authenticate sessions, integrate with Azure AD, and monitor platform health.

All other Seg Forge APIs depend on the JWT tokens issued by these endpoints.
      `,
    },
  ],
};

export default doc;