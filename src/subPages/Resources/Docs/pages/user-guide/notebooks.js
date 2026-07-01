const doc = {
  title: "Notebooks",

  description:
    "Interactive environments for writing queries, exploring data, and prototyping transformations in SegForge.",

  sections: [
    {
      heading: "Overview",
      content: `
Seg Forge notebooks provide an interactive workspace for data exploration, SQL development, and analytical workflows.

Notebooks combine the flexibility of code with the convenience of an integrated data platform. They support SQL, Python, and Markdown cells and execute directly against your workspace data.
      `,
    },

    {
      heading: "Notebook Interface",
      code: `┌─────────────────────────────────────────────────────────────────┐
│ Toolbar: [Notebook Name] │ Mode: [Batch] │ Engine: [FlinkSQL]  │
│          Save │ Run All │ + Cell │ Clear                        │
├────────────────────────────────────┬────────────────────────────┤
│                                    │ Schema Browser             │
│  SQL Cell                          │ workspace_catalog          │
│  SELECT * FROM orders              │ ├── raw                    │
│  LIMIT 10;                         │ └── curated                │
│                                    │                            │
│  Results Table                     │ Saved Queries              │
│                                    │ Cluster Selector           │
└────────────────────────────────────┴────────────────────────────┘`,
      language: "text",
    },

    {
      heading: "Cell Types",
      content: `
SegForge notebooks support multiple cell types.
      `,
    },

    {
      heading: "SQL Cells",
      content: `
SQL cells execute Flink SQL statements directly against your Iceberg tables.

Use cases:

• Query tables

• Create views

• Transform data

• Insert or update data

• Explore datasets
      `,
      code: `SELECT *
FROM curated.daily_metrics
LIMIT 10;`,
      language: "sql",
    },

    {
      heading: "Python Cells",
      content: `
Python cells execute code inside a PyFlink environment.

Use cases:

• Register Python UDFs

• Process query results

• Build custom transformations

• Prototype machine learning workflows
      `,
      code: `df = table.to_pandas()
print(df.head())`,
      language: "python",
    },

    {
      heading: "Markdown Cells",
      content: `
Markdown cells allow you to document your work.

Use cases:

• Notes

• Documentation

• Headers

• Explanations

• Sharing analysis with teammates
      `,
    },

    {
      heading: "Execution Engines",
      content: `
SegForge supports multiple execution engines depending on your workload.
      `,
    },

    {
      heading: "Flink SQL",
      content: `
The default notebook engine.

Queries execute through the Flink SQL Gateway and support:

• Batch execution

• Streaming execution

• Iceberg integration

• DDL and DML operations
      `,
    },

    {
      heading: "PyFlink",
      content: `
Python execution environment integrated with Apache Flink.

Supports:

• Python UDFs

• Data transformations

• Interactive development
      `,
    },

    {
      heading: "Trino",
      content: `
Interactive analytics engine optimized for ad-hoc querying across large datasets.

Available when a Trino cluster is configured.
      `,
    },

    {
      heading: "Execution Modes",
      content: `
Notebook queries can run in two modes:

• Batch

• Streaming
      `,
    },

    {
      heading: "Batch Mode",
      content: `
Queries execute and return a finite result set.

Ideal for:

• Data exploration

• Reports

• Analytical queries
      `,
    },

    {
      heading: "Streaming Mode",
      content: `
Queries execute continuously and update as new data arrives.

Ideal for:

• Live dashboards

• Real-time monitoring

• Event analytics
      `,
    },

    {
      heading: "Running Cells",
      content: `
There are two ways to execute notebook cells.

Run Single Cell:

• Click the ▶ button.

• Press Shift + Enter.

Run All Cells:

• Click Run All in the toolbar.
      `,
    },

    {
      heading: "Cell Execution Flow",
      code: `Notebook Cell
      │
      ▼
Validate Query
      │
      ▼
Submit to Engine
      │
      ▼
Execute
      │
      ▼
Render Results`,
      language: "text",
    },

    {
      heading: "Results",
      content: `
Query results appear directly below the cell.

Features include:

• Pagination

• Sorting

• Copy to clipboard

• Export to CSV

• Basic visualizations
      `,
    },

    {
      heading: "Schema Browser",
      content: `
The Schema Browser displays all tables available inside your workspace catalog.

Features:

• Namespace navigation

• Table browsing

• Column inspection

• Data type information
      `,
    },

    {
      heading: "Using the Schema Browser",
      content: `
Expand a namespace to view tables.

Click a table to inspect columns.

Double-click a table name to automatically insert:

SELECT * FROM table_name;
      `,
      code: `SELECT *
FROM curated.daily_metrics
LIMIT 100;`,
      language: "sql",
    },

    {
      heading: "Saved Queries",
      content: `
Frequently used queries can be saved for later use.

To save a query:

1. Write the query.

2. Click Save Query.

3. Provide a name.

4. Access it later from the sidebar.
      `,
    },

    {
      heading: "Working with Results",
      content: `
The results grid supports:

• Sorting

• Filtering

• Copying

• Exporting

• Basic charting
      `,
    },

    {
      heading: "Visualizations",
      content: `
Numeric query results can be visualized using built-in charts.

Supported visualizations:

• Line Chart

• Bar Chart

• Pie Chart

• Area Chart
      `,
    },

    {
      heading: "Notebook Management",
      content: `
Notebooks are stored within a workspace and can be managed directly from the toolbar.
      `,
    },

    {
      heading: "Save",
      content: `
Press Ctrl + S or click Save to persist notebook changes.
      `,
    },

    {
      heading: "Rename",
      content: `
Click the notebook title in the toolbar to rename it.
      `,
    },

    {
      heading: "Duplicate",
      content: `
Create a copy of an existing notebook including all cells and outputs.
      `,
    },

    {
      heading: "Sharing",
      content: `
Notebooks are workspace-scoped.

All workspace members can access notebooks according to their permissions.
      `,
    },

    {
      heading: "Multi-Statement SQL",
      content: `
SQL cells support multiple statements separated by semicolons.
      `,
      code: `CREATE VIEW recent_orders AS
SELECT *
FROM orders
WHERE created_at > CURRENT_DATE - INTERVAL '7' DAY;

SELECT *
FROM recent_orders;`,
      language: "sql",
    },

    {
      heading: "Notebook Use Cases",
      content: `
Typical notebook workflows include:

• Ad-hoc analytics

• Data exploration

• Data validation

• Feature engineering

• Debugging pipelines

• Building dashboards

• Prototyping SQL transformations
      `,
    },

    {
      heading: "Tips",
      content: `
• Use LIMIT during exploration.

• Save frequently used queries.

• Document workflows with Markdown cells.

• Use the schema browser instead of manually typing table names.

• Prefer Batch mode for exploration.

• Use Streaming mode for live analytics.

• Organize notebooks into reusable analytical workflows.
      `,
    },

    {
      heading: "Keyboard Shortcuts",
      content: `
Shift + Enter
Run current cell.

Ctrl + Enter
Run cell without moving.

Ctrl + S
Save notebook.

A
Insert cell above.

B
Insert cell below.

DD
Delete current cell.
      `,
    },
  ],
};

export default doc;