import { useMemo, useState } from "react";

export const useSearch = (docs = []) => {
  const [query, setQuery] = useState("");

  const results = useMemo(() => {
    if (!query.trim()) return [];

    const q = query.toLowerCase();

    return docs.filter((doc) => {
      const title =
        doc.title?.toLowerCase() || "";

      const description =
        doc.description?.toLowerCase() || "";

      const sections =
        doc.sections
          ?.map(
            (s) =>
              `${s.heading} ${s.content}`
          )
          .join(" ")
          .toLowerCase() || "";

      return (
        title.includes(q) ||
        description.includes(q) ||
        sections.includes(q)
      );
    });
  }, [query, docs]);

  return {
    query,
    setQuery,
    results,
  };
};