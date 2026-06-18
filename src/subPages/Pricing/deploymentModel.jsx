import React from "react";
import { Layers3 } from "lucide-react";

const plans = [
  {
    name: "Community",
    price: "$0",
    suffix: "/ Month",
    bestFor: ["Local Development", "POCs", "Individual Engineers"],
    features: [
      "Visual ETL Studio",
      "Up to 5 CDC Sources",
      "90+ Transformations",
      "Docker Deployment",
      "Community Support",
    ],
  },
  {
    name: "Business",
    price: "Usage-Based",
    featured: true,
    bestFor: ["Production Workloads", "Managed Operations", "Fast Deployment"],
    features: [
      "Managed Flink",
      "Managed Kafka",
      "Managed Iceberg",
      "99.9% SLA",
      "Automated Backups",
      "Email Support",
    ],
  },
  {
    name: "Enterprise",
    price: "Custom Contract",
    bestFor: ["Large Organizations", "Sovereign Cloud", "Regulated Industries"],
    features: [
      "Hybrid Cloud",
      "EKS Infrastructure Manager",
      "Azure AD SSO",
      "Advanced RBAC",
      "Private Networking",
      "24/7 Priority Support",
    ],
  },
];

const DeploymentModels = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 text-cyan-700 text-sm font-medium">
            <Layers3 className="w-4 h-4" />
            Pricing Tiers
          </div>

          <h2 className="mt-6 text-5xl font-bold text-slate-900">
            Choose the deployment model
            <br />
            that fits your organization.
          </h2>
        </div>

        <div className="mt-16 grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`rounded-[32px] border p-8 ${
                plan.featured
                  ? "border-cyan-300 bg-white shadow-xl"
                  : "border-slate-200 bg-white"
              }`}
            >
              <h3 className="text-2xl font-bold">{plan.name}</h3>

              <div className="mt-6 text-4xl font-bold">{plan.price}</div>

              {plan.suffix && (
                <div className="text-slate-500">{plan.suffix}</div>
              )}

              <div className="mt-8">
                <div className="font-semibold text-slate-900">Best For</div>

                <ul className="mt-4 space-y-2 text-slate-600">
                  {plan.bestFor.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="mt-8">
                <div className="font-semibold text-slate-900">Features</div>

                <ul className="mt-4 space-y-2 text-slate-600">
                  {plan.features.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeploymentModels;
