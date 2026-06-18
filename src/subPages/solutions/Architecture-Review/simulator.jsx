import React, { useMemo, useState } from "react";
import { ClipboardCheck } from "lucide-react";

const questions = [
  {
    id: "infrastructure",
    title: "Infrastructure",
  },
  {
    id: "security",
    title: "Security",
  },
  {
    id: "streaming",
    title: "Streaming",
  },
  {
    id: "governance",
    title: "Governance",
  },
  {
    id: "finops",
    title: "FinOps",
  },
];

const ProductionReadinessScorecard = () => {
  const [scores, setScores] = useState({
    infrastructure: 3,
    security: 3,
    streaming: 3,
    governance: 3,
    finops: 3,
  });

  const updateScore = (category, value) => {
    setScores((prev) => ({
      ...prev,
      [category]: value,
    }));
  };

  const readinessScore = useMemo(() => {
    const total = Object.values(scores).reduce((sum, value) => sum + value, 0);

    return Math.round((total / 25) * 100);
  }, [scores]);

  const scoreColor =
    readinessScore >= 80
      ? "text-green-600"
      : readinessScore >= 60
        ? "text-amber-600"
        : "text-red-600";

  return (
    <section className="py-12 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}

        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            <ClipboardCheck className="w-4 h-4" />
            Production Readiness Scorecard
          </div>

          <h2 className="mt-6 text-4xl lg:text-4xl font-bold text-slate-900 leading-[1.05]">
            See how ready your platform
            <br />
            is for enterprise scale.
          </h2>

          <p className="mt-6 text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Answer a short set of questions about infrastructure, governance,
            streaming, and operational practices to receive an instant readiness
            assessment.
          </p>
        </div>

        {/* Assessment */}

        <div className="mt-16 grid lg:grid-cols-2 gap-10">
          {/* Questions */}

          <div className="bg-white border border-slate-200 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">
              Assessment Areas
            </h3>

            <div className="space-y-8">
              {questions.map((item) => (
                <div key={item.id}>
                  <div className="flex justify-between mb-3">
                    <span className="font-medium text-slate-700">
                      {item.title}
                    </span>

                    <span className="text-slate-500">{scores[item.id]}/5</span>
                  </div>

                  <input
                    type="range"
                    min="1"
                    max="5"
                    value={scores[item.id]}
                    onChange={(e) =>
                      updateScore(item.id, Number(e.target.value))
                    }
                    className="w-full"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Results */}

          <div className="bg-white border border-slate-200 rounded-[32px] p-8">
            <h3 className="text-xl font-semibold text-slate-900 mb-8">
              Readiness Assessment
            </h3>

            <div className="text-center border-b border-slate-200 pb-8">
              <div className={`text-6xl font-bold ${scoreColor}`}>
                {readinessScore}
              </div>

              <div className="mt-2 text-slate-500">
                Production Readiness Score
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="font-medium text-slate-900">
                  Security Risk Indicators
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Identity management, access controls, and credential handling
                  review.
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="font-medium text-slate-900">
                  Performance Opportunities
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Streaming, Flink, Kafka, and infrastructure optimization.
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="font-medium text-slate-900">
                  FinOps Recommendations
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Resource utilization and cloud cost optimization.
                </div>
              </div>

              <div className="rounded-2xl bg-slate-50 border border-slate-200 p-5">
                <div className="font-medium text-slate-900">
                  Governance Gaps
                </div>

                <div className="mt-1 text-sm text-slate-500">
                  Lineage, RBAC, compliance, and auditability review.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Enterprise Bar */}

        <div className="mt-16 border-y border-slate-200 py-8">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            <div>
              <div className="text-2xl font-bold text-slate-900">
                Infrastructure
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-slate-900">Security</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-slate-900">Streaming</div>
            </div>

            <div>
              <div className="text-2xl font-bold text-slate-900">
                Governance
              </div>
            </div>

            <div>
              <div className="text-2xl font-bold text-slate-900">FinOps</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductionReadinessScorecard;
