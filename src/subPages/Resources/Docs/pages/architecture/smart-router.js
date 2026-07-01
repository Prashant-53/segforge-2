// pages/architecture/smart-router.js

const doc = {
  title: "Smart Router",

  description:
    "Automatically choose the optimal execution engine for CDC-to-Iceberg table creation based on dataset size and workload characteristics.",

  sections: [
    {
      heading: "Overview",
      content: `
The Smart Router is Seg Forge's intelligent execution engine selector.

When creating Iceberg tables from CDC streams, the router automatically decides whether to use PyIceberg or Apache Flink based on estimated data size and workload requirements.

This allows small datasets to be processed quickly while ensuring large datasets benefit from distributed execution.
      `,
    },

    {
      heading: "Why a Smart Router?",
      content: `
Creating Iceberg tables can be performed in two different ways.

Each method has different performance characteristics and resource requirements.
      `,
    },

    {
      heading: "Execution Engines",
      code: `Engine        Best For                 Trade-off
--------------------------------------------------------------
PyIceberg     Small tables (<10 GB)    Fast, low overhead
Flink         Large tables (≥10 GB)    Distributed, scalable`,
      language: "text",
    },

    {
      heading: "The Problem",
      content: `
Running a distributed Flink job for a 50 MB table introduces unnecessary overhead.

Likewise, processing a 500 GB table with a single-process PyIceberg workflow can be slow and memory intensive.

The Smart Router eliminates this decision from the user experience and selects the best engine automatically.
      `,
    },

    {
      heading: "Routing Flow",
      code: `Create Iceberg Table Request
            ↓
      Estimate Dataset Size
            ↓
        Compare Threshold
            ↓
   ┌───────────────┬───────────────┐
   │               │               │
 < 10 GB        ≥ 10 GB
   │               │
   ▼               ▼
PyIceberg       Apache Flink
   │               │
   └──────┬────────┘
          ▼
   Iceberg Table Created`,
      language: "text",
    },

    {
      heading: "How Size Is Estimated",
      content: `
The Smart Router estimates table size using metadata from the source database.

The calculation uses:

Estimated Size = Row Count × Average Row Size
      `,
    },

    {
      heading: "Estimation Formula",
      code: `estimated_size =
row_count × average_row_size_bytes`,
      language: "text",
    },

    {
      heading: "Example Calculation",
      code: `Rows              12,000,000
Average Row Size      200 bytes

Estimated Size:
12,000,000 × 200
= 2.4 GB`,
      language: "text",
    },

    {
      heading: "Routing Algorithm",
      content: `
The router performs the following steps:

1. Estimate source table size.

2. Compare against the configured threshold.

3. Select the appropriate execution engine.

4. Execute table creation.

5. Retry with Flink if PyIceberg fails.

6. Return execution diagnostics.
      `,
    },

    {
      heading: "Decision Tree",
      code: `if estimated_size_gb < threshold:
    use PyIceberg
else:
    use Flink

if PyIceberg fails:
    retry using Flink`,
      language: "python",
    },

    {
      heading: "Configuration",
      code: `Variable                                Default
------------------------------------------------------------
ICEBERG_PYICEBERG_THRESHOLD_GB        10
ICEBERG_AVG_ROW_SIZE_BYTES            200`,
      language: "text",
    },

    {
      heading: "Configuration Details",
      content: `
The threshold can be adjusted based on infrastructure capacity.

Larger servers with more memory may increase the threshold, while constrained environments may lower it.
      `,
    },

    {
      heading: "Override Per Request",
      content: `
Applications can bypass automatic routing and force a specific execution engine.
      `,
    },

    {
      heading: "Force PyIceberg",
      code: `curl -X POST \
/api/cdc/streams/{id}/create-iceberg-table \
-d '{
  "force_method": "pyiceberg"
}'`,
      language: "bash",
    },

    {
      heading: "Force Flink",
      code: `curl -X POST \
/api/cdc/streams/{id}/create-iceberg-table \
-d '{
  "force_method": "flink"
}'`,
      language: "bash",
    },

    {
      heading: "PyIceberg Path",
      content: `
PyIceberg is the fast path for smaller datasets.

It avoids creating a distributed Flink job and performs table creation directly.
      `,
    },

    {
      heading: "PyIceberg Workflow",
      code: `CDC Stream
      ↓
Read Source Metadata
      ↓
Create Iceberg Schema
      ↓
Write Parquet Files
      ↓
Commit Metadata To Nessie
      ↓
Table Ready`,
      language: "text",
    },

    {
      heading: "PyIceberg Advantages",
      code: `✓ Very low latency
✓ Minimal resource usage
✓ Fast startup
✓ Simple execution model
✓ Ideal for small tables`,
      language: "text",
    },

    {
      heading: "Flink Path",
      content: `
Apache Flink is used for large datasets that require parallel processing and fault tolerance.
      `,
    },

    {
      heading: "Flink Workflow",
      code: `CDC Stream
      ↓
Create Kafka Source Table
      ↓
Create Iceberg Sink Table
      ↓
Submit Flink Job
      ↓
Distributed Processing
      ↓
Iceberg Table Ready`,
      language: "text",
    },

    {
      heading: "Flink Advantages",
      code: `✓ Handles massive datasets
✓ Parallel processing
✓ Fault tolerant
✓ Checkpoint recovery
✓ Scales horizontally`,
      language: "text",
    },

    {
      heading: "Automatic Fallback",
      content: `
If PyIceberg fails due to memory pressure, storage issues, or unexpected errors, the Smart Router automatically retries the operation using Flink.

This provides reliability without requiring manual intervention.
      `,
    },

    {
      heading: "Fallback Flow",
      code: `PyIceberg
     ↓
Failure
     ↓
Automatic Retry
     ↓
Apache Flink
     ↓
Table Created`,
      language: "text",
    },

    {
      heading: "API Endpoint",
      code: `POST /api/cdc/streams/{stream_id}/create-iceberg-table`,
      language: "http",
    },

    {
      heading: "Routing Diagnostics",
      content: `
Every API response includes detailed routing information to help with debugging and observability.
      `,
    },

    {
      heading: "Example Response",
      code: `{
  "status": "success",
  "method": "pyiceberg",
  "estimated_size_gb": 2.4,
  "threshold_gb": 10,
  "execution_time_seconds": 12.5,
  "rows_written": 12000000,
  "table": "nessie.raw.orders"
}`,
      language: "json",
    },

    {
      heading: "Monitoring Metrics",
      code: `Routing Decisions
Estimated Dataset Size
Execution Time
Rows Written
Fallback Count
Failure Rate`,
      language: "text",
    },

    {
      heading: "Best Practices",
      code: `✓ Keep automatic routing enabled
✓ Monitor fallback frequency
✓ Tune thresholds for your infrastructure
✓ Use Flink for very large CDC tables
✓ Use PyIceberg for development workloads
✓ Review routing diagnostics regularly`,
      language: "text",
    },

    {
      heading: "Benefits",
      content: `
The Smart Router provides:

• Better performance

• Lower infrastructure costs

• Faster table creation

• Automatic scalability

• Built-in fault tolerance

• Simplified user experience

The result is an intelligent CDC platform that automatically chooses the right execution strategy for every workload.
      `,
    },
  ],
};

export default doc;