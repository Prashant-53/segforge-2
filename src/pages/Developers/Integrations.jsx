import React from "react";
import IntegrationsHero from "../../subPages/Devlopers/Integrations/hero";
import InboundDataSources from "../../subPages/Devlopers/Integrations/dataSources";
import LakehouseInfrastructure from "../../subPages/Devlopers/Integrations/infrastrucutre";
import AnalyticsIntegrations from "../../subPages/Devlopers/Integrations/analytics&BiIntgrations";
import EnterpriseEcosystem from "../../subPages/Devlopers/Integrations/ecosystem";
import IntegrationMatrix from "../../subPages/Devlopers/Integrations/integrationMatriix";
import BuildCustomIntegrations from "../../subPages/Devlopers/Integrations/customIntegrations";
import MainLayout from "../../layouts/mainLayout";

const Integrations = () => {
  return (
    <MainLayout>
      <IntegrationsHero />
      <InboundDataSources />
      <LakehouseInfrastructure />
      <AnalyticsIntegrations />
      <EnterpriseEcosystem />
      <IntegrationMatrix />
      <BuildCustomIntegrations />
    </MainLayout>
  );
};

export default Integrations;
