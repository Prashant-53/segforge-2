const doc = {
  title: "Running & Monitoring Pipelines",

  description:
    "Learn how to execute, monitor, debug, and schedule pipelines in SegForge.",

  sections: [
    {
      heading: "Overview",
      content: `
Once your pipeline is designed on the canvas, it can be executed directly from ETL Studio.

SegForge automatically validates the pipeline, generates Flink SQL, provisions required resources, and executes the workflow on Apache Flink.

Pipelines can run in either Batch or Streaming mode depending on your workload.
      `,
    },

    {
      heading: "Execution Modes",
      content: `
SegForge supports two execution modes that can be selected using the Batch / Stream toggle in the toolbar.
      `,
    },

    {
      heading: "Batch Mode",
      content: `
Batch mode processes all available data from source to destination and then finishes.

Common use cases:

• Daily ETL jobs

• Historical backfills

• One-time migrations

• Scheduled reports

Batch pipelines automatically stop after all data has been processed.
      `,
    },

    {
      heading: "Streaming Mode",
      content: `
Streaming mode runs continuously and processes new data as it arrives.

Common use cases:

• Real-time CDC

• Event processing

• Live dashboards

• Streaming analytics

Streaming pipelines continue running until they are manually stopped.
      `,
    },

    {
      heading: "Running a Pipeline",
      content: `
To execute a pipeline:

1. Open the pipeline in ETL Studio.

2. Select Batch or Streaming mode.

3. Click Run or press Ctrl + Enter.

SegForge automatically performs the following steps:

• Validates the DAG.

• Generates Flink SQL.

• Creates required tables.

• Submits SQL to Flink SQL Gateway.

• Monitors execution progress.
      `,
    },

    {
      heading: "Execution Flow",
      code: `Pipeline Canvas
        │
        ▼
Validate DAG
        │
        ▼
Generate Flink SQL
        │
        ▼
Create Resources
        │
        ▼
Submit to Flink
        │
        ▼
Monitor Execution`,
      language: "text",
    },

    {
      heading: "Bottom Panel",
      content: `
The Bottom Panel provides visibility into execution progress and debugging information.

Tabs include:

• Logs

• Preview

• SQL
      `,
    },

    {
      heading: "Logs Tab",
      content: `
The Logs tab shows real-time execution information.

It includes:

• SQL generation

• Resource creation

• Job submission

• Row counts

• Errors and warnings
      `,
      code: `[10:15:01] Generating SQL for 3 nodes...
[10:15:01] Creating source table: source_orders
[10:15:02] Creating temporary view: filtered
[10:15:02] Creating target table: curated.daily_metrics
[10:15:02] Submitting INSERT statement to Flink...
[10:15:05] Job submitted: abc123-def456
[10:15:30] Job completed successfully. 15,420 rows written.`,
      language: "text",
    },

    {
      heading: "Preview Tab",
      content: `
The Preview tab lets you inspect data without running the entire pipeline.

Click Test on any node to:

• Execute only that node.

• View up to 100 sample rows.

• Verify transformations.

• Inspect schemas.
      `,
    },

    {
      heading: "SQL Tab",
      content: `
The SQL tab displays the generated Flink SQL.

You can:

• Review execution plans.

• Copy SQL for external use.

• Understand how visual nodes translate to SQL.

• Debug unexpected behavior.
      `,
    },

    {
      heading: "Stopping a Pipeline",
      content: `
Batch pipelines automatically stop after completion.

Streaming pipelines can be stopped manually by clicking the Stop button in the toolbar.

SegForge gracefully cancels the Flink job and commits all checkpoints before shutdown.
      `,
    },

    {
      heading: "Pipeline Statuses",
      content: `
Pipelines move through several lifecycle states during execution.
      `,
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
      heading: "Draft",
      content: `
The pipeline exists but has never been executed.
      `,
    },

    {
      heading: "Running",
      content: `
The pipeline is currently executing on Apache Flink.
      `,
    },

    {
      heading: "Succeeded",
      content: `
The pipeline completed successfully.
      `,
    },

    {
      heading: "Failed",
      content: `
The pipeline encountered an error.

Inspect the Logs tab to determine the root cause.
      `,
    },

    {
      heading: "Streaming",
      content: `
The pipeline is actively processing streaming data.
      `,
    },

    {
      heading: "Scheduled",
      content: `
The pipeline has one or more active schedules configured.
      `,
    },

    {
      heading: "Stopped",
      content: `
The streaming pipeline was manually stopped.
      `,
    },

    {
      heading: "Viewing Run History",
      content: `
Every execution is recorded.

To view pipeline history:

1. Open the Pipelines page.

2. Select a pipeline.

3. Open the Runs tab.

Run history includes:

• Start time

• End time

• Duration

• Row count

• Status

• Execution logs
      `,
    },

    {
      heading: "Scheduling Pipelines",
      content: `
Pipelines can run automatically using cron schedules.

To create a schedule:

1. Open the pipeline.

2. Click the Schedule icon.

3. Enter a cron expression.

4. Enable the schedule.
      `,
    },

    {
      heading: "Example Schedule",
      code: `0 2 * * *`,
      language: "text",
    },

    {
      heading: "Schedule Meaning",
      content: `
The above expression runs the pipeline every day at 2:00 AM.
      `,
    },

    {
      heading: "Scheduled Jobs",
      content: `
Scheduled executions appear in the Jobs page where you can:

• Enable or disable schedules.

• View upcoming runs.

• View execution history.

• Retry failed jobs.
      `,
    },

    {
      heading: "Per-Node Testing",
      content: `
Before running an entire pipeline, individual nodes can be tested.

To test a node:

1. Select the node.

2. Open the Inspector Panel.

3. Click Test.

SegForge executes a preview query and returns sample output.

This makes it easy to debug complex pipelines one step at a time.
      `,
    },

    {
      heading: "Troubleshooting Failed Pipelines",
      content: `
When a pipeline fails, inspect the Logs tab first.

Common causes include:

• Connection failures.

• Schema mismatches.

• Flink cluster issues.

• Storage permission errors.

• SQL validation errors.
      `,
    },

    {
      heading: "Connection Errors",
      content: `
The source or destination system is unreachable.

Verify:

• Network access

• Credentials

• Firewall rules

• Service availability
      `,
    },

    {
      heading: "Schema Mismatches",
      content: `
The source schema changed after the pipeline was created.

Refresh the schema and validate downstream nodes.
      `,
    },

    {
      heading: "Flink Errors",
      content: `
Common Flink issues include:

• Insufficient resources

• SQL syntax errors

• Checkpoint failures

• TaskManager failures
      `,
    },

    {
      heading: "Target Errors",
      content: `
Target systems may reject writes because of:

• Missing permissions

• Invalid paths

• Missing tables

• Storage outages
      `,
    },

    {
      heading: "Execution Best Practices",
      content: `
• Test individual nodes before running the full pipeline.

• Review generated SQL.

• Monitor logs during development.

• Use Batch mode for large backfills.

• Use Streaming mode for real-time workloads.

• Schedule recurring jobs instead of running them manually.

• Monitor pipeline health and execution metrics regularly.
      `,
    },
  ],
};

export default doc;