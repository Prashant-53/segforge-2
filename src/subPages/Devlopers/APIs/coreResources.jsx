import { apiGroups } from "./Core-Resources/apiGroups";
import ResourceHeader from "./Core-Resources/sectionheader";
import APIResourceCard from "./Core-Resources/APIcard";

const CoreResourceAPIs = () => {
  return (
    <section className="py-12 bg-slate-50 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-400/10 rounded-full blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ResourceHeader />

        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {apiGroups.map((group) => (
            <APIResourceCard key={group.title} group={group} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoreResourceAPIs;
