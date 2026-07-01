// pages/user-guide/cost-quotas.js

const doc = {
  title: "Cost & Quotas",

  description:
    "Track platform costs, monitor resource consumption, and enforce usage limits across workspaces.",

  sections: [
    {
      heading: "Overview",
      content: `
Seg Forge includes built-in cost tracking and resource quota management to help teams understand platform usage, control spending, and prevent resource exhaustion.

Costs and quotas are tracked at the workspace level and provide visibility into compute, storage, and streaming resource consumption.
      `,
    },

    {
      heading: "Cost Tracking",
      content: `
Navigate to the Cost Tracking page from the sidebar to view real-time and historical resource consumption.

The dashboard provides cost insights across infrastructure, pipelines, and individual workloads.
      `,
    },

    {
      heading: "Cost Categories",
      code: `Compute      → Flink clusters, EC2 instances, task slots
Storage      → S3, MinIO, Iceberg storage
Streaming    → Kafka brokers and CDC traffic
Networking   → Data transfer and inter-service communication`,
      language: "text",
    },

    {
      heading: "Cost by Domain",
      content: `
A pie chart shows how overall platform spending is distributed across resource categories.

This helps identify the areas responsible for the largest operational costs.
      `,
    },

    {
      heading: "Cost by Pipeline",
      content: `
A bar chart displays the pipelines consuming the most resources.

Metrics include:

• Compute hours

• Data processed

• Storage generated

• Streaming throughput

This makes it easy to identify expensive workflows and optimization opportunities.
      `,
    },

    {
      heading: "Monthly Trend",
      content: `
A 30-day trend chart visualizes how platform spending changes over time.

The chart helps answer questions such as:

• Is spending increasing?

• Are new pipelines consuming additional resources?

• Has storage growth accelerated?
      `,
    },

    {
      heading: "Cost Forecasting",
      content: `
Seg Forge analyzes historical trends and projects future costs for the upcoming month.

Forecasts include:

• Expected total cost

• Fastest growing resource categories

• Recommendations for optimization

• Potential quota violations
      `,
    },

    {
      heading: "Cost Dashboard",
      code: `┌────────────────────────────────────┐
│ Cost By Domain (Pie Chart)         │
├────────────────────────────────────┤
│ Cost By Pipeline (Bar Chart)       │
├────────────────────────────────────┤
│ Monthly Trend (30-Day Timeline)    │
├────────────────────────────────────┤
│ Forecast & Recommendations         │
└────────────────────────────────────┘`,
      language: "text",
    },

    {
      heading: "Resource Quotas",
      content: `
Navigate to Cost & Governance → Quotas to define workspace resource limits.

Quotas help prevent uncontrolled growth and ensure fair resource sharing across teams.
      `,
    },

    {
      heading: "Supported Quotas",
      code: `Resource          Description                       Example
-----------------------------------------------------------------
Pipelines         Maximum active pipelines          50
Storage           Total Iceberg storage             500 GB
CDC Events        Monthly event throughput          100M events
Compute Hours     Flink task-slot hours             1,000 hours`,
      language: "text",
    },

    {
      heading: "Quota Usage Dashboard",
      content: `
Every quota displays:

• Current usage

• Configured limit

• Percentage consumed

• Usage trend

• Estimated exhaustion date
      `,
    },

    {
      heading: "Usage Visualization",
      code: `Storage Usage

█████████████░░░░░░ 65%
325 GB / 500 GB


Compute Hours

███████░░░░░░░░░░░ 35%
350 hrs / 1000 hrs`,
      language: "text",
    },

    {
      heading: "Quota Alerts",
      content: `
Seg Forge automatically notifies administrators when resource usage approaches configured limits.
      `,
    },

    {
      heading: "Alert Thresholds",
      code: `75%  → Warning Notification
90%  → Critical Alert
100% → New resource creation blocked`,
      language: "text",
    },

    {
      heading: "Behavior at 100%",
      content: `
When a quota limit is fully consumed:

• Existing pipelines continue running.

• New pipelines cannot be created.

• New CDC streams cannot be provisioned.

• Additional storage allocations are blocked.

Administrators can either increase quotas or clean up unused resources.
      `,
    },

    {
      heading: "Workspace Cost Attribution",
      content: `
Costs are tracked independently for each workspace.

Examples:

• Analytics Team

• Finance Team

• Machine Learning Team

This allows organizations to implement chargeback and showback models.
      `,
    },

    {
      heading: "Tracked Metrics",
      code: `Compute Hours
Storage Consumption
Pipeline Executions
CDC Throughput
Kafka Traffic
Table Growth
Network Transfer
EC2 Usage`,
      language: "text",
    },

    {
      heading: "Optimization Recommendations",
      content: `
Seg Forge continuously analyzes workloads and recommends ways to reduce costs.
      `,
    },

    {
      heading: "Best Practices",
      code: `✓ Partition Iceberg tables by date
✓ Select only required columns
✓ Stop idle streaming pipelines
✓ Auto-pause EC2 clusters
✓ Compact small Iceberg files
✓ Remove unused datasets
✓ Archive inactive pipelines
✓ Use the Smart Router for CDC workloads`,
      language: "text",
    },

    {
      heading: "Storage Optimization",
      content: `
Large numbers of small Parquet files increase metadata overhead and query latency.

Periodically compact Iceberg tables to:

• Reduce file counts

• Improve query performance

• Lower object storage API costs
      `,
    },

    {
      heading: "Compute Optimization",
      content: `
To reduce compute costs:

• Lower Flink parallelism for small workloads.

• Schedule heavy pipelines during off-peak hours.

• Pause unused EC2 clusters.

• Avoid continuously running streaming jobs unless necessary.
      `,
    },

    {
      heading: "Governance Recommendations",
      content: `
Organizations should:

• Define workspace quotas before onboarding teams.

• Monitor cost trends monthly.

• Configure alerts for critical resources.

• Review expensive pipelines regularly.

• Enforce resource ownership and accountability.
      `,
    },

    {
      heading: "Next Steps",
      content: `
After configuring cost tracking and quotas, continue with:

• System Architecture

• Monitoring

• Users & Access Control

• Deployment Options
      `,
    },
  ],
};

export default doc;