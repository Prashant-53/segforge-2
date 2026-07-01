// pages/demo/product-walkthrough.js

const doc = {
  title: "Product Walkthrough",

  description:
    "A guided tour through the core capabilities of Seg Forge. Complete this walkthrough in approximately 20 minutes to understand the platform end-to-end.",

  sections: [
    {
      heading: "Overview",
      content: `
This walkthrough demonstrates the complete Seg Forge workflow—from creating a workspace and building pipelines to setting up CDC and monitoring production workloads.

Estimated time to complete: 20 minutes.
      `,
    },

    {
      heading: "What You'll Build",
      code: `PostgreSQL
      ↓
Visual ETL Pipeline
      ↓
Apache Iceberg
      ↓
Notebook Analytics
      ↓
Scheduling & Monitoring`,
      language: "text",
    },

    {
      heading: "Step 1: Create a Workspace",
      content: `
Open Seg Forge and sign in with your account.

After login, you'll land on the Workspaces page.
      `,
    },

    {
      heading: "Create a Workspace",
      code: `1. Click + New Workspace
2. Enter Name: Demo Workspace
3. Click Create`,
      language: "text",
    },

    {
      heading: "What Happens",
      code: `✓ Workspace created
✓ Nessie branch provisioned
✓ Iceberg namespace created
✓ Resource quotas initialized`,
      language: "text",
    },

    {
      heading: "Step 2: Add a Database Connection",
      content: `
Next, connect to PostgreSQL.
      `,
    },

    {
      heading: "Create PostgreSQL Connection",
      code: `Name: Demo Postgres
Host: postgres
Port: 5432
Database: seg_forge
Username: postgres
Password: postgres`,
      language: "text",
    },

    {
      heading: "Test Connection",
      code: `Click:
Test Connection
      ↓
✅ Connected`,
      language: "text",
    },

    {
      heading: "Save Connection",
      content: `
After verification, click Save.

Your connection will appear in the Connections page with a healthy status indicator.
      `,
    },

    {
      heading: "Step 3: Build Your First Pipeline",
      content: `
Let's build a simple ETL pipeline.

The pipeline will:

• Read data from PostgreSQL

• Filter rows

• Aggregate results

• Write into an Iceberg table
      `,
    },

    {
      heading: "Pipeline Architecture",
      code: `Database Source
       ↓
Filter (amount > 100)
       ↓
Aggregate
       ↓
Iceberg Table`,
      language: "text",
    },

    {
      heading: "Add Source Node",
      code: `Connection: Demo Postgres
Schema: public
Table: orders`,
      language: "text",
    },

    {
      heading: "Add Filter Node",
      code: `Condition:
amount > 100`,
      language: "sql",
    },

    {
      heading: "Add Aggregate Node",
      code: `Group By:
status

Functions:
COUNT(*) AS order_count
SUM(amount) AS total_amount`,
      language: "sql",
    },

    {
      heading: "Add Iceberg Destination",
      code: `Namespace: demo
Table Name: order_summary
Write Mode: Overwrite`,
      language: "text",
    },

    {
      heading: "Final Pipeline",
      code: `PostgreSQL Orders
        ↓
     Filter
(amount > 100)
        ↓
    Aggregate
        ↓
Iceberg Table
(order_summary)`,
      language: "text",
    },

    {
      heading: "Step 4: Run the Pipeline",
      content: `
Set the pipeline execution mode to Batch and click Run.
      `,
    },

    {
      heading: "Execution Logs",
      code: `[10:15:01] Validating pipeline...
[10:15:01] Generating SQL...
[10:15:02] Creating source table...
[10:15:02] Creating filter view...
[10:15:03] Creating target table...
[10:15:03] Submitting job...
[10:15:08] ✅ Job completed.`,
      language: "text",
    },

    {
      heading: "Generated SQL",
      code: `INSERT INTO nessie.demo.order_summary
SELECT
  status,
  COUNT(*) AS order_count,
  SUM(amount) AS total_amount
FROM filtered_orders
GROUP BY status;`,
      language: "sql",
    },

    {
      heading: "Pipeline Results",
      content: `
After execution completes:

• SQL tab shows generated Flink SQL.

• Preview tab displays the resulting data.

• Logs tab contains execution details.
      `,
    },

    {
      heading: "Step 5: Browse the Catalog",
      content: `
Verify that the Iceberg table was created successfully.
      `,
    },

    {
      heading: "Navigate to the Table",
      code: `Catalogs
└── demo
    └── order_summary`,
      language: "text",
    },

    {
      heading: "Available Information",
      code: `✓ Metadata
✓ Row count
✓ File count
✓ Table size
✓ Column definitions
✓ Data preview`,
      language: "text",
    },

    {
      heading: "Step 6: Create a CDC Stream",
      content: `
Now let's enable real-time synchronization.
      `,
    },

    {
      heading: "CDC Configuration",
      code: `Source Connection: Demo Postgres
Table: orders
Target Namespace: demo`,
      language: "text",
    },

    {
      heading: "CDC Lifecycle",
      code: `Create Stream
      ↓
Snapshot Phase
      ↓
CDC Phase
      ↓
Continuous Synchronization`,
      language: "text",
    },

    {
      heading: "Test Real-Time Changes",
      code: `INSERT INTO orders (
  customer_id,
  amount,
  status
)
VALUES (
  999,
  250.00,
  'new'
);`,
      language: "sql",
    },

    {
      heading: "Expected Result",
      code: `✓ Event counter increases
✓ CDC metrics update
✓ Iceberg table refreshed`,
      language: "text",
    },

    {
      heading: "Step 7: Query Using a Notebook",
      content: `
Notebooks provide an interactive environment for exploring your data.
      `,
    },

    {
      heading: "Query the Results",
      code: `SELECT *
FROM nessie.demo.order_summary
ORDER BY total_amount DESC;`,
      language: "sql",
    },

    {
      heading: "Compute Average Order Value",
      code: `SELECT
  status,
  order_count,
  total_amount,
  total_amount / order_count
    AS avg_order_value
FROM nessie.demo.order_summary;`,
      language: "sql",
    },

    {
      heading: "Notebook Features",
      code: `✓ Interactive SQL
✓ Saved queries
✓ Export results
✓ Visualizations
✓ Schema browser`,
      language: "text",
    },

    {
      heading: "Step 8: Schedule and Monitor",
      content: `
Finally, automate and monitor the pipeline.
      `,
    },

    {
      heading: "Create a Schedule",
      code: `Cron Expression:
0 */6 * * *

Meaning:
Run every 6 hours.`,
      language: "text",
    },

    {
      heading: "Monitoring Dashboard",
      code: `✓ Service Health
✓ Flink Metrics
✓ Pipeline Status
✓ CDC Metrics
✓ Storage Usage
✓ Job History`,
      language: "text",
    },

    {
      heading: "Jobs Page",
      code: `Pipeline Name
Status
Start Time
Duration
Next Run Time
Execution Logs`,
      language: "text",
    },

    {
      heading: "What You Accomplished",
      code: `1. Created a workspace
2. Added a PostgreSQL connection
3. Built a visual ETL pipeline
4. Executed the pipeline
5. Created an Iceberg table
6. Configured CDC
7. Queried data with notebooks
8. Scheduled and monitored workloads`,
      language: "text",
    },

    {
      heading: "Next Steps",
      code: `Explore Transformation Nodes
      ↓
Connect Additional Data Sources
      ↓
Build Multi-Step Workflows
      ↓
Train ML Models
      ↓
Deploy To Production`,
      language: "text",
    },

    {
      heading: "Continue Learning",
      content: `
Congratulations—you've completed the Seg Forge product walkthrough.

You now understand the complete lifecycle of building, executing, monitoring, and automating data workloads on the platform.
      `,
    },
  ],
};

export default doc;