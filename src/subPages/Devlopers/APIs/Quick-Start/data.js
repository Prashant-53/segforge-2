export const quickStartExamples = [
  {
    title: "Authenticate",
    description:
      "Obtain a JWT access token that can be used to authorize all subsequent API requests.",
    method: "POST",
    endpoint: "/api/auth/login",
    code: `curl -X POST https://your-domain.com/api/auth/login \\
  -H "Content-Type: application/json" \\
  -d '{
    "email": "user@company.com",
    "password": "password"
  }'`,
  },
  {
    title: "Create Connection",
    description:
      "Register a database, storage system, or streaming source in a workspace.",
    method: "POST",
    endpoint: "/api/workspaces/{workspace_id}/connections",
    code: `curl -X POST https://your-domain.com/api/workspaces/ws-123/connections \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Production Postgres",
    "type": "postgresql",
    "host": "db.company.com",
    "port": 5432,
    "database": "production",
    "username": "etl_user",
    "password": "secure-password"
  }'`,
  },
  {
    title: "Create Pipeline",
    description:
      "Programmatically create a visual DAG and persist it in the workspace.",
    method: "POST",
    endpoint: "/api/workspaces/{workspace_id}/pipelines",
    code: `curl -X POST https://your-domain.com/api/workspaces/ws-123/pipelines \\
  -H "Authorization: Bearer <token>" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "Daily Orders ETL",
    "mode": "batch"
  }'`,
  },
  {
    title: "Execute Pipeline",
    description:
      "Trigger an immediate pipeline execution and receive a run identifier.",
    method: "POST",
    endpoint: "/api/workspaces/{workspace_id}/pipelines/{pipeline_id}/run",
    code: `curl -X POST https://your-domain.com/api/workspaces/ws-123/pipelines/pipe-123/run \\
  -H "Authorization: Bearer <token>"`,
  },
  {
    title: "Check Run Status",
    description:
      "Poll execution status, logs, duration, and row counts.",
    method: "GET",
    endpoint: "/api/workspaces/{workspace_id}/runs/{run_id}",
    code: `curl https://your-domain.com/api/workspaces/ws-123/runs/run-123 \\
  -H "Authorization: Bearer <token>"`,
  },
];