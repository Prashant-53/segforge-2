import React from "react";
import LakehouseHero from "../subPages/product/data-Lakehouse/hero";
import OpenLakehouseFoundation from "../subPages/product/data-Lakehouse/openLakehouseFoundation";
import UnifiedDataIngestion from "../subPages/product/data-Lakehouse/unifiedDataIngestion";
import DiscoverGovernData from "../subPages/product/data-Lakehouse/discoverGovernData";
import AnalyticsWithoutCopies from "../subPages/product/data-Lakehouse/analyticsWithoutCopies";
import MainLayout from "../layouts/mainLayout";

const DataLakeHouse = () => {
  return (
    <MainLayout>
      <LakehouseHero />
      <OpenLakehouseFoundation />
      <UnifiedDataIngestion />
      <DiscoverGovernData />
      <AnalyticsWithoutCopies />
    </MainLayout>
  );
};

export default DataLakeHouse;
