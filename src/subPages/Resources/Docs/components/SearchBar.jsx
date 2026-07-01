import React, { useEffect, useRef, useState } from "react";
import { Search, FileText } from "lucide-react";
import { Link } from "react-router-dom";

const SearchBar = ({ query, setQuery, results }) => {
  const [open, setOpen] = useState(false);

  const ref = useRef();

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false);
      }
    };

    window.addEventListener("click", handleClick);

    return () => {
      window.removeEventListener("click", handleClick);
    };
  }, []);

  useEffect(() => {
    setOpen(query.length > 0);
  }, [query]);

  return (
    <div ref={ref} className="relative w-full">
      {/* Search Input */}

      <div className="relative">
        <Search className="absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search documentation..."
          className="
            w-full
            rounded-xl
            border
            border-slate-200
            bg-slate-50
            py-3
            pl-11
            pr-4
            text-sm
            outline-none
            transition
            focus:border-[#24DEC9]
            focus:bg-white
          "
        />
      </div>

      {/* Results */}

      {open && (
        <div className="absolute top-full mt-3 w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl z-50">
          {results.length > 0 ? (
            <div className="max-h-[400px] overflow-y-auto">
              {results.map((doc) => (
                <Link
                  key={doc.slug}
                  to={`/docs/${doc.slug}`}
                  onClick={() => {
                    setOpen(false);
                    setQuery("");
                  }}
                  className="flex items-start gap-3 px-5 py-4 hover:bg-slate-50 transition border-b last:border-b-0 border-slate-100"
                >
                  <FileText className="w-4 h-4 mt-1 text-cyan-600 shrink-0" />

                  <div>
                    <div className="font-medium text-slate-900">
                      {doc.title}
                    </div>

                    <div className="mt-1 text-sm text-slate-500 line-clamp-2">
                      {doc.description}
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="p-6 text-center text-sm text-slate-500">
              No documentation found.
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
