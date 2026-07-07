import QuickStartHeader from "./Quick-Start/header";
import QuickStartCard from "./Quick-Start/card";
import { quickStartExamples } from "./Quick-Start/data";

const QuickStartExamples = () => {
  return (
    <section className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <QuickStartHeader />

        <div className="mt-20 grid gap-8">
          {quickStartExamples.map((example) => (
            <QuickStartCard key={example.title} example={example} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default QuickStartExamples;
