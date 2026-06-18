import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "../pages/homePage";
import WhySegforge from "../pages/whySegforge";
import Product from "../pages/product";
import ETLStudio from "../subPages/product/ETL-Studio";
import WorkflowEngine from "../subPages/product/workFlowEngine";
import NoteBooks from "../pages/noteBooks";
import DataCatalog from "../pages/dataCatalog";
import MLOPs from "../pages/MLOPs";
import DataLakeHouse from "../pages/dataLakeHouse";
import RealTimeCDC from "../pages/realTimeCDC";
import Analytics from "../pages/analytics";
import DataLineage from "../pages/dataLineage";
import AccessControl from "../pages/accessControl";
import Compliance from "../pages/compliance";
import Observability from "../pages/observability";
import SelfHosted from "../pages/selfhosted";
import MultiCloud from "../pages/multiCloud";
import HybridInfrastructure from "../pages/hybridInfrastructure";
import FinancialServices from "../pages/Solutions-pages/financialServices";
import HealthCare from "../pages/Solutions-pages/healthCare";
import Retail from "../pages/Solutions-pages/retail";
import Manufacturing from "../pages/Solutions-pages/manufacturing";
import Technology from "../pages/Solutions-pages/technology";
import Telecom from "../pages/Solutions-pages/telecommunications";
import MigrationServices from "../pages/Solutions-pages/migrationServices";
import ArchitectureReview from "../pages/Solutions-pages/architectureReview";
import DeploymentAssistance from "../pages/Solutions-pages/architectureReview";
import PartnerEcosystem from "../pages/Solutions-pages/partnerEcosystem";
import DataEngineering from "../pages/Solutions-pages/dataengineering";
import AnalyticsTeam from "../pages/Solutions-pages/analyticsTeam";
import MLOPSTeam from "../pages/Solutions-pages/MlOPS-Teams";
function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product" element={<Product />} />

        <Route path="/why-segforge" element={<WhySegforge />} />
        <Route path="/product/ETL-Studio" element={<ETLStudio />} />
        <Route path="/product/workflow-engine" element={<WorkflowEngine />} />
        <Route path="/product/notebooks" element={<NoteBooks />} />
        <Route path="/product/data-Catalog" element={<DataCatalog />} />
        <Route path="/product/ml-ops" element={<MLOPs />} />
        <Route path="/product/data-lakehouse" element={<DataLakeHouse />} />
        <Route path="/product/real-time-cdc" element={<RealTimeCDC />} />
        <Route path="/product/analytics" element={<Analytics />} />
        <Route path="/product/data-lineage" element={<DataLineage />} />
        <Route path="/product/access-control" element={<AccessControl />} />
        <Route path="/product/compliance" element={<Compliance />} />
        <Route path="/product/observability" element={<Observability />} />
        <Route path="/product/self-hosted" element={<SelfHosted />} />
        <Route path="/product/multi-cloud" element={<MultiCloud />} />
        <Route
          path="/product/hybrid-infrastructure"
          element={<HybridInfrastructure />}
        />
        <Route path="/solutions/finance" element={<FinancialServices />} />
        <Route path="/solutions/healthcare" element={<HealthCare />} />
        <Route path="/solutions/retail" element={<Retail />} />
        <Route path="/solutions/manufacturing" element={<Manufacturing />} />
        <Route path="/solutions/technology" element={<Technology />} />
        <Route path="/solutions/telecommunications" element={<Telecom />} />
        <Route
          path="/solutions/data-enginnering"
          element={<DataEngineering />}
        />

        <Route
          path="/solutions/migration-services"
          element={<MigrationServices />}
        />
        <Route
          path="/solutions/architecture-review"
          element={<ArchitectureReview />}
        />
        <Route
          path="/solutions/deployment-assistance"
          element={<DeploymentAssistance />}
        />
        <Route
          path="/solutions/partner-ecosystem"
          element={<PartnerEcosystem />}
        />
        <Route
          path="/solutions/data-engineering"
          element={<DataEngineering />}
        />
        <Route path="/solutions/analytics-team" element={<AnalyticsTeam />} />
        <Route path="/solutions/ML-teams" element={<MLOPSTeam />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
