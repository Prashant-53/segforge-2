import React from "react";
import FinancialServicesHero from "../../subPages/solutions/fin-services/hero";
import RegulatoryReporting from "../../subPages/solutions/fin-services/reporting";
import FragmentationChallenge from "../../subPages/solutions/fin-services/challenge";
import UnifiedFinancialPlatform from "../../subPages/solutions/fin-services/unifiedPlatform";
import FinancialUseCases from "../../subPages/solutions/fin-services/useCases";
import FinancialGovernance from "../../subPages/solutions/fin-services/tgc";
import FinancialDeployment from "../../subPages/solutions/fin-services/deploymentStats";
import CTA from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const FinancialServices = () => {
  return (
    <MainLayout>
      <FinancialServicesHero />
      <FragmentationChallenge />
      <UnifiedFinancialPlatform />
      <FinancialUseCases />
      <FinancialGovernance />
      <FinancialDeployment />
      <CTA />
    </MainLayout>
  );
};

export default FinancialServices;
