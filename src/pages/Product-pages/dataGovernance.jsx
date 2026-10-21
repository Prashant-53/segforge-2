import React from "react";
import DataGovernanceHero from "../../subPages/product/Data-Governance/hero.jsx";
import Second from "../../subPages/product/Data-Governance/second.jsx";
import Third from "../../subPages/product/Data-Governance/third.jsx";
import Fourth from "../../subPages/product/Data-Governance/fourth.jsx";
import Fifth from "../../subPages/product/Data-Governance/fifth.jsx";
import Sixth from "../../subPages/product/Data-Governance/sixth.jsx";
import { CTABanner } from "../../components/BottomCTA.jsx";
import MainLayout from "../../layouts/mainLayout.jsx";

const DataGovernance = () => {
  return (
    <MainLayout>
      <DataGovernanceHero />
      <Second />
      <Third />
      <Fourth />
      <Fifth />
      <Sixth />
      <CTABanner />
    </MainLayout>
  );
};

export default DataGovernance;
