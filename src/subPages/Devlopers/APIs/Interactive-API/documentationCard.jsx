import { ArrowUpRight } from "lucide-react";

const DocumentationCard = ({ doc }) => {
  const Icon = doc.icon;

  return (
    <div className="group relative overflow-hidden rounded-[32px] border border-slate-200 bg-white p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1">
      {/* Glow */}

      <div
        className={`absolute -top-20 -right-20 h-48 w-48 rounded-full blur-[100px] ${
          doc.color === "cyan" ? "bg-cyan-500/10" : "bg-blue-500/10"
        }`}
      />

      <div className="relative">
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center ${
            doc.color === "cyan" ? "bg-cyan-50" : "bg-blue-50"
          }`}
        >
          <Icon
            className={`w-7 h-7 ${
              doc.color === "cyan" ? "text-cyan-600" : "text-blue-600"
            }`}
          />
        </div>

        <h3 className="mt-6 text-3xl font-bold text-slate-900">{doc.title}</h3>

        <div className="mt-3 inline-flex rounded-lg bg-slate-100 px-3 py-1 font-mono text-sm text-slate-700">
          {doc.path}
        </div>

        <p className="mt-6 text-slate-600 leading-8">{doc.description}</p>

        {/* Features */}

        <div className="mt-10 space-y-4">
          {doc.features.map((feature) => {
            const FeatureIcon = feature.icon;

            return (
              <div key={feature.text} className="flex items-center gap-4">
                <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center">
                  <FeatureIcon className="w-4 h-4 text-slate-600" />
                </div>

                <span className="text-slate-700 font-medium">
                  {feature.text}
                </span>
              </div>
            );
          })}
        </div>

        {/* Button */}

        <button className="group/button mt-10 relative overflow-hidden rounded-2xl bg-slate-900 px-7 py-4 text-white font-medium">
          <span className="absolute inset-0 bg-cyan-500 translate-x-[-100%] group-hover/button:translate-x-0 transition-transform duration-500" />

          <span className="relative flex items-center gap-2">
            Open {doc.title}
            <ArrowUpRight className="w-4 h-4" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default DocumentationCard;
