const InteractiveDocsHeader = () => {
  return (
    <div className="max-w-3xl">
      <div className="inline-flex px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
        Interactive API Documentation
      </div>

      <h2 className="mt-6 text-5xl font-bold text-slate-900">
        Explore and test the API live.
      </h2>

      <p className="mt-6 text-xl text-slate-600 leading-relaxed">
        Every Seg Forge deployment ships with auto-generated documentation that
        always reflects the current API implementation.
      </p>
    </div>
  );
};

export default InteractiveDocsHeader;
