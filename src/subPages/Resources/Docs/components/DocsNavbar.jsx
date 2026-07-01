import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";

import { Search, ChevronDown } from "lucide-react";
import SearchBar from "./SearchBar";
const DocsNavbar = ({ query, setQuery, results }) => {
  return (
    <header className="sticky top-22 z-40 h-[72px] border-b border-slate-200 bg-white/90 backdrop-blur-xl">
      <div className="h-full max-w-[1800px] mx-auto px-6">
        <div className="h-full grid grid-cols-[260px_1fr_260px] items-center">
          {/* Left */}
          <div>
            <Link
              to="/docs/getting-started/what-is-segforge"
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-[#24DEC9] flex items-center justify-center">
                <span className="text-slate-900 font-bold text-lg">S</span>
              </div>

              <div>
                <div className="font-bold text-slate-900">SegForge</div>

                <div className="text-xs text-slate-500 -mt-1">
                  Documentation
                </div>
              </div>
            </Link>
          </div>

          {/* Center */}
          <div className="flex justify-center">
            <div className="w-full max-w-2xl">
              <SearchBar query={query} setQuery={setQuery} results={results} />
            </div>
          </div>

          {/* Right */}

          <div className="flex items-center gap-3">
            {/* Version Selector */}

            <button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-xl border border-slate-200 hover:border-slate-300 transition">
              <span className="text-sm font-medium text-slate-700">v1.0</span>

              <ChevronDown className="w-4 h-4 text-slate-500" />
            </button>

            {/* Github */}

            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition"
            >
              <FaGithub className="w-5 h-5 text-slate-700" />
            </a>

            {/* CTA */}

            <Link
              to="/quickstart"
              className="group relative hidden md:inline-flex items-center justify-center overflow-hidden rounded-xl border border-slate-800 px-5 py-2.5 font-semibold"
            >
              <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 group-hover:w-full" />

              <span className="relative z-10 text-sm">Quick Start</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default DocsNavbar;
