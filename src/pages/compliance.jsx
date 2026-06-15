import React from "react";
import GovernanceHero from "../subPages/product/compliance/hero";
import SensitiveDataTrackingSection from "../subPages/product/compliance/sensitiveDataTracking";
import AuditTrailSection from "../subPages/product/compliance/auditTrail";
import GovernanceAccessSection from "../subPages/product/compliance/governanceAccess";
import DataProtectionSection from "../subPages/product/compliance/dataProtection";
import MainLayout from "../layouts/mainLayout";

const Compliance = () => {
  return (
    <MainLayout>
      <GovernanceHero />
      <SensitiveDataTrackingSection />
      <AuditTrailSection />
      <GovernanceAccessSection />
      <DataProtectionSection />
    </MainLayout>
  );
};

export default Compliance;
