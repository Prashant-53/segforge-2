const doc = {
  title: "Compute Engines",

  description:
    "Understand how SegForge executes pipelines, CDC streams, notebooks, and large-scale analytics using Apache Flink and composable compute clusters.",

  sections: [
    {
      heading: "Overview",
      content: `
SegForge uses Apache Flink as its primary compute engine.

For specialized workloads such as machine learning, distributed analytics, and large-scale ETL, SegForge can also provision dedicated compute environments including Trino, Spark, and EC2-based clusters.

The compute layer is designed to be:

• Distributed

• Fault tolerant

• Elastic

• Cloud native

• Optimized for both batch and streaming workloads
      `,
    },

    {
      heading: "Apache Flink",
      content: `
Apache Flink is the backbone of data processing in SegForge.

It powers:

• Visual pipeline execution

• CDC processing

• Interactive notebooks

• SQL execution

• Iceberg table operations
      `,
    },

    {
      heading: "Flink Components",
      content: `
JobManager
Port: 8081
Responsible for orchestration, scheduling, and checkpoint management.

SQL Gateway
Port: 8083
REST API for submitting SQL statements.

TaskManagers
Responsible for executing parallel tasks and processing data.
      `,
    },

    {
      heading: "Flink Architecture",
      code: `┌────────────────┐
│ Pipeline Canvas│
└────────┬───────┘
         │
         ▼
┌────────────────┐
│ Generated SQL  │
└────────┬───────┘
         │
         ▼
┌────────────────┐
│ Flink Gateway  │
└────────┬───────┘
         │
         ▼
┌────────────────┐
│  Job Manager   │
└────────┬───────┘
         │
         ▼
┌────────────────┐
│ Task Managers  │
└────────────────┘`,
      language: "text",
    },

    {
      heading: "How SegForge Uses Flink",
      content: `
Pipeline Execution
Visual pipelines are compiled into Flink SQL and submitted to the SQL Gateway.

CDC Processing
Flink reads change events from Kafka and writes them into Iceberg tables.

Notebook Queries
Interactive SQL execution in both batch and streaming modes.

Iceberg Operations
Table creation, schema changes, and data mutations.
      `,
    },

    {
      heading: "Integration Paths",
      content: `
SegForge integrates with Flink through two different services.
      `,
    },

    {
      heading: "FlinkService",
      content: `
Uses the Flink SQL Gateway REST API.

Best suited for:

• SQL execution

• Pipeline runs

• DDL operations

• Production workloads

Works independently of Python versions.
      `,
    },

    {
      heading: "PyFlinkService",
      content: `
Uses Python TableEnvironment.

Best suited for:

• Python UDFs

• Interactive Python execution

• Notebook experiences

• Advanced data science workflows
      `,
    },

    {
      heading: "Compute Service",
      content: `
ComputeService orchestrates both execution paths.

REST API:
Used for all SQL operations.

PyFlink:
Used only when Python-specific capabilities are required.

If PyFlink is unavailable, all SQL workloads continue to function normally.
      `,
    },

    {
      heading: "Task Slots",
      content: `
Each TaskManager contains a configurable number of task slots.

Default:

4 task slots per TaskManager.

More task slots allow higher parallelism and increased throughput.

Task slots can be configured using:

FLINK_TASK_SLOTS environment variable.
      `,
      code: `FLINK_TASK_SLOTS=4`,
      language: "bash",
    },

    {
      heading: "EC2 Composable Clusters",
      content: `
For dedicated workloads, SegForge can provision complete compute environments on AWS EC2.

Clusters can be created on demand and automatically managed by the platform.
      `,
    },

    {
      heading: "Cluster Profiles",
      content: `
ETL Pipeline
Services:
• Flink
• JobManager
• TaskManagers

Use case:
Large-scale ETL and streaming.

CDC Pipeline
Services:
• Kafka
• Debezium
• Flink

Use case:
High-volume CDC processing.

ML Training
Services:
• Spark
• MLflow
• Jupyter

Use case:
GPU-based model training.

Analytics
Services:
• Trino
• Hive Metastore

Use case:
Interactive analytics.

Full Stack
Services:
• Complete platform deployment.
      `,
    },

    {
      heading: "Composable Cluster Architecture",
      code: `┌──────────────┐
│ SegForge UI  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ Compute API  │
└──────┬───────┘
       │
       ▼
┌──────────────┐
│ AWS EC2/EKS  │
└──────┬───────┘
       │
       ├── Flink
       ├── Kafka
       ├── Trino
       ├── Spark
       └── MLflow`,
      language: "text",
    },

    {
      heading: "Cluster Lifecycle",
      content: `
1. Select a cluster profile.

2. Configure resources.

3. Launch infrastructure.

4. Execute workloads.

5. Automatically pause when idle.

6. Automatically terminate if unused.
      `,
    },

    {
      heading: "Cost Optimization",
      content: `
SegForge includes several mechanisms to reduce infrastructure costs.

Auto Pause
Clusters pause automatically after inactivity.

Spot Instances
Use lower-cost spot pricing for non-critical workloads.

Right Sizing
The platform recommends instance sizes based on workload requirements.
      `,
    },

    {
      heading: "EKS / Kubernetes Compute",
      content: `
For production deployments, SegForge integrates directly with AWS EKS.

Capabilities include:

• One-click cluster provisioning

• Managed node groups

• Resource requests and limits

• Horizontal auto-scaling

• Service isolation

• Kubernetes-native deployments
      `,
    },

    {
      heading: "EKS Workflow",
      code: `SegForge
     │
     ▼
AWS Credentials
     │
     ▼
Create / Select Cluster
     │
     ▼
Configure Node Groups
     │
     ▼
Deploy Services
     │
     ▼
Run Pipelines`,
      language: "text",
    },

    {
      heading: "Circuit Breaker",
      content: `
All compute API calls are protected by a built-in circuit breaker.

The circuit breaker:

• Tracks failures.

• Opens after three consecutive failures.

• Rejects new requests immediately.

• Periodically probes service health.

• Automatically closes when the service recovers.

This prevents cascading failures when compute services become unavailable.
      `,
    },

    {
      heading: "Circuit Breaker Flow",
      code: `Healthy
    │
    ▼
Failures
    │
    ▼
Open Circuit
    │
    ▼
Wait 30 Seconds
    │
    ▼
Probe Request
    │
    ├── Success → Close Circuit
    └── Failure → Stay Open`,
      language: "text",
    },

    {
      heading: "Why This Architecture?",
      content: `
SegForge combines:

• Apache Flink for distributed data processing.

• Dedicated clusters for specialized workloads.

• Kubernetes-native deployments.

• Automatic cost optimization.

• Fault tolerance and recovery.

This architecture allows teams to start small on Docker and scale all the way to enterprise-grade distributed compute environments without changing how they build pipelines.
      `,
    },
  ],
};

export default doc;