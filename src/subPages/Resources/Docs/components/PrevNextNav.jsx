import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Card = ({ title, slug, direction }) => {
  const isPrevious = direction === "previous";

  return (
    <Link
      to={`/docs/${slug}`}
      className={`group flex flex-col rounded-2xl border border-slate-200 bg-white p-5 transition-all hover:border-[#24DEC9] hover:shadow-lg ${
        isPrevious ? "items-start" : "items-end"
      }`}
    >
      <div className="flex items-center gap-2 text-sm text-slate-500">
        {isPrevious ? (
          <>
            <ArrowLeft className="w-4 h-4" />
            Previous
          </>
        ) : (
          <>
            Next
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </div>

      <div className="mt-3 text-base font-semibold text-slate-900 group-hover:text-cyan-700 transition">
        {title}
      </div>
    </Link>
  );
};

const PrevNextNav = ({ previous, next }) => {
  if (!previous && !next) return null;

  return (
    <div className="mt-24 border-t border-slate-200 pt-10">
      <div className="grid md:grid-cols-2 gap-5">
        <div>{previous && <Card {...previous} direction="previous" />}</div>

        <div>{next && <Card {...next} direction="next" />}</div>
      </div>
    </div>
  );
};

export default PrevNextNav;
