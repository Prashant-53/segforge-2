import React, { useMemo, useState } from "react";
import { useParams } from "react-router-dom";
import { Menu, X } from "lucide-react";

import DocsNavbar from "./components/DocsNavbar";
import DocsSidebar from "./components/DocsSidebar";
import DocsContent from "./components/DocsContent";
import DocsToc from "./components/DocsToc";
import Breadcrumbs from "./components/Breadcrumbs";
import { useSearch } from "./hooks/useSearch";
import { buildSearchIndex } from "./utils/searchDocs";
import { sidebar } from "./data/sidebar";

const modules = import.meta.glob("./pages/**/*.js", {
  eager: true,
});

const Docs = () => {
  const { category, page } = useParams();

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const currentDoc = useMemo(() => {
    const path = `./pages/${category}/${page}.js`;

    return modules[path]?.default || null;
  }, [category, page]);

  const docs = buildSearchIndex(modules);

  const { query, setQuery, results } = useSearch(docs);

  if (!currentDoc) {
    return (
      <div className="h-screen overflow-hidden bg-white">
        <DocsNavbar query={query} setQuery={setQuery} results={results} />

        <div className="flex">
          <DocsSidebar sidebar={sidebar} />

          {!currentDoc ? (
            <div className="flex-1 flex items-center justify-center">
              Documentation not found.
            </div>
          ) : (
            <>
              <DocsContent />
              <DocsToc />
            </>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Navbar */}

      <DocsNavbar query={query} setQuery={setQuery} results={results} />

      {/* Mobile Header */}

      <div className="lg:hidden sticky top-16 z-30 bg-white border-b border-slate-200">
        <div className="h-14 flex items-center px-4">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-slate-100"
          >
            <Menu className="w-5 h-5 text-slate-700" />
          </button>

          <span className="ml-4 font-medium text-slate-800">Documentation</span>
        </div>
      </div>

      {/* Layout */}
      <div className="max-w-[1800px] mx-auto h-[calc(100vh-160px)]">
        <div className="flex h-full">
          {/* Sidebar */}

          <aside className="hidden lg:block w-[290px] shrink-0 border-r border-slate-200 overflow-y-auto h-auto">
            {" "}
            <DocsSidebar sidebar={sidebar} />
          </aside>

          {/* Mobile Sidebar */}

          {sidebarOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                onClick={() => setSidebarOpen(false)}
              />

              <div className="fixed top-0 left-0 h-full w-[300px] bg-white z-50 lg:hidden shadow-xl">
                <div className="h-16 border-b border-slate-200 flex items-center justify-between px-4">
                  <h3 className="font-semibold text-slate-900">
                    Documentation
                  </h3>

                  <button
                    onClick={() => setSidebarOpen(false)}
                    className="p-2 rounded-lg hover:bg-slate-100"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="overflow-y-auto h-full pb-20">
                  <DocsSidebar
                    sidebar={sidebar}
                    onNavigate={() => setSidebarOpen(false)}
                  />
                </div>
              </div>
            </>
          )}

          {/* Content */}

          <main className="flex-1 min-w-0 overflow-y-auto h-full">
            {" "}
            <div className="max-w-5xl mx-auto px-6 xl:px-10 py-12">
              <Breadcrumbs
                category={category}
                page={page}
                title={currentDoc.title}
              />

              <DocsContent doc={currentDoc} />
            </div>
          </main>

          {/* TOC */}

          <aside className="hidden xl:block w-[280px] shrink-0 border-l border-slate-200 overflow-y-auto">
            {" "}
            <DocsToc sections={currentDoc.sections} />
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Docs;
