// pages/api-reference/monitoring.js

const doc = {
  title: "Monitoring API",

  description:
    "Retrieve infrastructure health, Flink metrics, storage statistics, CDC metrics, pipeline performance, and alerts from the Seg Forge monitoring system.",

  sections: [
    {
      heading: "Overview",
      content: `
The Monitoring API provides operational visibility into your entire Seg Forge deployment, including:

• Service health and availability
• Apache Flink metrics
• Storage utilization
• Pipeline execution statistics
• CDC performance metrics
• Data freshness monitoring
• System alerts and warnings
      `,
    },

    {
      heading: "System Overview",
      content:
        "Returns the health and status of all core Seg Forge services.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/monitoring/overview`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "services": {
    "postgres": {
      "status": "healthy",
      "latency_ms": 5
    },
    "redis": {
      "status": "healthy",
      "latency_ms": 2
    },
    "flink": {
      "status": "healthy",
      "jobs_running": 3
    },
    "kafka": {
      "status": "healthy",
      "topics": 12
    },
    "minio": {
      "status": "healthy",
      "buckets": 3
    },
    "nessie": {
      "status": "healthy"
    },
    "superset": {
      "status": "warning",
      "message": "High query latency"
    }
  }
}`,
      language: "json",
    },

    {
      heading: "Flink Metrics",
      content:
        "Retrieve metrics from the Apache Flink cluster including JobManager and TaskManagers.",
    },

    {
      heading: "Flink Overview",
      code: `GET /api/monitoring/flink`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "jobmanager": {
    "uptime_ms": 8640000,
    "task_slots_total": 8,
    "task_slots_available": 5,
    "jobs_running": 3,
    "jobs_finished": 150
  },
  "taskmanagers": {
    "count": 2,
    "total_slots": 8,
    "cpu_utilization": 0.45,
    "memory_used_bytes": 2147483648,
    "memory_total_bytes": 4294967296
  }
}`,
      language: "json",
    },

    {
      heading: "Flink Job Details",
      code: `GET /api/monitoring/flink/jobs/{job_id}`,
      language: "http",
    },

    {
      heading: "Flink TaskManagers",
      code: `GET /api/monitoring/flink/taskmanagers`,
      language: "http",
    },

    {
      heading: "Flink JobManager Metrics",
      code: `GET /api/monitoring/flink/jobmanager/metrics`,
      language: "http",
    },

    {
      heading: "Storage Metrics",
      content:
        "Returns statistics about Iceberg tables and object storage usage.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/monitoring/storage`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "total_size_bytes": 53687091200,
  "file_count": 1250,
  "table_count": 45,
  "largest_tables": [
    {
      "name": "raw.events",
      "size_bytes": 12884901888
    },
    {
      "name": "raw.sessions",
      "size_bytes": 8589934592
    }
  ]
}`,
      language: "json",
    },

    {
      heading: "Pipeline Metrics",
      content:
        "Returns execution statistics for all pipelines within the deployment.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/monitoring/pipelines`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "total_runs_24h": 48,
  "success_rate": 0.96,
  "avg_duration_seconds": 245,
  "failed_pipelines": [
    "pipe-uuid-5"
  ],
  "longest_running": {
    "pipeline_id": "pipe-uuid-3",
    "name": "User Activity Stream",
    "running_since": "2026-04-28T00:00:00Z"
  }
}`,
      language: "json",
    },

    {
      heading: "Data Freshness",
      content:
        "Determine how recently tables have been updated and identify stale datasets.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/monitoring/freshness`,
      language: "http",
    },

    {
      heading: "Response",
      code: `[
  {
    "table": "curated.daily_metrics",
    "last_updated": "2026-04-29T10:12:00Z",
    "age_seconds": 180,
    "freshness": "fresh"
  },
  {
    "table": "curated.user_segments",
    "last_updated": "2026-04-28T08:00:00Z",
    "age_seconds": 94200,
    "freshness": "stale"
  }
]`,
      language: "json",
    },

    {
      heading: "CDC Metrics",
      content:
        "Returns real-time metrics for all CDC streams and Kafka consumers.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/monitoring/cdc`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "active_streams": 3,
  "total_events_24h": 2450000,
  "avg_latency_ms": 850,
  "max_kafka_lag": 45,
  "streams": [
    {
      "id": "stream-uuid-1",
      "name": "orders-cdc",
      "events_per_second": 245,
      "lag": 12
    }
  ]
}`,
      language: "json",
    },

    {
      heading: "Alerts",
      content:
        "Retrieve active warnings, errors, and informational alerts from the monitoring system.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/monitoring/alerts`,
      language: "http",
    },

    {
      heading: "Response",
      code: `[
  {
    "id": "alert-1",
    "severity": "warning",
    "service": "superset",
    "message": "Query latency above 5s threshold",
    "created_at": "2026-04-29T09:45:00Z"
  }
]`,
      language: "json",
    },

    {
      heading: "Alert Severity Levels",
      code: `info
warning
critical`,
      language: "text",
    },

    {
      heading: "Service Status Values",
      code: `healthy
warning
degraded
unhealthy`,
      language: "text",
    },

    {
      heading: "Freshness Status Values",
      code: `fresh
aging
stale`,
      language: "text",
    },

    {
      heading: "HTTP Status Codes",
      code: `200  Success
400  Invalid request
401  Unauthorized
403  Forbidden
404  Resource not found
500  Internal server error`,
      language: "text",
    },

    {
      heading: "Best Practices",
      content: `
• Poll overview metrics every 30–60 seconds for dashboards.

• Use the alerts endpoint to power notifications and incident systems.

• Monitor Kafka lag and CDC latency for real-time ingestion health.

• Track data freshness to identify stale tables and failed pipelines.

• Use Flink metrics to determine when additional TaskManagers or task slots are required.
      `,
    },
  ],
};

export default doc;