// pages/troubleshooting/common-issues.js

const doc = {
  title: "Common Issues",
  description:
    "Troubleshooting guide for common installation, connectivity, pipeline, and performance issues in Seg Forge.",

  sections: [
    {
      heading: "Services Not Starting",
      content:
        "Containers start successfully but the Seg Forge services are not accessible.",
    },

    {
      heading: "Check Container Status",
      code: `docker compose ps`,
      language: "bash",
    },

    {
      heading: "View Service Logs",
      code: `docker compose logs backend
docker compose logs flink-jobmanager`,
      language: "bash",
    },

    {
      heading: "Common Causes",
      table: {
        headers: ["Symptom", "Cause", "Fix"],
        rows: [
          [
            "Backend exits immediately",
            "PostgreSQL not ready",
            "Wait 30 seconds and restart the backend service.",
          ],
          [
            "Flink UI not loading",
            "JobManager still starting",
            "Wait 60 seconds for Flink initialization.",
          ],
          [
            "Frontend shows blank page",
            "Backend unreachable",
            "Verify the backend health endpoint.",
          ],
          [
            "Port already in use",
            "Another process is using the port",
            "Stop the conflicting service or change ports.",
          ],
        ],
      },
    },

    {
      heading: "Restart Backend",
      code: `docker compose restart backend`,
      language: "bash",
    },

    {
      heading: "Verify Backend Health",
      code: `curl http://localhost:8000/health`,
      language: "bash",
    },

    {
      heading: "Memory Issues",
      content: `
If containers are being terminated with OOMKilled errors:

• Docker Desktop → Settings → Resources → Increase memory to at least 8 GB.
• Linux hosts should have at least 8 GB of free RAM available.
      `,
    },

    {
      heading: "Pipeline Failures",
      content:
        "Pipelines fail after clicking Run in ETL Studio.",
    },

    {
      heading: "Diagnosis",
      content: `
1. Open the pipeline in ETL Studio.
2. Open the Logs tab in the bottom panel.
3. Review the error messages.
      `,
    },

    {
      heading: "Connection Refused",
      code: `java.sql.SQLException:
Cannot connect to jdbc:postgresql://host:5432/db`,
      language: "text",
    },

    {
      heading: "Cause",
      content:
        "The source database is unreachable from the Flink container.",
    },

    {
      heading: "Fix",
      content:
        "Use the Docker network hostname (for example, postgres) instead of localhost.",
    },

    {
      heading: "Table Not Found",
      code: `org.apache.flink.table.api.TableException:
Table 'schema.table' not found`,
      language: "text",
    },

    {
      heading: "Cause",
      content: "Incorrect schema or table name.",
    },

    {
      heading: "Fix",
      content:
        "Verify that the table exists and that the schema name is correct.",
    },

    {
      heading: "Type Mismatch",
      code: `Cannot apply + to types [VARCHAR, INT]`,
      language: "text",
    },

    {
      heading: "Cause",
      content: "An expression uses incompatible data types.",
    },

    {
      heading: "Fix",
      content:
        "Use CAST functions inside derived columns or expression nodes.",
    },

    {
      heading: "Resource Exhaustion",
      code: `Not enough task slots available to run the job`,
      language: "text",
    },

    {
      heading: "Cause",
      content: "Too many concurrent Flink jobs.",
    },

    {
      heading: "Fix",
      content:
        "Wait for existing jobs to finish or add additional TaskManagers.",
    },

    {
      heading: "Connection Test Fails",
      content:
        "The Test Connection button returns a failure message.",
    },

    {
      heading: "Common Connection Errors",
      table: {
        headers: ["Error Message", "Likely Cause", "Resolution"],
        rows: [
          [
            "Connection refused",
            "Wrong host or port",
            "Verify server address and port.",
          ],
          [
            "Authentication failed",
            "Invalid credentials",
            "Verify username and password.",
          ],
          [
            "Unknown database",
            "Database does not exist",
            "Verify the database name.",
          ],
          [
            "SSL required",
            "Server requires TLS",
            "Enable SSL in connection settings.",
          ],
          [
            "Timeout",
            "Firewall or network issue",
            "Check network connectivity and firewall rules.",
          ],
        ],
      },
    },

    {
      heading: "Docker Networking",
      content: `
• Use Docker service names (postgres, kafka, minio) instead of localhost.
• Ensure all services are attached to the same Docker network.
      `,
    },

    {
      heading: "Flink SQL Gateway Not Responding",
      content:
        "Pipelines hang while submitting jobs to Flink.",
    },

    {
      heading: "Check SQL Gateway",
      code: `curl http://localhost:8083/v1/info`,
      language: "bash",
    },

    {
      heading: "Check Flink Logs",
      code: `docker compose logs flink-jobmanager`,
      language: "bash",
    },

    {
      heading: "Solutions",
      table: {
        headers: ["Cause", "Resolution"],
        rows: [
          [
            "SQL Gateway not started",
            "docker compose restart flink-jobmanager",
          ],
          [
            "Out of memory",
            "Increase FLINK_JM_HEAP and FLINK_TM_HEAP values.",
          ],
          [
            "Circuit breaker open",
            "Wait for auto-recovery and retry.",
          ],
          [
            "Version mismatch",
            "Ensure all Flink containers use the same version.",
          ],
        ],
      },
    },

    {
      heading: "Restart Flink",
      code: `docker compose restart flink-jobmanager`,
      language: "bash",
    },

    {
      heading: "MinIO / S3 Errors",
      content:
        "Iceberg table creation or storage writes fail.",
    },

    {
      heading: "Bucket Does Not Exist",
      code: `docker compose exec minio mc mb /data/warehouse`,
      language: "bash",
    },

    {
      heading: "Access Denied",
      content: `
• Verify MinIO credentials in the .env file.
• Ensure the bucket policy allows read and write access.
      `,
    },

    {
      heading: "Connection Refused to MinIO",
      code: `docker compose ps minio`,
      language: "bash",
    },

    {
      heading: "Nessie Catalog Errors",
      content:
        "Catalog operations such as namespace listing or table creation fail.",
    },

    {
      heading: "Check Nessie Health",
      code: `curl http://localhost:19120/api/v2/config`,
      language: "bash",
    },

    {
      heading: "Fixes",
      code: `docker compose restart nessie
docker compose logs nessie`,
      language: "bash",
    },

    {
      heading: "Frontend Not Loading",
      content:
        "The browser shows a blank page or cannot connect to the application.",
    },

    {
      heading: "Troubleshooting Steps",
      code: `docker compose ps frontend`,
      language: "bash",
    },

    {
      heading: "Additional Checks",
      content: `
• Verify the backend service is healthy because the frontend proxies API requests.
• Perform a hard refresh (Ctrl + Shift + R).
• Open browser developer tools and inspect console errors.
      `,
    },

    {
      heading: "Performance Issues",
      content:
        "Troubleshooting slow pipelines and notebook queries.",
    },

    {
      heading: "Slow Pipeline Execution",
      table: {
        headers: ["Symptom", "Cause", "Resolution"],
        rows: [
          [
            "Pipeline takes hours",
            "Not enough parallelism",
            "Scale Flink TaskManagers.",
          ],
          [
            "High memory usage",
            "Large joins or aggregates",
            "Filter data earlier in the pipeline.",
          ],
          [
            "Slow source reads",
            "Missing database indexes",
            "Add indexes on frequently queried columns.",
          ],
        ],
      },
    },

    {
      heading: "Scale TaskManagers",
      code: `docker compose up -d --scale flink-taskmanager=4`,
      language: "bash",
    },

    {
      heading: "Slow Notebook Queries",
      content: `
• Add LIMIT clauses during exploratory analysis.
• Use Batch mode for large result sets.
• Partition Iceberg tables to improve scan performance.
      `,
    },
  ],
};

export default doc;