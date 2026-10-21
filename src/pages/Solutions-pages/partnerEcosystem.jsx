import React from "react";
import IntegrationsHero from "../../subPages/solutions/Partner-Ecosystem/hero";
import IntegrationChallenge from "../../subPages/solutions/Deployment-Assistance/challenge";
import OpenIntegrationFramework from "../../subPages/solutions/Deployment-Assistance/answer";
import AnalyticsGovernanceConnectivity from "../../subPages/solutions/Deployment-Assistance/simulator";
import StorageFreedom from "../../subPages/solutions/Deployment-Assistance/built";
import CTA from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const PartnerEcosystem = () => {
  return (
    <MainLayout>
      <IntegrationsHero />
      <IntegrationChallenge />
      <OpenIntegrationFramework />
      <AnalyticsGovernanceConnectivity />
      <StorageFreedom />
      <CTA />
    </MainLayout>
  );
};

export default PartnerEcosystem;
