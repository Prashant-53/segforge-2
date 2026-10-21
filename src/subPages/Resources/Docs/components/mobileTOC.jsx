import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

const MobileTOC = ({ sections = [] }) => {
  const [open, setOpen] = useState(false);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setOpen(false);
    }
  };

  if (!sections.length) return null;

  return (
    <div className="xl:hidden mb-8">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center justify-between rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 transition hover:bg-slate-100"
      >
        <div className="flex items-center gap-2">
          {open ? (
            <ChevronDown className="h-5 w-5 text-slate-500" />
          ) : (
            <ChevronRight className="h-5 w-5 text-slate-500" />
          )}

          <span className="font-medium text-slate-900">On this page</span>
        </div>
      </button>

      <div
        className={`overflow-hidden transition-all duration-300 ${
          open ? "max-h-[600px] mt-3" : "max-h-0"
        }`}
      >
        <div className="rounded-xl border border-slate-200 bg-white py-2 shadow-sm">
          {sections.map((section, index) => (
            <a
              key={index}
              href={`#${section.heading
                .toLowerCase()
                .replace(/\s+/g, "-")
                .replace(/[?]/g, "")}`}
              className="block py-2 text-sm text-slate-600 hover:text-cyan-600"
            >
              {section.heading}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileTOC;
