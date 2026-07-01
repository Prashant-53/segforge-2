// pages/api-reference/cdc.js

const doc = {
  title: "CDC API",

  description:
    "Manage Change Data Capture streams, monitor replication health, and create Iceberg tables using the Smart Router.",

  sections: [
    {
      heading: "Overview",
      content: `
The CDC API allows you to create and manage real-time database synchronization pipelines.

CDC streams continuously capture INSERT, UPDATE, and DELETE events from source databases and replicate them into Iceberg tables.
      `,
    },

    {
      heading: "List CDC Streams",
      content:
        "Returns all CDC streams configured in the workspace.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/cdc/streams`,
      language: "http",
    },

    {
      heading: "Response",
      code: `[
  {
    "id": "stream-uuid-1",
    "name": "orders-cdc",
    "source_connection_id": "conn-uuid-1",
    "source_table": "public.orders",
    "status": "running",
    "events_processed": 1520340,
    "last_event_at": "2026-04-29T10:14:58Z",
    "created_at": "2026-04-15T08:00:00Z"
  }
]`,
      language: "json",
    },

    {
      heading: "Create CDC Stream",
      content:
        "Creates a new CDC stream and registers the underlying Debezium connector.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/cdc/streams`,
      language: "http",
    },

    {
      heading: "Request Body",
      code: `{
  "name": "orders-cdc",
  "source_connection_id": "conn-uuid-1",
  "source_schema": "public",
  "source_table": "orders",
  "target_namespace": "raw",
  "target_table": "orders_cdc",
  "snapshot_mode": "initial"
}`,
      language: "json",
    },

    {
      heading: "Response",
      code: `{
  "id": "stream-uuid-1",
  "name": "orders-cdc",
  "status": "pending",
  "created_at": "2026-04-29T10:15:00Z"
}`,
      language: "json",
    },

    {
      heading: "Get Stream Details",
      content:
        "Returns complete information about a CDC stream.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/cdc/streams/{stream_id}`,
      language: "http",
    },

    {
      heading: "Start Stream",
      content:
        "Starts or resumes a CDC stream.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/cdc/streams/{stream_id}/start`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "status": "running"
}`,
      language: "json",
    },

    {
      heading: "Stop Stream",
      content:
        "Pauses a CDC stream without losing offsets.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/cdc/streams/{stream_id}/stop`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "status": "stopped"
}`,
      language: "json",
    },

    {
      heading: "Estimate Table Size",
      content:
        "Estimates source table size and recommends the optimal execution engine for Iceberg creation.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/cdc/streams/{stream_id}/estimate-size`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "estimated_rows": 12000000,
  "avg_row_size_bytes": 200,
  "estimated_size_gb": 2.4,
  "recommended_method": "pyiceberg",
  "threshold_gb": 10
}`,
      language: "json",
    },

    {
      heading: "Create Iceberg Table (Smart Router)",
      content:
        "Creates an Iceberg table from the CDC stream using either PyIceberg or Flink depending on estimated table size.",
    },

    {
      heading: "Endpoint",
      code: `POST /api/workspaces/{workspace_id}/cdc/streams/{stream_id}/create-iceberg-table`,
      language: "http",
    },

    {
      heading: "Optional Request Body",
      code: `{
  "force_method": "pyiceberg"
}`,
      language: "json",
    },

    {
      heading: "Allowed Methods",
      code: `pyiceberg
flink`,
      language: "text",
    },

    {
      heading: "Response",
      code: `{
  "status": "success",
  "method": "pyiceberg",
  "estimated_size_gb": 2.4,
  "threshold_gb": 10,
  "execution_time_seconds": 12.5,
  "rows_written": 12000000,
  "table": "nessie.raw.orders_cdc"
}`,
      language: "json",
    },

    {
      heading: "Get Stream Statistics",
      content:
        "Returns throughput and health metrics for the CDC stream.",
    },

    {
      heading: "Endpoint",
      code: `GET /api/workspaces/{workspace_id}/cdc/streams/{stream_id}/statistics`,
      language: "http",
    },

    {
      heading: "Response",
      code: `{
  "events_processed": 1520340,
  "events_per_second": 245,
  "latency_ms": 850,
  "kafka_lag": 12,
  "last_event_at": "2026-04-29T10:14:58Z",
  "snapshot_complete": true,
  "cdc_active": true
}`,
      language: "json",
    },

    {
      heading: "Delete Stream",
      content:
        "Deletes the CDC stream and optionally removes underlying infrastructure resources.",
    },

    {
      heading: "Endpoint",
      code: `DELETE /api/workspaces/{workspace_id}/cdc/streams/{stream_id}`,
      language: "http",
    },

    {
      heading: "Query Parameters",
      code: `delete_topics=false
delete_connector=false
delete_table=false`,
      language: "text",
    },

    {
      heading: "Parameters",
      content: `
| Parameter | Default | Description |
|-----------|----------|-------------|
| delete_topics | false | Also delete Kafka topics |
| delete_connector | false | Also delete Debezium connector |
| delete_table | false | Also delete target Iceberg table |
      `,
    },

    {
      heading: "CDC Stream Status Values",
      code: `pending
snapshot
cdc
running
stopped
error`,
      language: "text",
    },

    {
      heading: "Snapshot Modes",
      code: `initial
always
never`,
      language: "text",
    },

    {
      heading: "HTTP Status Codes",
      code: `200  Success
201  Stream Created
204  Stream Deleted
400  Validation Error
401  Unauthorized
403  Forbidden
404  Stream Not Found
409  Stream Already Running
500  Internal Server Error`,
      language: "text",
    },

    {
      heading: "Common Errors",
      code: `{
  "detail": "Replication slot already exists"
}`,
      language: "json",
    },

    {
      heading: "Example Error",
      code: `{
  "detail": "Database does not support CDC"
}`,
      language: "json",
    },

    {
      heading: "Best Practices",
      content: `
• Use separate replication users for CDC.

• Monitor Kafka lag and CDC latency.

• Use the Smart Router unless you have a specific reason to force an execution method.

• Periodically compact Iceberg tables created by CDC.

• Delete unused CDC streams to free replication slots and Kafka resources.
      `,
    },
  ],
};

export default doc;