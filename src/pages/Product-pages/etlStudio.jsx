import React from "react";
import ETLStudioHero from "../../subPages/product/ETL-Studio/hero";
import ETLWorkspace from "../../subPages/product/ETL-Studio/CapabilityOverview";
import TransformationEngine from "../../subPages/product/ETL-Studio/VisualPipelineBuilder";
import IntelligentEngineering from "../../subPages/product/ETL-Studio/IntelligentDataWorkflows";
import BatchStreaming from "../../subPages/product/ETL-Studio/batchStreaming";
import LakehouseDestinations from "../../subPages/product/ETL-Studio/lakehouseDestinations";
import ETLStudioFAQ from "../../subPages/product/ETL-Studio/faq";
import CTABanner from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const ETLSudio = () => {
  return (
    <MainLayout>
      <ETLStudioHero />
      <ETLWorkspace />
      <TransformationEngine />
      <IntelligentEngineering />
      <BatchStreaming />
      <LakehouseDestinations />
      {/* <ETLStudioFAQ /> */}
      <CTABanner />
    </MainLayout>
  );
};

export default ETLSudio;
