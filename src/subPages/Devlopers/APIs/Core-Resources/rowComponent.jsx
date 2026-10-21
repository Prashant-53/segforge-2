import { methodStyles } from "./methodStyles";

const EndpointRow = ({ method, path }) => {
  return (
    <div className="rounded-xl bg-slate-50 px-4 py-3 transition hover:bg-slate-100">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
        {/* HTTP Method */}
        <span
          className={`inline-flex w-fit items-center justify-center rounded-lg px-3 py-1 text-xs font-semibold ${methodStyles[method]}`}
        >
          {method}
        </span>

        {/* Endpoint */}
        <code className="min-w-0 break-all font-mono text-sm text-slate-700 sm:text-base">
          {path}
        </code>
      </div>
    </div>
  );
};

export default EndpointRow;
