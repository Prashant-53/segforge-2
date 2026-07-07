import {
  Shield,
  Boxes,
  Database,
  GitBranch,
  Radio,
  Table2,
  BookOpen,
  Activity,
  LineChart,
} from "lucide-react";

export const apiGroups = [
  {
    title: "Authentication",
    icon: Shield,
    description:
      "Authentication, token issuance, and enterprise single sign-on.",
    endpoints: [
      ["POST", "/auth/register"],
      ["POST", "/auth/login"],
      ["GET", "/auth/azure/callback"],
    ],
  },

  {
    title: "Workspaces",
    icon: Boxes,
    description:
      "Create and manage isolated environments and resources.",
    endpoints: [
      ["GET", "/workspaces"],
      ["POST", "/workspaces"],
      ["PATCH", "/workspaces/{id}"],
      ["DELETE", "/workspaces/{id}"],
    ],
  },

  {
    title: "Connections",
    icon: Database,
    description:
      "Manage database, storage, and streaming connections.",
    endpoints: [
      ["GET", "/connections"],
      ["POST", "/connections"],
      ["PATCH", "/connections/{id}"],
      ["DELETE", "/connections/{id}"],
      ["POST", "/connections/{id}/test"],
      ["GET", "/connections/{id}/schema"],
    ],
  },

  {
    title: "Pipelines",
    icon: GitBranch,
    description:
      "Build, execute, and inspect visual ETL pipelines.",
    endpoints: [
      ["GET", "/pipelines"],
      ["POST", "/pipelines"],
      ["PATCH", "/pipelines/{id}"],
      ["DELETE", "/pipelines/{id}"],
      ["POST", "/pipelines/{id}/run"],
      ["POST", "/pipelines/{id}/stop"],
      ["GET", "/pipelines/{id}/sql"],
      ["POST", "/nodes/{id}/preview"],
    ],
  },

  {
    title: "CDC Streams",
    icon: Radio,
    description:
      "Real-time database synchronization and Smart Router APIs.",
    endpoints: [
      ["GET", "/cdc/streams"],
      ["POST", "/cdc/streams"],
      ["POST", "/cdc/streams/{id}/start"],
      ["POST", "/cdc/streams/{id}/stop"],
      ["POST", "/cdc/streams/{id}/create-iceberg-table"],
      ["GET", "/cdc/streams/{id}/statistics"],
    ],
  },

  {
    title: "Catalogs",
    icon: Table2,
    description:
      "Programmatic access to Iceberg metadata and tables.",
    endpoints: [
      ["GET", "/catalogs/namespaces"],
      ["GET", "/catalogs/tables"],
      ["POST", "/catalogs/tables"],
      ["DELETE", "/catalogs/tables/{table}"],
    ],
  },

  {
    title: "Notebooks",
    icon: BookOpen,
    description:
      "Execute interactive SQL and Python workloads.",
    endpoints: [
      ["GET", "/notebooks"],
      ["POST", "/notebooks"],
      ["POST", "/notebooks/{id}/execute"],
      ["PUT", "/notebooks/{id}"],
      ["DELETE", "/notebooks/{id}"],
    ],
  },

  {
    title: "Jobs & Runs",
    icon: Activity,
    description:
      "Inspect execution history and runtime statistics.",
    endpoints: [
      ["GET", "/runs"],
      ["GET", "/runs/{id}"],
      ["GET", "/runs/stats"],
    ],
  },

  {
    title: "Monitoring",
    icon: LineChart,
    description:
      "Infrastructure health and observability APIs.",
    endpoints: [
      ["GET", "/monitoring/overview"],
      ["GET", "/monitoring/flink"],
      ["GET", "/monitoring/storage"],
      ["GET", "/monitoring/pipelines"],
      ["GET", "/monitoring/cdc"],
      ["GET", "/monitoring/alerts"],
    ],
  },
];