import React from "react";

import Navbar2 from "../components/layout/Navbar2";
import Footer from "../components/layout/Footer";

function MainLayout({ children }) {
  return (
    <div className="bg-secondary text-[#040914] min-h-screen overflow-x-hidden">
      <Navbar2 />

      <main>{children}</main>

      <Footer />
    </div>
  );
}

export default MainLayout;
