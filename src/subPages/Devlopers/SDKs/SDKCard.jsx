import { Package, Terminal, CheckCircle2, Clock3 } from "lucide-react";

const SDKCard = ({ sdk }) => {
  const available = sdk.status === "Available";

  return (
    <div className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}

      <div className="flex items-center justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600">
          <Package className="h-7 w-7" />
        </div>

        <div
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            available
              ? "bg-emerald-100 text-emerald-700"
              : "bg-amber-100 text-amber-700"
          }`}
        >
          {available ? (
            <span className="flex items-center gap-1">
              <CheckCircle2 className="h-3 w-3" />
              Available
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <Clock3 className="h-3 w-3" />
              Roadmap
            </span>
          )}
        </div>
      </div>

      <h3 className="mt-6 text-2xl font-bold text-slate-900">{sdk.name}</h3>

      <p className="mt-4 text-slate-600 leading-7">{sdk.description}</p>

      {/* Tech Stack */}

      <div className="mt-8 flex flex-wrap gap-2">
        {sdk.stack.map((item) => (
          <div
            key={item}
            className="rounded-xl bg-slate-100 px-3 py-2 text-sm font-medium text-slate-700"
          >
            {item}
          </div>
        ))}
      </div>

      {/* Install */}

      <div className="mt-8 rounded-2xl bg-slate-950 p-5">
        <div className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
          <Terminal className="h-4 w-4" />
          Installation
        </div>

        <code className="text-sm text-cyan-300">{sdk.install}</code>
      </div>
    </div>
  );
};

export default SDKCard;
