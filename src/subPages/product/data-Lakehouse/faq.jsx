import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question:
      "What is the Data Lakehouse in Seg Forge, and what underlying technologies power it?",
    answer: (
      <>
        <p>
          The <strong>Data Lakehouse</strong> in Seg Forge provides open,
          ACID-compliant lakehouse storage with version-controlled metadata
          management.
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Apache Iceberg:</strong> Serves as the open table format,
            storing data as Parquet files on object storage such as AWS S3,
            MinIO, Azure Blob / ADLS, Google Cloud Storage, or HDFS.
          </li>
          <li>
            <strong>Nessie Catalog:</strong> Functions as a Git-like catalog
            engine that tracks table metadata changes across branches, tags, and
            commits.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "How do ACID compliance, schema evolution, and time travel work in Seg Forge?",
    answer: (
      <>
        <p>
          Because Seg Forge uses <strong>Apache Iceberg</strong> as its default
          table format, lakehouse datasets inherit transactional and historical
          data capabilities.
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>ACID Transactions:</strong> Supports safe, isolated
            concurrent reads and writes, helping prevent data corruption during
            pipeline or CDC executions.
          </li>
          <li>
            <strong>Schema &amp; Partition Evolution:</strong> Allows columns to
            be added, renamed, or dropped, and partitioning strategies to be
            updated without rewriting underlying historical data files.
          </li>
          <li>
            <strong>Time Travel Queries:</strong> Enables SQL queries against
            tables as they existed at a historical point in time or at a
            specific snapshot ID.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "What is the Nessie catalog, and how does Git-like data versioning work?",
    answer: (
      <>
        <p>
          Seg Forge uses <strong>Nessie</strong> to bring Git-like version
          control directly to your data layer.
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Workspace Isolation:</strong> Every workspace automatically
            receives its own dedicated Nessie branch and namespace.
          </li>
          <li>
            <strong>Commits &amp; History:</strong> Schema modifications, table
            creation, and data writes are recorded as immutable commits.
          </li>
          <li>
            <strong>Isolated Testing &amp; Rollbacks:</strong> Teams can
            experiment on isolated catalog branches without affecting production
            tables, tag point-in-time releases, or roll back metadata to a
            previous commit if errors occur.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "How are tables created, structured, and browsed in the Data Catalog UI?",
    answer: (
      <>
        <p>
          The <strong>Catalogs</strong> page in the workspace sidebar acts as
          your interface to the lakehouse.
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Namespace Hierarchy:</strong> Organizes tables into logical
            multi-tier namespaces, such as raw, staged, curated, or features.
          </li>
          <li>
            <strong>Creation Methods:</strong> Iceberg tables can be created
            automatically through ETL Studio pipeline destination nodes or CDC
            streams, manually using the Create Table Wizard, or through direct
            Parquet, CSV, or JSON file uploads.
          </li>
          <li>
            <strong>Catalog Inspector:</strong> Selecting a table displays
            metadata such as row count, file count, total size, and partitioning
            key. It also shows column data types and statistics, including
            min/max values, null counts, and distinct counts, plus a 100-row
            sample data preview.
          </li>
        </ul>
      </>
    ),
  },
];

export default function DataLakehouseFAQ() {
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
            Data Lakehouse FAQs
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything you need to know about{" "}
            <span className="text-cyan-600">your lakehouse</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore how Seg Forge manages open lakehouse storage, data
            versioning, and catalog operations.
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
