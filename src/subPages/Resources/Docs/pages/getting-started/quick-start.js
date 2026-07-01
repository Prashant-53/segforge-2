const doc = {
  title: "Quick Start",

  description:
    "Get the full SegForge platform running locally in under five minutes.",

  sections: [
    {
      heading: "Overview",
      content: `
Get the complete SegForge platform running locally in under five minutes.

This guide walks through deploying the platform using Docker Compose, creating your first workspace, connecting to a database, and building your first pipeline.
      `,
    },

    {
      heading: "Prerequisites",
      content: `
Before getting started, ensure you have:

• Docker 20.10 or later
• Docker Compose 2.0 or later
• At least 8 GB of RAM (16 GB recommended)
• At least 10 GB of available disk space
      `,
    },

    {
      heading: "Clone the Repository",
      content: `
Clone the SegForge repository and move into the project directory.
      `,
      code: `git clone https://github.com/seg-forge/seg-forge.git
cd seg-forge`,
      language: "bash",
    },

    {
      heading: "Start All Services",
      content: `
Start the entire SegForge platform using Docker Compose.
      `,
      code: `docker compose up -d`,
      language: "bash",
    },

    {
      heading: "Services Started",
      content: `
The following services will be available after startup:

• Frontend UI — localhost:8080
• Backend API — localhost:8000
• Flink JobManager — localhost:8081
• Flink SQL Gateway — localhost:8083
• PostgreSQL — localhost:5432
• Redis — localhost:6379
• Nessie — localhost:19120
• MinIO Console — localhost:9001
• Kafka — localhost:9092
      `,
    },

    {
      heading: "Verify Platform Health",
      content: `
Wait approximately sixty seconds for all services to become healthy, then verify the installation.
      `,
      code: `curl http://localhost:8000/health`,
      language: "bash",
    },

    {
      heading: "Open the UI",
      content: `
Navigate to:

http://localhost:8080

Create an account or sign in using the default credentials.
      `,
    },

    {
      heading: "Create a Workspace",
      content: `
1. Click Workspaces in the sidebar.
2. Click New Workspace.
3. Enter a name such as "My First Workspace".
4. Click Create.

Each workspace has its own isolated namespace for connections, pipelines, and catalog objects.
      `,
    },

    {
      heading: "Add a Connection",
      content: `
Create your first PostgreSQL connection.

Connection Details:

Host: postgres (Docker) or localhost
Port: 5432
Database: seg_forge
Username: postgres
Password: postgres

Use Test Connection to verify connectivity and then click Save.
      `,
    },

    {
      heading: "Build Your First Pipeline",
      content: `
1. Open ETL Studio.
2. Drag a Source node onto the canvas.
3. Add a Filter node.
4. Add an Iceberg Target node.
5. Connect all nodes together.
6. Configure each node.
7. Click Run in Batch Mode.
      `,
    },

    {
      heading: "Pipeline Configuration Example",
      content: `
Example configuration:
      `,
      code: `Source:
  Connection: PostgreSQL
  Table: customers

Filter:
  amount > 100

Target:
  Catalog: default
  Table: customer_orders`,
      language: "yaml",
    },

    {
      heading: "Check the Results",
      content: `
Open Catalogs in the sidebar.

Navigate to your workspace namespace and select the newly created Iceberg table to view:

• Data Preview
• Column Statistics
• Table Metadata
• Schema Information
      `,
    },

    {
      heading: "What's Next?",
      content: `
Continue exploring SegForge:

• Building Pipelines — Explore all 90+ transformation nodes.
• CDC Streams — Configure real-time synchronization.
• Notebooks — Write interactive Flink SQL and PyFlink queries.
• Installation — Production deployment guides.
• System Overview — Learn the platform architecture.
      `,
    },

    {
      heading: "Stopping the Platform",
      content: `
Stop all services:
      `,
      code: `docker compose down`,
      language: "bash",
    },

    {
      heading: "Remove All Data",
      content: `
Stop the platform and remove all volumes:
      `,
      code: `docker compose down -v`,
      language: "bash",
    },
  ],
};

export default doc;