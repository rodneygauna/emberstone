// Redirect to login page if user is not logged in (has no token)
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const useAuthRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
      toast.error("You must be logged in to view this page");
    }
  }, [navigate]);
};

export default useAuthRedirect;
