import React from "react";
import Hero from "../../subPages/product/notebook/hero";
import ExploreLakehouse from "../../subPages/product/notebook/exploreLakehouse";
import MultiEngineExecution from "../../subPages/product/notebook/multiEngineExecution";
import QueryToInsight from "../../subPages/product/notebook/queryToInsight";
import SavedQueriesCollaboration from "../../subPages/product/notebook/SavedQueriesCollaboration";
import CatalogNativeAnalytics from "../../subPages/product/notebook/catalogNativeAnalytics";
import NotebooksFAQ from "../../subPages/product/notebook/faq";
import { CTABanner } from "../../components/BottomCTA";
import MainLayout from "../../layouts/mainLayout";

const NoteBooks = () => {
  return (
    <MainLayout>
      <Hero />
      <MultiEngineExecution />
      <ExploreLakehouse />
      <QueryToInsight />
      <SavedQueriesCollaboration />
      <CatalogNativeAnalytics />
      {/* <NotebooksFAQ /> */}
      <CTABanner />
    </MainLayout>
  );
};

export default NoteBooks;
