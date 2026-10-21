import React from "react";
import Hero from "../../subPages/product/SQL-Worksheet/hero.jsx";
import SQLConnectivity from "../../subPages/product/SQL-Worksheet/second.jsx";
import WorkAcrossDataObjects from "../../subPages/product/SQL-Worksheet/third.jsx";
import QueryToInsight from "../../subPages/product/SQL-Worksheet/fourth.jsx";
import SQLWorksheetsFAQ from "../../subPages/product/SQL-Worksheet/faq.jsx";
import { CTABanner } from "../../components/BottomCTA";

import MainLayout from "../../layouts/mainLayout";

const SQLWorksheet = () => {
  return (
    <MainLayout>
      <Hero />
      <SQLConnectivity />
      <WorkAcrossDataObjects />
      <QueryToInsight />
      {/* <SQLWorksheetsFAQ /> */}
      <CTABanner />
    </MainLayout>
  );
};

export default SQLWorksheet;
