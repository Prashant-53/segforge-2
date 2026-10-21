import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question:
      "What are Notebooks in Seg Forge, and what cell types do they support?",
    answer: (
      <>
        <p>
          Seg Forge notebooks are interactive, Jupyter-style environments
          designed for writing and executing queries, exploring lakehouse data,
          and prototyping transformations.
        </p>

        <p className="mt-4 font-semibold text-slate-800">
          Notebooks support three distinct cell types:
        </p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>SQL Cells:</strong> Execute Flink SQL queries to inspect
            Iceberg tables, construct views, or run DML operations. SQL cells
            also support executing multiple statements separated by semicolons.
          </li>

          <li>
            <strong>Python Cells:</strong> Execute PyFlink code to perform
            custom Python data transformations and register User Defined
            Functions (UDFs).
          </li>

          <li>
            <strong>Markdown Cells:</strong> Provide rich text formatting,
            headers, and notes to document analytical workflows and findings.
          </li>
        </ul>
      </>
    ),
  },

  {
    question:
      "Which execution engines and execution modes can be used in notebooks?",
    answer: (
      <>
        <p>
          Notebooks allow you to switch execution engines and modes directly
          from the toolbar.
        </p>

        <p className="mt-4 font-semibold text-slate-800">Execution Engines</p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Flink SQL:</strong> The default engine that executes SQL
            statements via the Flink SQL Gateway.
          </li>

          <li>
            <strong>PyFlink:</strong> Runs Python code within the Flink
            execution environment.
          </li>

          <li>
            <strong>Trino:</strong> An interactive analytics engine for
            low-latency ad-hoc SQL querying.
          </li>
        </ul>

        <p className="mt-4 font-semibold text-slate-800">Execution Modes</p>

        <ul className="mt-3 space-y-3">
          <li>
            <strong>Batch:</strong> Runs the query and returns a finite,
            completed result set.
          </li>

          <li>
            <strong>Streaming:</strong> Runs continuously, updating the result
            table in real time as new data arrives.
          </li>
        </ul>
      </>
    ),
  },

  {
    question: "How does the Schema Browser in the notebook interface work?",
    answer: (
      <>
        <p>
          The <strong>Schema Browser</strong> is located in the right sidebar of
          the notebook interface and automatically stays in sync with your
          workspace catalog.
        </p>

        <ul className="mt-4 space-y-3">
          <li>
            <strong>Catalog Exploration:</strong> Expand namespaces to inspect
            available Iceberg tables, column names, and data types.
          </li>

          <li>
            <strong>Quick Query Insertion:</strong> Double-clicking a table name
            automatically inserts a SELECT query into the notebook.
          </li>
        </ul>
      </>
    ),
  },
];

const NotebooksFAQ = () => {
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
              Notebooks FAQs
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Questions about <span className="text-cyan-700">Notebooks?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore how Seg Forge notebooks support interactive querying, Python
            transformations, and lakehouse data exploration.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="mx-auto max-w-4xl">
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `notebooks-faq-panel-${index}`;

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

export default NotebooksFAQ;
