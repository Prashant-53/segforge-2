import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question:
      "How does Seg Forge support Business Intelligence (BI) and dashboard creation?",
    answer: (
      <>
        <p>
          Seg Forge integrates <strong>Apache Superset</strong> directly into
          the workspace interface under the <strong>BI &amp; Reports</strong>{" "}
          sidebar section.
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Data Connectivity:</strong> Superset connects to Apache
            Iceberg tables through Trino or the Flink SQL Gateway.
          </li>
          <li>
            <strong>Automatic Catalog Sync:</strong> Newly created tables appear
            as available datasets without manual connection setup.
          </li>
          <li>
            <strong>Chart Creation:</strong> Build drag-and-drop charts across
            Basic (table, bar, line), Time Series, Distribution, Geographic, and
            Advanced (funnel, Sankey, pivot table) categories.
          </li>
          <li>
            <strong>Dashboards:</strong> Arrange charts on a dashboard canvas
            and share them with others.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "What interactive query engines and execution modes are available in Seg Forge Notebooks?",
    answer: (
      <>
        <p>
          Seg Forge provides Jupyter-style <strong>Notebooks</strong> for
          querying and transforming data using three engines.
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Flink SQL:</strong> Executes SQL statements through the
            Flink SQL Gateway.
          </li>
          <li>
            <strong>PyFlink:</strong> Runs custom Python data transformations in
            the Flink environment.
          </li>
          <li>
            <strong>Trino:</strong> Executes low-latency ad-hoc SQL queries.
          </li>
        </ul>

        <p className="mt-4">Queries can run in two modes:</p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Batch Mode:</strong> Returns a finished, static result set.
          </li>
          <li>
            <strong>Streaming Mode:</strong> Runs continuously and updates
            output in real time.
          </li>
        </ul>

        <p className="mt-4">
          The right-side <strong>Schema Browser</strong> lets users expand
          catalog namespaces, inspect column types, and automatically insert
          SELECT statements.
        </p>
      </>
    ),
  },
  {
    question: "What is SQL Lab and how is it used for ad-hoc analysis?",
    answer: (
      <>
        <p>
          <strong>SQL Lab</strong> is a dedicated SQL workspace integrated
          within Superset under <strong>BI &amp; Reports</strong>.
        </p>

        <ul className="mt-3 space-y-3">
          <li>Write ad-hoc SQL queries against Apache Iceberg tables.</li>
          <li>Preview query results in a table view.</li>
          <li>Save queries for future reuse.</li>
          <li>Build visual charts directly from query outputs.</li>
        </ul>
      </>
    ),
  },
  {
    question:
      "How does the Data Lakehouse support time travel and data versioning for analytics?",
    answer: (
      <>
        <p>
          Analytics data is stored in <strong>Apache Iceberg</strong> tables
          using Parquet files on object storage, including AWS S3, MinIO, Azure
          Blob, and Google Cloud Storage (GCS).
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Time Travel:</strong> Analysts can inspect datasets as they
            existed at a historical point in time.
          </li>
          <li>
            <strong>Nessie Catalog:</strong> Provides Git-like data versioning
            for the catalog.
          </li>
          <li>
            <strong>Branches &amp; Tags:</strong> Analytics teams can query
            specific catalog branches, isolate experimental queries, or tag
            point-in-time snapshots for auditing.
          </li>
        </ul>
      </>
    ),
  },
  {
    question:
      "How can dashboards and query results be exported or shared with stakeholders?",
    answer: (
      <>
        <p>
          Seg Forge provides workspace-level access and several ways to share
          dashboards and notebook results.
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Dashboard Access:</strong> Dashboards are accessible to all
            members of a workspace by default.
          </li>
          <li>
            <strong>External Embedding:</strong> Dashboards can be embedded into
            external applications using guest tokens.
          </li>
          <li>
            <strong>Scheduled Reports:</strong> Dashboards can be delivered
            through scheduled email snapshot reports.
          </li>
          <li>
            <strong>Notebook Results:</strong> Outputs appear beneath cell code
            in formatted tables with column sorting, clipboard copying, CSV
            export, and basic numeric charting.
          </li>
        </ul>
      </>
    ),
  },
];

export default function AnalyticsFAQ() {
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
            Analytics &amp; BI FAQs
          </div>

          <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Everything you need to know about{" "}
            <span className="text-cyan-600">analytics &amp; BI</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg">
            Explore how Seg Forge brings together dashboards, interactive
            notebooks, SQL analysis, and lakehouse data for your workspace.
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
