import { createBrowserRouter, RouterProvider } from "react-router-dom";

// CSS
import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import "./assets/css/custom.css";

// Routes
import { routes } from "./routes";

function App() {
  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
}

export default App;
