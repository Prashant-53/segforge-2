import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [platformMenuOpen, setPlatformMenuOpen] = useState(false);
  const [mobilePlatformOpen, setMobilePlatformOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0  backdrop Gradient border-b border-gray-200 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg"></div>
            <span className="text-xl font-bold text-slate-900">SegForge</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <div
              className="relative"
              onMouseEnter={() => setPlatformMenuOpen(true)}
              onMouseLeave={() => setPlatformMenuOpen(false)}
            >
              <button className="flex items-center space-x-1 text-white font-bold  hover:text-cyan-600 transition-colors">
                <span>Platform</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              <AnimatePresence>
                {platformMenuOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-1/2 -translate-x-1/2 top-full mt-2 w-screen max-w-4xl"
                  >
                    <div className="bg-white rounded-lg shadow-xl border border-gray-200 p-8">
                      <div className="grid grid-cols-3 gap-8">
                        <div>
                          <h3 className="text-sm font-semibold text-[#0000FF] mb-4">
                            Platform
                          </h3>
                          <ul className="space-y-3">
                            <li>
                              <Link
                                to="/platform"
                                className="text-slate-600 hover:text-cyan-600 transition-colors"
                              >
                                Overview
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/platform"
                                className="text-slate-600 hover:text-cyan-600 transition-colors"
                              >
                                Data Engineering
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/platform"
                                className="text-slate-600 hover:text-cyan-600 transition-colors"
                              >
                                AI & ML
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/platform"
                                className="text-slate-600 hover:text-cyan-600 transition-colors"
                              >
                                Open Lakehouse
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 mb-4">
                            Governance
                          </h3>
                          <ul className="space-y-3">
                            <li>
                              <Link
                                to="/platform"
                                className="text-slate-600 hover:text-cyan-600 transition-colors"
                              >
                                Data Lineage
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/platform"
                                className="text-slate-600 hover:text-cyan-600 transition-colors"
                              >
                                RBAC
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/platform"
                                className="text-slate-600 hover:text-cyan-600 transition-colors"
                              >
                                Compliance
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/platform"
                                className="text-slate-600 hover:text-cyan-600 transition-colors"
                              >
                                Observability
                              </Link>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h3 className="text-sm font-semibold text-slate-900 mb-4">
                            Infrastructure
                          </h3>
                          <ul className="space-y-3">
                            <li>
                              <Link
                                to="/platform"
                                className="text-slate-600 hover:text-cyan-600 transition-colors"
                              >
                                Kubernetes
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/platform"
                                className="text-slate-600 hover:text-cyan-600 transition-colors"
                              >
                                Multi-Cloud
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/platform"
                                className="text-slate-600 hover:text-cyan-600 transition-colors"
                              >
                                Hybrid Deployment
                              </Link>
                            </li>
                            <li>
                              <Link
                                to="/platform"
                                className="text-slate-600 hover:text-cyan-600 transition-colors"
                              >
                                High Availability
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/"
              className="text-slate-700 hover:text-cyan-600 transition-colors"
            >
              Solutions
            </Link>
            <Link
              to="/"
              className="text-slate-700 hover:text-cyan-600 transition-colors"
            >
              Resources
            </Link>
            <Link
              to="/"
              className="text-slate-700 hover:text-cyan-600 transition-colors"
            >
              Developers
            </Link>
            <Link
              to="/"
              className="text-slate-700 hover:text-cyan-600 transition-colors"
            >
              Pricing
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-slate-700 hover:text-cyan-600 transition-colors">
              Sign in
            </button>
            <button className="px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden text-slate-700"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-4 space-y-4">
              <div>
                <button
                  onClick={() => setMobilePlatformOpen(!mobilePlatformOpen)}
                  className="flex items-center justify-between w-full text-slate-700 font-medium"
                >
                  <span>Platform</span>
                  <ChevronDown
                    className={`w-4 h-4 transition-transform ${mobilePlatformOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {mobilePlatformOpen && (
                  <div className="mt-2 ml-4 space-y-2">
                    <Link to="/platform" className="block text-slate-600">
                      Overview
                    </Link>
                    <Link to="/platform" className="block text-slate-600">
                      Data Engineering
                    </Link>
                    <Link to="/platform" className="block text-slate-600">
                      AI & ML
                    </Link>
                    <Link to="/platform" className="block text-slate-600">
                      Open Lakehouse
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/" className="block text-slate-700">
                Solutions
              </Link>
              <Link to="/" className="block text-slate-700">
                Resources
              </Link>
              <Link to="/" className="block text-slate-700">
                Developers
              </Link>
              <Link to="/" className="block text-slate-700">
                Pricing
              </Link>
              <div className="pt-4 space-y-2">
                <button className="w-full text-slate-700 py-2">Sign in</button>
                <button className="w-full px-4 py-2 bg-slate-900 text-white rounded-lg">
                  Get Started
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
