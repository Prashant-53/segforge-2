import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Cookie,
  KeyRound,
  MoonStar,
  Settings2,
  BarChart3,
  SlidersHorizontal,
} from "lucide-react";

const cookieCategories = [
  {
    title: "Strictly Necessary Cookies",
    icon: ShieldCheck,
    color: "bg-cyan-50 text-cyan-600",
    description:
      "Required for core platform functionality and security. These cookies cannot be disabled while using authenticated Seg Forge services.",
    items: [
      "JWT Authentication",
      "User Sessions",
      "CSRF Protection",
      "Workspace Authentication",
    ],
  },
  {
    title: "Functional Cookies",
    icon: Settings2,
    color: "bg-blue-50 text-blue-600",
    description:
      "Improve your experience by remembering preferences across visits and authenticated sessions.",
    items: [
      "Theme Preference",
      "Workspace Selection",
      "Language Settings",
      "User Preferences",
    ],
  },
  {
    title: "Performance Cookies",
    icon: BarChart3,
    color: "bg-emerald-50 text-emerald-600",
    description:
      "Anonymous usage metrics help us improve platform performance, reliability, and user experience.",
    items: [
      "Anonymous Analytics",
      "Performance Monitoring",
      "Page Load Metrics",
      "Application Improvements",
    ],
  },
];

const CookiesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white py-24">
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

      <div className="absolute right-0 top-24 h-[420px] w-[420px] rounded-full bg-cyan-400/10 blur-[170px]" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-4xl text-center"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-2 text-sm font-medium text-cyan-700">
            <Cookie className="h-4 w-4" />
            Cookies & Similar Technologies
          </div>

          <h2 className="mt-6 text-4xl font-bold text-slate-900 md:text-5xl">
            How We Use Cookies
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-slate-600">
            Seg Forge uses cookies and similar technologies to securely
            authenticate users, remember workspace preferences, improve product
            performance, and provide a consistent experience across the
            platform.
          </p>
        </motion.div>

        {/* Cookie Categories */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {cookieCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-xl"
            >
              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${category.color}`}
              >
                <category.icon className="h-7 w-7" />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-slate-900">
                {category.title}
              </h3>

              <p className="mt-4 leading-7 text-slate-600">
                {category.description}
              </p>

              <div className="mt-8 space-y-3">
                {category.items.map((item) => (
                  <div
                    key={item}
                    className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3"
                  >
                    <div className="h-2.5 w-2.5 rounded-full bg-cyan-500" />

                    <span className="font-medium text-slate-700">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Cookie Preferences */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 overflow-hidden rounded-[32px] border border-cyan-200 bg-gradient-to-br from-cyan-50 via-white to-white"
        >
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] p-10 lg:p-14">
            {/* Left */}

            <div className="flex flex-col justify-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-cyan-500">
                <SlidersHorizontal className="h-8 w-8 text-white" />
              </div>

              <h3 className="mt-6 text-3xl font-bold text-slate-900">
                Cookie Preferences
              </h3>

              <p className="mt-5 text-lg leading-8 text-slate-600">
                You remain in control of how optional cookies are used across
                the Seg Forge website and platform.
              </p>
            </div>

            {/* Right */}

            <div className="space-y-6">
              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <KeyRound className="mt-1 h-6 w-6 text-cyan-600" />

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      Authentication Cookies
                    </h4>

                    <p className="mt-2 leading-7 text-slate-600">
                      Essential cookies used for authentication and security are
                      required for signed-in experiences and cannot be disabled
                      while using protected platform features.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-slate-200 bg-white p-6">
                <div className="flex items-start gap-4">
                  <MoonStar className="mt-1 h-6 w-6 text-cyan-600" />

                  <div>
                    <h4 className="text-lg font-semibold text-slate-900">
                      Personal Preferences
                    </h4>

                    <p className="mt-2 leading-7 text-slate-600">
                      Functional and performance cookies can be modified through
                      your browser settings or future cookie preference controls
                      provided within the Seg Forge platform.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-cyan-200 bg-cyan-50 p-6">
                <h4 className="text-lg font-semibold text-slate-900">
                  Your Choice
                </h4>

                <p className="mt-3 leading-8 text-slate-700">
                  You can review, modify, or remove optional cookie preferences
                  at any time through your browser settings. Disabling certain
                  functional cookies may affect personalization features, while
                  essential security cookies remain necessary for authenticated
                  access to Seg Forge services.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CookiesSection;
