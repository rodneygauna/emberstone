import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

// CSS
import "./assets/css/normalize.css";
import "./assets/css/skeleton.css";
import "./assets/css/custom.css";

// Routes and Hooks
import createRoutes from "./routes";
import useAppHooks from "./hooks";

function App() {
  const hooks = useAppHooks();

  const router = createBrowserRouter(
    createRoutesFromElements(createRoutes(hooks))
  );

  return <RouterProvider router={router} />;
}

export default App;
