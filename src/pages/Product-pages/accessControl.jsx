import React from "react";
import AccessControlHero from "../../subPages/product/access-Control/hero";
import EnterpriseRolesSection from "../../subPages/product/access-Control/workspaceIsolation";
import RBACSection from "../../subPages/product/access-Control/RBAC";
import IdentitySSOSection from "../../subPages/product/access-Control/accessAuthen";
import WorkspaceSecuritySection from "../../subPages/product/access-Control/securityProtection";
import { CTABanner } from "../../components/BottomCTA";

import MainLayout from "../../layouts/mainLayout";

const AccessControl = () => {
  return (
    <MainLayout>
      <AccessControlHero />
      <RBACSection />
      <EnterpriseRolesSection />
      <IdentitySSOSection />
      <WorkspaceSecuritySection />
      <CTABanner />
    </MainLayout>
  );
};

export default AccessControl;
