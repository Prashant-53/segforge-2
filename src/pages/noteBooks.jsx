import React from "react";
import Hero from "../subPages/product/notebook/hero";
import InteractiveDevelopment from "../subPages/product/notebook/interactiveDev";
import MultiEngineExecution from "../subPages/product/notebook/multiEngineExecution";
import CatalogNativeAnalytics from "../subPages/product/notebook/catalogNativeAnalytics";
import { CTABanner } from "../components/BottomCTA";
import MainLayout from "../layouts/mainLayout";

const NoteBooks = () => {
  return (
    <MainLayout>
      <Hero />
      <InteractiveDevelopment />
      <MultiEngineExecution />
      <CatalogNativeAnalytics />
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white-900">
        <CTABanner />
      </section>{" "}
    </MainLayout>
  );
};

export default NoteBooks;
