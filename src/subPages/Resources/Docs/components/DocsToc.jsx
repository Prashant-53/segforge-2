import React, { useEffect, useState } from "react";

const DocsToc = ({ sections = [] }) => {
  const [activeId, setActiveId] = useState("");

  useEffect(() => {
    if (!sections.length) return;

    const headings = sections
      .map((section) =>
        document.getElementById(
          section.heading.toLowerCase().replaceAll(" ", "-"),
        ),
      )
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);

        if (visible) {
          setActiveId(visible.target.id);
        }
      },
      {
        rootMargin: "-20% 0px -65% 0px",
      },
    );

    headings.forEach((heading) => {
      observer.observe(heading);
    });

    return () => observer.disconnect();
  }, [sections]);

  if (!sections.length) return null;

  return (
    <div className="sticky top-[120px] mt-8 p-8">
      <div className="mb-5">
        <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-500">
          On this page
        </h3>
      </div>

      <nav>
        <ul className="space-y-1">
          {sections.map((section) => {
            const id = section.heading.toLowerCase().replaceAll(" ", "-");

            const isActive = activeId === id;

            return (
              <li key={id}>
                <a
                  href={`#${id}`}
                  className={`block border-l-2 py-2 pl-4 text-sm transition-all ${
                    isActive
                      ? "border-[#24DEC9] text-slate-900 font-medium"
                      : "border-transparent text-slate-500 hover:text-slate-800"
                  }`}
                >
                  {section.heading}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
};

export default DocsToc;
