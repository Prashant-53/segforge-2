// pages/architecture/pipeline-execution-engine.js

const doc = {
  title: "Pipeline Execution Engine",

  description:
    "Understand how Seg Forge converts visual pipelines into executable Flink SQL and orchestrates their execution.",

  sections: [
    {
      heading: "Overview",
      content: `
When you click Run on a visual pipeline, Seg Forge converts the pipeline's DAG into executable Flink SQL and submits it to Apache Flink.

The execution engine is responsible for:

• Dependency resolution

• SQL generation

• Job submission

• Monitoring

• Error handling

• Result tracking
      `,
    },

    {
      heading: "Compilation Pipeline",
      code: `Visual DAG
      ↓
Topological Sort
      ↓
SQL Generation
      ↓
Flink Submission
      ↓
Monitoring`,
      language: "text",
    },

    {
      heading: "Step 1: Topological Sort",
      content: `
A visual pipeline is represented internally as a Directed Acyclic Graph (DAG).

Before execution, the graph is sorted into dependency order so that every node is executed only after all of its upstream dependencies are available.
      `,
    },

    {
      heading: "Example DAG",
      code: `Source
   ↓
Filter
   ↓
Join ← Lookup Source
   ↓
Aggregate
   ↓
Target`,
      language: "text",
    },

    {
      heading: "Execution Order",
      code: `1. Source
2. Lookup Source
3. Filter
4. Join
5. Aggregate
6. Target`,
      language: "text",
    },

    {
      heading: "Step 2: SQL Generation",
      content: `
After sorting the graph, each node generates one or more Flink SQL statements.

Intermediate transformations become temporary views, while source and target nodes become Flink tables.
      `,
    },

    {
      heading: "Node Translation",
      code: `Node Type      Generated SQL
--------------------------------------------------------
Source         CREATE TABLE
Filter         CREATE TEMPORARY VIEW
Join           CREATE TEMPORARY VIEW
Aggregate      CREATE TEMPORARY VIEW
Target         CREATE TABLE + INSERT INTO`,
      language: "text",
    },

    {
      heading: "SQL Generation Flow",
      code: `Node Configuration
        ↓
Schema Resolution
        ↓
SQL Templates
        ↓
Generated Flink SQL`,
      language: "text",
    },

    {
      heading: "Step 3: Flink Submission",
      content: `
The generated SQL statements are submitted to the Flink SQL Gateway running on port 8083.

Statements are executed in dependency order.
      `,
    },

    {
      heading: "Submission Steps",
      code: `1. Open Session
2. Execute CREATE TABLE statements
3. Execute CREATE VIEW statements
4. Execute INSERT statement
5. Monitor Job`,
      language: "text",
    },

    {
      heading: "Flink SQL Gateway",
      code: `Port     8083
Protocol REST API`,
      language: "text",
    },

    {
      heading: "Step 4: Execution",
      content: `
After submission, Apache Flink executes the pipeline either as a batch job or a continuously running streaming job.
      `,
    },

    {
      heading: "Execution Modes",
      code: `Batch
• Finite execution
• Processes all data
• Terminates automatically

Streaming
• Continuous execution
• Processes incoming events
• Runs until stopped`,
      language: "text",
    },

    {
      heading: "End-to-End Example",
      content: `
Consider the following visual pipeline:
      `,
    },

    {
      heading: "Visual Pipeline",
      code: `[PostgreSQL: orders]
            ↓
 [Filter: amount > 100]
            ↓
[Aggregate: SUM by date]
            ↓
[Iceberg: daily_totals]`,
      language: "text",
    },

    {
      heading: "Generated Source Table",
      code: `CREATE TABLE source_orders (
  id INT,
  order_date DATE,
  amount DECIMAL(10,2),
  status VARCHAR
) WITH (
  'connector' = 'jdbc',
  'url' = 'jdbc:postgresql://db:5432/prod',
  'table-name' = 'public.orders'
);`,
      language: "sql",
    },

    {
      heading: "Generated Filter View",
      code: `CREATE TEMPORARY VIEW filtered_orders AS
SELECT *
FROM source_orders
WHERE amount > 100;`,
      language: "sql",
    },

    {
      heading: "Generated Aggregate View",
      code: `CREATE TEMPORARY VIEW daily_totals_view AS
SELECT
  order_date,
  SUM(amount) AS total_amount,
  COUNT(*) AS order_count
FROM filtered_orders
GROUP BY order_date;`,
      language: "sql",
    },

    {
      heading: "Generated Target Table",
      code: `CREATE TABLE IF NOT EXISTS
nessie.curated.daily_totals (
  order_date DATE,
  total_amount DECIMAL(12,2),
  order_count BIGINT
);`,
      language: "sql",
    },

    {
      heading: "Generated Insert Statement",
      code: `INSERT INTO
nessie.curated.daily_totals
SELECT *
FROM daily_totals_view;`,
      language: "sql",
    },

    {
      heading: "Type Mapping",
      content: `
Seg Forge automatically converts source database types into compatible Flink SQL types.
      `,
    },

    {
      heading: "Database Type Mapping",
      code: `PostgreSQL      MySQL         SQL Server        Flink SQL
----------------------------------------------------------------
integer         int           int               INT
bigint          bigint        bigint            BIGINT
varchar(n)      varchar(n)    nvarchar(n)       VARCHAR(n)
numeric(p,s)    decimal       decimal           DECIMAL(p,s)
timestamp       datetime      datetime2         TIMESTAMP(3)
boolean         tinyint(1)    bit               BOOLEAN
text            text          nvarchar(max)     STRING
date            date          date              DATE`,
      language: "text",
    },

    {
      heading: "Schema Resolution",
      content: `
The execution engine maintains schema information throughout the pipeline.

Every node knows:

• Available columns

• Data types

• Nullability

• Metadata

This allows early validation and intelligent SQL generation.
      `,
    },

    {
      heading: "Per-Node Preview",
      content: `
When you click Test on a node, Seg Forge executes only the portion of the pipeline required to reach that node.
      `,
    },

    {
      heading: "Preview Execution Flow",
      code: `Generate SQL
      ↓
Stop At Selected Node
      ↓
Append LIMIT 100
      ↓
Execute As Batch Job
      ↓
Return Results`,
      language: "text",
    },

    {
      heading: "Why Previews Are Fast",
      content: `
The preview system avoids running the entire pipeline and instead executes only the required subset of transformations.

This makes debugging and development significantly faster.
      `,
    },

    {
      heading: "Job Monitoring",
      content: `
After submission, the execution engine continuously monitors the Flink job and updates the pipeline status.
      `,
    },

    {
      heading: "Tracked Metrics",
      code: `Job ID
Status
Start Time
Duration
Rows Processed
Errors
Checkpoint Information
Throughput`,
      language: "text",
    },

    {
      heading: "Pipeline States",
      code: `Draft
Running
Succeeded
Failed
Streaming
Scheduled
Stopped`,
      language: "text",
    },

    {
      heading: "Error Handling",
      content: `
Execution errors are captured and presented to users through the Logs panel and Jobs page.
      `,
    },

    {
      heading: "Common Errors",
      code: `Error                 Cause
--------------------------------------------------------
SQL Syntax Error      Invalid node expression
Table Not Found       Source table missing
Type Mismatch         Incompatible schemas
Resource Exhaustion   Insufficient Flink resources`,
      language: "text",
    },

    {
      heading: "Resolution Strategies",
      code: `SQL Syntax Error
→ Verify expressions and node configuration.

Table Not Found
→ Verify connection and source table.

Type Mismatch
→ Check schema compatibility.

Resource Exhaustion
→ Increase task slots or cluster resources.`,
      language: "text",
    },

    {
      heading: "Reliability Features",
      code: `✓ Job retries
✓ Structured logging
✓ Circuit breaker protection
✓ Execution history
✓ Per-node previews
✓ Real-time monitoring`,
      language: "text",
    },

    {
      heading: "Execution Architecture",
      code: `Visual Pipeline
       ↓
Execution Engine
       ↓
Generated Flink SQL
       ↓
SQL Gateway
       ↓
Apache Flink
       ↓
Iceberg Tables`,
      language: "text",
    },

    {
      heading: "Summary",
      content: `
The Pipeline Execution Engine bridges the gap between visual data engineering and distributed execution.

Users build pipelines visually while Seg Forge handles dependency resolution, SQL generation, job orchestration, and monitoring automatically.
      `,
    },
  ],
};

export default doc;