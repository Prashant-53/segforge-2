const doc = {
  title: "Transformation Nodes",

  description:
    "SegForge includes 90+ transformation nodes organized into categories. Each node takes input from upstream, processes it, and passes results downstream.",

  sections: [
    {
      heading: "Overview",
      content: `
Transformation nodes are the building blocks of every data pipeline.

They sit between source and destination nodes and are responsible for cleaning, enriching, aggregating, validating, and preparing data.

Each transformation receives data from upstream nodes and produces a new schema that automatically propagates downstream.
      `,
    },

    {
      heading: "Transformation Categories",
      content: `
SegForge organizes transformations into several categories:

• Row Operations

• Column Operations

• Join & Combine

• Aggregate & Window

• String Functions

• Date & Time

• Data Quality

• Advanced

• ML Feature Engineering

• ML Model Operations
      `,
    },

    {
      heading: "Row Operations",
      content: `
Row operations work with entire records and control which rows continue through the pipeline.
      `,
    },

    {
      heading: "Filter",
      content: `
Keep only rows that match a condition.

Example:

amount > 100 AND status = 'active'
      `,
      code: `SELECT *
FROM orders
WHERE amount > 100
AND status = 'active';`,
      language: "sql",
    },

    {
      heading: "Sort",
      content: `
Order rows by one or more columns.

Configuration:

• Column

• Direction (ASC / DESC)

• Multiple sort keys
      `,
      code: `SELECT *
FROM orders
ORDER BY created_at DESC;`,
      language: "sql",
    },

    {
      heading: "Deduplicate",
      content: `
Remove duplicate rows based on one or more columns.

Configuration:

• Key Columns

• Keep First

• Keep Last
      `,
    },

    {
      heading: "Limit",
      content: `
Return only the first N rows.

Useful for testing and previews.
      `,
      code: `SELECT *
FROM orders
LIMIT 100;`,
      language: "sql",
    },

    {
      heading: "Sample",
      content: `
Return a random percentage of rows from the dataset.

Useful for exploratory analysis and testing.
      `,
    },

    {
      heading: "Column Operations",
      content: `
Column operations manipulate the schema and structure of records.
      `,
    },

    {
      heading: "Select",
      content: `
Choose which columns continue downstream.

Configuration:

• Checkbox list of upstream columns.
      `,
      code: `SELECT
  id,
  customer_id,
  amount
FROM orders;`,
      language: "sql",
    },

    {
      heading: "Rename",
      content: `
Rename one or more columns.

Configuration:

• Old name

• New name
      `,
      code: `SELECT
  customer_id AS customerId
FROM orders;`,
      language: "sql",
    },

    {
      heading: "Derived Column",
      content: `
Create new columns from expressions.
      `,
      code: `SELECT
  price,
  quantity,
  price * quantity AS total
FROM orders;`,
      language: "sql",
    },

    {
      heading: "Cast",
      content: `
Convert a column from one data type to another.

Supported types:

• INT

• STRING

• DECIMAL

• BOOLEAN

• TIMESTAMP
      `,
      code: `CAST(amount AS DECIMAL(10,2))`,
      language: "sql",
    },

    {
      heading: "Drop",
      content: `
Remove one or more columns from the schema.
      `,
    },

    {
      heading: "Reorder",
      content: `
Change column order using drag-and-drop.
      `,
    },

    {
      heading: "Join & Combine",
      content: `
Join and combine nodes merge data from multiple inputs.
      `,
    },

    {
      heading: "Join",
      content: `
Combine rows from two upstream nodes.

Supported join types:

• INNER

• LEFT

• RIGHT

• FULL OUTER
      `,
      code: `SELECT *
FROM orders o
LEFT JOIN customers c
ON o.customer_id = c.id;`,
      language: "sql",
    },

    {
      heading: "Union",
      content: `
Stack rows from two inputs with identical schemas.
      `,
      code: `SELECT * FROM orders_2025
UNION ALL
SELECT * FROM orders_2026;`,
      language: "sql",
    },

    {
      heading: "Lookup",
      content: `
Enrich records by retrieving values from a reference table.
      `,
    },

    {
      heading: "Cross Join",
      content: `
Generate the cartesian product of two datasets.

Use with caution because row counts can increase rapidly.
      `,
    },

    {
      heading: "Split",
      content: `
Route rows into different downstream paths using conditions.
      `,
    },

    {
      heading: "Aggregate & Window",
      content: `
Aggregate nodes summarize data and calculate metrics.
      `,
    },

    {
      heading: "Aggregate",
      content: `
Group rows and apply aggregate functions.

Supported functions:

• SUM

• COUNT

• AVG

• MIN

• MAX

• COUNT DISTINCT
      `,
      code: `SELECT
  customer_id,
  SUM(amount) AS total
FROM orders
GROUP BY customer_id;`,
      language: "sql",
    },

    {
      heading: "Window Functions",
      content: `
Apply calculations over partitions of rows.

Supported functions:

• ROW_NUMBER

• RANK

• DENSE_RANK

• LAG

• LEAD

• SUM

• AVG
      `,
      code: `SELECT
  customer_id,
  amount,
  ROW_NUMBER() OVER (
    PARTITION BY customer_id
    ORDER BY created_at DESC
  )
FROM orders;`,
      language: "sql",
    },

    {
      heading: "Pivot",
      content: `
Transform rows into columns (long → wide).
      `,
    },

    {
      heading: "Unpivot",
      content: `
Transform columns into rows (wide → long).
      `,
    },

    {
      heading: "Running Total",
      content: `
Calculate cumulative values over ordered rows.
      `,
    },

    {
      heading: "Rank",
      content: `
Assign rankings within partitions.
      `,
    },

    {
      heading: "String Functions",
      content: `
SegForge provides many built-in string transformations.

Available nodes:

• Trim

• Replace

• Substring

• Concat

• Upper

• Lower

• Pad

• Regex Extract

• Split String
      `,
    },

    {
      heading: "Date & Time Functions",
      content: `
Date and time transformations include:

• Date Format

• Date Diff

• Date Add

• Date Extract

• Timestamp Convert

• Timezone Convert
      `,
    },

    {
      heading: "Data Quality",
      content: `
Data quality nodes help maintain reliable datasets.
      `,
    },

    {
      heading: "Available Data Quality Nodes",
      content: `
• Null Handler

• Validate

• Assert

• Remove Duplicates

• Standardize

• Outlier Detection

• Completeness Check

• Distinct Count

• Profiler

• Schema Check
      `,
    },

    {
      heading: "Advanced Transformations",
      content: `
Advanced nodes provide additional flexibility.

Available nodes:

• Python UDF

• SQL Expression

• Hash

• Encrypt / Mask

• Flatten

• Explode
      `,
    },

    {
      heading: "Python UDF",
      content: `
Execute custom Python code for row-level processing.

Useful for:

• Custom business rules

• Data cleansing

• Specialized calculations
      `,
    },

    {
      heading: "SQL Expression",
      content: `
Write arbitrary SQL transformations directly inside the pipeline.
      `,
    },

    {
      heading: "ML Feature Engineering",
      content: `
Prepare datasets for machine learning.

Available nodes:

• Scaler

• Encoder

• Feature Selector

• Binning

• Imputer

• Feature Cross
      `,
    },

    {
      heading: "ML Model Operations",
      content: `
Train and serve machine learning models directly inside pipelines.

Available nodes:

• Train Model

• Predict / Score

• Evaluate Model

• Hyperparameter Tune
      `,
    },

    {
      heading: "Business Intelligence Destinations",
      content: `
SegForge can push transformed data directly into BI platforms.

Supported destinations:

• Power BI

• Tableau

• QlikSense

• Superset
      `,
    },

    {
      heading: "Schema Propagation",
      content: `
Every transformation automatically updates downstream schemas.

Benefits:

• No manual typing of column names.

• Type-aware configuration.

• Instant validation.

• Visual column pickers.

• Auto-complete everywhere.
      `,
    },

    {
      heading: "Previewing Transformations",
      content: `
Every node can be tested independently.

Click the Test button to:

• Execute the node.

• Preview output rows.

• Inspect schema.

• Validate transformations.

This avoids running the entire pipeline during development.
      `,
    },

    {
      heading: "Generated SQL",
      content: `
Every visual transformation generates Flink SQL behind the scenes.

Switch to the SQL tab in the bottom panel to:

• Understand execution behavior.

• Debug transformations.

• Export SQL.

• Learn how visual nodes map to SQL operations.
      `,
    },

    {
      heading: "Best Practices",
      content: `
• Filter data as early as possible.

• Select only required columns.

• Push predicates to source systems.

• Avoid unnecessary joins.

• Use previews frequently.

• Keep pipelines modular.

• Prefer visual nodes over custom SQL whenever possible.
      `,
    },
  ],
};

export default doc;