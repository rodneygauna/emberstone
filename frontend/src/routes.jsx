import MainLayout from "./layouts/MainLayout";

// Pages - Auth
import LoginPage from "./pages/auth/LoginPage";
import RegistrationPage from "./pages/auth/RegistrationPage";
// Pages - Incidents
import IncidentsLandingPage from "./pages/incidents/IncidentsLandingPage";
// Pages - Settings - Department
import CreateDepartmentPage from "./pages/department/CreateDepartmentPage";
import EditDepartmentPage from "./pages/department/EditDepartmentPage";
// Pages - Settings - Stations
import CreateStationPage from "./pages/stations/CreateStationPage";

// Loaders
import { departmentLoader } from "./loaders/departmentLoader";
import { stationLoader } from "./loaders/stationLoader";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      // Routes - Auth
      { index: true, element: <LoginPage /> },
      { path: "register", element: <RegistrationPage /> },
      // Routes - Incidents
      { path: "incidents", element: <IncidentsLandingPage /> },
      // Routes - Settings - Department
      { path: "settings/department/add", element: <CreateDepartmentPage /> },
      {
        path: "settings/department/edit/:id",
        element: <EditDepartmentPage />,
        loader: departmentLoader,
      },
      // Routes - Settings - Stations
      { path: "settings/stations/add", element: <CreateStationPage /> },
    ],
  },
];
