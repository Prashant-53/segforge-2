import React from "react";
import { motion } from "framer-motion";
import { UsersRound } from "lucide-react";

// import NotebookWorkspaceImage from "../../../assets/Products/Notebooks/notebook-workspace.webp";

const SavedQueriesCollaboration = () => {
  return (
    <section className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28">
      {/* Background Grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, #1affe5 1px, transparent 1px),
              linear-gradient(to bottom, #1affe5 1px, transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      {/* Ambient Glow */}
      <div className="pointer-events-none absolute left-[15%] top-1/2 h-[500px] w-[600px] -translate-y-1/2 rounded-full bg-[#1affe5]/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:gap-16 xl:gap-20">
          {/* TEXT — first on mobile, right on desktop */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="order-1 lg:order-1"
          >
            {/* Eyebrow */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              <UsersRound className="h-4 w-4" />
              Workspace Collaboration
            </div>

            {/* Heading */}
            <h2 className="mt-3 max-w-xl text-4xl font-bold tracking-tight text-slate-900 ">
              Keep your work connected to the team.
            </h2>

            {/* Description */}
            <p className="mt-3 max-w-lg text-base text-md leading-7 text-slate-600 ">
              Save frequently used queries and organize notebooks within your
              workspace. Share notebooks automatically with workspace members,
              and manage your work by saving, renaming, duplicating, or deleting
              notebooks as needed.
            </p>

            {/* Supporting Statement */}
            <div className="mt-8 border-l-2 border-[#1affe5] pl-5">
              <p className="text-sm font-medium leading-6 text-slate-700 sm:text-base">
                Reuse queries. Share notebooks. Keep analysis organized.
              </p>
            </div>
          </motion.div>

          {/* IMAGE — after text on mobile, left on desktop */}
          <motion.div
            initial={{ opacity: 0, x: -30, scale: 0.98 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.15,
            }}
            className="relative order-2 min-w-0 lg:order-2"
          >
            {/* Screenshot Glow */}
            <div className="pointer-events-none absolute -inset-6 rounded-[40px] bg-[#1affe5]/10 blur-3xl" />

            {/* Product Frame */}
            <div className="relative overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_25px_70px_rgba(15,23,42,0.12)] sm:rounded-[30px]">
              {/* Browser Header */}
              <div className="flex h-10 items-center border-b border-slate-200 bg-slate-50 px-4 sm:h-11">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                  <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
                </div>

                <div className="mx-auto hidden h-5 w-1/3 rounded-md border border-slate-200 bg-white sm:block" />
              </div>

              {/* Screenshot */}
              <div className="w-full overflow-x-auto bg-white">
                {/* <img
                  src={NotebookWorkspaceImage}
                  alt="SegForge Notebooks workspace showing notebook navigation and saved queries"
                  className="block h-auto w-full object-contain"
                /> */}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default SavedQueriesCollaboration;
