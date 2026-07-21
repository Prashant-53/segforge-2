import React from "react";
import LakehouseHero from "../../subPages/product/data-Lakehouse/hero";
import NessieSection from "../../subPages/product/data-Lakehouse/openLakehouseFoundation";
import CatalogExplorerSection from "../../subPages/product/data-Lakehouse/catalogExplorerSection";
import IcebergSection from "../../subPages/product/data-Lakehouse/IcebergSection";
import DataSovereigntySection from "../../subPages/product/data-Lakehouse/dataSovereigntySection";
import CTABanner from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const DataLakeHouse = () => {
  return (
    <MainLayout>
      <LakehouseHero />
      <IcebergSection />
      <NessieSection />
      <CatalogExplorerSection />
      <DataSovereigntySection />
      <CTABanner />
    </MainLayout>
  );
};

export default DataLakeHouse;
