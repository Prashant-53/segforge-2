import React, { useState } from "react";
import { Copy, Check, Terminal } from "lucide-react";

const CodeBlock = ({ code, language = "bash", title }) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 shadow-sm">
      {/* Header */}

      <div className="flex items-center justify-between border-b border-slate-700 bg-slate-800 px-5 py-3">
        <div className="flex items-center gap-3">
          <Terminal className="h-4 w-4 text-cyan-400" />

          <div className="flex items-center gap-2">
            {title && (
              <span className="text-sm font-medium text-slate-200">
                {title}
              </span>
            )}

            <span className="rounded-md bg-slate-700 px-2 py-1 text-xs text-slate-300">
              {language}
            </span>
          </div>
        </div>

        <button
          onClick={handleCopy}
          className="flex items-center gap-2 rounded-lg border border-slate-600 px-3 py-1.5 text-sm text-slate-300 transition hover:border-slate-500 hover:bg-slate-700"
        >
          {copied ? (
            <>
              <Check className="h-4 w-4 text-green-400" />
              Copied
            </>
          ) : (
            <>
              <Copy className="h-4 w-4" />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code */}

      <pre className="overflow-x-auto bg-slate-900 p-6 text-sm leading-7 text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
};

export default CodeBlock;
