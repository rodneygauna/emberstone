import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <div className="container">
        <Outlet />
        <ToastContainer />
      </div>
    </>
  );
};

export default MainLayout;
