import React from "react";
import DataCatalogHero from "../subPages/product/dataCatalog/hero";
import DiscoverAndUnderstandData from "../subPages/product/dataCatalog/discoverAndUnderstandData";
import LakehouseGovernance from "../subPages/product/dataCatalog/lakehouseGovernance";
import OpenCatalogFoundation from "../subPages/product/dataCatalog/openCatalogFoundation";
import MainLayout from "../layouts/mainLayout";

const DataCatalog = () => {
  return (
    <MainLayout>
      <DataCatalogHero />
      <DiscoverAndUnderstandData />
      <LakehouseGovernance />
      <OpenCatalogFoundation />
    </MainLayout>
  );
};

export default DataCatalog;
