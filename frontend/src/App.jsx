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

// App
function App() {
  // Routes for pages
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<LoginPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
