// pages/architecture/deployment-options.js

const doc = {
  title: "Deployment Options",

  description:
    "Deploy Seg Forge on Docker, Kubernetes, EC2 clusters, or use the fully managed cloud offering.",

  sections: [
    {
      heading: "Overview",
      content: `
Seg Forge supports multiple deployment models to fit teams of every size—from local development environments to enterprise-scale production clusters.

Choose the deployment model that best matches your infrastructure requirements, operational capabilities, and scalability needs.
      `,
    },

    {
      heading: "Deployment Comparison",
      code: `Deployment          Best For              Scaling          High Availability      Maintenance
-------------------------------------------------------------------------------------------------
Docker Compose     Development           Manual           Single Node            Self Managed
Kubernetes / EKS   Production            Automatic        Multi-Node             Self Managed
EC2 Clusters        Burst Compute         Per Cluster      Profile Dependent      Partially Managed
Cloud Managed       Zero Operations       Automatic        Built-In               Fully Managed`,
      language: "text",
    },

    {
      heading: "Docker Compose",
      content: `
Docker Compose is the simplest way to run Seg Forge locally.

It launches every platform component as containers on a single machine and is ideal for development environments, proof-of-concepts, and small teams.
      `,
    },

    {
      heading: "Characteristics",
      code: `✓ Setup in under 5 minutes
✓ Single-machine deployment
✓ Ideal for development and testing
✓ Easy upgrades and maintenance
✓ Minimal infrastructure requirements`,
      language: "text",
    },

    {
      heading: "Example Deployment",
      code: `services:
  frontend:
    image: segforge/frontend:latest

  backend:
    image: segforge/backend:latest

  postgres:
    image: postgres:15

  redis:
    image: redis:7

  flink-jobmanager:
    image: segforge/flink:latest

  flink-taskmanager:
    image: segforge/flink:latest

  kafka:
    image: confluentinc/cp-kafka:latest

  debezium:
    image: debezium/connect:latest

  nessie:
    image: projectnessie/nessie:latest

  minio:
    image: minio/minio:latest`,
      language: "yaml",
    },

    {
      heading: "Scaling Flink",
      code: `docker compose up -d --scale flink-taskmanager=4`,
      language: "bash",
    },

    {
      heading: "Kubernetes / EKS",
      content: `
Kubernetes is the recommended deployment model for production environments.

Seg Forge supports Amazon EKS, Azure AKS, Google GKE, and self-managed Kubernetes clusters.
      `,
    },

    {
      heading: "Benefits",
      code: `✓ Auto-scaling
✓ High availability
✓ Rolling upgrades
✓ Self-healing workloads
✓ Resource isolation
✓ Production-grade observability`,
      language: "text",
    },

    {
      heading: "Kubernetes Architecture",
      code: `Ingress (HTTPS)
      │
      ├── Frontend (2 replicas)
      ├── Backend (2 replicas)
      │
      ├── Flink JobManager
      ├── Flink TaskManagers
      │
      ├── PostgreSQL
      ├── Redis
      ├── Kafka
      ├── Debezium
      ├── Nessie
      └── MinIO`,
      language: "text",
    },

    {
      heading: "Auto Scaling",
      content: `
Flink TaskManagers can automatically scale based on CPU utilization and workload demand.
      `,
    },

    {
      heading: "Example Horizontal Pod Autoscaler",
      code: `apiVersion: autoscaling/v2
kind: HorizontalPodAutoscaler
metadata:
  name: flink-taskmanager
spec:
  minReplicas: 2
  maxReplicas: 10
  metrics:
    - type: Resource
      resource:
        name: cpu
        target:
          type: Utilization
          averageUtilization: 70`,
      language: "yaml",
    },

    {
      heading: "EC2 Composable Clusters",
      content: `
For specialized workloads, Seg Forge can provision dedicated compute clusters directly from the UI.

Clusters are created on-demand and automatically configured for specific workloads.
      `,
    },

    {
      heading: "How It Works",
      code: `Select Cluster Profile
        ↓
Choose Instance Types
        ↓
Provision EC2 Infrastructure
        ↓
Deploy Services Automatically
        ↓
Run Workloads
        ↓
Auto Pause / Auto Terminate`,
      language: "text",
    },

    {
      heading: "Cluster Profiles",
      code: `Profile           Services                          Use Case
---------------------------------------------------------------------------
ETL Pipeline      Apache Flink                     Large ETL workloads
CDC Pipeline      Kafka + Debezium + Flink        High-volume CDC
ML Training       Spark + MLflow + Jupyter        Model training
Analytics         Trino                            Interactive analytics
Full Stack        All Services                     Complete environment`,
      language: "text",
    },

    {
      heading: "Cost Optimization",
      code: `✓ Auto-pause when idle
✓ Auto-termination
✓ Spot instance support
✓ Dynamic right-sizing
✓ Pay only for active compute`,
      language: "text",
    },

    {
      heading: "Cloud Managed",
      content: `
Cloud Managed is the fully hosted version of Seg Forge.

The Seg Forge team handles provisioning, upgrades, monitoring, security patches, backups, and scaling.
      `,
    },

    {
      heading: "Included Features",
      code: `✓ Automatic provisioning
✓ Managed upgrades
✓ Auto scaling
✓ Load balancing
✓ Daily backups
✓ Disaster recovery
✓ Security patching
✓ 24/7 monitoring
✓ 99.9% uptime SLA`,
      language: "text",
    },

    {
      heading: "Available Regions",
      code: `AWS
├── us-east-1
├── eu-west-1
└── ap-southeast-1

Additional regions coming soon.`,
      language: "text",
    },

    {
      heading: "Choosing the Right Deployment",
      code: `Need                          Recommended Option
-------------------------------------------------------------
Learning Seg Forge             Docker Compose
Small Team Deployment          Docker Compose
Production Environment         Kubernetes / EKS
Temporary Heavy Compute        EC2 Clusters
Zero Infrastructure Management Cloud Managed`,
      language: "text",
    },

    {
      heading: "Migration Path",
      content: `
Most teams begin with Docker Compose, move to Kubernetes for production, and optionally use EC2 clusters for specialized workloads such as machine learning or large-scale analytics.

Because every deployment model uses the same underlying architecture, migration between environments is straightforward.
      `,
    },

    {
      heading: "Summary",
      content: `
Seg Forge gives teams complete deployment flexibility.

Whether you need a lightweight local installation, a highly available Kubernetes deployment, elastic EC2 compute clusters, or a fully managed cloud platform, Seg Forge can adapt to your infrastructure strategy.
      `,
    },
  ],
};

export default doc;