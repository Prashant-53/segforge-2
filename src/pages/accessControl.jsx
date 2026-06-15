import React from "react";
import SecurityHero from "../subPages/product/access-Control/hero";
import WorkspaceIsolationSection from "../subPages/product/access-Control/workspaceIsolation";
import RBACSection from "../subPages/product/access-Control/RBAC";
import IdentityAuthenticationSection from "../subPages/product/access-Control/accessAuthen";
import SecurityProtectionSection from "../subPages/product/access-Control/securityProtection";

import MainLayout from "../layouts/mainLayout";

const AccessControl = () => {
  return (
    <MainLayout>
      <SecurityHero />
      <WorkspaceIsolationSection />
      <RBACSection />
      <IdentityAuthenticationSection />
      <SecurityProtectionSection />
    </MainLayout>
  );
};

export default AccessControl;
