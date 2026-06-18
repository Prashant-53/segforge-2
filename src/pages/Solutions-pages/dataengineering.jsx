import React from "react";
import DataEngineeringHero from "../../subPages/solutions/Data-Engineering/hero";
import ETLStudio from "../../subPages/solutions/Data-Engineering/etl-studio";
import AutomatedIngestion from "../../subPages/solutions/Data-Engineering/ingestion";
import ModernLakehouse from "../../subPages/solutions/Data-Engineering/lakehouse";
import ResilientOrchestrationMonitoring from "../../subPages/solutions/Data-Engineering/monitoring";
import PipelineBlueprintGallery from "../../subPages/solutions/Data-Engineering/piplelineGallery";
import DataEngineeringCTA from "../../subPages/solutions/Data-Engineering/cta";
import MainLayout from "../../layouts/mainLayout";

const DataEngineering = () => {
  return (
    <MainLayout>
      <DataEngineeringHero />
      <ETLStudio />
      <AutomatedIngestion />
      <ModernLakehouse />
      <ResilientOrchestrationMonitoring />
      <PipelineBlueprintGallery />
      <DataEngineeringCTA />
    </MainLayout>
  );
};

export default DataEngineering;
