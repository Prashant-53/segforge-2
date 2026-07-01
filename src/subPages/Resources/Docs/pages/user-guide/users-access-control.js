
const doc = {
  title: "Users & Access Control",

  description:
    "Manage workspace members, permissions, API keys, and enterprise authentication.",

  sections: [
    {
      heading: "Overview",
      content: `
Seg Forge provides granular workspace-based access control through a role and permission system.

Every workspace has its own members and permissions, allowing teams to collaborate securely while maintaining complete isolation between environments.
      `,
    },

    {
      heading: "User Management",
      content: `
The Users & Access page allows administrators to invite users, assign permissions, manage API keys, and configure authentication settings.
      `,
    },

    {
      heading: "Inviting Users",
      content: `
To invite a new member:

1. Navigate to Users & Access.
2. Click **Invite Member**.
3. Enter the user's email address.
4. Select permissions.
5. Click **Send Invite**.

Users receive an email invitation and can access the workspace after accepting.
      `,
    },

    {
      heading: "Bulk Import",
      content: `
Administrators can invite multiple users simultaneously by uploading a CSV file containing email addresses and role assignments.
      `,
    },

    {
      heading: "User Lifecycle",
      code: `Status        Meaning
--------------------------------------
Active        Can access the workspace
Inactive      Temporarily disabled
Deleted       Removed from workspace`,
      language: "text",
    },

    {
      heading: "Permission System",
      content: `
Seg Forge uses a granular permission model consisting of 22 independent sections.

Each section supports three permission levels.
      `,
    },

    {
      heading: "Permission Levels",
      code: `Level      Description
----------------------------------------
View       Can view but cannot modify
Edit       Can create, update and delete
None       No access`,
      language: "text",
    },

    {
      heading: "Available Permission Sections",
      code: `Workspaces
Dashboard
Connections
Pipelines
ETL Studio
Notebooks
Catalogs
Data Explorer
CDC Streams
Orchestration
Jobs
Monitoring
Container Logs
Lineage
BI & Reports
MLOps
Compute
Cost Tracking
Quotas
Users & Access
Security
Settings`,
      language: "text",
    },

    {
      heading: "Permission Matrix",
      code: `Section              Controls
------------------------------------------------------
Workspaces            Workspace management
Dashboard             Workspace dashboard
Connections           Database and storage connections
Pipelines             Pipeline management
ETL Studio            Visual pipeline builder
Notebooks             Interactive notebooks
Catalogs              Data catalog management
Data Explorer         File browser access
CDC Streams           CDC management
Orchestration         Workflow management
Jobs                  Job monitoring
Monitoring            Infrastructure monitoring
Container Logs        Service logs
Lineage               Data lineage
BI & Reports          Dashboard access
MLOps                 Machine learning platform
Compute               Cluster management
Cost Tracking         Cost visibility
Quotas                Resource quotas
Users & Access        User administration
Security              Security configuration
Settings              Application settings`,
      language: "text",
    },

    {
      heading: "Example Roles",
      content: `
Seg Forge does not enforce fixed roles. Instead, roles are composed using permissions.

The following configurations are recommended starting points.
      `,
    },

    {
      heading: "Data Engineer Role",
      code: `Edit
• Connections
• Pipelines
• ETL Studio
• Notebooks
• Catalogs
• CDC Streams

View
• Dashboard
• Jobs
• Monitoring
• Lineage`,
      language: "text",
    },

    {
      heading: "Data Analyst Role",
      code: `Edit
• Notebooks
• BI & Reports

View
• Dashboard
• Catalogs
• Pipelines`,
      language: "text",
    },

    {
      heading: "Administrator Role",
      code: `Edit
• All Sections`,
      language: "text",
    },

    {
      heading: "API Keys",
      content: `
API keys allow programmatic access to Seg Forge without using interactive login sessions.
      `,
    },

    {
      heading: "Creating an API Key",
      content: `
1. Navigate to Users & Access.
2. Open the API Keys tab.
3. Click **Generate New Key**.
4. Copy the generated key.

The key is shown only once and should be stored securely.
      `,
    },

    {
      heading: "Using API Keys",
      code: `Authorization: Bearer <api-key>`,
      language: "bash",
    },

    {
      heading: "Azure AD Single Sign-On",
      content: `
Seg Forge supports Microsoft Azure Active Directory for enterprise authentication and centralized user management.
      `,
    },

    {
      heading: "Configuring Azure AD",
      content: `
1. Navigate to Security Settings.
2. Enter your Azure AD information.
3. Verify the configuration.
4. Save the settings.

Users can then authenticate using their corporate credentials.
      `,
    },

    {
      heading: "Azure AD Configuration",
      code: `Tenant ID       → Azure AD Tenant Identifier
Client ID       → Application Client ID
Client Secret   → Application Secret
Redirect URI    → https://your-domain.com/api/auth/azure/callback`,
      language: "text",
    },

    {
      heading: "Authentication Flow",
      code: `User
  ↓
Azure AD Login
  ↓
Token Validation
  ↓
Seg Forge Session
  ↓
Workspace Access`,
      language: "text",
    },

    {
      heading: "Workspace Membership",
      content: `
Users may belong to multiple workspaces simultaneously.

Permissions are evaluated independently for each workspace, meaning a user can be an administrator in one workspace and a viewer in another.
      `,
    },

    {
      heading: "Security Features",
      code: `Workspace Isolation
Granular Permissions
JWT Authentication
API Keys
Azure AD SSO
Encrypted Credentials
Audit Logging`,
      language: "text",
    },

    {
      heading: "Audit Logging",
      content: `
All security-sensitive actions are recorded, including:

• User invitations

• Permission changes

• API key generation

• Login activity

• Workspace membership changes

• Security configuration updates
      `,
    },

    {
      heading: "Recommended Permission Strategy",
      content: `
Use the principle of least privilege:

• Grant only the permissions users require.

• Use View access for stakeholders.

• Restrict Security and Users & Access to administrators.

• Separate development and production workspaces.

• Rotate API keys periodically.

• Prefer Azure AD SSO for enterprise deployments.
      `,
    },

    {
      heading: "Best Practices",
      code: `✓ Follow least privilege principles
✓ Enable Azure AD SSO
✓ Restrict administrative permissions
✓ Rotate API keys regularly
✓ Use workspace isolation
✓ Audit permission changes
✓ Avoid sharing personal accounts`,
      language: "text",
    },
  ],
};

export default doc;