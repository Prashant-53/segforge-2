import React from "react";
import { Copy, Check } from "lucide-react";
import { useState } from "react";

const CodeBlock = ({ code }) => {
  const [copied, setCopied] = useState(false);

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 2000);
  };

  return (
    <div className="relative mt-6">
      <button
        onClick={copyCode}
        className="absolute top-4 right-4 p-2 rounded-lg bg-slate-800 hover:bg-slate-700 transition"
      >
        {copied ? (
          <Check className="w-4 h-4 text-green-400" />
        ) : (
          <Copy className="w-4 h-4 text-slate-400" />
        )}
      </button>

      <pre className="overflow-x-auto rounded-2xl bg-slate-900 p-6 text-sm text-cyan-300">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const Note = ({ children }) => {
  return (
    <div className="mt-6 rounded-2xl border border-cyan-200 bg-cyan-50 p-5">
      <div className="text-sm text-cyan-800">{children}</div>
    </div>
  );
};

const Warning = ({ children }) => {
  return (
    <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-5">
      <div className="text-sm text-amber-800">{children}</div>
    </div>
  );
};

const DocsContent = ({ doc }) => {
  return (
    <article className="pb-24">
      {/* Title */}

      <header className="mb-14">
        <h1 className="text-5xl font-bold text-slate-900 leading-tight">
          {doc.title}
        </h1>

        {doc.description && (
          <p className="mt-6 text-lg leading-relaxed text-slate-600 max-w-3xl">
            {doc.description}
          </p>
        )}
      </header>

      {/* Sections */}

      <div className="space-y-20">
        {doc.sections?.map((section) => (
          <section
            key={section.heading}
            id={section.heading.toLowerCase().replaceAll(" ", "-")}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-2">
              {section.heading}
            </h2>

            {section.content && (
              <p className="text-slate-600 leading-8 text-[17px] whitespace-pre-line">
                {section.content}
              </p>
            )}

            {section.image && (
              <div className="mt-8 rounded-3xl overflow-hidden border border-slate-200">
                <img
                  src={section.image}
                  alt={section.heading}
                  className="w-full"
                />
              </div>
            )}

            {section.code && <CodeBlock code={section.code} />}

            {section.note && <Note>{section.note}</Note>}

            {section.warning && <Warning>{section.warning}</Warning>}
          </section>
        ))}
      </div>
    </article>
  );
};

export default DocsContent;
