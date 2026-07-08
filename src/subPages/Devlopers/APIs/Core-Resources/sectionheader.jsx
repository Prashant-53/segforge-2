const ResourceHeader = () => {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
        Core Resource APIs
      </div>

      <h2 className="mt-6 text-4xl font-bold text-slate-900">
        Everything in Seg Forge is programmable.
      </h2>

      <p className="mt-6 text-md text-slate-600 leading-relaxed">
        Manage workspaces, build pipelines, orchestrate CDC, query notebooks,
        and monitor infrastructure through a consistent REST API.
      </p>
    </div>
  );
};

export default ResourceHeader;
