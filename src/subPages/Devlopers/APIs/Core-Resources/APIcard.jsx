import { ArrowRight } from "lucide-react";
import EndpointRow from "./rowComponent";

const APIResourceCard = ({ group }) => {
  const Icon = group.icon;

  return (
    <div className="group rounded-2xl lg:rounded-[32px] border border-slate-200 bg-white p-5 sm:p-6 lg:p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Header */}

      <div className="flex items-start gap-4 sm:gap-5">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-cyan-50 sm:h-14 sm:w-14 sm:rounded-2xl">
          <Icon className="h-6 w-6 text-cyan-600 sm:h-7 sm:w-7" />
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="text-xl font-semibold text-slate-900 sm:text-2xl">
            {group.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-base sm:leading-7">
            {group.description}
          </p>
        </div>
      </div>

      {/* Endpoints */}

      <div className="mt-6 space-y-3 sm:mt-8">
        {group.endpoints.map(([method, path]) => (
          <EndpointRow key={`${method}-${path}`} method={method} path={path} />
        ))}
      </div>
    </div>
  );
};

export default APIResourceCard;
