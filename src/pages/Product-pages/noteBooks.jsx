import React from "react";
import Hero from "../../subPages/product/notebook/hero";
import InteractiveDevelopment from "../../subPages/product/notebook/interactiveDev";
import NotebookAutomation from "../../subPages/product/notebook/multiEngineExecution";
import CatalogNativeAnalytics from "../../subPages/product/notebook/catalogNativeAnalytics";
import { CTABanner } from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const NoteBooks = () => {
  return (
    <MainLayout>
      <Hero />
      <InteractiveDevelopment />
      <NotebookAutomation />
      <CatalogNativeAnalytics />
      <CTABanner />
    </MainLayout>
  );
};

export default NoteBooks;
