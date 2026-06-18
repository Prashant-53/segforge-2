import React from "react";
import IntegrationsHero from "../../subPages/solutions/Partner-Ecosystem/hero";
import IntegrationChallenge from "../../subPages/solutions/Deployment-Assistance/challenge";
import OpenIntegrationFramework from "../../subPages/solutions/Deployment-Assistance/answer";
import AnalyticsGovernanceConnectivity from "../../subPages/solutions/Deployment-Assistance/simulator";
import StorageFreedom from "../../subPages/solutions/Deployment-Assistance/built";
import IntegrationsCTA from "../../subPages/solutions/Deployment-Assistance/cta";
import MainLayout from "../../layouts/mainLayout";

const PartnerEcosystem = () => {
  return (
    <MainLayout>
      <IntegrationsHero />
      <IntegrationChallenge />
      <OpenIntegrationFramework />
      <AnalyticsGovernanceConnectivity />
      <StorageFreedom />
      <IntegrationsCTA />
    </MainLayout>
  );
};

export default PartnerEcosystem;
