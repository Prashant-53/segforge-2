const doc = {
  title: "Workspaces",

  description:
    "Workspaces are the top-level organizational unit in SegForge and provide complete isolation for teams, projects, and environments.",

  sections: [
    {
      heading: "What is a Workspace?",
      content: `
A workspace is the top-level organizational unit in SegForge.

Everything inside the platform belongs to a workspace, including:

• Connections
• Pipelines
• Notebooks
• Catalogs
• CDC Streams
• Jobs
• Monitoring and Cost Data

Workspaces enable multiple teams and projects to operate independently within the same SegForge deployment.
      `,
    },

    {
      heading: "Why Workspaces?",
      content: `
Workspaces provide complete isolation between teams and environments.

Each workspace receives:

• Its own Nessie branch in the data catalog.

• Its own Iceberg namespace.

• Independent connections and credentials.

• Separate pipelines, notebooks, and jobs.

• Resource quotas and cost tracking.

This allows development, staging, and production environments to coexist safely within one platform.
      `,
    },

    {
      heading: "Creating a Workspace",
      content: `
Creating a workspace takes only a few steps:

1. Open Workspaces from the sidebar.
2. Click New Workspace.
3. Enter a name and optional description.
4. Click Create.

The workspace becomes immediately available and SegForge automatically provisions:

• A Nessie branch
• An Iceberg namespace
• Workspace metadata
      `,
    },

    {
      heading: "Workspace Structure",
      content: `
A typical workspace might look like this:
      `,
      code: `Workspace: analytics-team
├── Connections
│   ├── prod-postgres
│   ├── raw-data-s3
│   └── kafka-cluster
├── Pipelines
│   ├── daily-orders-etl
│   └── user-activity-stream
├── Notebooks
│   ├── ad-hoc-queries.sql
│   └── feature-exploration.py
├── Catalogs
│   └── analytics-team
│       ├── raw/
│       ├── staged/
│       └── curated/
├── CDC Streams
│   └── orders-cdc
└── Jobs
    ├── daily-orders-etl
    └── orders-cdc`,
      language: "text",
    },

    {
      heading: "Workspace Isolation",
      content: `
Every workspace is fully isolated.

Resources from one workspace cannot be accessed by another workspace unless explicitly shared through governance policies.

Isolation applies to:

• Catalog namespaces
• Credentials
• Pipelines
• Notebooks
• Cost tracking
• Permissions
• Compute resources
      `,
    },

    {
      heading: "Switching Workspaces",
      content: `
Use the Workspace Selector in the sidebar to switch between workspaces.

You can also press:

Ctrl + K

to quickly search and switch to another workspace.

When switching workspaces, every page updates automatically to display resources belonging only to the selected workspace.
      `,
    },

    {
      heading: "Cloning a Workspace",
      content: `
Need a copy of an existing workspace?

Click the Clone button on any workspace card.

Cloning copies:

• Connections
• Pipeline definitions
• Notebook contents

Cloning does not copy:

• Catalog data
• Job history
• Monitoring history
• Metrics
      `,
    },

    {
      heading: "Workspace Collaboration",
      content: `
Invite other users into a workspace.

Steps:

1. Open Users & Access.
2. Click Invite Member.
3. Enter the user's email.
4. Assign a role.
5. Send the invitation.

After accepting the invitation, users gain access according to their assigned permissions.
      `,
    },

    {
      heading: "Resource Quotas",
      content: `
Each workspace can define resource limits to control costs and prevent resource contention.

Supported quotas include:

• Maximum number of pipelines
• Storage capacity
• CDC event throughput
• Compute allocation
• Concurrent jobs
• Notebook resources

Quotas can be configured from:

Cost & Governance → Quotas
      `,
    },

    {
      heading: "Recommended Workspace Strategies",
      content: `
Common workspace patterns include:

Development
• analytics-dev
• data-platform-dev

Staging
• analytics-stage
• ml-stage

Production
• analytics-prod
• customer-360-prod

Team Isolation
• marketing
• finance
• operations
• data-science

Choose a structure that aligns with your organization's governance and deployment strategy.
      `,
    },
  ],
};

export default doc;