import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaLinkedin, FaGithub, FaMailBulk } from "react-icons/fa";

export const Footer = () => {
  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg"></div>
              <span className="text-xl font-bold">SegForge</span>
            </div>
            <p className="text-slate-400 text-sm">
              Unified enterprise ETL, orchestration, AI, and open lakehouse
              platform.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <FaGithub className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <FaTwitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-slate-400 hover:text-cyan-400 transition-colors"
              >
                <FaMailBulk className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/platform"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Platform
                </Link>
              </li>
              <li>
                <Link
                  to="/platform/pipeline-studio"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Pipeline Studio
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Documentation
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Privacy
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Security
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-slate-400 hover:text-cyan-400 transition-colors text-sm"
                >
                  Compliance
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-slate-400 text-sm">
          <p>&copy; 2026 SegForge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
