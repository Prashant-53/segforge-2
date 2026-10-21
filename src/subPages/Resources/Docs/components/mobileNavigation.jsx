import { useMemo } from "react";
import { Link, useLocation } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const MobileNavigation = ({ sidebar }) => {
  const location = useLocation();

  const currentPage = useMemo(() => {
    for (const section of sidebar) {
      const page = section.items.find((item) =>
        location.pathname.includes(item.slug),
      );

      if (page) {
        return {
          section: section.title,
          page,
        };
      }
    }

    return null;
  }, [location.pathname, sidebar]);

  return (
    <div className="xl:hidden mb-8">
      <label className="mb-2 block text-sm font-semibold text-slate-700">
        Navigation
      </label>

      <div className="relative">
        <select
          value={currentPage?.page.slug || ""}
          onChange={(e) => {
            if (e.target.value) {
              window.location.href = `/docs/${e.target.value}`;
            }
          }}
          className="w-full appearance-none rounded-xl border border-slate-300 bg-white px-4 py-3 pr-12 text-sm font-medium text-slate-900 shadow-sm outline-none transition focus:border-cyan-500"
        >
          {sidebar.map((section) => (
            <optgroup key={section.title} label={section.title}>
              {section.items.map((item) => (
                <option key={item.slug} value={item.slug}>
                  {item.title}
                </option>
              ))}
            </optgroup>
          ))}
        </select>

        <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-500" />
      </div>

      {currentPage && (
        <div className="mt-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3">
          <div className="text-xs font-medium uppercase tracking-wide text-slate-500">
            Current Section
          </div>

          <div className="mt-1 font-semibold text-slate-900">
            {currentPage.section}
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNavigation;
