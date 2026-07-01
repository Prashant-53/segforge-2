const doc = {
  title: "Monitoring",

  description:
    "Monitor the health, performance, and operational status of your entire Seg Forge deployment.",

  sections: [
    {
      heading: "Overview",
      content: `
The Monitoring page provides a centralized dashboard for observing infrastructure health, pipeline execution, CDC performance, and storage utilization.

It helps operators quickly identify issues and maintain platform reliability.
      `,
    },

    {
      heading: "Infrastructure Overview",
      content: `
The top section displays the health status of all core platform services.
      `,
    },

    {
      heading: "Service Status",
      code: `Service                  Status      Details
--------------------------------------------------------------
PostgreSQL               🟢 Active    Metadata database
Redis                    🟢 Active    Cache and task broker
Flink JobManager         🟢 Active    4/4 task slots available
Flink TaskManagers       🟢 Active    CPU: 45%, Memory: 62%
Kafka                    🟢 Active    12 topics, healthy
MinIO                    🟢 Active    45 GB / 100 GB used
Nessie                   🟢 Active    Catalog operational
Superset                 🟡 Warning   High query latency`,
      language: "text",
    },

    {
      heading: "Flink Metrics",
      content: `
Seg Forge continuously collects metrics from Apache Flink clusters.
      `,
    },

    {
      heading: "JobManager Metrics",
      code: `Uptime
Task Slots
Running Jobs
Completed Jobs
Failed Jobs
Checkpoint Statistics`,
      language: "text",
    },

    {
      heading: "TaskManager Metrics",
      code: `TaskManager Count
CPU Utilization
Memory Usage
Network Throughput
Backpressure Statistics`,
      language: "text",
    },

    {
      heading: "Job Details",
      content: `
Selecting a Flink job displays:

• Job status

• Execution duration

• Task distribution

• Checkpoint history

• Exception logs

• Throughput metrics
      `,
    },

    {
      heading: "Storage Metrics",
      content: `
Storage monitoring provides visibility into lakehouse growth and storage consumption.
      `,
    },

    {
      heading: "Storage Statistics",
      code: `Metric              Description
------------------------------------------------
Total Size          Aggregate data size
File Count          Number of Parquet files
Table Count         Number of Iceberg tables
Largest Tables      Top tables by size
Growth Rate         Storage growth over time`,
      language: "text",
    },

    {
      heading: "Pipeline Health",
      content: `
The monitoring dashboard tracks the health of pipeline execution across the workspace.
      `,
    },

    {
      heading: "Pipeline Metrics",
      code: `Metric                  Description
----------------------------------------------------
Total Runs (24h)       Pipeline executions
Success Rate           Percentage succeeded
Average Duration       Mean execution time
Failed Pipelines       Pipelines with failures
Longest Running        Active long-running jobs`,
      language: "text",
    },

    {
      heading: "Pipeline Monitoring",
      content: `
Pipeline health cards highlight:

• Recent failures

• Long-running executions

• Average duration trends

• Success percentages

• SLA violations
      `,
    },

    {
      heading: "CDC Monitoring",
      content: `
The CDC monitoring dashboard provides real-time visibility into streaming ingestion workloads.
      `,
    },

    {
      heading: "CDC Metrics",
      code: `Metric               Description
------------------------------------------------
Active Streams       Running CDC streams
Events/sec           Processing throughput
Kafka Lag            Consumer lag
Latency              End-to-end delay`,
      language: "text",
    },

    {
      heading: "CDC Dashboard",
      content: `
For each stream you can view:

• Events processed

• Throughput trends

• Consumer lag

• Last event timestamp

• Connector health
      `,
    },

    {
      heading: "Data Freshness",
      content: `
Monitor how current your datasets are.
      `,
    },

    {
      heading: "Freshness Example",
      code: `Table                     Last Updated      Status
-------------------------------------------------------------
curated.daily_metrics     2 minutes ago     🟢 Fresh
raw.events                30 seconds ago    🟢 Fresh
curated.user_segments     26 hours ago      🔴 Stale`,
      language: "text",
    },

    {
      heading: "Container Logs",
      content: `
Navigate to Container Logs to view real-time logs from platform services.
      `,
    },

    {
      heading: "Supported Services",
      code: `backend
frontend
flink-jobmanager
flink-taskmanager
kafka
debezium
postgres
redis
nessie
superset`,
      language: "text",
    },

    {
      heading: "Log Features",
      content: `
Container logs support:

• Live streaming

• Search and filtering

• Downloading log files

• Timestamp navigation

• Error highlighting
      `,
    },

    {
      heading: "Alerts",
      content: `
Seg Forge continuously monitors the platform and generates alerts when issues occur.
      `,
    },

    {
      heading: "Alert Types",
      code: `Service degradation
Pipeline failures
Storage capacity warnings
CDC lag thresholds
Checkpoint failures
Connection failures
Resource exhaustion`,
      language: "text",
    },

    {
      heading: "Notification Panel",
      content: `
Alerts appear in the Notification Panel located in the application header.

Notifications can be:

• Acknowledged

• Dismissed

• Filtered by severity

• Exported for auditing
      `,
    },

    {
      heading: "Monitoring Views",
      content: `
The monitoring page supports multiple layouts depending on your preference.
      `,
    },

    {
      heading: "View Modes",
      code: `Dashboard    Card-based overview
Grid         Compact grid layout
List         Tabular operational view`,
      language: "text",
    },

    {
      heading: "Health Indicators",
      code: `🟢 Healthy
🟡 Warning
🔴 Critical
⚪ Unknown`,
      language: "text",
    },

    {
      heading: "Operational Best Practices",
      content: `
• Monitor Flink task slot utilization.

• Track storage growth regularly.

• Configure alerts for CDC lag.

• Investigate failed pipelines immediately.

• Review checkpoint failures.

• Monitor stale datasets.

• Keep an eye on long-running jobs.

• Export logs before restarting services.
      `,
    },

    {
      heading: "Observability Architecture",
      code: `Platform Services
        ↓
Metrics Collection
        ↓
Monitoring Engine
        ↓
Dashboards & Alerts
        ↓
Operator Actions`,
      language: "text",
    },
  ],
};

export default doc;