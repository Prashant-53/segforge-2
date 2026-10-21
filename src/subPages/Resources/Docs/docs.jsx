import React, { useMemo } from "react";
import { useParams } from "react-router-dom";

import DocsNavbar from "./components/DocsNavbar";
import DocsSidebar from "./components/DocsSidebar";
import DocsContent from "./components/DocsContent";
import DocsToc from "./components/DocsToc";
import Breadcrumbs from "./components/Breadcrumbs";
import MobileNavigation from "./components/MobileNavigation";
import MobileTOC from "./components/MobileTOC";

import { useSearch } from "./hooks/useSearch";
import { buildSearchIndex } from "./utils/searchDocs";
import { sidebar } from "./data/sidebar";

const modules = import.meta.glob("./pages/**/*.js", {
  eager: true,
});

const Docs = () => {
  const { category, page } = useParams();

  const currentDoc = useMemo(() => {
    const path = `./pages/${category}/${page}.js`;
    return modules[path]?.default || null;
  }, [category, page]);

  const docs = buildSearchIndex(modules);

  const { query, setQuery, results } = useSearch(docs);

  if (!currentDoc) {
    return (
      <div className="flex h-screen items-center justify-center">
        Documentation not found.
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Top Search Navbar */}

      <DocsNavbar query={query} setQuery={setQuery} results={results} />

      {/* Main Layout */}

      <div className="mx-auto flex h-[calc(100vh-72px)] max-w-[1800px]">
        {/* Desktop Sidebar */}

        <aside className="hidden xl:flex w-[290px] shrink-0 border-r border-slate-200">
          <div className="h-full w-full overflow-y-auto">
            <DocsSidebar sidebar={sidebar} />
          </div>
        </aside>

        {/* Main Content */}

        <main className="min-w-0 flex-1 overflow-y-auto">
          <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6 lg:px-8 xl:px-10 xl:py-12">
            <Breadcrumbs
              category={category}
              page={page}
              title={currentDoc.title}
            />

            {/* Mobile / Tablet Navigation */}

            <MobileNavigation sidebar={sidebar} />

            {/* Mobile / Tablet TOC */}

            <MobileTOC sections={currentDoc.sections} />

            {/* Documentation */}

            <DocsContent doc={currentDoc} />
          </div>
        </main>

        {/* Desktop TOC */}

        <aside className="hidden xl:flex w-[280px] shrink-0 border-l border-slate-200">
          <div className="h-full w-full overflow-y-auto">
            <DocsToc sections={currentDoc.sections} />
          </div>
        </aside>
      </div>
    </div>
  );
};

export default Docs;
