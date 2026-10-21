import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

const faqs = [
  {
    question:
      "What is the Workflow Engine in Seg Forge, and how does it differ from single pipeline scheduling?",
    answer: (
      <>
        <p>
          Seg Forge supports two levels of automated execution: single-pipeline
          scheduling for independent pipelines and Workflow Engine orchestration
          for multi-step data workflows.
        </p>

        <p className="mt-4 font-semibold text-slate-800">
          Single-Pipeline Scheduling:
        </p>

        <p className="mt-2">
          Scheduling can be configured directly within the ETL Studio canvas
          toolbar using cron expressions. This is ideal for individual recurring
          pipelines that operate independently.
        </p>

        <div className="mt-3 space-y-2">
          <code className="block w-fit rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">
            0 2 * * *
          </code>

          <p className="text-sm text-slate-500">Daily at 2:00 AM</p>

          <code className="block w-fit rounded-lg bg-slate-100 px-3 py-2 text-sm text-slate-700">
            0 */6 * * *
          </code>

          <p className="text-sm text-slate-500">Every 6 hours</p>
        </div>

        <p className="mt-4 font-semibold text-slate-800">
          Workflow Engine / DAG Orchestration:
        </p>

        <p className="mt-2">
          The Workflow Engine is designed for multi-step workflows managed on
          the Orchestration page. Multiple pipelines are organized into a
          Directed Acyclic Graph (DAG), allowing independent tasks to run in
          parallel while downstream pipelines wait for their prerequisite parent
          tasks to succeed.
        </p>
      </>
    ),
  },

  {
    question: "How do I build and configure a multi-pipeline workflow (DAG)?",
    answer: (
      <>
        <p>
          To create a workflow, navigate to <strong>Orchestration</strong> in
          the sidebar and click <strong>+ New Workflow</strong>.
        </p>

        <p className="mt-4 font-semibold text-slate-800">
          Configure the workflow using the creation wizard:
        </p>

        <ol className="mt-3 list-decimal space-y-3 pl-5">
          <li>
            <strong>Name:</strong> Define a descriptive label for the workflow.
          </li>

          <li>
            <strong>Tasks:</strong> Select the pipelines that should be included
            in the workflow.
          </li>

          <li>
            <strong>Dependencies:</strong> Map which tasks depend on upstream
            prerequisite pipelines.
          </li>

          <li>
            <strong>Schedule:</strong> Set a cron expression governing when the
            entire workflow executes.
          </li>
        </ol>

        <p className="mt-4">
          Click <strong>Create</strong> to save the workflow. Once configured,
          it can run automatically according to its schedule or be triggered
          manually using <strong>Run Now</strong>.
        </p>
      </>
    ),
  },

  {
    question: "How does Seg Forge handle task failures within a workflow?",
    answer: (
      <>
        <p>
          Seg Forge tracks workflow execution through four lifecycle states:
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {["Active", "Paused", "Failed", "Archived"].map((status) => (
            <span
              key={status}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
            >
              {status}
            </span>
          ))}
        </div>

        <ul className="mt-5 space-y-3">
          <li>
            <strong>Visual Audit:</strong> Each workflow run provides a full DAG
            visualization with status colors, per-task durations, and execution
            start/end timestamps.
          </li>

          <li>
            <strong>Error Inspection:</strong> When a task fails, operators can
            select the failed step and inspect its error logs directly.
          </li>

          <li>
            <strong>Step-Level Retries:</strong> Retry the workflow from the
            failed step without rerunning the entire workflow from the
            beginning, preserving work completed by upstream tasks.
          </li>
        </ul>
      </>
    ),
  },

  {
    question:
      "Where can I monitor all active, scheduled, and historical workflow executions?",
    answer: (
      <>
        <p>
          All workspace workloads are aggregated on the central{" "}
          <strong>Jobs</strong> page, including scheduled batch pipelines, DAG
          workflows, CDC streams, and data import tasks.
        </p>

        <p className="mt-4 font-semibold text-slate-800">Execution Metadata</p>

        <p className="mt-2">
          The Jobs page displays the Job Name, Kind, Status, Start Time,
          Duration, and Trigger Origin for each execution.
        </p>

        <p className="mt-4 font-semibold text-slate-800">Job Statuses</p>

        <div className="mt-3 flex flex-wrap gap-2">
          {["Running", "Succeeded", "Failed", "Pending"].map((status) => (
            <span
              key={status}
              className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-sm font-medium text-slate-700"
            >
              {status}
            </span>
          ))}
        </div>

        <p className="mt-4 font-semibold text-slate-800">
          Filtering &amp; Actions
        </p>

        <p className="mt-2">
          Jobs can be filtered by status, kind, or date range. Operators can
          view logs, retry failed jobs, or cancel active running jobs directly
          from the Jobs page.
        </p>
      </>
    ),
  },
];

const OrchestrationFAQ = () => {
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

            <span className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-800 sm:text-sm">
              Workflow Engine FAQs
            </span>
          </div>

          <h2 className="text-3xl font-bold leading-tight tracking-tight text-slate-900 sm:text-4xl lg:text-5xl">
            Questions about{" "}
            <span className="text-cyan-700">Orchestration?</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg sm:leading-8">
            Explore how Seg Forge schedules pipelines, orchestrates DAG
            workflows, handles failures, and monitors executions.
          </p>
        </motion.div>

        {/* FAQ accordion */}
        <div className="mx-auto max-w-4xl">
          <div className="divide-y divide-slate-200 border-y border-slate-200">
            {faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              const panelId = `orchestration-faq-panel-${index}`;

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

export default OrchestrationFAQ;
