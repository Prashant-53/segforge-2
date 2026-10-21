import { ChevronDown } from "lucide-react";
import SearchBar from "./SearchBar";

const DocsNavbar = ({ query, setQuery, results }) => {
  return (
    <header className="sticky top-22 z-40 h-[72px] border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-[1800px] items-center gap-3 px-4 sm:px-6 lg:px-8">
        {/* Search */}

        <div className="flex-1 lg:flex lg:justify-center">
          <div className="w-full lg:max-w-2xl">
            <SearchBar query={query} setQuery={setQuery} results={results} />
          </div>
        </div>

        {/* Version */}

        <button className="flex shrink-0 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 py-2 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:bg-slate-50">
          <span>v1.0</span>
          <ChevronDown className="h-4 w-4" />
        </button>
      </div>
    </header>
  );
};

export default DocsNavbar;
