import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question:
      "What is the ETL Studio in Seg Forge, and how does it execute data pipelines?",
    answer: (
      <>
        <p>
          ETL Studio is Seg Forge’s visual, drag-and-drop pipeline builder.
          Users design data transformation workflows by connecting nodes into a
          Directed Acyclic Graph (DAG). Seg Forge translates node configurations
          into optimized Flink SQL statements and submits them to the Flink SQL
          Gateway for execution.
        </p>

        <p className="mt-4 font-semibold text-slate-800">
          Pipelines support two execution modes:
        </p>

        <ul className="mt-2 space-y-3">
          <li>
            <strong>Batch Mode:</strong> Processes a finite dataset from source
            to destination and completes when processing finishes. Useful for
            daily ETL, historical backfills, and scheduled loads.
          </li>
          <li>
            <strong>Streaming Mode:</strong> Continuously processes new data as
            it arrives. Useful for real-time CDC, event processing, and live
            dashboards.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "What types of nodes are available on the ETL Studio canvas?",
    answer: (
      <>
        <p>
          The ETL Studio palette contains three main categories of pipeline
          nodes:
        </p>

        <div className="mt-4 space-y-4">
          <div>
            <h4 className="font-semibold text-slate-800">Source Nodes</h4>
            <p className="mt-1">
              Read data from database tables via JDBC (PostgreSQL, MySQL, SQL
              Server, Oracle, DB2), files such as CSV, JSON, Parquet, ORC, and
              Avro on S3, MinIO, Azure, or GCS; Kafka topics, CDC streams, REST
              APIs, and synthetic DataGen sources.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800">
              Transformation Nodes (90+)
            </h4>
            <p className="mt-1">
              Include row and column operations, joins and combines, aggregates
              and windows, string and date functions, data quality tools, ML
              feature engineering, and ML model operations such as Train,
              Predict/Score, and Evaluate.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-slate-800">Destination Nodes</h4>
            <p className="mt-1">
              Write processed data to Apache Iceberg tables, Kafka topics,
              S3/MinIO files, or BI sinks such as Superset, Power BI, Tableau,
              and QlikSense.
            </p>
          </div>
        </div>
      </>
    ),
  },
  {
    question: "How does schema propagation work when connecting nodes?",
    answer: (
      <>
        <p>
          Nodes automatically detect and inherit column schemas from connected
          upstream nodes. This schema information is used throughout the
          workflow to simplify configuration and help identify invalid
          references.
        </p>

        <ul className="mt-4 space-y-2">
          <li>
            The Inspector Panel provides graphical column pickers, including
            checkboxes, dropdowns, and drag-to-reorder controls.
          </li>
          <li>
            Actual column names and data types help reduce errors from manual
            typing.
          </li>
          <li>Invalid column references are flagged on the canvas.</li>
          <li>
            Adding or removing upstream columns automatically updates downstream
            transformation nodes.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "How does writing data to an Iceberg Table destination node work?",
    answer: (
      <>
        <p>
          The Apache Iceberg destination node includes table management
          capabilities based on the incoming pipeline schema.
        </p>

        <ul className="mt-4 space-y-3">
          <li>
            <strong>Automated Creation:</strong> If the target table does not
            exist, Seg Forge creates it using the schema inferred from the
            upstream node.
          </li>
          <li>
            <strong>Schema Evolution:</strong> For existing tables, Seg Forge
            validates the schema and supports automatically adding new columns
            without rewriting historical data.
          </li>
          <li>
            <strong>Flexible Write Modes:</strong> Choose how data is written to
            the destination:
            <ul className="mt-2 list-disc space-y-1 pl-5">
              <li>
                <strong>Append:</strong> Adds new rows.
              </li>
              <li>
                <strong>Overwrite:</strong> Replaces existing data.
              </li>
              <li>
                <strong>Upsert:</strong> Merges incoming rows using a primary
                key, updating matches and inserting new records. Recommended for
                CDC streams.
              </li>
            </ul>
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How can I test, preview, or debug pipelines within ETL Studio?",
    answer: (
      <>
        <p>
          ETL Studio includes tools to inspect and debug data flows before and
          during execution.
        </p>

        <ul className="mt-4 space-y-3">
          <li>
            <strong>Per-Node Testing &amp; Data Preview:</strong> Select a node
            and click Test in the Inspector Panel to run a sample preview query.
            The Preview tab displays up to 100 output rows, allowing
            transformations to be tested in isolation.
          </li>
          <li>
            <strong>Execution Logs:</strong> The Logs tab in the bottom panel
            streams execution logs and error tracebacks while a pipeline runs.
          </li>
          <li>
            <strong>Generated SQL Inspection:</strong> The SQL tab displays the
            Flink SQL generated from the visual DAG, which can be audited or
            copied for external use.
          </li>
        </ul>
      </>
    ),
  },
];

const ETLStudioFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background accents */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.10]"
        style={{
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
        }}
      />

      <div className="pointer-events-none absolute -right-40 top-1/4 h-96 w-96 rounded-full bg-[#1affe5]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#1affe5]/50 bg-[#1affe5]/10 px-4 py-2">
            <HelpCircle className="h-4 w-4 text-cyan-700" />
            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-800 sm:text-md">
              ETL Studio FAQs
            </span>
          </div>

          <h2 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 ">
            Questions about <span className="text-cyan-700">ETL Studio?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-md text-base leading-7 text-slate-600 ">
            Explore how Seg Forge builds, executes, and helps you manage data
            transformation pipelines.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="mx-auto max-w-4xl">
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `etl-faq-panel-${index}`;

              return (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.4,
                    delay: index * 0.05,
                  }}
                  className="py-1"
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    className="group flex w-full items-center justify-between gap-5 py-5 text-left sm:py-6"
                  >
                    <span
                      className={`text-base font-semibold leading-7 transition-colors sm:text-lg ${
                        isOpen
                          ? "text-cyan-800"
                          : "text-slate-900 group-hover:text-cyan-800"
                      }`}
                    >
                      <span className="mr-3 text-sm font-bold text-cyan-700">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {faq.question}
                    </span>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all ${
                        isOpen
                          ? "rotate-180 border-[#1affe5] bg-[#1affe5]/15 text-cyan-800"
                          : "border-slate-200 bg-white text-slate-500 group-hover:border-cyan-300"
                      }`}
                    >
                      <ChevronDown className="h-5 w-5" />
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        key="content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          height: { duration: 0.3, ease: "easeInOut" },
                          opacity: { duration: 0.2 },
                        }}
                        className="overflow-hidden"
                      >
                        <div className="max-w-3xl pb-6 pl-0 pr-2 text-sm leading-7 text-slate-600 sm:pb-7 sm:pl-10 sm:text-base sm:leading-8">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ETLStudioFAQ;
