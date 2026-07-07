import { methodStyles } from "./methodStyles";

const EndpointRow = ({ method, path }) => {
  return (
    <div className="flex items-center gap-4 rounded-xl bg-slate-50 px-4 py-3">
      <span
        className={`px-3 py-1 rounded-lg text-xs font-semibold ${methodStyles[method]}`}
      >
        {method}
      </span>

      <code className="text-sm text-slate-700 font-mono">{path}</code>
    </div>
  );
};

export default EndpointRow;
