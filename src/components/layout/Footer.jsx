import React from "react";
import { Link } from "react-router-dom";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaYoutube,
} from "react-icons/fa";
import Logo from "../../assets/segforge-logo.png";

const footerSections = [
  {
    title: "Product",
    links: [
      {
        title: "ETL Studio",
        to: "/product/etl-studio",
      },
      {
        title: "Orchestration",
        to: "/product/orchestration",
      },
      {
        title: "SQL Worksheets",
        to: "/product/sql-worksheets",
      },
      {
        title: "Real-Time CDC",
        to: "/product/real-time-cdc",
      },
      {
        title: "Data Lakehouse",
        to: "/product/data-lakehouse",
      },
      {
        title: "MLOPs",
        to: "/product/ml-ops",
      },
      {
        title: "AI Features",
        to: "/product/ai",
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
        to: "/solutions/migration-services",
      },
      {
        title: "Architecture Review",
        to: "/solutions/architecture-review",
      },
      {
        title: "Deployment Assistance",
        to: "/solutions/deployment-assistance",
      },
      {
        title: "Partner Ecosystem",
        to: "/solutions/partner-ecosystem",
      },
    ],
  },

  {
    title: "By Team",
    links: [
      {
        title: "Data Engineering",
        to: "/solutions/data-enginnering",
      },
      {
        title: "Analytics Teams",
        to: "/solutions/analytics-team",
      },
      {
        title: "Machine Learning Teams",
        to: "/solutions/ML-teams",
      },
    ],
  },

  // {
  //   title: "Developers",
  //   links: [
  //     {
  //       title: "APIs",
  //       to: "/developers/apis",
  //     },
  //     {
  //       title: "SDKs",
  //       to: "/developers/sdks",
  //     },
  //     {
  //       title: "CLI",
  //       to: "/developers/cli",
  //     },
  //     {
  //       title: "Integrations",
  //       to: "/developers/integrations",
  //     },
  //     {
  //       title: "GitHub",
  //       to: "/github",
  //     },

  //     {
  //       title: "Open Source",
  //       to: "/developers/quickstarts",
  //     },
  //   ],
  // },

  {
    title: "Resources",
    links: [
      {
        title: "Documentation",
        to: "/docs/getting-started/what-is-segforge",
      },
      // {
      //   title: "Tutorials",
      //   to: "/resources/tutorials",
      // },

      // {
      //   title: "Changelog",
      //   to: "/resources/changelog",
      // },
    ],
  },
];
const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <div className="flex flex-col">
          <div className="grid grid-cols-2 gap-x-10 gap-y-10 md:grid-cols-3 xl:grid-cols-5">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h3 className="mb-6 text-sm font-semibold uppercase tracking-widest text-white">
                  {section.title}
                </h3>

                <ul className="space-y-3">
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

          <div className=" flex flex-col items-center justify-center">
            <div className="flex  mt-5 gap-3">
              {/* <img
                src={Logo}
                alt="SegForge Logo"
                className="h-18 w-18 object-contain"
              /> */}
              <span className="text-2xl mt-5 font-bold">
                Seg<span className="text-[#18D0BB]">Forge</span>
              </span>
            </div>

            <p className="mt-5 max-w-sm text-md text-center leading-6 text-slate-400">
              Unified platform for ETL, CDC, lakehouse analytics, orchestration,
              notebooks and AI.
            </p>

            <div className="mt-4 flex gap-5">
              <a
                href="https://www.linkedin.com/company/segmetriq-analytics-llp/"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                <FaLinkedin size={20} />
              </a>
              <a
                href="https://www.youtube.com/@seganalytics"
                className="text-slate-400 transition hover:text-cyan-400"
              >
                <FaYoutube size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* ================= Bottom ================= */}

        <div className="mt-5 flex flex-col gap-4 border-t border-slate-800 pt-8 text-sm text-slate-500 md:flex-row md:items-center md:justify-between">
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
