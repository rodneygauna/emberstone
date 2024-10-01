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

// Pages - Login
import LoginPage from "./pages/auth/LoginPage";

// Hooks - Auth
import useUserAuth from "./hooks/auth/userAuth";

// App
function App() {
  const { loginUser } = useUserAuth();

  // Routes for pages
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LoginPage userLoginSubmit={loginUser} />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
