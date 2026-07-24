import React from "react";
import GovernanceHero from "../../subPages/product/Lakehouse-Governance/hero";
import GitForDataSection from "../../subPages/product/Lakehouse-Governance/journey";
import ZeroCopyBranchingSection from "../../subPages/product/Lakehouse-Governance/columnLineage";
import TimeTravelSection from "../../subPages/product/Lakehouse-Governance/impactAnalysis";
import EnterpriseGovernanceSection from "../../subPages/product/Lakehouse-Governance/governCompliance";
import MainLayout from "../../layouts/mainLayout";
import { CTABanner } from "../../components/BottomCTA";

const LakehouseGovernance = () => {
  return (
    <MainLayout>
      <GovernanceHero />
      <GitForDataSection />
      <ZeroCopyBranchingSection />
      <TimeTravelSection />
      <EnterpriseGovernanceSection />
      <CTABanner />
    </MainLayout>
  );
};

export default LakehouseGovernance;
