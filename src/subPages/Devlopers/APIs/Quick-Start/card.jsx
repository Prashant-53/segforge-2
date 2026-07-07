import { ArrowUpRight } from "lucide-react";

const QuickStartCard = ({ example }) => {
  return (
    <div className="rounded-[32px] border border-slate-200 bg-white overflow-hidden shadow-sm hover:shadow-lg transition">
      {/* Header */}

      <div className="border-b border-slate-200 p-8">
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-slate-900">{example.title}</h3>

          <span
            className={`rounded-full px-3 py-1 text-xs font-semibold ${
              example.method === "GET"
                ? "bg-emerald-100 text-emerald-700"
                : "bg-cyan-100 text-cyan-700"
            }`}
          >
            {example.method}
          </span>
        </div>

        <p className="mt-4 text-slate-600 leading-7">{example.description}</p>

        <div className="mt-5 rounded-xl bg-slate-100 px-4 py-3 font-mono text-sm text-slate-700">
          {example.endpoint}
        </div>
      </div>

      {/* Code */}

      <div className="bg-slate-950 p-8">
        <pre className="overflow-x-auto text-sm text-cyan-300">
          <code>{example.code}</code>
        </pre>
      </div>
    </div>
  );
};

export default QuickStartCard;
