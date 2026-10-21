import React from "react";
import LakehouseHero from "../../subPages/product/data-Lakehouse/hero";
import ACIDCompliant from "../../subPages/product/data-Lakehouse/ACID";
import GitVersioning from "../../subPages/product/data-Lakehouse/gitVersioning";
import SmartRouter from "../../subPages/product/data-Lakehouse/smartRouter";
import OpenStandards from "../../subPages/product/data-Lakehouse/openStsndards";
import DataLakehouseFAQ from "../../subPages/product/data-Lakehouse/faq";
import CTABanner from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const DataLakeHouse = () => {
  return (
    <MainLayout>
      <LakehouseHero />
      <ACIDCompliant />
      <GitVersioning />
      <SmartRouter />
      <OpenStandards />
      {/* <DataLakehouseFAQ /> */}
      <CTABanner />
    </MainLayout>
  );
};

export default DataLakeHouse;
