import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// Import CSS
import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import "./assets/css/custom.css";

// Import Page Layouts
import MainLayout from "./layouts/MainLayout";

// Pages - Login and Registration
import LoginPage from "./pages/auth/LoginPage";
import RegistrationPage from "./pages/auth/RegistrationPage";
// Pages - Incidents
import IncidentsLandingPage from "./pages/incidents/IncidentsLandingPage";
// Pages - Settings - Department
import CreateDepartmentPage from "./pages/department/CreateDepartmentPage";

// Hooks - Auth
import useUserAuth from "./hooks/auth/userAuth";
import useUserRegister from "./hooks/auth/userRegister";
// Hooks - Settings - Department
import useDepartmentAdd from "./hooks/department/departmentAdd";

// App
function App() {
  // Auth hooks
  const { loginUser } = useUserAuth();
  const { registerUser } = useUserRegister();
  // Settings - Department hooks
  const { addDepartment } = useDepartmentAdd();

  // Routes for pages
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        {/*Routes - Auth*/}
        <Route index element={<LoginPage userLoginSubmit={loginUser} />} />
        <Route
          path="/register"
          element={<RegistrationPage userRegistrationSubmit={registerUser} />}
        />
        {/*Routes - Incidents*/}
        <Route path="/incidents" element={<IncidentsLandingPage />} />
        {/*Routes - Settings - Department*/}
        <Route
          path="/settings/department/add"
          element={<CreateDepartmentPage departmentAddSubmit={addDepartment} />}
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
