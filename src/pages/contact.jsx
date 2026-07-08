import React from "react";
import { motion } from "framer-motion";
import { Send, Check } from "lucide-react";

const ContactSales = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-gray-50 via-white to-white py-24">
      {/* Background */}

      <div className="absolute inset-0 opacity-[0.04]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right,#06b6d4 1px,transparent 1px),
              linear-gradient(to bottom,#06b6d4 1px,transparent 1px)
            `,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div className="absolute left-1/3 top-0 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[170px]" />
      <div className="absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full bg-blue-400/10 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.35fr_0.65fr]">
          {/* ===========================
              LEFT
          ============================ */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10"
          >
            {/* Heading */}

            <span className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
              Contact Enterprise Sales
            </span>

            <h2 className="mt-6 text-4xl font-bold tracking-tight text-slate-900">
              Tell us about your project
            </h2>

            <p className="mt-4 max-w-2xl text-lg leading-8 text-slate-600">
              Our enterprise team typically responds within one business day.
            </p>

            {/* FORM */}

            <form className="mt-12 space-y-6">
              {/* Row 1 */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    First Name *
                  </label>

                  <input
                    type="text"
                    placeholder="John"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Last Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Doe"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>
              </div>

              {/* Row 2 */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Company Name *
                  </label>

                  <input
                    type="text"
                    placeholder="Acme Inc."
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Job Function
                  </label>

                  <input
                    type="text"
                    placeholder="Engineering"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>
              </div>

              {/* Row 3 */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Job Title *
                  </label>

                  <input
                    type="text"
                    placeholder="Senior Data Engineer"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Business Email Address *
                  </label>

                  <input
                    type="email"
                    placeholder="john@company.com"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>
              </div>

              {/* Row 4 */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Phone Number *
                  </label>

                  <input
                    type="text"
                    placeholder="+1 (555) 123-4567"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Country *
                  </label>

                  <input
                    type="text"
                    placeholder="United States"
                    className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                  />
                </div>
              </div>

              {/* Row 5 */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Company Size
                  </label>

                  <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100">
                    <option>Select Company Size</option>
                    <option>1-50</option>
                    <option>51-200</option>
                    <option>201-1000</option>
                    <option>1000+</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Industry
                  </label>

                  <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100">
                    <option>Select Industry</option>
                    <option>Financial Services</option>
                    <option>Healthcare</option>
                    <option>Retail</option>
                    <option>Manufacturing</option>
                    <option>Technology</option>
                    <option>Telecommunications</option>
                    <option>Government</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Row 6 */}

              <div className="grid gap-6 md:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Deployment Preference
                  </label>

                  <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100">
                    <option>Cloud</option>
                    <option>Self Hosted</option>
                    <option>Hybrid</option>
                    <option>Not Sure</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">
                    Cloud Provider
                  </label>

                  <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100">
                    <option>AWS</option>
                    <option>Azure</option>
                    <option>Google Cloud</option>
                    <option>Private Cloud</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* Row 7 */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Expected Data Volume
                </label>

                <select className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100">
                  <option>&lt; 1 TB</option>
                  <option>1–10 TB</option>
                  <option>10–100 TB</option>
                  <option>100+ TB</option>
                </select>
              </div>

              {/* Message */}

              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">
                  Message
                </label>

                <textarea
                  rows={7}
                  placeholder="Tell us about your data platform, current challenges, or what you'd like to build."
                  className="w-full rounded-2xl border border-slate-300 bg-white px-5 py-4 outline-none transition focus:border-cyan-500 focus:ring-4 focus:ring-cyan-100"
                />
              </div>

              {/* Consent */}

              <label className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4">
                <input
                  type="checkbox"
                  className="mt-1 h-4 w-4 accent-cyan-500"
                />

                <span className="text-sm leading-6 text-slate-600">
                  I agree to receive communications from Seg Forge.
                </span>
              </label>

              {/* Submit */}

              <button
                type="submit"
                className="group relative inline-flex w-full items-center justify-center overflow-hidden rounded-xl border border-slate-900 px-8 py-4 font-semibold text-slate-900 transition-colors duration-300 hover:text-white sm:w-auto"
              >
                <span className="absolute inset-y-0 left-0 w-0 bg-[#18D0BB] transition-all duration-300 ease-out group-hover:w-full" />

                <span className="relative z-10 flex items-center gap-2">
                  <Send className="h-4 w-4" />
                  Request Demo
                </span>
              </button>
            </form>
          </motion.div>

          {/* RIGHT SIDE WILL BE ADDED IN PART 2 */}
          <div />
        </div>
      </div>
    </section>
  );
};

export default ContactSales;
