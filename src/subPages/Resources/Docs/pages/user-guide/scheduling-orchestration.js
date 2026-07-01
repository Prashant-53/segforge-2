const doc = {
  title: "Scheduling & Orchestration",

  description:
    "Automate pipelines and coordinate complex multi-step workflows using scheduling and DAG orchestration.",

  sections: [
    {
      heading: "Overview",
      content: `
Seg Forge supports both simple scheduled pipelines and complex DAG-based workflows.

Pipelines can be triggered using cron expressions, manual execution, or dependency-based orchestration.
      `,
    },

    {
      heading: "Pipeline Scheduling",
      content: `
Every pipeline can be scheduled directly from the ETL Studio.

Open a pipeline and click the Schedule icon in the toolbar to configure automatic execution.
      `,
    },

    {
      heading: "Cron Examples",
      code: `0 2 * * *      Daily at 2:00 AM
0 */6 * * *    Every 6 hours
0 0 * * 1      Every Monday at midnight
0 9 1 * *      First day of every month at 9:00 AM`,
      language: "text",
    },

    {
      heading: "Enabling a Schedule",
      content: `
1. Open a pipeline.

2. Click the Schedule icon.

3. Enter a cron expression.

4. Click Enable Schedule.

The pipeline will now execute automatically according to the defined schedule.
      `,
    },

    {
      heading: "Managing Schedules",
      content: `
Schedules can be managed directly from the pipeline.

Available actions include:

• Pause

• Resume

• Edit

• Delete
      `,
    },

    {
      heading: "Schedule States",
      code: `Active      Scheduled and running normally
Paused      Temporarily disabled
Disabled    Schedule removed`,
      language: "text",
    },

    {
      heading: "DAG Orchestration",
      content: `
For multi-step workflows, Seg Forge provides a visual orchestration engine based on Directed Acyclic Graphs (DAGs).
      `,
    },

    {
      heading: "What Is a DAG?",
      content: `
A DAG defines dependencies between tasks.

Tasks only execute when their upstream dependencies have completed successfully.
      `,
    },

    {
      heading: "Example Workflow",
      code: `          ┌──────────────┐
          │ Extract      │
          │ Pipeline A   │
          └──────┬───────┘
                 │
        ┌────────┴────────┐
        │                 │
┌───────▼───────┐  ┌──────▼───────┐
│ Transform B   │  │ Transform C  │
└───────┬────────┘  └──────┬───────┘
        │                  │
        └────────┬─────────┘
                 │
          ┌──────▼───────┐
          │ Load         │
          │ Pipeline D   │
          └──────────────┘`,
      language: "text",
    },

    {
      heading: "Parallel Execution",
      content: `
Pipeline B and Pipeline C execute in parallel after Pipeline A completes.

Pipeline D waits until both pipelines finish successfully.
      `,
    },

    {
      heading: "Creating a Workflow",
      content: `
To create a workflow:

1. Navigate to Orchestration.

2. Click + New Workflow.

3. Enter a workflow name.

4. Select the pipelines to include.

5. Define task dependencies.

6. Configure a schedule.

7. Click Create.
      `,
    },

    {
      heading: "Workflow Components",
      code: `Workflow Name
Tasks
Dependencies
Schedule
Retries
Notifications`,
      language: "text",
    },

    {
      heading: "Workflow Status",
      code: `Active      Scheduled and running
Paused      Temporarily suspended
Failed      Last run failed
Archived    No longer active`,
      language: "text",
    },

    {
      heading: "Running Workflows",
      content: `
Workflows can be executed in three ways:

• Scheduled execution

• Manual execution

• Retry from failure
      `,
    },

    {
      heading: "Manual Execution",
      content: `
Click Run Now to immediately execute a workflow without waiting for the schedule.
      `,
    },

    {
      heading: "Retrying Failed Workflows",
      content: `
Failed workflows can be restarted from the failed step without re-running successful tasks.
      `,
    },

    {
      heading: "Run History",
      content: `
Each workflow maintains a complete execution history including:

• Start and end times

• Task durations

• Execution status

• Error logs

• Dependency graph snapshots
      `,
    },

    {
      heading: "Workflow Monitoring",
      content: `
The workflow dashboard displays:

• Running workflows

• Completed workflows

• Failed workflows

• Historical execution trends
      `,
    },

    {
      heading: "Job Monitoring",
      content: `
All scheduled executions appear on the Jobs page.
      `,
    },

    {
      heading: "Job Information",
      code: `Job Name      Pipeline or workflow name
Kind          Pipeline, CDC, Import
Status        Running, Succeeded, Failed
Started       Execution start time
Duration      Total execution time
Triggered By  Schedule, Manual, Dependency`,
      language: "text",
    },

    {
      heading: "Filtering Jobs",
      content: `
Jobs can be filtered by:

• Job type

• Status

• Date range

• Workspace
      `,
    },

    {
      heading: "Job Actions",
      content: `
Available job actions:

• View Logs

• Retry

• Cancel

• View Execution Graph
      `,
    },

    {
      heading: "Execution Flow",
      code: `Schedule / Manual Trigger
            ↓
      Workflow Engine
            ↓
      Dependency Resolution
            ↓
      Execute Tasks
            ↓
      Monitor Progress
            ↓
      Success / Failure`,
      language: "text",
    },

    {
      heading: "Notifications",
      content: `
Workflows can send notifications when:

• A workflow succeeds

• A workflow fails

• A task exceeds SLA

• A retry limit is reached
      `,
    },

    {
      heading: "Best Practices",
      content: `
• Break large workflows into smaller pipelines.

• Use parallel execution whenever possible.

• Configure retries for critical tasks.

• Monitor workflow durations and SLAs.

• Use meaningful workflow names.

• Avoid deeply nested dependency chains.

• Test workflows manually before scheduling them.
      `,
    },
  ],
};

export default doc;