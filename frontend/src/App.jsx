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
import useAppLoaders from "./loaders";

function App() {
  const hooks = useAppHooks();
  const loaders = useAppLoaders();

  const router = createBrowserRouter(
    createRoutesFromElements(createRoutes(hooks, loaders))
  );

  return <RouterProvider router={router} />;
}

export default App;
