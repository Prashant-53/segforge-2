import React from "react";
import DataLineageHero from "../../subPages/product/Lakehouse-Governance/hero";
import FullJourneySection from "../../subPages/product/Lakehouse-Governance/journey";
import ColumnLineageSection from "../../subPages/product/Lakehouse-Governance/columnLineage";
import ImpactAnalysisSection from "../../subPages/product/Lakehouse-Governance/impactAnalysis";
import GovernanceComplianceSection from "../../subPages/product/Lakehouse-Governance/governCompliance";
import MainLayout from "../../layouts/mainLayout";

const LakehouseGovernance = () => {
  return (
    <MainLayout>
      <DataLineageHero />
      <FullJourneySection />
      <ColumnLineageSection />
      <ImpactAnalysisSection />
      <GovernanceComplianceSection />
    </MainLayout>
  );
};

export default LakehouseGovernance;
