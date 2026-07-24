import React from "react";
import SelfHostedHero from "../../subPages/product/self-hosted/hero";
import DataSovereigntySection from "../../subPages/product/self-hosted/yourData";
import KubernetesSection from "../../subPages/product/self-hosted/deployAnywhere";
import OpenStandardsSection from "../../subPages/product/self-hosted/infrastructure";
import OperationsMonitoringSection from "../../subPages/product/self-hosted/deployment";
import { CTABanner } from "../../components/BottomCTA";

import MainLayout from "../../layouts/mainLayout";

const SelfHosted = () => {
  return (
    <MainLayout>
      <SelfHostedHero />
      <DataSovereigntySection />
      <KubernetesSection />
      <OpenStandardsSection />
      <OperationsMonitoringSection />
      <CTABanner />
    </MainLayout>
  );
};

export default SelfHosted;
