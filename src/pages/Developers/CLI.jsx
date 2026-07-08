import React from "react";
import CLIHero from "../../subPages/Devlopers/CLI/hero";
import InstallationAuthentication from "../../subPages/Devlopers/CLI/install&Auh";
import CommandArchitecture from "../../subPages/Devlopers/CLI/commandArchitecture";
import DevOpsRecipes from "../../subPages/Devlopers/CLI/recipies";
import DocumentationHelp from "../../subPages/Devlopers/CLI/documentation&Help";
import MainLayout from "../../layouts/mainLayout";

const CLI = () => {
  return (
    <MainLayout>
      <CLIHero />
      <InstallationAuthentication />
      <CommandArchitecture />
      <DevOpsRecipes />
      <DocumentationHelp />
    </MainLayout>
  );
};

export default CLI;
