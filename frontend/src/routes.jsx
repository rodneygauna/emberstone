import { Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";

// Pages - Auth
import LoginPage from "./pages/auth/LoginPage";
import RegistrationPage from "./pages/auth/RegistrationPage";
// Pages - Incidents
import IncidentsLandingPage from "./pages/incidents/IncidentsLandingPage";
// Pages - Settings - Department
import CreateDepartmentPage from "./pages/department/CreateDepartmentPage";
// Pages - Settings - Stations
import CreateStationPage from "./pages/stations/CreateStationPage";

const createRoutes = (hooks) => (
  <Route path="/" element={<MainLayout />}>
    {/* Routes - Auth */}
    <Route index element={<LoginPage userLoginSubmit={hooks.loginUser} />} />
    <Route
      path="/register"
      element={<RegistrationPage userRegistrationSubmit={hooks.registerUser} />}
    />
    {/* Routes - Incidents */}
    <Route path="/incidents" element={<IncidentsLandingPage />} />
    {/* Routes - Settings - Department */}
    <Route
      path="/settings/department/add"
      element={
        <CreateDepartmentPage departmentAddSubmit={hooks.addDepartment} />
      }
    />
    {/* Routes - Settings - Stations */}
    <Route
      path="/settings/stations/add"
      element={<CreateStationPage stationAddSubmit={hooks.addStation} />}
    />
  </Route>
);

export default createRoutes;
