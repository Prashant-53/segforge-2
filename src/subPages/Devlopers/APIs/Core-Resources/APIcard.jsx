import { ArrowRight } from "lucide-react";
import EndpointRow from "./rowComponent";

const APIResourceCard = ({ group }) => {
  const Icon = group.icon;

  return (
    <div className="group rounded-[32px] border border-slate-200 bg-white p-8 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
      <div className="flex items-start gap-5">
        <div className="w-14 h-14 rounded-2xl bg-cyan-50 flex items-center justify-center shrink-0">
          <Icon className="w-7 h-7 text-cyan-600" />
        </div>

        <div>
          <h3 className="text-2xl font-semibold text-slate-900">
            {group.title}
          </h3>

          <p className="mt-2 text-slate-600 leading-7">{group.description}</p>
        </div>
      </div>

      <div className="mt-8 space-y-3">
        {group.endpoints.map(([method, path]) => (
          <EndpointRow key={`${method}-${path}`} method={method} path={path} />
        ))}
      </div>

      <button className="mt-8 flex items-center gap-2 text-cyan-600 font-medium group-hover:gap-3 transition-all">
        View Reference
        <ArrowRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default APIResourceCard;
