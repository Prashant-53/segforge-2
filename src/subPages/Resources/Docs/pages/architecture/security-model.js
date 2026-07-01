// pages/architecture/security-model.js

const doc = {
  title: "Security Model",

  description:
    "Understand how Seg Forge secures authentication, authorization, credentials, and infrastructure using a defense-in-depth security architecture.",

  sections: [
    {
      heading: "Overview",
      content: `
Seg Forge implements multiple layers of security across authentication, authorization, encryption, and infrastructure.

The platform follows a defense-in-depth approach where every request, credential, and resource is protected through independent security controls.
      `,
    },

    {
      heading: "Security Layers",
      code: `User Authentication
        ↓
Authorization (RBAC)
        ↓
Workspace Isolation
        ↓
Credential Encryption
        ↓
Infrastructure Security
        ↓
Monitoring & Auditing`,
      language: "text",
    },

    {
      heading: "Authentication",
      content: `
Seg Forge supports three authentication mechanisms:

• JWT Authentication

• Azure AD Single Sign-On

• API Keys
      `,
    },

    {
      heading: "JWT Authentication",
      content: `
All API requests require a valid JWT token.
      `,
    },

    {
      heading: "Authorization Header",
      code: `Authorization: Bearer <jwt-token>`,
      language: "bash",
    },

    {
      heading: "JWT Flow",
      code: `User Login
      ↓
POST /api/auth/login
      ↓
JWT Generated
      ↓
Token Returned
      ↓
Stored In Browser
      ↓
Included In Every API Request`,
      language: "text",
    },

    {
      heading: "JWT Configuration",
      code: `Default Expiration: 24 Hours
Signing Algorithm: HS256
Signing Secret: JWT_SECRET`,
      language: "text",
    },

    {
      heading: "Azure AD Single Sign-On",
      content: `
Enterprise deployments can integrate with Microsoft Azure Active Directory for centralized authentication.
      `,
    },

    {
      heading: "Azure AD Authentication Flow",
      code: `User Clicks "Sign In"
          ↓
Redirect To Azure AD
          ↓
User Authenticates
          ↓
Authorization Code Returned
          ↓
Backend Exchanges Code
          ↓
JWT Session Created`,
      language: "text",
    },

    {
      heading: "Azure AD Configuration",
      code: `Tenant ID
Client ID
Client Secret
Redirect URI`,
      language: "text",
    },

    {
      heading: "API Keys",
      content: `
API keys provide service-to-service authentication without requiring interactive user login.
      `,
    },

    {
      heading: "API Key Features",
      code: `✓ Workspace Scoped
✓ Revocable
✓ Long-Lived
✓ Service Authentication
✓ Programmatic Access`,
      language: "text",
    },

    {
      heading: "Authorization (RBAC)",
      content: `
Seg Forge uses Role-Based Access Control (RBAC) with workspace-scoped permissions.
      `,
    },

    {
      heading: "Workspace Isolation",
      code: `Workspace A
├── Users
├── Pipelines
├── Catalogs
└── Connections

Workspace B
├── Users
├── Pipelines
├── Catalogs
└── Connections`,
      language: "text",
    },

    {
      heading: "Isolation Guarantees",
      code: `✓ Separate resources
✓ Separate permissions
✓ Separate catalogs
✓ Separate connections
✓ Separate quotas`,
      language: "text",
    },

    {
      heading: "Permission Model",
      content: `
Each application section supports three permission levels.
      `,
    },

    {
      heading: "Permission Levels",
      code: `View  → Read only
Edit  → Create, Update, Delete
None  → No Access`,
      language: "text",
    },

    {
      heading: "API Authorization Flow",
      code: `Incoming Request
        ↓
JWT Validation
        ↓
User Lookup
        ↓
Workspace Scope Check
        ↓
Permission Check
        ↓
API Handler`,
      language: "text",
    },

    {
      heading: "API Validation Rules",
      code: `✓ Token is valid
✓ Token is not expired
✓ User exists
✓ User is active
✓ User belongs to workspace
✓ User has required permission`,
      language: "text",
    },

    {
      heading: "Credential Encryption",
      content: `
All connection credentials are encrypted before being stored in PostgreSQL.
      `,
    },

    {
      heading: "Encryption Flow",
      code: `Plaintext Password
        ↓
Fernet Encryption
        ↓
Encrypted Value
        ↓
Stored In PostgreSQL`,
      language: "text",
    },

    {
      heading: "Runtime Decryption",
      code: `Encrypted Password
        ↓
Runtime Request
        ↓
In-Memory Decryption
        ↓
Connection Created`,
      language: "text",
    },

    {
      heading: "Credential Security Guarantees",
      code: `✓ Credentials encrypted at rest
✓ Never logged
✓ Never returned by APIs
✓ Decrypted only in memory`,
      language: "text",
    },

    {
      heading: "Encryption Configuration",
      code: `SECRET_KEY=<32-character-random-string>`,
      language: "bash",
    },

    {
      heading: "Data In Transit",
      content: `
All communication channels can be secured using TLS and encrypted protocols.
      `,
    },

    {
      heading: "Communication Security",
      code: `Frontend ↔ Backend     HTTPS
Backend ↔ PostgreSQL   SSL
Backend ↔ MinIO        HTTPS
Backend ↔ Azure AD     HTTPS
Internal Services      Docker/K8s Network`,
      language: "text",
    },

    {
      heading: "Docker Security",
      content: `
Docker deployments isolate services inside a private network.
      `,
    },

    {
      heading: "Exposed Services",
      code: `Frontend      :8080
Backend       :8000
MinIO Console :9001`,
      language: "text",
    },

    {
      heading: "Internal Services",
      code: `PostgreSQL
Redis
Kafka
Debezium
Flink
Nessie`,
      language: "text",
    },

    {
      heading: "Docker Security Features",
      code: `✓ Private Docker network
✓ Internal service isolation
✓ Minimal exposed ports`,
      language: "text",
    },

    {
      heading: "Kubernetes Security",
      content: `
Production deployments on Kubernetes add additional security controls.
      `,
    },

    {
      heading: "Kubernetes Features",
      code: `✓ Network Policies
✓ Kubernetes Secrets
✓ KMS Encryption
✓ TLS Ingress
✓ Pod Security Policies
✓ Resource Isolation`,
      language: "text",
    },

    {
      heading: "Environment Variables",
      content: `
Sensitive configuration is supplied through environment variables and should never be committed to source control.
      `,
    },

    {
      heading: "Security Variables",
      code: `SECRET_KEY
JWT_SECRET
POSTGRES_PASSWORD
MINIO_ROOT_PASSWORD
AZURE_AD_CLIENT_SECRET`,
      language: "text",
    },

    {
      heading: "Example Configuration",
      code: `SECRET_KEY=your-random-secret
JWT_SECRET=your-jwt-secret
POSTGRES_PASSWORD=secure-password
MINIO_ROOT_PASSWORD=secure-password`,
      language: "bash",
    },

    {
      heading: "Secret Management Recommendations",
      code: `Development:
• .env files

Production:
• Docker Secrets
• Kubernetes Secrets
• AWS Secrets Manager
• Azure Key Vault`,
      language: "text",
    },

    {
      heading: "Production Security Checklist",
      content: `
Before deploying Seg Forge to production, review the following checklist.
      `,
    },

    {
      heading: "Checklist",
      code: `✓ Change default passwords
✓ Configure strong SECRET_KEY
✓ Configure strong JWT_SECRET
✓ Enable HTTPS
✓ Enable PostgreSQL SSL
✓ Restrict network access
✓ Configure SSO
✓ Review permissions
✓ Enable audit logging
✓ Configure monitoring alerts
✓ Rotate secrets periodically`,
      language: "text",
    },

    {
      heading: "Security Best Practices",
      code: `1. Follow least privilege access.
2. Use SSO for enterprise users.
3. Restrict admin permissions.
4. Use API keys for services only.
5. Rotate credentials regularly.
6. Monitor authentication failures.
7. Keep dependencies updated.
8. Enable TLS everywhere possible.`,
      language: "text",
    },

    {
      heading: "Defense In Depth",
      code: `Authentication
      ↓
Authorization
      ↓
Encryption
      ↓
Network Security
      ↓
Monitoring
      ↓
Auditing`,
      language: "text",
    },

    {
      heading: "Summary",
      content: `
Seg Forge secures every layer of the platform—from user authentication and workspace permissions to credential encryption and infrastructure isolation.

This multi-layered security architecture allows teams to deploy Seg Forge in enterprise environments while maintaining strong data governance and compliance requirements.
      `,
    },
  ],
};

export default doc;