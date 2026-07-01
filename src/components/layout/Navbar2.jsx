import React, { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  ChevronDown,
  Menu,
  X,
  Database,
  Workflow,
  BrainCircuit,
  ShieldCheck,
  GitBranch,
  Brain,
  ChartBar,
  Zap,
  Container,
  Cpu,
  BookOpen,
  Code2,
  Layers3,
  Server,
  Activity,
  ArrowRight,
  Factory,
  TowerControl,
  Handshake,
} from "lucide-react";
import { path } from "framer-motion/client";

const NAV_ITEMS = [
  {
    label: " Why SegForge",
    path: "/why-segforge",
  },
  {
    label: "Product",

    featured: {
      title: "SegForge product",
      description:
        "Unified enterprise product for ETL, orchestration, analytics, notebooks, and AI workloads.",
      cta: "Explore product",
      path: "/product",
    },

    columns: [
      {
        title: "Core product",

        links: [
          {
            name: "ETL Studio",
            icon: Workflow,
            path: "/product/ETL-studio",
          },

          {
            name: "Workflow Engine",
            icon: GitBranch,
            path: "/product/workflow-engine",
          },

          {
            name: "Interactive Notebooks",
            icon: BookOpen,
            path: "/product/notebooks",
          },

          {
            name: "Data Catalog",
            icon: Database,
            path: "/product/data-catalog",
          },

          {
            name: "ML&OPs",
            icon: Brain,
            path: "/product/ml-ops",
          },

          {
            name: "Data Lakehouse",
            icon: Container,
            path: "/product/data-lakehouse",
          },

          {
            name: "Real-Time CDC",
            icon: Zap,
            path: "/product/real-time-cdc",
          },

          {
            name: "Analytics",
            icon: ChartBar,
            path: "/product/analytics",
          },
        ],
      },

      {
        title: "Governance",

        links: [
          {
            name: "Data Lineage",
            icon: Layers3,
            path: "/product/data-lineage",
          },

          {
            name: "Access Control",
            icon: ShieldCheck,
            path: "/product/access-control",
          },

          {
            name: "Compliance",
            icon: ShieldCheck,
            path: "/product/compliance",
          },

          {
            name: "Observability",
            icon: Activity,
            path: "/product/observability",
          },
        ],
      },

      {
        title: "Deployment",

        links: [
          {
            name: "Self-Hosted",
            icon: Server,
            path: "/product/self-hosted",
          },

          {
            name: "Multi-Cloud",
            icon: Database,
            path: "/product/multi-cloud",
          },

          {
            name: "Hybrid Infrastructure",
            icon: Layers3,
            path: "/product/hybrid-infrastructure",
          },
        ],
      },
    ],
  },

  {
    label: "Solutions",
    path: "/solutions",

    columns: [
      {
        title: "Industries",

        links: [
          {
            name: "Financial Services",
            icon: Database,
            path: "/solutions/finance",
          },

          {
            name: "Healthcare",
            icon: ShieldCheck,
            path: "/solutions/healthcare",
          },

          {
            name: "Retail &  E-Commerce",
            icon: Activity,
            path: "/solutions/retail",
          },

          {
            name: "Manufacturing",
            icon: Factory,
            path: "/solutions/manufacturing",
          },
          {
            name: "Technology",
            icon: Cpu,
            path: "/solutions/technology",
          },
          {
            name: "Telecommunications",
            icon: TowerControl,
            path: "/solutions/telecommunications",
          },
        ],
      },
      {
        title: "Services & Adoption",

        links: [
          {
            name: "Migration Services",
            icon: Database,
            path: "/solutions/migration-services",
          },

          {
            name: "Architecture Review",
            icon: ShieldCheck,
            path: "/solutions/architecture-review",
          },

          {
            name: "Deployment Assistance",
            icon: Activity,
            path: "/solutions/deployment-assistance",
          },

          // {
          //   name: "Training & Enablement",
          //   icon: Cpu,
          //   path: "/solutions/training&enablement",
          // },
          {
            name: "Partner Ecosystem",
            icon: Handshake,
            path: "/solutions/partner-ecosystem",
          },
        ],
      },
      // {
      //   title: "Use Cases",

      //   links: [
      //     {
      //       name: "Real-Time Analytics",
      //       icon: Activity,
      //       path: "/solutions/real-time-analytics",
      //     },

      //     {
      //       name: "Operational Intelligence",
      //       icon: BrainCircuit,
      //       path: "/solutions/operational-intelligence",
      //     },

      //     {
      //       name: "Enterprise Reporting",
      //       icon: BookOpen,
      //       path: "/solutions/enterprise-reporting",
      //     },

      //     {
      //       name: "Predictive Maintenance",
      //       icon: Cpu,
      //       path: "/solutions/predictive-maintenance",
      //     },
      //   ],
      // },
      {
        title: "By Team",

        links: [
          {
            name: "Data Engineering",
            icon: Activity,
            path: "/solutions/data-enginnering",
          },

          {
            name: "Analytics Teams",
            icon: BrainCircuit,
            path: "/solutions/analytics-team",
          },

          {
            name: "Machine Learning Teams",
            icon: BookOpen,
            path: "/solutions/ML-teams",
          },

          // {
          //   name: "PLatform Engineering",
          //   icon: Cpu,
          //   path: "/solutions/platform-engineering",
          // },
          // {
          //   name: "Data Governance Teams",
          //   icon: Cpu,
          //   path: "/solutions/data-governance-teams",
          // },
          // {
          //   name: "IT & Infrastructure",
          //   icon: Cpu,
          //   path: "/solutions/it&infrastructure",
          // },
        ],
      },
    ],
  },

  {
    label: "Resources",
    path: "/resources",

    columns: [
      {
        title: "Learn",

        links: [
          {
            name: "Documentation",
            icon: BookOpen,
            path: "/docs/getting-started/what-is-segforge",
          },

          {
            name: "Tutorials",
            icon: Workflow,
            path: "/resources/tutorials",
          },

          // {
          //   name: "Webinars",
          //   icon: Activity,
          //   path: "/resources/webinars",
          // },

          // {
          //   name: "Certifications",
          //   icon: ShieldCheck,
          //   path: "/resources/certifications",
          // },
        ],
      },

      {
        title: "Insights",

        links: [
          // {
          //   name: "Engineering Blog",
          //   icon: BookOpen,
          //   path: "/resources/blog",
          // },

          // {
          //   name: "Whitepapers",
          //   icon: Layers3,
          //   path: "/resources/whitepapers",
          // },

          // {
          //   name: "Case Studies",
          //   icon: Database,
          //   path: "/resources/case-studies",
          // },

          {
            name: "Changelog",
            icon: GitBranch,
            path: "/resources/changelog",
          },
        ],
      },
    ],
  },

  {
    label: "Developers",
    path: "/developers",

    columns: [
      {
        title: "Build",

        links: [
          {
            name: "APIs",
            icon: Code2,
            path: "/developers/apis",
          },

          {
            name: "SDKs",
            icon: Cpu,
            path: "/developers/sdks",
          },

          {
            name: "CLI",
            icon: Workflow,
            path: "/developers/cli",
          },

          {
            name: "Integrations",
            icon: GitBranch,
            path: "/developers/integrations",
          },
        ],
      },

      {
        title: "Explore",

        links: [
          {
            name: "GitHub",
            icon: Code2,
            path: "/developers/github",
          },

          {
            name: "Quickstarts",
            icon: Workflow,
            path: "/developers/quickstarts",
          },

          {
            name: "Open Source",
            icon: Database,
            path: "/developers/open-source",
          },

          {
            name: "Reference Architectures",
            icon: Layers3,
            path: "/developers/reference-architectures",
          },
        ],
      },
    ],
  },

  {
    label: "Pricing",
    path: "/pricing",
  },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const megaMenuRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    const handleClickOutside = (e) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target)) {
        setOpenMenu(null);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* OVERLAY */}
      {openMenu && (
        <div
          onClick={() => setOpenMenu(null)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
        />
      )}

      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#FAF9F6] backdrop-blur-2xl border-b border-white/5"
            : "bg-white"
        }`}
      >
        <div className="max-w-[1600px] mx-auto px-6 xl:px-10">
          <div className="flex items-center justify-between h-24">
            {/* LOGO */}
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg"></div>
              <span className="text-xl font-bold text-slate-900">SegForge</span>
            </Link>
            {/* DESKTOP NAV */}
            <nav className="hidden 2xl:flex items-center gap-1">
              {NAV_ITEMS.map((item) => {
                const hasMegaMenu = item.columns;

                return (
                  <div key={item.label} className="relative">
                    {hasMegaMenu ? (
                      <button
                        onMouseDown={(e) => e.stopPropagation()}
                        onClick={() =>
                          setOpenMenu(
                            openMenu === item.label ? null : item.label,
                          )
                        }
                        className={`flex items-center gap-1.5 px-5 py-2.5 rounded-lg transition text-[14px] font-medium ${
                          openMenu === item.label
                            ? "text-[#040914] bg-white/5"
                            : "text-[#040914] hover:text-[#2e55a7] hover:bg-white/5"
                        }`}
                      >
                        {item.label}

                        <ChevronDown
                          className={`w-4 h-4 transition ${
                            openMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <Link
                        to={item.path}
                        className="flex items-center gap-1.5 px-5 py-2.5 rounded-lg transition text-[14px] font-medium text-black hover:text-[#2e55a7] hover:bg-white/5"
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                );
              })}
            </nav>

            {/* CTA */}
            <div className="hidden xl:flex items-center gap-3">
              <a
                href="#"
                className="text-sm text-black hover:text-[#2e55a7] transition"
              >
                Sign In
              </a>

              <a
                href="#"
                className="px-5 py-3 rounded-full border border-cyan-400/30 text-cyan-300 hover:bg-cyan-400/10 transition text-sm font-medium"
              >
                Contact Sales
              </a>

              <a
                href="#"
                className="px-6 py-3 rounded-full bg-cyan-400 hover:bg-cyan-300 text-black font-semibold transition text-sm"
              >
                Start Building
              </a>
            </div>
            {/* MOBILE TOGGLE */}
            <button
              className="xl:hidden text-[#040914]"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        {/* FULL WIDTH MEGA MENU */}
        {openMenu && (
          <div
            ref={megaMenuRef}
            className="fixed left-0 top-24 w-screen bg-white/98 backdrop-blur-3xl border-t border-white/5 border-b border-white/5 z-50"
          >
            <div className="max-w-[1800px] mx-auto px-10 py-10">
              {NAV_ITEMS.filter((item) => item.label === openMenu).map(
                (item) => (
                  <div key={item.label} className="grid grid-cols-12 gap-12">
                    {/* FEATURED */}
                    {item.featured && (
                      <div className="col-span-3 pr-8 border-r border-white/5">
                        {" "}
                        <p className="text-xs uppercase tracking-[0.22em] text-cyan-500">
                          {" "}
                          product{" "}
                        </p>{" "}
                        <h3 className="mt-4 text-3xl font-semibold text-[#040914] leading-tight">
                          {" "}
                          {item.featured.title}{" "}
                        </h3>{" "}
                        <p className="mt-5 text-slate-800 leading-relaxed">
                          {" "}
                          {item.featured.description}{" "}
                        </p>{" "}
                        <Link
                          to={item.featured.path}
                          onClick={() => setOpenMenu(null)}
                          className="inline-flex items-center gap-2 mt-6 text-cyan-500 hover:text-cyan-300 transition"
                        >
                          {" "}
                          {item.featured.cta}{" "}
                          <ArrowRight className="w-4 h-4" />{" "}
                        </Link>{" "}
                      </div>
                    )}
                    {/* MENU CONTENT */}
                    <div
                      className={`grid gap-12 ${item.columns.length === 4 ? "grid-cols-4" : item.columns.length === 3 ? "grid-cols-3" : "grid-cols-2"} ${item.featured ? "col-span-9" : "col-span-12"}`}
                    >
                      {" "}
                      {item.columns.map((column, idx) => (
                        <div
                          key={column.title}
                          className={`${idx !== 0 ? "border-l border-white/5 pl-5" : ""}`}
                        >
                          {" "}
                          <p className="text-xs uppercase tracking-[0.2em] text-cyan-500 mb-6">
                            {" "}
                            {column.title}{" "}
                          </p>{" "}
                          <ul className="space-y-1">
                            {" "}
                            {column.links.map((link) => {
                              const Icon = link.icon;
                              return (
                                <li key={link.name}>
                                  {" "}
                                  <Link
                                    to={link.path}
                                    onClick={() => setOpenMenu(null)}
                                    className="flex items-start gap-2 group"
                                  >
                                    {" "}
                                    <div className="w-10 h-10 rounded-xl border border-white/5 bg-white/[0.03] flex items-center justify-center group-hover:border-cyan-400/30 group-hover:bg-cyan-400/5 transition">
                                      {" "}
                                      <Icon className="w-4.5 h-4.5 text-cyan-700" />{" "}
                                    </div>{" "}
                                    <div>
                                      {" "}
                                      <p className="text-[14px] mt-2  text-[#040914]  group-hover:text-[#9e9c9c] transition font-medium">
                                        {" "}
                                        {link.name}{" "}
                                      </p>{" "}
                                    </div>{" "}
                                  </Link>{" "}
                                </li>
                              );
                            })}{" "}
                          </ul>{" "}
                        </div>
                      ))}{" "}
                    </div>
                  </div>
                ),
              )}
            </div>
          </div>
        )}
        {/* MOBILE MENU */}
        {mobileOpen && (
          <div className="xl:hidden border-t border-white/5 bg-white px-6 pb-8 pt-4 max-h-[calc(100vh-96px)] overflow-y-auto">
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => {
                const hasMegaMenu = item.columns;

                return (
                  <li key={item.label} className="border-b border-white/5 pb-2">
                    {hasMegaMenu ? (
                      <>
                        {/* MAIN BUTTON */}
                        <button
                          onClick={() =>
                            setMobileDropdown(
                              mobileDropdown === item.label ? null : item.label,
                            )
                          }
                          className="w-full flex items-center justify-between py-4 text-black"
                        >
                          <span className="text-[15px] font-medium">
                            {item.label}
                          </span>

                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-300 ${
                              mobileDropdown === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>

                        {/* SUBMENU */}
                        {mobileDropdown === item.label && (
                          <div className="pb-4 pl-2 pr-1">
                            <div className="space-y-6">
                              {item.columns.map((column) => (
                                <div key={column.title}>
                                  <p className="text-[11px] uppercase tracking-[0.18em] text-cyan-400 mb-4">
                                    {column.title}
                                  </p>

                                  <ul className="space-y-3">
                                    {column.links.map((link) => {
                                      const Icon = link.icon;

                                      return (
                                        <li key={link.name}>
                                          <Link
                                            to={link.path}
                                            onClick={() => {
                                              setMobileOpen(false);
                                              setMobileDropdown(null);
                                            }}
                                            className="flex items-center gap text-black hover:text-cyan-500 transition"
                                          >
                                            <div className="w-8 h-8 rounded-lg bg-white/[0.03] border border-white/5 flex items-center justify-center">
                                              <Icon className="w-4 h-4 text-cyan-300" />
                                            </div>

                                            <span className="text-sm">
                                              {link.name}
                                            </span>
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center py-4 text-[15px] font-medium text-black "
                      >
                        {item.label}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>

            {/* MOBILE CTA */}
            <div className="mt-6 flex flex-col gap-3">
              <Link
                to="/contact-sales"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 rounded-full border border-cyan-400/30 text-black text-center"
              >
                Contact Sales
              </Link>

              <Link
                to="/start-building"
                onClick={() => setMobileOpen(false)}
                className="w-full py-3 rounded-full bg-cyan-400 text-black font-semibold text-center"
              >
                Start Building
              </Link>
            </div>
          </div>
        )}
      </header>
    </>
  );
};

export default Navbar;
