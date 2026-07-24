import React from "react";
import DataLineageHero from "../../subPages/product/Data-Lineage/hero";
import InteractiveLineageSection from "../../subPages/product/Data-Lineage/sensitiveDataTracking";
import AuditTrailSection from "../../subPages/product/Data-Lineage/auditTrail";
import ImpactAnalysisSection from "../../subPages/product/Data-Lineage/governanceAccess";
import GovernanceComplianceSection from "../../subPages/product/Data-Lineage/dataProtection";
import OpenLineageSection from "../../subPages/product/Data-Lineage/lineage&Ecosystem";
import { CTABanner } from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const DataLineage = () => {
  return (
    <MainLayout>
      <DataLineageHero />
      <InteractiveLineageSection />
      <AuditTrailSection />
      <ImpactAnalysisSection />
      <GovernanceComplianceSection />
      <OpenLineageSection />
      <CTABanner />
    </MainLayout>
  );
};

export default DataLineage;
