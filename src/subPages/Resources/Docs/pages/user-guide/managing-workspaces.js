const doc = {
  title: "Managing Workspaces",

  description:
    "Create, organize, and collaborate within isolated workspaces that contain their own pipelines, connections, notebooks, and catalogs.",

  sections: [
    {
      heading: "Overview",
      content: `
Workspaces are the top-level organizational unit in SegForge.

Each workspace is an isolated environment with its own:

• Connections

• Pipelines

• Notebooks

• CDC Streams

• Data Catalog

• Jobs

• Permissions

This allows multiple teams, projects, or environments to safely share the same SegForge deployment without interfering with each other.
      `,
    },

    {
      heading: "Creating a Workspace",
      content: `
Creating a new workspace takes only a few steps.

1. Open Workspaces from the sidebar.

2. Click New Workspace.

3. Enter the workspace information.

4. Click Create.
      `,
    },

    {
      heading: "Workspace Information",
      content: `
Name
A descriptive name for the workspace.

Examples:

• Sales Analytics

• Marketing Data Platform

• ML Experiments

• Production Environment

Description
Optional notes describing the purpose of the workspace.
      `,
    },

    {
      heading: "Automatic Provisioning",
      content: `
When a workspace is created, SegForge automatically provisions:

• A dedicated Nessie branch

• A default Iceberg namespace

• Workspace settings

• Resource quotas

• Permission boundaries
      `,
    },

    {
      heading: "Workspace Architecture",
      code: `Workspace
├── Connections
├── Pipelines
├── Notebooks
├── CDC Streams
├── Catalog
├── Jobs
└── Users`,
      language: "text",
    },

    {
      heading: "Workspace List",
      content: `
The Workspaces page displays every workspace you have access to.
      `,
    },

    {
      heading: "Workspace Information Displayed",
      content: `
Name
Workspace name.

Pipelines
Number of pipelines.

Connections
Number of configured connections.

Members
Number of users with access.

Created
Creation date.

Status
Whether the workspace is active or archived.
      `,
    },

    {
      heading: "Cloning a Workspace",
      content: `
SegForge allows you to duplicate an existing workspace.

This is useful when creating:

• Development environments

• Staging environments

• Project templates

• Team sandboxes
      `,
    },

    {
      heading: "How to Clone",
      content: `
1. Open the Workspaces page.

2. Hover over a workspace card.

3. Click Clone.

4. Enter a new workspace name.

5. Click Clone.
      `,
    },

    {
      heading: "What Gets Copied",
      content: `
Copied:

✅ Connection definitions

✅ Pipeline definitions

✅ Notebook contents

Not Copied:

❌ Run history

❌ Iceberg table data

❌ Historical metrics
      `,
    },

    {
      heading: "Inviting Team Members",
      content: `
Every workspace supports collaborative access.

To invite a team member:

1. Open the workspace.

2. Navigate to Users & Access.

3. Click Invite Member.

4. Enter an email address.

5. Assign permissions.

6. Send the invitation.
      `,
    },

    {
      heading: "Collaboration Features",
      content: `
Workspace members can collaborate on:

• Pipelines

• Notebooks

• Catalogs

• CDC Streams

• Monitoring

• Scheduling

Access is controlled through role-based permissions.
      `,
    },

    {
      heading: "Workspace Settings",
      content: `
Workspace settings allow administrators to customize behavior for individual workspaces.
      `,
    },

    {
      heading: "Storage Configuration",
      content: `
Choose the default storage backend:

• MinIO

• Amazon S3

• Azure Blob Storage

• Google Cloud Storage

This storage location becomes the default destination for new Iceberg tables.
      `,
    },

    {
      heading: "Catalog Configuration",
      content: `
Configure the default catalog namespace where new tables will be created.

Example:

analytics.raw

analytics.staged

analytics.curated
      `,
    },

    {
      heading: "Resource Quotas",
      content: `
Administrators can limit:

• Number of pipelines

• Storage consumption

• CDC throughput

• Compute allocation

• Concurrent jobs
      `,
    },

    {
      heading: "Workspace Preferences",
      content: `
Workspace-specific preferences include:

• Light or Dark Theme

• Default execution mode

• Notification preferences

• Time zone settings
      `,
    },

    {
      heading: "Switching Workspaces",
      content: `
SegForge makes it easy to switch between workspaces.
      `,
    },

    {
      heading: "Methods of Switching",
      content: `
Sidebar Selector
Click the workspace name at the top of the sidebar.

Keyboard Shortcut
Press Ctrl + K or Cmd + K.

Workspace Page
Click any workspace card.
      `,
    },

    {
      heading: "Workspace Context",
      content: `
When switching workspaces, every view automatically updates:

• Pipelines

• Connections

• Catalogs

• Jobs

• Notebooks

• Monitoring

You only see resources that belong to the currently selected workspace.
      `,
    },

    {
      heading: "Archiving a Workspace",
      content: `
Inactive workspaces can be archived.

Archived workspaces:

• Become read-only.

• Cannot execute pipelines.

• Preserve metadata and history.

• Can be restored later if needed.
      `,
    },

    {
      heading: "Deleting a Workspace",
      content: `
Deleting a workspace permanently removes:

• Connections

• Pipelines

• Jobs

• Notebooks

• Permissions

Catalog data can optionally be retained depending on configuration.
      `,
    },

    {
      heading: "Best Practices",
      content: `
Recommended workspace strategies:

• One workspace per team.

• Separate development and production workspaces.

• Use cloning to create environments.

• Apply quotas to control costs.

• Restrict access using RBAC.

• Archive unused workspaces instead of deleting them.
      `,
    },

    {
      heading: "Why Workspaces Matter",
      content: `
Workspaces are the foundation of multi-tenancy inside SegForge.

They provide:

• Isolation

• Governance

• Collaboration

• Cost tracking

• Security boundaries

• Environment management

This enables organizations to operate many teams and projects on a single SegForge deployment safely and efficiently.
      `,
    },
  ],
};

export default doc;