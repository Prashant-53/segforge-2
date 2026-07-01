import React, { useEffect, useState } from "react";
import { ChevronDown, ChevronRight, Folder, FileText } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const DocsSidebar = ({ sidebar, onNavigate }) => {
  const location = useLocation();

  const [openSections, setOpenSections] = useState({});

  // Automatically open the current section
  useEffect(() => {
    const active = {};

    sidebar.forEach((section) => {
      const isCurrent = section.items.some((item) =>
        location.pathname.includes(item.slug),
      );

      active[section.title] = isCurrent;
    });

    setOpenSections((prev) => ({
      ...active,
      ...prev,
    }));
  }, [location.pathname, sidebar]);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="h-full flex flex-col">
      {/* Sidebar Header */}

      <div className="sticky top-0 z-10 bg-white border-b border-slate-200 px-5 py-4">
        <h2 className="font-semibold text-slate-900">Documentation</h2>

        <p className="text-sm text-slate-500 mt-1">SegForge Platform Docs</p>
      </div>

      {/* Navigation */}

      <nav className="flex-1 overflow-y-auto py-4 scrollbar-none scroll-smooth">
        {sidebar.map((section) => {
          const isOpen = openSections[section.title];

          return (
            <div key={section.title} className="mb-2">
              {/* Category */}

              <button
                onClick={() => toggleSection(section.title)}
                className="w-full flex items-center justify-between px-5 py-2 text-left hover:bg-slate-50 transition"
              >
                <div className="flex items-center gap-2">
                  <Folder className="w-4 h-4 text-slate-400" />

                  <span className="font-medium text-slate-800 text-sm">
                    {section.title}
                  </span>
                </div>

                {isOpen ? (
                  <ChevronDown className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </button>

              {/* Pages */}

              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-[1000px]" : "max-h-0"
                }`}
              >
                <div className="mt-1">
                  {section.items.map((item) => {
                    const isActive = location.pathname.includes(item.slug);

                    return (
                      <Link
                        key={item.slug}
                        to={`/docs/${item.slug}`}
                        onClick={() => onNavigate?.()}
                        className={`group flex items-center gap-3 pl-12 pr-5 py-2.5 text-sm transition relative
                          ${
                            isActive
                              ? "text-cyan-700 bg-cyan-50"
                              : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                          }`}
                      >
                        {/* Active Indicator */}

                        {isActive && (
                          <div className="absolute left-0 top-0 h-full w-1 bg-[#24DEC9] rounded-r-full" />
                        )}

                        <FileText
                          className={`w-4 h-4 shrink-0 ${
                            isActive ? "text-cyan-600" : "text-slate-400"
                          }`}
                        />

                        <span>{item.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default DocsSidebar;
