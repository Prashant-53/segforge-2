const doc = {
  title: "Data Lineage",

  description:
    "Track how data moves through pipelines, tables, notebooks, and dashboards with end-to-end lineage visibility.",

  sections: [
    {
      heading: "Overview",
      content: `
Seg Forge automatically tracks how data flows through your platform—from source systems to pipelines, lakehouse tables, and downstream analytics tools.

Lineage is captured at both the dataset and column level, helping teams understand dependencies, troubleshoot issues, and document data movement.
      `,
    },

    {
      heading: "Lineage Graph",
      code: `┌──────────┐     ┌─────────────┐     ┌────────────────┐
│PostgreSQL│────►│ ETL Pipeline│────►│ curated.metrics │
│  orders  │     │  daily-agg  │     │                │
└──────────┘     └─────────────┘     └────────────────┘
                       │
┌──────────┐           │          ┌────────────────┐
│PostgreSQL│───────────┘───────► │ Superset       │
│ customers│                     │ Dashboard      │
└──────────┘                     └────────────────┘`,
      language: "text",
    },

    {
      heading: "What Is Tracked",
      content: `
Seg Forge captures lineage information for every major platform asset.
      `,
    },

    {
      heading: "Tracked Entities",
      code: `Entity         Information
---------------------------------------------
Datasets       Tables, files, Kafka topics
Jobs           Pipelines, CDC streams, notebooks
Columns        Source-to-target column mapping
Runs           Executions, timestamps, row counts`,
      language: "text",
    },

    {
      heading: "Dataset Lineage",
      content: `
Dataset lineage shows how tables and files are connected throughout the platform.

You can see:

• Upstream dependencies

• Downstream consumers

• Pipelines that created a dataset

• Dashboards using a table

• CDC streams feeding a table
      `,
    },

    {
      heading: "Column-Level Lineage",
      content: `
Seg Forge tracks transformations at the individual column level.

This allows you to understand exactly how every field in a table was produced.
      `,
    },

    {
      heading: "Example Column Lineage",
      code: `Source: orders                     Target: daily_metrics

order_date  ─────────────────────► date_key
amount      ───────┐
quantity    ───┐   │
               │   ├─────────────► total_revenue
               │   │
               └─────────────────► avg_quantity
amount      ─────────────────────► total_orders`,
      language: "text",
    },

    {
      heading: "Benefits of Column Lineage",
      content: `
• Understand transformation logic

• Debug incorrect metrics

• Identify affected downstream systems

• Simplify data documentation

• Support regulatory compliance
      `,
    },

    {
      heading: "Browsing Lineage",
      content: `
The Lineage page provides several ways to explore dependencies.
      `,
    },

    {
      heading: "Browse by Namespace",
      content: `
Filter the graph by namespace to focus on a specific domain such as:

• raw

• staged

• curated

• features
      `,
    },

    {
      heading: "Browse by Dataset",
      content: `
Search for a table or dataset and immediately see:

• Upstream sources

• Downstream consumers

• Pipelines involved

• Related dashboards
      `,
    },

    {
      heading: "Browse by Job",
      content: `
Selecting a pipeline, notebook, or CDC stream displays:

• Input datasets

• Output datasets

• Execution history

• Runtime statistics
      `,
    },

    {
      heading: "Lineage Views",
      code: `View                  Description
------------------------------------------------
Dataset Graph         Table-level dependencies
Column Graph          Column transformations
Execution History     Historical runs
Impact Analysis       Downstream dependencies`,
      language: "text",
    },

    {
      heading: "OpenLineage Integration",
      content: `
Seg Forge generates OpenLineage events for every pipeline execution.

These events can be:

• Stored internally

• Sent to Marquez

• Published to DataHub

• Integrated with OpenMetadata
      `,
    },

    {
      heading: "Generated Events",
      code: `Pipeline Started
Pipeline Completed
Dataset Created
Dataset Updated
Schema Changed
Column Mapping Updated`,
      language: "text",
    },

    {
      heading: "Impact Analysis",
      content: `
Lineage helps answer questions such as:

"If I change this table, what breaks?"

Seg Forge automatically calculates downstream dependencies and highlights affected assets.
      `,
    },

    {
      heading: "Example",
      code: `orders
   ↓
daily_orders
   ↓
daily_metrics
   ↓
executive_dashboard

Changing 'orders'
affects everything downstream.`,
      language: "text",
    },

    {
      heading: "Root Cause Analysis",
      content: `
When a report or dashboard displays incorrect values, lineage allows teams to trace the issue back through:

Dashboard
→ Curated Table
→ Pipeline
→ Source System
      `,
    },

    {
      heading: "Compliance & Governance",
      content: `
Lineage is especially useful for governance initiatives.

Examples:

• Find all systems using PII.

• Document data movement.

• Prove data provenance.

• Understand who depends on a dataset.
      `,
    },

    {
      heading: "Documentation",
      content: `
Seg Forge automatically generates documentation from lineage metadata.

Every dataset can display:

• Description

• Owners

• Upstream systems

• Downstream consumers

• Last updated information
      `,
    },

    {
      heading: "Lineage Metadata",
      code: `Dataset Name
Description
Owner
Created By
Last Updated
Upstream Assets
Downstream Assets
Related Pipelines`,
      language: "text",
    },

    {
      heading: "Common Use Cases",
      content: `
✅ Impact analysis before schema changes

✅ Root-cause analysis for broken reports

✅ Regulatory and audit requirements

✅ Data documentation and onboarding

✅ Understanding pipeline dependencies

✅ Tracking PII movement across systems
      `,
    },

    {
      heading: "Best Practices",
      content: `
• Document datasets with descriptions.

• Use meaningful pipeline names.

• Organize data into namespaces.

• Monitor lineage after schema changes.

• Review downstream dependencies before deleting tables.

• Use column-level lineage when debugging metrics.
      `,
    },
  ],
};

export default doc;