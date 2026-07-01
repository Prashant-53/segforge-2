const doc = {
  title: "Pipeline Builder: Canvas Basics",

  description:
    "Learn the fundamentals of building visual data pipelines using the SegForge ETL Studio canvas.",

  sections: [
    {
      heading: "Overview",
      content: `
The ETL Studio canvas is where you visually design data pipelines.

Pipelines are built by dragging nodes onto a canvas and connecting them into a Directed Acyclic Graph (DAG).

The canvas is designed to support both simple ETL workflows and large-scale enterprise pipelines.
      `,
    },

    {
      heading: "Interface Layout",
      code: `┌─────────────────────────────────────────────────────────────┐
│ Toolbar                                                    │
│ Pipeline Name │ Batch/Stream │ Save │ Run │ Zoom Controls  │
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                       Pipeline Canvas                       │
│                                                             │
│   Source ──► Filter ──► Aggregate ──► Iceberg               │
│                                                             │
├─────────────────────────────────────────┬───────────────────┤
│ Bottom Panel                            │ Inspector Panel   │
│ Logs │ Preview │ SQL                    │ Configuration     │
└─────────────────────────────────────────┴───────────────────┘`,
      language: "text",
    },

    {
      heading: "Main Areas",
      content: `
The ETL Studio interface consists of four major areas:

• Toolbar

• Canvas

• Inspector Panel

• Bottom Panel
      `,
    },

    {
      heading: "Toolbar",
      content: `
The toolbar provides quick access to pipeline actions.

Features include:

• Pipeline name

• Batch / Stream toggle

• Save

• Run

• Stop

• Zoom controls

• Fit to screen
      `,
    },

    {
      heading: "Canvas",
      content: `
The canvas is the main workspace where pipelines are designed.

Here you can:

• Add nodes

• Move nodes

• Create connections

• Zoom and pan

• Select multiple nodes

• Organize complex workflows
      `,
    },

    {
      heading: "Inspector Panel",
      content: `
The Inspector Panel displays configuration options for the selected node.

Each node type has its own configuration form.

Examples:

Source
• Connection
• Table
• Columns

Filter
• Condition

Join
• Join keys

Target
• Namespace
• Table name
      `,
    },

    {
      heading: "Bottom Panel",
      content: `
The bottom panel provides execution information.

Tabs include:

• Logs

• Data Preview

• Generated SQL
      `,
    },

    {
      heading: "Adding Nodes",
      content: `
There are multiple ways to add nodes to the canvas.

1. Click the + button in the toolbar.

2. Right-click the canvas.

3. Open the node palette.
      `,
    },

    {
      heading: "Node Categories",
      content: `
The node palette is organized into categories:

• Sources

• Transforms

• Destinations

• Advanced

• Machine Learning
      `,
    },

    {
      heading: "Moving Nodes",
      content: `
Nodes can be repositioned freely.

Click and drag any node to move it.

The canvas automatically maintains connections while repositioning nodes.
      `,
    },

    {
      heading: "Zoom and Pan",
      content: `
The canvas supports:

• Zoom In

• Zoom Out

• Fit to Screen

• Panning

Use the mouse wheel to zoom and drag empty space to pan.
      `,
    },

    {
      heading: "Connecting Nodes",
      content: `
Nodes are connected by dragging from an output handle to an input handle.

Connections generally flow:

Source → Transform → Destination
      `,
    },

    {
      heading: "Connection Flow",
      code: `Source
   │
   ▼
Filter
   │
   ▼
Aggregate
   │
   ▼
Iceberg Table`,
      language: "text",
    },

    {
      heading: "Connection Rules",
      content: `
SegForge enforces several DAG rules.

• Source nodes can have multiple downstream nodes.

• Transform nodes can receive one or more inputs depending on their type.

• Destination nodes accept one upstream input.

• Cycles are not allowed.
      `,
    },

    {
      heading: "Configuring Nodes",
      content: `
Click any node to open its configuration.

Changes are automatically saved while editing.

Examples:

Source
• Database connection
• Table selection

Filter
• SQL condition

Aggregate
• Group by columns
• Aggregate functions

Target
• Namespace
• Table name
      `,
    },

    {
      heading: "Graphical Configuration Components",
      content: `
Most configuration fields use visual components rather than free-text input.

Available controls include:

• Checkbox lists

• Dropdown menus

• Column selectors

• Sort builders

• Expression editors

• Drag-and-drop ordering
      `,
    },

    {
      heading: "Schema Propagation",
      content: `
Every node understands the schema produced by upstream nodes.

Benefits include:

• Real column names.

• Type-aware configuration.

• Automatic validation.

• No manual typing.

• Immediate error detection.
      `,
    },

    {
      heading: "Example Schema Flow",
      code: `Orders
├── id
├── customer_id
├── amount
└── created_at

        │
        ▼

Filter Node
        │
        ▼

Aggregate Node

Columns automatically propagate downstream.`,
      language: "text",
    },

    {
      heading: "Selecting Multiple Nodes",
      content: `
Multiple nodes can be selected simultaneously.

Methods:

• Shift + Click

• Drag selection box

• Ctrl + A (Cmd + A)
      `,
    },

    {
      heading: "Deleting Nodes",
      content: `
Nodes can be deleted in several ways.

• Press Delete

• Press Backspace

• Right-click and choose Delete
      `,
    },

    {
      heading: "Keyboard Shortcuts",
      content: `
Ctrl + S
Save pipeline.

Ctrl + Z
Undo.

Ctrl + Shift + Z
Redo.

Delete
Delete selected nodes.

Ctrl + A
Select all nodes.

+
Zoom in.

-
Zoom out.

Ctrl + 0
Fit to screen.
      `,
    },

    {
      heading: "Canvas Best Practices",
      content: `
For large pipelines:

• Organize nodes left to right.

• Group related transformations.

• Use descriptive node names.

• Avoid crossing connections.

• Keep source nodes on the left and destinations on the right.

• Use reusable sub-pipelines where possible.
      `,
    },

    {
      heading: "Why the Canvas Matters",
      content: `
The ETL Studio canvas provides a visual way to build production-grade data pipelines without sacrificing transparency.

Every visual action ultimately generates Flink SQL, giving teams the best of both worlds:

• Visual development

• Full control over execution
      `,
    },
  ],
};

export default doc;