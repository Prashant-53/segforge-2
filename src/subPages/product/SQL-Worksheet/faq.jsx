import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question:
      "What are SQL Worksheets in Seg Forge, and what can I do with them?",
    answer: (
      <>
        <p>
          SQL Worksheets provide a unified SQL workspace for working with Seg
          Forge data objects. They allow users to execute SQL queries and
          perform supported platform actions directly through SQL.
        </p>

        <p className="mt-4 font-semibold text-slate-800">
          Work with your data platform through SQL:
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Query Data:</strong> Write and execute SQL queries to
            interact with supported data objects.
          </li>

          <li>
            <strong>Create Connections:</strong> Create supported data
            connections directly through SQL commands.
          </li>

          <li>
            <strong>Manage CDC Streams:</strong> Create CDC streams through
            SQL-based platform actions.
          </li>

          <li>
            <strong>Unified Workspace:</strong> Work with supported Seg Forge
            objects from one SQL interface.
          </li>
        </ul>
      </>
    ),
  },

  {
    question: "Can I create connections and CDC streams directly using SQL?",
    answer: (
      <>
        <p>
          Yes. SQL Worksheets support platform actions that allow users to
          create supported data objects through SQL queries.
        </p>

        <p className="mt-4 font-semibold text-slate-800">
          Create and manage data objects:
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Connections:</strong> Create supported connections through
            SQL commands rather than relying only on a separate interface.
          </li>

          <li>
            <strong>CDC Streams:</strong> Use supported SQL commands to create
            CDC streams for data ingestion.
          </li>

          <li>
            <strong>Other Objects:</strong> Perform additional platform
            operations through SQL where supported by Seg Forge.
          </li>
        </ul>

        <p className="mt-4">
          The exact commands and options depend on the SQL operations
          implemented in Seg Forge.
        </p>
      </>
    ),
  },

  {
    question: "How do SQL Worksheets fit into the Seg Forge data platform?",
    answer: (
      <>
        <p>
          SQL Worksheets provide a common interface for interacting with
          supported Seg Forge data objects, connecting SQL-based operations with
          the broader data workflow.
        </p>

        <p className="mt-4 font-semibold text-slate-800">
          Work across your data environment:
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Connections:</strong> Create and work with supported data
            connections.
          </li>

          <li>
            <strong>CDC Streams:</strong> Set up supported change data capture
            operations through SQL.
          </li>

          <li>
            <strong>Data Processing:</strong> Use SQL as part of your data
            workflow, alongside Seg Forge's ingestion and processing
            capabilities.
          </li>

          <li>
            <strong>Analytics:</strong> Use the SQL workspace to interact with
            supported data for querying and exploration.
          </li>
        </ul>
      </>
    ),
  },

  {
    question:
      "How do SQL Worksheets connect query execution with data workflows?",
    answer: (
      <>
        <p>
          SQL Worksheets allow users to work with data and perform supported
          platform operations through SQL. This provides a SQL-based way to
          interact with objects used across the Seg Forge data workflow.
        </p>

        <p className="mt-4 font-semibold text-slate-800">
          A typical data workflow:
        </p>

        <div className="mt-4 space-y-2">
          {[
            "Create a data connection",
            "Create a CDC stream",
            "Process and transform data",
            "Write data to an Iceberg table",
          ].map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#1affe5]/20 text-xs font-bold text-cyan-800">
                {index + 1}
              </span>

              <span className="text-sm font-medium text-slate-700">{step}</span>
            </div>
          ))}
        </div>

        <p className="mt-4">
          The workflow above illustrates how SQL-based platform actions can fit
          into the broader data lifecycle. Specific execution behavior depends
          on the operations supported by the platform.
        </p>
      </>
    ),
  },

  {
    question: "Which SQL commands and platform operations are supported?",
    answer: (
      <>
        <p>
          Seg Forge SQL Worksheets support SQL queries and platform actions,
          including creating connections and CDC streams.
        </p>

        <p className="mt-4 font-semibold text-slate-800">
          Supported capabilities discussed:
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>SQL Queries:</strong> Execute SQL statements in the
            worksheet.
          </li>

          <li>
            <strong>Connection Creation:</strong> Create supported data
            connections through SQL.
          </li>

          <li>
            <strong>CDC Stream Creation:</strong> Create supported CDC streams
            through SQL.
          </li>

          <li>
            <strong>Additional Platform Actions:</strong> Perform other
            operations where corresponding SQL support is implemented.
          </li>
        </ul>

        <p className="mt-4">
          The complete list of supported commands, syntax, and execution
          behavior should be documented against the current Seg Forge
          implementation.
        </p>
      </>
    ),
  },
];

const SQLWorksheetsFAQ = () => {
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
          backgroundImage:
            "linear-gradient(to right, #1affe5 1px, transparent 1px), linear-gradient(to bottom, #1affe5 1px, transparent 1px)",
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

            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-800 sm:text-sm">
              SQL Worksheets FAQs
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Questions about{" "}
            <span className="text-cyan-700">SQL Worksheets?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Learn how SQL Worksheets let you query data and interact with
            supported Seg Forge platform objects through SQL.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="mx-auto max-w-4xl">
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `sql-worksheets-faq-panel-${index}`;

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
                          height: {
                            duration: 0.3,
                            ease: "easeInOut",
                          },
                          opacity: {
                            duration: 0.2,
                          },
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

export default SQLWorksheetsFAQ;
