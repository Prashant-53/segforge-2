import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";

const footerSections = [
  {
    title: "Product",
    links: [
      {
        title: "ETL Studio",
        to: "/product/etl-studio",
      },
      {
        title: "Workflow Engine",
        to: "/product/workflow-engine",
      },
      {
        title: "Interactive Notebooks",
        to: "/product/notebooks",
      },
      {
        title: "Data Catalog",
        to: "/product/catalog",
      },
      {
        title: "Real-Time CDC",
        to: "/product/cdc",
      },
      {
        title: "Lakehouse",
        to: "/product/lakehouse",
      },
      {
        title: "ML & AI",
        to: "/product/mlops",
      },
    ],
  },
  {
    title: "Industries",
    links: [
      {
        title: "Financial Services",
        to: "/solutions/financial-services",
      },
      {
        title: "Healthcare",
        to: "/solutions/healthcare",
      },
      {
        title: "Retail & E-Commerce",
        to: "/solutions/retail",
      },
      {
        title: "Manufacturing",
        to: "/solutions/manufacturing",
      },
      {
        title: "Technology",
        to: "/solutions/technology",
      },
      {
        title: "Telecommunications",
        to: "/solutions/telecommunications",
      },
    ],
  },

  {
    title: "Services & Adoption",
    links: [
      {
        title: "Migration Services",
        to: "/services/migration",
      },
      {
        title: "Architecture Review",
        to: "/services/architecture-review",
      },
      {
        title: "Deployment Assistance",
        to: "/services/deployment",
      },
      {
        title: "Partner Ecosystem",
        to: "/services/partners",
      },
    ],
  },

  {
    title: "By Team",
    links: [
      {
        title: "Data Engineering",
        to: "/teams/data-engineering",
      },
      {
        title: "Analytics Teams",
        to: "/teams/analytics",
      },
      {
        title: "Machine Learning Teams",
        to: "/teams/ml",
      },
    ],
  },

  {
    title: "Developers",
    links: [
      {
        title: "Documentation",
        to: "/docs",
      },
      {
        title: "APIs",
        to: "/developers/apis",
      },
      {
        title: "SDKs",
        to: "/developers/sdks",
      },
      {
        title: "CLI",
        to: "/developers/cli",
      },
      {
        title: "Integrations",
        to: "/developers/integrations",
      },
      {
        title: "GitHub",
        to: "/github",
      },
    ],
  },

  {
    title: "Resources",
    links: [
      {
        title: "Documentation",
        to: "/docs/getting-started/what-is-segforge",
      },
      {
        title: "Tutorials",
        to: "/resources/tutorials",
      },
      {
        title: "Quickstarts",
        to: "/resources/quickstarts",
      },
      {
        title: "Reference Architectures",
        to: "/reference-architectures",
      },
      {
        title: "Changelog",
        to: "/resources/changelog",
      },
    ],
  },

  // {
  //   title: "Company",
  //   links: [
  //     {
  //       title: "About",
  //       to: "/about",
  //     },
  //     {
  //       title: "Pricing",
  //       to: "/pricing",
  //     },
  //     {
  //       title: "Contact Sales",
  //       to: "/contact",
  //     },
  //     {
  //       title: "Security",
  //       to: "/security",
  //     },
  //     {
  //       title: "Compliance",
  //       to: "/compliance",
  //     },
  //     {
  //       title: "Privacy Policy",
  //       to: "/privacy",
  //     },
  //     {
  //       title: "Terms of Service",
  //       to: "/terms",
  //     },
  //   ],
  // },
];
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-20 lg:grid-cols-[340px_1fr]">
          {/* ================= LEFT ================= */}

          <div>
            <div className="flex items-center gap-3">
              <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600" />

              <span className="text-2xl font-bold">SegForge</span>
            </div>

            <p className="mt-6 max-w-sm leading-7 text-slate-400">
              Unified platform for ETL, CDC, lakehouse analytics, orchestration,
              notebooks and AI.
            </p>

            <div className="mt-8 flex gap-5">
              <a
                href="https://github.com/vaibhav-zoro/ETL-Studio-development/tree/kubernetes"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                <FaGithub size={18} />
              </a>

              <a
                href="https://www.linkedin.com/company/segmetriq-analytics-llp/"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.youtube.com/@seganalytics"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                <FaYoutube size={18} />
              </a>
            </div>
          </div>

          {/* ================= RIGHT ================= */}

          <div className="grid grid-cols-2 gap-x-14 gap-y-14 md:grid-cols-3 xl:grid-cols-4">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">
                  {section.title}
                </h3>

                <ul className="space-y-4">
                  {section.links.map((link) => {
                    const Icon = link.icon;

                    return (
                      <li key={link.title}>
                        <Link
                          to={link.to}
                          className="group flex items-center gap-3 text-sm text-slate-400 transition hover:text-cyan-400"
                        >
                          {Icon && (
                            <Icon className="h-4 w-4 text-cyan-500 transition group-hover:scale-110" />
                          )}

                          {link.title}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ================= Bottom ================= */}

        <div className="mt-16 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
          <p>© 2026 SegForge. All rights reserved.</p>

          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-cyan-400">
              Privacy & Terms
            </Link>

            {/* <Link to="/terms" className="hover:text-cyan-400">
              Terms
            </Link>

            <Link to="/security" className="hover:text-cyan-400">
              Security
            </Link> */}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
