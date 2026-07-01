import React from "react";
import { Link } from "react-router-dom";
import { ChevronRight, Home } from "lucide-react";

const formatText = (text) => {
  return text
    ?.replaceAll("-", " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
};

const Breadcrumbs = ({ category, page, title }) => {
  return (
    <nav
      className="mb-8 flex items-center gap-2 text-sm"
      aria-label="Breadcrumb"
    >
      {/* Home */}

      <Link
        to="/docs/getting-started/what-is-segforge"
        className="flex items-center gap-2 text-slate-500 hover:text-slate-900 transition"
      >
        <Home className="w-4 h-4" />
        <span>Documentation</span>
      </Link>

      <ChevronRight className="w-4 h-4 text-slate-300" />

      {/* Category */}

      <span className="text-slate-500">{formatText(category)}</span>

      <ChevronRight className="w-4 h-4 text-slate-300" />

      {/* Current Page */}

      <span className="font-medium text-slate-900">
        {title || formatText(page)}
      </span>
    </nav>
  );
};

export default Breadcrumbs;
