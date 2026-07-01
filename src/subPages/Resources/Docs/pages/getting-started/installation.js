const doc = {
  title: "Installation",

  description:
    "Deploy SegForge using Docker Compose, Kubernetes, or the fully managed cloud platform.",

  sections: [
    {
      heading: "Overview",
      content: `
SegForge supports three deployment models:

• Docker Compose
• Kubernetes / EKS
• Fully Managed Cloud

Choose the deployment model that best fits your team's requirements and operational preferences.
      `,
    },

    {
      heading: "Docker Compose",
      content: `
Recommended for local development, proof-of-concept deployments, and small teams.

Docker Compose provides the fastest way to get the entire platform running locally.
      `,
    },

    {
      heading: "System Requirements",
      content: `
Minimum Requirements

• CPU: 4 cores
• RAM: 8 GB
• Disk: 20 GB

Recommended

• CPU: 8 cores
• RAM: 16 GB
• Disk: 50 GB SSD
• Operating System: Ubuntu 22.04
      `,
    },

    {
      heading: "Clone the Repository",
      code: `git clone https://github.com/seg-forge/seg-forge.git
cd seg-forge`,
      language: "bash",
    },

    {
      heading: "Configure the Environment",
      code: `cp .env.example .env

# Edit .env to configure:
# passwords
# storage paths
# security keys`,
      language: "bash",
    },

    {
      heading: "Start All Services",
      code: `docker compose up -d`,
      language: "bash",
    },

    {
      heading: "Verify Health",
      code: `curl http://localhost:8000/health/detailed`,
      language: "bash",
    },

    {
      heading: "Service Ports",
      content: `
Frontend UI: 8080

Backend API: 8000

Flink JobManager: 8081

Flink SQL Gateway: 8083

PostgreSQL: 5432

Redis: 6379

Nessie: 19120

MinIO Console: 9001

MinIO API: 9000

Kafka: 9092

Debezium Connect: 8084

Superset: 8088
      `,
    },

    {
      heading: "Environment Variables",
      code: `# Database
POSTGRES_USER=postgres
POSTGRES_PASSWORD=<strong-password>
POSTGRES_DB=seg_forge

# MinIO
MINIO_ROOT_USER=admin
MINIO_ROOT_PASSWORD=<strong-password>
S3_BUCKET=warehouse

# Flink
FLINK_TASK_SLOTS=4

# Security
SECRET_KEY=<random-32-char-string>
JWT_SECRET=<random-32-char-string>`,
      language: "bash",
    },

    {
      heading: "Kubernetes / EKS",
      content: `
Recommended for production deployments requiring high availability, auto-scaling, and enterprise-grade infrastructure management.
      `,
    },

    {
      heading: "Prerequisites",
      content: `
• Kubernetes 1.25+

• kubectl configured for your cluster

• Helm 3.10+

• Persistent volume provisioner

Supported environments:

• Amazon EKS
• Google GKE
• Azure AKS
• Self-managed Kubernetes clusters
      `,
    },

    {
      heading: "Using the SegForge EKS Manager",
      content: `
The built-in EKS Infrastructure Manager allows you to provision production environments directly from the UI.

Workflow:

1. Open Compute.
2. Enter AWS credentials.
3. Select or create a cluster.
4. Configure node groups.
5. Deploy infrastructure with one click.
      `,
    },

    {
      heading: "Manual Kubernetes Installation",
      code: `helm repo add seg-forge https://charts.segforge.io
helm repo update

helm install seg-forge seg-forge/seg-forge \
  --namespace seg-forge \
  --create-namespace \
  --values values-production.yaml`,
      language: "bash",
    },

    {
      heading: "Example Production Configuration",
      code: `global:
  storageClass: gp3
  domain: segforge.yourcompany.com

backend:
  replicas: 2
  resources:
    requests:
      cpu: "1"
      memory: "2Gi"
    limits:
      cpu: "2"
      memory: "4Gi"

flink:
  jobManager:
    replicas: 1

  taskManager:
    replicas: 3
    taskSlots: 4

postgresql:
  persistence:
    size: 20Gi

minio:
  persistence:
    size: 100Gi

kafka:
  replicas: 3
  persistence:
    size: 50Gi

ingress:
  enabled: true
  className: nginx
  tls: true
  certManager: true`,
      language: "yaml",
    },

    {
      heading: "Cloud Managed",
      content: `
Recommended for teams that prefer zero infrastructure management.

The managed platform handles:

• Provisioning
• Scaling
• Upgrades
• Monitoring
• Backups
• Disaster Recovery
      `,
    },

    {
      heading: "Included Features",
      content: `
• Managed Flink infrastructure

• Managed Kafka infrastructure

• Managed Iceberg storage

• Automatic scaling

• Daily backups

• Point-in-time recovery

• 99.9% uptime SLA

• Priority support
      `,
    },

    {
      heading: "Getting Started with Cloud",
      content: `
1. Visit segforge.io/cloud.

2. Create an organization.

3. Launch your first workspace.

4. Start building pipelines immediately.
      `,
    },

    {
      heading: "Post Installation",
      content: `
After deployment, complete the following setup steps:

• Create your first user.

• Create your first workspace.

• Configure object storage.

• Configure authentication providers.
      `,
    },

    {
      heading: "Create Your First User",
      code: `curl -X POST http://localhost:8000/api/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@company.com",
    "password": "secure-password",
    "name": "Admin"
  }'`,
      language: "bash",
    },

    {
      heading: "Create a Workspace",
      content: `
Sign in to the UI at:

http://localhost:8080

Create your first workspace to begin building pipelines and managing resources.
      `,
    },

    {
      heading: "Configure Storage",
      content: `
Navigate to Settings and configure your preferred storage backend:

• MinIO
• Amazon S3
• Azure Blob Storage
• Google Cloud Storage
      `,
    },

    {
      heading: "Configure Authentication",
      content: `
Optional integrations:

• Azure AD Single Sign-On
• Enterprise Identity Providers
• RBAC Permissions
      `,
    },

    {
      heading: "Upgrade Docker Deployment",
      code: `git pull origin main
docker compose pull
docker compose up -d`,
      language: "bash",
    },

    {
      heading: "Upgrade Kubernetes Deployment",
      code: `helm repo update
helm upgrade seg-forge seg-forge/seg-forge \
  --namespace seg-forge`,
      language: "bash",
    },

    {
      heading: "What's Next?",
      content: `
Continue your journey:

• Quick Start — Build your first pipeline.

• Core Concepts — Learn workspaces, connections, and pipelines.

• System Architecture — Understand how every component works together.
      `,
    },
  ],
};

export default doc;