const doc = {
  title: "Dashboard",

  description:
    "The Dashboard is the home screen of your workspace and provides a real-time overview of connections, pipelines, jobs, storage, and platform health.",

  sections: [
    {
      heading: "Overview",
      content: `
The Dashboard is your workspace command center.

It provides a high-level summary of everything happening inside the currently selected workspace, including:

• Connections

• Pipelines

• CDC Streams

• Storage

• Recent Activity

• Workspace Health

The dashboard is designed to answer one question immediately:

'Is my data platform healthy right now?'
      `,
    },

    {
      heading: "Dashboard Layout",
      code: `┌─────────────────────────────────────┐
│ Overview Cards                      │
├─────────────────────────────────────┤
│ Quick Actions                       │
├─────────────────────────────────────┤
│ Recent Pipeline Runs                │
├─────────────────────────────────────┤
│ Connection Browser                  │
├─────────────────────────────────────┤
│ File Explorer                       │
├─────────────────────────────────────┤
│ Workspace Health                    │
└─────────────────────────────────────┘`,
      language: "text",
    },

    {
      heading: "Overview Cards",
      content: `
At the top of the dashboard, several overview cards display important metrics for the workspace.
      `,
    },

    {
      heading: "Connections Card",
      content: `
Shows:

• Total connections

• Healthy connections

• Warning states

• Failed connections

This helps you quickly identify connectivity issues before they impact pipelines.
      `,
    },

    {
      heading: "Pipelines Card",
      content: `
Shows:

• Total pipelines

• Running pipelines

• Scheduled pipelines

• Failed pipelines

This provides an instant view of pipeline activity within the workspace.
      `,
    },

    {
      heading: "Recent Runs Card",
      content: `
Displays the latest pipeline executions including:

• Pipeline name

• Start time

• Duration

• Current status

• Success or failure state
      `,
    },

    {
      heading: "CDC Streams Card",
      content: `
Shows:

• Number of active streams

• Events processed today

• Stream health

• Throughput metrics
      `,
    },

    {
      heading: "Storage Card",
      content: `
Displays:

• Iceberg table count

• Total storage consumed

• Namespace count

• File statistics
      `,
    },

    {
      heading: "Quick Actions",
      content: `
The dashboard provides shortcuts for frequently used tasks.
      `,
    },

    {
      heading: "Available Actions",
      content: `
New Pipeline
Open the visual pipeline builder.

New Connection
Launch the connection wizard.

New Notebook
Create an interactive notebook.

View All Jobs
Navigate to the Jobs page.

Create CDC Stream
Launch the CDC setup wizard.

Browse Catalog
Open the data catalog.
      `,
    },

    {
      heading: "Connection Metadata Browser",
      content: `
The dashboard includes a compact browser for workspace connections.

It displays:

• Connection names

• Connection types

• Table counts

• Last introspection time

• Quick links to browse schemas
      `,
    },

    {
      heading: "Metadata Browser Benefits",
      content: `
The metadata browser makes it easy to:

• Verify database connectivity.

• Discover available datasets.

• Inspect schemas.

• Jump directly into pipeline creation.
      `,
    },

    {
      heading: "File Explorer",
      content: `
The dashboard also contains a lightweight file explorer for your data catalog.

It shows:

• Namespaces

• Tables

• File counts

• Storage size

• Quick navigation links
      `,
    },

    {
      heading: "Example Catalog Structure",
      code: `analytics
├── raw
│   ├── events
│   └── sessions
├── staged
│   ├── customers
│   └── orders
└── curated
    ├── daily_metrics
    └── revenue_dashboard`,
      language: "text",
    },

    {
      heading: "Workspace Health",
      content: `
The dashboard continuously monitors workspace health and surfaces issues immediately.
      `,
    },

    {
      heading: "Health Status",
      content: `
🟢 Healthy
All services are operating normally.

🟡 Warning
Minor issues have been detected.

🔴 Error
Critical failures require attention.
      `,
    },

    {
      heading: "Health Checks",
      content: `
The health indicator monitors:

• Connection availability

• Pipeline failures

• CDC stream health

• Flink cluster availability

• Kafka connectivity

• Storage accessibility

• Job execution errors
      `,
    },

    {
      heading: "Recent Activity Feed",
      content: `
The activity feed displays recent events such as:

• Pipeline executions

• CDC stream creation

• Table creation

• User activity

• Connection updates

• Workspace changes
      `,
    },

    {
      heading: "Real-Time Updates",
      content: `
The dashboard automatically refreshes important metrics and status indicators.

This allows operators to monitor:

• Running pipelines

• Stream throughput

• Storage growth

• System health

without manually refreshing the page.
      `,
    },

    {
      heading: "Why the Dashboard Matters",
      content: `
The dashboard acts as the operational home for every workspace.

Instead of navigating between multiple tools, teams can:

• Monitor pipelines

• Inspect data

• Review health

• Launch new workloads

• Access recent activity

from a single screen.

It provides the situational awareness needed to operate modern data platforms confidently.
      `,
    },
  ],
};

export default doc;