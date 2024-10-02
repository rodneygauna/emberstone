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

// Hooks - Auth
import useUserAuth from "./hooks/auth/userAuth";
import useUserRegister from "./hooks/auth/userRegister";

// App
function App() {
  const { loginUser } = useUserAuth();
  const { registerUser } = useUserRegister();

  // Routes for pages
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LoginPage userLoginSubmit={loginUser} />} />
        <Route
          path="/register"
          element={<RegistrationPage userRegistrationSubmit={registerUser} />}
        />
        <Route path="/incidents" element={<IncidentsLandingPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
