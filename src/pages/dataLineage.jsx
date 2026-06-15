import React from "react";
import DataLineageHero from "../subPages/product/data-lineage/hero";
import FullJourneySection from "../subPages/product/data-lineage/journey";
import ColumnLineageSection from "../subPages/product/data-lineage/columnLineage";
import ImpactAnalysisSection from "../subPages/product/data-lineage/impactAnalysis";
import GovernanceComplianceSection from "../subPages/product/data-lineage/governCompliance";
import MainLayout from "../layouts/mainLayout";

const DataLineage = () => {
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

export default DataLineage;
