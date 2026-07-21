import React from "react";
import DataCatalogHero from "../../subPages/product/dataCatalog/hero";
import VersionControlSection from "../../subPages/product/dataCatalog/versionControl";
import CatalogExploration from "../../subPages/product/dataCatalog/catalogExploration";
import EnterpriseOperations from "../../subPages/product/dataCatalog/enterpriseOperations";
import OpenCatalogFoundation from "../../subPages/product/dataCatalog/openCatalogFoundation";
import CTABanner from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const DataCatalog = () => {
  return (
    <MainLayout>
      <DataCatalogHero />
      <VersionControlSection />
      <CatalogExploration />
      <EnterpriseOperations />
      <OpenCatalogFoundation />
      <CTABanner />
    </MainLayout>
  );
};

export default DataCatalog;
