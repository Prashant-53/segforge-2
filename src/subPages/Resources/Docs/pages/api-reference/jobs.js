// pages/api-reference/jobs.js

const doc = {
  title: "Jobs API",

  description:
    "Manage pipeline runs, execution history, statistics, and CDC job execution through the Seg Forge REST API.",

  sections: [
    {
      heading: "Overview",
      content: `
The Jobs API provides access to:

• Pipeline execution history
• Run logs and metadata
• Execution statistics
• CDC job management
• Monitoring and operational tooling
      `,
    },

    {
      heading: "List Runs",
      content:
        "Returns pipeline execution history for the current workspace.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/runs`,
      language: "http",
    },

    {
      heading: "Query Parameters",
      code: `pipeline_id   Filter by pipeline ID
status        running | succeeded | failed
skip          Pagination offset (default: 0)
limit         Page size (default: 50)`,
      language: "text",
    },

    {
      heading: "Response",
      code: `[
  {
    "id": "run-uuid-1",
    "pipeline_id": "pipe-uuid-1",
    "pipeline_name": "Daily Orders ETL",
    "status": "succeeded",
    "started_at": "2026-04-29T02:00:00Z",
    "finished_at": "2026-04-29T02:05:30Z",
    "duration_seconds": 330,
    "rows_written": 15420,
    "triggered_by": "schedule"
  }
]`,
      language: "json",
    },

    {
      heading: "Get Run Details",
      content:
        "Returns complete information about a pipeline execution including logs and Flink job metadata.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/runs/{run_id}`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "id": "run-uuid-1",
  "pipeline_id": "pipe-uuid-1",
  "status": "succeeded",
  "started_at": "2026-04-29T02:00:00Z",
  "finished_at": "2026-04-29T02:05:30Z",
  "duration_seconds": 330,
  "rows_written": 15420,
  "flink_job_id": "abc123def456",
  "logs": [
    {
      "timestamp": "2026-04-29T02:00:01Z",
      "level": "INFO",
      "message": "Generating SQL..."
    },
    {
      "timestamp": "2026-04-29T02:00:02Z",
      "level": "INFO",
      "message": "Submitting to Flink..."
    },
    {
      "timestamp": "2026-04-29T02:05:30Z",
      "level": "INFO",
      "message": "Completed. 15420 rows."
    }
  ]
}`,
      language: "json",
    },

    {
      heading: "Run Status Values",
      code: `draft
running
succeeded
failed
streaming
stopped
scheduled`,
      language: "text",
    },

    {
      heading: "Get Run Statistics",
      content:
        "Returns aggregated statistics across all pipeline executions.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/runs/stats`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "total_runs": 1250,
  "succeeded": 1200,
  "failed": 50,
  "success_rate": 0.96,
  "avg_duration_seconds": 245,
  "runs_today": 12
}`,
      language: "json",
    },

    {
      heading: "Statistics Fields",
      code: `total_runs             Total pipeline executions
succeeded             Successful executions
failed                Failed executions
success_rate          Success percentage
avg_duration_seconds  Average execution time
runs_today            Runs executed today`,
      language: "text",
    },

    {
      heading: "CDC Job Management",
      content:
        "Manage long-running CDC synchronization jobs.",
    },

    {
      heading: "List CDC Jobs",
      code: `GET /api/workspaces/{workspace_id}/cdc/jobs`,
      language: "http",
    },

    {
      heading: "Response",
      code: `[
  {
    "id": "cdc-job-1",
    "name": "orders-cdc",
    "status": "running",
    "events_processed": 1520340,
    "events_per_second": 245,
    "latency_ms": 850,
    "started_at": "2026-04-29T10:00:00Z"
  }
]`,
      language: "json",
    },

    {
      heading: "Start CDC Job",
      content:
        "Starts or resumes a paused CDC job.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/cdc/jobs/{job_id}/start`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "status": "running",
  "message": "CDC job started successfully"
}`,
      language: "json",
    },

    {
      heading: "Stop CDC Job",
      content:
        "Gracefully stops a running CDC job.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/cdc/jobs/{job_id}/stop`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "status": "stopped",
  "message": "CDC job stopped successfully"
}`,
      language: "json",
    },

    {
      heading: "Run CDC Job Now",
      content:
        "Triggers an immediate execution of a CDC job outside its normal schedule.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/cdc/jobs/{job_id}/run-now`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "status": "running",
  "job_id": "cdc-job-1",
  "started_at": "2026-04-29T10:15:00Z"
}`,
      language: "json",
    },

    {
      heading: "Triggered By Values",
      code: `manual
schedule
dependency
retry
api`,
      language: "text",
    },

    {
      heading: "Log Levels",
      code: `DEBUG
INFO
WARNING
ERROR
CRITICAL`,
      language: "text",
    },

    {
      heading: "HTTP Status Codes",
      code: `200  Success
201  Created
202  Accepted
204  No Content
400  Validation Error
401  Unauthorized
403  Forbidden
404  Run or Job Not Found
409  Job Already Running
500  Internal Server Error`,
      language: "text",
    },

    {
      heading: "Example Error Response",
      code: `{
  "detail": "Job is already running"
}`,
      language: "json",
    },

    {
      heading: "Best Practices",
      content: `
• Filter runs by pipeline when displaying execution history.

• Use pagination when querying large workspaces.

• Monitor failed runs and inspect execution logs.

• Poll run details for long-running batch jobs.

• Use CDC statistics endpoints for operational dashboards and alerting.
      `,
    },
  ],
};

export default doc;