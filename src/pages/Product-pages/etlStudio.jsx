import React from "react";
import ETLStudioHero from "../../subPages/product/ETL-Studio/hero";
import ETLWorkspace from "../../subPages/product/ETL-Studio/drag-n-drop";
import TransformationEngine from "../../subPages/product/ETL-Studio/tranformationEngine";
import IntelligentEngineering from "../../subPages/product/ETL-Studio/features";
import DualExecutionEngine from "../../subPages/product/ETL-Studio/dualEngine";
import LakehouseDestinations from "../../subPages/product/ETL-Studio/lakehouseDestinations";
import CTABanner from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const ETLSudio = () => {
  return (
    <MainLayout>
      <ETLStudioHero />
      <ETLWorkspace />
      <TransformationEngine />
      <IntelligentEngineering />
      <DualExecutionEngine />
      <LakehouseDestinations />
      <CTABanner />
    </MainLayout>
  );
};

export default ETLSudio;
