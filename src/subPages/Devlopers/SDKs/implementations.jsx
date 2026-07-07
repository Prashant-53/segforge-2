import SDKCard from "./SDKCard";

const sdks = [
  {
    name: "Python SDK",
    status: "Available",
    color: "emerald",
    description:
      "Type-safe Python client for automating pipelines, CDC streams, catalogs, notebooks, and monitoring.",

    stack: ["Python 3.9+", "Pydantic", "HTTPX", "AsyncIO"],

    install: "pip install segforge-python-sdk",
  },

  {
    name: "TypeScript SDK",
    status: "Available",
    color: "cyan",
    description:
      "Modern TypeScript SDK with full typing support for Node.js and browser applications.",

    stack: ["TypeScript", "Fetch API", "Axios Adapter", "ES Modules"],

    install: "npm install @segforge/sdk",
  },

  {
    name: "Java SDK",
    status: "Roadmap",
    color: "amber",
    description:
      "Enterprise-grade Java SDK designed for Spring Boot applications and reactive services.",

    stack: ["Java 21", "Spring Integration", "Reactive Client"],

    install: "Coming Soon",
  },

  {
    name: "Go SDK",
    status: "Roadmap",
    color: "amber",
    description:
      "Infrastructure-focused SDK built for automation, provisioning, and platform integrations.",

    stack: ["Go 1.23+", "Context Aware APIs", "Infrastructure Automation"],

    install: "Coming Soon",
  },
];
const SDKImplementations = () => {
  return (
    <section className="bg-white py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="max-w-3xl">
          <div className="inline-flex rounded-full bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            SDK Implementations
          </div>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Official SDKs for every environment.
          </h2>

          <p className="mt-6 text-xl leading-relaxed text-slate-600">
            Build automation, integrate applications, and manage your entire
            data platform using native, language-specific client libraries.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2">
          {sdks.map((sdk) => (
            <SDKCard key={sdk.name} sdk={sdk} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SDKImplementations;
