import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question: "How does Real-Time Change Data Capture (CDC) work in Seg Forge?",
    answer: (
      <>
        <p>
          Seg Forge streams every <strong>INSERT, UPDATE, and DELETE</strong>{" "}
          operation from source databases into Apache Iceberg tables through a
          four-stage pipeline.
        </p>

        <ol className="mt-3 list-decimal space-y-3 pl-5">
          <li>
            <strong>Database Capture (Debezium):</strong> Debezium runs as a
            Kafka Connect worker to read transaction logs directly from source
            databases.
          </li>
          <li>
            <strong>Kafka Event Streaming:</strong> Change events are published
            to dedicated Kafka topics using the naming convention:
            <code className="mt-1 block break-all rounded-lg bg-slate-100 px-3 py-2 text-xs text-cyan-800">
              cdc.{"{workspace}"}.{"{database}"}.{"{schema}"}.{"{table}"}
            </code>
          </li>
          <li>
            <strong>Engine Processing (Smart Router):</strong> The processing
            engine reads events from Kafka, writes Parquet row groups to object
            storage, and commits metadata updates to the Nessie catalog.
          </li>
          <li>
            <strong>Target Iceberg Table:</strong> Events land in Apache Iceberg
            tables, which merge changes while maintaining ACID compliance.
          </li>
        </ol>
      </>
    ),
  },
  {
    question:
      "Which source databases are supported and how are changes captured?",
    answer: (
      <>
        <p>
          Seg Forge supports CDC across major enterprise relational databases
          using their specific transaction-log mechanisms.
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>PostgreSQL:</strong> Logical decoding via Write-Ahead
            Logging (WAL), with <code>wal_level=logical</code>.
          </li>
          <li>
            <strong>MySQL:</strong> Binary log replication with{" "}
            <code>binlog_format=ROW</code>.
          </li>
          <li>
            <strong>SQL Server:</strong> CDC tables and transaction log capture.
          </li>
          <li>
            <strong>Oracle:</strong> LogMiner / redo log capture.
          </li>
          <li>
            <strong>IBM DB2:</strong> InfoSphere CDC / ASN capture.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "What is the Smart Router and how does it choose the execution engine?",
    answer: (
      <>
        <p>
          The <strong>Smart Router</strong> estimates table size using{" "}
          <code>estimated_rows × 200 bytes</code> and routes CDC ingestion to an
          execution engine based on the configured threshold.
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>PyIceberg Path (&lt; 10 GB default):</strong> A fast,
            low-overhead, single-process Python consumer suited to small and
            medium datasets.
          </li>
          <li>
            <strong>Apache Flink Path (≥ 10 GB default):</strong> A distributed
            processing engine designed for high-throughput, parallelized
            streaming workloads.
          </li>
          <li>
            <strong>Fallback &amp; Overrides:</strong> If PyIceberg encounters
            an error, such as an out-of-memory issue, the router retries using
            Flink. Users can also force an engine using the{" "}
            <code>force_method</code> parameter in API requests.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "What are the operational phases of a CDC stream and how does schema evolution work?",
    answer: (
      <>
        <p>
          CDC streams move through distinct operational states, while schema
          mapping and evolution help keep source and target structures aligned.
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Stream Lifecycle:</strong> Pending, Snapshot (full copy of
            existing table data), CDC / Running (real-time change capture),
            Stopped, or Error.
          </li>
          <li>
            <strong>Schema Mapping:</strong> Source column types are translated
            to Apache Iceberg types. Examples include integer / int → INT,
            varchar / nvarchar → STRING, timestamp / datetime2 → TIMESTAMP, and
            boolean / bit → BOOLEAN.
          </li>
          <li>
            <strong>Schema Evolution:</strong> When source DDL changes, such as
            adding columns, Debezium detects changes through schema history
            topics. Flink or PyIceberg can then update the target Iceberg schema
            without altering existing historical data.
          </li>
        </ul>
      </>
    ),
  },
  {
    question: "How does Seg Forge handle stream failures, outages, and pauses?",
    answer: (
      <>
        <p>
          Seg Forge uses a background <strong>CDC Watchdog</strong> to check
          stream health and support recovery. Its default configurable
          monitoring interval is 60 seconds.
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Connector Recovery:</strong> Automatically restarts failed
            Debezium connectors through the REST API.
          </li>
          <li>
            <strong>Flink Recovery:</strong> Resubmits failed Flink CDC jobs
            from their last committed checkpoint.
          </li>
          <li>
            <strong>Kafka Outages:</strong> Resumes event consumption from the
            last committed offset after a temporary outage.
          </li>
          <li>
            <strong>Pausing:</strong> Stops processing safely while Kafka
            retains the underlying event logs.
          </li>
          <li>
            <strong>Deletion:</strong> Provides options to delete or retain
            associated Kafka topics, Debezium connectors, and target Iceberg
            tables.
          </li>
        </ul>
      </>
    ),
  },
];

export default function CDCFaq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background grid */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(#1affe5 1px, transparent 1px), linear-gradient(90deg, #1affe5 1px, transparent 1px)",
          backgroundSize: "48px 48px",
          maskImage:
            "linear-gradient(to bottom, transparent, black 15%, black 85%, transparent)",
          opacity: 0.1,
        }}
      />

      {/* Cyan glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-300/20 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center sm:mb-16">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            <HelpCircle size={16} />
            CDC FAQs
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything you need to know about{" "}
            <span className="text-cyan-600">real-time CDC</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore how Seg Forge captures database changes, routes streaming
            workloads, manages schema evolution, and supports recovery.
          </p>
        </div>

        {/* FAQ accordion */}
        <div className="mx-auto max-w-4xl divide-y divide-slate-200 border-y border-slate-200">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="group">
                <button
                  type="button"
                  onClick={() => setOpenIndex(isOpen ? -1 : index)}
                  className="flex w-full items-center gap-4 py-6 text-left sm:gap-6 sm:py-7"
                  aria-expanded={isOpen}
                >
                  <span
                    className={`hidden text-sm font-semibold tabular-nums sm:block ${
                      isOpen ? "text-cyan-600" : "text-slate-400"
                    }`}
                  >
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <span
                    className={`flex-1 text-base font-semibold leading-7 transition-colors sm:text-lg ${
                      isOpen
                        ? "text-cyan-700"
                        : "text-slate-800 group-hover:text-cyan-700"
                    }`}
                  >
                    {faq.question}
                  </span>

                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 border-cyan-200 bg-cyan-50 text-cyan-700"
                        : "border-slate-200 bg-white text-slate-500 group-hover:border-cyan-200 group-hover:text-cyan-700"
                    }`}
                  >
                    <ChevronDown size={18} />
                  </span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="overflow-hidden"
                    >
                      <div className="max-w-3xl pb-6 pl-0 pr-2 text-sm leading-7 text-slate-600 sm:pb-8 sm:pl-10 sm:text-base">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
