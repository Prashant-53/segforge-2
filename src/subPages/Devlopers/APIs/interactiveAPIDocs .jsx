import InteractiveDocsHeader from "./Interactive-API/sectionHeader";
import DocumentationCard from "./Interactive-API/documentationCard";
import { docsPlatforms } from "./Interactive-API/data";

const InteractiveAPIDocs = () => {
  return (
    <section className="py-32 bg-slate-50 relative overflow-hidden">
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <InteractiveDocsHeader />

        <div className="grid lg:grid-cols-2 gap-8 mt-20">
          {docsPlatforms.map((doc) => (
            <DocumentationCard key={doc.title} doc={doc} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveAPIDocs;
