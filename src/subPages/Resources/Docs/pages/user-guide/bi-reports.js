const doc = {
  title: "BI & Reports",

  description:
    "Create dashboards, build reports, and explore data visually using Apache Superset integrated directly into Seg Forge.",

  sections: [
    {
      heading: "Overview",
      content: `
Seg Forge integrates Apache Superset to provide business intelligence capabilities directly within the platform.

Users can create interactive dashboards, build visual reports, run SQL queries, and share analytics without leaving the Seg Forge workspace.
      `,
    },

    {
      heading: "How It Works",
      content: `
Superset connects to Iceberg tables through Trino or the Flink SQL Gateway and provides a complete analytics experience.
      `,
    },

    {
      heading: "Capabilities",
      code: `• Drag-and-drop chart builder
• Dashboard creation and sharing
• SQL Lab for ad-hoc queries
• Scheduled report delivery
• Interactive filters and drill-downs`,
      language: "text",
    },

    {
      heading: "Architecture",
      code: `Iceberg Tables
       ↓
Trino / Flink SQL
       ↓
Apache Superset
       ↓
Dashboards & Reports`,
      language: "text",
    },

    {
      heading: "Accessing BI",
      content: `
Navigate to BI & Reports from the sidebar to access analytics capabilities.

The page allows you to:

• Browse dashboards

• Create new dashboards

• Open SQL Lab

• Manage reports

• View shared analytics
      `,
    },

    {
      heading: "Embedded Experience",
      content: `
Superset dashboards render directly inside the Seg Forge interface using embedded dashboards.

Users never need to leave the platform to analyze data.
      `,
    },

    {
      heading: "Creating a Dashboard",
      content: `
To create a new dashboard:

1. Click + New Dashboard.

2. Open the Superset dashboard editor.

3. Add charts and visualizations.

4. Arrange components on the canvas.

5. Save the dashboard.
      `,
    },

    {
      heading: "Dashboard Workflow",
      code: `Select Dataset
       ↓
Choose Chart Type
       ↓
Configure Metrics
       ↓
Add Filters
       ↓
Arrange Dashboard
       ↓
Save`,
      language: "text",
    },

    {
      heading: "Adding Charts",
      content: `
Every dashboard is composed of one or more charts.

Charts are built by selecting:

• Dataset

• Metrics

• Dimensions

• Time filters

• Visualization type
      `,
    },

    {
      heading: "Available Chart Types",
      code: `Category              Charts
---------------------------------------------------
Basic                 Table, Bar, Line, Pie, Scatter
Time Series           Line, Area, Calendar Heatmap
Distribution          Histogram, Box Plot, Treemap
Geographic            Maps, Choropleth, Deck.gl
Advanced              Pivot, Funnel, Sankey, Chord`,
      language: "text",
    },

    {
      heading: "Connecting Data",
      content: `
Superset datasets are automatically generated from your Iceberg tables.

Whenever a pipeline or CDC stream creates or updates a table, the dataset becomes immediately available for reporting.
      `,
    },

    {
      heading: "Automatic Synchronization",
      content: `
Seg Forge automatically synchronizes:

• Namespaces

• Tables

• Schemas

• Column definitions

• Metadata
      `,
    },

    {
      heading: "No Manual Configuration",
      content: `
Unlike traditional BI tools, datasets do not require manual registration.

Tables automatically appear in Superset as soon as they are created.
      `,
    },

    {
      heading: "Dashboard Sharing",
      content: `
Dashboards can be shared with workspace members and external systems.
      `,
    },

    {
      heading: "Sharing Options",
      code: `Workspace Sharing
Guest Tokens
Embedded Dashboards
Public Links
Email Reports`,
      language: "text",
    },

    {
      heading: "Permissions",
      content: `
Dashboard access respects workspace permissions and RBAC settings.

Users only see dashboards and datasets they are authorized to access.
      `,
    },

    {
      heading: "SQL Lab",
      content: `
SQL Lab provides an interactive environment for querying Iceberg tables directly.
      `,
    },

    {
      heading: "SQL Lab Features",
      code: `• SQL editor with syntax highlighting
• Query history
• Saved queries
• Export results
• Chart creation from query results
• Query execution statistics`,
      language: "text",
    },

    {
      heading: "Typical Workflow",
      code: `Write SQL
      ↓
Run Query
      ↓
Preview Results
      ↓
Save Query
      ↓
Create Chart
      ↓
Add to Dashboard`,
      language: "text",
    },

    {
      heading: "Report Scheduling",
      content: `
Dashboards and charts can be delivered automatically.
      `,
    },

    {
      heading: "Scheduled Reports",
      code: `Daily Reports
Weekly Reports
Monthly Reports
Custom Cron Schedules`,
      language: "text",
    },

    {
      heading: "Delivery Methods",
      content: `
Reports can be delivered through:

• Email

• Dashboard snapshots

• PDF exports

• Embedded links
      `,
    },

    {
      heading: "Exporting Data",
      content: `
Dashboard and query results can be exported in several formats.
      `,
    },

    {
      heading: "Export Formats",
      code: `CSV
Excel
JSON
PDF
PNG`,
      language: "text",
    },

    {
      heading: "Dataset Management",
      content: `
The Datasets page allows users to:

• Browse available datasets

• Refresh metadata

• Edit descriptions

• Manage ownership

• Review usage statistics
      `,
    },

    {
      heading: "Dashboard Components",
      code: `Charts
Filters
Tabs
Markdown Widgets
KPIs
Embedded Visualizations`,
      language: "text",
    },

    {
      heading: "Common Use Cases",
      content: `
• Executive dashboards

• Operational monitoring

• Sales reporting

• Customer analytics

• Real-time CDC dashboards

• Financial reporting

• Machine learning metrics
      `,
    },

    {
      heading: "Best Practices",
      content: `
• Build curated tables before creating dashboards.

• Use time-based partitions for reporting tables.

• Limit dashboard queries to necessary data.

• Reuse saved datasets and queries.

• Organize dashboards by business domain.

• Schedule important reports for automated delivery.

• Use filters to reduce query costs and improve performance.
      `,
    },
  ],
};

export default doc;